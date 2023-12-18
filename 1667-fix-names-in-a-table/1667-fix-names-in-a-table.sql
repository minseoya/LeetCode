# Write your MySQL query statement below
-- 이름을 수정하여 결과를 반환하는 쿼리
SELECT user_id, 
       CONCAT(UPPER(SUBSTRING(name, 1, 1)), LOWER(SUBSTRING(name, 2))) AS name
FROM Users
ORDER BY user_id;
