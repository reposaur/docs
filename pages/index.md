# Reposaur

<p className="flex h-6">
  <img alt="latest-release" src="https://badgen.net/github/release/reposaur/reposaur" className="inline-block mr-2"/>
  <img alt="stars" src="https://badgen.net/github/stars/reposaur/reposaur" className="inline-block mr-2"/>
  <img alt="contributors" src="https://badgen.net/github/contributors/reposaur/reposaur" className="inline-block mr-2"/>
  <img alt="license" src="https://badgen.net/github/license/reposaur/reposaur" className="inline-block mr-2"/>
  <a href="https://join.slack.com/t/reposaur/shared_invite/zt-18kegr2sm-I50S~8TjnwOXITSvoa4DbA" className="inline-block mr-2">
    <img alt="slack" src="https://badgen.net/badge/slack/%40reposaur?icon=slack" />
  </a>
</p>

**Reposaur** is a tool to audit your GitHub repositories, pull requests and
issues against custom policies, validating they follow your organization's
security and best practices guidelines.

Policies are written in the well-known Rego language and enable different
organizations to express their specific rules and guidelines through code.
Apart from custom policies, users can benefit from a comprehensive library of
common rules that can be re-used or adapted to different use cases.

A simple policy with a single rule looks like this:

```rego
# ./policy/repository.rego
package repository

# METADATA
# title: Repository default branch is not protected
# description: >
#  The repository default branch isn't protected meaning anyone with `write`
#  access can commit directly to the branch.
violation_default_branch_not_protected {
	resp := github.request("GET /repos/{owner}/{repo}/{branch}/protection", {
		"owner": input.owner.login,
		"repo": input.name,
		"branch": input.default_branch,
	})

	resp.status != 200
}
```

Using the CLI, it can be executed against a repository like:

```bash
$ gh api /repos/reposaur/reposaur | rsr exec
```

Which will result in the following SARIF report:

```json
{
  "version": "2.1.0",
  "$schema": "https://json.schemastore.org/sarif-2.1.0-rtm.5.json",
  "runs": [
    {
      "tool": {
        "driver": {
          "informationUri": "https://github.com/reposaur/reposaur",
          "name": "Reposaur",
          "rules": [
            {
              "id": "repository/violation/default_branch_not_protected",
              "name": "Repository default branch is not protected",
              "shortDescription": {
                "text": "Repository default branch is not protected"
              },
              "fullDescription": {
                "text": "The repository default branch isn't protected meaning anyone with `write` access can commit directly to the branch.\n",
                "markdown": "The repository default branch isn't protected meaning anyone with `write` access can commit directly to the branch.\n"
              },
              "help": {
                "markdown": "The repository default branch isn't protected meaning anyone with `write` access can commit directly to the branch.\n"
              },
              "properties": {
                "security-severity": "7"
              }
            }
          ]
        }
      },
      "results": [
        {
          "ruleId": "repository/violation/default_branch_not_protected",
          "ruleIndex": 0,
          "level": "error",
          "message": {
            "text": "Repository default branch is not protected"
          },
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {
                  "uri": "."
                }
              }
            }
          ]
        }
      ],
      "properties": {
        "default_branch": "main",
        "owner": "reposaur",
        "repo": "reposaur"
      }
    }
  ]
}
```

The same policy can be run against multiple repositories at once, for example:

```shell
$ gh /orgs/reposaur/repos --paginate | rsr exec
# { ... }
# { ... }
# { ... }
```
