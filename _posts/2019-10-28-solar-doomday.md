---
layout: post
title: "Solar Doomday"
date: 2019-10-28
keywords: ",Python,Coding,Google"
---

```
#Solar Doomday
import math;

def solution(area):
    # Your code here
    answerList = [];
    findArea(area, answerList);
    answerList.reverse();
    return answerList;

def findArea(area, answerList):
    validArea = 0;
    if area >=1 and area <= 10000:
        tmp = int(math.sqrt(area));
        print(tmp);
        if tmp <= 0:
            return validArea;
        else:
            validArea = int(math.pow(tmp, 2));
            restArea = area - validArea;
            findArea(restArea, answerList);
            answerList.append(validArea);
        return validArea;

print(solution(12));
print(solution(15324));
```
