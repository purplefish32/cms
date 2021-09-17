pg_dump: warning: there are circular foreign-key constraints on this table:
pg_dump:   taxonomies
pg_dump: You might not be able to restore the dump without using --disable-triggers or temporarily dropping the constraints.
pg_dump: Consider using a full dump instead of a --data-only dump to avoid this problem.
pg_dump: warning: there are circular foreign-key constraints on this table:
pg_dump:   comments
pg_dump: You might not be able to restore the dump without using --disable-triggers or temporarily dropping the constraints.
pg_dump: Consider using a full dump instead of a --data-only dump to avoid this problem.
--
-- PostgreSQL database dump
--

-- Dumped from database version 12.5 (Debian 12.5-1.pgdg100+1)
-- Dumped by pg_dump version 12.5 (Debian 12.5-1.pgdg100+1)

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

--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.posts (id, slug, title, body, excerpt, created_at, updated_at, type, author_id, status, meta) FROM stdin;
72b8df30-b9cb-49d6-9998-fc61e333e50c	post-1	My first Post	Lipsum lorem ipsum	Mini Lipsum	2021-03-01 23:11:40.456659+00	2021-03-01 23:18:43.484081+00	post	\N	draft	\N
7c94d90d-ecd2-42c8-a988-b2c2fa51c798	about	About	Lorem Ipsum	Lorem	2021-03-01 23:18:33.887667+00	2021-03-02 17:31:19.979907+00	page	\N	draft	\N
ab7c0973-58d4-4ac3-8502-82973c66a8a6	contact	Contact	Lipsum lorem ipsum	Lipsum	2021-03-02 18:47:27.428955+00	2021-03-02 18:47:27.428955+00	page	\N	draft	\N
\.


--
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.comments (id, author_id, parent_id, content, created_at, updated_at, meta, status, post_id) FROM stdin;
58a2df13-fa02-4213-9e74-337177c033a0	\N	\N	Woot!	2021-08-01 22:06:49.331681+00	2021-08-01 22:09:07.376061+00	\N	\N	72b8df30-b9cb-49d6-9998-fc61e333e50c
6ec0a67e-cc84-40b0-ad3a-7b310105864d	\N	58a2df13-fa02-4213-9e74-337177c033a0	sub comment	2021-08-01 22:17:33.489048+00	2021-08-01 22:17:33.489048+00	\N	\N	72b8df30-b9cb-49d6-9998-fc61e333e50c
78adf826-ca4f-4b45-a984-56f86778cf5a	\N	6ec0a67e-cc84-40b0-ad3a-7b310105864d	Sub sub comment	2021-08-01 22:18:14.423757+00	2021-08-01 22:18:45.646496+00	\N	\N	72b8df30-b9cb-49d6-9998-fc61e333e50c
\.


--
-- Data for Name: taxonomies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.taxonomies (id, name, description, created_at, updated_at, meta, parent_id) FROM stdin;
496109d7-fd5a-4bc4-a1fc-a36980812e6d	tags	a list of tags	2021-03-01 23:12:24.484327+00	2021-03-01 23:12:27.229752+00	\N	\N
aa6553c3-70cd-4d38-b6fd-91f9513a84bc	categories	a list of categories	2021-03-01 23:12:24.484327+00	2021-03-01 23:12:27.229752+00	\N	\N
822c0c04-14ab-4dfa-927d-dbbd9dc21d8c	Sub category	Sub category	2021-08-01 21:51:16.51183+00	2021-08-01 21:51:26.913719+00	\N	aa6553c3-70cd-4d38-b6fd-91f9513a84bc
f5758fef-c9a5-4bdb-a3a3-013b2f15b5f2	Sub sub category	Sub sub category	2021-08-01 22:00:07.877733+00	2021-08-01 22:00:07.877733+00	\N	822c0c04-14ab-4dfa-927d-dbbd9dc21d8c
\.


--
-- Data for Name: terms; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.terms (id, name, slug, taxonomy_id, created_at, updated_at, meta) FROM stdin;
b3d3018a-c4a4-45c4-b769-da24bb3cfb06	Tag1	tag1	496109d7-fd5a-4bc4-a1fc-a36980812e6d	2021-03-01 23:12:12.52638+00	2021-03-01 23:12:15.18279+00	\N
bff14a8d-28d8-436e-9407-5b2c1b4b6eba	Tag2	tag2	496109d7-fd5a-4bc4-a1fc-a36980812e6d	2021-03-01 23:12:12.52638+00	2021-08-01 21:34:56.028311+00	\N
\.


--
-- Data for Name: term_relationships; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.term_relationships (id, post_id, term_id) FROM stdin;
ac158a61-4ad2-4831-b3d8-1dd7e1e92c56	72b8df30-b9cb-49d6-9998-fc61e333e50c	b3d3018a-c4a4-45c4-b769-da24bb3cfb06
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, created_at, updated_at, display_name, avatar_url, meta) FROM stdin;
3a9161b3-253d-42c7-87c6-534869d9724c	2021-03-01 18:53:41.852673+00	2021-09-16 22:12:05.833382+00	purplefish32@gmail.comm	hi	\N
\.


--
-- PostgreSQL database dump complete
--

