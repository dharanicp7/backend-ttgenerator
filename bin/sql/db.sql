--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4
-- Dumped by pg_dump version 13.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: admin; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.admin (
    login_id integer NOT NULL,
    email_address character varying,
    password character varying
);


ALTER TABLE public.admin OWNER TO postgres;

--
-- Name: admin_login_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.admin_login_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.admin_login_id_seq OWNER TO postgres;

--
-- Name: admin_login_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.admin_login_id_seq OWNED BY public.admin.login_id;


--
-- Name: course; Type: TABLE; Schema: public; Owner: bc_user
--

CREATE TABLE public.course (
    course_id character varying(20) NOT NULL,
    course_title character varying(200),
    course_credit integer,
    course_contact_period integer,
    course_semester integer,
    course_branch character varying,
    course_islab boolean,
    course_iscontinous boolean,
    course_staff_id integer
);


ALTER TABLE public.course OWNER TO bc_user;

--
-- Name: staff; Type: TABLE; Schema: public; Owner: bc_user
--

CREATE TABLE public.staff (
    staff_id integer NOT NULL,
    staff_name character varying(50),
    staff_category character varying(50),
    staff_designation character varying(200),
    staff_expertise character varying,
    staff_qualification character varying,
    staff_email_address character varying,
    staff_phone integer
);


ALTER TABLE public.staff OWNER TO bc_user;

--
-- Name: staff_staff_id_seq; Type: SEQUENCE; Schema: public; Owner: bc_user
--

CREATE SEQUENCE public.staff_staff_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.staff_staff_id_seq OWNER TO bc_user;

--
-- Name: staff_staff_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: bc_user
--

ALTER SEQUENCE public.staff_staff_id_seq OWNED BY public.staff.staff_id;


--
-- Name: admin login_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin ALTER COLUMN login_id SET DEFAULT nextval('public.admin_login_id_seq'::regclass);


--
-- Name: staff staff_id; Type: DEFAULT; Schema: public; Owner: bc_user
--

ALTER TABLE ONLY public.staff ALTER COLUMN staff_id SET DEFAULT nextval('public.staff_staff_id_seq'::regclass);


--
-- Data for Name: admin; Type: TABLE DATA; Schema: public; Owner: postgres
--

-- COPY public.admin (login_id, email_address, password) FROM stdin;
-- 1	abc@mail.com	12345678
-- \.


--
-- Data for Name: course; Type: TABLE DATA; Schema: public; Owner: bc_user
--

-- COPY public.course (course_id, course_title, course_credit, course_contact_period, course_semester, course_branch, course_islab, course_iscontinous, course_staff_id) FROM stdin;
-- MA7351	Mathematics	4	4	5	IT	f	t	5
-- XC1234	DATA STRUCTURES LAB	2	4	8	IT/CS	t	f	4
-- MA4042	SOFTWARE PROJECT MANAGEMENT	4	4	10	IT	f	t	2
-- MA1234	NUMERICAL METHODS	3	4	10	CS	t	t	1
-- \.


--
-- Data for Name: staff; Type: TABLE DATA; Schema: public; Owner: bc_user
--

-- COPY public.staff (staff_id, staff_name, staff_category, staff_designation, staff_expertise, staff_qualification, staff_email_address, staff_phone) FROM stdin;
-- 1	Staff1	Computer Science	Computing	\N	\N	\N	\N
-- 2	Staff2	Mathematics	Numerical,Statistics	\N	\N	\N	\N
-- 3	Staff3	Computer Science	Cloud Computing	\N	\N	\N	\N
-- 4	Staff4	Mathematics	Probability	\N	\N	\N	\N
-- 5	Staff 5	Mathematics	Algebra	\N	\N	\N	\N
-- 6	Staff 6	Computer science	python	\N	\N	\N	\N
-- \.


--
-- Name: admin_login_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.admin_login_id_seq', 1, true);


--
-- Name: staff_staff_id_seq; Type: SEQUENCE SET; Schema: public; Owner: bc_user
--

SELECT pg_catalog.setval('public.staff_staff_id_seq', 7, true);


--
-- Name: admin admin_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_pkey PRIMARY KEY (login_id);


--
-- Name: course course_pkey; Type: CONSTRAINT; Schema: public; Owner: bc_user
--

ALTER TABLE ONLY public.course
    ADD CONSTRAINT course_pkey PRIMARY KEY (course_id);


--
-- Name: staff staff_pkey; Type: CONSTRAINT; Schema: public; Owner: bc_user
--

ALTER TABLE ONLY public.staff
    ADD CONSTRAINT staff_pkey PRIMARY KEY (staff_id);


--
-- Name: course course_course_staff_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: bc_user
--

ALTER TABLE ONLY public.course
    ADD CONSTRAINT course_course_staff_id_fkey FOREIGN KEY (course_staff_id) REFERENCES public.staff(staff_id) NOT VALID;


--
-- PostgreSQL database dump complete
--

