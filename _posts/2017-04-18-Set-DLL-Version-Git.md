---
layout: post
title: "Set DLL(C#) version number as git hash"
date: 2017-04-18
keywords: ",DevOps,Version Control,Visual Studio"
---

When there is an error or bug occured in our program.
And we want to know which source version that this files was built.
Here is one approach to solve this problem. 
"To the specify the exact build number to those DLL (or Exe)"

In this article, I will explain how to build the product number with Git Hash:

 1. Create Visual Studio Project, Set and prepare git repo, then do some commit
 2. Now please try to run `git rev-parse --short HEAD` to check the hash (which we will use as product number).
 3. To applied the product number for DLL or (Exe) in Visual Studio, we need to do some changes in `AssemblyInfo.cs`
 4. Copy AssemblyInfo.cs and rename it to `AssemblyInfo_temp.cs`
 5. Do some changes in `AssemblyInfo_temp.cs` like this
     ```
     ...
     [assembly: AssemblyVersion("1.0.*")] //This make version number as auto increment
     [assembly: AssemblyInformationalVersion("$GITVERSION$")] //Here we will replace $GITVERSION$ with git hash code
     ...
     ```
 6. Prepare batch script (update-version-number.bat) for using in post-build
     ```
     REM Get Git hash and set to gitversion
     FOR /F "tokens=* USEBACKQ" %%A IN (`"%GIT_PATH%git.exe" rev-parse --short HEAD`) DO SET gitVersion=%%A
     ECHO %gitVersion%
     REM Replace text in temp file and rename it 
     REM %1 = $(ProjectDir)
     POWERSHELL -COMMAND "(gc %1Properties\AssemblyInfo_temp.cs) -replace '\$GITVERSION\$', '%gitVersion%' | out-file %1Properties\AssemblyInfo.cs" ;
     ```
 7. Edit post-build (in Visual Studio project) like this
     ```
     CALL %PATH_TO_FILE%update-version-number.bat $(ProjectDir)
     ```
 8. Test Build, then go check your file property, Good Luck :)
