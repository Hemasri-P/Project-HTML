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
