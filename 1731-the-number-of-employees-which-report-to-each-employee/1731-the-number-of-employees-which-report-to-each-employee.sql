# Write your MySQL query statement below
SELECT e2.employee_id, e2.name, COUNT(e.name) AS reports_count,ROUND( AVG(e.age)) AS average_age
FROM Employees e
INNER JOIN Employees e2 ON e.reports_to = e2.employee_id 
GROUP BY employee_id
ORDER by e2.employee_id asc