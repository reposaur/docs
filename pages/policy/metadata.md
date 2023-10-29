# Metadata

Policies support metadata to enhance a rule's context. Metadata sections
are placed immediately above a rule, inside a comment and start with the
`METADATA` keyword.

## Example

```rego
package github.repository

# METADATA
# title: Forking is enabled
# description: >
#   The repository has forking enabled, which means any member of the organization could
#   fork it to their own account and change it's visibility to be _public_.
#
#   ### Fix
#
#   1. Go to the repository's settings
#
#   3. Uncheck the "Allow forking" option
# custom:
#   tags: [security]
#   security-severity: 9
violation_forking_enabled {
	input.allow_forking
}
```

<details>
<summary>Click to see how the rule looks like in a SARIF report</summary>

```json
{
  "id": "repository/violation/forking_enabled",
  "name": "Forking is enabled",
  "shortDescription": {
    "text": "Forking is enabled"
  },
  "fullDescription": {
    "text": "The repository has forking enabled, which means any member of the organization could fork it to their own account and change it's visibility to be _public_.\n### Fix\n1. Go to the repository's settings\n3. Uncheck the \"Allow forking\" option\n",
    "markdown": "The repository has forking enabled, which means any member of the organization could fork it to their own account and change it's visibility to be _public_.\n### Fix\n1. Go to the repository's settings\n3. Uncheck the \"Allow forking\" option\n"
  },
  "help": {
    "markdown": "The repository has forking enabled, which means any member of the organization could fork it to their own account and change it's visibility to be _public_.\n### Fix\n1. Go to the repository's settings\n3. Uncheck the \"Allow forking\" option\n"
  },
  "properties": {
    "security-severity": "9",
    "tags": ["security"]
  }
}
```

</details>
