# Write your MySQL query statement below
DELETE p
FROM Person p, Person p2
WHERE p.email = p2.email AND p.id>p2.id