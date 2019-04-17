```
diskutil list
diskutil unMountDisk /dev/disk2
diskutil eraseDisk MS-DOS boot /dev/disk2
sudo dd if=/path-to-file/2019-04-08-raspbian-stretch-lite.img of=/dev/disk2 bs=1m
```
