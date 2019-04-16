# JavaScript Data Structures
## *Test Driven Development (TDD) Of Common Data Structures In ES6*

### The following project is an In-Progress collection of common abstract data types/structures and algorithms built with ECMAScript 2015+.

I employed JavaScript, Node.js, MochaJS, and ChaiJS to build common abstract data structures. The repository will cover Associative Arrays (JavaScript Objects), Graphs, Linked Lists, Queues, Priority Queues, Stacks, Trees, and Heaps.

# Contents:
* [Associative Arrays](#associative-arrays)
* [Graphs](#graphs)
* [Linked Lists](#linked-lists)
* [Queues](#queues)
* [Priority Queues](#priority-queues)
* [Stacks](#stacks)
* [Trees](#trees)
* [Heaps](#heaps)
* [Usage](#usage)

# Associative Arrays:
An associative array (sometimes called a hash map, a hash table, a symbol table, or a dictionary) is what's behind the "object" in JavaScript. On a high level, it is an abstract data type composed of a collection of key-value pairs, such that each possible key appears at most once in the collection.

Put another way, the operations associated with this data type allow for:
* the addition of a pair to the collection - O(1)
* the removal of a pair from the collection - O(1)
* the modification of an existing pair - O(1)
* the lookup of a value associated with a particular key - O(1)
###### *Speeds expressed in average times and may vary depending on browser engine*
A JavaScript object most closely resembles an implementation of an associative array known as the hash table (hence the overlap in naming). A hash table is an array that utilizes a hash function to generate (hopefully) unique keys for any value passed into it. A good hash function is one that avoids hash collisions while not taking up too much space. As such, a proper implementation of an associative array should allow for constant time set, get, and remove operations, and therefore pass the following tests:
* Set a key-value pair without collisions
* Get a value associated with a key after it has been set
* Reassign the value of a key after it has been set
* Get a new value associated with a key after it has been reassigned
* Remove a key-value pair
## Resources/Links:
* [Associative Array (Wikipedia)](https://en.wikipedia.org/wiki/Associative_array)
* [Hash Table (Wikipedia)](https://en.wikipedia.org/wiki/Hash_table)
* JavaScript Object Big O Performance Tests on Various Browsers [1](https://stackoverflow.com/questions/12241676/javascript-objects-as-hashes-is-the-complexity-greater-than-o1), [2](https://stackoverflow.com/questions/28329869/javascript-object-big-o)
* Polynomial string hash derived from the [Rabin-Karp algorithm](https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm)
* [Link to code](./associative-array.js)
## Tests:
## ![Tests](./img/AADemo.png)
## Code Snippet:
 ``` javascript
class AssociativeArray {
    constructor () {
        this.buckets = [];
    }
    hash(key) {
        let n = key.length - 1;
        let prime = 179424691;
        let hash = Array.from(key);
        for (let i = 0; i < key.length; i++) {
            hash += (key.charCodeAt(i) * (prime ^ n)) % key.length;
            n--
        }
        return hash;
    }
}
module.exports = {
    AssociativeArray: AssociativeArray
}
 ```
___

# Graphs:

* 

## ![](GDemo.png)

 ``` javascript
class Graph {
    constructor () {

    }
}
module.exports = {
    Graph: Graph
}
 ```

# Linked Lists:

* 

## ![](LLDemo.png)

 ``` javascript
class LinkedList {
    constructor () {

    }
}
module.exports = {
    LinkedList: LinkedList
}
 ```

# Queues:

* 

## ![](QDemo.png)

 ``` javascript
class Queue {
    constructor () {

    }
}
module.exports = {
    Queue: Queue
}
 ```

# Priority Queues:

* 

## ![](PQDemo.png)

 ``` javascript
class PriorityQueue {
    constructor () {

    }
}
module.exports = {
    PriorityQueue: PriorityQueue
}
 ```

# Stacks:

* 

## ![](SDemo.png)

 ``` javascript
class Stack {
    constructor () {

    }
}
module.exports = {
    Stack: Stack
}
 ```

# Trees:

* 

## ![](TDemo.png)

 ``` javascript
class Tree {
    constructor () {

    }
}
module.exports = {
    Tree: Tree
}
 ```

# Heaps:

* 

## ![](HDemo.png)

 ``` javascript
class Heap {
    constructor () {

    }
}
module.exports = {
    Heap: Heap
}
 ```

# Usage:

* Install the latest version of Node.js onto your machine, available [here](https://nodejs.org/)
* Clone this repository to the filepath of your choice on your local drive.
* Install the dependencies listed in the package.json file by typing ```npm i``` into the shell of your choice
* Execute ```npm run test``` in the shell to see the results of each data structure constructed
* Navigate into each folder and execute ```node <data-structure-name>.js``` to see the results of various operations using each type of data structure

Thank you for reading!

### Built With:
* JavaScript
* Node.js
* Mocha
* Chai
* GitHub