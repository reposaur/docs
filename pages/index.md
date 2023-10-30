---
title: Documentation
---

import Callout from 'nextra-theme-docs/callout'

<div align="center" className="pt-6">
  <img alt="logo" src="https://user-images.githubusercontent.com/8532541/169531963-bafd3cbf-dadd-486d-83cc-10a4d39c1dbc.png" />

# Reposaur

  <p>
    <a href="https://goreportcard.com/report/github.com/reposaur/reposaur" className="mr-2">
      <img alt="go-report" src="https://goreportcard.com/badge/github.com/reposaur/reposaur?style=flat-square&color=blueviolet" className="inline-block" />
    </a>
    <a href="https://github.com/reposaur/reposaur/blob/main/LICENSE" className="mr-2">
      <img alt="license" src="https://img.shields.io/github/license/reposaur/reposaur?style=flat-square&color=blueviolet" className="inline-block" />
    </a>
    <a href="https://github.com/orgs/reposaur/discussions" className="mr-2">
      <img alt="discussions" src="https://img.shields.io/github/discussions/reposaur/reposaur?style=flat-square&color=blueviolet" className="inline-block" />
    </a>
    <a href="https://slack.reposaur.com" className="mr-2">
      <img alt="slack" src="https://img.shields.io/badge/slack-%40reposaur-blueviolet?style=flat-square" className="inline-block" />
    </a>
    <a href="https://twitter.com/reposaurhq" className="mr-2">
      <img alt="twitter" src="https://img.shields.io/badge/twitter-%40reposaurhq-blueviolet?style=flat-square" className="inline-block" />
    </a>
  </p>

**Reposaur is the open source compliance tool for development platforms.**

Audit, verify and report on your data and configurations easily with pre-defined
and/or custom policies. <br /> Supports GitHub. GitLab, BitBucket and Gitea
support soon.

</div>

---

<Callout emoji="⚠">
  From `0.7.0` onwards, policies namespaces must be prefixed with a provider name.
  For example, policies with the `repository` namespace are now `github.repository`.
  This change allows new providers to be added easily without namespaces colliding.
</Callout>

### Quick Start

See also our [Writing your first policy guide]() for a more in-depth walkthrough.

1. Install the CLI in your machine (see [Installation](/installation) for available options)
2. Write your first policy:

```rego
# ./repository.rego
package github.repository

innersource_files := ["README.md", "CONTRIBUTING.md", "LICENSE"]

# METADATA
# title: Repository is not InnerSource ready
# description: |-
#   InnerSource repositories (that have the `innersource` topic) must have all of
#   these files: `README.md`, `CONTRIBUTING.md` and `LICENSE`, and at least one
#   of them is missing.
note_not_innersource_ready {
	# check if repository has the innersource topic
	input.topics[_] == "innersource"

	# fetch all the root files
	resp := github.request("GET /repos/{owner}/{repo}/contents", {
		"owner": input.owner.login,
		"repo": input.name,
	})

	# count how many of the files belong to the required files list
	total_innersource_files = count([f | f := resp.body[_].name == innersource_files[_]; f])

	# if the total files differs from the total required files the repository
	# is missing some of them and is not InnerSource ready
	total_innersource_files != count(innersource_files)
}
```

3. Execute the policy against a repository:

```shell
$ gh api /repos/reposaur/test | rsr exec
```

The following SARIF report will be outputted:

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
              "id": "github.repository/note/not_innersource_ready",
              "name": "Repository is not InnerSource ready",
              "shortDescription": {
                "text": "Repository is not InnerSource ready"
              },
              "fullDescription": {
                "text": "InnerSource repositories (that have the `innersource` topic) must have all of\nthese files: `README.md`, `CONTRIBUTING.md` and `LICENSE`, and at least one\nof them is missing.",
                "markdown": "InnerSource repositories (that have the `innersource` topic) must have all of\nthese files: `README.md`, `CONTRIBUTING.md` and `LICENSE`, and at least one\nof them is missing."
              },
              "help": {
                "markdown": "InnerSource repositories (that have the `innersource` topic) must have all of\nthese files: `README.md`, `CONTRIBUTING.md` and `LICENSE`, and at least one\nof them is missing."
              },
              "properties": {
                "security-severity": "1"
              }
            }
          ]
        }
      },
      "results": [
        {
          "ruleId": "github.repository/note/not_innersource_ready",
          "ruleIndex": 0,
          "level": "note",
          "message": {
            "text": "Repository is not InnerSource ready"
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
        "repo": "test"
      }
    }
  ]
}
```

[website]: https://reposaur.com
[docs]: https://docs.reposaur.com
[docs-policy]: https://docs.reposaur.com/policy
[docs-cli]: https://docs.reposaur.com/cli/exec
[issues]: https://github.com/reposaur/reposaur/issues
[pulls]: https://github.com/reposaur/reposaur/pulls
[logo]: https://user-images.githubusercontent.com/8532541/169531963-bafd3cbf-dadd-486d-83cc-10a4d39c1dbc.png
[rego]: https://www.openpolicyagent.org/docs/latest/policy-language/
[license]: https://github.com/reposaur/reposaur/blob/main/LICENSE
[license-badge]: https://img.shields.io/github/license/reposaur/reposaur?style=flat-square&color=blueviolet
[go-report]: https://goreportcard.com/report/github.com/reposaur/reposaur
[go-report-badge]: https://goreportcard.com/badge/github.com/reposaur/reposaur?style=flat-square&color=blueviolet
[tests-workflow]: https://github.com/reposaur/reposaur/actions/workflows/test.yml
[tests-workflow-badge]: https://img.shields.io/github/workflow/status/reposaur/reposaur/Test?label=tests&style=flat-square
[discussions]: https://github.com/orgs/reposaur/discussions
[discussions-badge]: https://img.shields.io/github/discussions/reposaur/reposaur?style=flat-square&color=blueviolet
[slack-invite]: https://slack.reposaur.com
[slack-badge]: https://img.shields.io/badge/slack-%40reposaur-blueviolet?style=flat-square
[twitter]: https://twitter.com/reposaurhq
[twitter-badge]: https://img.shields.io/badge/twitter-%40reposaurhq-blueviolet?style=flat-square
[github]: https://github.com
[github-app]: https://docs.reposaur.com/integrations/github-app
[github-actions]: https://docs.reposaur.com/integrations/github-actions
[github-provider]: https://docs.reposaur.com/integrations/github-provider
[gitlab]: https://gitlab.com
[gitea]: https://gitea.io
[bitbucket]: https://bitbucket.org
[releases]: https://github.com/reposaur/reposaur/releases/latest
