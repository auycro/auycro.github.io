---
layout: post
title: "Set up multiple ssh keys for separate GitHub's repository"
date: 2020-02-20
keywords: ",git,CI,GitHub"
---

### Prerequisite:

1. GitHub repository

2. SSH public and private key

3. `~/.ssh/config`

```
Host foobar-repository
  HostName github.com
  User git
  IdentityFile ~/.ssh/github-deploy-id_rsa
```

### How to:

1. Add public key to repository deploy key.

    GitHub Repository > Settings > Deploy Keys > Add deploy key

2. Switch remote URLs to new Host as config file

    2.1 check current remote Url: `git remote -v`

```
$ git remote -v
origin  git@github.com:auycro/temporary-repo.git (fetch)
origin  git@github.com:auycro/temporary-repo.git (push)
```

    2.2 switch remote `git remote set-url {{url}}` by using `~/.ssh/config` to replace it.

```
$ git remote set-url origin foobar-repository:auycro/temporary-repo.git
$ git remote -v
origin  foobar-repository:auycro/temporary-repo.git (fetch)
origin  foobar-repository:auycro/temporary-repo.git (push)
```

3. Check remote Url by using `git fetch`
