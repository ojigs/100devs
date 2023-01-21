/* https://www.codewars.com/kata/5ab7a736edbcfc8e62000007/train/sql
Practise some SQL fundamentals by making a simple database on a topic you feel familiar with. Or use mine, populated with a wealth of Sailor Moon trivia.
sailorsenshi schema

    id
    senshi_name
    real_name_jpn
    school_id
    cat_id

cats schema

    id
    name

schools schema

    id
    school

Return a results table - sailor_senshi, real_name, cat and school - of all characters, containing each character's high school, their civilian name and the cat who introduced them to their magical crime-fighting destiny.

Keep in mind some senshi were not initiated by a cat guardian and one is not in high school. The field can be left blank if this is the case.
Fundamentals
SQL
Databases */

-- My solution
SELECT sailorsenshi.senshi_name AS sailor_senshi, sailorsenshi.real_name_jpn AS real_name, cats.name AS cat, schools.school AS school 
FROM sailorsenshi 
LEFT JOIN cats  
ON sailorsenshi.cat_id = cats.id
FULL OUTER JOIN schools
ON sailorsenshi.school_id = schools.id

-- In this solution, full join or left join could be used. But the tests require we use the left join which was why I have had to incorporate left join in my solution



-- other solution
SELECT
  senshi_name AS sailor_senshi,
  real_name_jpn AS real_name,
  cats.name AS cat,
  school AS school
FROM sailorsenshi
LEFT JOIN cats ON cat_id = cats.id
LEFT JOIN schools ON school_id = schools.id
