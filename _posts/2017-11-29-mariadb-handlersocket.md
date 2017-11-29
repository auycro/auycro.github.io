---
layout: post
title: "Using handlersocket in mariadb"
date: 2017-11-29
keywords: ",MariaDB,MySQL,HandlerSocket"
---

https://github.com/DeNA/HandlerSocket-Plugin-for-MySQL

下記は、Linuxで検索方法です。　（※１　Windowsは、Telnetで）

1. TCPでDBに接続 <br/>
```
$ nc -v 192.168.xx.xxx 9998
Connection to 192.168.42.105 9998 port [tcp/*] succeeded!
```

2. DB,Table,Index,Columnを定義 <br/>
`P {cmd_index_なんでも} {DB} {table} {index_name} {columns:[,]区切}`

```
$ P	3	DatabaseName_Foo	TableName_Bar	PRIMARY	column_name,column_birthday
0 1
```

3. 検索 <br/>
`{2.で設定した_cmd_index}　｛operator｝ {cond_column} {cond_value} {limit}`
```
$ 3	=	1	50 1
0 2 Peter 1998-10-22
```

※１
Telnetを設定方法
https://kencenerelli.wordpress.com/2017/07/16/enabling-telnet-client-in-windows-10/ [^]
