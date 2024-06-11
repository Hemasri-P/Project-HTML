Exercise - 1
taks
1.Find the title of each film ✓

```sql
SELECT title FROM movies;

2. Find the director of each film
- SELECT Director FROM movies;

3.Find the title and director of each film
 SELECT Title , Director FROM movies;

4.Find the title and year of each film
SELECT Title, Year FROM movies;

5.Find all the information about each film
SELECT * FROM movies;
```

![alt text](image-30.png)

Exercise 2 — Tasks

```sql
1.Find the movie with a row id of 6 ✓
SELECT * FROM movies
where id=6;
2.Find the movies released in the years between 2000 and 2010
SELECT Title FROM movies
0 AND 2010;
3.Find the movies not released in the years between 2000 and 2010
SELECT Title FROM movies
where  Year NOT BETWEEN 2000 AND 2010;
4.Find the first 5 Pixar movies and their release year
SELECT Title FROM movieswhere  Year  BETWEEN 200
where Id<=5;
```

![alt text](image-31.png)
Exercise 3 - Tasks

```sql
1.Find all the Toy Story movies
SELECT Title FROM movies
where Title LIKE "%Toy Story%";
2.Find all the movies directed by John Lasseter
SELECT * FROM movies
where Director="John Lasseter";
3.Find all the movies (and director) not directed by John Lasseter
SELECT * FROM movies
where Director!="John Lasseter";
4.Find all the WALL-* movies
SELECT * FROM movies
where Title LIKE "%WALL%";
```

![alt text](image-32.png)

Exercise 4 — Tasks

```sql
1.List all directors of Pixar movies (alphabetically), without duplicates
SELECT DISTINCT Director FROM  movies
ORDER BY Director;
2.List the last four Pixar movies released (ordered from most recent to least)
SELECT Title FROM movies
ORDER BY Year DESC LIMIT 4 ;
3.List the first five Pixar movies sorted alphabetically
SELECT Title FROM movies
ORDER BY Title ASC LIMIT 5 ;
4.List the next five Pixar movies sorted alphabetically
SELECT Title FROM movies
ORDER BY Title ASC LIMIT 5 OFFSET 5 ;
```

![alt text](image-33.png)
Exercise -5 — Tasks

```sql
1.List all the Canadian cities and their populations ✓
SELECT City, Population FROM north_american_cities
where Country LIKE"%Canada%"
ORDER BY City asc;
2.Order all the cities in the United States by their latitude from north to south
SELECT CITY FROM North_american_cities WHERE COUNTRY = 'United States' order by latitude desc;
3.List all the cities west of Chicago, ordered from west to east
SELECT CITY FROM North_american_cities
WHERE LONGITUDE<"-87.629798" ORDER BY LONGITUDE ASC;
4.List the two largest cities in Mexico (by population)
SELECT CITY FROM north_american_cities
Where COUNTRY="Mexico" ORDER BY POPULATION DESC LIMIT 2;
5.List the third and fourth largest cities (by population) in the United States and their population
SELECT city,population FROM north_american_cities
WHERE COUNTRY="United States" ORDER BY Population desc LIMIT 2 OFFSET 2;
```

![alt text](image-34.png)

Exercise-6

```sql
1.Find the domestic and international sales for each movie
SELECT * FROM movies INNER JOIN
Boxoffice where Movies.Id=Boxoffice.Movie_id;
2.Show the sales numbers for each movie that did better internationally rather than domestically
SELECT * FROM Movies
INNER JOIN Boxoffice where Id=Movie_id AND
Domestic_sales<International_sales; OR

SELECT * FROM Movies
International_sale>Domestic _sale;

3.List all the movies by their ratings in descending order
SELECT * FROM MOVIES INNER JOIN BOXOFFICE WHERE ID=MOVIE_ID ORDER BY RATING DESC;
```

![alt text](image-47.png)
Exercise 7 — Tasks

```SQL
1.Find the list of all buildings that have employees ✓
SELECT DISTINCT Building FROM Employees
;
2.Find the list of all buildings and their capacity
SELECT * FROM bUILDINGS
;
3.List all buildings and the distinct employee roles in each building (including empty buildings)
SELECT DISTINCT  Building_name, Role FROM Buildings
LEFT JOIN  EMPLOYEES ON Building_name= BUILDING;
```

![alt text](image-46.png)

Exercise 8 — Tasks

```sql
1.Find the name and role of all employees who have not been assigned to a building ✓
SELECT Role , Name FROM Employees
WHERE Building IS NULL;
2.Find the names of the buildings that hold no employees
SELECT Building_name FROM Buildings
LEFT JOIN EMPLOYEES ON  BUILDING_NAME=BUILDING WHERE YEARS_EMPLOYED IS NULL;
```

![alt text](image-48.png)

Exercise 9 — Tasks

```sql
1.List all movies and their combined sales in millions of dollars
SELECT TITLE, (Domestic_sales+International_sales)/1000000 AS TOTAL_SALES FROM movies
INNER JOIN BOXOFFICE
ON ID=MOVIE_ID;
2.List all movies and their ratings in percent
SELECT TITLE, RATING*10 FROM movies
INNER JOIN  Boxoffice ON Movies.ID= Boxoffice.Movie_id ;
3.List all movies that were released on even number years
SELECT * FROM movies
WHERE YEAR %2=0;
```

![alt text](image-49.png)

Exercise 10 — Tasks

```sql
1.Find the longest time that an employee has been at the studio

2.For each role, find the average number of years employed by employees in that role
3.Find the total number of employee years worked in each building
```
