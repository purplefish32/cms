/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  citext: any;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

export type Boolean_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _cast?: InputMaybe<Boolean_Cast_Exp>;
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type MeiliSearchOutput = {
  __typename?: 'MeiliSearchOutput';
  hits?: Maybe<Scalars['jsonb']>;
};

export type Session = {
  __typename?: 'Session';
  session: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "article_states" */
export type ArticleStates = {
  __typename?: 'articleStates';
  articleState: Scalars['String'];
  /** An array relationship */
  articles: Array<Articles>;
  /** An aggregate relationship */
  articles_aggregate: Articles_Aggregate;
};


/** columns and relationships of "article_states" */
export type ArticleStatesArticlesArgs = {
  distinct_on?: InputMaybe<Array<Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Articles_Order_By>>;
  where?: InputMaybe<Articles_Bool_Exp>;
};


/** columns and relationships of "article_states" */
export type ArticleStatesArticles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Articles_Order_By>>;
  where?: InputMaybe<Articles_Bool_Exp>;
};

/** aggregated selection of "article_states" */
export type ArticleStates_Aggregate = {
  __typename?: 'articleStates_aggregate';
  aggregate?: Maybe<ArticleStates_Aggregate_Fields>;
  nodes: Array<ArticleStates>;
};

/** aggregate fields of "article_states" */
export type ArticleStates_Aggregate_Fields = {
  __typename?: 'articleStates_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ArticleStates_Max_Fields>;
  min?: Maybe<ArticleStates_Min_Fields>;
};


/** aggregate fields of "article_states" */
export type ArticleStates_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<ArticleStates_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "article_states". All fields are combined with a logical 'AND'. */
export type ArticleStates_Bool_Exp = {
  _and?: InputMaybe<Array<ArticleStates_Bool_Exp>>;
  _not?: InputMaybe<ArticleStates_Bool_Exp>;
  _or?: InputMaybe<Array<ArticleStates_Bool_Exp>>;
  articleState?: InputMaybe<String_Comparison_Exp>;
  articles?: InputMaybe<Articles_Bool_Exp>;
};

/** unique or primary key constraints on table "article_states" */
export enum ArticleStates_Constraint {
  /** unique or primary key constraint on columns "article_state" */
  ArticleStatesPkey = 'article_states_pkey'
}

export enum ArticleStates_Enum {
  Archived = 'archived',
  Draft = 'draft',
  Published = 'published'
}

/** Boolean expression to compare columns of type "articleStates_enum". All fields are combined with logical 'AND'. */
export type ArticleStates_Enum_Comparison_Exp = {
  _eq?: InputMaybe<ArticleStates_Enum>;
  _in?: InputMaybe<Array<ArticleStates_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<ArticleStates_Enum>;
  _nin?: InputMaybe<Array<ArticleStates_Enum>>;
};

/** input type for inserting data into table "article_states" */
export type ArticleStates_Insert_Input = {
  articleState?: InputMaybe<Scalars['String']>;
  articles?: InputMaybe<Articles_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type ArticleStates_Max_Fields = {
  __typename?: 'articleStates_max_fields';
  articleState?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type ArticleStates_Min_Fields = {
  __typename?: 'articleStates_min_fields';
  articleState?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "article_states" */
export type ArticleStates_Mutation_Response = {
  __typename?: 'articleStates_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ArticleStates>;
};

/** input type for inserting object relation for remote table "article_states" */
export type ArticleStates_Obj_Rel_Insert_Input = {
  data: ArticleStates_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<ArticleStates_On_Conflict>;
};

/** on_conflict condition type for table "article_states" */
export type ArticleStates_On_Conflict = {
  constraint: ArticleStates_Constraint;
  update_columns?: Array<ArticleStates_Update_Column>;
  where?: InputMaybe<ArticleStates_Bool_Exp>;
};

/** Ordering options when selecting data from "article_states". */
export type ArticleStates_Order_By = {
  articleState?: InputMaybe<Order_By>;
  articles_aggregate?: InputMaybe<Articles_Aggregate_Order_By>;
};

/** primary key columns input for table: articleStates */
export type ArticleStates_Pk_Columns_Input = {
  articleState: Scalars['String'];
};

/** select columns of table "article_states" */
export enum ArticleStates_Select_Column {
  /** column name */
  ArticleState = 'articleState'
}

/** input type for updating data in table "article_states" */
export type ArticleStates_Set_Input = {
  articleState?: InputMaybe<Scalars['String']>;
};

/** update columns of table "article_states" */
export enum ArticleStates_Update_Column {
  /** column name */
  ArticleState = 'articleState'
}

/** columns and relationships of "articles" */
export type Articles = {
  __typename?: 'articles';
  /** An object relationship */
  article_state: ArticleStates;
  body?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  /** An object relationship */
  post: Posts;
  postId: Scalars['uuid'];
  state: ArticleStates_Enum;
};

/** aggregated selection of "articles" */
export type Articles_Aggregate = {
  __typename?: 'articles_aggregate';
  aggregate?: Maybe<Articles_Aggregate_Fields>;
  nodes: Array<Articles>;
};

/** aggregate fields of "articles" */
export type Articles_Aggregate_Fields = {
  __typename?: 'articles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Articles_Max_Fields>;
  min?: Maybe<Articles_Min_Fields>;
};


/** aggregate fields of "articles" */
export type Articles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Articles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "articles" */
export type Articles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Articles_Max_Order_By>;
  min?: InputMaybe<Articles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "articles" */
export type Articles_Arr_Rel_Insert_Input = {
  data: Array<Articles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Articles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "articles". All fields are combined with a logical 'AND'. */
export type Articles_Bool_Exp = {
  _and?: InputMaybe<Array<Articles_Bool_Exp>>;
  _not?: InputMaybe<Articles_Bool_Exp>;
  _or?: InputMaybe<Array<Articles_Bool_Exp>>;
  article_state?: InputMaybe<ArticleStates_Bool_Exp>;
  body?: InputMaybe<String_Comparison_Exp>;
  excerpt?: InputMaybe<String_Comparison_Exp>;
  post?: InputMaybe<Posts_Bool_Exp>;
  postId?: InputMaybe<Uuid_Comparison_Exp>;
  state?: InputMaybe<ArticleStates_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "articles" */
export enum Articles_Constraint {
  /** unique or primary key constraint on columns "post_id" */
  ArticlesPkey = 'articles_pkey'
}

/** input type for inserting data into table "articles" */
export type Articles_Insert_Input = {
  article_state?: InputMaybe<ArticleStates_Obj_Rel_Insert_Input>;
  body?: InputMaybe<Scalars['String']>;
  excerpt?: InputMaybe<Scalars['String']>;
  post?: InputMaybe<Posts_Obj_Rel_Insert_Input>;
  postId?: InputMaybe<Scalars['uuid']>;
  state?: InputMaybe<ArticleStates_Enum>;
};

/** aggregate max on columns */
export type Articles_Max_Fields = {
  __typename?: 'articles_max_fields';
  body?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "articles" */
export type Articles_Max_Order_By = {
  body?: InputMaybe<Order_By>;
  excerpt?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Articles_Min_Fields = {
  __typename?: 'articles_min_fields';
  body?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "articles" */
export type Articles_Min_Order_By = {
  body?: InputMaybe<Order_By>;
  excerpt?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "articles" */
export type Articles_Mutation_Response = {
  __typename?: 'articles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Articles>;
};

/** input type for inserting object relation for remote table "articles" */
export type Articles_Obj_Rel_Insert_Input = {
  data: Articles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Articles_On_Conflict>;
};

/** on_conflict condition type for table "articles" */
export type Articles_On_Conflict = {
  constraint: Articles_Constraint;
  update_columns?: Array<Articles_Update_Column>;
  where?: InputMaybe<Articles_Bool_Exp>;
};

/** Ordering options when selecting data from "articles". */
export type Articles_Order_By = {
  article_state?: InputMaybe<ArticleStates_Order_By>;
  body?: InputMaybe<Order_By>;
  excerpt?: InputMaybe<Order_By>;
  post?: InputMaybe<Posts_Order_By>;
  postId?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
};

/** primary key columns input for table: articles */
export type Articles_Pk_Columns_Input = {
  postId: Scalars['uuid'];
};

/** select columns of table "articles" */
export enum Articles_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  Excerpt = 'excerpt',
  /** column name */
  PostId = 'postId',
  /** column name */
  State = 'state'
}

/** input type for updating data in table "articles" */
export type Articles_Set_Input = {
  body?: InputMaybe<Scalars['String']>;
  excerpt?: InputMaybe<Scalars['String']>;
  postId?: InputMaybe<Scalars['uuid']>;
  state?: InputMaybe<ArticleStates_Enum>;
};

/** update columns of table "articles" */
export enum Articles_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  Excerpt = 'excerpt',
  /** column name */
  PostId = 'postId',
  /** column name */
  State = 'state'
}

/** columns and relationships of "auth.provider_requests" */
export type AuthProviderRequests = {
  __typename?: 'authProviderRequests';
  id: Scalars['uuid'];
  options?: Maybe<Scalars['jsonb']>;
};


/** columns and relationships of "auth.provider_requests" */
export type AuthProviderRequestsOptionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate = {
  __typename?: 'authProviderRequests_aggregate';
  aggregate?: Maybe<AuthProviderRequests_Aggregate_Fields>;
  nodes: Array<AuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_Fields = {
  __typename?: 'authProviderRequests_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviderRequests_Max_Fields>;
  min?: Maybe<AuthProviderRequests_Min_Fields>;
};


/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Append_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequests_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  _not?: InputMaybe<AuthProviderRequests_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  options?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export enum AuthProviderRequests_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProviderRequestsPkey = 'provider_requests_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthProviderRequests_Delete_At_Path_Input = {
  options?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthProviderRequests_Delete_Elem_Input = {
  options?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthProviderRequests_Delete_Key_Input = {
  options?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequests_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type AuthProviderRequests_Max_Fields = {
  __typename?: 'authProviderRequests_max_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type AuthProviderRequests_Min_Fields = {
  __typename?: 'authProviderRequests_min_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequests_Mutation_Response = {
  __typename?: 'authProviderRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviderRequests>;
};

/** on_conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequests_On_Conflict = {
  constraint: AuthProviderRequests_Constraint;
  update_columns?: Array<AuthProviderRequests_Update_Column>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequests_Order_By = {
  id?: InputMaybe<Order_By>;
  options?: InputMaybe<Order_By>;
};

/** primary key columns input for table: authProviderRequests */
export type AuthProviderRequests_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Prepend_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequests_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** update columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

/** columns and relationships of "auth.providers" */
export type AuthProviders = {
  __typename?: 'authProviders';
  id: Scalars['String'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** columns and relationships of "auth.providers" */
export type AuthProvidersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** columns and relationships of "auth.providers" */
export type AuthProvidersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type AuthProviders_Aggregate = {
  __typename?: 'authProviders_aggregate';
  aggregate?: Maybe<AuthProviders_Aggregate_Fields>;
  nodes: Array<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_Fields = {
  __typename?: 'authProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviders_Max_Fields>;
  min?: Maybe<AuthProviders_Min_Fields>;
};


/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type AuthProviders_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthProviders_Max_Fields = {
  __typename?: 'authProviders_max_fields';
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthProviders_Min_Fields = {
  __typename?: 'authProviders_min_fields';
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProviders_Mutation_Response = {
  __typename?: 'authProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProviders_Obj_Rel_Insert_Input = {
  data: AuthProviders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};

/** on_conflict condition type for table "auth.providers" */
export type AuthProviders_On_Conflict = {
  constraint: AuthProviders_Constraint;
  update_columns?: Array<AuthProviders_Update_Column>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProviders_Order_By = {
  id?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: authProviders */
export type AuthProviders_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "auth.providers" */
export enum AuthProviders_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "auth.providers" */
export type AuthProviders_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.providers" */
export enum AuthProviders_Update_Column {
  /** column name */
  Id = 'id'
}

/** columns and relationships of "auth.refresh_tokens" */
export type AuthRefreshTokens = {
  __typename?: 'authRefreshTokens';
  createdAt: Scalars['timestamptz'];
  expiresAt: Scalars['timestamptz'];
  refreshToken: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate = {
  __typename?: 'authRefreshTokens_aggregate';
  aggregate?: Maybe<AuthRefreshTokens_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokens>;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Fields = {
  __typename?: 'authRefreshTokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRefreshTokens_Max_Fields>;
  min?: Maybe<AuthRefreshTokens_Min_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthRefreshTokens_Max_Order_By>;
  min?: InputMaybe<AuthRefreshTokens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type AuthRefreshTokens_Arr_Rel_Insert_Input = {
  data: Array<AuthRefreshTokens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokens_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  _not?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  refreshToken?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Constraint {
  /** unique or primary key constraint on columns "refresh_token" */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokens_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  refreshToken?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthRefreshTokens_Max_Fields = {
  __typename?: 'authRefreshTokens_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  refreshToken?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthRefreshTokens_Min_Fields = {
  __typename?: 'authRefreshTokens_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  refreshToken?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokens_Mutation_Response = {
  __typename?: 'authRefreshTokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokens_On_Conflict = {
  constraint: AuthRefreshTokens_Constraint;
  update_columns?: Array<AuthRefreshTokens_Update_Column>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokens_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: authRefreshTokens */
export type AuthRefreshTokens_Pk_Columns_Input = {
  refreshToken: Scalars['uuid'];
};

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokens_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  refreshToken?: InputMaybe<Scalars['uuid']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserId = 'userId'
}

/** columns and relationships of "auth.roles" */
export type AuthRoles = {
  __typename?: 'authRoles';
  role: Scalars['String'];
  /** An array relationship */
  userRoles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  userRoles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  usersByDefaultRole: Array<Users>;
  /** An aggregate relationship */
  usersByDefaultRole_aggregate: Users_Aggregate;
};


/** columns and relationships of "auth.roles" */
export type AuthRolesUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type AuthRolesUserRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type AuthRolesUsersByDefaultRoleArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type AuthRolesUsersByDefaultRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type AuthRoles_Aggregate = {
  __typename?: 'authRoles_aggregate';
  aggregate?: Maybe<AuthRoles_Aggregate_Fields>;
  nodes: Array<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_Fields = {
  __typename?: 'authRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRoles_Max_Fields>;
  min?: Maybe<AuthRoles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  role?: InputMaybe<String_Comparison_Exp>;
  userRoles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  usersByDefaultRole?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRoles_Constraint {
  /** unique or primary key constraint on columns "role" */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type AuthRoles_Insert_Input = {
  role?: InputMaybe<Scalars['String']>;
  userRoles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  usersByDefaultRole?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthRoles_Max_Fields = {
  __typename?: 'authRoles_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthRoles_Min_Fields = {
  __typename?: 'authRoles_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRoles_Mutation_Response = {
  __typename?: 'authRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRoles_Obj_Rel_Insert_Input = {
  data: AuthRoles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type AuthRoles_On_Conflict = {
  constraint: AuthRoles_Constraint;
  update_columns?: Array<AuthRoles_Update_Column>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRoles_Order_By = {
  role?: InputMaybe<Order_By>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: authRoles */
export type AuthRoles_Pk_Columns_Input = {
  role: Scalars['String'];
};

/** select columns of table "auth.roles" */
export enum AuthRoles_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type AuthRoles_Set_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.roles" */
export enum AuthRoles_Update_Column {
  /** column name */
  Role = 'role'
}

/** columns and relationships of "auth.user_providers" */
export type AuthUserProviders = {
  __typename?: 'authUserProviders';
  accessToken: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  provider: AuthProviders;
  providerId: Scalars['String'];
  providerUserId: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_providers" */
export type AuthUserProviders_Aggregate = {
  __typename?: 'authUserProviders_aggregate';
  aggregate?: Maybe<AuthUserProviders_Aggregate_Fields>;
  nodes: Array<AuthUserProviders>;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_Fields = {
  __typename?: 'authUserProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserProviders_Max_Fields>;
  min?: Maybe<AuthUserProviders_Min_Fields>;
};


/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_providers" */
export type AuthUserProviders_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserProviders_Max_Order_By>;
  min?: InputMaybe<AuthUserProviders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
export type AuthUserProviders_Arr_Rel_Insert_Input = {
  data: Array<AuthUserProviders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthUserProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  accessToken?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  provider?: InputMaybe<AuthProviders_Bool_Exp>;
  providerId?: InputMaybe<String_Comparison_Exp>;
  providerUserId?: InputMaybe<String_Comparison_Exp>;
  refreshToken?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export enum AuthUserProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserProvidersPkey = 'user_providers_pkey',
  /** unique or primary key constraint on columns "provider_user_id", "provider_id" */
  UserProvidersProviderIdProviderUserIdKey = 'user_providers_provider_id_provider_user_id_key',
  /** unique or primary key constraint on columns "provider_id", "user_id" */
  UserProvidersUserIdProviderIdKey = 'user_providers_user_id_provider_id_key'
}

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProviders_Insert_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  provider?: InputMaybe<AuthProviders_Obj_Rel_Insert_Input>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserProviders_Max_Fields = {
  __typename?: 'authUserProviders_max_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_providers" */
export type AuthUserProviders_Max_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserProviders_Min_Fields = {
  __typename?: 'authUserProviders_min_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_providers" */
export type AuthUserProviders_Min_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProviders_Mutation_Response = {
  __typename?: 'authUserProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserProviders>;
};

/** on_conflict condition type for table "auth.user_providers" */
export type AuthUserProviders_On_Conflict = {
  constraint: AuthUserProviders_Constraint;
  update_columns?: Array<AuthUserProviders_Update_Column>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProviders_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider?: InputMaybe<AuthProviders_Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: authUserProviders */
export type AuthUserProviders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_providers" */
export enum AuthUserProviders_Select_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_providers" */
export type AuthUserProviders_Set_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_providers" */
export enum AuthUserProviders_Update_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** columns and relationships of "auth.user_roles" */
export type AuthUserRoles = {
  __typename?: 'authUserRoles';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: AuthRoles;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_roles" */
export type AuthUserRoles_Aggregate = {
  __typename?: 'authUserRoles_aggregate';
  aggregate?: Maybe<AuthUserRoles_Aggregate_Fields>;
  nodes: Array<AuthUserRoles>;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_Fields = {
  __typename?: 'authUserRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserRoles_Max_Fields>;
  min?: Maybe<AuthUserRoles_Min_Fields>;
};


/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_roles" */
export type AuthUserRoles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserRoles_Max_Order_By>;
  min?: InputMaybe<AuthUserRoles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
export type AuthUserRoles_Arr_Rel_Insert_Input = {
  data: Array<AuthUserRoles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthUserRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  roleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export enum AuthUserRoles_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint on columns "role", "user_id" */
  UserRolesUserIdRoleKey = 'user_roles_user_id_role_key'
}

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRoles_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  roleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserRoles_Max_Fields = {
  __typename?: 'authUserRoles_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_roles" */
export type AuthUserRoles_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserRoles_Min_Fields = {
  __typename?: 'authUserRoles_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_roles" */
export type AuthUserRoles_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRoles_Mutation_Response = {
  __typename?: 'authUserRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserRoles>;
};

/** on_conflict condition type for table "auth.user_roles" */
export type AuthUserRoles_On_Conflict = {
  constraint: AuthUserRoles_Constraint;
  update_columns?: Array<AuthUserRoles_Update_Column>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRoles_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  roleByRole?: InputMaybe<AuthRoles_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: authUserRoles */
export type AuthUserRoles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_roles" */
export enum AuthUserRoles_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_roles" */
export type AuthUserRoles_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_roles" */
export enum AuthUserRoles_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

export type Bigint_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _cast?: InputMaybe<Bigint_Cast_Exp>;
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['citext']>;
  _gt?: InputMaybe<Scalars['citext']>;
  _gte?: InputMaybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']>;
  _in?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']>;
  _lt?: InputMaybe<Scalars['citext']>;
  _lte?: InputMaybe<Scalars['citext']>;
  _neq?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']>;
  _nin?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']>;
};

/** columns and relationships of "comments" */
export type Comments = {
  __typename?: 'comments';
  authorId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  comment?: Maybe<Comments>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  meta?: Maybe<Scalars['jsonb']>;
  parentId?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  post: Posts;
  postId: Scalars['uuid'];
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "comments" */
export type CommentsCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "comments" */
export type CommentsComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "comments" */
export type CommentsMetaArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "comments" */
export type Comments_Aggregate = {
  __typename?: 'comments_aggregate';
  aggregate?: Maybe<Comments_Aggregate_Fields>;
  nodes: Array<Comments>;
};

/** aggregate fields of "comments" */
export type Comments_Aggregate_Fields = {
  __typename?: 'comments_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Comments_Max_Fields>;
  min?: Maybe<Comments_Min_Fields>;
};


/** aggregate fields of "comments" */
export type Comments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "comments" */
export type Comments_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Comments_Max_Order_By>;
  min?: InputMaybe<Comments_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Comments_Append_Input = {
  meta?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "comments" */
export type Comments_Arr_Rel_Insert_Input = {
  data: Array<Comments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export type Comments_Bool_Exp = {
  _and?: InputMaybe<Array<Comments_Bool_Exp>>;
  _not?: InputMaybe<Comments_Bool_Exp>;
  _or?: InputMaybe<Array<Comments_Bool_Exp>>;
  authorId?: InputMaybe<Uuid_Comparison_Exp>;
  comment?: InputMaybe<Comments_Bool_Exp>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  meta?: InputMaybe<Jsonb_Comparison_Exp>;
  parentId?: InputMaybe<Uuid_Comparison_Exp>;
  post?: InputMaybe<Posts_Bool_Exp>;
  postId?: InputMaybe<Uuid_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "comments" */
export enum Comments_Constraint {
  /** unique or primary key constraint on columns "id" */
  CommentsPkey = 'comments_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Comments_Delete_At_Path_Input = {
  meta?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Comments_Delete_Elem_Input = {
  meta?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Comments_Delete_Key_Input = {
  meta?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "comments" */
export type Comments_Insert_Input = {
  authorId?: InputMaybe<Scalars['uuid']>;
  comment?: InputMaybe<Comments_Obj_Rel_Insert_Input>;
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  meta?: InputMaybe<Scalars['jsonb']>;
  parentId?: InputMaybe<Scalars['uuid']>;
  post?: InputMaybe<Posts_Obj_Rel_Insert_Input>;
  postId?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Comments_Max_Fields = {
  __typename?: 'comments_max_fields';
  authorId?: Maybe<Scalars['uuid']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  parentId?: Maybe<Scalars['uuid']>;
  postId?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "comments" */
export type Comments_Max_Order_By = {
  authorId?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Comments_Min_Fields = {
  __typename?: 'comments_min_fields';
  authorId?: Maybe<Scalars['uuid']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  parentId?: Maybe<Scalars['uuid']>;
  postId?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "comments" */
export type Comments_Min_Order_By = {
  authorId?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "comments" */
export type Comments_Mutation_Response = {
  __typename?: 'comments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Comments>;
};

/** input type for inserting object relation for remote table "comments" */
export type Comments_Obj_Rel_Insert_Input = {
  data: Comments_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};

/** on_conflict condition type for table "comments" */
export type Comments_On_Conflict = {
  constraint: Comments_Constraint;
  update_columns?: Array<Comments_Update_Column>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

/** Ordering options when selecting data from "comments". */
export type Comments_Order_By = {
  authorId?: InputMaybe<Order_By>;
  comment?: InputMaybe<Comments_Order_By>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  content?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  meta?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  post?: InputMaybe<Posts_Order_By>;
  postId?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: comments */
export type Comments_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Comments_Prepend_Input = {
  meta?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "comments" */
export enum Comments_Select_Column {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  ParentId = 'parentId',
  /** column name */
  PostId = 'postId',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "comments" */
export type Comments_Set_Input = {
  authorId?: InputMaybe<Scalars['uuid']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  meta?: InputMaybe<Scalars['jsonb']>;
  parentId?: InputMaybe<Scalars['uuid']>;
  postId?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "comments" */
export enum Comments_Update_Column {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  ParentId = 'parentId',
  /** column name */
  PostId = 'postId',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "articles" */
  deleteArticle?: Maybe<Articles>;
  /** delete single row from the table: "article_states" */
  deleteArticleState?: Maybe<ArticleStates>;
  /** delete data from the table: "article_states" */
  deleteArticleStates?: Maybe<ArticleStates_Mutation_Response>;
  /** delete data from the table: "articles" */
  deleteArticles?: Maybe<Articles_Mutation_Response>;
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider?: Maybe<AuthProviders>;
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole?: Maybe<AuthRoles>;
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider?: Maybe<AuthUserProviders>;
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole?: Maybe<AuthUserRoles>;
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** delete single row from the table: "comments" */
  deleteComment?: Maybe<Comments>;
  /** delete data from the table: "comments" */
  deleteComments?: Maybe<Comments_Mutation_Response>;
  /** delete single row from the table: "pages" */
  deletePage?: Maybe<Pages>;
  /** delete single row from the table: "page_states" */
  deletePageState?: Maybe<PageStates>;
  /** delete data from the table: "page_states" */
  deletePageStates?: Maybe<PageStates_Mutation_Response>;
  /** delete data from the table: "pages" */
  deletePages?: Maybe<Pages_Mutation_Response>;
  /** delete single row from the table: "posts" */
  deletePost?: Maybe<Posts>;
  /** delete single row from the table: "post_types" */
  deletePostType?: Maybe<PostTypes>;
  /** delete data from the table: "post_types" */
  deletePostTypes?: Maybe<PostTypes_Mutation_Response>;
  /** delete data from the table: "posts" */
  deletePosts?: Maybe<Posts_Mutation_Response>;
  /** delete single row from the table: "term_relationships" */
  deleteRelationship?: Maybe<TermRelationships>;
  /** delete data from the table: "term_relationships" */
  deleteRelationships?: Maybe<TermRelationships_Mutation_Response>;
  /** delete data from the table: "taxonomies" */
  deleteTaxonomies?: Maybe<Taxonomies_Mutation_Response>;
  /** delete single row from the table: "taxonomies" */
  deleteTaxonomy?: Maybe<Taxonomies>;
  /** delete single row from the table: "terms" */
  deleteTerm?: Maybe<Terms>;
  /** delete data from the table: "term_taxonomies" */
  deleteTermTaxonomies?: Maybe<TermTaxonomies_Mutation_Response>;
  /** delete single row from the table: "term_taxonomies" */
  deleteTermTaxonomy?: Maybe<TermTaxonomies>;
  /** delete data from the table: "terms" */
  deleteTerms?: Maybe<Terms_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  deleteUser?: Maybe<Users>;
  /** delete data from the table: "auth.users" */
  deleteUsers?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "articles" */
  insertArticle?: Maybe<Articles>;
  /** insert a single row into the table: "article_states" */
  insertArticleState?: Maybe<ArticleStates>;
  /** insert data into the table: "article_states" */
  insertArticleStates?: Maybe<ArticleStates_Mutation_Response>;
  /** insert data into the table: "articles" */
  insertArticles?: Maybe<Articles_Mutation_Response>;
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider?: Maybe<AuthProviders>;
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** insert data into the table: "auth.providers" */
  insertAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole?: Maybe<AuthRoles>;
  /** insert data into the table: "auth.roles" */
  insertAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider?: Maybe<AuthUserProviders>;
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole?: Maybe<AuthUserRoles>;
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** insert a single row into the table: "pages" */
  insertPage?: Maybe<Pages>;
  /** insert a single row into the table: "page_states" */
  insertPageState?: Maybe<PageStates>;
  /** insert data into the table: "page_states" */
  insertPageStates?: Maybe<PageStates_Mutation_Response>;
  /** insert data into the table: "pages" */
  insertPages?: Maybe<Pages_Mutation_Response>;
  /** insert a single row into the table: "posts" */
  insertPost?: Maybe<Posts>;
  /** insert a single row into the table: "post_types" */
  insertPostType?: Maybe<PostTypes>;
  /** insert data into the table: "post_types" */
  insertPostTypes?: Maybe<PostTypes_Mutation_Response>;
  /** insert data into the table: "posts" */
  insertPosts?: Maybe<Posts_Mutation_Response>;
  /** insert data into the table: "taxonomies" */
  insertTaxonomies?: Maybe<Taxonomies_Mutation_Response>;
  /** insert a single row into the table: "taxonomies" */
  insertTaxonomy?: Maybe<Taxonomies>;
  /** insert a single row into the table: "terms" */
  insertTerm?: Maybe<Terms>;
  /** insert data into the table: "term_taxonomies" */
  insertTermTaxonomies?: Maybe<TermTaxonomies_Mutation_Response>;
  /** insert a single row into the table: "term_taxonomies" */
  insertTermTaxonomy?: Maybe<TermTaxonomies>;
  /** insert data into the table: "terms" */
  insertTerms?: Maybe<Terms_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insertUser?: Maybe<Users>;
  /** insert data into the table: "auth.users" */
  insertUsers?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "comments" */
  instertComment?: Maybe<Comments>;
  /** insert data into the table: "comments" */
  instertComments?: Maybe<Comments_Mutation_Response>;
  /** insert a single row into the table: "term_relationships" */
  instertRelationship?: Maybe<TermRelationships>;
  /** insert data into the table: "term_relationships" */
  instertRelationships?: Maybe<TermRelationships_Mutation_Response>;
  signin?: Maybe<Session>;
  /** update single row of the table: "articles" */
  updateArticle?: Maybe<Articles>;
  /** update single row of the table: "article_states" */
  updateArticleState?: Maybe<ArticleStates>;
  /** update data of the table: "article_states" */
  updateArticleStates?: Maybe<ArticleStates_Mutation_Response>;
  /** update data of the table: "articles" */
  updateArticles?: Maybe<Articles_Mutation_Response>;
  /** update single row of the table: "auth.providers" */
  updateAuthProvider?: Maybe<AuthProviders>;
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** update data of the table: "auth.providers" */
  updateAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  updateAuthRole?: Maybe<AuthRoles>;
  /** update data of the table: "auth.roles" */
  updateAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider?: Maybe<AuthUserProviders>;
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole?: Maybe<AuthUserRoles>;
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** update single row of the table: "comments" */
  updateComment?: Maybe<Comments>;
  /** update data of the table: "comments" */
  updateComments?: Maybe<Comments_Mutation_Response>;
  /** update single row of the table: "pages" */
  updatePage?: Maybe<Pages>;
  /** update single row of the table: "page_states" */
  updatePageState?: Maybe<PageStates>;
  /** update data of the table: "page_states" */
  updatePageStates?: Maybe<PageStates_Mutation_Response>;
  /** update data of the table: "pages" */
  updatePages?: Maybe<Pages_Mutation_Response>;
  /** update single row of the table: "posts" */
  updatePost?: Maybe<Posts>;
  /** update data of the table: "posts" */
  updatePosts?: Maybe<Posts_Mutation_Response>;
  /** update single row of the table: "term_relationships" */
  updateRelationship?: Maybe<TermRelationships>;
  /** update data of the table: "term_relationships" */
  updateRelationships?: Maybe<TermRelationships_Mutation_Response>;
  /** update data of the table: "taxonomies" */
  updateTaxonomies?: Maybe<Taxonomies_Mutation_Response>;
  /** update single row of the table: "taxonomies" */
  updateTaxonomy?: Maybe<Taxonomies>;
  /** update single row of the table: "terms" */
  updateTerm?: Maybe<Terms>;
  /** update data of the table: "term_taxonomies" */
  updateTermTaxonomies?: Maybe<TermTaxonomies_Mutation_Response>;
  /** update single row of the table: "term_taxonomies" */
  updateTermTaxonomy?: Maybe<TermTaxonomies>;
  /** update data of the table: "terms" */
  updateTerms?: Maybe<Terms_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  updateUser?: Maybe<Users>;
  /** update data of the table: "auth.users" */
  updateUsers?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "post_types" */
  updatetPostType?: Maybe<PostTypes>;
  /** update data of the table: "post_types" */
  updatetPostTypes?: Maybe<PostTypes_Mutation_Response>;
};


/** mutation root */
export type Mutation_RootDeleteArticleArgs = {
  postId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteArticleStateArgs = {
  articleState: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteArticleStatesArgs = {
  where: ArticleStates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteArticlesArgs = {
  where: Articles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestsArgs = {
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthProvidersArgs = {
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRoleArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRolesArgs = {
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProvidersArgs = {
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRolesArgs = {
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteCommentArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteCommentsArgs = {
  where: Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeletePageArgs = {
  postId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeletePageStateArgs = {
  pageState: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeletePageStatesArgs = {
  where: PageStates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeletePagesArgs = {
  where: Pages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeletePostArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeletePostTypeArgs = {
  postType: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeletePostTypesArgs = {
  where: PostTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeletePostsArgs = {
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteRelationshipArgs = {
  postId: Scalars['uuid'];
  termTaxonomyId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteRelationshipsArgs = {
  where: TermRelationships_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteTaxonomiesArgs = {
  where: Taxonomies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteTaxonomyArgs = {
  taxonomy: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteTermArgs = {
  slug: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteTermTaxonomiesArgs = {
  where: TermTaxonomies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteTermTaxonomyArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteTermsArgs = {
  where: Terms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsertArticleArgs = {
  object: Articles_Insert_Input;
  on_conflict?: InputMaybe<Articles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertArticleStateArgs = {
  object: ArticleStates_Insert_Input;
  on_conflict?: InputMaybe<ArticleStates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertArticleStatesArgs = {
  objects: Array<ArticleStates_Insert_Input>;
  on_conflict?: InputMaybe<ArticleStates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertArticlesArgs = {
  objects: Array<Articles_Insert_Input>;
  on_conflict?: InputMaybe<Articles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderArgs = {
  object: AuthProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestArgs = {
  object: AuthProviderRequests_Insert_Input;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestsArgs = {
  objects: Array<AuthProviderRequests_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProvidersArgs = {
  objects: Array<AuthProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenArgs = {
  object: AuthRefreshTokens_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokensArgs = {
  objects: Array<AuthRefreshTokens_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRoleArgs = {
  object: AuthRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRolesArgs = {
  objects: Array<AuthRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProviderArgs = {
  object: AuthUserProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProvidersArgs = {
  objects: Array<AuthUserProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRoleArgs = {
  object: AuthUserRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRolesArgs = {
  objects: Array<AuthUserRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertPageArgs = {
  object: Pages_Insert_Input;
  on_conflict?: InputMaybe<Pages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertPageStateArgs = {
  object: PageStates_Insert_Input;
  on_conflict?: InputMaybe<PageStates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertPageStatesArgs = {
  objects: Array<PageStates_Insert_Input>;
  on_conflict?: InputMaybe<PageStates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertPagesArgs = {
  objects: Array<Pages_Insert_Input>;
  on_conflict?: InputMaybe<Pages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertPostArgs = {
  object: Posts_Insert_Input;
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertPostTypeArgs = {
  object: PostTypes_Insert_Input;
  on_conflict?: InputMaybe<PostTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertPostTypesArgs = {
  objects: Array<PostTypes_Insert_Input>;
  on_conflict?: InputMaybe<PostTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertPostsArgs = {
  objects: Array<Posts_Insert_Input>;
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTaxonomiesArgs = {
  objects: Array<Taxonomies_Insert_Input>;
  on_conflict?: InputMaybe<Taxonomies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTaxonomyArgs = {
  object: Taxonomies_Insert_Input;
  on_conflict?: InputMaybe<Taxonomies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTermArgs = {
  object: Terms_Insert_Input;
  on_conflict?: InputMaybe<Terms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTermTaxonomiesArgs = {
  objects: Array<TermTaxonomies_Insert_Input>;
  on_conflict?: InputMaybe<TermTaxonomies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTermTaxonomyArgs = {
  object: TermTaxonomies_Insert_Input;
  on_conflict?: InputMaybe<TermTaxonomies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTermsArgs = {
  objects: Array<Terms_Insert_Input>;
  on_conflict?: InputMaybe<Terms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUserArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInstertCommentArgs = {
  object: Comments_Insert_Input;
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInstertCommentsArgs = {
  objects: Array<Comments_Insert_Input>;
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInstertRelationshipArgs = {
  object: TermRelationships_Insert_Input;
  on_conflict?: InputMaybe<TermRelationships_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInstertRelationshipsArgs = {
  objects: Array<TermRelationships_Insert_Input>;
  on_conflict?: InputMaybe<TermRelationships_On_Conflict>;
};


/** mutation root */
export type Mutation_RootSigninArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


/** mutation root */
export type Mutation_RootUpdateArticleArgs = {
  _set?: InputMaybe<Articles_Set_Input>;
  pk_columns: Articles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateArticleStateArgs = {
  _set?: InputMaybe<ArticleStates_Set_Input>;
  pk_columns: ArticleStates_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateArticleStatesArgs = {
  _set?: InputMaybe<ArticleStates_Set_Input>;
  where: ArticleStates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateArticlesArgs = {
  _set?: InputMaybe<Articles_Set_Input>;
  where: Articles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  pk_columns: AuthProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  pk_columns: AuthProviderRequests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestsArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthProvidersArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenArgs = {
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  pk_columns: AuthRefreshTokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokensArgs = {
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRoleArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  pk_columns: AuthRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRolesArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProviderArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  pk_columns: AuthUserProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProvidersArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRoleArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  pk_columns: AuthUserRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRolesArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateCommentArgs = {
  _append?: InputMaybe<Comments_Append_Input>;
  _delete_at_path?: InputMaybe<Comments_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Comments_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Comments_Delete_Key_Input>;
  _prepend?: InputMaybe<Comments_Prepend_Input>;
  _set?: InputMaybe<Comments_Set_Input>;
  pk_columns: Comments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateCommentsArgs = {
  _append?: InputMaybe<Comments_Append_Input>;
  _delete_at_path?: InputMaybe<Comments_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Comments_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Comments_Delete_Key_Input>;
  _prepend?: InputMaybe<Comments_Prepend_Input>;
  _set?: InputMaybe<Comments_Set_Input>;
  where: Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdatePageArgs = {
  _set?: InputMaybe<Pages_Set_Input>;
  pk_columns: Pages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdatePageStateArgs = {
  _set?: InputMaybe<PageStates_Set_Input>;
  pk_columns: PageStates_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdatePageStatesArgs = {
  _set?: InputMaybe<PageStates_Set_Input>;
  where: PageStates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdatePagesArgs = {
  _set?: InputMaybe<Pages_Set_Input>;
  where: Pages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdatePostArgs = {
  _set?: InputMaybe<Posts_Set_Input>;
  pk_columns: Posts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdatePostsArgs = {
  _set?: InputMaybe<Posts_Set_Input>;
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateRelationshipArgs = {
  _set?: InputMaybe<TermRelationships_Set_Input>;
  pk_columns: TermRelationships_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateRelationshipsArgs = {
  _set?: InputMaybe<TermRelationships_Set_Input>;
  where: TermRelationships_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateTaxonomiesArgs = {
  _set?: InputMaybe<Taxonomies_Set_Input>;
  where: Taxonomies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateTaxonomyArgs = {
  _set?: InputMaybe<Taxonomies_Set_Input>;
  pk_columns: Taxonomies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateTermArgs = {
  _set?: InputMaybe<Terms_Set_Input>;
  pk_columns: Terms_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateTermTaxonomiesArgs = {
  _set?: InputMaybe<TermTaxonomies_Set_Input>;
  where: TermTaxonomies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateTermTaxonomyArgs = {
  _set?: InputMaybe<TermTaxonomies_Set_Input>;
  pk_columns: TermTaxonomies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateTermsArgs = {
  _set?: InputMaybe<Terms_Set_Input>;
  where: Terms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdatetPostTypeArgs = {
  _set?: InputMaybe<PostTypes_Set_Input>;
  pk_columns: PostTypes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdatetPostTypesArgs = {
  _set?: InputMaybe<PostTypes_Set_Input>;
  where: PostTypes_Bool_Exp;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "page_states" */
export type PageStates = {
  __typename?: 'pageStates';
  pageState: Scalars['String'];
  /** An array relationship */
  pages: Array<Pages>;
  /** An aggregate relationship */
  pages_aggregate: Pages_Aggregate;
};


/** columns and relationships of "page_states" */
export type PageStatesPagesArgs = {
  distinct_on?: InputMaybe<Array<Pages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pages_Order_By>>;
  where?: InputMaybe<Pages_Bool_Exp>;
};


/** columns and relationships of "page_states" */
export type PageStatesPages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pages_Order_By>>;
  where?: InputMaybe<Pages_Bool_Exp>;
};

/** aggregated selection of "page_states" */
export type PageStates_Aggregate = {
  __typename?: 'pageStates_aggregate';
  aggregate?: Maybe<PageStates_Aggregate_Fields>;
  nodes: Array<PageStates>;
};

/** aggregate fields of "page_states" */
export type PageStates_Aggregate_Fields = {
  __typename?: 'pageStates_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<PageStates_Max_Fields>;
  min?: Maybe<PageStates_Min_Fields>;
};


/** aggregate fields of "page_states" */
export type PageStates_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<PageStates_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "page_states". All fields are combined with a logical 'AND'. */
export type PageStates_Bool_Exp = {
  _and?: InputMaybe<Array<PageStates_Bool_Exp>>;
  _not?: InputMaybe<PageStates_Bool_Exp>;
  _or?: InputMaybe<Array<PageStates_Bool_Exp>>;
  pageState?: InputMaybe<String_Comparison_Exp>;
  pages?: InputMaybe<Pages_Bool_Exp>;
};

/** unique or primary key constraints on table "page_states" */
export enum PageStates_Constraint {
  /** unique or primary key constraint on columns "pageState" */
  PageStatesPkey = 'page_states_pkey'
}

export enum PageStates_Enum {
  Draft = 'draft',
  Published = 'published'
}

/** Boolean expression to compare columns of type "pageStates_enum". All fields are combined with logical 'AND'. */
export type PageStates_Enum_Comparison_Exp = {
  _eq?: InputMaybe<PageStates_Enum>;
  _in?: InputMaybe<Array<PageStates_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<PageStates_Enum>;
  _nin?: InputMaybe<Array<PageStates_Enum>>;
};

/** input type for inserting data into table "page_states" */
export type PageStates_Insert_Input = {
  pageState?: InputMaybe<Scalars['String']>;
  pages?: InputMaybe<Pages_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type PageStates_Max_Fields = {
  __typename?: 'pageStates_max_fields';
  pageState?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type PageStates_Min_Fields = {
  __typename?: 'pageStates_min_fields';
  pageState?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "page_states" */
export type PageStates_Mutation_Response = {
  __typename?: 'pageStates_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PageStates>;
};

/** input type for inserting object relation for remote table "page_states" */
export type PageStates_Obj_Rel_Insert_Input = {
  data: PageStates_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<PageStates_On_Conflict>;
};

/** on_conflict condition type for table "page_states" */
export type PageStates_On_Conflict = {
  constraint: PageStates_Constraint;
  update_columns?: Array<PageStates_Update_Column>;
  where?: InputMaybe<PageStates_Bool_Exp>;
};

/** Ordering options when selecting data from "page_states". */
export type PageStates_Order_By = {
  pageState?: InputMaybe<Order_By>;
  pages_aggregate?: InputMaybe<Pages_Aggregate_Order_By>;
};

/** primary key columns input for table: pageStates */
export type PageStates_Pk_Columns_Input = {
  pageState: Scalars['String'];
};

/** select columns of table "page_states" */
export enum PageStates_Select_Column {
  /** column name */
  PageState = 'pageState'
}

/** input type for updating data in table "page_states" */
export type PageStates_Set_Input = {
  pageState?: InputMaybe<Scalars['String']>;
};

/** update columns of table "page_states" */
export enum PageStates_Update_Column {
  /** column name */
  PageState = 'pageState'
}

/** columns and relationships of "pages" */
export type Pages = {
  __typename?: 'pages';
  body?: Maybe<Scalars['String']>;
  /** An object relationship */
  pageState: PageStates;
  /** An object relationship */
  post: Posts;
  postId: Scalars['uuid'];
  state: PageStates_Enum;
};

/** aggregated selection of "pages" */
export type Pages_Aggregate = {
  __typename?: 'pages_aggregate';
  aggregate?: Maybe<Pages_Aggregate_Fields>;
  nodes: Array<Pages>;
};

/** aggregate fields of "pages" */
export type Pages_Aggregate_Fields = {
  __typename?: 'pages_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Pages_Max_Fields>;
  min?: Maybe<Pages_Min_Fields>;
};


/** aggregate fields of "pages" */
export type Pages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "pages" */
export type Pages_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Pages_Max_Order_By>;
  min?: InputMaybe<Pages_Min_Order_By>;
};

/** input type for inserting array relation for remote table "pages" */
export type Pages_Arr_Rel_Insert_Input = {
  data: Array<Pages_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Pages_On_Conflict>;
};

/** Boolean expression to filter rows from the table "pages". All fields are combined with a logical 'AND'. */
export type Pages_Bool_Exp = {
  _and?: InputMaybe<Array<Pages_Bool_Exp>>;
  _not?: InputMaybe<Pages_Bool_Exp>;
  _or?: InputMaybe<Array<Pages_Bool_Exp>>;
  body?: InputMaybe<String_Comparison_Exp>;
  pageState?: InputMaybe<PageStates_Bool_Exp>;
  post?: InputMaybe<Posts_Bool_Exp>;
  postId?: InputMaybe<Uuid_Comparison_Exp>;
  state?: InputMaybe<PageStates_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "pages" */
export enum Pages_Constraint {
  /** unique or primary key constraint on columns "post_id" */
  PagesPkey = 'pages_pkey'
}

/** input type for inserting data into table "pages" */
export type Pages_Insert_Input = {
  body?: InputMaybe<Scalars['String']>;
  pageState?: InputMaybe<PageStates_Obj_Rel_Insert_Input>;
  post?: InputMaybe<Posts_Obj_Rel_Insert_Input>;
  postId?: InputMaybe<Scalars['uuid']>;
  state?: InputMaybe<PageStates_Enum>;
};

/** aggregate max on columns */
export type Pages_Max_Fields = {
  __typename?: 'pages_max_fields';
  body?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "pages" */
export type Pages_Max_Order_By = {
  body?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Pages_Min_Fields = {
  __typename?: 'pages_min_fields';
  body?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "pages" */
export type Pages_Min_Order_By = {
  body?: InputMaybe<Order_By>;
  postId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "pages" */
export type Pages_Mutation_Response = {
  __typename?: 'pages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Pages>;
};

/** input type for inserting object relation for remote table "pages" */
export type Pages_Obj_Rel_Insert_Input = {
  data: Pages_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Pages_On_Conflict>;
};

/** on_conflict condition type for table "pages" */
export type Pages_On_Conflict = {
  constraint: Pages_Constraint;
  update_columns?: Array<Pages_Update_Column>;
  where?: InputMaybe<Pages_Bool_Exp>;
};

/** Ordering options when selecting data from "pages". */
export type Pages_Order_By = {
  body?: InputMaybe<Order_By>;
  pageState?: InputMaybe<PageStates_Order_By>;
  post?: InputMaybe<Posts_Order_By>;
  postId?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
};

/** primary key columns input for table: pages */
export type Pages_Pk_Columns_Input = {
  postId: Scalars['uuid'];
};

/** select columns of table "pages" */
export enum Pages_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  PostId = 'postId',
  /** column name */
  State = 'state'
}

/** input type for updating data in table "pages" */
export type Pages_Set_Input = {
  body?: InputMaybe<Scalars['String']>;
  postId?: InputMaybe<Scalars['uuid']>;
  state?: InputMaybe<PageStates_Enum>;
};

/** update columns of table "pages" */
export enum Pages_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  PostId = 'postId',
  /** column name */
  State = 'state'
}

/** columns and relationships of "post_types" */
export type PostTypes = {
  __typename?: 'postTypes';
  postType: Scalars['String'];
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
};


/** columns and relationships of "post_types" */
export type PostTypesPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


/** columns and relationships of "post_types" */
export type PostTypesPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** aggregated selection of "post_types" */
export type PostTypes_Aggregate = {
  __typename?: 'postTypes_aggregate';
  aggregate?: Maybe<PostTypes_Aggregate_Fields>;
  nodes: Array<PostTypes>;
};

/** aggregate fields of "post_types" */
export type PostTypes_Aggregate_Fields = {
  __typename?: 'postTypes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<PostTypes_Max_Fields>;
  min?: Maybe<PostTypes_Min_Fields>;
};


/** aggregate fields of "post_types" */
export type PostTypes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<PostTypes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "post_types". All fields are combined with a logical 'AND'. */
export type PostTypes_Bool_Exp = {
  _and?: InputMaybe<Array<PostTypes_Bool_Exp>>;
  _not?: InputMaybe<PostTypes_Bool_Exp>;
  _or?: InputMaybe<Array<PostTypes_Bool_Exp>>;
  postType?: InputMaybe<String_Comparison_Exp>;
  posts?: InputMaybe<Posts_Bool_Exp>;
};

/** unique or primary key constraints on table "post_types" */
export enum PostTypes_Constraint {
  /** unique or primary key constraint on columns "post_type" */
  PostTypesPkey = 'post_types_pkey'
}

export enum PostTypes_Enum {
  Article = 'article',
  Page = 'page'
}

/** Boolean expression to compare columns of type "postTypes_enum". All fields are combined with logical 'AND'. */
export type PostTypes_Enum_Comparison_Exp = {
  _eq?: InputMaybe<PostTypes_Enum>;
  _in?: InputMaybe<Array<PostTypes_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<PostTypes_Enum>;
  _nin?: InputMaybe<Array<PostTypes_Enum>>;
};

/** input type for inserting data into table "post_types" */
export type PostTypes_Insert_Input = {
  postType?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<Posts_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type PostTypes_Max_Fields = {
  __typename?: 'postTypes_max_fields';
  postType?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type PostTypes_Min_Fields = {
  __typename?: 'postTypes_min_fields';
  postType?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "post_types" */
export type PostTypes_Mutation_Response = {
  __typename?: 'postTypes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PostTypes>;
};

/** input type for inserting object relation for remote table "post_types" */
export type PostTypes_Obj_Rel_Insert_Input = {
  data: PostTypes_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<PostTypes_On_Conflict>;
};

/** on_conflict condition type for table "post_types" */
export type PostTypes_On_Conflict = {
  constraint: PostTypes_Constraint;
  update_columns?: Array<PostTypes_Update_Column>;
  where?: InputMaybe<PostTypes_Bool_Exp>;
};

/** Ordering options when selecting data from "post_types". */
export type PostTypes_Order_By = {
  postType?: InputMaybe<Order_By>;
  posts_aggregate?: InputMaybe<Posts_Aggregate_Order_By>;
};

/** primary key columns input for table: postTypes */
export type PostTypes_Pk_Columns_Input = {
  postType: Scalars['String'];
};

/** select columns of table "post_types" */
export enum PostTypes_Select_Column {
  /** column name */
  PostType = 'postType'
}

/** input type for updating data in table "post_types" */
export type PostTypes_Set_Input = {
  postType?: InputMaybe<Scalars['String']>;
};

/** update columns of table "post_types" */
export enum PostTypes_Update_Column {
  /** column name */
  PostType = 'postType'
}

/** columns and relationships of "posts" */
export type Posts = {
  __typename?: 'posts';
  /** An object relationship */
  article?: Maybe<Articles>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An object relationship */
  page?: Maybe<Pages>;
  /** An object relationship */
  postType?: Maybe<PostTypes>;
  slug: Scalars['String'];
  /** An array relationship */
  termRelationships: Array<TermRelationships>;
  /** An aggregate relationship */
  termRelationships_aggregate: TermRelationships_Aggregate;
  title: Scalars['String'];
  type?: Maybe<PostTypes_Enum>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "posts" */
export type PostsCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsTermRelationshipsArgs = {
  distinct_on?: InputMaybe<Array<TermRelationships_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TermRelationships_Order_By>>;
  where?: InputMaybe<TermRelationships_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsTermRelationships_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TermRelationships_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TermRelationships_Order_By>>;
  where?: InputMaybe<TermRelationships_Bool_Exp>;
};

/** aggregated selection of "posts" */
export type Posts_Aggregate = {
  __typename?: 'posts_aggregate';
  aggregate?: Maybe<Posts_Aggregate_Fields>;
  nodes: Array<Posts>;
};

/** aggregate fields of "posts" */
export type Posts_Aggregate_Fields = {
  __typename?: 'posts_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Posts_Max_Fields>;
  min?: Maybe<Posts_Min_Fields>;
};


/** aggregate fields of "posts" */
export type Posts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Posts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "posts" */
export type Posts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Posts_Max_Order_By>;
  min?: InputMaybe<Posts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "posts" */
export type Posts_Arr_Rel_Insert_Input = {
  data: Array<Posts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type Posts_Bool_Exp = {
  _and?: InputMaybe<Array<Posts_Bool_Exp>>;
  _not?: InputMaybe<Posts_Bool_Exp>;
  _or?: InputMaybe<Array<Posts_Bool_Exp>>;
  article?: InputMaybe<Articles_Bool_Exp>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  page?: InputMaybe<Pages_Bool_Exp>;
  postType?: InputMaybe<PostTypes_Bool_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  termRelationships?: InputMaybe<TermRelationships_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<PostTypes_Enum_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "posts" */
export enum Posts_Constraint {
  /** unique or primary key constraint on columns "id" */
  PostsPkey = 'posts_pkey',
  /** unique or primary key constraint on columns "slug" */
  PostsSlugKey = 'posts_slug_key'
}

/** input type for inserting data into table "posts" */
export type Posts_Insert_Input = {
  article?: InputMaybe<Articles_Obj_Rel_Insert_Input>;
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  page?: InputMaybe<Pages_Obj_Rel_Insert_Input>;
  postType?: InputMaybe<PostTypes_Obj_Rel_Insert_Input>;
  slug?: InputMaybe<Scalars['String']>;
  termRelationships?: InputMaybe<TermRelationships_Arr_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<PostTypes_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Posts_Max_Fields = {
  __typename?: 'posts_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "posts" */
export type Posts_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Posts_Min_Fields = {
  __typename?: 'posts_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "posts" */
export type Posts_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "posts" */
export type Posts_Mutation_Response = {
  __typename?: 'posts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Posts>;
};

/** input type for inserting object relation for remote table "posts" */
export type Posts_Obj_Rel_Insert_Input = {
  data: Posts_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};

/** on_conflict condition type for table "posts" */
export type Posts_On_Conflict = {
  constraint: Posts_Constraint;
  update_columns?: Array<Posts_Update_Column>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** Ordering options when selecting data from "posts". */
export type Posts_Order_By = {
  article?: InputMaybe<Articles_Order_By>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  page?: InputMaybe<Pages_Order_By>;
  postType?: InputMaybe<PostTypes_Order_By>;
  slug?: InputMaybe<Order_By>;
  termRelationships_aggregate?: InputMaybe<TermRelationships_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: posts */
export type Posts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "posts" */
export enum Posts_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "posts" */
export type Posts_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<PostTypes_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "posts" */
export enum Posts_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "articles" using primary key columns */
  article?: Maybe<Articles>;
  /** fetch data from the table: "article_states" using primary key columns */
  articleState?: Maybe<ArticleStates>;
  /** fetch data from the table: "article_states" */
  articleStates: Array<ArticleStates>;
  /** fetch aggregated fields from the table: "article_states" */
  articleStatesAggregate: ArticleStates_Aggregate;
  /** An array relationship */
  articles: Array<Articles>;
  /** fetch aggregated fields from the table: "articles" */
  articlesAggregate: Articles_Aggregate;
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comment?: Maybe<Comments>;
  /** An array relationship */
  comments: Array<Comments>;
  /** fetch aggregated fields from the table: "comments" */
  commentsAggregate: Comments_Aggregate;
  meiliSearchTerms?: Maybe<MeiliSearchOutput>;
  meiliSearchUsers?: Maybe<MeiliSearchOutput>;
  /** fetch data from the table: "pages" using primary key columns */
  page?: Maybe<Pages>;
  /** fetch data from the table: "page_states" using primary key columns */
  pageState?: Maybe<PageStates>;
  /** fetch data from the table: "page_states" */
  pageStates: Array<PageStates>;
  /** fetch aggregated fields from the table: "page_states" */
  pageStatesAggregate: PageStates_Aggregate;
  /** An array relationship */
  pages: Array<Pages>;
  /** fetch aggregated fields from the table: "pages" */
  pagesAggregate: Pages_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  post?: Maybe<Posts>;
  /** fetch data from the table: "post_types" using primary key columns */
  postType?: Maybe<PostTypes>;
  /** fetch data from the table: "post_types" */
  postTypes: Array<PostTypes>;
  /** fetch aggregated fields from the table: "post_types" */
  postTypesAggregate: PostTypes_Aggregate;
  /** An array relationship */
  posts: Array<Posts>;
  /** fetch aggregated fields from the table: "posts" */
  postsAggregate: Posts_Aggregate;
  /** fetch data from the table: "summary_taxonomies" */
  summaryTaxonomies: Array<SummaryTaxonomies>;
  /** fetch aggregated fields from the table: "summary_taxonomies" */
  summaryTaxonomiesAggregate: SummaryTaxonomies_Aggregate;
  /** fetch data from the table: "taxonomies" */
  taxonomies: Array<Taxonomies>;
  /** fetch aggregated fields from the table: "taxonomies" */
  taxonomiesAggregate: Taxonomies_Aggregate;
  /** fetch data from the table: "taxonomies" using primary key columns */
  taxonomy?: Maybe<Taxonomies>;
  /** fetch data from the table: "terms" using primary key columns */
  term?: Maybe<Terms>;
  /** fetch data from the table: "term_relationships" using primary key columns */
  termRelationship?: Maybe<TermRelationships>;
  /** An array relationship */
  termRelationships: Array<TermRelationships>;
  /** fetch aggregated fields from the table: "term_relationships" */
  termRelationshipsAggregate: TermRelationships_Aggregate;
  /** fetch data from the table: "term_taxonomies" */
  termTaxonomies: Array<TermTaxonomies>;
  /** fetch aggregated fields from the table: "term_taxonomies" */
  termTaxonomiesAggregate: TermTaxonomies_Aggregate;
  /** fetch data from the table: "term_taxonomies" using primary key columns */
  termTaxonomy?: Maybe<TermTaxonomies>;
  /** fetch data from the table: "terms" */
  terms: Array<Terms>;
  /** fetch aggregated fields from the table: "terms" */
  termsAggregate: Terms_Aggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
};


export type Query_RootArticleArgs = {
  postId: Scalars['uuid'];
};


export type Query_RootArticleStateArgs = {
  articleState: Scalars['String'];
};


export type Query_RootArticleStatesArgs = {
  distinct_on?: InputMaybe<Array<ArticleStates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ArticleStates_Order_By>>;
  where?: InputMaybe<ArticleStates_Bool_Exp>;
};


export type Query_RootArticleStatesAggregateArgs = {
  distinct_on?: InputMaybe<Array<ArticleStates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ArticleStates_Order_By>>;
  where?: InputMaybe<ArticleStates_Bool_Exp>;
};


export type Query_RootArticlesArgs = {
  distinct_on?: InputMaybe<Array<Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Articles_Order_By>>;
  where?: InputMaybe<Articles_Bool_Exp>;
};


export type Query_RootArticlesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Articles_Order_By>>;
  where?: InputMaybe<Articles_Bool_Exp>;
};


export type Query_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Query_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type Query_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Query_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootCommentArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Query_RootCommentsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Query_RootMeiliSearchTermsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query: Scalars['String'];
};


export type Query_RootMeiliSearchUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  query: Scalars['String'];
};


export type Query_RootPageArgs = {
  postId: Scalars['uuid'];
};


export type Query_RootPageStateArgs = {
  pageState: Scalars['String'];
};


export type Query_RootPageStatesArgs = {
  distinct_on?: InputMaybe<Array<PageStates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PageStates_Order_By>>;
  where?: InputMaybe<PageStates_Bool_Exp>;
};


export type Query_RootPageStatesAggregateArgs = {
  distinct_on?: InputMaybe<Array<PageStates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PageStates_Order_By>>;
  where?: InputMaybe<PageStates_Bool_Exp>;
};


export type Query_RootPagesArgs = {
  distinct_on?: InputMaybe<Array<Pages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pages_Order_By>>;
  where?: InputMaybe<Pages_Bool_Exp>;
};


export type Query_RootPagesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Pages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pages_Order_By>>;
  where?: InputMaybe<Pages_Bool_Exp>;
};


export type Query_RootPostArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPostTypeArgs = {
  postType: Scalars['String'];
};


export type Query_RootPostTypesArgs = {
  distinct_on?: InputMaybe<Array<PostTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostTypes_Order_By>>;
  where?: InputMaybe<PostTypes_Bool_Exp>;
};


export type Query_RootPostTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostTypes_Order_By>>;
  where?: InputMaybe<PostTypes_Bool_Exp>;
};


export type Query_RootPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Query_RootPostsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Query_RootSummaryTaxonomiesArgs = {
  distinct_on?: InputMaybe<Array<SummaryTaxonomies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SummaryTaxonomies_Order_By>>;
  where?: InputMaybe<SummaryTaxonomies_Bool_Exp>;
};


export type Query_RootSummaryTaxonomiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<SummaryTaxonomies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SummaryTaxonomies_Order_By>>;
  where?: InputMaybe<SummaryTaxonomies_Bool_Exp>;
};


export type Query_RootTaxonomiesArgs = {
  distinct_on?: InputMaybe<Array<Taxonomies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Taxonomies_Order_By>>;
  where?: InputMaybe<Taxonomies_Bool_Exp>;
};


export type Query_RootTaxonomiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Taxonomies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Taxonomies_Order_By>>;
  where?: InputMaybe<Taxonomies_Bool_Exp>;
};


export type Query_RootTaxonomyArgs = {
  taxonomy: Scalars['String'];
};


export type Query_RootTermArgs = {
  slug: Scalars['String'];
};


export type Query_RootTermRelationshipArgs = {
  postId: Scalars['uuid'];
  termTaxonomyId: Scalars['uuid'];
};


export type Query_RootTermRelationshipsArgs = {
  distinct_on?: InputMaybe<Array<TermRelationships_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TermRelationships_Order_By>>;
  where?: InputMaybe<TermRelationships_Bool_Exp>;
};


export type Query_RootTermRelationshipsAggregateArgs = {
  distinct_on?: InputMaybe<Array<TermRelationships_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TermRelationships_Order_By>>;
  where?: InputMaybe<TermRelationships_Bool_Exp>;
};


export type Query_RootTermTaxonomiesArgs = {
  distinct_on?: InputMaybe<Array<TermTaxonomies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TermTaxonomies_Order_By>>;
  where?: InputMaybe<TermTaxonomies_Bool_Exp>;
};


export type Query_RootTermTaxonomiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<TermTaxonomies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TermTaxonomies_Order_By>>;
  where?: InputMaybe<TermTaxonomies_Bool_Exp>;
};


export type Query_RootTermTaxonomyArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTermsArgs = {
  distinct_on?: InputMaybe<Array<Terms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Terms_Order_By>>;
  where?: InputMaybe<Terms_Bool_Exp>;
};


export type Query_RootTermsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Terms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Terms_Order_By>>;
  where?: InputMaybe<Terms_Bool_Exp>;
};


export type Query_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "articles" using primary key columns */
  article?: Maybe<Articles>;
  /** fetch data from the table: "article_states" using primary key columns */
  articleState?: Maybe<ArticleStates>;
  /** fetch data from the table: "article_states" */
  articleStates: Array<ArticleStates>;
  /** fetch aggregated fields from the table: "article_states" */
  articleStatesAggregate: ArticleStates_Aggregate;
  /** An array relationship */
  articles: Array<Articles>;
  /** fetch aggregated fields from the table: "articles" */
  articlesAggregate: Articles_Aggregate;
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comment?: Maybe<Comments>;
  /** An array relationship */
  comments: Array<Comments>;
  /** fetch aggregated fields from the table: "comments" */
  commentsAggregate: Comments_Aggregate;
  /** fetch data from the table: "pages" using primary key columns */
  page?: Maybe<Pages>;
  /** fetch data from the table: "page_states" using primary key columns */
  pageState?: Maybe<PageStates>;
  /** fetch data from the table: "page_states" */
  pageStates: Array<PageStates>;
  /** fetch aggregated fields from the table: "page_states" */
  pageStatesAggregate: PageStates_Aggregate;
  /** An array relationship */
  pages: Array<Pages>;
  /** fetch aggregated fields from the table: "pages" */
  pagesAggregate: Pages_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  post?: Maybe<Posts>;
  /** fetch data from the table: "post_types" using primary key columns */
  postType?: Maybe<PostTypes>;
  /** fetch data from the table: "post_types" */
  postTypes: Array<PostTypes>;
  /** fetch aggregated fields from the table: "post_types" */
  postTypesAggregate: PostTypes_Aggregate;
  /** An array relationship */
  posts: Array<Posts>;
  /** fetch aggregated fields from the table: "posts" */
  postsAggregate: Posts_Aggregate;
  /** fetch data from the table: "summary_taxonomies" */
  summaryTaxonomies: Array<SummaryTaxonomies>;
  /** fetch aggregated fields from the table: "summary_taxonomies" */
  summaryTaxonomiesAggregate: SummaryTaxonomies_Aggregate;
  /** fetch data from the table: "taxonomies" */
  taxonomies: Array<Taxonomies>;
  /** fetch aggregated fields from the table: "taxonomies" */
  taxonomiesAggregate: Taxonomies_Aggregate;
  /** fetch data from the table: "taxonomies" using primary key columns */
  taxonomy?: Maybe<Taxonomies>;
  /** fetch data from the table: "terms" using primary key columns */
  term?: Maybe<Terms>;
  /** fetch data from the table: "term_relationships" using primary key columns */
  termRelationship?: Maybe<TermRelationships>;
  /** An array relationship */
  termRelationships: Array<TermRelationships>;
  /** fetch aggregated fields from the table: "term_relationships" */
  termRelationshipsAggregate: TermRelationships_Aggregate;
  /** fetch data from the table: "term_taxonomies" */
  termTaxonomies: Array<TermTaxonomies>;
  /** fetch aggregated fields from the table: "term_taxonomies" */
  termTaxonomiesAggregate: TermTaxonomies_Aggregate;
  /** fetch data from the table: "term_taxonomies" using primary key columns */
  termTaxonomy?: Maybe<TermTaxonomies>;
  /** fetch data from the table: "terms" */
  terms: Array<Terms>;
  /** fetch aggregated fields from the table: "terms" */
  termsAggregate: Terms_Aggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
};


export type Subscription_RootArticleArgs = {
  postId: Scalars['uuid'];
};


export type Subscription_RootArticleStateArgs = {
  articleState: Scalars['String'];
};


export type Subscription_RootArticleStatesArgs = {
  distinct_on?: InputMaybe<Array<ArticleStates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ArticleStates_Order_By>>;
  where?: InputMaybe<ArticleStates_Bool_Exp>;
};


export type Subscription_RootArticleStatesAggregateArgs = {
  distinct_on?: InputMaybe<Array<ArticleStates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ArticleStates_Order_By>>;
  where?: InputMaybe<ArticleStates_Bool_Exp>;
};


export type Subscription_RootArticlesArgs = {
  distinct_on?: InputMaybe<Array<Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Articles_Order_By>>;
  where?: InputMaybe<Articles_Bool_Exp>;
};


export type Subscription_RootArticlesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Articles_Order_By>>;
  where?: InputMaybe<Articles_Bool_Exp>;
};


export type Subscription_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type Subscription_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Subscription_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootCommentArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Subscription_RootCommentsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};


export type Subscription_RootPageArgs = {
  postId: Scalars['uuid'];
};


export type Subscription_RootPageStateArgs = {
  pageState: Scalars['String'];
};


export type Subscription_RootPageStatesArgs = {
  distinct_on?: InputMaybe<Array<PageStates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PageStates_Order_By>>;
  where?: InputMaybe<PageStates_Bool_Exp>;
};


export type Subscription_RootPageStatesAggregateArgs = {
  distinct_on?: InputMaybe<Array<PageStates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PageStates_Order_By>>;
  where?: InputMaybe<PageStates_Bool_Exp>;
};


export type Subscription_RootPagesArgs = {
  distinct_on?: InputMaybe<Array<Pages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pages_Order_By>>;
  where?: InputMaybe<Pages_Bool_Exp>;
};


export type Subscription_RootPagesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Pages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pages_Order_By>>;
  where?: InputMaybe<Pages_Bool_Exp>;
};


export type Subscription_RootPostArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPostTypeArgs = {
  postType: Scalars['String'];
};


export type Subscription_RootPostTypesArgs = {
  distinct_on?: InputMaybe<Array<PostTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostTypes_Order_By>>;
  where?: InputMaybe<PostTypes_Bool_Exp>;
};


export type Subscription_RootPostTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostTypes_Order_By>>;
  where?: InputMaybe<PostTypes_Bool_Exp>;
};


export type Subscription_RootPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Subscription_RootPostsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Subscription_RootSummaryTaxonomiesArgs = {
  distinct_on?: InputMaybe<Array<SummaryTaxonomies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SummaryTaxonomies_Order_By>>;
  where?: InputMaybe<SummaryTaxonomies_Bool_Exp>;
};


export type Subscription_RootSummaryTaxonomiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<SummaryTaxonomies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SummaryTaxonomies_Order_By>>;
  where?: InputMaybe<SummaryTaxonomies_Bool_Exp>;
};


export type Subscription_RootTaxonomiesArgs = {
  distinct_on?: InputMaybe<Array<Taxonomies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Taxonomies_Order_By>>;
  where?: InputMaybe<Taxonomies_Bool_Exp>;
};


export type Subscription_RootTaxonomiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Taxonomies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Taxonomies_Order_By>>;
  where?: InputMaybe<Taxonomies_Bool_Exp>;
};


export type Subscription_RootTaxonomyArgs = {
  taxonomy: Scalars['String'];
};


export type Subscription_RootTermArgs = {
  slug: Scalars['String'];
};


export type Subscription_RootTermRelationshipArgs = {
  postId: Scalars['uuid'];
  termTaxonomyId: Scalars['uuid'];
};


export type Subscription_RootTermRelationshipsArgs = {
  distinct_on?: InputMaybe<Array<TermRelationships_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TermRelationships_Order_By>>;
  where?: InputMaybe<TermRelationships_Bool_Exp>;
};


export type Subscription_RootTermRelationshipsAggregateArgs = {
  distinct_on?: InputMaybe<Array<TermRelationships_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TermRelationships_Order_By>>;
  where?: InputMaybe<TermRelationships_Bool_Exp>;
};


export type Subscription_RootTermTaxonomiesArgs = {
  distinct_on?: InputMaybe<Array<TermTaxonomies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TermTaxonomies_Order_By>>;
  where?: InputMaybe<TermTaxonomies_Bool_Exp>;
};


export type Subscription_RootTermTaxonomiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<TermTaxonomies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TermTaxonomies_Order_By>>;
  where?: InputMaybe<TermTaxonomies_Bool_Exp>;
};


export type Subscription_RootTermTaxonomyArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTermsArgs = {
  distinct_on?: InputMaybe<Array<Terms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Terms_Order_By>>;
  where?: InputMaybe<Terms_Bool_Exp>;
};


export type Subscription_RootTermsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Terms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Terms_Order_By>>;
  where?: InputMaybe<Terms_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "summary_taxonomies" */
export type SummaryTaxonomies = {
  __typename?: 'summaryTaxonomies';
  count?: Maybe<Scalars['bigint']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<Scalars['String']>;
};

/** aggregated selection of "summary_taxonomies" */
export type SummaryTaxonomies_Aggregate = {
  __typename?: 'summaryTaxonomies_aggregate';
  aggregate?: Maybe<SummaryTaxonomies_Aggregate_Fields>;
  nodes: Array<SummaryTaxonomies>;
};

/** aggregate fields of "summary_taxonomies" */
export type SummaryTaxonomies_Aggregate_Fields = {
  __typename?: 'summaryTaxonomies_aggregate_fields';
  avg?: Maybe<SummaryTaxonomies_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<SummaryTaxonomies_Max_Fields>;
  min?: Maybe<SummaryTaxonomies_Min_Fields>;
  stddev?: Maybe<SummaryTaxonomies_Stddev_Fields>;
  stddev_pop?: Maybe<SummaryTaxonomies_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<SummaryTaxonomies_Stddev_Samp_Fields>;
  sum?: Maybe<SummaryTaxonomies_Sum_Fields>;
  var_pop?: Maybe<SummaryTaxonomies_Var_Pop_Fields>;
  var_samp?: Maybe<SummaryTaxonomies_Var_Samp_Fields>;
  variance?: Maybe<SummaryTaxonomies_Variance_Fields>;
};


/** aggregate fields of "summary_taxonomies" */
export type SummaryTaxonomies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<SummaryTaxonomies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type SummaryTaxonomies_Avg_Fields = {
  __typename?: 'summaryTaxonomies_avg_fields';
  count?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "summary_taxonomies". All fields are combined with a logical 'AND'. */
export type SummaryTaxonomies_Bool_Exp = {
  _and?: InputMaybe<Array<SummaryTaxonomies_Bool_Exp>>;
  _not?: InputMaybe<SummaryTaxonomies_Bool_Exp>;
  _or?: InputMaybe<Array<SummaryTaxonomies_Bool_Exp>>;
  count?: InputMaybe<Bigint_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  taxonomy?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type SummaryTaxonomies_Max_Fields = {
  __typename?: 'summaryTaxonomies_max_fields';
  count?: Maybe<Scalars['bigint']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type SummaryTaxonomies_Min_Fields = {
  __typename?: 'summaryTaxonomies_min_fields';
  count?: Maybe<Scalars['bigint']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "summary_taxonomies". */
export type SummaryTaxonomies_Order_By = {
  count?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  taxonomy?: InputMaybe<Order_By>;
};

/** select columns of table "summary_taxonomies" */
export enum SummaryTaxonomies_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug',
  /** column name */
  Taxonomy = 'taxonomy'
}

/** aggregate stddev on columns */
export type SummaryTaxonomies_Stddev_Fields = {
  __typename?: 'summaryTaxonomies_stddev_fields';
  count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type SummaryTaxonomies_Stddev_Pop_Fields = {
  __typename?: 'summaryTaxonomies_stddev_pop_fields';
  count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type SummaryTaxonomies_Stddev_Samp_Fields = {
  __typename?: 'summaryTaxonomies_stddev_samp_fields';
  count?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type SummaryTaxonomies_Sum_Fields = {
  __typename?: 'summaryTaxonomies_sum_fields';
  count?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type SummaryTaxonomies_Var_Pop_Fields = {
  __typename?: 'summaryTaxonomies_var_pop_fields';
  count?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type SummaryTaxonomies_Var_Samp_Fields = {
  __typename?: 'summaryTaxonomies_var_samp_fields';
  count?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type SummaryTaxonomies_Variance_Fields = {
  __typename?: 'summaryTaxonomies_variance_fields';
  count?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "taxonomies" */
export type Taxonomies = {
  __typename?: 'taxonomies';
  taxonomy: Scalars['String'];
  /** An array relationship */
  term_taxonomies: Array<TermTaxonomies>;
  /** An aggregate relationship */
  term_taxonomies_aggregate: TermTaxonomies_Aggregate;
};


/** columns and relationships of "taxonomies" */
export type TaxonomiesTerm_TaxonomiesArgs = {
  distinct_on?: InputMaybe<Array<TermTaxonomies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TermTaxonomies_Order_By>>;
  where?: InputMaybe<TermTaxonomies_Bool_Exp>;
};


/** columns and relationships of "taxonomies" */
export type TaxonomiesTerm_Taxonomies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TermTaxonomies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TermTaxonomies_Order_By>>;
  where?: InputMaybe<TermTaxonomies_Bool_Exp>;
};

/** aggregated selection of "taxonomies" */
export type Taxonomies_Aggregate = {
  __typename?: 'taxonomies_aggregate';
  aggregate?: Maybe<Taxonomies_Aggregate_Fields>;
  nodes: Array<Taxonomies>;
};

/** aggregate fields of "taxonomies" */
export type Taxonomies_Aggregate_Fields = {
  __typename?: 'taxonomies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Taxonomies_Max_Fields>;
  min?: Maybe<Taxonomies_Min_Fields>;
};


/** aggregate fields of "taxonomies" */
export type Taxonomies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Taxonomies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "taxonomies". All fields are combined with a logical 'AND'. */
export type Taxonomies_Bool_Exp = {
  _and?: InputMaybe<Array<Taxonomies_Bool_Exp>>;
  _not?: InputMaybe<Taxonomies_Bool_Exp>;
  _or?: InputMaybe<Array<Taxonomies_Bool_Exp>>;
  taxonomy?: InputMaybe<String_Comparison_Exp>;
  term_taxonomies?: InputMaybe<TermTaxonomies_Bool_Exp>;
};

/** unique or primary key constraints on table "taxonomies" */
export enum Taxonomies_Constraint {
  /** unique or primary key constraint on columns "taxonomy" */
  TaxonomiesPkey = 'taxonomies_pkey',
  /** unique or primary key constraint on columns "taxonomy" */
  TaxonomiesTaxonomyKey = 'taxonomies_taxonomy_key'
}

export enum Taxonomies_Enum {
  Categories = 'categories',
  Tags = 'tags'
}

/** Boolean expression to compare columns of type "taxonomies_enum". All fields are combined with logical 'AND'. */
export type Taxonomies_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Taxonomies_Enum>;
  _in?: InputMaybe<Array<Taxonomies_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Taxonomies_Enum>;
  _nin?: InputMaybe<Array<Taxonomies_Enum>>;
};

/** input type for inserting data into table "taxonomies" */
export type Taxonomies_Insert_Input = {
  taxonomy?: InputMaybe<Scalars['String']>;
  term_taxonomies?: InputMaybe<TermTaxonomies_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Taxonomies_Max_Fields = {
  __typename?: 'taxonomies_max_fields';
  taxonomy?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Taxonomies_Min_Fields = {
  __typename?: 'taxonomies_min_fields';
  taxonomy?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "taxonomies" */
export type Taxonomies_Mutation_Response = {
  __typename?: 'taxonomies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Taxonomies>;
};

/** input type for inserting object relation for remote table "taxonomies" */
export type Taxonomies_Obj_Rel_Insert_Input = {
  data: Taxonomies_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Taxonomies_On_Conflict>;
};

/** on_conflict condition type for table "taxonomies" */
export type Taxonomies_On_Conflict = {
  constraint: Taxonomies_Constraint;
  update_columns?: Array<Taxonomies_Update_Column>;
  where?: InputMaybe<Taxonomies_Bool_Exp>;
};

/** Ordering options when selecting data from "taxonomies". */
export type Taxonomies_Order_By = {
  taxonomy?: InputMaybe<Order_By>;
  term_taxonomies_aggregate?: InputMaybe<TermTaxonomies_Aggregate_Order_By>;
};

/** primary key columns input for table: taxonomies */
export type Taxonomies_Pk_Columns_Input = {
  taxonomy: Scalars['String'];
};

/** select columns of table "taxonomies" */
export enum Taxonomies_Select_Column {
  /** column name */
  Taxonomy = 'taxonomy'
}

/** input type for updating data in table "taxonomies" */
export type Taxonomies_Set_Input = {
  taxonomy?: InputMaybe<Scalars['String']>;
};

/** update columns of table "taxonomies" */
export enum Taxonomies_Update_Column {
  /** column name */
  Taxonomy = 'taxonomy'
}

/** columns and relationships of "term_relationships" */
export type TermRelationships = {
  __typename?: 'termRelationships';
  /** An object relationship */
  post: Posts;
  postId: Scalars['uuid'];
  /** An object relationship */
  termTaxonomy: TermTaxonomies;
  termTaxonomyId: Scalars['uuid'];
};

/** aggregated selection of "term_relationships" */
export type TermRelationships_Aggregate = {
  __typename?: 'termRelationships_aggregate';
  aggregate?: Maybe<TermRelationships_Aggregate_Fields>;
  nodes: Array<TermRelationships>;
};

/** aggregate fields of "term_relationships" */
export type TermRelationships_Aggregate_Fields = {
  __typename?: 'termRelationships_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TermRelationships_Max_Fields>;
  min?: Maybe<TermRelationships_Min_Fields>;
};


/** aggregate fields of "term_relationships" */
export type TermRelationships_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TermRelationships_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "term_relationships" */
export type TermRelationships_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<TermRelationships_Max_Order_By>;
  min?: InputMaybe<TermRelationships_Min_Order_By>;
};

/** input type for inserting array relation for remote table "term_relationships" */
export type TermRelationships_Arr_Rel_Insert_Input = {
  data: Array<TermRelationships_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<TermRelationships_On_Conflict>;
};

/** Boolean expression to filter rows from the table "term_relationships". All fields are combined with a logical 'AND'. */
export type TermRelationships_Bool_Exp = {
  _and?: InputMaybe<Array<TermRelationships_Bool_Exp>>;
  _not?: InputMaybe<TermRelationships_Bool_Exp>;
  _or?: InputMaybe<Array<TermRelationships_Bool_Exp>>;
  post?: InputMaybe<Posts_Bool_Exp>;
  postId?: InputMaybe<Uuid_Comparison_Exp>;
  termTaxonomy?: InputMaybe<TermTaxonomies_Bool_Exp>;
  termTaxonomyId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "term_relationships" */
export enum TermRelationships_Constraint {
  /** unique or primary key constraint on columns "post_id", "term_taxonomy_id" */
  PostTermsPkey = 'post_terms_pkey'
}

/** input type for inserting data into table "term_relationships" */
export type TermRelationships_Insert_Input = {
  post?: InputMaybe<Posts_Obj_Rel_Insert_Input>;
  postId?: InputMaybe<Scalars['uuid']>;
  termTaxonomy?: InputMaybe<TermTaxonomies_Obj_Rel_Insert_Input>;
  termTaxonomyId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type TermRelationships_Max_Fields = {
  __typename?: 'termRelationships_max_fields';
  postId?: Maybe<Scalars['uuid']>;
  termTaxonomyId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "term_relationships" */
export type TermRelationships_Max_Order_By = {
  postId?: InputMaybe<Order_By>;
  termTaxonomyId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type TermRelationships_Min_Fields = {
  __typename?: 'termRelationships_min_fields';
  postId?: Maybe<Scalars['uuid']>;
  termTaxonomyId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "term_relationships" */
export type TermRelationships_Min_Order_By = {
  postId?: InputMaybe<Order_By>;
  termTaxonomyId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "term_relationships" */
export type TermRelationships_Mutation_Response = {
  __typename?: 'termRelationships_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TermRelationships>;
};

/** on_conflict condition type for table "term_relationships" */
export type TermRelationships_On_Conflict = {
  constraint: TermRelationships_Constraint;
  update_columns?: Array<TermRelationships_Update_Column>;
  where?: InputMaybe<TermRelationships_Bool_Exp>;
};

/** Ordering options when selecting data from "term_relationships". */
export type TermRelationships_Order_By = {
  post?: InputMaybe<Posts_Order_By>;
  postId?: InputMaybe<Order_By>;
  termTaxonomy?: InputMaybe<TermTaxonomies_Order_By>;
  termTaxonomyId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: termRelationships */
export type TermRelationships_Pk_Columns_Input = {
  postId: Scalars['uuid'];
  termTaxonomyId: Scalars['uuid'];
};

/** select columns of table "term_relationships" */
export enum TermRelationships_Select_Column {
  /** column name */
  PostId = 'postId',
  /** column name */
  TermTaxonomyId = 'termTaxonomyId'
}

/** input type for updating data in table "term_relationships" */
export type TermRelationships_Set_Input = {
  postId?: InputMaybe<Scalars['uuid']>;
  termTaxonomyId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "term_relationships" */
export enum TermRelationships_Update_Column {
  /** column name */
  PostId = 'postId',
  /** column name */
  TermTaxonomyId = 'termTaxonomyId'
}

/** columns and relationships of "term_taxonomies" */
export type TermTaxonomies = {
  __typename?: 'termTaxonomies';
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  parentSlug?: Maybe<Scalars['String']>;
  taxonomy: Taxonomies_Enum;
  /** An object relationship */
  taxonomyByTaxonomy: Taxonomies;
  /** An object relationship */
  term: Terms;
  termId: Scalars['uuid'];
  /** An array relationship */
  term_relationships: Array<TermRelationships>;
  /** An aggregate relationship */
  term_relationships_aggregate: TermRelationships_Aggregate;
};


/** columns and relationships of "term_taxonomies" */
export type TermTaxonomiesTerm_RelationshipsArgs = {
  distinct_on?: InputMaybe<Array<TermRelationships_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TermRelationships_Order_By>>;
  where?: InputMaybe<TermRelationships_Bool_Exp>;
};


/** columns and relationships of "term_taxonomies" */
export type TermTaxonomiesTerm_Relationships_AggregateArgs = {
  distinct_on?: InputMaybe<Array<TermRelationships_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TermRelationships_Order_By>>;
  where?: InputMaybe<TermRelationships_Bool_Exp>;
};

/** aggregated selection of "term_taxonomies" */
export type TermTaxonomies_Aggregate = {
  __typename?: 'termTaxonomies_aggregate';
  aggregate?: Maybe<TermTaxonomies_Aggregate_Fields>;
  nodes: Array<TermTaxonomies>;
};

/** aggregate fields of "term_taxonomies" */
export type TermTaxonomies_Aggregate_Fields = {
  __typename?: 'termTaxonomies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TermTaxonomies_Max_Fields>;
  min?: Maybe<TermTaxonomies_Min_Fields>;
};


/** aggregate fields of "term_taxonomies" */
export type TermTaxonomies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TermTaxonomies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "term_taxonomies" */
export type TermTaxonomies_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<TermTaxonomies_Max_Order_By>;
  min?: InputMaybe<TermTaxonomies_Min_Order_By>;
};

/** input type for inserting array relation for remote table "term_taxonomies" */
export type TermTaxonomies_Arr_Rel_Insert_Input = {
  data: Array<TermTaxonomies_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<TermTaxonomies_On_Conflict>;
};

/** Boolean expression to filter rows from the table "term_taxonomies". All fields are combined with a logical 'AND'. */
export type TermTaxonomies_Bool_Exp = {
  _and?: InputMaybe<Array<TermTaxonomies_Bool_Exp>>;
  _not?: InputMaybe<TermTaxonomies_Bool_Exp>;
  _or?: InputMaybe<Array<TermTaxonomies_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  parentSlug?: InputMaybe<String_Comparison_Exp>;
  taxonomy?: InputMaybe<Taxonomies_Enum_Comparison_Exp>;
  taxonomyByTaxonomy?: InputMaybe<Taxonomies_Bool_Exp>;
  term?: InputMaybe<Terms_Bool_Exp>;
  termId?: InputMaybe<Uuid_Comparison_Exp>;
  term_relationships?: InputMaybe<TermRelationships_Bool_Exp>;
};

/** unique or primary key constraints on table "term_taxonomies" */
export enum TermTaxonomies_Constraint {
  /** unique or primary key constraint on columns "id" */
  TermTaxonomiesIdKey = 'term_taxonomies_id_key',
  /** unique or primary key constraint on columns "id" */
  TermTaxonomiesPkey = 'term_taxonomies_pkey',
  /** unique or primary key constraint on columns "term_id" */
  TermTaxonomiesTermIdKey = 'term_taxonomies_term_id_key'
}

/** input type for inserting data into table "term_taxonomies" */
export type TermTaxonomies_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  parentSlug?: InputMaybe<Scalars['String']>;
  taxonomy?: InputMaybe<Taxonomies_Enum>;
  taxonomyByTaxonomy?: InputMaybe<Taxonomies_Obj_Rel_Insert_Input>;
  term?: InputMaybe<Terms_Obj_Rel_Insert_Input>;
  termId?: InputMaybe<Scalars['uuid']>;
  term_relationships?: InputMaybe<TermRelationships_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type TermTaxonomies_Max_Fields = {
  __typename?: 'termTaxonomies_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  parentSlug?: Maybe<Scalars['String']>;
  termId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "term_taxonomies" */
export type TermTaxonomies_Max_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parentSlug?: InputMaybe<Order_By>;
  termId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type TermTaxonomies_Min_Fields = {
  __typename?: 'termTaxonomies_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  parentSlug?: Maybe<Scalars['String']>;
  termId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "term_taxonomies" */
export type TermTaxonomies_Min_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parentSlug?: InputMaybe<Order_By>;
  termId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "term_taxonomies" */
export type TermTaxonomies_Mutation_Response = {
  __typename?: 'termTaxonomies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TermTaxonomies>;
};

/** input type for inserting object relation for remote table "term_taxonomies" */
export type TermTaxonomies_Obj_Rel_Insert_Input = {
  data: TermTaxonomies_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<TermTaxonomies_On_Conflict>;
};

/** on_conflict condition type for table "term_taxonomies" */
export type TermTaxonomies_On_Conflict = {
  constraint: TermTaxonomies_Constraint;
  update_columns?: Array<TermTaxonomies_Update_Column>;
  where?: InputMaybe<TermTaxonomies_Bool_Exp>;
};

/** Ordering options when selecting data from "term_taxonomies". */
export type TermTaxonomies_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parentSlug?: InputMaybe<Order_By>;
  taxonomy?: InputMaybe<Order_By>;
  taxonomyByTaxonomy?: InputMaybe<Taxonomies_Order_By>;
  term?: InputMaybe<Terms_Order_By>;
  termId?: InputMaybe<Order_By>;
  term_relationships_aggregate?: InputMaybe<TermRelationships_Aggregate_Order_By>;
};

/** primary key columns input for table: termTaxonomies */
export type TermTaxonomies_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "term_taxonomies" */
export enum TermTaxonomies_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ParentSlug = 'parentSlug',
  /** column name */
  Taxonomy = 'taxonomy',
  /** column name */
  TermId = 'termId'
}

/** input type for updating data in table "term_taxonomies" */
export type TermTaxonomies_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  parentSlug?: InputMaybe<Scalars['String']>;
  taxonomy?: InputMaybe<Taxonomies_Enum>;
  termId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "term_taxonomies" */
export enum TermTaxonomies_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ParentSlug = 'parentSlug',
  /** column name */
  Taxonomy = 'taxonomy',
  /** column name */
  TermId = 'termId'
}

/** columns and relationships of "terms" */
export type Terms = {
  __typename?: 'terms';
  id: Scalars['uuid'];
  name: Scalars['String'];
  slug: Scalars['String'];
  /** An object relationship */
  termTaxonomy?: Maybe<TermTaxonomies>;
};

/** aggregated selection of "terms" */
export type Terms_Aggregate = {
  __typename?: 'terms_aggregate';
  aggregate?: Maybe<Terms_Aggregate_Fields>;
  nodes: Array<Terms>;
};

/** aggregate fields of "terms" */
export type Terms_Aggregate_Fields = {
  __typename?: 'terms_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Terms_Max_Fields>;
  min?: Maybe<Terms_Min_Fields>;
};


/** aggregate fields of "terms" */
export type Terms_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Terms_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "terms". All fields are combined with a logical 'AND'. */
export type Terms_Bool_Exp = {
  _and?: InputMaybe<Array<Terms_Bool_Exp>>;
  _not?: InputMaybe<Terms_Bool_Exp>;
  _or?: InputMaybe<Array<Terms_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  termTaxonomy?: InputMaybe<TermTaxonomies_Bool_Exp>;
};

/** unique or primary key constraints on table "terms" */
export enum Terms_Constraint {
  /** unique or primary key constraint on columns "id" */
  TermsIdKey = 'terms_id_key',
  /** unique or primary key constraint on columns "slug" */
  TermsPkey = 'terms_pkey',
  /** unique or primary key constraint on columns "slug" */
  TermsSlugKey = 'terms_slug_key'
}

/** input type for inserting data into table "terms" */
export type Terms_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  termTaxonomy?: InputMaybe<TermTaxonomies_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Terms_Max_Fields = {
  __typename?: 'terms_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Terms_Min_Fields = {
  __typename?: 'terms_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "terms" */
export type Terms_Mutation_Response = {
  __typename?: 'terms_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Terms>;
};

/** input type for inserting object relation for remote table "terms" */
export type Terms_Obj_Rel_Insert_Input = {
  data: Terms_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Terms_On_Conflict>;
};

/** on_conflict condition type for table "terms" */
export type Terms_On_Conflict = {
  constraint: Terms_Constraint;
  update_columns?: Array<Terms_Update_Column>;
  where?: InputMaybe<Terms_Bool_Exp>;
};

/** Ordering options when selecting data from "terms". */
export type Terms_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  termTaxonomy?: InputMaybe<TermTaxonomies_Order_By>;
};

/** primary key columns input for table: terms */
export type Terms_Pk_Columns_Input = {
  slug: Scalars['String'];
};

/** select columns of table "terms" */
export enum Terms_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug'
}

/** input type for updating data in table "terms" */
export type Terms_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** update columns of table "terms" */
export enum Terms_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug'
}

export type Timestamptz_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _cast?: InputMaybe<Timestamptz_Cast_Exp>;
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "auth.users" */
export type Users = {
  __typename?: 'users';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  defaultRole: Scalars['String'];
  /** An object relationship */
  defaultRoleByRole: AuthRoles;
  disabled: Scalars['Boolean'];
  displayName: Scalars['String'];
  email?: Maybe<Scalars['citext']>;
  emailVerified: Scalars['Boolean'];
  id: Scalars['uuid'];
  isAnonymous: Scalars['Boolean'];
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale: Scalars['String'];
  metadata?: Maybe<Scalars['jsonb']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt: Scalars['timestamptz'];
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberVerified: Scalars['Boolean'];
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  /** An array relationship */
  roles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  roles_aggregate: AuthUserRoles_Aggregate;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt: Scalars['timestamptz'];
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** columns and relationships of "auth.users" */
export type UsersMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "auth.users" */
export type UsersRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** columns and relationships of "auth.users" */
export type UsersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "auth.users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "auth.users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  activeMfaType?: InputMaybe<String_Comparison_Exp>;
  avatarUrl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  defaultRole?: InputMaybe<String_Comparison_Exp>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  disabled?: InputMaybe<Boolean_Comparison_Exp>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isAnonymous?: InputMaybe<Boolean_Comparison_Exp>;
  lastSeen?: InputMaybe<Timestamptz_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  newEmail?: InputMaybe<Citext_Comparison_Exp>;
  otpHash?: InputMaybe<String_Comparison_Exp>;
  otpHashExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  otpMethodLastUsed?: InputMaybe<String_Comparison_Exp>;
  passwordHash?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  phoneNumberVerified?: InputMaybe<Boolean_Comparison_Exp>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  roles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  ticket?: InputMaybe<String_Comparison_Exp>;
  ticketExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  totpSecret?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "phone_number" */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.users" */
export type Users_Insert_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  roles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "auth.users" */
export type Users_Max_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "auth.users" */
export type Users_Min_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "auth.users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Users_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Order_By>;
  disabled?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isAnonymous?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  phoneNumberVerified?: InputMaybe<Order_By>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.users" */
export enum Users_Select_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "auth.users" */
export type Users_Set_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.users" */
export enum Users_Update_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Uuid_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _cast?: InputMaybe<Uuid_Cast_Exp>;
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type TagsTableQueryVariables = Exact<{ [key: string]: never; }>;


export type TagsTableQuery = { __typename?: 'query_root', summaryTaxonomies: Array<{ __typename: 'summaryTaxonomies', name?: string | null, slug?: string | null, description?: string | null, count?: any | null }> };

export type DeletePostMutationVariables = Exact<{
  where: Posts_Bool_Exp;
}>;


export type DeletePostMutation = { __typename?: 'mutation_root', deletePosts?: { __typename: 'posts_mutation_response' } | null };

export type InsertArticleMutationVariables = Exact<{
  object: Articles_Insert_Input;
}>;


export type InsertArticleMutation = { __typename?: 'mutation_root', insertArticle?: { __typename: 'articles', postId: any } | null };

export type InsertPageMutationVariables = Exact<{
  object: Pages_Insert_Input;
}>;


export type InsertPageMutation = { __typename?: 'mutation_root', insertPage?: { __typename: 'pages', postId: any } | null };

export type InsertTermMutationVariables = Exact<{
  object: Terms_Insert_Input;
}>;


export type InsertTermMutation = { __typename?: 'mutation_root', insertTerm?: { __typename: 'terms', slug: string } | null };

export type InsertTermTaxonomyMutationVariables = Exact<{
  object: TermTaxonomies_Insert_Input;
}>;


export type InsertTermTaxonomyMutation = { __typename?: 'mutation_root', insertTermTaxonomy?: { __typename: 'termTaxonomies', term: { __typename?: 'terms', slug: string } } | null };

export type UpdateArticleMutationVariables = Exact<{
  articles_pk_columns: Articles_Pk_Columns_Input;
  articles_set?: InputMaybe<Articles_Set_Input>;
  posts_pk_columns: Posts_Pk_Columns_Input;
  posts_set?: InputMaybe<Posts_Set_Input>;
}>;


export type UpdateArticleMutation = { __typename?: 'mutation_root', updateArticle?: { __typename: 'articles', postId: any } | null, updatePost?: { __typename: 'posts', id: any } | null };

export type UpdatePageMutationVariables = Exact<{
  pages_pk_columns: Pages_Pk_Columns_Input;
  pages_set?: InputMaybe<Pages_Set_Input>;
  posts_pk_columns: Posts_Pk_Columns_Input;
  posts_set?: InputMaybe<Posts_Set_Input>;
}>;


export type UpdatePageMutation = { __typename?: 'mutation_root', updatePage?: { __typename: 'pages', postId: any } | null, updatePost?: { __typename: 'posts', id: any } | null };

export type UpdatePostMutationVariables = Exact<{
  pk_columns: Posts_Pk_Columns_Input;
  _set?: InputMaybe<Posts_Set_Input>;
}>;


export type UpdatePostMutation = { __typename?: 'mutation_root', updatePost?: { __typename: 'posts', id: any } | null };

export type ArticleQueryVariables = Exact<{
  uuid: Scalars['uuid'];
}>;


export type ArticleQuery = { __typename?: 'query_root', article?: { __typename: 'articles', postId: any, body?: string | null, excerpt?: string | null, state: ArticleStates_Enum, post: { __typename: 'posts', title: string, description?: string | null, slug: string } } | null };

export type ArticlesQueryVariables = Exact<{
  where?: InputMaybe<Articles_Bool_Exp>;
}>;


export type ArticlesQuery = { __typename?: 'query_root', articles: Array<{ __typename: 'articles', postId: any, state: ArticleStates_Enum, post: { __typename: 'posts', title: string, type?: PostTypes_Enum | null, slug: string, createdAt?: any | null } }> };

export type ArticlesAggregateQueryVariables = Exact<{
  where?: InputMaybe<Articles_Bool_Exp>;
}>;


export type ArticlesAggregateQuery = { __typename?: 'query_root', articlesAggregate: { __typename?: 'articles_aggregate', aggregate?: { __typename: 'articles_aggregate_fields', count: number } | null } };

export type PageQueryVariables = Exact<{
  uuid: Scalars['uuid'];
}>;


export type PageQuery = { __typename?: 'query_root', page?: { __typename: 'pages', postId: any, body?: string | null, state: PageStates_Enum, post: { __typename: 'posts', title: string, slug: string } } | null };

export type PagesQueryVariables = Exact<{
  where?: InputMaybe<Pages_Bool_Exp>;
}>;


export type PagesQuery = { __typename?: 'query_root', pages: Array<{ __typename: 'pages', postId: any, body?: string | null, post: { __typename: 'posts', title: string, type?: PostTypes_Enum | null, slug: string, createdAt?: any | null } }> };

export type PagesAggregateQueryVariables = Exact<{
  where?: InputMaybe<Pages_Bool_Exp>;
}>;


export type PagesAggregateQuery = { __typename?: 'query_root', pagesAggregate: { __typename?: 'pages_aggregate', aggregate?: { __typename: 'pages_aggregate_fields', count: number } | null } };

export type TermTaxonomiesQueryVariables = Exact<{
  where?: InputMaybe<TermTaxonomies_Bool_Exp>;
}>;


export type TermTaxonomiesQuery = { __typename?: 'query_root', termTaxonomies: Array<{ __typename: 'termTaxonomies', taxonomy: Taxonomies_Enum, description?: string | null, parentSlug?: string | null, term: { __typename: 'terms', name: string, slug: string } }> };


export const TagsTableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TagsTable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"summaryTaxonomies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"taxonomy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"tags","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode<TagsTableQuery, TagsTableQueryVariables>;
export const DeletePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deletePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"posts_bool_exp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<DeletePostMutation, DeletePostMutationVariables>;
export const InsertArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"articles_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertArticle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}}]}}]}}]} as unknown as DocumentNode<InsertArticleMutation, InsertArticleMutationVariables>;
export const InsertPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"pages_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}}]}}]}}]} as unknown as DocumentNode<InsertPageMutation, InsertPageMutationVariables>;
export const InsertTermDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertTerm"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"terms_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertTerm"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<InsertTermMutation, InsertTermMutationVariables>;
export const InsertTermTaxonomyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"insertTermTaxonomy"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"termTaxonomies_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertTermTaxonomy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"term"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<InsertTermTaxonomyMutation, InsertTermTaxonomyMutationVariables>;
export const UpdateArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"articles_pk_columns"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"articles_pk_columns_input"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"articles_set"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"articles_set_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"posts_pk_columns"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"posts_pk_columns_input"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"posts_set"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"posts_set_input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateArticle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"articles_pk_columns"}}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"articles_set"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"posts_pk_columns"}}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"posts_set"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateArticleMutation, UpdateArticleMutationVariables>;
export const UpdatePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pages_pk_columns"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"pages_pk_columns_input"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pages_set"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"pages_set_input"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"posts_pk_columns"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"posts_pk_columns_input"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"posts_set"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"posts_set_input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pages_pk_columns"}}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pages_set"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"posts_pk_columns"}}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"posts_set"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdatePageMutation, UpdatePageMutationVariables>;
export const UpdatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pk_columns"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"posts_pk_columns_input"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_set"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"posts_set_input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pk_columns"}}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_set"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdatePostMutation, UpdatePostMutationVariables>;
export const ArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"article"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"article"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"state"}}]}}]}}]} as unknown as DocumentNode<ArticleQuery, ArticleQueryVariables>;
export const ArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"articles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"articles_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<ArticlesQuery, ArticlesQueryVariables>;
export const ArticlesAggregateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"articlesAggregate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"articles_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articlesAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<ArticlesAggregateQuery, ArticlesAggregateQueryVariables>;
export const PageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"page"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"state"}}]}}]}}]} as unknown as DocumentNode<PageQuery, PageQueryVariables>;
export const PagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"pages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"pages_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<PagesQuery, PagesQueryVariables>;
export const PagesAggregateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"pagesAggregate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"pages_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagesAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<PagesAggregateQuery, PagesAggregateQueryVariables>;
export const TermTaxonomiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"termTaxonomies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"termTaxonomies_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"termTaxonomies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"taxonomy"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"parentSlug"}},{"kind":"Field","name":{"kind":"Name","value":"term"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<TermTaxonomiesQuery, TermTaxonomiesQueryVariables>;