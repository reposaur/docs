# Built-in Functions

## `github.graphql`

Executes an HTTP request against the [GitHub GraphQL API][gh-graphql-api] and returns
the status code and response body.

### Example

```rego
query := `
	query($owner: String!, $name: String!) {
		repository(owner: $owner, name: $name) {
			name
		}
	}
`

vars := {
	"owner": "reposaur",
	"name": "reposaur",
}

response := github.graphql(query, vars)

response.status == 200
response.body.data.repository.name == "reposaur"
```

## `github.request`

Executes an HTTP request against the [GitHub REST API][gh-rest-api] and returns
the status code and response body.

Usage is similar to the [Octokit.js][octokit.js] library and most documentation examples
can be translated 1-1 to `github.request`.

### Example

```rego
response := github.request("GET /repos/{owner}/{repo}", {
	"owner": "reposaur",
	"repo": "reposaur",
})

response.status == 200
response.body.name == "reposaur"
```

[gh-rest-api]: https://docs.github.com/en/rest
[octokit.js]: https://github.com/octokit/octokit.js
