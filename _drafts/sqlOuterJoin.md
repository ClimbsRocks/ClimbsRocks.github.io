MySQL doesn't allow full outer joins. So instead, we have to do the following: 
SELECT * FROM table1
LEFT JOIN table2 ON table1.x = table2.x
UNION SELECT * FROM table2
LEFT JOIN table1 ON table2.x = table1.x;

