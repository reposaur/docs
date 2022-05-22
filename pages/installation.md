# Installation

## Homebrew Tap

```bash
$ brew install reposaur/tap/reposaur
```

## DEB, RPM and APK Packages

Download the `.deb`, `.rpm` or `.apk` packages from the [releases page][releases]
and install them with the appropriate tools.

## Go

```bash
$ go install github.com/reposaur/reposaur/cmd/rsr@latest
```

## Script

```bash
$ curl -o- https://raw.githubusercontent.com/reposaur/reposaur/main/install.sh | bash
```

The script will download the latest release and put the binary at the current
working directory. It doesn't install them in the system.

## Binary

Visit the [releases page][releases] and download the `.tar.gz` file that has your
system's name and architecture.

[releases]: https://github.com/reposaur/reposaur/releases