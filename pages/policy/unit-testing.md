# Unit Testing

Policies can be easily tested to guarantee they're working as expected. Test modules
must have the `_test` suffix (i.e. `repository_test.rego`) and the test rules
must be prefixed with `test_`.

## Example

### Policy Module

**./innersource.rego**

```rego
package github.repository

note_empty_description {
	input.description == ""
}
```

### Test Module

**./innersource_test.rego**

```rego
package github.repository

test_empty_description_should_fail {
	note_empty_description with input.description as ""
}

test_with_description_should_pass {
	not note_empty_description with input.description as "some description"
}
```

### Executing

Tests are executed using the `test` command:

```bash
$ rsr test
0:00AM INF data.repository.test_empty_description_should_fail: PASS (915µs)
0:00AM INF data.repository.test_with_description_should_pass: PASS (54.125µs)
0:00AM INF done failed=0 passed=2 timeEllapsed=1.9335 total=2
```
