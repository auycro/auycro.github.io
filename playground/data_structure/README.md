# Data Structure ReCollect
Characteristic
  - Correctness (Fitness Value)
  - Time Complex (Operation Time)
  - Space Complex (Resource Usage)
Basic
  - Search
    - Routing problem
      - Travel Salesman Problem
      - Nearest Neighbour
    - Graph Search
      - Shortest Path
      - Dijkstra
    - Sequence Search
      - Linear Search
  - Sort
    - Selection Sort
      :Select the smallest/biggest one
    - Insertion Sort //O(n^2)
      :Loop bigger/smaller next to the smaller/bigger one then insert it
    - Quick Sort
      :select pivot value, divide into partition, swap inside partition, swap pivot
    - Merge Sort
      :divide to smallest unit, compare item, merge back 
    - Radix sort
      :compare digit in list, re-sorting by order
    - Shell sort
      :define nth-array, insertion sort
    - Bubble Sort
      :compare with next one, swap
    - Heap Sort
      :create heap table,swap to satisfy heap, then swap top with last node, delete last item, swap to satisfy heap,loop...

```
Example

8,5,7,4,1,2,3
 
+--8
|  +--5
|     +--4
|     +--1
|  +--7
|     +--2
|     +--3

Swap 8<->3

3,5,7,4,1,2,[8]

+--3
|  +--5
|     +--4
|     +--1
|  +--7
|     +--2

------------
5,3,7,4,1,2,[8]
5,4,7,3,1,2,[8]
7,5,4,3,1,2,[8]
------------
2,5,4,3,1,[7,8]
5,2,4,3,1,[7,8]
5,3,4,2,1,[7,8]
------------
1,3,4,2,[5,7,8]
3,1,4,2,[5,7,8]
3,2,4,1,[5,7,8]
4,2,3,1,[5,7,8]
------------
1,2,3,[4,5,7,8]
2,1,3,[4,5,7,8]
3,1,2,[4,5,7,8]
------------
2,1,[3,4,5,7,8]
------------
1,[2,3,4,5,7,8]
------------
[1,2,3,4,5,7,8]
```

Data Structure
  - Array
    : ordered collection
  - Set
    : unordered collection
  - Dictionary
    : indexed collection
  - Stack 
    : LIFO,push,pop
  - Queue 
    : FIFO, enqueue, dequeue
  - Binary Search Tree
    : Binary tree, left <= parent <= right

```
struct node {
   int data;   
   struct node *leftChild;
   struct node *rightChild;
};

+--15
|  +--10
|     +--4
|        +--1
|        +--5
|     +--12
|  +--25
|     +--20
|     +--27
```
