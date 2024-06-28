### Section 1: Questions

```sql
CREATE TABLE books (
    book_id INT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    author_id INT NOT NULL,
    genre VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE authors (
    author_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    country VARCHAR(50) NOT NULL,
    birth_year INT NOT NULL
);

CREATE TABLE sales (
    sale_id INT PRIMARY KEY,
    book_id INT NOT NULL,
    sale_date DATE NOT NULL,
    quantity INT NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (book_id) REFERENCES books(book_id)
);

INSERT INTO authors (author_id, name, country, birth_year) VALUES
(1, 'George Orwell', 'UK', 1903),
(2, 'J.K. Rowling', 'UK', 1965),
(3, 'Mark Twain', 'USA', 1835),
(4, 'Jane Austen', 'UK', 1775),
(5, 'Ernest Hemingway', 'USA', 1899);

INSERT INTO books (book_id, title, author_id, genre, price) VALUES
(1, '1984', 1, 'Dystopian', 15.99),
(2, 'Harry Potter and the Philosophers Stone', 2, 'Fantasy', 20.00),
(3, 'Adventures of Huckleberry Finn', 3, 'Fiction', 10.00),
(4, 'Pride and Prejudice', 4, 'Romance', 12.00),
(5, 'The Old Man and the Sea', 5, 'Fiction', 8.99);

INSERT INTO sales (sale_id, book_id, sale_date, quantity, total_amount) VALUES
(1, 1, '2024-01-15', 3, 47.97),
(2, 2, '2024-02-10', 2, 40.00),
(3, 3, '2024-03-05', 5, 50.00),
(4, 4, '2024-04-20', 1, 12.00),
(5, 5, '2024-05-25', 4, 35.96);

Select *from books
Select *from authors
Select *from sales
```

```sql
--Task 1 : -Write a query to display authors who have written books in multiple genres and group the results by author name.

Select books.author_id ,authors.name ,books.genre ,count(genre)  as multiplegenres from authors
join books on books.author_id = authors.author_id
group by books.author_id ,authors.name ,books.genre
having count(genre)>1
```

![alt text](image-104.png)

```sql
---Task 2
--Write a query to find the books that have the highest sale total for each genre and group the results by genre.
with cte_sales
as (
Select  sales.book_id,title ,genre ,sales.total_amount,sum(sales.total_amount) as  SalesTotal ,
rank()over(partition by genre  order by  total_amount desc) as Ranks
from sales
left join books on books.book_id=sales.book_id
group by  sales.book_id ,title ,genre  ,sales.total_amount
)
 Select * from cte_sales
 where ranks=1 ;

```

![alt text](image-106.png)

```sql
--Write a query to find the average price of books for each author and group the results by author name, only including authors whose average book price is higher than the overall average book price.
with cte_prices
as (
 select authors.name, books.title , avg(price) as AvgPrice from books
 join authors on authors.author_id = books.author_id
 group by authors.author_id ,authors.name ,books.title ,books.price
 )
 Select * from cte_prices
 where AvgPrice>(select avg(price) from books );
```

![alt text](image-107.png)

```sql
----Task 4
--Write a query to find authors who have sold more books than the average number of books old per author and group the results by country.
with cte_sold
as (
Select authors.author_id, Avg(quantity ) as AvgBooks
from sales
 join books on books.book_id=sales.book_id
 join authors on authors.author_id=books.author_id
 group by authors.author_id
)
Select * from cte_sold
 where AvgBooks  > (Select Avg(quantity) from sales)
```

![alt text](image-108.png)

```sql
--Task 5
--Write a query to find the top 2 highest-priced books and the total quantity sold for each, grouped by book title.

Select top(2)  books.book_id, books.title,price ,quantity from books
join sales on sales.book_id=books.book_id
order by price desc
```

![alt text](image-109.png)

```sql
------Task 6
--Write a query to display authors whose birth year is earlier than the average birth year of authors from their country and rank them within their country.

Select  authors.author_id ,authors.country ,Avg(birth_year) as AvgBirthYear
,rank()over(partition by country  order by  birth_year desc) as Ranks
from sales
 join books on books.book_id=sales.book_id
 join authors on authors.author_id=books.author_id
 group by authors.author_id ,authors.country ,birth_year

Select *from books
Select *from authors
```

![alt text](image-110.png)

```sql
--Task 7
--Write a query to find the authors who have written books in both 'Fiction' and 'Romance' genres and group the results by author name.

Select authors.author_id  ,authors.name, books.genre
from books
left join authors on authors.author_id = books.author_id
group by authors.author_id,authors.name,books.genre having genre=('Fiction')
union
Select authors.author_id  ,authors.name, books.genre
from books
left join authors on authors.author_id = books.author_id
group by authors.author_id,authors.name,books.genre having genre=('Romance')

```

![alt text](image-111.png)

```sql
--Task 8
--Write a query to find authors who have never written a book in the 'Fantasy' genre and group the results by country.
Select authors.author_id, authors.country,books.genre
from books
left join authors on authors.author_id=books.author_id
group by authors.author_id , authors.country,books.genre
having genre!=('Fantasy') order by country
```

![alt text](image-112.png)

```sql
--Task 9
--Write a query to find the books that have been sold in both January and February 2024 and group the results by book title.
Select books.book_id , sale_date from sales
join books on books.book_id=sales.book_id
 where DATEPART(yy, sale_date) = 2024
 and DATEPART(mm, sale_date) = 01
 or DATEPART(mm, sale_date) = 02
```

![alt text](image-113.png)

```sql
--Task 10
---Write a query to display the authors whose average book price is higher than every book price in the 'Fiction' genre and group the results by author name.
with cte_Groups
as (
 select authors.author_id,authors.name,books.genre ,avg(price) as AvgPrices from books
 join authors on authors.author_id = books.author_id
 group by authors.author_id ,authors.name,books.genre,books.price having genre !='Fiction'

 )

 Select * from cte_Groups
 where  AvgPrices  >all(Select price from books
 where genre='Fiction');
```

![alt text](image-114.png)

### Section 6: Triggers

```sql
---1.Trigger to Update Total Sales After Insert on Sales Table Create a trigger that updates the total sales for a book in the books table after a new record is inserted into the sales table.
alter table books add total_sales decimal(6,2) --need to create column
 update  books set total_sales=820.00 where book_id =1;
  update  books set total_sales=40.00 where book_id=2;
  update  books set total_sales=50.00 where book_id=3;
  update  books set total_sales=12.00 where book_id=4;
  update  books set total_sales=35.00 where book_id=5;


create Trigger trg_SalesInsert
on sales
 After insert
  as
  Begin
  update books
  set total_sales=total_sales + (select total_amount from inserted )
  where book_id= (select book_id from inserted )
  end
  go

  insert into sales values (6 , 4, '2024-02-15', 4,56.50 )

  Select * from sales
  Select * from books
```

![alt text](image-115.png)

```sql
--2.Trigger to Log Deletions from the Sales Table
--Create a trigger that logs deletions from the sales table into a sales_log table with the sale_id, book_id, and the delete_date.
Create table sales_log (sale_id int , book_id int, delete_date date)

Create trigger trg_LogDeletions
on sales
after delete
as
begin
 Insert into sales_log values (
	  (select sale_id from deleted ) ,(select book_id from deleted ) ,getdate() );

end
 go


 delete from sales where sale_id=6
 Select * from sales_log
 Select * from books
```

![alt text](image-116.png)

```sql

```
