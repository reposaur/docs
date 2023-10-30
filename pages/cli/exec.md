# `exec`

## Usage

```bash
rsr exec [-p POLICY_PATH...] [-o OUTPUT] INPUT
```

## Description

Executes policies against input data. The input defaults to standard input.
Output will be one or more SARIF reports.

## Example

```bash
$ gh api /repos/reposaur/reposaur | rsr exec
# { ... }

$ gh api /orgs/reposaur/repos | rsr exec
# { ... }
# { ... }
# { ... }

$ rsr exec repo.json
# {...}
```

## Flags

| Name           | Description                                                                |
| -------------- | -------------------------------------------------------------------------- |
| `-o, --output` | Output filename. Defaults to standard output (`-`)                         |
| `-p, --policy` | Path to policy files or directories. Defaults to current working directory |
| `-t, --trace`  | Enable tracing. Defaults to `false`                                        |
