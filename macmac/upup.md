# Mac setup

## Table of Contents

- [Mac Setup](#mac-setup)
  - [Brewwww](#brewwww)
    - [Docker Desktop No More](#docker-desktop-no-more)
    - [Node Noob](#node-noob)
    - [Pyenv](#pyenv)
  - [VSCodeeee](#vscodeeee)
    - [Code Code Cpde](#code-code-code) 

## Brewwww

### Docker Desktop No more

https://github.com/abiosoft/colima

```
$ brew install docker docker-compose colima
$ colima start
```
### Node Noob

https://github.com/Schniz/fnm

```
$ brew install fnm
$ echo 'eval "$(fnm env --use-on-cd)"' >> ~/.zshrc
$ source ~/.zshrc
$ fnm install --lts
```

### Pyenv

```
$ brew install xz
$ brew install pyenv

$ echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
$ echo '[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
$ echo 'eval "$(pyenv init -)"' >> ~/.zshrc
$ source ~/.zshrc

$ pyenv install 3.12
$ pyenv global 3.12
```

## VSCodeeee

### Code Code Code

https://code.visualstudio.com/docs/setup/mac#_launch-vs-code-from-the-command-line



