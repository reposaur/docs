# `test`

## Usage

```bash
rsr test [-o OUTPUT] POLICY_PATH...
```

## Description

Runs the tests available in the policy paths specified.

## Example

```bash
$ rsr test
0:00AM INF data.repository.test_empty_description_should_fail: PASS (915µs)
0:00AM INF data.repository.test_with_description_should_pass: PASS (54.125µs)
0:00AM INF done failed=0 passed=2 timeEllapsed=1.9335 total=2
```

## Flags

| Name           | Description                                        |
| -------------- | -------------------------------------------------- |
| `-o, --output` | Output filename. Defaults to standard output (`-`) |
| `-t, --trace`  | Enable tracing. Defaults to `false`                |
