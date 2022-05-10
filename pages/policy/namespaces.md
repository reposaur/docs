# Namespaces

Reposaur uses the concept of _namespaces_ to decide which policies it should use
against a particular set of data.

For example, if the data provided is detected to be of the repository type, only
policies under the `repository` namespace will be executed.

We provide functionality to detect namespaces for the supported types of data,
listed below. For unsupported types, the user can specify a namespace manually.

## Supported Namespaces

| Name           | Description                              |
| -------------- | ---------------------------------------- |
| `issue`        | Represents a [GitHub Issue][issue]       |
| `organization` | Represents a [GitHub Organization][org]  |
| `pull_request` | Represents a [GitHub Pull Request][pull] |
| `repository`   | Represents a [GitHub Repository][repo]   |
| `user`         | Represents a [GitHub User][user]         |

[issue]: https://docs.github.com/en/rest/issues/issues#get-an-issue
[org]: https://docs.github.com/en/rest/orgs/orgs#get-an-organization
[pull]: https://docs.github.com/en/rest/pulls/pulls
[repo]: https://docs.github.com/en/rest/repos/repos#get-a-repository
[user]: https://docs.github.com/en/rest/users/users#get-a-user
