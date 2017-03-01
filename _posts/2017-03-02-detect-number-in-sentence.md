---
layout: post
title: "Detect number in sentence with Regex"
date: 2017-03-02
keywords: ",Linguistic,Regular Expression,RegEx,Programming"
prelude: "Here I write about the problem about detecting number pattern in sentence."
---

Recently I do solve a problem about detecting number pattern in sentence.

There are a lot of approaching way to solve a problem.
Here I will talk about how I solving problem and what is the issue I found.

First, I created a lot of Regular Expression pattern to match the numbers (which normally found in the sentence).
Such as, Unit of system, Equation, Currency etc.
In this implement I found this [site](http://regexr.com/) very helpful.
I can created a lot of pattern online before used it in my program.
Here is some of pattern that I used.
```lang-cs
//SI
var regex = new Regex(@"\b" + value + GetSystemOfUnitRegEx("[a-zA-Z]+") + @"\b") //Ex. of symbol: ml,kg,mm
private string GetSystemOfUnitRegEx(string unitSymbol)
{
  return string.Format(@"+.?(?:da|[yzafpnμmcdhkMGTPEZY])?{0}", unitSymbol);
}
```

The second problem after I implemented the pattern is the compounding symbol.
For example 1mm/day, 10km/hr etc. In this case, I need to implement a lot of checking methods.
Which I used a lot of string function.
```
public bool HasCompoundString(string compound)
{
  if (compound.StartsWith("/"))
    return true;
    ....
}        
```

After that I still found an error about indexing and positioning.
The problem sentence such as (2017/03/01 01:01:11).
Only the above implementation, it cannot solve the duplication of numbers in the sentence.
Then, I did created a function to corrected the result by:
```
//matched = match success from regex pattern
//sentence = example sentence
//regexPattern = regex pattern
var isCompound = regexWrapper.isCompound(regexPattern, sentence, matched);
var isSamePoint = regexWrapper.isSamePoint(number_list, matched);
var isMissPoint = regexWrapper.isMissPoint(regexPattern, matched, sentence);
```
The return-bool function(isCompound,isSamePoint,isMissingPoint) is checked position(index) 
and length of the numbers in the sentence.

After implemented the above techinique(RegEx Pattern, Compound checking, Position and Length checking),
The detection accuracy which random sentence is about 75% correct. (I prepared around 30 RegEx patterns.)

In summary, I think to improving accuracy, I still need to add more sample data.
And also I might better proadd correction probability to the result list,
which I can classified incorrect pattern and do more in training pattern set. 
