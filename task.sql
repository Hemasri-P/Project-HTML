CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName NVARCHAR(50)
);
 
-- Insert sample departments
INSERT INTO Departments (DepartmentID, DepartmentName) VALUES
(1, 'HR')
SELECT * from Departments