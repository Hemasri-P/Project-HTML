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
- 1.Readability - 75%
- 2.Maintainability- Code Debt(delaying tasks to tommorow)
- 3.Extensibility-easy to add new features
- 4.Testability-
- 5.Performance
```

###
