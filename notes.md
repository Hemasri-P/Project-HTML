# INTRO TO WEB DEVELOPMENT

## Browser wars - I:

```js
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
```

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

```js
var q1=[100,200];
var q3=q1;
=>not defined
```

### spreading operator(copy by value)

```js
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

```js
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

## Examples

```js
const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

for (let i = 0; i <= books.length; i++) {
  if (books[i].rating > 4.7) console.log(books[i].title);
}

// ANOTHER

for (let book of books) {
  if (book.rating >= 4.7) {
    console.log(book.title);
  }
}

//ANOTHER
let highRatedBooks = [];
{
  //camel case
  if (book.rating >= 4.7) {
    highRatedBooks.pudh(book.title);
  }
}
```

```js
// Ex 3: If employee's grades 80 or above promote them
const employes = [
  { id: 1, name: "Alice", grade: 78 },
  { id: 2, name: "Bob", grade: 85 },
  { id: 3, name: "Charlie", grade: 92 },
  { id: 4, name: "David", grade: 88 },
  { id: 5, name: "Eva", grade: 76 },
];

var j = [];
for (let i = 0; i < employes.length; i++) {
  if (employes[i].grade > 80)
    j.push({ id: employes[i].id, status: "promoted" });
}
console.log(j);

// This should output:
// [{ id: 2, status: 'Promoted' }, { id: 3, status: 'Promoted' }, { id: 4, status: 'Promoted' }]
```

```js

const movies = [
    { title: "Inception", ratings: [5, 4, 5, 4, 5] },
    { title: "Interstellar", ratings: [5, 5, 4, 5, 4] },
    { title: "Dunkirk", ratings: [4, 4, 4, 3, 4] },
    { title: "The Dark Knight", ratings: [5, 5, 5, 5, 5] },
    { title: "Memento", ratings: [4, 5, 4, 5, 4] },
  ];

  // Function to calculate the average rating for a movie
  function calculateAverageRating(ratings) {
    const total = ratings.reduce((sum, rating) => sum + rating, 0);
    return total / ratings.length;
  }

  // Find the movie with the highest average rating
  let topMovie = null;
  let highestAverageRating = -1;

  movies.forEach(movie => {
    const averageRating = calculateAverageRating(movie.ratings);
    if (averageRating > highestAverageRating) {
      highestAverageRating = averageRating;
      topMovie = movie.title;
    }
  });

  console.log("Top 1 movie title:", topMovie);

     output: The Dark night
```

### ES6 feature

```js
let & const
`` Template literal
classesArow functions
promise
Destructing
numeric seperators
sprrd opeartor
```

### Object methods

```js
Object.key() and Object.value()

```

### Template literal

```js
interpolation - substitution
Supports multiline string
```

### refactoring -

```js
 improves quality and the functionality is same as before
```

### Array Destructuring(unpacking done using index value)

```js
const[t1,t2]=[100,200];
console.log(t1,t2,t3);
output= t3 will be undefined.


const[t1,t2,t3=30]=[100,20];
console.log(t1,t2,t3);
output: 100,20,30
***default value is taken only t3 is undefined***

const[t1,t2,t3=30]=[100,20,500];
console.log(t1,t2,t3);
output:100,20,500


const[t1,t2,t3=30]=[100,20,null];
console.log(t1,t2,t3);
output:100,20,null

const[t1,t2,t3=30]=[100,20,undefined];
console.log(t1,t2,t3);
output: 100 20 30

const[,t1,t2,t3=30]=[100,200,null]; syntax called as Holes(to skip values)
console.log(t1,t2,t3);
VM64:2 200 null 30

```

### Object Destructuring

```js
unpacking things using keys
as like array desturing ,it will uses objects.
```

### Binary operators

```js
arithmetic - +,-,*,/
Logical- &&,||
realational - >,<,>=,<=,==,===
```

### Ternary

```js
4 > 3 ? "Awesome" : "cool";
```

### Unary operator

```js
++, --, !
```

### Truthy vs Falsy ; if value converts into "true" then Truthy ,Vise versa

```js
let x="cool";
if (x)
{
  console.log("Hey");
  }
  else
  {
    console.log("Nope');
  }
    output : Hey

```
