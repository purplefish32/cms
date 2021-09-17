SET check_function_bodies = false;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.comments (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    author_id uuid,
    parent_id uuid,
    content text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    meta jsonb,
    status text,
    post_id uuid NOT NULL
);
CREATE TABLE public.posts (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    slug text NOT NULL,
    title text NOT NULL,
    body text,
    excerpt text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    type text,
    author_id uuid,
    status text DEFAULT 'draft'::text NOT NULL,
    meta jsonb
);
CREATE TABLE public.taxonomies (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name text NOT NULL,
    description text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    meta jsonb,
    parent_id uuid
);
CREATE TABLE public.term_relationships (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    post_id uuid NOT NULL,
    term_id uuid NOT NULL
);
CREATE TABLE public.terms (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name text NOT NULL,
    slug text NOT NULL,
    taxonomy_id uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    meta jsonb
);
CREATE TABLE public.users (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    display_name text,
    avatar_url text,
    meta jsonb
);
ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.term_relationships
    ADD CONSTRAINT post_terms_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_slug_key UNIQUE (slug);
ALTER TABLE ONLY public.taxonomies
    ADD CONSTRAINT taxonomies_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.terms
    ADD CONSTRAINT terms_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.terms
    ADD CONSTRAINT terms_slug_key UNIQUE (slug);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
CREATE TRIGGER set_public_comments_updated_at BEFORE UPDATE ON public.comments FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_comments_updated_at ON public.comments IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_posts_updated_at BEFORE UPDATE ON public.posts FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_posts_updated_at ON public.posts IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_taxonomies_updated_at BEFORE UPDATE ON public.taxonomies FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_taxonomies_updated_at ON public.taxonomies IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_terms_updated_at BEFORE UPDATE ON public.terms FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_terms_updated_at ON public.terms IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_users_updated_at BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES public.comments(id) ON UPDATE SET NULL ON DELETE SET NULL;
ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.posts(id) ON UPDATE SET NULL ON DELETE SET NULL;
ALTER TABLE ONLY public.term_relationships
    ADD CONSTRAINT post_terms_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.posts(id) ON UPDATE SET NULL ON DELETE SET NULL;
ALTER TABLE ONLY public.taxonomies
    ADD CONSTRAINT taxonomies_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES public.taxonomies(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.term_relationships
    ADD CONSTRAINT term_relationships_term_id_fkey FOREIGN KEY (term_id) REFERENCES public.terms(id) ON UPDATE SET NULL ON DELETE SET NULL;
ALTER TABLE ONLY public.terms
    ADD CONSTRAINT terms_taxonomy_id_fkey FOREIGN KEY (taxonomy_id) REFERENCES public.taxonomies(id) ON UPDATE SET NULL ON DELETE SET NULL;
