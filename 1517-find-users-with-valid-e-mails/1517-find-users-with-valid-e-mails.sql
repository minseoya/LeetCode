# Write your MySQL query statement below
SELECT *
FROM users
WHERE lower(mail) REGEXP '^[a-z][a-z0-9_.-]*@leetcode[.]com'