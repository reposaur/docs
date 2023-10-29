# Namespaces

Reposaur uses the concept of _namespaces_ to decide which policies it should use
against a particular set of data.

For example, if the data provided is detected to be of the GitHub repository type,
only policies under the `github.repository` namespace will be executed.

## Supported Namespaces

| Name                  | Description                                 |
| --------------------- | ------------------------------------------- |
| `github.issue`        | Represents a [GitHub Issue][gh-issue]       |
| `github.organization` | Represents a [GitHub Organization][gh-org]  |
| `github.pull_request` | Represents a [GitHub Pull Request][gh-pull] |
| `github.repository`   | Represents a [GitHub Repository][gh-repo]   |
| `github.user`         | Represents a [GitHub User][gh-user]         |

[gh-issue]: https://docs.github.com/en/rest/issues/issues#get-an-issue
[gh-org]: https://docs.github.com/en/rest/orgs/orgs#get-an-organization
[gh-pull]: https://docs.github.com/en/rest/pulls/pulls
[gh-repo]: https://docs.github.com/en/rest/repos/repos#get-a-repository
[gh-user]: https://docs.github.com/en/rest/users/users#get-a-user
