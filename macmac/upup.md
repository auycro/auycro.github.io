# Start MAC setup

## Table of Contents

- [Start MAC Setup](#start-mac-setup)
  - [Brewwww](#brewwww)
    - [Lightweight Docker](#lightweight-docker)
    - [Node as Pro](#node-as-pro)
- [VSCode](#vscode)

## Brewwww

### Lightweight Docker

```
$ brew install docker docker-compose colima
$ colima start
```
### Node as Pro

```
$ brew install fnm
$ echo 'eval "$(fnm env --use-on-cd)"' >> ~/.zshrc
$ source ~/.zshrc
$ fnm install --lts
```

## VSCode

