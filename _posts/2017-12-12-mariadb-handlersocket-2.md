---
layout: post
title: "Using handlersocket in mariadb"
date: 2017-11-29
keywords: ",MariaDB,MySQL,HandlerSocket"
---

[Previous](https://auycro.github.io/blog/2017/11/29/mariadb-handlersocket)

下記は、LinuxでWriterのポートに接続です。
※port = etc/mysql/でconfig設定しています。
1. Connecting <br/>
```
$ nc -v 192.168.xx.xxx 9999
Connection to 192.168.42.105 9998 port [tcp/*] succeeded!
```

2. Create Index <br/>
`P {cmd_index_なんでも} {DB} {table} {index_name} {columns:[,]区切}`

```
$ P       3       test EMPLOYEE   PRIMARY EMPLOYEE_ID,EMPLOYEE_NO,EMPLOYEE_NAME
0 1
```

3. Insert <br/>
`{2.で設定した_cmd_index}　｛operator｝ {column_length} {cond_value1}...tab separate....{cond_valueN}`
```
$ 3       +       3       99      1516    DAVID
0 1
```

4. Delete <br/>
`{2.で設定した_cmd_index}　｛operator｝ {column_length} {cond_value1}...tab separate....{cond_valueN} [LIM] [IN] [FILTER ...] D`
```
$ 3       =       1       99              D
0 1 1
```

5. Authenticate <br />
もしconfigでsecret設定している場合、Authenticatが必要となります。
```
handlersocket_plain_secret="xxxxx"
handlersocket_plain_secret_wr="xxxxx"
```
コマンドは、こちらです。
`A　1 {secret}`
