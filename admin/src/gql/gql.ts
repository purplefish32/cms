/* eslint-disable */
import * as graphql from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "query TagsTable {\n  summaryTaxonomies(where: { taxonomy: { _eq: \"tags\" } }) {\n    __typename\n    name\n    slug\n    description\n    count\n  }\n}\n": graphql.TagsTableDocument,
    "mutation deletePost($where: posts_bool_exp!) {\n  deletePosts(where: $where) {\n    __typename\n  }\n}\n": graphql.DeletePostDocument,
    "mutation insertArticle($object: articles_insert_input!) {\n  insertArticle(object: $object) {\n    __typename\n    postId\n  }\n}\n": graphql.InsertArticleDocument,
    "mutation insertPage($object: pages_insert_input!) {\n  insertPage(object: $object) {\n    __typename\n    postId\n  }\n}\n": graphql.InsertPageDocument,
    "mutation insertTerm($object: terms_insert_input!) {\n  insertTerm(object: $object) {\n    __typename\n    slug\n  }\n}\n": graphql.InsertTermDocument,
    "mutation insertTermTaxonomy($object: termTaxonomies_insert_input!) {\n  insertTermTaxonomy(object: $object) {\n    __typename\n    term {\n      slug\n    }\n  }\n}\n": graphql.InsertTermTaxonomyDocument,
    "mutation updateArticle(\n  $articles_pk_columns: articles_pk_columns_input!\n  $articles_set: articles_set_input\n  $posts_pk_columns: posts_pk_columns_input!\n  $posts_set: posts_set_input\n) {\n  updateArticle(pk_columns: $articles_pk_columns, _set: $articles_set) {\n    __typename\n    postId\n  }\n  updatePost(pk_columns: $posts_pk_columns, _set: $posts_set) {\n    __typename\n    id\n  }\n}\n": graphql.UpdateArticleDocument,
    "mutation updatePage(\n  $pages_pk_columns: pages_pk_columns_input!\n  $pages_set: pages_set_input\n  $posts_pk_columns: posts_pk_columns_input!\n  $posts_set: posts_set_input\n) {\n  updatePage(pk_columns: $pages_pk_columns, _set: $pages_set) {\n    __typename\n    postId\n  }\n  updatePost(pk_columns: $posts_pk_columns, _set: $posts_set) {\n    __typename\n    id\n  }\n}\n": graphql.UpdatePageDocument,
    "mutation updatePost(\n  $pk_columns: posts_pk_columns_input!\n  $_set: posts_set_input\n) {\n  updatePost(pk_columns: $pk_columns, _set: $_set) {\n    __typename\n    id\n  }\n}\n": graphql.UpdatePostDocument,
    "query article($uuid: uuid!) {\n  article(postId: $uuid) {\n    __typename\n    postId\n    post {\n      __typename\n      title\n      description\n      slug\n    }\n    body\n    excerpt\n    state\n  }\n}\n": graphql.ArticleDocument,
    "query articles($where: articles_bool_exp) {\n  articles(where: $where) {\n    __typename\n    postId\n    state\n    post {\n      __typename\n      title\n      type\n      slug\n      createdAt\n    }\n  }\n}\n": graphql.ArticlesDocument,
    "query articlesAggregate($where: articles_bool_exp) {\n  articlesAggregate(where: $where) {\n    aggregate {\n      __typename\n      count\n    }\n  }\n}\n": graphql.ArticlesAggregateDocument,
    "query page($uuid: uuid!) {\n  page(postId: $uuid) {\n    __typename\n    postId\n    post {\n      __typename\n      title\n      slug\n    }\n    body\n    state\n  }\n}\n": graphql.PageDocument,
    "query pages($where: pages_bool_exp) {\n  pages(where: $where) {\n    __typename\n    postId\n    body\n    post {\n      __typename\n      title\n      type\n      slug\n      createdAt\n    }\n  }\n}\n": graphql.PagesDocument,
    "query pagesAggregate($where: pages_bool_exp) {\n  pagesAggregate(where: $where) {\n    aggregate {\n      __typename\n      count\n    }\n  }\n}\n": graphql.PagesAggregateDocument,
    "query termTaxonomies($where: termTaxonomies_bool_exp) {\n  termTaxonomies(where: $where) {\n    __typename\n    taxonomy\n    description\n    parentSlug\n    term {\n      __typename\n      name\n      slug\n    }\n  }\n}\n": graphql.TermTaxonomiesDocument,
};

export function gql(source: "query TagsTable {\n  summaryTaxonomies(where: { taxonomy: { _eq: \"tags\" } }) {\n    __typename\n    name\n    slug\n    description\n    count\n  }\n}\n"): (typeof documents)["query TagsTable {\n  summaryTaxonomies(where: { taxonomy: { _eq: \"tags\" } }) {\n    __typename\n    name\n    slug\n    description\n    count\n  }\n}\n"];
export function gql(source: "mutation deletePost($where: posts_bool_exp!) {\n  deletePosts(where: $where) {\n    __typename\n  }\n}\n"): (typeof documents)["mutation deletePost($where: posts_bool_exp!) {\n  deletePosts(where: $where) {\n    __typename\n  }\n}\n"];
export function gql(source: "mutation insertArticle($object: articles_insert_input!) {\n  insertArticle(object: $object) {\n    __typename\n    postId\n  }\n}\n"): (typeof documents)["mutation insertArticle($object: articles_insert_input!) {\n  insertArticle(object: $object) {\n    __typename\n    postId\n  }\n}\n"];
export function gql(source: "mutation insertPage($object: pages_insert_input!) {\n  insertPage(object: $object) {\n    __typename\n    postId\n  }\n}\n"): (typeof documents)["mutation insertPage($object: pages_insert_input!) {\n  insertPage(object: $object) {\n    __typename\n    postId\n  }\n}\n"];
export function gql(source: "mutation insertTerm($object: terms_insert_input!) {\n  insertTerm(object: $object) {\n    __typename\n    slug\n  }\n}\n"): (typeof documents)["mutation insertTerm($object: terms_insert_input!) {\n  insertTerm(object: $object) {\n    __typename\n    slug\n  }\n}\n"];
export function gql(source: "mutation insertTermTaxonomy($object: termTaxonomies_insert_input!) {\n  insertTermTaxonomy(object: $object) {\n    __typename\n    term {\n      slug\n    }\n  }\n}\n"): (typeof documents)["mutation insertTermTaxonomy($object: termTaxonomies_insert_input!) {\n  insertTermTaxonomy(object: $object) {\n    __typename\n    term {\n      slug\n    }\n  }\n}\n"];
export function gql(source: "mutation updateArticle(\n  $articles_pk_columns: articles_pk_columns_input!\n  $articles_set: articles_set_input\n  $posts_pk_columns: posts_pk_columns_input!\n  $posts_set: posts_set_input\n) {\n  updateArticle(pk_columns: $articles_pk_columns, _set: $articles_set) {\n    __typename\n    postId\n  }\n  updatePost(pk_columns: $posts_pk_columns, _set: $posts_set) {\n    __typename\n    id\n  }\n}\n"): (typeof documents)["mutation updateArticle(\n  $articles_pk_columns: articles_pk_columns_input!\n  $articles_set: articles_set_input\n  $posts_pk_columns: posts_pk_columns_input!\n  $posts_set: posts_set_input\n) {\n  updateArticle(pk_columns: $articles_pk_columns, _set: $articles_set) {\n    __typename\n    postId\n  }\n  updatePost(pk_columns: $posts_pk_columns, _set: $posts_set) {\n    __typename\n    id\n  }\n}\n"];
export function gql(source: "mutation updatePage(\n  $pages_pk_columns: pages_pk_columns_input!\n  $pages_set: pages_set_input\n  $posts_pk_columns: posts_pk_columns_input!\n  $posts_set: posts_set_input\n) {\n  updatePage(pk_columns: $pages_pk_columns, _set: $pages_set) {\n    __typename\n    postId\n  }\n  updatePost(pk_columns: $posts_pk_columns, _set: $posts_set) {\n    __typename\n    id\n  }\n}\n"): (typeof documents)["mutation updatePage(\n  $pages_pk_columns: pages_pk_columns_input!\n  $pages_set: pages_set_input\n  $posts_pk_columns: posts_pk_columns_input!\n  $posts_set: posts_set_input\n) {\n  updatePage(pk_columns: $pages_pk_columns, _set: $pages_set) {\n    __typename\n    postId\n  }\n  updatePost(pk_columns: $posts_pk_columns, _set: $posts_set) {\n    __typename\n    id\n  }\n}\n"];
export function gql(source: "mutation updatePost(\n  $pk_columns: posts_pk_columns_input!\n  $_set: posts_set_input\n) {\n  updatePost(pk_columns: $pk_columns, _set: $_set) {\n    __typename\n    id\n  }\n}\n"): (typeof documents)["mutation updatePost(\n  $pk_columns: posts_pk_columns_input!\n  $_set: posts_set_input\n) {\n  updatePost(pk_columns: $pk_columns, _set: $_set) {\n    __typename\n    id\n  }\n}\n"];
export function gql(source: "query article($uuid: uuid!) {\n  article(postId: $uuid) {\n    __typename\n    postId\n    post {\n      __typename\n      title\n      description\n      slug\n    }\n    body\n    excerpt\n    state\n  }\n}\n"): (typeof documents)["query article($uuid: uuid!) {\n  article(postId: $uuid) {\n    __typename\n    postId\n    post {\n      __typename\n      title\n      description\n      slug\n    }\n    body\n    excerpt\n    state\n  }\n}\n"];
export function gql(source: "query articles($where: articles_bool_exp) {\n  articles(where: $where) {\n    __typename\n    postId\n    state\n    post {\n      __typename\n      title\n      type\n      slug\n      createdAt\n    }\n  }\n}\n"): (typeof documents)["query articles($where: articles_bool_exp) {\n  articles(where: $where) {\n    __typename\n    postId\n    state\n    post {\n      __typename\n      title\n      type\n      slug\n      createdAt\n    }\n  }\n}\n"];
export function gql(source: "query articlesAggregate($where: articles_bool_exp) {\n  articlesAggregate(where: $where) {\n    aggregate {\n      __typename\n      count\n    }\n  }\n}\n"): (typeof documents)["query articlesAggregate($where: articles_bool_exp) {\n  articlesAggregate(where: $where) {\n    aggregate {\n      __typename\n      count\n    }\n  }\n}\n"];
export function gql(source: "query page($uuid: uuid!) {\n  page(postId: $uuid) {\n    __typename\n    postId\n    post {\n      __typename\n      title\n      slug\n    }\n    body\n    state\n  }\n}\n"): (typeof documents)["query page($uuid: uuid!) {\n  page(postId: $uuid) {\n    __typename\n    postId\n    post {\n      __typename\n      title\n      slug\n    }\n    body\n    state\n  }\n}\n"];
export function gql(source: "query pages($where: pages_bool_exp) {\n  pages(where: $where) {\n    __typename\n    postId\n    body\n    post {\n      __typename\n      title\n      type\n      slug\n      createdAt\n    }\n  }\n}\n"): (typeof documents)["query pages($where: pages_bool_exp) {\n  pages(where: $where) {\n    __typename\n    postId\n    body\n    post {\n      __typename\n      title\n      type\n      slug\n      createdAt\n    }\n  }\n}\n"];
export function gql(source: "query pagesAggregate($where: pages_bool_exp) {\n  pagesAggregate(where: $where) {\n    aggregate {\n      __typename\n      count\n    }\n  }\n}\n"): (typeof documents)["query pagesAggregate($where: pages_bool_exp) {\n  pagesAggregate(where: $where) {\n    aggregate {\n      __typename\n      count\n    }\n  }\n}\n"];
export function gql(source: "query termTaxonomies($where: termTaxonomies_bool_exp) {\n  termTaxonomies(where: $where) {\n    __typename\n    taxonomy\n    description\n    parentSlug\n    term {\n      __typename\n      name\n      slug\n    }\n  }\n}\n"): (typeof documents)["query termTaxonomies($where: termTaxonomies_bool_exp) {\n  termTaxonomies(where: $where) {\n    __typename\n    taxonomy\n    description\n    parentSlug\n    term {\n      __typename\n      name\n      slug\n    }\n  }\n}\n"];

export function gql(source: string): unknown;
export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;