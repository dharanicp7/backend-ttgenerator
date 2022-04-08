CREATE TABLE staff(
    staff_id serial,
    staff_name character varying(80),
    staff_category character varying(20),
    staff_designation character varying(100)
);

INSERT INTO staff(staff_name,staff_category,staff_designation)
VALUES
('Staff1','Computer Science', 'Computing'),
('Staff2', 'Mathematics','Numerical,Statistics'),
('Staff3','Computer Science','Cloud Computing'),
('Staff4','Mathematics','Probability');