---
layout: post
title: "Python Memo"
date: 2021-09-18
keywords: ",python,programming"
---

### Slotted Classes

  ```
  class Worker:
    __slots__ = 'job','duration'
    def __init__(self, job, duration):
        self.job = job
        self.duration = duration

  w = Worker('foo',60)
  ```

### Data Classes   

  ```
  from dataclasses import dataclass

  @dataclass
  class Student:
    name: str
    score: float

  student_a = Student('Harry',42)
  # Student(name='Tina', score=37.2)
  ```

### Comprehensions  

  ```
  some_results_ = [i for i in range(0,10000)]
  some_results = [do_somethings(i) for i in range(0,10000)]
  some_results = [do_somethings(i) for i in range(0,10000) if i%2==0]
  ```

### Check memory size
  
  ```
  import sys
  somelist = [i for i in range(0,10000)]
  print(sys.getsizeof(somelist))
  ```

### Tuples is smaller than list

  ```
  list_a = [1,2,3,4]
  tuple_b = (1,2,3,4)

  print(sys.getsizeof(list_a))
  print(sys.getsizeof(tuple_b))
  #120
  #72
  ```

### List Sort Key

  ```
  import operator

  if __name__ == '__main__':
    students = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append({'name':name,'score':score})

    students.sort(key=operator.itemgetter('score','name'))
    print(students)
  ```
  
  ref: https://wiki.python.org/moin/HowTo/Sorting/#Key_Functions

### Else and Loop

  ```
  for i in <some iteration>:
    ...
  else:
    ...
  ```

### Inline If/Else

  ```
  def validate(error):
    return 'OK' if not error else 'NG'

  print(validate(error=True))
  ```
