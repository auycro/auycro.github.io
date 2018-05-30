---
layout: post
title: "Setting up kyototycoon in CentOS"
date: 2018-05-30
keywords: ",Kyoto Tycoon,CentOS,Key-Value DB"
---

Kyoto Tycoon

What is Kyoto Tycoon? 
http://fallabs.com/kyototycoon/

How to Set up?

1. Install build tools
```
    $ yum install gcc gcc-c++ zlib-devel
```

2. Install kyoto cabinet
```
    $ cd /usr/src
    $ wget http://fallabs.com/kyotocabinet/pkg/kyotocabinet-1.2.76.tar.gz [^]
    $ tar xzvf kyotocabinet-1.2.76.tar.gz
    $ cd kyotocabinet-1.2.76
    $ ./configure
    $ make
    $ make install
```

3. Install kyoto tycoon 
```
    $ wget http://fallabs.com/kyototycoon/pkg/kyototycoon-0.9.56.tar.gz [^]
    $ tar xzvf kyototycoon-0.9.56.tar.gz
    $ cd kyototycoon-0.9.56
    $ ./configure
    $ make
```
Then you will find an error!
```
    ktdbext.h:274:29: エラー: ‘getpid’ was not declared in this scope
       uint32_t pid = getpid() & kc::UINT16MAX;
```
Lets edit `ktdbext.h`.
```
    $ vi ktdbext.h
        #include <unistd.h> <= Add THIS
```
`make` again then install
```
    $ make
    $ make install
```

4. Test ktserver 
```
    $ ktserver --versions
```
Threre're missing libraries
```
ktserver: error while loading shared libraries: libkyototycoon.so.2: cannot open shared object file: No such file or directory
```
Edit dynamic linker
```
    $ vi /etc/ld.so.conf
    /usr/local/lib  <= Add THIS
```
Test again
```
$ ktserver --versions
```

:)
