# INTRO TO WEB DEVELOPMENT

## Browser wars - I:

The war between Nescape and IE

## 3 layer architecure

1. FE
   - Angular
   - React
2. DB
3. BE
   - Python
   - NodeJS
   - Java

## References

- "https://www.youtube.com/watch?v=CZ3wIuvmHeM"

## INTRO TO JAVASCRIPT:

- variable declaration : var = ""
- To check data type : type(variable)
  - ex: typeof("x")= string

### Data types in js:

- String
- Number
- Boolean
- Undefined
- Symbol
- Object

### variable declarations :

- let :reassign is possible but,
- var :can be changed or redeclarable,reassign possible.
- constant :can't be changed,reassign not possible

### Scope

- life of variable: block of code in a program,unless the varaible is used it will be there in memory,next deleted/no longer there in memory.

//undefined means = value

//not define means= error

### TypeCasting

```js
- In JS ,the priority of functions ids performed and it follows implict coercion (decide it self)

 ex : var x1=3;
var x2="4";
console.log(x1+x2); ==>"35"
console.log(x1-x2); ==> -2

  explicit coercion: ex:
   var x1=3;
   var x2="5";
   console.log(x1+parseInt(x2));
   console.log(x1+ +x2); ==>

   Examples
     null+5 = 5
     [2,3,5]+"abc" ='2,3,5abc'
     []+[] =''
     4\*"5a" = not a number
     NaN/4 = NaN
     typeof(NaN) ='number'
     NaN\*3 = NaN
```

\*\* == allows type conversions , where === not converts and only one step.
2 ways to exit function : return,

```js
###  Types of functions
- 1.normal
  function double(n) {
    return n * 2;
  }

- 2.arrow

  - const double= (n) => {
  - return n\*2;
  - }
  - or " const double = (n)=> n\*2;

- 3.anonymous

- 4.IIFE
```

### 5 pillars of code quality

```js
 1.Readability - 75%
 2.Maintainability- Code Debt(delaying tasks to tommorow)
 3.Extensibility-easy to add new features
 4.Testability-
 5.Performance
```

### coby value

```
var q1=[100,200];
var q3=q1;
=>not defined
```

### spreading operator(copy by value)

```
var q1=[100,200];
var q3=[...q1];
console.log(q3);
output : [100,200]

var t1=[400,500];
var t2=[90,80];
var t3=[t2,...t1];
console.log(t3);

output: t3->[90,80,400,500]

```

### Loops

```
//More control
const marks=[80,90,100];
for (let  i=0;i<marks.length;i++)
    {
        console.log("Index:","Mark:",marks[i]);  =>[80, 90, 100]
    }
//Readable and simple
for(let idx in marks)
    {
    console.log("Index:","Mark:",marks[idx]);
}
//Readable and cleaner
for(let mark in marks)
    {
    console.log("Mark:", mark);}

```

#### Example

```js
const cart = [
    { name: "Apple", price: 0.5, quantity: 4 },
    { name: "Banana", price: 0.25, quantity: 6 },
  ];

  const newItems = [
    { name: "Cherry", price: 0.75, quantity: 5 },
    { name: "Date", price: 1, quantity: 3 },
  ];

  //Ex 1.1: Combine cart + newItems

  const Items(){
    console.log(...cart,...newItems);
  }

// find the total of cart
let total=0;
   for(let item of allitems){
    total+=item.price*item.quality;
   }
   console.log("The cart total is:", total);

```
