import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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


export type BooleanCastExp = {
  String?: Maybe<StringComparisonExp>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _cast?: Maybe<BooleanCastExp>;
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export type MeiliSearchOutput = {
  __typename?: 'MeiliSearchOutput';
  hits?: Maybe<Scalars['jsonb']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "article_states" */
export type ArticleStates = {
  __typename?: 'articleStates';
  articleState: Scalars['String'];
  /** An array relationship */
  articles: Array<Articles>;
  /** An aggregate relationship */
  articles_aggregate: ArticlesAggregate;
};


/** columns and relationships of "article_states" */
export type ArticleStatesArticlesArgs = {
  distinct_on?: Maybe<Array<ArticlesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ArticlesOrderBy>>;
  where?: Maybe<ArticlesBoolExp>;
};


/** columns and relationships of "article_states" */
export type ArticleStatesArticlesAggregateArgs = {
  distinct_on?: Maybe<Array<ArticlesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ArticlesOrderBy>>;
  where?: Maybe<ArticlesBoolExp>;
};

/** aggregated selection of "article_states" */
export type ArticleStatesAggregate = {
  __typename?: 'articleStates_aggregate';
  aggregate?: Maybe<ArticleStatesAggregateFields>;
  nodes: Array<ArticleStates>;
};

/** aggregate fields of "article_states" */
export type ArticleStatesAggregateFields = {
  __typename?: 'articleStates_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ArticleStatesMaxFields>;
  min?: Maybe<ArticleStatesMinFields>;
};


/** aggregate fields of "article_states" */
export type ArticleStatesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ArticleStatesSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "article_states". All fields are combined with a logical 'AND'. */
export type ArticleStatesBoolExp = {
  _and?: Maybe<Array<ArticleStatesBoolExp>>;
  _not?: Maybe<ArticleStatesBoolExp>;
  _or?: Maybe<Array<ArticleStatesBoolExp>>;
  articleState?: Maybe<StringComparisonExp>;
  articles?: Maybe<ArticlesBoolExp>;
};

/** unique or primary key constraints on table "article_states" */
export enum ArticleStatesConstraint {
  /** unique or primary key constraint on columns "article_state" */
  ArticleStatesPkey = 'article_states_pkey'
}

export enum ArticleStatesEnum {
  Archived = 'archived',
  Draft = 'draft',
  Published = 'published'
}

/** Boolean expression to compare columns of type "articleStates_enum". All fields are combined with logical 'AND'. */
export type ArticleStatesEnumComparisonExp = {
  _eq?: Maybe<ArticleStatesEnum>;
  _in?: Maybe<Array<ArticleStatesEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<ArticleStatesEnum>;
  _nin?: Maybe<Array<ArticleStatesEnum>>;
};

/** input type for inserting data into table "article_states" */
export type ArticleStatesInsertInput = {
  articleState?: Maybe<Scalars['String']>;
  articles?: Maybe<ArticlesArrRelInsertInput>;
};

/** aggregate max on columns */
export type ArticleStatesMaxFields = {
  __typename?: 'articleStates_max_fields';
  articleState?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type ArticleStatesMinFields = {
  __typename?: 'articleStates_min_fields';
  articleState?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "article_states" */
export type ArticleStatesMutationResponse = {
  __typename?: 'articleStates_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ArticleStates>;
};

/** input type for inserting object relation for remote table "article_states" */
export type ArticleStatesObjRelInsertInput = {
  data: ArticleStatesInsertInput;
  /** upsert condition */
  on_conflict?: Maybe<ArticleStatesOnConflict>;
};

/** on_conflict condition type for table "article_states" */
export type ArticleStatesOnConflict = {
  constraint: ArticleStatesConstraint;
  update_columns?: Array<ArticleStatesUpdateColumn>;
  where?: Maybe<ArticleStatesBoolExp>;
};

/** Ordering options when selecting data from "article_states". */
export type ArticleStatesOrderBy = {
  articleState?: Maybe<OrderBy>;
  articles_aggregate?: Maybe<ArticlesAggregateOrderBy>;
};

/** primary key columns input for table: articleStates */
export type ArticleStatesPkColumnsInput = {
  articleState: Scalars['String'];
};

/** select columns of table "article_states" */
export enum ArticleStatesSelectColumn {
  /** column name */
  ArticleState = 'articleState'
}

/** input type for updating data in table "article_states" */
export type ArticleStatesSetInput = {
  articleState?: Maybe<Scalars['String']>;
};

/** update columns of table "article_states" */
export enum ArticleStatesUpdateColumn {
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
  state: ArticleStatesEnum;
};

/** aggregated selection of "articles" */
export type ArticlesAggregate = {
  __typename?: 'articles_aggregate';
  aggregate?: Maybe<ArticlesAggregateFields>;
  nodes: Array<Articles>;
};

/** aggregate fields of "articles" */
export type ArticlesAggregateFields = {
  __typename?: 'articles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ArticlesMaxFields>;
  min?: Maybe<ArticlesMinFields>;
};


/** aggregate fields of "articles" */
export type ArticlesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ArticlesSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "articles" */
export type ArticlesAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<ArticlesMaxOrderBy>;
  min?: Maybe<ArticlesMinOrderBy>;
};

/** input type for inserting array relation for remote table "articles" */
export type ArticlesArrRelInsertInput = {
  data: Array<ArticlesInsertInput>;
  /** upsert condition */
  on_conflict?: Maybe<ArticlesOnConflict>;
};

/** Boolean expression to filter rows from the table "articles". All fields are combined with a logical 'AND'. */
export type ArticlesBoolExp = {
  _and?: Maybe<Array<ArticlesBoolExp>>;
  _not?: Maybe<ArticlesBoolExp>;
  _or?: Maybe<Array<ArticlesBoolExp>>;
  article_state?: Maybe<ArticleStatesBoolExp>;
  body?: Maybe<StringComparisonExp>;
  excerpt?: Maybe<StringComparisonExp>;
  post?: Maybe<PostsBoolExp>;
  postId?: Maybe<UuidComparisonExp>;
  state?: Maybe<ArticleStatesEnumComparisonExp>;
};

/** unique or primary key constraints on table "articles" */
export enum ArticlesConstraint {
  /** unique or primary key constraint on columns "post_id" */
  ArticlesPkey = 'articles_pkey'
}

/** input type for inserting data into table "articles" */
export type ArticlesInsertInput = {
  article_state?: Maybe<ArticleStatesObjRelInsertInput>;
  body?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  post?: Maybe<PostsObjRelInsertInput>;
  postId?: Maybe<Scalars['uuid']>;
  state?: Maybe<ArticleStatesEnum>;
};

/** aggregate max on columns */
export type ArticlesMaxFields = {
  __typename?: 'articles_max_fields';
  body?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "articles" */
export type ArticlesMaxOrderBy = {
  body?: Maybe<OrderBy>;
  excerpt?: Maybe<OrderBy>;
  postId?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ArticlesMinFields = {
  __typename?: 'articles_min_fields';
  body?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "articles" */
export type ArticlesMinOrderBy = {
  body?: Maybe<OrderBy>;
  excerpt?: Maybe<OrderBy>;
  postId?: Maybe<OrderBy>;
};

/** response of any mutation on the table "articles" */
export type ArticlesMutationResponse = {
  __typename?: 'articles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Articles>;
};

/** input type for inserting object relation for remote table "articles" */
export type ArticlesObjRelInsertInput = {
  data: ArticlesInsertInput;
  /** upsert condition */
  on_conflict?: Maybe<ArticlesOnConflict>;
};

/** on_conflict condition type for table "articles" */
export type ArticlesOnConflict = {
  constraint: ArticlesConstraint;
  update_columns?: Array<ArticlesUpdateColumn>;
  where?: Maybe<ArticlesBoolExp>;
};

/** Ordering options when selecting data from "articles". */
export type ArticlesOrderBy = {
  article_state?: Maybe<ArticleStatesOrderBy>;
  body?: Maybe<OrderBy>;
  excerpt?: Maybe<OrderBy>;
  post?: Maybe<PostsOrderBy>;
  postId?: Maybe<OrderBy>;
  state?: Maybe<OrderBy>;
};

/** primary key columns input for table: articles */
export type ArticlesPkColumnsInput = {
  postId: Scalars['uuid'];
};

/** select columns of table "articles" */
export enum ArticlesSelectColumn {
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
export type ArticlesSetInput = {
  body?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['uuid']>;
  state?: Maybe<ArticleStatesEnum>;
};

/** update columns of table "articles" */
export enum ArticlesUpdateColumn {
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
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequestsAggregate = {
  __typename?: 'authProviderRequests_aggregate';
  aggregate?: Maybe<AuthProviderRequestsAggregateFields>;
  nodes: Array<AuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequestsAggregateFields = {
  __typename?: 'authProviderRequests_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviderRequestsMaxFields>;
  min?: Maybe<AuthProviderRequestsMinFields>;
};


/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequestsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<AuthProviderRequestsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequestsAppendInput = {
  options?: Maybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequestsBoolExp = {
  _and?: Maybe<Array<AuthProviderRequestsBoolExp>>;
  _not?: Maybe<AuthProviderRequestsBoolExp>;
  _or?: Maybe<Array<AuthProviderRequestsBoolExp>>;
  id?: Maybe<UuidComparisonExp>;
  options?: Maybe<JsonbComparisonExp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export enum AuthProviderRequestsConstraint {
  /** unique or primary key constraint on columns "id" */
  ProviderRequestsPkey = 'provider_requests_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthProviderRequestsDeleteAtPathInput = {
  options?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthProviderRequestsDeleteElemInput = {
  options?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthProviderRequestsDeleteKeyInput = {
  options?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequestsInsertInput = {
  id?: Maybe<Scalars['uuid']>;
  options?: Maybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type AuthProviderRequestsMaxFields = {
  __typename?: 'authProviderRequests_max_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type AuthProviderRequestsMinFields = {
  __typename?: 'authProviderRequests_min_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequestsMutationResponse = {
  __typename?: 'authProviderRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviderRequests>;
};

/** on_conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequestsOnConflict = {
  constraint: AuthProviderRequestsConstraint;
  update_columns?: Array<AuthProviderRequestsUpdateColumn>;
  where?: Maybe<AuthProviderRequestsBoolExp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequestsOrderBy = {
  id?: Maybe<OrderBy>;
  options?: Maybe<OrderBy>;
};

/** primary key columns input for table: authProviderRequests */
export type AuthProviderRequestsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequestsPrependInput = {
  options?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "auth.provider_requests" */
export enum AuthProviderRequestsSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequestsSetInput = {
  id?: Maybe<Scalars['uuid']>;
  options?: Maybe<Scalars['jsonb']>;
};

/** update columns of table "auth.provider_requests" */
export enum AuthProviderRequestsUpdateColumn {
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
  userProviders_aggregate: AuthUserProvidersAggregate;
};


/** columns and relationships of "auth.providers" */
export type AuthProvidersUserProvidersArgs = {
  distinct_on?: Maybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthUserProvidersOrderBy>>;
  where?: Maybe<AuthUserProvidersBoolExp>;
};


/** columns and relationships of "auth.providers" */
export type AuthProvidersUserProvidersAggregateArgs = {
  distinct_on?: Maybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthUserProvidersOrderBy>>;
  where?: Maybe<AuthUserProvidersBoolExp>;
};

/** aggregated selection of "auth.providers" */
export type AuthProvidersAggregate = {
  __typename?: 'authProviders_aggregate';
  aggregate?: Maybe<AuthProvidersAggregateFields>;
  nodes: Array<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProvidersAggregateFields = {
  __typename?: 'authProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProvidersMaxFields>;
  min?: Maybe<AuthProvidersMinFields>;
};


/** aggregate fields of "auth.providers" */
export type AuthProvidersAggregateFieldsCountArgs = {
  columns?: Maybe<Array<AuthProvidersSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProvidersBoolExp = {
  _and?: Maybe<Array<AuthProvidersBoolExp>>;
  _not?: Maybe<AuthProvidersBoolExp>;
  _or?: Maybe<Array<AuthProvidersBoolExp>>;
  id?: Maybe<StringComparisonExp>;
  userProviders?: Maybe<AuthUserProvidersBoolExp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProvidersConstraint {
  /** unique or primary key constraint on columns "id" */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type AuthProvidersInsertInput = {
  id?: Maybe<Scalars['String']>;
  userProviders?: Maybe<AuthUserProvidersArrRelInsertInput>;
};

/** aggregate max on columns */
export type AuthProvidersMaxFields = {
  __typename?: 'authProviders_max_fields';
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthProvidersMinFields = {
  __typename?: 'authProviders_min_fields';
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProvidersMutationResponse = {
  __typename?: 'authProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProvidersObjRelInsertInput = {
  data: AuthProvidersInsertInput;
  /** upsert condition */
  on_conflict?: Maybe<AuthProvidersOnConflict>;
};

/** on_conflict condition type for table "auth.providers" */
export type AuthProvidersOnConflict = {
  constraint: AuthProvidersConstraint;
  update_columns?: Array<AuthProvidersUpdateColumn>;
  where?: Maybe<AuthProvidersBoolExp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProvidersOrderBy = {
  id?: Maybe<OrderBy>;
  userProviders_aggregate?: Maybe<AuthUserProvidersAggregateOrderBy>;
};

/** primary key columns input for table: authProviders */
export type AuthProvidersPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "auth.providers" */
export enum AuthProvidersSelectColumn {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "auth.providers" */
export type AuthProvidersSetInput = {
  id?: Maybe<Scalars['String']>;
};

/** update columns of table "auth.providers" */
export enum AuthProvidersUpdateColumn {
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
export type AuthRefreshTokensAggregate = {
  __typename?: 'authRefreshTokens_aggregate';
  aggregate?: Maybe<AuthRefreshTokensAggregateFields>;
  nodes: Array<AuthRefreshTokens>;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokensAggregateFields = {
  __typename?: 'authRefreshTokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRefreshTokensMaxFields>;
  min?: Maybe<AuthRefreshTokensMinFields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokensAggregateFieldsCountArgs = {
  columns?: Maybe<Array<AuthRefreshTokensSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokensAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<AuthRefreshTokensMaxOrderBy>;
  min?: Maybe<AuthRefreshTokensMinOrderBy>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type AuthRefreshTokensArrRelInsertInput = {
  data: Array<AuthRefreshTokensInsertInput>;
  /** upsert condition */
  on_conflict?: Maybe<AuthRefreshTokensOnConflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokensBoolExp = {
  _and?: Maybe<Array<AuthRefreshTokensBoolExp>>;
  _not?: Maybe<AuthRefreshTokensBoolExp>;
  _or?: Maybe<Array<AuthRefreshTokensBoolExp>>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  expiresAt?: Maybe<TimestamptzComparisonExp>;
  refreshToken?: Maybe<UuidComparisonExp>;
  user?: Maybe<UsersBoolExp>;
  userId?: Maybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokensConstraint {
  /** unique or primary key constraint on columns "refresh_token" */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokensInsertInput = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  refreshToken?: Maybe<Scalars['uuid']>;
  user?: Maybe<UsersObjRelInsertInput>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthRefreshTokensMaxFields = {
  __typename?: 'authRefreshTokens_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  refreshToken?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokensMaxOrderBy = {
  createdAt?: Maybe<OrderBy>;
  expiresAt?: Maybe<OrderBy>;
  refreshToken?: Maybe<OrderBy>;
  userId?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type AuthRefreshTokensMinFields = {
  __typename?: 'authRefreshTokens_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  refreshToken?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokensMinOrderBy = {
  createdAt?: Maybe<OrderBy>;
  expiresAt?: Maybe<OrderBy>;
  refreshToken?: Maybe<OrderBy>;
  userId?: Maybe<OrderBy>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokensMutationResponse = {
  __typename?: 'authRefreshTokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokensOnConflict = {
  constraint: AuthRefreshTokensConstraint;
  update_columns?: Array<AuthRefreshTokensUpdateColumn>;
  where?: Maybe<AuthRefreshTokensBoolExp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokensOrderBy = {
  createdAt?: Maybe<OrderBy>;
  expiresAt?: Maybe<OrderBy>;
  refreshToken?: Maybe<OrderBy>;
  user?: Maybe<UsersOrderBy>;
  userId?: Maybe<OrderBy>;
};

/** primary key columns input for table: authRefreshTokens */
export type AuthRefreshTokensPkColumnsInput = {
  refreshToken: Scalars['uuid'];
};

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokensSelectColumn {
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
export type AuthRefreshTokensSetInput = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  refreshToken?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokensUpdateColumn {
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
  userRoles_aggregate: AuthUserRolesAggregate;
  /** An array relationship */
  usersByDefaultRole: Array<Users>;
  /** An aggregate relationship */
  usersByDefaultRole_aggregate: UsersAggregate;
};


/** columns and relationships of "auth.roles" */
export type AuthRolesUserRolesArgs = {
  distinct_on?: Maybe<Array<AuthUserRolesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthUserRolesOrderBy>>;
  where?: Maybe<AuthUserRolesBoolExp>;
};


/** columns and relationships of "auth.roles" */
export type AuthRolesUserRolesAggregateArgs = {
  distinct_on?: Maybe<Array<AuthUserRolesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthUserRolesOrderBy>>;
  where?: Maybe<AuthUserRolesBoolExp>;
};


/** columns and relationships of "auth.roles" */
export type AuthRolesUsersByDefaultRoleArgs = {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
};


/** columns and relationships of "auth.roles" */
export type AuthRolesUsersByDefaultRoleAggregateArgs = {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
};

/** aggregated selection of "auth.roles" */
export type AuthRolesAggregate = {
  __typename?: 'authRoles_aggregate';
  aggregate?: Maybe<AuthRolesAggregateFields>;
  nodes: Array<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRolesAggregateFields = {
  __typename?: 'authRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRolesMaxFields>;
  min?: Maybe<AuthRolesMinFields>;
};


/** aggregate fields of "auth.roles" */
export type AuthRolesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<AuthRolesSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRolesBoolExp = {
  _and?: Maybe<Array<AuthRolesBoolExp>>;
  _not?: Maybe<AuthRolesBoolExp>;
  _or?: Maybe<Array<AuthRolesBoolExp>>;
  role?: Maybe<StringComparisonExp>;
  userRoles?: Maybe<AuthUserRolesBoolExp>;
  usersByDefaultRole?: Maybe<UsersBoolExp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRolesConstraint {
  /** unique or primary key constraint on columns "role" */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type AuthRolesInsertInput = {
  role?: Maybe<Scalars['String']>;
  userRoles?: Maybe<AuthUserRolesArrRelInsertInput>;
  usersByDefaultRole?: Maybe<UsersArrRelInsertInput>;
};

/** aggregate max on columns */
export type AuthRolesMaxFields = {
  __typename?: 'authRoles_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthRolesMinFields = {
  __typename?: 'authRoles_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRolesMutationResponse = {
  __typename?: 'authRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRolesObjRelInsertInput = {
  data: AuthRolesInsertInput;
  /** upsert condition */
  on_conflict?: Maybe<AuthRolesOnConflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type AuthRolesOnConflict = {
  constraint: AuthRolesConstraint;
  update_columns?: Array<AuthRolesUpdateColumn>;
  where?: Maybe<AuthRolesBoolExp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRolesOrderBy = {
  role?: Maybe<OrderBy>;
  userRoles_aggregate?: Maybe<AuthUserRolesAggregateOrderBy>;
  usersByDefaultRole_aggregate?: Maybe<UsersAggregateOrderBy>;
};

/** primary key columns input for table: authRoles */
export type AuthRolesPkColumnsInput = {
  role: Scalars['String'];
};

/** select columns of table "auth.roles" */
export enum AuthRolesSelectColumn {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type AuthRolesSetInput = {
  role?: Maybe<Scalars['String']>;
};

/** update columns of table "auth.roles" */
export enum AuthRolesUpdateColumn {
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
export type AuthUserProvidersAggregate = {
  __typename?: 'authUserProviders_aggregate';
  aggregate?: Maybe<AuthUserProvidersAggregateFields>;
  nodes: Array<AuthUserProviders>;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProvidersAggregateFields = {
  __typename?: 'authUserProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserProvidersMaxFields>;
  min?: Maybe<AuthUserProvidersMinFields>;
};


/** aggregate fields of "auth.user_providers" */
export type AuthUserProvidersAggregateFieldsCountArgs = {
  columns?: Maybe<Array<AuthUserProvidersSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_providers" */
export type AuthUserProvidersAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<AuthUserProvidersMaxOrderBy>;
  min?: Maybe<AuthUserProvidersMinOrderBy>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
export type AuthUserProvidersArrRelInsertInput = {
  data: Array<AuthUserProvidersInsertInput>;
  /** upsert condition */
  on_conflict?: Maybe<AuthUserProvidersOnConflict>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProvidersBoolExp = {
  _and?: Maybe<Array<AuthUserProvidersBoolExp>>;
  _not?: Maybe<AuthUserProvidersBoolExp>;
  _or?: Maybe<Array<AuthUserProvidersBoolExp>>;
  accessToken?: Maybe<StringComparisonExp>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  provider?: Maybe<AuthProvidersBoolExp>;
  providerId?: Maybe<StringComparisonExp>;
  providerUserId?: Maybe<StringComparisonExp>;
  refreshToken?: Maybe<StringComparisonExp>;
  updatedAt?: Maybe<TimestamptzComparisonExp>;
  user?: Maybe<UsersBoolExp>;
  userId?: Maybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export enum AuthUserProvidersConstraint {
  /** unique or primary key constraint on columns "id" */
  UserProvidersPkey = 'user_providers_pkey',
  /** unique or primary key constraint on columns "provider_user_id", "provider_id" */
  UserProvidersProviderIdProviderUserIdKey = 'user_providers_provider_id_provider_user_id_key',
  /** unique or primary key constraint on columns "provider_id", "user_id" */
  UserProvidersUserIdProviderIdKey = 'user_providers_user_id_provider_id_key'
}

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProvidersInsertInput = {
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  provider?: Maybe<AuthProvidersObjRelInsertInput>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<UsersObjRelInsertInput>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserProvidersMaxFields = {
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
export type AuthUserProvidersMaxOrderBy = {
  accessToken?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  providerId?: Maybe<OrderBy>;
  providerUserId?: Maybe<OrderBy>;
  refreshToken?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
  userId?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type AuthUserProvidersMinFields = {
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
export type AuthUserProvidersMinOrderBy = {
  accessToken?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  providerId?: Maybe<OrderBy>;
  providerUserId?: Maybe<OrderBy>;
  refreshToken?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
  userId?: Maybe<OrderBy>;
};

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProvidersMutationResponse = {
  __typename?: 'authUserProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserProviders>;
};

/** on_conflict condition type for table "auth.user_providers" */
export type AuthUserProvidersOnConflict = {
  constraint: AuthUserProvidersConstraint;
  update_columns?: Array<AuthUserProvidersUpdateColumn>;
  where?: Maybe<AuthUserProvidersBoolExp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProvidersOrderBy = {
  accessToken?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  provider?: Maybe<AuthProvidersOrderBy>;
  providerId?: Maybe<OrderBy>;
  providerUserId?: Maybe<OrderBy>;
  refreshToken?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
  user?: Maybe<UsersOrderBy>;
  userId?: Maybe<OrderBy>;
};

/** primary key columns input for table: authUserProviders */
export type AuthUserProvidersPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_providers" */
export enum AuthUserProvidersSelectColumn {
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
export type AuthUserProvidersSetInput = {
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_providers" */
export enum AuthUserProvidersUpdateColumn {
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
export type AuthUserRolesAggregate = {
  __typename?: 'authUserRoles_aggregate';
  aggregate?: Maybe<AuthUserRolesAggregateFields>;
  nodes: Array<AuthUserRoles>;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRolesAggregateFields = {
  __typename?: 'authUserRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserRolesMaxFields>;
  min?: Maybe<AuthUserRolesMinFields>;
};


/** aggregate fields of "auth.user_roles" */
export type AuthUserRolesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<AuthUserRolesSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_roles" */
export type AuthUserRolesAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<AuthUserRolesMaxOrderBy>;
  min?: Maybe<AuthUserRolesMinOrderBy>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
export type AuthUserRolesArrRelInsertInput = {
  data: Array<AuthUserRolesInsertInput>;
  /** upsert condition */
  on_conflict?: Maybe<AuthUserRolesOnConflict>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRolesBoolExp = {
  _and?: Maybe<Array<AuthUserRolesBoolExp>>;
  _not?: Maybe<AuthUserRolesBoolExp>;
  _or?: Maybe<Array<AuthUserRolesBoolExp>>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  role?: Maybe<StringComparisonExp>;
  roleByRole?: Maybe<AuthRolesBoolExp>;
  user?: Maybe<UsersBoolExp>;
  userId?: Maybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export enum AuthUserRolesConstraint {
  /** unique or primary key constraint on columns "id" */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint on columns "role", "user_id" */
  UserRolesUserIdRoleKey = 'user_roles_user_id_role_key'
}

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRolesInsertInput = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  roleByRole?: Maybe<AuthRolesObjRelInsertInput>;
  user?: Maybe<UsersObjRelInsertInput>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserRolesMaxFields = {
  __typename?: 'authUserRoles_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_roles" */
export type AuthUserRolesMaxOrderBy = {
  createdAt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  role?: Maybe<OrderBy>;
  userId?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type AuthUserRolesMinFields = {
  __typename?: 'authUserRoles_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_roles" */
export type AuthUserRolesMinOrderBy = {
  createdAt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  role?: Maybe<OrderBy>;
  userId?: Maybe<OrderBy>;
};

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRolesMutationResponse = {
  __typename?: 'authUserRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserRoles>;
};

/** on_conflict condition type for table "auth.user_roles" */
export type AuthUserRolesOnConflict = {
  constraint: AuthUserRolesConstraint;
  update_columns?: Array<AuthUserRolesUpdateColumn>;
  where?: Maybe<AuthUserRolesBoolExp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRolesOrderBy = {
  createdAt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  role?: Maybe<OrderBy>;
  roleByRole?: Maybe<AuthRolesOrderBy>;
  user?: Maybe<UsersOrderBy>;
  userId?: Maybe<OrderBy>;
};

/** primary key columns input for table: authUserRoles */
export type AuthUserRolesPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_roles" */
export enum AuthUserRolesSelectColumn {
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
export type AuthUserRolesSetInput = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_roles" */
export enum AuthUserRolesUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}


export type BigintCastExp = {
  String?: Maybe<StringComparisonExp>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type BigintComparisonExp = {
  _cast?: Maybe<BigintCastExp>;
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};


/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type CitextComparisonExp = {
  _eq?: Maybe<Scalars['citext']>;
  _gt?: Maybe<Scalars['citext']>;
  _gte?: Maybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['citext']>;
  _in?: Maybe<Array<Scalars['citext']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['citext']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['citext']>;
  _lt?: Maybe<Scalars['citext']>;
  _lte?: Maybe<Scalars['citext']>;
  _neq?: Maybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['citext']>;
  _nin?: Maybe<Array<Scalars['citext']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['citext']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['citext']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['citext']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['citext']>;
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
  comments_aggregate: CommentsAggregate;
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
  distinct_on?: Maybe<Array<CommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentsOrderBy>>;
  where?: Maybe<CommentsBoolExp>;
};


/** columns and relationships of "comments" */
export type CommentsCommentsAggregateArgs = {
  distinct_on?: Maybe<Array<CommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentsOrderBy>>;
  where?: Maybe<CommentsBoolExp>;
};


/** columns and relationships of "comments" */
export type CommentsMetaArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "comments" */
export type CommentsAggregate = {
  __typename?: 'comments_aggregate';
  aggregate?: Maybe<CommentsAggregateFields>;
  nodes: Array<Comments>;
};

/** aggregate fields of "comments" */
export type CommentsAggregateFields = {
  __typename?: 'comments_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<CommentsMaxFields>;
  min?: Maybe<CommentsMinFields>;
};


/** aggregate fields of "comments" */
export type CommentsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<CommentsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "comments" */
export type CommentsAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<CommentsMaxOrderBy>;
  min?: Maybe<CommentsMinOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type CommentsAppendInput = {
  meta?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "comments" */
export type CommentsArrRelInsertInput = {
  data: Array<CommentsInsertInput>;
  /** upsert condition */
  on_conflict?: Maybe<CommentsOnConflict>;
};

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export type CommentsBoolExp = {
  _and?: Maybe<Array<CommentsBoolExp>>;
  _not?: Maybe<CommentsBoolExp>;
  _or?: Maybe<Array<CommentsBoolExp>>;
  authorId?: Maybe<UuidComparisonExp>;
  comment?: Maybe<CommentsBoolExp>;
  comments?: Maybe<CommentsBoolExp>;
  content?: Maybe<StringComparisonExp>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  meta?: Maybe<JsonbComparisonExp>;
  parentId?: Maybe<UuidComparisonExp>;
  post?: Maybe<PostsBoolExp>;
  postId?: Maybe<UuidComparisonExp>;
  status?: Maybe<StringComparisonExp>;
  updatedAt?: Maybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "comments" */
export enum CommentsConstraint {
  /** unique or primary key constraint on columns "id" */
  CommentsPkey = 'comments_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type CommentsDeleteAtPathInput = {
  meta?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type CommentsDeleteElemInput = {
  meta?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type CommentsDeleteKeyInput = {
  meta?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "comments" */
export type CommentsInsertInput = {
  authorId?: Maybe<Scalars['uuid']>;
  comment?: Maybe<CommentsObjRelInsertInput>;
  comments?: Maybe<CommentsArrRelInsertInput>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['jsonb']>;
  parentId?: Maybe<Scalars['uuid']>;
  post?: Maybe<PostsObjRelInsertInput>;
  postId?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type CommentsMaxFields = {
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
export type CommentsMaxOrderBy = {
  authorId?: Maybe<OrderBy>;
  content?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  parentId?: Maybe<OrderBy>;
  postId?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type CommentsMinFields = {
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
export type CommentsMinOrderBy = {
  authorId?: Maybe<OrderBy>;
  content?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  parentId?: Maybe<OrderBy>;
  postId?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** response of any mutation on the table "comments" */
export type CommentsMutationResponse = {
  __typename?: 'comments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Comments>;
};

/** input type for inserting object relation for remote table "comments" */
export type CommentsObjRelInsertInput = {
  data: CommentsInsertInput;
  /** upsert condition */
  on_conflict?: Maybe<CommentsOnConflict>;
};

/** on_conflict condition type for table "comments" */
export type CommentsOnConflict = {
  constraint: CommentsConstraint;
  update_columns?: Array<CommentsUpdateColumn>;
  where?: Maybe<CommentsBoolExp>;
};

/** Ordering options when selecting data from "comments". */
export type CommentsOrderBy = {
  authorId?: Maybe<OrderBy>;
  comment?: Maybe<CommentsOrderBy>;
  comments_aggregate?: Maybe<CommentsAggregateOrderBy>;
  content?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  meta?: Maybe<OrderBy>;
  parentId?: Maybe<OrderBy>;
  post?: Maybe<PostsOrderBy>;
  postId?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** primary key columns input for table: comments */
export type CommentsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type CommentsPrependInput = {
  meta?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "comments" */
export enum CommentsSelectColumn {
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
export type CommentsSetInput = {
  authorId?: Maybe<Scalars['uuid']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['jsonb']>;
  parentId?: Maybe<Scalars['uuid']>;
  postId?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "comments" */
export enum CommentsUpdateColumn {
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


export type JsonbCastExp = {
  String?: Maybe<StringComparisonExp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type JsonbComparisonExp = {
  _cast?: Maybe<JsonbCastExp>;
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "articles" */
  deleteArticle?: Maybe<Articles>;
  /** delete single row from the table: "article_states" */
  deleteArticleState?: Maybe<ArticleStates>;
  /** delete data from the table: "article_states" */
  deleteArticleStates?: Maybe<ArticleStatesMutationResponse>;
  /** delete data from the table: "articles" */
  deleteArticles?: Maybe<ArticlesMutationResponse>;
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider?: Maybe<AuthProviders>;
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests?: Maybe<AuthProviderRequestsMutationResponse>;
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders?: Maybe<AuthProvidersMutationResponse>;
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens?: Maybe<AuthRefreshTokensMutationResponse>;
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole?: Maybe<AuthRoles>;
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles?: Maybe<AuthRolesMutationResponse>;
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider?: Maybe<AuthUserProviders>;
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders?: Maybe<AuthUserProvidersMutationResponse>;
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole?: Maybe<AuthUserRoles>;
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles?: Maybe<AuthUserRolesMutationResponse>;
  /** delete single row from the table: "comments" */
  deleteComment?: Maybe<Comments>;
  /** delete data from the table: "comments" */
  deleteComments?: Maybe<CommentsMutationResponse>;
  /** delete single row from the table: "pages" */
  deletePage?: Maybe<Pages>;
  /** delete single row from the table: "page_states" */
  deletePageState?: Maybe<PageStates>;
  /** delete data from the table: "page_states" */
  deletePageStates?: Maybe<PageStatesMutationResponse>;
  /** delete data from the table: "pages" */
  deletePages?: Maybe<PagesMutationResponse>;
  /** delete single row from the table: "posts" */
  deletePost?: Maybe<Posts>;
  /** delete single row from the table: "post_types" */
  deletePostType?: Maybe<PostTypes>;
  /** delete data from the table: "post_types" */
  deletePostTypes?: Maybe<PostTypesMutationResponse>;
  /** delete data from the table: "posts" */
  deletePosts?: Maybe<PostsMutationResponse>;
  /** delete single row from the table: "term_relationships" */
  deleteRelationship?: Maybe<TermRelationships>;
  /** delete data from the table: "term_relationships" */
  deleteRelationships?: Maybe<TermRelationshipsMutationResponse>;
  /** delete data from the table: "taxonomies" */
  deleteTaxonomies?: Maybe<TaxonomiesMutationResponse>;
  /** delete single row from the table: "taxonomies" */
  deleteTaxonomy?: Maybe<Taxonomies>;
  /** delete single row from the table: "terms" */
  deleteTerm?: Maybe<Terms>;
  /** delete data from the table: "term_taxonomies" */
  deleteTermTaxonomies?: Maybe<TermTaxonomiesMutationResponse>;
  /** delete single row from the table: "term_taxonomies" */
  deleteTermTaxonomy?: Maybe<TermTaxonomies>;
  /** delete data from the table: "terms" */
  deleteTerms?: Maybe<TermsMutationResponse>;
  /** delete single row from the table: "auth.users" */
  deleteUser?: Maybe<Users>;
  /** delete data from the table: "auth.users" */
  deleteUsers?: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "articles" */
  insertArticle?: Maybe<Articles>;
  /** insert a single row into the table: "article_states" */
  insertArticleState?: Maybe<ArticleStates>;
  /** insert data into the table: "article_states" */
  insertArticleStates?: Maybe<ArticleStatesMutationResponse>;
  /** insert data into the table: "articles" */
  insertArticles?: Maybe<ArticlesMutationResponse>;
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider?: Maybe<AuthProviders>;
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests?: Maybe<AuthProviderRequestsMutationResponse>;
  /** insert data into the table: "auth.providers" */
  insertAuthProviders?: Maybe<AuthProvidersMutationResponse>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens?: Maybe<AuthRefreshTokensMutationResponse>;
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole?: Maybe<AuthRoles>;
  /** insert data into the table: "auth.roles" */
  insertAuthRoles?: Maybe<AuthRolesMutationResponse>;
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider?: Maybe<AuthUserProviders>;
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders?: Maybe<AuthUserProvidersMutationResponse>;
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole?: Maybe<AuthUserRoles>;
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles?: Maybe<AuthUserRolesMutationResponse>;
  /** insert a single row into the table: "pages" */
  insertPage?: Maybe<Pages>;
  /** insert a single row into the table: "page_states" */
  insertPageState?: Maybe<PageStates>;
  /** insert data into the table: "page_states" */
  insertPageStates?: Maybe<PageStatesMutationResponse>;
  /** insert data into the table: "pages" */
  insertPages?: Maybe<PagesMutationResponse>;
  /** insert a single row into the table: "posts" */
  insertPost?: Maybe<Posts>;
  /** insert a single row into the table: "post_types" */
  insertPostType?: Maybe<PostTypes>;
  /** insert data into the table: "post_types" */
  insertPostTypes?: Maybe<PostTypesMutationResponse>;
  /** insert data into the table: "posts" */
  insertPosts?: Maybe<PostsMutationResponse>;
  /** insert data into the table: "taxonomies" */
  insertTaxonomies?: Maybe<TaxonomiesMutationResponse>;
  /** insert a single row into the table: "taxonomies" */
  insertTaxonomy?: Maybe<Taxonomies>;
  /** insert a single row into the table: "terms" */
  insertTerm?: Maybe<Terms>;
  /** insert data into the table: "term_taxonomies" */
  insertTermTaxonomies?: Maybe<TermTaxonomiesMutationResponse>;
  /** insert a single row into the table: "term_taxonomies" */
  insertTermTaxonomy?: Maybe<TermTaxonomies>;
  /** insert data into the table: "terms" */
  insertTerms?: Maybe<TermsMutationResponse>;
  /** insert a single row into the table: "auth.users" */
  insertUser?: Maybe<Users>;
  /** insert data into the table: "auth.users" */
  insertUsers?: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "comments" */
  instertComment?: Maybe<Comments>;
  /** insert data into the table: "comments" */
  instertComments?: Maybe<CommentsMutationResponse>;
  /** insert a single row into the table: "term_relationships" */
  instertRelationship?: Maybe<TermRelationships>;
  /** insert data into the table: "term_relationships" */
  instertRelationships?: Maybe<TermRelationshipsMutationResponse>;
  /** update single row of the table: "articles" */
  updateArticle?: Maybe<Articles>;
  /** update single row of the table: "article_states" */
  updateArticleState?: Maybe<ArticleStates>;
  /** update data of the table: "article_states" */
  updateArticleStates?: Maybe<ArticleStatesMutationResponse>;
  /** update data of the table: "articles" */
  updateArticles?: Maybe<ArticlesMutationResponse>;
  /** update single row of the table: "auth.providers" */
  updateAuthProvider?: Maybe<AuthProviders>;
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests?: Maybe<AuthProviderRequestsMutationResponse>;
  /** update data of the table: "auth.providers" */
  updateAuthProviders?: Maybe<AuthProvidersMutationResponse>;
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens?: Maybe<AuthRefreshTokensMutationResponse>;
  /** update single row of the table: "auth.roles" */
  updateAuthRole?: Maybe<AuthRoles>;
  /** update data of the table: "auth.roles" */
  updateAuthRoles?: Maybe<AuthRolesMutationResponse>;
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider?: Maybe<AuthUserProviders>;
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders?: Maybe<AuthUserProvidersMutationResponse>;
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole?: Maybe<AuthUserRoles>;
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles?: Maybe<AuthUserRolesMutationResponse>;
  /** update single row of the table: "comments" */
  updateComment?: Maybe<Comments>;
  /** update data of the table: "comments" */
  updateComments?: Maybe<CommentsMutationResponse>;
  /** update single row of the table: "pages" */
  updatePage?: Maybe<Pages>;
  /** update single row of the table: "page_states" */
  updatePageState?: Maybe<PageStates>;
  /** update data of the table: "page_states" */
  updatePageStates?: Maybe<PageStatesMutationResponse>;
  /** update data of the table: "pages" */
  updatePages?: Maybe<PagesMutationResponse>;
  /** update single row of the table: "posts" */
  updatePost?: Maybe<Posts>;
  /** update data of the table: "posts" */
  updatePosts?: Maybe<PostsMutationResponse>;
  /** update single row of the table: "term_relationships" */
  updateRelationship?: Maybe<TermRelationships>;
  /** update data of the table: "term_relationships" */
  updateRelationships?: Maybe<TermRelationshipsMutationResponse>;
  /** update data of the table: "taxonomies" */
  updateTaxonomies?: Maybe<TaxonomiesMutationResponse>;
  /** update single row of the table: "taxonomies" */
  updateTaxonomy?: Maybe<Taxonomies>;
  /** update single row of the table: "terms" */
  updateTerm?: Maybe<Terms>;
  /** update data of the table: "term_taxonomies" */
  updateTermTaxonomies?: Maybe<TermTaxonomiesMutationResponse>;
  /** update single row of the table: "term_taxonomies" */
  updateTermTaxonomy?: Maybe<TermTaxonomies>;
  /** update data of the table: "terms" */
  updateTerms?: Maybe<TermsMutationResponse>;
  /** update single row of the table: "auth.users" */
  updateUser?: Maybe<Users>;
  /** update data of the table: "auth.users" */
  updateUsers?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "post_types" */
  updatetPostType?: Maybe<PostTypes>;
  /** update data of the table: "post_types" */
  updatetPostTypes?: Maybe<PostTypesMutationResponse>;
};


/** mutation root */
export type MutationRootDeleteArticleArgs = {
  postId: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteArticleStateArgs = {
  articleState: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteArticleStatesArgs = {
  where: ArticleStatesBoolExp;
};


/** mutation root */
export type MutationRootDeleteArticlesArgs = {
  where: ArticlesBoolExp;
};


/** mutation root */
export type MutationRootDeleteAuthProviderArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteAuthProviderRequestsArgs = {
  where: AuthProviderRequestsBoolExp;
};


/** mutation root */
export type MutationRootDeleteAuthProvidersArgs = {
  where: AuthProvidersBoolExp;
};


/** mutation root */
export type MutationRootDeleteAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokensBoolExp;
};


/** mutation root */
export type MutationRootDeleteAuthRoleArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteAuthRolesArgs = {
  where: AuthRolesBoolExp;
};


/** mutation root */
export type MutationRootDeleteAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteAuthUserProvidersArgs = {
  where: AuthUserProvidersBoolExp;
};


/** mutation root */
export type MutationRootDeleteAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteAuthUserRolesArgs = {
  where: AuthUserRolesBoolExp;
};


/** mutation root */
export type MutationRootDeleteCommentArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteCommentsArgs = {
  where: CommentsBoolExp;
};


/** mutation root */
export type MutationRootDeletePageArgs = {
  postId: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeletePageStateArgs = {
  pageState: Scalars['String'];
};


/** mutation root */
export type MutationRootDeletePageStatesArgs = {
  where: PageStatesBoolExp;
};


/** mutation root */
export type MutationRootDeletePagesArgs = {
  where: PagesBoolExp;
};


/** mutation root */
export type MutationRootDeletePostArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeletePostTypeArgs = {
  postType: Scalars['String'];
};


/** mutation root */
export type MutationRootDeletePostTypesArgs = {
  where: PostTypesBoolExp;
};


/** mutation root */
export type MutationRootDeletePostsArgs = {
  where: PostsBoolExp;
};


/** mutation root */
export type MutationRootDeleteRelationshipArgs = {
  postId: Scalars['uuid'];
  termTaxonomyId: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteRelationshipsArgs = {
  where: TermRelationshipsBoolExp;
};


/** mutation root */
export type MutationRootDeleteTaxonomiesArgs = {
  where: TaxonomiesBoolExp;
};


/** mutation root */
export type MutationRootDeleteTaxonomyArgs = {
  taxonomy: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteTermArgs = {
  slug: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteTermTaxonomiesArgs = {
  where: TermTaxonomiesBoolExp;
};


/** mutation root */
export type MutationRootDeleteTermTaxonomyArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteTermsArgs = {
  where: TermsBoolExp;
};


/** mutation root */
export type MutationRootDeleteUserArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteUsersArgs = {
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootInsertArticleArgs = {
  object: ArticlesInsertInput;
  on_conflict?: Maybe<ArticlesOnConflict>;
};


/** mutation root */
export type MutationRootInsertArticleStateArgs = {
  object: ArticleStatesInsertInput;
  on_conflict?: Maybe<ArticleStatesOnConflict>;
};


/** mutation root */
export type MutationRootInsertArticleStatesArgs = {
  objects: Array<ArticleStatesInsertInput>;
  on_conflict?: Maybe<ArticleStatesOnConflict>;
};


/** mutation root */
export type MutationRootInsertArticlesArgs = {
  objects: Array<ArticlesInsertInput>;
  on_conflict?: Maybe<ArticlesOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthProviderArgs = {
  object: AuthProvidersInsertInput;
  on_conflict?: Maybe<AuthProvidersOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthProviderRequestArgs = {
  object: AuthProviderRequestsInsertInput;
  on_conflict?: Maybe<AuthProviderRequestsOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthProviderRequestsArgs = {
  objects: Array<AuthProviderRequestsInsertInput>;
  on_conflict?: Maybe<AuthProviderRequestsOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthProvidersArgs = {
  objects: Array<AuthProvidersInsertInput>;
  on_conflict?: Maybe<AuthProvidersOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthRefreshTokenArgs = {
  object: AuthRefreshTokensInsertInput;
  on_conflict?: Maybe<AuthRefreshTokensOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthRefreshTokensArgs = {
  objects: Array<AuthRefreshTokensInsertInput>;
  on_conflict?: Maybe<AuthRefreshTokensOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthRoleArgs = {
  object: AuthRolesInsertInput;
  on_conflict?: Maybe<AuthRolesOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthRolesArgs = {
  objects: Array<AuthRolesInsertInput>;
  on_conflict?: Maybe<AuthRolesOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthUserProviderArgs = {
  object: AuthUserProvidersInsertInput;
  on_conflict?: Maybe<AuthUserProvidersOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthUserProvidersArgs = {
  objects: Array<AuthUserProvidersInsertInput>;
  on_conflict?: Maybe<AuthUserProvidersOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthUserRoleArgs = {
  object: AuthUserRolesInsertInput;
  on_conflict?: Maybe<AuthUserRolesOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthUserRolesArgs = {
  objects: Array<AuthUserRolesInsertInput>;
  on_conflict?: Maybe<AuthUserRolesOnConflict>;
};


/** mutation root */
export type MutationRootInsertPageArgs = {
  object: PagesInsertInput;
  on_conflict?: Maybe<PagesOnConflict>;
};


/** mutation root */
export type MutationRootInsertPageStateArgs = {
  object: PageStatesInsertInput;
  on_conflict?: Maybe<PageStatesOnConflict>;
};


/** mutation root */
export type MutationRootInsertPageStatesArgs = {
  objects: Array<PageStatesInsertInput>;
  on_conflict?: Maybe<PageStatesOnConflict>;
};


/** mutation root */
export type MutationRootInsertPagesArgs = {
  objects: Array<PagesInsertInput>;
  on_conflict?: Maybe<PagesOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostArgs = {
  object: PostsInsertInput;
  on_conflict?: Maybe<PostsOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostTypeArgs = {
  object: PostTypesInsertInput;
  on_conflict?: Maybe<PostTypesOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostTypesArgs = {
  objects: Array<PostTypesInsertInput>;
  on_conflict?: Maybe<PostTypesOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostsArgs = {
  objects: Array<PostsInsertInput>;
  on_conflict?: Maybe<PostsOnConflict>;
};


/** mutation root */
export type MutationRootInsertTaxonomiesArgs = {
  objects: Array<TaxonomiesInsertInput>;
  on_conflict?: Maybe<TaxonomiesOnConflict>;
};


/** mutation root */
export type MutationRootInsertTaxonomyArgs = {
  object: TaxonomiesInsertInput;
  on_conflict?: Maybe<TaxonomiesOnConflict>;
};


/** mutation root */
export type MutationRootInsertTermArgs = {
  object: TermsInsertInput;
  on_conflict?: Maybe<TermsOnConflict>;
};


/** mutation root */
export type MutationRootInsertTermTaxonomiesArgs = {
  objects: Array<TermTaxonomiesInsertInput>;
  on_conflict?: Maybe<TermTaxonomiesOnConflict>;
};


/** mutation root */
export type MutationRootInsertTermTaxonomyArgs = {
  object: TermTaxonomiesInsertInput;
  on_conflict?: Maybe<TermTaxonomiesOnConflict>;
};


/** mutation root */
export type MutationRootInsertTermsArgs = {
  objects: Array<TermsInsertInput>;
  on_conflict?: Maybe<TermsOnConflict>;
};


/** mutation root */
export type MutationRootInsertUserArgs = {
  object: UsersInsertInput;
  on_conflict?: Maybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  on_conflict?: Maybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootInstertCommentArgs = {
  object: CommentsInsertInput;
  on_conflict?: Maybe<CommentsOnConflict>;
};


/** mutation root */
export type MutationRootInstertCommentsArgs = {
  objects: Array<CommentsInsertInput>;
  on_conflict?: Maybe<CommentsOnConflict>;
};


/** mutation root */
export type MutationRootInstertRelationshipArgs = {
  object: TermRelationshipsInsertInput;
  on_conflict?: Maybe<TermRelationshipsOnConflict>;
};


/** mutation root */
export type MutationRootInstertRelationshipsArgs = {
  objects: Array<TermRelationshipsInsertInput>;
  on_conflict?: Maybe<TermRelationshipsOnConflict>;
};


/** mutation root */
export type MutationRootUpdateArticleArgs = {
  _set?: Maybe<ArticlesSetInput>;
  pk_columns: ArticlesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateArticleStateArgs = {
  _set?: Maybe<ArticleStatesSetInput>;
  pk_columns: ArticleStatesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateArticleStatesArgs = {
  _set?: Maybe<ArticleStatesSetInput>;
  where: ArticleStatesBoolExp;
};


/** mutation root */
export type MutationRootUpdateArticlesArgs = {
  _set?: Maybe<ArticlesSetInput>;
  where: ArticlesBoolExp;
};


/** mutation root */
export type MutationRootUpdateAuthProviderArgs = {
  _set?: Maybe<AuthProvidersSetInput>;
  pk_columns: AuthProvidersPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateAuthProviderRequestArgs = {
  _append?: Maybe<AuthProviderRequestsAppendInput>;
  _delete_at_path?: Maybe<AuthProviderRequestsDeleteAtPathInput>;
  _delete_elem?: Maybe<AuthProviderRequestsDeleteElemInput>;
  _delete_key?: Maybe<AuthProviderRequestsDeleteKeyInput>;
  _prepend?: Maybe<AuthProviderRequestsPrependInput>;
  _set?: Maybe<AuthProviderRequestsSetInput>;
  pk_columns: AuthProviderRequestsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateAuthProviderRequestsArgs = {
  _append?: Maybe<AuthProviderRequestsAppendInput>;
  _delete_at_path?: Maybe<AuthProviderRequestsDeleteAtPathInput>;
  _delete_elem?: Maybe<AuthProviderRequestsDeleteElemInput>;
  _delete_key?: Maybe<AuthProviderRequestsDeleteKeyInput>;
  _prepend?: Maybe<AuthProviderRequestsPrependInput>;
  _set?: Maybe<AuthProviderRequestsSetInput>;
  where: AuthProviderRequestsBoolExp;
};


/** mutation root */
export type MutationRootUpdateAuthProvidersArgs = {
  _set?: Maybe<AuthProvidersSetInput>;
  where: AuthProvidersBoolExp;
};


/** mutation root */
export type MutationRootUpdateAuthRefreshTokenArgs = {
  _set?: Maybe<AuthRefreshTokensSetInput>;
  pk_columns: AuthRefreshTokensPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateAuthRefreshTokensArgs = {
  _set?: Maybe<AuthRefreshTokensSetInput>;
  where: AuthRefreshTokensBoolExp;
};


/** mutation root */
export type MutationRootUpdateAuthRoleArgs = {
  _set?: Maybe<AuthRolesSetInput>;
  pk_columns: AuthRolesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateAuthRolesArgs = {
  _set?: Maybe<AuthRolesSetInput>;
  where: AuthRolesBoolExp;
};


/** mutation root */
export type MutationRootUpdateAuthUserProviderArgs = {
  _set?: Maybe<AuthUserProvidersSetInput>;
  pk_columns: AuthUserProvidersPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateAuthUserProvidersArgs = {
  _set?: Maybe<AuthUserProvidersSetInput>;
  where: AuthUserProvidersBoolExp;
};


/** mutation root */
export type MutationRootUpdateAuthUserRoleArgs = {
  _set?: Maybe<AuthUserRolesSetInput>;
  pk_columns: AuthUserRolesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateAuthUserRolesArgs = {
  _set?: Maybe<AuthUserRolesSetInput>;
  where: AuthUserRolesBoolExp;
};


/** mutation root */
export type MutationRootUpdateCommentArgs = {
  _append?: Maybe<CommentsAppendInput>;
  _delete_at_path?: Maybe<CommentsDeleteAtPathInput>;
  _delete_elem?: Maybe<CommentsDeleteElemInput>;
  _delete_key?: Maybe<CommentsDeleteKeyInput>;
  _prepend?: Maybe<CommentsPrependInput>;
  _set?: Maybe<CommentsSetInput>;
  pk_columns: CommentsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateCommentsArgs = {
  _append?: Maybe<CommentsAppendInput>;
  _delete_at_path?: Maybe<CommentsDeleteAtPathInput>;
  _delete_elem?: Maybe<CommentsDeleteElemInput>;
  _delete_key?: Maybe<CommentsDeleteKeyInput>;
  _prepend?: Maybe<CommentsPrependInput>;
  _set?: Maybe<CommentsSetInput>;
  where: CommentsBoolExp;
};


/** mutation root */
export type MutationRootUpdatePageArgs = {
  _set?: Maybe<PagesSetInput>;
  pk_columns: PagesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdatePageStateArgs = {
  _set?: Maybe<PageStatesSetInput>;
  pk_columns: PageStatesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdatePageStatesArgs = {
  _set?: Maybe<PageStatesSetInput>;
  where: PageStatesBoolExp;
};


/** mutation root */
export type MutationRootUpdatePagesArgs = {
  _set?: Maybe<PagesSetInput>;
  where: PagesBoolExp;
};


/** mutation root */
export type MutationRootUpdatePostArgs = {
  _set?: Maybe<PostsSetInput>;
  pk_columns: PostsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdatePostsArgs = {
  _set?: Maybe<PostsSetInput>;
  where: PostsBoolExp;
};


/** mutation root */
export type MutationRootUpdateRelationshipArgs = {
  _set?: Maybe<TermRelationshipsSetInput>;
  pk_columns: TermRelationshipsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateRelationshipsArgs = {
  _set?: Maybe<TermRelationshipsSetInput>;
  where: TermRelationshipsBoolExp;
};


/** mutation root */
export type MutationRootUpdateTaxonomiesArgs = {
  _set?: Maybe<TaxonomiesSetInput>;
  where: TaxonomiesBoolExp;
};


/** mutation root */
export type MutationRootUpdateTaxonomyArgs = {
  _set?: Maybe<TaxonomiesSetInput>;
  pk_columns: TaxonomiesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateTermArgs = {
  _set?: Maybe<TermsSetInput>;
  pk_columns: TermsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateTermTaxonomiesArgs = {
  _set?: Maybe<TermTaxonomiesSetInput>;
  where: TermTaxonomiesBoolExp;
};


/** mutation root */
export type MutationRootUpdateTermTaxonomyArgs = {
  _set?: Maybe<TermTaxonomiesSetInput>;
  pk_columns: TermTaxonomiesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateTermsArgs = {
  _set?: Maybe<TermsSetInput>;
  where: TermsBoolExp;
};


/** mutation root */
export type MutationRootUpdateUserArgs = {
  _append?: Maybe<UsersAppendInput>;
  _delete_at_path?: Maybe<UsersDeleteAtPathInput>;
  _delete_elem?: Maybe<UsersDeleteElemInput>;
  _delete_key?: Maybe<UsersDeleteKeyInput>;
  _prepend?: Maybe<UsersPrependInput>;
  _set?: Maybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUsersArgs = {
  _append?: Maybe<UsersAppendInput>;
  _delete_at_path?: Maybe<UsersDeleteAtPathInput>;
  _delete_elem?: Maybe<UsersDeleteElemInput>;
  _delete_key?: Maybe<UsersDeleteKeyInput>;
  _prepend?: Maybe<UsersPrependInput>;
  _set?: Maybe<UsersSetInput>;
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootUpdatetPostTypeArgs = {
  _set?: Maybe<PostTypesSetInput>;
  pk_columns: PostTypesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdatetPostTypesArgs = {
  _set?: Maybe<PostTypesSetInput>;
  where: PostTypesBoolExp;
};

/** column ordering options */
export enum OrderBy {
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
  pages_aggregate: PagesAggregate;
};


/** columns and relationships of "page_states" */
export type PageStatesPagesArgs = {
  distinct_on?: Maybe<Array<PagesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PagesOrderBy>>;
  where?: Maybe<PagesBoolExp>;
};


/** columns and relationships of "page_states" */
export type PageStatesPagesAggregateArgs = {
  distinct_on?: Maybe<Array<PagesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PagesOrderBy>>;
  where?: Maybe<PagesBoolExp>;
};

/** aggregated selection of "page_states" */
export type PageStatesAggregate = {
  __typename?: 'pageStates_aggregate';
  aggregate?: Maybe<PageStatesAggregateFields>;
  nodes: Array<PageStates>;
};

/** aggregate fields of "page_states" */
export type PageStatesAggregateFields = {
  __typename?: 'pageStates_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<PageStatesMaxFields>;
  min?: Maybe<PageStatesMinFields>;
};


/** aggregate fields of "page_states" */
export type PageStatesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<PageStatesSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "page_states". All fields are combined with a logical 'AND'. */
export type PageStatesBoolExp = {
  _and?: Maybe<Array<PageStatesBoolExp>>;
  _not?: Maybe<PageStatesBoolExp>;
  _or?: Maybe<Array<PageStatesBoolExp>>;
  pageState?: Maybe<StringComparisonExp>;
  pages?: Maybe<PagesBoolExp>;
};

/** unique or primary key constraints on table "page_states" */
export enum PageStatesConstraint {
  /** unique or primary key constraint on columns "pageState" */
  PageStatesPkey = 'page_states_pkey'
}

export enum PageStatesEnum {
  Draft = 'draft',
  Published = 'published'
}

/** Boolean expression to compare columns of type "pageStates_enum". All fields are combined with logical 'AND'. */
export type PageStatesEnumComparisonExp = {
  _eq?: Maybe<PageStatesEnum>;
  _in?: Maybe<Array<PageStatesEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<PageStatesEnum>;
  _nin?: Maybe<Array<PageStatesEnum>>;
};

/** input type for inserting data into table "page_states" */
export type PageStatesInsertInput = {
  pageState?: Maybe<Scalars['String']>;
  pages?: Maybe<PagesArrRelInsertInput>;
};

/** aggregate max on columns */
export type PageStatesMaxFields = {
  __typename?: 'pageStates_max_fields';
  pageState?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type PageStatesMinFields = {
  __typename?: 'pageStates_min_fields';
  pageState?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "page_states" */
export type PageStatesMutationResponse = {
  __typename?: 'pageStates_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PageStates>;
};

/** input type for inserting object relation for remote table "page_states" */
export type PageStatesObjRelInsertInput = {
  data: PageStatesInsertInput;
  /** upsert condition */
  on_conflict?: Maybe<PageStatesOnConflict>;
};

/** on_conflict condition type for table "page_states" */
export type PageStatesOnConflict = {
  constraint: PageStatesConstraint;
  update_columns?: Array<PageStatesUpdateColumn>;
  where?: Maybe<PageStatesBoolExp>;
};

/** Ordering options when selecting data from "page_states". */
export type PageStatesOrderBy = {
  pageState?: Maybe<OrderBy>;
  pages_aggregate?: Maybe<PagesAggregateOrderBy>;
};

/** primary key columns input for table: pageStates */
export type PageStatesPkColumnsInput = {
  pageState: Scalars['String'];
};

/** select columns of table "page_states" */
export enum PageStatesSelectColumn {
  /** column name */
  PageState = 'pageState'
}

/** input type for updating data in table "page_states" */
export type PageStatesSetInput = {
  pageState?: Maybe<Scalars['String']>;
};

/** update columns of table "page_states" */
export enum PageStatesUpdateColumn {
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
  state: PageStatesEnum;
};

/** aggregated selection of "pages" */
export type PagesAggregate = {
  __typename?: 'pages_aggregate';
  aggregate?: Maybe<PagesAggregateFields>;
  nodes: Array<Pages>;
};

/** aggregate fields of "pages" */
export type PagesAggregateFields = {
  __typename?: 'pages_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<PagesMaxFields>;
  min?: Maybe<PagesMinFields>;
};


/** aggregate fields of "pages" */
export type PagesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<PagesSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "pages" */
export type PagesAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<PagesMaxOrderBy>;
  min?: Maybe<PagesMinOrderBy>;
};

/** input type for inserting array relation for remote table "pages" */
export type PagesArrRelInsertInput = {
  data: Array<PagesInsertInput>;
  /** upsert condition */
  on_conflict?: Maybe<PagesOnConflict>;
};

/** Boolean expression to filter rows from the table "pages". All fields are combined with a logical 'AND'. */
export type PagesBoolExp = {
  _and?: Maybe<Array<PagesBoolExp>>;
  _not?: Maybe<PagesBoolExp>;
  _or?: Maybe<Array<PagesBoolExp>>;
  body?: Maybe<StringComparisonExp>;
  pageState?: Maybe<PageStatesBoolExp>;
  post?: Maybe<PostsBoolExp>;
  postId?: Maybe<UuidComparisonExp>;
  state?: Maybe<PageStatesEnumComparisonExp>;
};

/** unique or primary key constraints on table "pages" */
export enum PagesConstraint {
  /** unique or primary key constraint on columns "post_id" */
  PagesPkey = 'pages_pkey'
}

/** input type for inserting data into table "pages" */
export type PagesInsertInput = {
  body?: Maybe<Scalars['String']>;
  pageState?: Maybe<PageStatesObjRelInsertInput>;
  post?: Maybe<PostsObjRelInsertInput>;
  postId?: Maybe<Scalars['uuid']>;
  state?: Maybe<PageStatesEnum>;
};

/** aggregate max on columns */
export type PagesMaxFields = {
  __typename?: 'pages_max_fields';
  body?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "pages" */
export type PagesMaxOrderBy = {
  body?: Maybe<OrderBy>;
  postId?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type PagesMinFields = {
  __typename?: 'pages_min_fields';
  body?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "pages" */
export type PagesMinOrderBy = {
  body?: Maybe<OrderBy>;
  postId?: Maybe<OrderBy>;
};

/** response of any mutation on the table "pages" */
export type PagesMutationResponse = {
  __typename?: 'pages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Pages>;
};

/** input type for inserting object relation for remote table "pages" */
export type PagesObjRelInsertInput = {
  data: PagesInsertInput;
  /** upsert condition */
  on_conflict?: Maybe<PagesOnConflict>;
};

/** on_conflict condition type for table "pages" */
export type PagesOnConflict = {
  constraint: PagesConstraint;
  update_columns?: Array<PagesUpdateColumn>;
  where?: Maybe<PagesBoolExp>;
};

/** Ordering options when selecting data from "pages". */
export type PagesOrderBy = {
  body?: Maybe<OrderBy>;
  pageState?: Maybe<PageStatesOrderBy>;
  post?: Maybe<PostsOrderBy>;
  postId?: Maybe<OrderBy>;
  state?: Maybe<OrderBy>;
};

/** primary key columns input for table: pages */
export type PagesPkColumnsInput = {
  postId: Scalars['uuid'];
};

/** select columns of table "pages" */
export enum PagesSelectColumn {
  /** column name */
  Body = 'body',
  /** column name */
  PostId = 'postId',
  /** column name */
  State = 'state'
}

/** input type for updating data in table "pages" */
export type PagesSetInput = {
  body?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['uuid']>;
  state?: Maybe<PageStatesEnum>;
};

/** update columns of table "pages" */
export enum PagesUpdateColumn {
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
  posts_aggregate: PostsAggregate;
};


/** columns and relationships of "post_types" */
export type PostTypesPostsArgs = {
  distinct_on?: Maybe<Array<PostsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostsOrderBy>>;
  where?: Maybe<PostsBoolExp>;
};


/** columns and relationships of "post_types" */
export type PostTypesPostsAggregateArgs = {
  distinct_on?: Maybe<Array<PostsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostsOrderBy>>;
  where?: Maybe<PostsBoolExp>;
};

/** aggregated selection of "post_types" */
export type PostTypesAggregate = {
  __typename?: 'postTypes_aggregate';
  aggregate?: Maybe<PostTypesAggregateFields>;
  nodes: Array<PostTypes>;
};

/** aggregate fields of "post_types" */
export type PostTypesAggregateFields = {
  __typename?: 'postTypes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<PostTypesMaxFields>;
  min?: Maybe<PostTypesMinFields>;
};


/** aggregate fields of "post_types" */
export type PostTypesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<PostTypesSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "post_types". All fields are combined with a logical 'AND'. */
export type PostTypesBoolExp = {
  _and?: Maybe<Array<PostTypesBoolExp>>;
  _not?: Maybe<PostTypesBoolExp>;
  _or?: Maybe<Array<PostTypesBoolExp>>;
  postType?: Maybe<StringComparisonExp>;
  posts?: Maybe<PostsBoolExp>;
};

/** unique or primary key constraints on table "post_types" */
export enum PostTypesConstraint {
  /** unique or primary key constraint on columns "post_type" */
  PostTypesPkey = 'post_types_pkey'
}

export enum PostTypesEnum {
  Article = 'article',
  Page = 'page'
}

/** Boolean expression to compare columns of type "postTypes_enum". All fields are combined with logical 'AND'. */
export type PostTypesEnumComparisonExp = {
  _eq?: Maybe<PostTypesEnum>;
  _in?: Maybe<Array<PostTypesEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<PostTypesEnum>;
  _nin?: Maybe<Array<PostTypesEnum>>;
};

/** input type for inserting data into table "post_types" */
export type PostTypesInsertInput = {
  postType?: Maybe<Scalars['String']>;
  posts?: Maybe<PostsArrRelInsertInput>;
};

/** aggregate max on columns */
export type PostTypesMaxFields = {
  __typename?: 'postTypes_max_fields';
  postType?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type PostTypesMinFields = {
  __typename?: 'postTypes_min_fields';
  postType?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "post_types" */
export type PostTypesMutationResponse = {
  __typename?: 'postTypes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PostTypes>;
};

/** input type for inserting object relation for remote table "post_types" */
export type PostTypesObjRelInsertInput = {
  data: PostTypesInsertInput;
  /** upsert condition */
  on_conflict?: Maybe<PostTypesOnConflict>;
};

/** on_conflict condition type for table "post_types" */
export type PostTypesOnConflict = {
  constraint: PostTypesConstraint;
  update_columns?: Array<PostTypesUpdateColumn>;
  where?: Maybe<PostTypesBoolExp>;
};

/** Ordering options when selecting data from "post_types". */
export type PostTypesOrderBy = {
  postType?: Maybe<OrderBy>;
  posts_aggregate?: Maybe<PostsAggregateOrderBy>;
};

/** primary key columns input for table: postTypes */
export type PostTypesPkColumnsInput = {
  postType: Scalars['String'];
};

/** select columns of table "post_types" */
export enum PostTypesSelectColumn {
  /** column name */
  PostType = 'postType'
}

/** input type for updating data in table "post_types" */
export type PostTypesSetInput = {
  postType?: Maybe<Scalars['String']>;
};

/** update columns of table "post_types" */
export enum PostTypesUpdateColumn {
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
  comments_aggregate: CommentsAggregate;
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
  termRelationships_aggregate: TermRelationshipsAggregate;
  title: Scalars['String'];
  type?: Maybe<PostTypesEnum>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "posts" */
export type PostsCommentsArgs = {
  distinct_on?: Maybe<Array<CommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentsOrderBy>>;
  where?: Maybe<CommentsBoolExp>;
};


/** columns and relationships of "posts" */
export type PostsCommentsAggregateArgs = {
  distinct_on?: Maybe<Array<CommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentsOrderBy>>;
  where?: Maybe<CommentsBoolExp>;
};


/** columns and relationships of "posts" */
export type PostsTermRelationshipsArgs = {
  distinct_on?: Maybe<Array<TermRelationshipsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TermRelationshipsOrderBy>>;
  where?: Maybe<TermRelationshipsBoolExp>;
};


/** columns and relationships of "posts" */
export type PostsTermRelationshipsAggregateArgs = {
  distinct_on?: Maybe<Array<TermRelationshipsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TermRelationshipsOrderBy>>;
  where?: Maybe<TermRelationshipsBoolExp>;
};

/** aggregated selection of "posts" */
export type PostsAggregate = {
  __typename?: 'posts_aggregate';
  aggregate?: Maybe<PostsAggregateFields>;
  nodes: Array<Posts>;
};

/** aggregate fields of "posts" */
export type PostsAggregateFields = {
  __typename?: 'posts_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<PostsMaxFields>;
  min?: Maybe<PostsMinFields>;
};


/** aggregate fields of "posts" */
export type PostsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<PostsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "posts" */
export type PostsAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<PostsMaxOrderBy>;
  min?: Maybe<PostsMinOrderBy>;
};

/** input type for inserting array relation for remote table "posts" */
export type PostsArrRelInsertInput = {
  data: Array<PostsInsertInput>;
  /** upsert condition */
  on_conflict?: Maybe<PostsOnConflict>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type PostsBoolExp = {
  _and?: Maybe<Array<PostsBoolExp>>;
  _not?: Maybe<PostsBoolExp>;
  _or?: Maybe<Array<PostsBoolExp>>;
  article?: Maybe<ArticlesBoolExp>;
  comments?: Maybe<CommentsBoolExp>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  page?: Maybe<PagesBoolExp>;
  postType?: Maybe<PostTypesBoolExp>;
  slug?: Maybe<StringComparisonExp>;
  termRelationships?: Maybe<TermRelationshipsBoolExp>;
  title?: Maybe<StringComparisonExp>;
  type?: Maybe<PostTypesEnumComparisonExp>;
  updatedAt?: Maybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "posts" */
export enum PostsConstraint {
  /** unique or primary key constraint on columns "id" */
  PostsPkey = 'posts_pkey',
  /** unique or primary key constraint on columns "slug" */
  PostsSlugKey = 'posts_slug_key'
}

/** input type for inserting data into table "posts" */
export type PostsInsertInput = {
  article?: Maybe<ArticlesObjRelInsertInput>;
  comments?: Maybe<CommentsArrRelInsertInput>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  page?: Maybe<PagesObjRelInsertInput>;
  postType?: Maybe<PostTypesObjRelInsertInput>;
  slug?: Maybe<Scalars['String']>;
  termRelationships?: Maybe<TermRelationshipsArrRelInsertInput>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<PostTypesEnum>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type PostsMaxFields = {
  __typename?: 'posts_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "posts" */
export type PostsMaxOrderBy = {
  createdAt?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  slug?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type PostsMinFields = {
  __typename?: 'posts_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "posts" */
export type PostsMinOrderBy = {
  createdAt?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  slug?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** response of any mutation on the table "posts" */
export type PostsMutationResponse = {
  __typename?: 'posts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Posts>;
};

/** input type for inserting object relation for remote table "posts" */
export type PostsObjRelInsertInput = {
  data: PostsInsertInput;
  /** upsert condition */
  on_conflict?: Maybe<PostsOnConflict>;
};

/** on_conflict condition type for table "posts" */
export type PostsOnConflict = {
  constraint: PostsConstraint;
  update_columns?: Array<PostsUpdateColumn>;
  where?: Maybe<PostsBoolExp>;
};

/** Ordering options when selecting data from "posts". */
export type PostsOrderBy = {
  article?: Maybe<ArticlesOrderBy>;
  comments_aggregate?: Maybe<CommentsAggregateOrderBy>;
  createdAt?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  page?: Maybe<PagesOrderBy>;
  postType?: Maybe<PostTypesOrderBy>;
  slug?: Maybe<OrderBy>;
  termRelationships_aggregate?: Maybe<TermRelationshipsAggregateOrderBy>;
  title?: Maybe<OrderBy>;
  type?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** primary key columns input for table: posts */
export type PostsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "posts" */
export enum PostsSelectColumn {
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
export type PostsSetInput = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<PostTypesEnum>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "posts" */
export enum PostsUpdateColumn {
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

export type QueryRoot = {
  __typename?: 'query_root';
  /** fetch data from the table: "articles" using primary key columns */
  article?: Maybe<Articles>;
  /** fetch data from the table: "article_states" using primary key columns */
  articleState?: Maybe<ArticleStates>;
  /** fetch data from the table: "article_states" */
  articleStates: Array<ArticleStates>;
  /** fetch aggregated fields from the table: "article_states" */
  articleStatesAggregate: ArticleStatesAggregate;
  /** An array relationship */
  articles: Array<Articles>;
  /** fetch aggregated fields from the table: "articles" */
  articlesAggregate: ArticlesAggregate;
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequestsAggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProvidersAggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokensAggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRolesAggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProvidersAggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRolesAggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comment?: Maybe<Comments>;
  /** An array relationship */
  comments: Array<Comments>;
  /** fetch aggregated fields from the table: "comments" */
  commentsAggregate: CommentsAggregate;
  meiliSearchTerms?: Maybe<MeiliSearchOutput>;
  meiliSearchUsers?: Maybe<MeiliSearchOutput>;
  /** fetch data from the table: "pages" using primary key columns */
  page?: Maybe<Pages>;
  /** fetch data from the table: "page_states" using primary key columns */
  pageState?: Maybe<PageStates>;
  /** fetch data from the table: "page_states" */
  pageStates: Array<PageStates>;
  /** fetch aggregated fields from the table: "page_states" */
  pageStatesAggregate: PageStatesAggregate;
  /** An array relationship */
  pages: Array<Pages>;
  /** fetch aggregated fields from the table: "pages" */
  pagesAggregate: PagesAggregate;
  /** fetch data from the table: "posts" using primary key columns */
  post?: Maybe<Posts>;
  /** fetch data from the table: "post_types" using primary key columns */
  postType?: Maybe<PostTypes>;
  /** fetch data from the table: "post_types" */
  postTypes: Array<PostTypes>;
  /** fetch aggregated fields from the table: "post_types" */
  postTypesAggregate: PostTypesAggregate;
  /** An array relationship */
  posts: Array<Posts>;
  /** fetch aggregated fields from the table: "posts" */
  postsAggregate: PostsAggregate;
  /** fetch data from the table: "summary_taxonomies" */
  summaryTaxonomies: Array<SummaryTaxonomies>;
  /** fetch aggregated fields from the table: "summary_taxonomies" */
  summaryTaxonomiesAggregate: SummaryTaxonomiesAggregate;
  /** fetch data from the table: "taxonomies" */
  taxonomies: Array<Taxonomies>;
  /** fetch aggregated fields from the table: "taxonomies" */
  taxonomiesAggregate: TaxonomiesAggregate;
  /** fetch data from the table: "taxonomies" using primary key columns */
  taxonomy?: Maybe<Taxonomies>;
  /** fetch data from the table: "terms" using primary key columns */
  term?: Maybe<Terms>;
  /** fetch data from the table: "term_relationships" using primary key columns */
  termRelationship?: Maybe<TermRelationships>;
  /** An array relationship */
  termRelationships: Array<TermRelationships>;
  /** fetch aggregated fields from the table: "term_relationships" */
  termRelationshipsAggregate: TermRelationshipsAggregate;
  /** fetch data from the table: "term_taxonomies" */
  termTaxonomies: Array<TermTaxonomies>;
  /** fetch aggregated fields from the table: "term_taxonomies" */
  termTaxonomiesAggregate: TermTaxonomiesAggregate;
  /** fetch data from the table: "term_taxonomies" using primary key columns */
  termTaxonomy?: Maybe<TermTaxonomies>;
  /** fetch data from the table: "terms" */
  terms: Array<Terms>;
  /** fetch aggregated fields from the table: "terms" */
  termsAggregate: TermsAggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: UsersAggregate;
};


export type QueryRootArticleArgs = {
  postId: Scalars['uuid'];
};


export type QueryRootArticleStateArgs = {
  articleState: Scalars['String'];
};


export type QueryRootArticleStatesArgs = {
  distinct_on?: Maybe<Array<ArticleStatesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ArticleStatesOrderBy>>;
  where?: Maybe<ArticleStatesBoolExp>;
};


export type QueryRootArticleStatesAggregateArgs = {
  distinct_on?: Maybe<Array<ArticleStatesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ArticleStatesOrderBy>>;
  where?: Maybe<ArticleStatesBoolExp>;
};


export type QueryRootArticlesArgs = {
  distinct_on?: Maybe<Array<ArticlesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ArticlesOrderBy>>;
  where?: Maybe<ArticlesBoolExp>;
};


export type QueryRootArticlesAggregateArgs = {
  distinct_on?: Maybe<Array<ArticlesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ArticlesOrderBy>>;
  where?: Maybe<ArticlesBoolExp>;
};


export type QueryRootAuthProviderArgs = {
  id: Scalars['String'];
};


export type QueryRootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type QueryRootAuthProviderRequestsArgs = {
  distinct_on?: Maybe<Array<AuthProviderRequestsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthProviderRequestsOrderBy>>;
  where?: Maybe<AuthProviderRequestsBoolExp>;
};


export type QueryRootAuthProviderRequestsAggregateArgs = {
  distinct_on?: Maybe<Array<AuthProviderRequestsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthProviderRequestsOrderBy>>;
  where?: Maybe<AuthProviderRequestsBoolExp>;
};


export type QueryRootAuthProvidersArgs = {
  distinct_on?: Maybe<Array<AuthProvidersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthProvidersOrderBy>>;
  where?: Maybe<AuthProvidersBoolExp>;
};


export type QueryRootAuthProvidersAggregateArgs = {
  distinct_on?: Maybe<Array<AuthProvidersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthProvidersOrderBy>>;
  where?: Maybe<AuthProvidersBoolExp>;
};


export type QueryRootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type QueryRootAuthRefreshTokensArgs = {
  distinct_on?: Maybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthRefreshTokensOrderBy>>;
  where?: Maybe<AuthRefreshTokensBoolExp>;
};


export type QueryRootAuthRefreshTokensAggregateArgs = {
  distinct_on?: Maybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthRefreshTokensOrderBy>>;
  where?: Maybe<AuthRefreshTokensBoolExp>;
};


export type QueryRootAuthRoleArgs = {
  role: Scalars['String'];
};


export type QueryRootAuthRolesArgs = {
  distinct_on?: Maybe<Array<AuthRolesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthRolesOrderBy>>;
  where?: Maybe<AuthRolesBoolExp>;
};


export type QueryRootAuthRolesAggregateArgs = {
  distinct_on?: Maybe<Array<AuthRolesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthRolesOrderBy>>;
  where?: Maybe<AuthRolesBoolExp>;
};


export type QueryRootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type QueryRootAuthUserProvidersArgs = {
  distinct_on?: Maybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthUserProvidersOrderBy>>;
  where?: Maybe<AuthUserProvidersBoolExp>;
};


export type QueryRootAuthUserProvidersAggregateArgs = {
  distinct_on?: Maybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthUserProvidersOrderBy>>;
  where?: Maybe<AuthUserProvidersBoolExp>;
};


export type QueryRootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type QueryRootAuthUserRolesArgs = {
  distinct_on?: Maybe<Array<AuthUserRolesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthUserRolesOrderBy>>;
  where?: Maybe<AuthUserRolesBoolExp>;
};


export type QueryRootAuthUserRolesAggregateArgs = {
  distinct_on?: Maybe<Array<AuthUserRolesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthUserRolesOrderBy>>;
  where?: Maybe<AuthUserRolesBoolExp>;
};


export type QueryRootCommentArgs = {
  id: Scalars['uuid'];
};


export type QueryRootCommentsArgs = {
  distinct_on?: Maybe<Array<CommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentsOrderBy>>;
  where?: Maybe<CommentsBoolExp>;
};


export type QueryRootCommentsAggregateArgs = {
  distinct_on?: Maybe<Array<CommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentsOrderBy>>;
  where?: Maybe<CommentsBoolExp>;
};


export type QueryRootMeiliSearchTermsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  query: Scalars['String'];
};


export type QueryRootMeiliSearchUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  query: Scalars['String'];
};


export type QueryRootPageArgs = {
  postId: Scalars['uuid'];
};


export type QueryRootPageStateArgs = {
  pageState: Scalars['String'];
};


export type QueryRootPageStatesArgs = {
  distinct_on?: Maybe<Array<PageStatesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PageStatesOrderBy>>;
  where?: Maybe<PageStatesBoolExp>;
};


export type QueryRootPageStatesAggregateArgs = {
  distinct_on?: Maybe<Array<PageStatesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PageStatesOrderBy>>;
  where?: Maybe<PageStatesBoolExp>;
};


export type QueryRootPagesArgs = {
  distinct_on?: Maybe<Array<PagesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PagesOrderBy>>;
  where?: Maybe<PagesBoolExp>;
};


export type QueryRootPagesAggregateArgs = {
  distinct_on?: Maybe<Array<PagesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PagesOrderBy>>;
  where?: Maybe<PagesBoolExp>;
};


export type QueryRootPostArgs = {
  id: Scalars['uuid'];
};


export type QueryRootPostTypeArgs = {
  postType: Scalars['String'];
};


export type QueryRootPostTypesArgs = {
  distinct_on?: Maybe<Array<PostTypesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostTypesOrderBy>>;
  where?: Maybe<PostTypesBoolExp>;
};


export type QueryRootPostTypesAggregateArgs = {
  distinct_on?: Maybe<Array<PostTypesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostTypesOrderBy>>;
  where?: Maybe<PostTypesBoolExp>;
};


export type QueryRootPostsArgs = {
  distinct_on?: Maybe<Array<PostsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostsOrderBy>>;
  where?: Maybe<PostsBoolExp>;
};


export type QueryRootPostsAggregateArgs = {
  distinct_on?: Maybe<Array<PostsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostsOrderBy>>;
  where?: Maybe<PostsBoolExp>;
};


export type QueryRootSummaryTaxonomiesArgs = {
  distinct_on?: Maybe<Array<SummaryTaxonomiesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SummaryTaxonomiesOrderBy>>;
  where?: Maybe<SummaryTaxonomiesBoolExp>;
};


export type QueryRootSummaryTaxonomiesAggregateArgs = {
  distinct_on?: Maybe<Array<SummaryTaxonomiesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SummaryTaxonomiesOrderBy>>;
  where?: Maybe<SummaryTaxonomiesBoolExp>;
};


export type QueryRootTaxonomiesArgs = {
  distinct_on?: Maybe<Array<TaxonomiesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TaxonomiesOrderBy>>;
  where?: Maybe<TaxonomiesBoolExp>;
};


export type QueryRootTaxonomiesAggregateArgs = {
  distinct_on?: Maybe<Array<TaxonomiesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TaxonomiesOrderBy>>;
  where?: Maybe<TaxonomiesBoolExp>;
};


export type QueryRootTaxonomyArgs = {
  taxonomy: Scalars['String'];
};


export type QueryRootTermArgs = {
  slug: Scalars['String'];
};


export type QueryRootTermRelationshipArgs = {
  postId: Scalars['uuid'];
  termTaxonomyId: Scalars['uuid'];
};


export type QueryRootTermRelationshipsArgs = {
  distinct_on?: Maybe<Array<TermRelationshipsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TermRelationshipsOrderBy>>;
  where?: Maybe<TermRelationshipsBoolExp>;
};


export type QueryRootTermRelationshipsAggregateArgs = {
  distinct_on?: Maybe<Array<TermRelationshipsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TermRelationshipsOrderBy>>;
  where?: Maybe<TermRelationshipsBoolExp>;
};


export type QueryRootTermTaxonomiesArgs = {
  distinct_on?: Maybe<Array<TermTaxonomiesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TermTaxonomiesOrderBy>>;
  where?: Maybe<TermTaxonomiesBoolExp>;
};


export type QueryRootTermTaxonomiesAggregateArgs = {
  distinct_on?: Maybe<Array<TermTaxonomiesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TermTaxonomiesOrderBy>>;
  where?: Maybe<TermTaxonomiesBoolExp>;
};


export type QueryRootTermTaxonomyArgs = {
  id: Scalars['uuid'];
};


export type QueryRootTermsArgs = {
  distinct_on?: Maybe<Array<TermsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TermsOrderBy>>;
  where?: Maybe<TermsBoolExp>;
};


export type QueryRootTermsAggregateArgs = {
  distinct_on?: Maybe<Array<TermsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TermsOrderBy>>;
  where?: Maybe<TermsBoolExp>;
};


export type QueryRootUserArgs = {
  id: Scalars['uuid'];
};


export type QueryRootUsersArgs = {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
};


export type QueryRootUsersAggregateArgs = {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
};

export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "articles" using primary key columns */
  article?: Maybe<Articles>;
  /** fetch data from the table: "article_states" using primary key columns */
  articleState?: Maybe<ArticleStates>;
  /** fetch data from the table: "article_states" */
  articleStates: Array<ArticleStates>;
  /** fetch aggregated fields from the table: "article_states" */
  articleStatesAggregate: ArticleStatesAggregate;
  /** An array relationship */
  articles: Array<Articles>;
  /** fetch aggregated fields from the table: "articles" */
  articlesAggregate: ArticlesAggregate;
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequestsAggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProvidersAggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokensAggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRolesAggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProvidersAggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRolesAggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comment?: Maybe<Comments>;
  /** An array relationship */
  comments: Array<Comments>;
  /** fetch aggregated fields from the table: "comments" */
  commentsAggregate: CommentsAggregate;
  /** fetch data from the table: "pages" using primary key columns */
  page?: Maybe<Pages>;
  /** fetch data from the table: "page_states" using primary key columns */
  pageState?: Maybe<PageStates>;
  /** fetch data from the table: "page_states" */
  pageStates: Array<PageStates>;
  /** fetch aggregated fields from the table: "page_states" */
  pageStatesAggregate: PageStatesAggregate;
  /** An array relationship */
  pages: Array<Pages>;
  /** fetch aggregated fields from the table: "pages" */
  pagesAggregate: PagesAggregate;
  /** fetch data from the table: "posts" using primary key columns */
  post?: Maybe<Posts>;
  /** fetch data from the table: "post_types" using primary key columns */
  postType?: Maybe<PostTypes>;
  /** fetch data from the table: "post_types" */
  postTypes: Array<PostTypes>;
  /** fetch aggregated fields from the table: "post_types" */
  postTypesAggregate: PostTypesAggregate;
  /** An array relationship */
  posts: Array<Posts>;
  /** fetch aggregated fields from the table: "posts" */
  postsAggregate: PostsAggregate;
  /** fetch data from the table: "summary_taxonomies" */
  summaryTaxonomies: Array<SummaryTaxonomies>;
  /** fetch aggregated fields from the table: "summary_taxonomies" */
  summaryTaxonomiesAggregate: SummaryTaxonomiesAggregate;
  /** fetch data from the table: "taxonomies" */
  taxonomies: Array<Taxonomies>;
  /** fetch aggregated fields from the table: "taxonomies" */
  taxonomiesAggregate: TaxonomiesAggregate;
  /** fetch data from the table: "taxonomies" using primary key columns */
  taxonomy?: Maybe<Taxonomies>;
  /** fetch data from the table: "terms" using primary key columns */
  term?: Maybe<Terms>;
  /** fetch data from the table: "term_relationships" using primary key columns */
  termRelationship?: Maybe<TermRelationships>;
  /** An array relationship */
  termRelationships: Array<TermRelationships>;
  /** fetch aggregated fields from the table: "term_relationships" */
  termRelationshipsAggregate: TermRelationshipsAggregate;
  /** fetch data from the table: "term_taxonomies" */
  termTaxonomies: Array<TermTaxonomies>;
  /** fetch aggregated fields from the table: "term_taxonomies" */
  termTaxonomiesAggregate: TermTaxonomiesAggregate;
  /** fetch data from the table: "term_taxonomies" using primary key columns */
  termTaxonomy?: Maybe<TermTaxonomies>;
  /** fetch data from the table: "terms" */
  terms: Array<Terms>;
  /** fetch aggregated fields from the table: "terms" */
  termsAggregate: TermsAggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: UsersAggregate;
};


export type SubscriptionRootArticleArgs = {
  postId: Scalars['uuid'];
};


export type SubscriptionRootArticleStateArgs = {
  articleState: Scalars['String'];
};


export type SubscriptionRootArticleStatesArgs = {
  distinct_on?: Maybe<Array<ArticleStatesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ArticleStatesOrderBy>>;
  where?: Maybe<ArticleStatesBoolExp>;
};


export type SubscriptionRootArticleStatesAggregateArgs = {
  distinct_on?: Maybe<Array<ArticleStatesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ArticleStatesOrderBy>>;
  where?: Maybe<ArticleStatesBoolExp>;
};


export type SubscriptionRootArticlesArgs = {
  distinct_on?: Maybe<Array<ArticlesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ArticlesOrderBy>>;
  where?: Maybe<ArticlesBoolExp>;
};


export type SubscriptionRootArticlesAggregateArgs = {
  distinct_on?: Maybe<Array<ArticlesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ArticlesOrderBy>>;
  where?: Maybe<ArticlesBoolExp>;
};


export type SubscriptionRootAuthProviderArgs = {
  id: Scalars['String'];
};


export type SubscriptionRootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootAuthProviderRequestsArgs = {
  distinct_on?: Maybe<Array<AuthProviderRequestsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthProviderRequestsOrderBy>>;
  where?: Maybe<AuthProviderRequestsBoolExp>;
};


export type SubscriptionRootAuthProviderRequestsAggregateArgs = {
  distinct_on?: Maybe<Array<AuthProviderRequestsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthProviderRequestsOrderBy>>;
  where?: Maybe<AuthProviderRequestsBoolExp>;
};


export type SubscriptionRootAuthProvidersArgs = {
  distinct_on?: Maybe<Array<AuthProvidersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthProvidersOrderBy>>;
  where?: Maybe<AuthProvidersBoolExp>;
};


export type SubscriptionRootAuthProvidersAggregateArgs = {
  distinct_on?: Maybe<Array<AuthProvidersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthProvidersOrderBy>>;
  where?: Maybe<AuthProvidersBoolExp>;
};


export type SubscriptionRootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type SubscriptionRootAuthRefreshTokensArgs = {
  distinct_on?: Maybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthRefreshTokensOrderBy>>;
  where?: Maybe<AuthRefreshTokensBoolExp>;
};


export type SubscriptionRootAuthRefreshTokensAggregateArgs = {
  distinct_on?: Maybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthRefreshTokensOrderBy>>;
  where?: Maybe<AuthRefreshTokensBoolExp>;
};


export type SubscriptionRootAuthRoleArgs = {
  role: Scalars['String'];
};


export type SubscriptionRootAuthRolesArgs = {
  distinct_on?: Maybe<Array<AuthRolesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthRolesOrderBy>>;
  where?: Maybe<AuthRolesBoolExp>;
};


export type SubscriptionRootAuthRolesAggregateArgs = {
  distinct_on?: Maybe<Array<AuthRolesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthRolesOrderBy>>;
  where?: Maybe<AuthRolesBoolExp>;
};


export type SubscriptionRootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootAuthUserProvidersArgs = {
  distinct_on?: Maybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthUserProvidersOrderBy>>;
  where?: Maybe<AuthUserProvidersBoolExp>;
};


export type SubscriptionRootAuthUserProvidersAggregateArgs = {
  distinct_on?: Maybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthUserProvidersOrderBy>>;
  where?: Maybe<AuthUserProvidersBoolExp>;
};


export type SubscriptionRootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootAuthUserRolesArgs = {
  distinct_on?: Maybe<Array<AuthUserRolesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthUserRolesOrderBy>>;
  where?: Maybe<AuthUserRolesBoolExp>;
};


export type SubscriptionRootAuthUserRolesAggregateArgs = {
  distinct_on?: Maybe<Array<AuthUserRolesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthUserRolesOrderBy>>;
  where?: Maybe<AuthUserRolesBoolExp>;
};


export type SubscriptionRootCommentArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootCommentsArgs = {
  distinct_on?: Maybe<Array<CommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentsOrderBy>>;
  where?: Maybe<CommentsBoolExp>;
};


export type SubscriptionRootCommentsAggregateArgs = {
  distinct_on?: Maybe<Array<CommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CommentsOrderBy>>;
  where?: Maybe<CommentsBoolExp>;
};


export type SubscriptionRootPageArgs = {
  postId: Scalars['uuid'];
};


export type SubscriptionRootPageStateArgs = {
  pageState: Scalars['String'];
};


export type SubscriptionRootPageStatesArgs = {
  distinct_on?: Maybe<Array<PageStatesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PageStatesOrderBy>>;
  where?: Maybe<PageStatesBoolExp>;
};


export type SubscriptionRootPageStatesAggregateArgs = {
  distinct_on?: Maybe<Array<PageStatesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PageStatesOrderBy>>;
  where?: Maybe<PageStatesBoolExp>;
};


export type SubscriptionRootPagesArgs = {
  distinct_on?: Maybe<Array<PagesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PagesOrderBy>>;
  where?: Maybe<PagesBoolExp>;
};


export type SubscriptionRootPagesAggregateArgs = {
  distinct_on?: Maybe<Array<PagesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PagesOrderBy>>;
  where?: Maybe<PagesBoolExp>;
};


export type SubscriptionRootPostArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootPostTypeArgs = {
  postType: Scalars['String'];
};


export type SubscriptionRootPostTypesArgs = {
  distinct_on?: Maybe<Array<PostTypesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostTypesOrderBy>>;
  where?: Maybe<PostTypesBoolExp>;
};


export type SubscriptionRootPostTypesAggregateArgs = {
  distinct_on?: Maybe<Array<PostTypesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostTypesOrderBy>>;
  where?: Maybe<PostTypesBoolExp>;
};


export type SubscriptionRootPostsArgs = {
  distinct_on?: Maybe<Array<PostsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostsOrderBy>>;
  where?: Maybe<PostsBoolExp>;
};


export type SubscriptionRootPostsAggregateArgs = {
  distinct_on?: Maybe<Array<PostsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostsOrderBy>>;
  where?: Maybe<PostsBoolExp>;
};


export type SubscriptionRootSummaryTaxonomiesArgs = {
  distinct_on?: Maybe<Array<SummaryTaxonomiesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SummaryTaxonomiesOrderBy>>;
  where?: Maybe<SummaryTaxonomiesBoolExp>;
};


export type SubscriptionRootSummaryTaxonomiesAggregateArgs = {
  distinct_on?: Maybe<Array<SummaryTaxonomiesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<SummaryTaxonomiesOrderBy>>;
  where?: Maybe<SummaryTaxonomiesBoolExp>;
};


export type SubscriptionRootTaxonomiesArgs = {
  distinct_on?: Maybe<Array<TaxonomiesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TaxonomiesOrderBy>>;
  where?: Maybe<TaxonomiesBoolExp>;
};


export type SubscriptionRootTaxonomiesAggregateArgs = {
  distinct_on?: Maybe<Array<TaxonomiesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TaxonomiesOrderBy>>;
  where?: Maybe<TaxonomiesBoolExp>;
};


export type SubscriptionRootTaxonomyArgs = {
  taxonomy: Scalars['String'];
};


export type SubscriptionRootTermArgs = {
  slug: Scalars['String'];
};


export type SubscriptionRootTermRelationshipArgs = {
  postId: Scalars['uuid'];
  termTaxonomyId: Scalars['uuid'];
};


export type SubscriptionRootTermRelationshipsArgs = {
  distinct_on?: Maybe<Array<TermRelationshipsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TermRelationshipsOrderBy>>;
  where?: Maybe<TermRelationshipsBoolExp>;
};


export type SubscriptionRootTermRelationshipsAggregateArgs = {
  distinct_on?: Maybe<Array<TermRelationshipsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TermRelationshipsOrderBy>>;
  where?: Maybe<TermRelationshipsBoolExp>;
};


export type SubscriptionRootTermTaxonomiesArgs = {
  distinct_on?: Maybe<Array<TermTaxonomiesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TermTaxonomiesOrderBy>>;
  where?: Maybe<TermTaxonomiesBoolExp>;
};


export type SubscriptionRootTermTaxonomiesAggregateArgs = {
  distinct_on?: Maybe<Array<TermTaxonomiesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TermTaxonomiesOrderBy>>;
  where?: Maybe<TermTaxonomiesBoolExp>;
};


export type SubscriptionRootTermTaxonomyArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootTermsArgs = {
  distinct_on?: Maybe<Array<TermsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TermsOrderBy>>;
  where?: Maybe<TermsBoolExp>;
};


export type SubscriptionRootTermsAggregateArgs = {
  distinct_on?: Maybe<Array<TermsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TermsOrderBy>>;
  where?: Maybe<TermsBoolExp>;
};


export type SubscriptionRootUserArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootUsersArgs = {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
};


export type SubscriptionRootUsersAggregateArgs = {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
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
export type SummaryTaxonomiesAggregate = {
  __typename?: 'summaryTaxonomies_aggregate';
  aggregate?: Maybe<SummaryTaxonomiesAggregateFields>;
  nodes: Array<SummaryTaxonomies>;
};

/** aggregate fields of "summary_taxonomies" */
export type SummaryTaxonomiesAggregateFields = {
  __typename?: 'summaryTaxonomies_aggregate_fields';
  avg?: Maybe<SummaryTaxonomiesAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<SummaryTaxonomiesMaxFields>;
  min?: Maybe<SummaryTaxonomiesMinFields>;
  stddev?: Maybe<SummaryTaxonomiesStddevFields>;
  stddev_pop?: Maybe<SummaryTaxonomiesStddevPopFields>;
  stddev_samp?: Maybe<SummaryTaxonomiesStddevSampFields>;
  sum?: Maybe<SummaryTaxonomiesSumFields>;
  var_pop?: Maybe<SummaryTaxonomiesVarPopFields>;
  var_samp?: Maybe<SummaryTaxonomiesVarSampFields>;
  variance?: Maybe<SummaryTaxonomiesVarianceFields>;
};


/** aggregate fields of "summary_taxonomies" */
export type SummaryTaxonomiesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<SummaryTaxonomiesSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type SummaryTaxonomiesAvgFields = {
  __typename?: 'summaryTaxonomies_avg_fields';
  count?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "summary_taxonomies". All fields are combined with a logical 'AND'. */
export type SummaryTaxonomiesBoolExp = {
  _and?: Maybe<Array<SummaryTaxonomiesBoolExp>>;
  _not?: Maybe<SummaryTaxonomiesBoolExp>;
  _or?: Maybe<Array<SummaryTaxonomiesBoolExp>>;
  count?: Maybe<BigintComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  slug?: Maybe<StringComparisonExp>;
  taxonomy?: Maybe<StringComparisonExp>;
};

/** aggregate max on columns */
export type SummaryTaxonomiesMaxFields = {
  __typename?: 'summaryTaxonomies_max_fields';
  count?: Maybe<Scalars['bigint']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type SummaryTaxonomiesMinFields = {
  __typename?: 'summaryTaxonomies_min_fields';
  count?: Maybe<Scalars['bigint']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "summary_taxonomies". */
export type SummaryTaxonomiesOrderBy = {
  count?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  slug?: Maybe<OrderBy>;
  taxonomy?: Maybe<OrderBy>;
};

/** select columns of table "summary_taxonomies" */
export enum SummaryTaxonomiesSelectColumn {
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
export type SummaryTaxonomiesStddevFields = {
  __typename?: 'summaryTaxonomies_stddev_fields';
  count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type SummaryTaxonomiesStddevPopFields = {
  __typename?: 'summaryTaxonomies_stddev_pop_fields';
  count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type SummaryTaxonomiesStddevSampFields = {
  __typename?: 'summaryTaxonomies_stddev_samp_fields';
  count?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type SummaryTaxonomiesSumFields = {
  __typename?: 'summaryTaxonomies_sum_fields';
  count?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type SummaryTaxonomiesVarPopFields = {
  __typename?: 'summaryTaxonomies_var_pop_fields';
  count?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type SummaryTaxonomiesVarSampFields = {
  __typename?: 'summaryTaxonomies_var_samp_fields';
  count?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type SummaryTaxonomiesVarianceFields = {
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
  term_taxonomies_aggregate: TermTaxonomiesAggregate;
};


/** columns and relationships of "taxonomies" */
export type TaxonomiesTermTaxonomiesArgs = {
  distinct_on?: Maybe<Array<TermTaxonomiesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TermTaxonomiesOrderBy>>;
  where?: Maybe<TermTaxonomiesBoolExp>;
};


/** columns and relationships of "taxonomies" */
export type TaxonomiesTermTaxonomiesAggregateArgs = {
  distinct_on?: Maybe<Array<TermTaxonomiesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TermTaxonomiesOrderBy>>;
  where?: Maybe<TermTaxonomiesBoolExp>;
};

/** aggregated selection of "taxonomies" */
export type TaxonomiesAggregate = {
  __typename?: 'taxonomies_aggregate';
  aggregate?: Maybe<TaxonomiesAggregateFields>;
  nodes: Array<Taxonomies>;
};

/** aggregate fields of "taxonomies" */
export type TaxonomiesAggregateFields = {
  __typename?: 'taxonomies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TaxonomiesMaxFields>;
  min?: Maybe<TaxonomiesMinFields>;
};


/** aggregate fields of "taxonomies" */
export type TaxonomiesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<TaxonomiesSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "taxonomies". All fields are combined with a logical 'AND'. */
export type TaxonomiesBoolExp = {
  _and?: Maybe<Array<TaxonomiesBoolExp>>;
  _not?: Maybe<TaxonomiesBoolExp>;
  _or?: Maybe<Array<TaxonomiesBoolExp>>;
  taxonomy?: Maybe<StringComparisonExp>;
  term_taxonomies?: Maybe<TermTaxonomiesBoolExp>;
};

/** unique or primary key constraints on table "taxonomies" */
export enum TaxonomiesConstraint {
  /** unique or primary key constraint on columns "taxonomy" */
  TaxonomiesPkey = 'taxonomies_pkey',
  /** unique or primary key constraint on columns "taxonomy" */
  TaxonomiesTaxonomyKey = 'taxonomies_taxonomy_key'
}

export enum TaxonomiesEnum {
  Categories = 'categories',
  Tags = 'tags'
}

/** Boolean expression to compare columns of type "taxonomies_enum". All fields are combined with logical 'AND'. */
export type TaxonomiesEnumComparisonExp = {
  _eq?: Maybe<TaxonomiesEnum>;
  _in?: Maybe<Array<TaxonomiesEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<TaxonomiesEnum>;
  _nin?: Maybe<Array<TaxonomiesEnum>>;
};

/** input type for inserting data into table "taxonomies" */
export type TaxonomiesInsertInput = {
  taxonomy?: Maybe<Scalars['String']>;
  term_taxonomies?: Maybe<TermTaxonomiesArrRelInsertInput>;
};

/** aggregate max on columns */
export type TaxonomiesMaxFields = {
  __typename?: 'taxonomies_max_fields';
  taxonomy?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type TaxonomiesMinFields = {
  __typename?: 'taxonomies_min_fields';
  taxonomy?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "taxonomies" */
export type TaxonomiesMutationResponse = {
  __typename?: 'taxonomies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Taxonomies>;
};

/** input type for inserting object relation for remote table "taxonomies" */
export type TaxonomiesObjRelInsertInput = {
  data: TaxonomiesInsertInput;
  /** upsert condition */
  on_conflict?: Maybe<TaxonomiesOnConflict>;
};

/** on_conflict condition type for table "taxonomies" */
export type TaxonomiesOnConflict = {
  constraint: TaxonomiesConstraint;
  update_columns?: Array<TaxonomiesUpdateColumn>;
  where?: Maybe<TaxonomiesBoolExp>;
};

/** Ordering options when selecting data from "taxonomies". */
export type TaxonomiesOrderBy = {
  taxonomy?: Maybe<OrderBy>;
  term_taxonomies_aggregate?: Maybe<TermTaxonomiesAggregateOrderBy>;
};

/** primary key columns input for table: taxonomies */
export type TaxonomiesPkColumnsInput = {
  taxonomy: Scalars['String'];
};

/** select columns of table "taxonomies" */
export enum TaxonomiesSelectColumn {
  /** column name */
  Taxonomy = 'taxonomy'
}

/** input type for updating data in table "taxonomies" */
export type TaxonomiesSetInput = {
  taxonomy?: Maybe<Scalars['String']>;
};

/** update columns of table "taxonomies" */
export enum TaxonomiesUpdateColumn {
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
export type TermRelationshipsAggregate = {
  __typename?: 'termRelationships_aggregate';
  aggregate?: Maybe<TermRelationshipsAggregateFields>;
  nodes: Array<TermRelationships>;
};

/** aggregate fields of "term_relationships" */
export type TermRelationshipsAggregateFields = {
  __typename?: 'termRelationships_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TermRelationshipsMaxFields>;
  min?: Maybe<TermRelationshipsMinFields>;
};


/** aggregate fields of "term_relationships" */
export type TermRelationshipsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<TermRelationshipsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "term_relationships" */
export type TermRelationshipsAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<TermRelationshipsMaxOrderBy>;
  min?: Maybe<TermRelationshipsMinOrderBy>;
};

/** input type for inserting array relation for remote table "term_relationships" */
export type TermRelationshipsArrRelInsertInput = {
  data: Array<TermRelationshipsInsertInput>;
  /** upsert condition */
  on_conflict?: Maybe<TermRelationshipsOnConflict>;
};

/** Boolean expression to filter rows from the table "term_relationships". All fields are combined with a logical 'AND'. */
export type TermRelationshipsBoolExp = {
  _and?: Maybe<Array<TermRelationshipsBoolExp>>;
  _not?: Maybe<TermRelationshipsBoolExp>;
  _or?: Maybe<Array<TermRelationshipsBoolExp>>;
  post?: Maybe<PostsBoolExp>;
  postId?: Maybe<UuidComparisonExp>;
  termTaxonomy?: Maybe<TermTaxonomiesBoolExp>;
  termTaxonomyId?: Maybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "term_relationships" */
export enum TermRelationshipsConstraint {
  /** unique or primary key constraint on columns "post_id", "term_taxonomy_id" */
  PostTermsPkey = 'post_terms_pkey'
}

/** input type for inserting data into table "term_relationships" */
export type TermRelationshipsInsertInput = {
  post?: Maybe<PostsObjRelInsertInput>;
  postId?: Maybe<Scalars['uuid']>;
  termTaxonomy?: Maybe<TermTaxonomiesObjRelInsertInput>;
  termTaxonomyId?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type TermRelationshipsMaxFields = {
  __typename?: 'termRelationships_max_fields';
  postId?: Maybe<Scalars['uuid']>;
  termTaxonomyId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "term_relationships" */
export type TermRelationshipsMaxOrderBy = {
  postId?: Maybe<OrderBy>;
  termTaxonomyId?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type TermRelationshipsMinFields = {
  __typename?: 'termRelationships_min_fields';
  postId?: Maybe<Scalars['uuid']>;
  termTaxonomyId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "term_relationships" */
export type TermRelationshipsMinOrderBy = {
  postId?: Maybe<OrderBy>;
  termTaxonomyId?: Maybe<OrderBy>;
};

/** response of any mutation on the table "term_relationships" */
export type TermRelationshipsMutationResponse = {
  __typename?: 'termRelationships_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TermRelationships>;
};

/** on_conflict condition type for table "term_relationships" */
export type TermRelationshipsOnConflict = {
  constraint: TermRelationshipsConstraint;
  update_columns?: Array<TermRelationshipsUpdateColumn>;
  where?: Maybe<TermRelationshipsBoolExp>;
};

/** Ordering options when selecting data from "term_relationships". */
export type TermRelationshipsOrderBy = {
  post?: Maybe<PostsOrderBy>;
  postId?: Maybe<OrderBy>;
  termTaxonomy?: Maybe<TermTaxonomiesOrderBy>;
  termTaxonomyId?: Maybe<OrderBy>;
};

/** primary key columns input for table: termRelationships */
export type TermRelationshipsPkColumnsInput = {
  postId: Scalars['uuid'];
  termTaxonomyId: Scalars['uuid'];
};

/** select columns of table "term_relationships" */
export enum TermRelationshipsSelectColumn {
  /** column name */
  PostId = 'postId',
  /** column name */
  TermTaxonomyId = 'termTaxonomyId'
}

/** input type for updating data in table "term_relationships" */
export type TermRelationshipsSetInput = {
  postId?: Maybe<Scalars['uuid']>;
  termTaxonomyId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "term_relationships" */
export enum TermRelationshipsUpdateColumn {
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
  taxonomy: TaxonomiesEnum;
  /** An object relationship */
  taxonomyByTaxonomy: Taxonomies;
  /** An object relationship */
  term: Terms;
  termId: Scalars['uuid'];
  /** An array relationship */
  term_relationships: Array<TermRelationships>;
  /** An aggregate relationship */
  term_relationships_aggregate: TermRelationshipsAggregate;
};


/** columns and relationships of "term_taxonomies" */
export type TermTaxonomiesTermRelationshipsArgs = {
  distinct_on?: Maybe<Array<TermRelationshipsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TermRelationshipsOrderBy>>;
  where?: Maybe<TermRelationshipsBoolExp>;
};


/** columns and relationships of "term_taxonomies" */
export type TermTaxonomiesTermRelationshipsAggregateArgs = {
  distinct_on?: Maybe<Array<TermRelationshipsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TermRelationshipsOrderBy>>;
  where?: Maybe<TermRelationshipsBoolExp>;
};

/** aggregated selection of "term_taxonomies" */
export type TermTaxonomiesAggregate = {
  __typename?: 'termTaxonomies_aggregate';
  aggregate?: Maybe<TermTaxonomiesAggregateFields>;
  nodes: Array<TermTaxonomies>;
};

/** aggregate fields of "term_taxonomies" */
export type TermTaxonomiesAggregateFields = {
  __typename?: 'termTaxonomies_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TermTaxonomiesMaxFields>;
  min?: Maybe<TermTaxonomiesMinFields>;
};


/** aggregate fields of "term_taxonomies" */
export type TermTaxonomiesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<TermTaxonomiesSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "term_taxonomies" */
export type TermTaxonomiesAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<TermTaxonomiesMaxOrderBy>;
  min?: Maybe<TermTaxonomiesMinOrderBy>;
};

/** input type for inserting array relation for remote table "term_taxonomies" */
export type TermTaxonomiesArrRelInsertInput = {
  data: Array<TermTaxonomiesInsertInput>;
  /** upsert condition */
  on_conflict?: Maybe<TermTaxonomiesOnConflict>;
};

/** Boolean expression to filter rows from the table "term_taxonomies". All fields are combined with a logical 'AND'. */
export type TermTaxonomiesBoolExp = {
  _and?: Maybe<Array<TermTaxonomiesBoolExp>>;
  _not?: Maybe<TermTaxonomiesBoolExp>;
  _or?: Maybe<Array<TermTaxonomiesBoolExp>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  parentSlug?: Maybe<StringComparisonExp>;
  taxonomy?: Maybe<TaxonomiesEnumComparisonExp>;
  taxonomyByTaxonomy?: Maybe<TaxonomiesBoolExp>;
  term?: Maybe<TermsBoolExp>;
  termId?: Maybe<UuidComparisonExp>;
  term_relationships?: Maybe<TermRelationshipsBoolExp>;
};

/** unique or primary key constraints on table "term_taxonomies" */
export enum TermTaxonomiesConstraint {
  /** unique or primary key constraint on columns "id" */
  TermTaxonomiesIdKey = 'term_taxonomies_id_key',
  /** unique or primary key constraint on columns "id" */
  TermTaxonomiesPkey = 'term_taxonomies_pkey',
  /** unique or primary key constraint on columns "term_id" */
  TermTaxonomiesTermIdKey = 'term_taxonomies_term_id_key'
}

/** input type for inserting data into table "term_taxonomies" */
export type TermTaxonomiesInsertInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  parentSlug?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<TaxonomiesEnum>;
  taxonomyByTaxonomy?: Maybe<TaxonomiesObjRelInsertInput>;
  term?: Maybe<TermsObjRelInsertInput>;
  termId?: Maybe<Scalars['uuid']>;
  term_relationships?: Maybe<TermRelationshipsArrRelInsertInput>;
};

/** aggregate max on columns */
export type TermTaxonomiesMaxFields = {
  __typename?: 'termTaxonomies_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  parentSlug?: Maybe<Scalars['String']>;
  termId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "term_taxonomies" */
export type TermTaxonomiesMaxOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  parentSlug?: Maybe<OrderBy>;
  termId?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type TermTaxonomiesMinFields = {
  __typename?: 'termTaxonomies_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  parentSlug?: Maybe<Scalars['String']>;
  termId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "term_taxonomies" */
export type TermTaxonomiesMinOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  parentSlug?: Maybe<OrderBy>;
  termId?: Maybe<OrderBy>;
};

/** response of any mutation on the table "term_taxonomies" */
export type TermTaxonomiesMutationResponse = {
  __typename?: 'termTaxonomies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TermTaxonomies>;
};

/** input type for inserting object relation for remote table "term_taxonomies" */
export type TermTaxonomiesObjRelInsertInput = {
  data: TermTaxonomiesInsertInput;
  /** upsert condition */
  on_conflict?: Maybe<TermTaxonomiesOnConflict>;
};

/** on_conflict condition type for table "term_taxonomies" */
export type TermTaxonomiesOnConflict = {
  constraint: TermTaxonomiesConstraint;
  update_columns?: Array<TermTaxonomiesUpdateColumn>;
  where?: Maybe<TermTaxonomiesBoolExp>;
};

/** Ordering options when selecting data from "term_taxonomies". */
export type TermTaxonomiesOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  parentSlug?: Maybe<OrderBy>;
  taxonomy?: Maybe<OrderBy>;
  taxonomyByTaxonomy?: Maybe<TaxonomiesOrderBy>;
  term?: Maybe<TermsOrderBy>;
  termId?: Maybe<OrderBy>;
  term_relationships_aggregate?: Maybe<TermRelationshipsAggregateOrderBy>;
};

/** primary key columns input for table: termTaxonomies */
export type TermTaxonomiesPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "term_taxonomies" */
export enum TermTaxonomiesSelectColumn {
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
export type TermTaxonomiesSetInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  parentSlug?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<TaxonomiesEnum>;
  termId?: Maybe<Scalars['uuid']>;
};

/** update columns of table "term_taxonomies" */
export enum TermTaxonomiesUpdateColumn {
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
export type TermsAggregate = {
  __typename?: 'terms_aggregate';
  aggregate?: Maybe<TermsAggregateFields>;
  nodes: Array<Terms>;
};

/** aggregate fields of "terms" */
export type TermsAggregateFields = {
  __typename?: 'terms_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TermsMaxFields>;
  min?: Maybe<TermsMinFields>;
};


/** aggregate fields of "terms" */
export type TermsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<TermsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "terms". All fields are combined with a logical 'AND'. */
export type TermsBoolExp = {
  _and?: Maybe<Array<TermsBoolExp>>;
  _not?: Maybe<TermsBoolExp>;
  _or?: Maybe<Array<TermsBoolExp>>;
  id?: Maybe<UuidComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  slug?: Maybe<StringComparisonExp>;
  termTaxonomy?: Maybe<TermTaxonomiesBoolExp>;
};

/** unique or primary key constraints on table "terms" */
export enum TermsConstraint {
  /** unique or primary key constraint on columns "id" */
  TermsIdKey = 'terms_id_key',
  /** unique or primary key constraint on columns "slug" */
  TermsPkey = 'terms_pkey',
  /** unique or primary key constraint on columns "slug" */
  TermsSlugKey = 'terms_slug_key'
}

/** input type for inserting data into table "terms" */
export type TermsInsertInput = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  termTaxonomy?: Maybe<TermTaxonomiesObjRelInsertInput>;
};

/** aggregate max on columns */
export type TermsMaxFields = {
  __typename?: 'terms_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type TermsMinFields = {
  __typename?: 'terms_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "terms" */
export type TermsMutationResponse = {
  __typename?: 'terms_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Terms>;
};

/** input type for inserting object relation for remote table "terms" */
export type TermsObjRelInsertInput = {
  data: TermsInsertInput;
  /** upsert condition */
  on_conflict?: Maybe<TermsOnConflict>;
};

/** on_conflict condition type for table "terms" */
export type TermsOnConflict = {
  constraint: TermsConstraint;
  update_columns?: Array<TermsUpdateColumn>;
  where?: Maybe<TermsBoolExp>;
};

/** Ordering options when selecting data from "terms". */
export type TermsOrderBy = {
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  slug?: Maybe<OrderBy>;
  termTaxonomy?: Maybe<TermTaxonomiesOrderBy>;
};

/** primary key columns input for table: terms */
export type TermsPkColumnsInput = {
  slug: Scalars['String'];
};

/** select columns of table "terms" */
export enum TermsSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug'
}

/** input type for updating data in table "terms" */
export type TermsSetInput = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

/** update columns of table "terms" */
export enum TermsUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug'
}


export type TimestamptzCastExp = {
  String?: Maybe<StringComparisonExp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _cast?: Maybe<TimestamptzCastExp>;
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
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
  refreshTokens_aggregate: AuthRefreshTokensAggregate;
  /** An array relationship */
  roles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  roles_aggregate: AuthUserRolesAggregate;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt: Scalars['timestamptz'];
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProvidersAggregate;
};


/** columns and relationships of "auth.users" */
export type UsersMetadataArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "auth.users" */
export type UsersRefreshTokensArgs = {
  distinct_on?: Maybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthRefreshTokensOrderBy>>;
  where?: Maybe<AuthRefreshTokensBoolExp>;
};


/** columns and relationships of "auth.users" */
export type UsersRefreshTokensAggregateArgs = {
  distinct_on?: Maybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthRefreshTokensOrderBy>>;
  where?: Maybe<AuthRefreshTokensBoolExp>;
};


/** columns and relationships of "auth.users" */
export type UsersRolesArgs = {
  distinct_on?: Maybe<Array<AuthUserRolesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthUserRolesOrderBy>>;
  where?: Maybe<AuthUserRolesBoolExp>;
};


/** columns and relationships of "auth.users" */
export type UsersRolesAggregateArgs = {
  distinct_on?: Maybe<Array<AuthUserRolesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthUserRolesOrderBy>>;
  where?: Maybe<AuthUserRolesBoolExp>;
};


/** columns and relationships of "auth.users" */
export type UsersUserProvidersArgs = {
  distinct_on?: Maybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthUserProvidersOrderBy>>;
  where?: Maybe<AuthUserProvidersBoolExp>;
};


/** columns and relationships of "auth.users" */
export type UsersUserProvidersAggregateArgs = {
  distinct_on?: Maybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthUserProvidersOrderBy>>;
  where?: Maybe<AuthUserProvidersBoolExp>;
};

/** aggregated selection of "auth.users" */
export type UsersAggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

/** aggregate fields of "auth.users" */
export type UsersAggregateFields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
};


/** aggregate fields of "auth.users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: Maybe<Array<UsersSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.users" */
export type UsersAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<UsersMaxOrderBy>;
  min?: Maybe<UsersMinOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type UsersAppendInput = {
  metadata?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.users" */
export type UsersArrRelInsertInput = {
  data: Array<UsersInsertInput>;
  /** upsert condition */
  on_conflict?: Maybe<UsersOnConflict>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: Maybe<Array<UsersBoolExp>>;
  _not?: Maybe<UsersBoolExp>;
  _or?: Maybe<Array<UsersBoolExp>>;
  activeMfaType?: Maybe<StringComparisonExp>;
  avatarUrl?: Maybe<StringComparisonExp>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  defaultRole?: Maybe<StringComparisonExp>;
  defaultRoleByRole?: Maybe<AuthRolesBoolExp>;
  disabled?: Maybe<BooleanComparisonExp>;
  displayName?: Maybe<StringComparisonExp>;
  email?: Maybe<CitextComparisonExp>;
  emailVerified?: Maybe<BooleanComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  isAnonymous?: Maybe<BooleanComparisonExp>;
  lastSeen?: Maybe<TimestamptzComparisonExp>;
  locale?: Maybe<StringComparisonExp>;
  metadata?: Maybe<JsonbComparisonExp>;
  newEmail?: Maybe<CitextComparisonExp>;
  otpHash?: Maybe<StringComparisonExp>;
  otpHashExpiresAt?: Maybe<TimestamptzComparisonExp>;
  otpMethodLastUsed?: Maybe<StringComparisonExp>;
  passwordHash?: Maybe<StringComparisonExp>;
  phoneNumber?: Maybe<StringComparisonExp>;
  phoneNumberVerified?: Maybe<BooleanComparisonExp>;
  refreshTokens?: Maybe<AuthRefreshTokensBoolExp>;
  roles?: Maybe<AuthUserRolesBoolExp>;
  ticket?: Maybe<StringComparisonExp>;
  ticketExpiresAt?: Maybe<TimestamptzComparisonExp>;
  totpSecret?: Maybe<StringComparisonExp>;
  updatedAt?: Maybe<TimestamptzComparisonExp>;
  userProviders?: Maybe<AuthUserProvidersBoolExp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum UsersConstraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "phone_number" */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type UsersDeleteAtPathInput = {
  metadata?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type UsersDeleteElemInput = {
  metadata?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type UsersDeleteKeyInput = {
  metadata?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.users" */
export type UsersInsertInput = {
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  defaultRole?: Maybe<Scalars['String']>;
  defaultRoleByRole?: Maybe<AuthRolesObjRelInsertInput>;
  disabled?: Maybe<Scalars['Boolean']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  isAnonymous?: Maybe<Scalars['Boolean']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['jsonb']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberVerified?: Maybe<Scalars['Boolean']>;
  refreshTokens?: Maybe<AuthRefreshTokensArrRelInsertInput>;
  roles?: Maybe<AuthUserRolesArrRelInsertInput>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userProviders?: Maybe<AuthUserProvidersArrRelInsertInput>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
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
export type UsersMaxOrderBy = {
  activeMfaType?: Maybe<OrderBy>;
  avatarUrl?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  defaultRole?: Maybe<OrderBy>;
  displayName?: Maybe<OrderBy>;
  email?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  lastSeen?: Maybe<OrderBy>;
  locale?: Maybe<OrderBy>;
  newEmail?: Maybe<OrderBy>;
  otpHash?: Maybe<OrderBy>;
  otpHashExpiresAt?: Maybe<OrderBy>;
  otpMethodLastUsed?: Maybe<OrderBy>;
  passwordHash?: Maybe<OrderBy>;
  phoneNumber?: Maybe<OrderBy>;
  ticket?: Maybe<OrderBy>;
  ticketExpiresAt?: Maybe<OrderBy>;
  totpSecret?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type UsersMinFields = {
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
export type UsersMinOrderBy = {
  activeMfaType?: Maybe<OrderBy>;
  avatarUrl?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  defaultRole?: Maybe<OrderBy>;
  displayName?: Maybe<OrderBy>;
  email?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  lastSeen?: Maybe<OrderBy>;
  locale?: Maybe<OrderBy>;
  newEmail?: Maybe<OrderBy>;
  otpHash?: Maybe<OrderBy>;
  otpHashExpiresAt?: Maybe<OrderBy>;
  otpMethodLastUsed?: Maybe<OrderBy>;
  passwordHash?: Maybe<OrderBy>;
  phoneNumber?: Maybe<OrderBy>;
  ticket?: Maybe<OrderBy>;
  ticketExpiresAt?: Maybe<OrderBy>;
  totpSecret?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** response of any mutation on the table "auth.users" */
export type UsersMutationResponse = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type UsersObjRelInsertInput = {
  data: UsersInsertInput;
  /** upsert condition */
  on_conflict?: Maybe<UsersOnConflict>;
};

/** on_conflict condition type for table "auth.users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  update_columns?: Array<UsersUpdateColumn>;
  where?: Maybe<UsersBoolExp>;
};

/** Ordering options when selecting data from "auth.users". */
export type UsersOrderBy = {
  activeMfaType?: Maybe<OrderBy>;
  avatarUrl?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  defaultRole?: Maybe<OrderBy>;
  defaultRoleByRole?: Maybe<AuthRolesOrderBy>;
  disabled?: Maybe<OrderBy>;
  displayName?: Maybe<OrderBy>;
  email?: Maybe<OrderBy>;
  emailVerified?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  isAnonymous?: Maybe<OrderBy>;
  lastSeen?: Maybe<OrderBy>;
  locale?: Maybe<OrderBy>;
  metadata?: Maybe<OrderBy>;
  newEmail?: Maybe<OrderBy>;
  otpHash?: Maybe<OrderBy>;
  otpHashExpiresAt?: Maybe<OrderBy>;
  otpMethodLastUsed?: Maybe<OrderBy>;
  passwordHash?: Maybe<OrderBy>;
  phoneNumber?: Maybe<OrderBy>;
  phoneNumberVerified?: Maybe<OrderBy>;
  refreshTokens_aggregate?: Maybe<AuthRefreshTokensAggregateOrderBy>;
  roles_aggregate?: Maybe<AuthUserRolesAggregateOrderBy>;
  ticket?: Maybe<OrderBy>;
  ticketExpiresAt?: Maybe<OrderBy>;
  totpSecret?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
  userProviders_aggregate?: Maybe<AuthUserProvidersAggregateOrderBy>;
};

/** primary key columns input for table: users */
export type UsersPkColumnsInput = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type UsersPrependInput = {
  metadata?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "auth.users" */
export enum UsersSelectColumn {
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
export type UsersSetInput = {
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  defaultRole?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  isAnonymous?: Maybe<Scalars['Boolean']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['jsonb']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberVerified?: Maybe<Scalars['Boolean']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.users" */
export enum UsersUpdateColumn {
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


export type UuidCastExp = {
  String?: Maybe<StringComparisonExp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _cast?: Maybe<UuidCastExp>;
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type TagsTableQueryVariables = Exact<{ [key: string]: never; }>;


export type TagsTableQuery = (
  { __typename?: 'query_root' }
  & { summaryTaxonomies: Array<(
    { __typename: 'summaryTaxonomies' }
    & Pick<SummaryTaxonomies, 'name' | 'slug' | 'description' | 'count'>
  )> }
);

export type DeletePostMutationVariables = Exact<{
  where: PostsBoolExp;
}>;


export type DeletePostMutation = (
  { __typename?: 'mutation_root' }
  & { deletePosts?: Maybe<{ __typename: 'posts_mutation_response' }> }
);

export type InsertArticleMutationVariables = Exact<{
  object: ArticlesInsertInput;
}>;


export type InsertArticleMutation = (
  { __typename?: 'mutation_root' }
  & { insertArticle?: Maybe<(
    { __typename: 'articles' }
    & Pick<Articles, 'postId'>
  )> }
);

export type InsertPageMutationVariables = Exact<{
  object: PagesInsertInput;
}>;


export type InsertPageMutation = (
  { __typename?: 'mutation_root' }
  & { insertPage?: Maybe<(
    { __typename: 'pages' }
    & Pick<Pages, 'postId'>
  )> }
);

export type InsertTermMutationVariables = Exact<{
  object: TermsInsertInput;
}>;


export type InsertTermMutation = (
  { __typename?: 'mutation_root' }
  & { insertTerm?: Maybe<(
    { __typename: 'terms' }
    & Pick<Terms, 'slug'>
  )> }
);

export type InsertTermTaxonomyMutationVariables = Exact<{
  object: TermTaxonomiesInsertInput;
}>;


export type InsertTermTaxonomyMutation = (
  { __typename?: 'mutation_root' }
  & { insertTermTaxonomy?: Maybe<(
    { __typename: 'termTaxonomies' }
    & { term: (
      { __typename?: 'terms' }
      & Pick<Terms, 'slug'>
    ) }
  )> }
);

export type UpdateArticleMutationVariables = Exact<{
  articles_pk_columns: ArticlesPkColumnsInput;
  articles_set?: Maybe<ArticlesSetInput>;
  posts_pk_columns: PostsPkColumnsInput;
  posts_set?: Maybe<PostsSetInput>;
}>;


export type UpdateArticleMutation = (
  { __typename?: 'mutation_root' }
  & { updateArticle?: Maybe<(
    { __typename: 'articles' }
    & Pick<Articles, 'postId'>
  )>, updatePost?: Maybe<(
    { __typename: 'posts' }
    & Pick<Posts, 'id'>
  )> }
);

export type UpdatePageMutationVariables = Exact<{
  pages_pk_columns: PagesPkColumnsInput;
  pages_set?: Maybe<PagesSetInput>;
  posts_pk_columns: PostsPkColumnsInput;
  posts_set?: Maybe<PostsSetInput>;
}>;


export type UpdatePageMutation = (
  { __typename?: 'mutation_root' }
  & { updatePage?: Maybe<(
    { __typename: 'pages' }
    & Pick<Pages, 'postId'>
  )>, updatePost?: Maybe<(
    { __typename: 'posts' }
    & Pick<Posts, 'id'>
  )> }
);

export type UpdatePostMutationVariables = Exact<{
  pk_columns: PostsPkColumnsInput;
  _set?: Maybe<PostsSetInput>;
}>;


export type UpdatePostMutation = (
  { __typename?: 'mutation_root' }
  & { updatePost?: Maybe<(
    { __typename: 'posts' }
    & Pick<Posts, 'id'>
  )> }
);

export type ArticleQueryVariables = Exact<{
  uuid: Scalars['uuid'];
}>;


export type ArticleQuery = (
  { __typename?: 'query_root' }
  & { article?: Maybe<(
    { __typename: 'articles' }
    & Pick<Articles, 'postId' | 'body' | 'excerpt' | 'state'>
    & { post: (
      { __typename: 'posts' }
      & Pick<Posts, 'title' | 'description' | 'slug'>
    ) }
  )> }
);

export type ArticlesQueryVariables = Exact<{
  where?: Maybe<ArticlesBoolExp>;
}>;


export type ArticlesQuery = (
  { __typename?: 'query_root' }
  & { articles: Array<(
    { __typename: 'articles' }
    & Pick<Articles, 'postId' | 'state'>
    & { post: (
      { __typename: 'posts' }
      & Pick<Posts, 'title' | 'type' | 'slug' | 'createdAt'>
    ) }
  )> }
);

export type ArticlesAggregateQueryVariables = Exact<{
  where?: Maybe<ArticlesBoolExp>;
}>;


export type ArticlesAggregateQuery = (
  { __typename?: 'query_root' }
  & { articlesAggregate: (
    { __typename?: 'articles_aggregate' }
    & { aggregate?: Maybe<(
      { __typename: 'articles_aggregate_fields' }
      & Pick<ArticlesAggregateFields, 'count'>
    )> }
  ) }
);

export type PageQueryVariables = Exact<{
  uuid: Scalars['uuid'];
}>;


export type PageQuery = (
  { __typename?: 'query_root' }
  & { page?: Maybe<(
    { __typename: 'pages' }
    & Pick<Pages, 'postId' | 'body' | 'state'>
    & { post: (
      { __typename: 'posts' }
      & Pick<Posts, 'title' | 'slug'>
    ) }
  )> }
);

export type PagesQueryVariables = Exact<{
  where?: Maybe<PagesBoolExp>;
}>;


export type PagesQuery = (
  { __typename?: 'query_root' }
  & { pages: Array<(
    { __typename: 'pages' }
    & Pick<Pages, 'postId' | 'body'>
    & { post: (
      { __typename: 'posts' }
      & Pick<Posts, 'title' | 'type' | 'slug' | 'createdAt'>
    ) }
  )> }
);

export type PagesAggregateQueryVariables = Exact<{
  where?: Maybe<PagesBoolExp>;
}>;


export type PagesAggregateQuery = (
  { __typename?: 'query_root' }
  & { pagesAggregate: (
    { __typename?: 'pages_aggregate' }
    & { aggregate?: Maybe<(
      { __typename: 'pages_aggregate_fields' }
      & Pick<PagesAggregateFields, 'count'>
    )> }
  ) }
);

export type TermTaxonomiesQueryVariables = Exact<{
  where?: Maybe<TermTaxonomiesBoolExp>;
}>;


export type TermTaxonomiesQuery = (
  { __typename?: 'query_root' }
  & { termTaxonomies: Array<(
    { __typename: 'termTaxonomies' }
    & Pick<TermTaxonomies, 'taxonomy' | 'description' | 'parentSlug'>
    & { term: (
      { __typename: 'terms' }
      & Pick<Terms, 'name' | 'slug'>
    ) }
  )> }
);


export const TagsTableDocument = gql`
    query TagsTable {
  summaryTaxonomies(where: {taxonomy: {_eq: "tags"}}) {
    __typename
    name
    slug
    description
    count
  }
}
    `;

/**
 * __useTagsTableQuery__
 *
 * To run a query within a React component, call `useTagsTableQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagsTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagsTableQuery({
 *   variables: {
 *   },
 * });
 */
export function useTagsTableQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TagsTableQuery, TagsTableQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TagsTableQuery, TagsTableQueryVariables>(TagsTableDocument, options);
      }
export function useTagsTableLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TagsTableQuery, TagsTableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TagsTableQuery, TagsTableQueryVariables>(TagsTableDocument, options);
        }
export type TagsTableQueryHookResult = ReturnType<typeof useTagsTableQuery>;
export type TagsTableLazyQueryHookResult = ReturnType<typeof useTagsTableLazyQuery>;
export type TagsTableQueryResult = Apollo.QueryResult<TagsTableQuery, TagsTableQueryVariables>;
export const DeletePostDocument = gql`
    mutation deletePost($where: posts_bool_exp!) {
  deletePosts(where: $where) {
    __typename
  }
}
    `;
export type DeletePostMutationFn = Apollo.MutationFunction<DeletePostMutation, DeletePostMutationVariables>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeletePostMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, options);
      }
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<DeletePostMutation, DeletePostMutationVariables>;
export const InsertArticleDocument = gql`
    mutation insertArticle($object: articles_insert_input!) {
  insertArticle(object: $object) {
    __typename
    postId
  }
}
    `;
export type InsertArticleMutationFn = Apollo.MutationFunction<InsertArticleMutation, InsertArticleMutationVariables>;

/**
 * __useInsertArticleMutation__
 *
 * To run a mutation, you first call `useInsertArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertArticleMutation, { data, loading, error }] = useInsertArticleMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertArticleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertArticleMutation, InsertArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<InsertArticleMutation, InsertArticleMutationVariables>(InsertArticleDocument, options);
      }
export type InsertArticleMutationHookResult = ReturnType<typeof useInsertArticleMutation>;
export type InsertArticleMutationResult = Apollo.MutationResult<InsertArticleMutation>;
export type InsertArticleMutationOptions = Apollo.BaseMutationOptions<InsertArticleMutation, InsertArticleMutationVariables>;
export const InsertPageDocument = gql`
    mutation insertPage($object: pages_insert_input!) {
  insertPage(object: $object) {
    __typename
    postId
  }
}
    `;
export type InsertPageMutationFn = Apollo.MutationFunction<InsertPageMutation, InsertPageMutationVariables>;

/**
 * __useInsertPageMutation__
 *
 * To run a mutation, you first call `useInsertPageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPageMutation, { data, loading, error }] = useInsertPageMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertPageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertPageMutation, InsertPageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<InsertPageMutation, InsertPageMutationVariables>(InsertPageDocument, options);
      }
export type InsertPageMutationHookResult = ReturnType<typeof useInsertPageMutation>;
export type InsertPageMutationResult = Apollo.MutationResult<InsertPageMutation>;
export type InsertPageMutationOptions = Apollo.BaseMutationOptions<InsertPageMutation, InsertPageMutationVariables>;
export const InsertTermDocument = gql`
    mutation insertTerm($object: terms_insert_input!) {
  insertTerm(object: $object) {
    __typename
    slug
  }
}
    `;
export type InsertTermMutationFn = Apollo.MutationFunction<InsertTermMutation, InsertTermMutationVariables>;

/**
 * __useInsertTermMutation__
 *
 * To run a mutation, you first call `useInsertTermMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTermMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTermMutation, { data, loading, error }] = useInsertTermMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertTermMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertTermMutation, InsertTermMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<InsertTermMutation, InsertTermMutationVariables>(InsertTermDocument, options);
      }
export type InsertTermMutationHookResult = ReturnType<typeof useInsertTermMutation>;
export type InsertTermMutationResult = Apollo.MutationResult<InsertTermMutation>;
export type InsertTermMutationOptions = Apollo.BaseMutationOptions<InsertTermMutation, InsertTermMutationVariables>;
export const InsertTermTaxonomyDocument = gql`
    mutation insertTermTaxonomy($object: termTaxonomies_insert_input!) {
  insertTermTaxonomy(object: $object) {
    __typename
    term {
      slug
    }
  }
}
    `;
export type InsertTermTaxonomyMutationFn = Apollo.MutationFunction<InsertTermTaxonomyMutation, InsertTermTaxonomyMutationVariables>;

/**
 * __useInsertTermTaxonomyMutation__
 *
 * To run a mutation, you first call `useInsertTermTaxonomyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTermTaxonomyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTermTaxonomyMutation, { data, loading, error }] = useInsertTermTaxonomyMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertTermTaxonomyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertTermTaxonomyMutation, InsertTermTaxonomyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<InsertTermTaxonomyMutation, InsertTermTaxonomyMutationVariables>(InsertTermTaxonomyDocument, options);
      }
export type InsertTermTaxonomyMutationHookResult = ReturnType<typeof useInsertTermTaxonomyMutation>;
export type InsertTermTaxonomyMutationResult = Apollo.MutationResult<InsertTermTaxonomyMutation>;
export type InsertTermTaxonomyMutationOptions = Apollo.BaseMutationOptions<InsertTermTaxonomyMutation, InsertTermTaxonomyMutationVariables>;
export const UpdateArticleDocument = gql`
    mutation updateArticle($articles_pk_columns: articles_pk_columns_input!, $articles_set: articles_set_input, $posts_pk_columns: posts_pk_columns_input!, $posts_set: posts_set_input) {
  updateArticle(pk_columns: $articles_pk_columns, _set: $articles_set) {
    __typename
    postId
  }
  updatePost(pk_columns: $posts_pk_columns, _set: $posts_set) {
    __typename
    id
  }
}
    `;
export type UpdateArticleMutationFn = Apollo.MutationFunction<UpdateArticleMutation, UpdateArticleMutationVariables>;

/**
 * __useUpdateArticleMutation__
 *
 * To run a mutation, you first call `useUpdateArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateArticleMutation, { data, loading, error }] = useUpdateArticleMutation({
 *   variables: {
 *      articles_pk_columns: // value for 'articles_pk_columns'
 *      articles_set: // value for 'articles_set'
 *      posts_pk_columns: // value for 'posts_pk_columns'
 *      posts_set: // value for 'posts_set'
 *   },
 * });
 */
export function useUpdateArticleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateArticleMutation, UpdateArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateArticleMutation, UpdateArticleMutationVariables>(UpdateArticleDocument, options);
      }
export type UpdateArticleMutationHookResult = ReturnType<typeof useUpdateArticleMutation>;
export type UpdateArticleMutationResult = Apollo.MutationResult<UpdateArticleMutation>;
export type UpdateArticleMutationOptions = Apollo.BaseMutationOptions<UpdateArticleMutation, UpdateArticleMutationVariables>;
export const UpdatePageDocument = gql`
    mutation updatePage($pages_pk_columns: pages_pk_columns_input!, $pages_set: pages_set_input, $posts_pk_columns: posts_pk_columns_input!, $posts_set: posts_set_input) {
  updatePage(pk_columns: $pages_pk_columns, _set: $pages_set) {
    __typename
    postId
  }
  updatePost(pk_columns: $posts_pk_columns, _set: $posts_set) {
    __typename
    id
  }
}
    `;
export type UpdatePageMutationFn = Apollo.MutationFunction<UpdatePageMutation, UpdatePageMutationVariables>;

/**
 * __useUpdatePageMutation__
 *
 * To run a mutation, you first call `useUpdatePageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePageMutation, { data, loading, error }] = useUpdatePageMutation({
 *   variables: {
 *      pages_pk_columns: // value for 'pages_pk_columns'
 *      pages_set: // value for 'pages_set'
 *      posts_pk_columns: // value for 'posts_pk_columns'
 *      posts_set: // value for 'posts_set'
 *   },
 * });
 */
export function useUpdatePageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdatePageMutation, UpdatePageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdatePageMutation, UpdatePageMutationVariables>(UpdatePageDocument, options);
      }
export type UpdatePageMutationHookResult = ReturnType<typeof useUpdatePageMutation>;
export type UpdatePageMutationResult = Apollo.MutationResult<UpdatePageMutation>;
export type UpdatePageMutationOptions = Apollo.BaseMutationOptions<UpdatePageMutation, UpdatePageMutationVariables>;
export const UpdatePostDocument = gql`
    mutation updatePost($pk_columns: posts_pk_columns_input!, $_set: posts_set_input) {
  updatePost(pk_columns: $pk_columns, _set: $_set) {
    __typename
    id
  }
}
    `;
export type UpdatePostMutationFn = Apollo.MutationFunction<UpdatePostMutation, UpdatePostMutationVariables>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      pk_columns: // value for 'pk_columns'
 *      _set: // value for '_set'
 *   },
 * });
 */
export function useUpdatePostMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdatePostMutation, UpdatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument, options);
      }
export type UpdatePostMutationHookResult = ReturnType<typeof useUpdatePostMutation>;
export type UpdatePostMutationResult = Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<UpdatePostMutation, UpdatePostMutationVariables>;
export const ArticleDocument = gql`
    query article($uuid: uuid!) {
  article(postId: $uuid) {
    __typename
    postId
    post {
      __typename
      title
      description
      slug
    }
    body
    excerpt
    state
  }
}
    `;

/**
 * __useArticleQuery__
 *
 * To run a query within a React component, call `useArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleQuery({
 *   variables: {
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useArticleQuery(baseOptions: ApolloReactHooks.QueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
      }
export function useArticleLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
        }
export type ArticleQueryHookResult = ReturnType<typeof useArticleQuery>;
export type ArticleLazyQueryHookResult = ReturnType<typeof useArticleLazyQuery>;
export type ArticleQueryResult = Apollo.QueryResult<ArticleQuery, ArticleQueryVariables>;
export const ArticlesDocument = gql`
    query articles($where: articles_bool_exp) {
  articles(where: $where) {
    __typename
    postId
    state
    post {
      __typename
      title
      type
      slug
      createdAt
    }
  }
}
    `;

/**
 * __useArticlesQuery__
 *
 * To run a query within a React component, call `useArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useArticlesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ArticlesQuery, ArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, options);
      }
export function useArticlesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ArticlesQuery, ArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, options);
        }
export type ArticlesQueryHookResult = ReturnType<typeof useArticlesQuery>;
export type ArticlesLazyQueryHookResult = ReturnType<typeof useArticlesLazyQuery>;
export type ArticlesQueryResult = Apollo.QueryResult<ArticlesQuery, ArticlesQueryVariables>;
export const ArticlesAggregateDocument = gql`
    query articlesAggregate($where: articles_bool_exp) {
  articlesAggregate(where: $where) {
    aggregate {
      __typename
      count
    }
  }
}
    `;

/**
 * __useArticlesAggregateQuery__
 *
 * To run a query within a React component, call `useArticlesAggregateQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesAggregateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesAggregateQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useArticlesAggregateQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ArticlesAggregateQuery, ArticlesAggregateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ArticlesAggregateQuery, ArticlesAggregateQueryVariables>(ArticlesAggregateDocument, options);
      }
export function useArticlesAggregateLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ArticlesAggregateQuery, ArticlesAggregateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ArticlesAggregateQuery, ArticlesAggregateQueryVariables>(ArticlesAggregateDocument, options);
        }
export type ArticlesAggregateQueryHookResult = ReturnType<typeof useArticlesAggregateQuery>;
export type ArticlesAggregateLazyQueryHookResult = ReturnType<typeof useArticlesAggregateLazyQuery>;
export type ArticlesAggregateQueryResult = Apollo.QueryResult<ArticlesAggregateQuery, ArticlesAggregateQueryVariables>;
export const PageDocument = gql`
    query page($uuid: uuid!) {
  page(postId: $uuid) {
    __typename
    postId
    post {
      __typename
      title
      slug
    }
    body
    state
  }
}
    `;

/**
 * __usePageQuery__
 *
 * To run a query within a React component, call `usePageQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageQuery({
 *   variables: {
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function usePageQuery(baseOptions: ApolloReactHooks.QueryHookOptions<PageQuery, PageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<PageQuery, PageQueryVariables>(PageDocument, options);
      }
export function usePageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PageQuery, PageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<PageQuery, PageQueryVariables>(PageDocument, options);
        }
export type PageQueryHookResult = ReturnType<typeof usePageQuery>;
export type PageLazyQueryHookResult = ReturnType<typeof usePageLazyQuery>;
export type PageQueryResult = Apollo.QueryResult<PageQuery, PageQueryVariables>;
export const PagesDocument = gql`
    query pages($where: pages_bool_exp) {
  pages(where: $where) {
    __typename
    postId
    body
    post {
      __typename
      title
      type
      slug
      createdAt
    }
  }
}
    `;

/**
 * __usePagesQuery__
 *
 * To run a query within a React component, call `usePagesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePagesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePagesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PagesQuery, PagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<PagesQuery, PagesQueryVariables>(PagesDocument, options);
      }
export function usePagesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PagesQuery, PagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<PagesQuery, PagesQueryVariables>(PagesDocument, options);
        }
export type PagesQueryHookResult = ReturnType<typeof usePagesQuery>;
export type PagesLazyQueryHookResult = ReturnType<typeof usePagesLazyQuery>;
export type PagesQueryResult = Apollo.QueryResult<PagesQuery, PagesQueryVariables>;
export const PagesAggregateDocument = gql`
    query pagesAggregate($where: pages_bool_exp) {
  pagesAggregate(where: $where) {
    aggregate {
      __typename
      count
    }
  }
}
    `;

/**
 * __usePagesAggregateQuery__
 *
 * To run a query within a React component, call `usePagesAggregateQuery` and pass it any options that fit your needs.
 * When your component renders, `usePagesAggregateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePagesAggregateQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePagesAggregateQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PagesAggregateQuery, PagesAggregateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<PagesAggregateQuery, PagesAggregateQueryVariables>(PagesAggregateDocument, options);
      }
export function usePagesAggregateLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PagesAggregateQuery, PagesAggregateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<PagesAggregateQuery, PagesAggregateQueryVariables>(PagesAggregateDocument, options);
        }
export type PagesAggregateQueryHookResult = ReturnType<typeof usePagesAggregateQuery>;
export type PagesAggregateLazyQueryHookResult = ReturnType<typeof usePagesAggregateLazyQuery>;
export type PagesAggregateQueryResult = Apollo.QueryResult<PagesAggregateQuery, PagesAggregateQueryVariables>;
export const TermTaxonomiesDocument = gql`
    query termTaxonomies($where: termTaxonomies_bool_exp) {
  termTaxonomies(where: $where) {
    __typename
    taxonomy
    description
    parentSlug
    term {
      __typename
      name
      slug
    }
  }
}
    `;

/**
 * __useTermTaxonomiesQuery__
 *
 * To run a query within a React component, call `useTermTaxonomiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTermTaxonomiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTermTaxonomiesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useTermTaxonomiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TermTaxonomiesQuery, TermTaxonomiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TermTaxonomiesQuery, TermTaxonomiesQueryVariables>(TermTaxonomiesDocument, options);
      }
export function useTermTaxonomiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TermTaxonomiesQuery, TermTaxonomiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TermTaxonomiesQuery, TermTaxonomiesQueryVariables>(TermTaxonomiesDocument, options);
        }
export type TermTaxonomiesQueryHookResult = ReturnType<typeof useTermTaxonomiesQuery>;
export type TermTaxonomiesLazyQueryHookResult = ReturnType<typeof useTermTaxonomiesLazyQuery>;
export type TermTaxonomiesQueryResult = Apollo.QueryResult<TermTaxonomiesQuery, TermTaxonomiesQueryVariables>;
export const namedOperations = {
  Query: {
    TagsTable: 'TagsTable',
    article: 'article',
    articles: 'articles',
    articlesAggregate: 'articlesAggregate',
    page: 'page',
    pages: 'pages',
    pagesAggregate: 'pagesAggregate',
    termTaxonomies: 'termTaxonomies'
  },
  Mutation: {
    deletePost: 'deletePost',
    insertArticle: 'insertArticle',
    insertPage: 'insertPage',
    insertTerm: 'insertTerm',
    insertTermTaxonomy: 'insertTermTaxonomy',
    updateArticle: 'updateArticle',
    updatePage: 'updatePage',
    updatePost: 'updatePost'
  }
}