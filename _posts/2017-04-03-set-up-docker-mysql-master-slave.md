---
layout: post
title: "Set up Docker MySql as Master-Slave"
date: 2017-04-03
keywords: ",Docker,MySQL,Replication,DevOps"
---

For this instruction, I will create 2 MySQL containner to use as Master - Slave.<br/>
The master and slave environment is dependence from  each other,<br/>
so I will prepare the setting file for both environment in separate folder.

1. Prepare Setting Files:<br/>
    We will prepare this following files for both master and slave environment.
    - Dockerfile (for building Docker containnner)
        ```
        FROM mysql/mysql-server:5.7.17
        COPY my.cnf /etc/my.cnf
        ENV MYSQL_ROOT_PASSWORD={your root password}
        COPY ./*.sql /docker-entrypoint-initdb.d/
        ```
    - build.sh (for building Docker containner)
        - MASTER
        ```
        docker build -t db_master .
        ```
        - SLAVE
        ```
        docker build -t db_slave .
        ```  
    - exec-mysql.sh (for easily running mysql from terminal)
        - MASTER
        ```
        docker exec -it db_master sh -c "mysql -uroot -p{you root password}";
        ```
        - SLAVE
        ```
        docker exec -it db_slave sh -c "mysql -uroot -p{you root password}";
        ```  
    - run.sh (for running the docker containner)
        When running we need to prepare folder for MASTER and SLAVE to save on local.
        - MASTER
        Master can be accessed on 3306 on local port
        ```
        docker run --name db_master -p 3306:3306 -v /var/mysql/master:/var/lib/mysql -d db-master
        ```
        - SLAVE
        Slave can be accessed on 3307 on local port
        ```
        docker run --name db_slave -p 3306:3306 -v /var/mysql/master:/var/lib/mysql -d db-master
        ```  
    - my.cnf (MySQL's configuration files)
        - MASTER
        ```
        [mysqld]
        server-id=1
        binlog_format=ROW
        log-bin
        ...//Anything Else
        ```
        - SLAVE
        ```
        [mysqld]
        server-id=2
        ...//Anything Else
        ```  
    - init-user.sql (for creating user when build the Docker containner)
        ```
        CREATE USER 'root'@'%' IDENTIFIED BY 'rootdb';
        GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION; 
        ```  
2. Builing Time
    - For MASTER
        1. Build containner by 
        ```
        $ bash build.sh
        ```
        2. Start containner by 
        ```
        $ bash run.sh
        ```
        3. Open mysql command by 
        ```
        $ bash exec-sql.sh
        ```
        4. Check log binary and position
          Now we need only File,Position for setting in Slave. 
        ```
        $mysql> SHOW MASTER STATUS\G
        ....
        File: master-bin.000001
        Position: 1512
        ....
        ```
    - For SLAVE
        1. We will do 1~3 as same as we did in MASTER.
        2. Then, Setting MASTER for SLAVE DB
        ```
        
        ```
        
    - Extra
    ```
    $ docker exec -ti db_master 'mysql' -uroot -p{root password} -e "SHOW MASTER STATUS\G" | grep File |awk '{print $2}'
    $ docker exec -ti db_master 'mysql' -uroot -p{root password} -e "SHOW MASTER STATUS\G" | grep Position |awk '{print $2}'
    ```
