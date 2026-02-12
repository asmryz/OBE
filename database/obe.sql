--
-- PostgreSQL database dump
--

DROP DATABASE IF EXISTS obe;
CREATE DATABASE obe;
\connect obe

\restrict t2HjgptPSGXIEsvtuHWjonUg7AuUMQh6Nb1kSQbOQnm9tshbdNAvtu9f1pNXMff

-- Dumped from database version 18.1 (Debian 18.1-1.pgdg13+2)
-- Dumped by pg_dump version 18.1 (Debian 18.1-1.pgdg13+2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
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
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    userid integer NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(100) NOT NULL,
    fullname character varying(100) NOT NULL,
    vcode character varying(10),
    verify boolean DEFAULT false
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- Name: user_userid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."user" ALTER COLUMN userid ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_userid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user" (userid, email, password, fullname, vcode, verify) FROM stdin;
\.


--
-- Name: user_userid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_userid_seq', 1, false);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (userid);


--
-- PostgreSQL database dump complete
--

\unrestrict t2HjgptPSGXIEsvtuHWjonUg7AuUMQh6Nb1kSQbOQnm9tshbdNAvtu9f1pNXMff

