---
layout: post
title: "Set up Docker MySql as Master-Slave"
date: 2017-04-03
keywords: ",Docker,MySQL,Replication,DevOps"
---

For this instruction, I will create 2 MySQL containner to use as Master - Slave.
The master and slave environment is dependence from  each other,
so I will prepare the setting file for both environment in separate folder.

1. Prepare Setting Files:<br/>
    We will prepare this following files for both master and slave environment
    - Dockerfile (for building Docker containnner)
    - build.sh (for building Docker containner)
    - exec-mysql.sh (for easily running mysql from terminal)
    - run.sh (for running the docker containner)
    - my.cnf (MySQL's configuration files)
    - init-user.sql (for creating user when build the Docker containner)
