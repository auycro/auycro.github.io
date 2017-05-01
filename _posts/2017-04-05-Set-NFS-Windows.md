---
layout: post
title: "Setting NFS Server in Windows Server and test mounting in Linux"
date: 2017-04-05
keywords: ",NFS Server,File Sharing,System"
---

I just finished setting File Server for our developer team.
Here I will explain how I set up a NFS server in windows server,
and how to mount in Linux(Ubuntu) server.

Set up NFS Server in Windows:

  1. Open Administrative Tool > Server Manager
  2. Manage Roles > Add Roles
  3. In wizards, Select file server and find NFS server then Next and Install it
  4. Then, go to directory you want to share, and Open Property
  5. Select NFS Sharing > Share this folder
  6. Enter Share Folder Name, Click Apply
  
Now you already finished set up NFS Server and Folder in Windows part.
We will go to mount it in our Ubuntu Server.

Mount NFS in Ubuntu Server:
  
  1. 
  2. `mount.nfs 192.168.25.10:/Developer test_share_folder/`
  
ps. need to update again about command
