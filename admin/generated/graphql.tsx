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
  citext: any;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};


/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
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

/** columns and relationships of "auth.account_providers" */
export type AuthAccountProviders = {
  __typename?: 'auth_account_providers';
  /** An object relationship */
  account: AuthAccounts;
  account_id: Scalars['uuid'];
  auth_provider: Scalars['String'];
  auth_provider_unique_id: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  provider: AuthProviders;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "auth.account_providers" */
export type AuthAccountProvidersAggregate = {
  __typename?: 'auth_account_providers_aggregate';
  aggregate?: Maybe<AuthAccountProvidersAggregateFields>;
  nodes: Array<AuthAccountProviders>;
};

/** aggregate fields of "auth.account_providers" */
export type AuthAccountProvidersAggregateFields = {
  __typename?: 'auth_account_providers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthAccountProvidersMaxFields>;
  min?: Maybe<AuthAccountProvidersMinFields>;
};


/** aggregate fields of "auth.account_providers" */
export type AuthAccountProvidersAggregateFieldsCountArgs = {
  columns?: Maybe<Array<AuthAccountProvidersSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.account_providers" */
export type AuthAccountProvidersAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<AuthAccountProvidersMaxOrderBy>;
  min?: Maybe<AuthAccountProvidersMinOrderBy>;
};

/** input type for inserting array relation for remote table "auth.account_providers" */
export type AuthAccountProvidersArrRelInsertInput = {
  data: Array<AuthAccountProvidersInsertInput>;
  /** on conflict condition */
  on_conflict?: Maybe<AuthAccountProvidersOnConflict>;
};

/** Boolean expression to filter rows from the table "auth.account_providers". All fields are combined with a logical 'AND'. */
export type AuthAccountProvidersBoolExp = {
  _and?: Maybe<Array<AuthAccountProvidersBoolExp>>;
  _not?: Maybe<AuthAccountProvidersBoolExp>;
  _or?: Maybe<Array<AuthAccountProvidersBoolExp>>;
  account?: Maybe<AuthAccountsBoolExp>;
  account_id?: Maybe<UuidComparisonExp>;
  auth_provider?: Maybe<StringComparisonExp>;
  auth_provider_unique_id?: Maybe<StringComparisonExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  provider?: Maybe<AuthProvidersBoolExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "auth.account_providers" */
export enum AuthAccountProvidersConstraint {
  /** unique or primary key constraint */
  AccountProvidersAccountIdAuthProviderKey = 'account_providers_account_id_auth_provider_key',
  /** unique or primary key constraint */
  AccountProvidersAuthProviderAuthProviderUniqueIdKey = 'account_providers_auth_provider_auth_provider_unique_id_key',
  /** unique or primary key constraint */
  AccountProvidersPkey = 'account_providers_pkey'
}

/** input type for inserting data into table "auth.account_providers" */
export type AuthAccountProvidersInsertInput = {
  account?: Maybe<AuthAccountsObjRelInsertInput>;
  account_id?: Maybe<Scalars['uuid']>;
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  provider?: Maybe<AuthProvidersObjRelInsertInput>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type AuthAccountProvidersMaxFields = {
  __typename?: 'auth_account_providers_max_fields';
  account_id?: Maybe<Scalars['uuid']>;
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "auth.account_providers" */
export type AuthAccountProvidersMaxOrderBy = {
  account_id?: Maybe<OrderBy>;
  auth_provider?: Maybe<OrderBy>;
  auth_provider_unique_id?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type AuthAccountProvidersMinFields = {
  __typename?: 'auth_account_providers_min_fields';
  account_id?: Maybe<Scalars['uuid']>;
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "auth.account_providers" */
export type AuthAccountProvidersMinOrderBy = {
  account_id?: Maybe<OrderBy>;
  auth_provider?: Maybe<OrderBy>;
  auth_provider_unique_id?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** response of any mutation on the table "auth.account_providers" */
export type AuthAccountProvidersMutationResponse = {
  __typename?: 'auth_account_providers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthAccountProviders>;
};

/** on conflict condition type for table "auth.account_providers" */
export type AuthAccountProvidersOnConflict = {
  constraint: AuthAccountProvidersConstraint;
  update_columns?: Array<AuthAccountProvidersUpdateColumn>;
  where?: Maybe<AuthAccountProvidersBoolExp>;
};

/** Ordering options when selecting data from "auth.account_providers". */
export type AuthAccountProvidersOrderBy = {
  account?: Maybe<AuthAccountsOrderBy>;
  account_id?: Maybe<OrderBy>;
  auth_provider?: Maybe<OrderBy>;
  auth_provider_unique_id?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  provider?: Maybe<AuthProvidersOrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** primary key columns input for table: auth_account_providers */
export type AuthAccountProvidersPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.account_providers" */
export enum AuthAccountProvidersSelectColumn {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  AuthProvider = 'auth_provider',
  /** column name */
  AuthProviderUniqueId = 'auth_provider_unique_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "auth.account_providers" */
export type AuthAccountProvidersSetInput = {
  account_id?: Maybe<Scalars['uuid']>;
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.account_providers" */
export enum AuthAccountProvidersUpdateColumn {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  AuthProvider = 'auth_provider',
  /** column name */
  AuthProviderUniqueId = 'auth_provider_unique_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "auth.account_roles" */
export type AuthAccountRoles = {
  __typename?: 'auth_account_roles';
  /** An object relationship */
  account: AuthAccounts;
  account_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: AuthRoles;
};

/** aggregated selection of "auth.account_roles" */
export type AuthAccountRolesAggregate = {
  __typename?: 'auth_account_roles_aggregate';
  aggregate?: Maybe<AuthAccountRolesAggregateFields>;
  nodes: Array<AuthAccountRoles>;
};

/** aggregate fields of "auth.account_roles" */
export type AuthAccountRolesAggregateFields = {
  __typename?: 'auth_account_roles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthAccountRolesMaxFields>;
  min?: Maybe<AuthAccountRolesMinFields>;
};


/** aggregate fields of "auth.account_roles" */
export type AuthAccountRolesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<AuthAccountRolesSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.account_roles" */
export type AuthAccountRolesAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<AuthAccountRolesMaxOrderBy>;
  min?: Maybe<AuthAccountRolesMinOrderBy>;
};

/** input type for inserting array relation for remote table "auth.account_roles" */
export type AuthAccountRolesArrRelInsertInput = {
  data: Array<AuthAccountRolesInsertInput>;
  /** on conflict condition */
  on_conflict?: Maybe<AuthAccountRolesOnConflict>;
};

/** Boolean expression to filter rows from the table "auth.account_roles". All fields are combined with a logical 'AND'. */
export type AuthAccountRolesBoolExp = {
  _and?: Maybe<Array<AuthAccountRolesBoolExp>>;
  _not?: Maybe<AuthAccountRolesBoolExp>;
  _or?: Maybe<Array<AuthAccountRolesBoolExp>>;
  account?: Maybe<AuthAccountsBoolExp>;
  account_id?: Maybe<UuidComparisonExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  role?: Maybe<StringComparisonExp>;
  roleByRole?: Maybe<AuthRolesBoolExp>;
};

/** unique or primary key constraints on table "auth.account_roles" */
export enum AuthAccountRolesConstraint {
  /** unique or primary key constraint */
  AccountRolesPkey = 'account_roles_pkey',
  /** unique or primary key constraint */
  UserRolesAccountIdRoleKey = 'user_roles_account_id_role_key'
}

/** input type for inserting data into table "auth.account_roles" */
export type AuthAccountRolesInsertInput = {
  account?: Maybe<AuthAccountsObjRelInsertInput>;
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  roleByRole?: Maybe<AuthRolesObjRelInsertInput>;
};

/** aggregate max on columns */
export type AuthAccountRolesMaxFields = {
  __typename?: 'auth_account_roles_max_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "auth.account_roles" */
export type AuthAccountRolesMaxOrderBy = {
  account_id?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  role?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type AuthAccountRolesMinFields = {
  __typename?: 'auth_account_roles_min_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "auth.account_roles" */
export type AuthAccountRolesMinOrderBy = {
  account_id?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  role?: Maybe<OrderBy>;
};

/** response of any mutation on the table "auth.account_roles" */
export type AuthAccountRolesMutationResponse = {
  __typename?: 'auth_account_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthAccountRoles>;
};

/** on conflict condition type for table "auth.account_roles" */
export type AuthAccountRolesOnConflict = {
  constraint: AuthAccountRolesConstraint;
  update_columns?: Array<AuthAccountRolesUpdateColumn>;
  where?: Maybe<AuthAccountRolesBoolExp>;
};

/** Ordering options when selecting data from "auth.account_roles". */
export type AuthAccountRolesOrderBy = {
  account?: Maybe<AuthAccountsOrderBy>;
  account_id?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  role?: Maybe<OrderBy>;
  roleByRole?: Maybe<AuthRolesOrderBy>;
};

/** primary key columns input for table: auth_account_roles */
export type AuthAccountRolesPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.account_roles" */
export enum AuthAccountRolesSelectColumn {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.account_roles" */
export type AuthAccountRolesSetInput = {
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
};

/** update columns of table "auth.account_roles" */
export enum AuthAccountRolesUpdateColumn {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role'
}

/** columns and relationships of "auth.accounts" */
export type AuthAccounts = {
  __typename?: 'auth_accounts';
  /** An array relationship */
  account_providers: Array<AuthAccountProviders>;
  /** An aggregate relationship */
  account_providers_aggregate: AuthAccountProvidersAggregate;
  /** An array relationship */
  account_roles: Array<AuthAccountRoles>;
  /** An aggregate relationship */
  account_roles_aggregate: AuthAccountRolesAggregate;
  active: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  custom_register_data?: Maybe<Scalars['jsonb']>;
  default_role: Scalars['String'];
  email?: Maybe<Scalars['citext']>;
  id: Scalars['uuid'];
  is_anonymous: Scalars['Boolean'];
  mfa_enabled: Scalars['Boolean'];
  new_email?: Maybe<Scalars['citext']>;
  otp_secret?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  /** An array relationship */
  refresh_tokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refresh_tokens_aggregate: AuthRefreshTokensAggregate;
  /** An object relationship */
  role: AuthRoles;
  ticket: Scalars['uuid'];
  ticket_expires_at: Scalars['timestamptz'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};


/** columns and relationships of "auth.accounts" */
export type AuthAccountsAccountProvidersArgs = {
  distinct_on?: Maybe<Array<AuthAccountProvidersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthAccountProvidersOrderBy>>;
  where?: Maybe<AuthAccountProvidersBoolExp>;
};


/** columns and relationships of "auth.accounts" */
export type AuthAccountsAccountProvidersAggregateArgs = {
  distinct_on?: Maybe<Array<AuthAccountProvidersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthAccountProvidersOrderBy>>;
  where?: Maybe<AuthAccountProvidersBoolExp>;
};


/** columns and relationships of "auth.accounts" */
export type AuthAccountsAccountRolesArgs = {
  distinct_on?: Maybe<Array<AuthAccountRolesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthAccountRolesOrderBy>>;
  where?: Maybe<AuthAccountRolesBoolExp>;
};


/** columns and relationships of "auth.accounts" */
export type AuthAccountsAccountRolesAggregateArgs = {
  distinct_on?: Maybe<Array<AuthAccountRolesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthAccountRolesOrderBy>>;
  where?: Maybe<AuthAccountRolesBoolExp>;
};


/** columns and relationships of "auth.accounts" */
export type AuthAccountsCustomRegisterDataArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "auth.accounts" */
export type AuthAccountsRefreshTokensArgs = {
  distinct_on?: Maybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthRefreshTokensOrderBy>>;
  where?: Maybe<AuthRefreshTokensBoolExp>;
};


/** columns and relationships of "auth.accounts" */
export type AuthAccountsRefreshTokensAggregateArgs = {
  distinct_on?: Maybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthRefreshTokensOrderBy>>;
  where?: Maybe<AuthRefreshTokensBoolExp>;
};

/** aggregated selection of "auth.accounts" */
export type AuthAccountsAggregate = {
  __typename?: 'auth_accounts_aggregate';
  aggregate?: Maybe<AuthAccountsAggregateFields>;
  nodes: Array<AuthAccounts>;
};

/** aggregate fields of "auth.accounts" */
export type AuthAccountsAggregateFields = {
  __typename?: 'auth_accounts_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthAccountsMaxFields>;
  min?: Maybe<AuthAccountsMinFields>;
};


/** aggregate fields of "auth.accounts" */
export type AuthAccountsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<AuthAccountsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.accounts" */
export type AuthAccountsAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<AuthAccountsMaxOrderBy>;
  min?: Maybe<AuthAccountsMinOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthAccountsAppendInput = {
  custom_register_data?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.accounts" */
export type AuthAccountsArrRelInsertInput = {
  data: Array<AuthAccountsInsertInput>;
  /** on conflict condition */
  on_conflict?: Maybe<AuthAccountsOnConflict>;
};

/** Boolean expression to filter rows from the table "auth.accounts". All fields are combined with a logical 'AND'. */
export type AuthAccountsBoolExp = {
  _and?: Maybe<Array<AuthAccountsBoolExp>>;
  _not?: Maybe<AuthAccountsBoolExp>;
  _or?: Maybe<Array<AuthAccountsBoolExp>>;
  account_providers?: Maybe<AuthAccountProvidersBoolExp>;
  account_roles?: Maybe<AuthAccountRolesBoolExp>;
  active?: Maybe<BooleanComparisonExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  custom_register_data?: Maybe<JsonbComparisonExp>;
  default_role?: Maybe<StringComparisonExp>;
  email?: Maybe<CitextComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  is_anonymous?: Maybe<BooleanComparisonExp>;
  mfa_enabled?: Maybe<BooleanComparisonExp>;
  new_email?: Maybe<CitextComparisonExp>;
  otp_secret?: Maybe<StringComparisonExp>;
  password_hash?: Maybe<StringComparisonExp>;
  refresh_tokens?: Maybe<AuthRefreshTokensBoolExp>;
  role?: Maybe<AuthRolesBoolExp>;
  ticket?: Maybe<UuidComparisonExp>;
  ticket_expires_at?: Maybe<TimestamptzComparisonExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
  user?: Maybe<UsersBoolExp>;
  user_id?: Maybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "auth.accounts" */
export enum AuthAccountsConstraint {
  /** unique or primary key constraint */
  AccountsEmailKey = 'accounts_email_key',
  /** unique or primary key constraint */
  AccountsNewEmailKey = 'accounts_new_email_key',
  /** unique or primary key constraint */
  AccountsPkey = 'accounts_pkey',
  /** unique or primary key constraint */
  AccountsUserIdKey = 'accounts_user_id_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthAccountsDeleteAtPathInput = {
  custom_register_data?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthAccountsDeleteElemInput = {
  custom_register_data?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthAccountsDeleteKeyInput = {
  custom_register_data?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.accounts" */
export type AuthAccountsInsertInput = {
  account_providers?: Maybe<AuthAccountProvidersArrRelInsertInput>;
  account_roles?: Maybe<AuthAccountRolesArrRelInsertInput>;
  active?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  custom_register_data?: Maybe<Scalars['jsonb']>;
  default_role?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  is_anonymous?: Maybe<Scalars['Boolean']>;
  mfa_enabled?: Maybe<Scalars['Boolean']>;
  new_email?: Maybe<Scalars['citext']>;
  otp_secret?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  refresh_tokens?: Maybe<AuthRefreshTokensArrRelInsertInput>;
  role?: Maybe<AuthRolesObjRelInsertInput>;
  ticket?: Maybe<Scalars['uuid']>;
  ticket_expires_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<UsersObjRelInsertInput>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthAccountsMaxFields = {
  __typename?: 'auth_accounts_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  new_email?: Maybe<Scalars['citext']>;
  otp_secret?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['uuid']>;
  ticket_expires_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.accounts" */
export type AuthAccountsMaxOrderBy = {
  created_at?: Maybe<OrderBy>;
  default_role?: Maybe<OrderBy>;
  email?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  new_email?: Maybe<OrderBy>;
  otp_secret?: Maybe<OrderBy>;
  password_hash?: Maybe<OrderBy>;
  ticket?: Maybe<OrderBy>;
  ticket_expires_at?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type AuthAccountsMinFields = {
  __typename?: 'auth_accounts_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  new_email?: Maybe<Scalars['citext']>;
  otp_secret?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['uuid']>;
  ticket_expires_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.accounts" */
export type AuthAccountsMinOrderBy = {
  created_at?: Maybe<OrderBy>;
  default_role?: Maybe<OrderBy>;
  email?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  new_email?: Maybe<OrderBy>;
  otp_secret?: Maybe<OrderBy>;
  password_hash?: Maybe<OrderBy>;
  ticket?: Maybe<OrderBy>;
  ticket_expires_at?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "auth.accounts" */
export type AuthAccountsMutationResponse = {
  __typename?: 'auth_accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthAccounts>;
};

/** input type for inserting object relation for remote table "auth.accounts" */
export type AuthAccountsObjRelInsertInput = {
  data: AuthAccountsInsertInput;
  /** on conflict condition */
  on_conflict?: Maybe<AuthAccountsOnConflict>;
};

/** on conflict condition type for table "auth.accounts" */
export type AuthAccountsOnConflict = {
  constraint: AuthAccountsConstraint;
  update_columns?: Array<AuthAccountsUpdateColumn>;
  where?: Maybe<AuthAccountsBoolExp>;
};

/** Ordering options when selecting data from "auth.accounts". */
export type AuthAccountsOrderBy = {
  account_providers_aggregate?: Maybe<AuthAccountProvidersAggregateOrderBy>;
  account_roles_aggregate?: Maybe<AuthAccountRolesAggregateOrderBy>;
  active?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  custom_register_data?: Maybe<OrderBy>;
  default_role?: Maybe<OrderBy>;
  email?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  is_anonymous?: Maybe<OrderBy>;
  mfa_enabled?: Maybe<OrderBy>;
  new_email?: Maybe<OrderBy>;
  otp_secret?: Maybe<OrderBy>;
  password_hash?: Maybe<OrderBy>;
  refresh_tokens_aggregate?: Maybe<AuthRefreshTokensAggregateOrderBy>;
  role?: Maybe<AuthRolesOrderBy>;
  ticket?: Maybe<OrderBy>;
  ticket_expires_at?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  user?: Maybe<UsersOrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: auth_accounts */
export type AuthAccountsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthAccountsPrependInput = {
  custom_register_data?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "auth.accounts" */
export enum AuthAccountsSelectColumn {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomRegisterData = 'custom_register_data',
  /** column name */
  DefaultRole = 'default_role',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'is_anonymous',
  /** column name */
  MfaEnabled = 'mfa_enabled',
  /** column name */
  NewEmail = 'new_email',
  /** column name */
  OtpSecret = 'otp_secret',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticket_expires_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "auth.accounts" */
export type AuthAccountsSetInput = {
  active?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  custom_register_data?: Maybe<Scalars['jsonb']>;
  default_role?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  is_anonymous?: Maybe<Scalars['Boolean']>;
  mfa_enabled?: Maybe<Scalars['Boolean']>;
  new_email?: Maybe<Scalars['citext']>;
  otp_secret?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['uuid']>;
  ticket_expires_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "auth.accounts" */
export enum AuthAccountsUpdateColumn {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomRegisterData = 'custom_register_data',
  /** column name */
  DefaultRole = 'default_role',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'is_anonymous',
  /** column name */
  MfaEnabled = 'mfa_enabled',
  /** column name */
  NewEmail = 'new_email',
  /** column name */
  OtpSecret = 'otp_secret',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticket_expires_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "auth.providers" */
export type AuthProviders = {
  __typename?: 'auth_providers';
  /** An array relationship */
  account_providers: Array<AuthAccountProviders>;
  /** An aggregate relationship */
  account_providers_aggregate: AuthAccountProvidersAggregate;
  provider: Scalars['String'];
};


/** columns and relationships of "auth.providers" */
export type AuthProvidersAccountProvidersArgs = {
  distinct_on?: Maybe<Array<AuthAccountProvidersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthAccountProvidersOrderBy>>;
  where?: Maybe<AuthAccountProvidersBoolExp>;
};


/** columns and relationships of "auth.providers" */
export type AuthProvidersAccountProvidersAggregateArgs = {
  distinct_on?: Maybe<Array<AuthAccountProvidersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthAccountProvidersOrderBy>>;
  where?: Maybe<AuthAccountProvidersBoolExp>;
};

/** aggregated selection of "auth.providers" */
export type AuthProvidersAggregate = {
  __typename?: 'auth_providers_aggregate';
  aggregate?: Maybe<AuthProvidersAggregateFields>;
  nodes: Array<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProvidersAggregateFields = {
  __typename?: 'auth_providers_aggregate_fields';
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
  account_providers?: Maybe<AuthAccountProvidersBoolExp>;
  provider?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProvidersConstraint {
  /** unique or primary key constraint */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type AuthProvidersInsertInput = {
  account_providers?: Maybe<AuthAccountProvidersArrRelInsertInput>;
  provider?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type AuthProvidersMaxFields = {
  __typename?: 'auth_providers_max_fields';
  provider?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthProvidersMinFields = {
  __typename?: 'auth_providers_min_fields';
  provider?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProvidersMutationResponse = {
  __typename?: 'auth_providers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProvidersObjRelInsertInput = {
  data: AuthProvidersInsertInput;
  /** on conflict condition */
  on_conflict?: Maybe<AuthProvidersOnConflict>;
};

/** on conflict condition type for table "auth.providers" */
export type AuthProvidersOnConflict = {
  constraint: AuthProvidersConstraint;
  update_columns?: Array<AuthProvidersUpdateColumn>;
  where?: Maybe<AuthProvidersBoolExp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProvidersOrderBy = {
  account_providers_aggregate?: Maybe<AuthAccountProvidersAggregateOrderBy>;
  provider?: Maybe<OrderBy>;
};

/** primary key columns input for table: auth_providers */
export type AuthProvidersPkColumnsInput = {
  provider: Scalars['String'];
};

/** select columns of table "auth.providers" */
export enum AuthProvidersSelectColumn {
  /** column name */
  Provider = 'provider'
}

/** input type for updating data in table "auth.providers" */
export type AuthProvidersSetInput = {
  provider?: Maybe<Scalars['String']>;
};

/** update columns of table "auth.providers" */
export enum AuthProvidersUpdateColumn {
  /** column name */
  Provider = 'provider'
}

/** columns and relationships of "auth.refresh_tokens" */
export type AuthRefreshTokens = {
  __typename?: 'auth_refresh_tokens';
  /** An object relationship */
  account: AuthAccounts;
  account_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  expires_at: Scalars['timestamptz'];
  refresh_token: Scalars['uuid'];
};

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokensAggregate = {
  __typename?: 'auth_refresh_tokens_aggregate';
  aggregate?: Maybe<AuthRefreshTokensAggregateFields>;
  nodes: Array<AuthRefreshTokens>;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokensAggregateFields = {
  __typename?: 'auth_refresh_tokens_aggregate_fields';
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
  /** on conflict condition */
  on_conflict?: Maybe<AuthRefreshTokensOnConflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokensBoolExp = {
  _and?: Maybe<Array<AuthRefreshTokensBoolExp>>;
  _not?: Maybe<AuthRefreshTokensBoolExp>;
  _or?: Maybe<Array<AuthRefreshTokensBoolExp>>;
  account?: Maybe<AuthAccountsBoolExp>;
  account_id?: Maybe<UuidComparisonExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  expires_at?: Maybe<TimestamptzComparisonExp>;
  refresh_token?: Maybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokensConstraint {
  /** unique or primary key constraint */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokensInsertInput = {
  account?: Maybe<AuthAccountsObjRelInsertInput>;
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthRefreshTokensMaxFields = {
  __typename?: 'auth_refresh_tokens_max_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokensMaxOrderBy = {
  account_id?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  expires_at?: Maybe<OrderBy>;
  refresh_token?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type AuthRefreshTokensMinFields = {
  __typename?: 'auth_refresh_tokens_min_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokensMinOrderBy = {
  account_id?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  expires_at?: Maybe<OrderBy>;
  refresh_token?: Maybe<OrderBy>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokensMutationResponse = {
  __typename?: 'auth_refresh_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>;
};

/** on conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokensOnConflict = {
  constraint: AuthRefreshTokensConstraint;
  update_columns?: Array<AuthRefreshTokensUpdateColumn>;
  where?: Maybe<AuthRefreshTokensBoolExp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokensOrderBy = {
  account?: Maybe<AuthAccountsOrderBy>;
  account_id?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  expires_at?: Maybe<OrderBy>;
  refresh_token?: Maybe<OrderBy>;
};

/** primary key columns input for table: auth_refresh_tokens */
export type AuthRefreshTokensPkColumnsInput = {
  refresh_token: Scalars['uuid'];
};

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokensSelectColumn {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  RefreshToken = 'refresh_token'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokensSetInput = {
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokensUpdateColumn {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  RefreshToken = 'refresh_token'
}

/** columns and relationships of "auth.roles" */
export type AuthRoles = {
  __typename?: 'auth_roles';
  /** An array relationship */
  account_roles: Array<AuthAccountRoles>;
  /** An aggregate relationship */
  account_roles_aggregate: AuthAccountRolesAggregate;
  /** An array relationship */
  accounts: Array<AuthAccounts>;
  /** An aggregate relationship */
  accounts_aggregate: AuthAccountsAggregate;
  role: Scalars['String'];
};


/** columns and relationships of "auth.roles" */
export type AuthRolesAccountRolesArgs = {
  distinct_on?: Maybe<Array<AuthAccountRolesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthAccountRolesOrderBy>>;
  where?: Maybe<AuthAccountRolesBoolExp>;
};


/** columns and relationships of "auth.roles" */
export type AuthRolesAccountRolesAggregateArgs = {
  distinct_on?: Maybe<Array<AuthAccountRolesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthAccountRolesOrderBy>>;
  where?: Maybe<AuthAccountRolesBoolExp>;
};


/** columns and relationships of "auth.roles" */
export type AuthRolesAccountsArgs = {
  distinct_on?: Maybe<Array<AuthAccountsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthAccountsOrderBy>>;
  where?: Maybe<AuthAccountsBoolExp>;
};


/** columns and relationships of "auth.roles" */
export type AuthRolesAccountsAggregateArgs = {
  distinct_on?: Maybe<Array<AuthAccountsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthAccountsOrderBy>>;
  where?: Maybe<AuthAccountsBoolExp>;
};

/** aggregated selection of "auth.roles" */
export type AuthRolesAggregate = {
  __typename?: 'auth_roles_aggregate';
  aggregate?: Maybe<AuthRolesAggregateFields>;
  nodes: Array<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRolesAggregateFields = {
  __typename?: 'auth_roles_aggregate_fields';
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
  account_roles?: Maybe<AuthAccountRolesBoolExp>;
  accounts?: Maybe<AuthAccountsBoolExp>;
  role?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRolesConstraint {
  /** unique or primary key constraint */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type AuthRolesInsertInput = {
  account_roles?: Maybe<AuthAccountRolesArrRelInsertInput>;
  accounts?: Maybe<AuthAccountsArrRelInsertInput>;
  role?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type AuthRolesMaxFields = {
  __typename?: 'auth_roles_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthRolesMinFields = {
  __typename?: 'auth_roles_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRolesMutationResponse = {
  __typename?: 'auth_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRolesObjRelInsertInput = {
  data: AuthRolesInsertInput;
  /** on conflict condition */
  on_conflict?: Maybe<AuthRolesOnConflict>;
};

/** on conflict condition type for table "auth.roles" */
export type AuthRolesOnConflict = {
  constraint: AuthRolesConstraint;
  update_columns?: Array<AuthRolesUpdateColumn>;
  where?: Maybe<AuthRolesBoolExp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRolesOrderBy = {
  account_roles_aggregate?: Maybe<AuthAccountRolesAggregateOrderBy>;
  accounts_aggregate?: Maybe<AuthAccountsAggregateOrderBy>;
  role?: Maybe<OrderBy>;
};

/** primary key columns input for table: auth_roles */
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
  author_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  comment?: Maybe<Comments>;
  /** fetch data from the table: "comments" */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: CommentsAggregate;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  meta?: Maybe<Scalars['jsonb']>;
  parent_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  post: Posts;
  post_id: Scalars['uuid'];
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
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
  /** on conflict condition */
  on_conflict?: Maybe<CommentsOnConflict>;
};

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export type CommentsBoolExp = {
  _and?: Maybe<Array<CommentsBoolExp>>;
  _not?: Maybe<CommentsBoolExp>;
  _or?: Maybe<Array<CommentsBoolExp>>;
  author_id?: Maybe<UuidComparisonExp>;
  comment?: Maybe<CommentsBoolExp>;
  comments?: Maybe<CommentsBoolExp>;
  content?: Maybe<StringComparisonExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  meta?: Maybe<JsonbComparisonExp>;
  parent_id?: Maybe<UuidComparisonExp>;
  post?: Maybe<PostsBoolExp>;
  post_id?: Maybe<UuidComparisonExp>;
  status?: Maybe<StringComparisonExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "comments" */
export enum CommentsConstraint {
  /** unique or primary key constraint */
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
  author_id?: Maybe<Scalars['uuid']>;
  comment?: Maybe<CommentsObjRelInsertInput>;
  comments?: Maybe<CommentsArrRelInsertInput>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['jsonb']>;
  parent_id?: Maybe<Scalars['uuid']>;
  post?: Maybe<PostsObjRelInsertInput>;
  post_id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type CommentsMaxFields = {
  __typename?: 'comments_max_fields';
  author_id?: Maybe<Scalars['uuid']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  parent_id?: Maybe<Scalars['uuid']>;
  post_id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "comments" */
export type CommentsMaxOrderBy = {
  author_id?: Maybe<OrderBy>;
  content?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  parent_id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type CommentsMinFields = {
  __typename?: 'comments_min_fields';
  author_id?: Maybe<Scalars['uuid']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  parent_id?: Maybe<Scalars['uuid']>;
  post_id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "comments" */
export type CommentsMinOrderBy = {
  author_id?: Maybe<OrderBy>;
  content?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  parent_id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
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
  /** on conflict condition */
  on_conflict?: Maybe<CommentsOnConflict>;
};

/** on conflict condition type for table "comments" */
export type CommentsOnConflict = {
  constraint: CommentsConstraint;
  update_columns?: Array<CommentsUpdateColumn>;
  where?: Maybe<CommentsBoolExp>;
};

/** Ordering options when selecting data from "comments". */
export type CommentsOrderBy = {
  author_id?: Maybe<OrderBy>;
  comment?: Maybe<CommentsOrderBy>;
  comments_aggregate?: Maybe<CommentsAggregateOrderBy>;
  content?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  meta?: Maybe<OrderBy>;
  parent_id?: Maybe<OrderBy>;
  post?: Maybe<PostsOrderBy>;
  post_id?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
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
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "comments" */
export type CommentsSetInput = {
  author_id?: Maybe<Scalars['uuid']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['jsonb']>;
  parent_id?: Maybe<Scalars['uuid']>;
  post_id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "comments" */
export enum CommentsUpdateColumn {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}


/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type JsonbComparisonExp = {
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
  /** delete data from the table: "auth.account_providers" */
  delete_auth_account_providers?: Maybe<AuthAccountProvidersMutationResponse>;
  /** delete single row from the table: "auth.account_providers" */
  delete_auth_account_providers_by_pk?: Maybe<AuthAccountProviders>;
  /** delete data from the table: "auth.account_roles" */
  delete_auth_account_roles?: Maybe<AuthAccountRolesMutationResponse>;
  /** delete single row from the table: "auth.account_roles" */
  delete_auth_account_roles_by_pk?: Maybe<AuthAccountRoles>;
  /** delete data from the table: "auth.accounts" */
  delete_auth_accounts?: Maybe<AuthAccountsMutationResponse>;
  /** delete single row from the table: "auth.accounts" */
  delete_auth_accounts_by_pk?: Maybe<AuthAccounts>;
  /** delete data from the table: "auth.providers" */
  delete_auth_providers?: Maybe<AuthProvidersMutationResponse>;
  /** delete single row from the table: "auth.providers" */
  delete_auth_providers_by_pk?: Maybe<AuthProviders>;
  /** delete data from the table: "auth.refresh_tokens" */
  delete_auth_refresh_tokens?: Maybe<AuthRefreshTokensMutationResponse>;
  /** delete single row from the table: "auth.refresh_tokens" */
  delete_auth_refresh_tokens_by_pk?: Maybe<AuthRefreshTokens>;
  /** delete data from the table: "auth.roles" */
  delete_auth_roles?: Maybe<AuthRolesMutationResponse>;
  /** delete single row from the table: "auth.roles" */
  delete_auth_roles_by_pk?: Maybe<AuthRoles>;
  /** delete data from the table: "comments" */
  delete_comments?: Maybe<CommentsMutationResponse>;
  /** delete single row from the table: "comments" */
  delete_comments_by_pk?: Maybe<Comments>;
  /** delete data from the table: "post_states" */
  delete_post_states?: Maybe<PostStatesMutationResponse>;
  /** delete single row from the table: "post_states" */
  delete_post_states_by_pk?: Maybe<PostStates>;
  /** delete data from the table: "post_types" */
  delete_post_types?: Maybe<PostTypesMutationResponse>;
  /** delete single row from the table: "post_types" */
  delete_post_types_by_pk?: Maybe<PostTypes>;
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<PostsMutationResponse>;
  /** delete single row from the table: "posts" */
  delete_posts_by_pk?: Maybe<Posts>;
  /** delete data from the table: "taxonomies" */
  delete_taxonomies?: Maybe<TaxonomiesMutationResponse>;
  /** delete single row from the table: "taxonomies" */
  delete_taxonomies_by_pk?: Maybe<Taxonomies>;
  /** delete data from the table: "term_relationships" */
  delete_term_relationships?: Maybe<TermRelationshipsMutationResponse>;
  /** delete single row from the table: "term_relationships" */
  delete_term_relationships_by_pk?: Maybe<TermRelationships>;
  /** delete data from the table: "term_taxonomies" */
  delete_term_taxonomies?: Maybe<TermTaxonomiesMutationResponse>;
  /** delete single row from the table: "term_taxonomies" */
  delete_term_taxonomies_by_pk?: Maybe<TermTaxonomies>;
  /** delete data from the table: "terms" */
  delete_terms?: Maybe<TermsMutationResponse>;
  /** delete single row from the table: "terms" */
  delete_terms_by_pk?: Maybe<Terms>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<UsersMutationResponse>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "auth.account_providers" */
  insert_auth_account_providers?: Maybe<AuthAccountProvidersMutationResponse>;
  /** insert a single row into the table: "auth.account_providers" */
  insert_auth_account_providers_one?: Maybe<AuthAccountProviders>;
  /** insert data into the table: "auth.account_roles" */
  insert_auth_account_roles?: Maybe<AuthAccountRolesMutationResponse>;
  /** insert a single row into the table: "auth.account_roles" */
  insert_auth_account_roles_one?: Maybe<AuthAccountRoles>;
  /** insert data into the table: "auth.accounts" */
  insert_auth_accounts?: Maybe<AuthAccountsMutationResponse>;
  /** insert a single row into the table: "auth.accounts" */
  insert_auth_accounts_one?: Maybe<AuthAccounts>;
  /** insert data into the table: "auth.providers" */
  insert_auth_providers?: Maybe<AuthProvidersMutationResponse>;
  /** insert a single row into the table: "auth.providers" */
  insert_auth_providers_one?: Maybe<AuthProviders>;
  /** insert data into the table: "auth.refresh_tokens" */
  insert_auth_refresh_tokens?: Maybe<AuthRefreshTokensMutationResponse>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insert_auth_refresh_tokens_one?: Maybe<AuthRefreshTokens>;
  /** insert data into the table: "auth.roles" */
  insert_auth_roles?: Maybe<AuthRolesMutationResponse>;
  /** insert a single row into the table: "auth.roles" */
  insert_auth_roles_one?: Maybe<AuthRoles>;
  /** insert data into the table: "comments" */
  insert_comments?: Maybe<CommentsMutationResponse>;
  /** insert a single row into the table: "comments" */
  insert_comments_one?: Maybe<Comments>;
  /** insert data into the table: "post_states" */
  insert_post_states?: Maybe<PostStatesMutationResponse>;
  /** insert a single row into the table: "post_states" */
  insert_post_states_one?: Maybe<PostStates>;
  /** insert data into the table: "post_types" */
  insert_post_types?: Maybe<PostTypesMutationResponse>;
  /** insert a single row into the table: "post_types" */
  insert_post_types_one?: Maybe<PostTypes>;
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<PostsMutationResponse>;
  /** insert a single row into the table: "posts" */
  insert_posts_one?: Maybe<Posts>;
  /** insert data into the table: "taxonomies" */
  insert_taxonomies?: Maybe<TaxonomiesMutationResponse>;
  /** insert a single row into the table: "taxonomies" */
  insert_taxonomies_one?: Maybe<Taxonomies>;
  /** insert data into the table: "term_relationships" */
  insert_term_relationships?: Maybe<TermRelationshipsMutationResponse>;
  /** insert a single row into the table: "term_relationships" */
  insert_term_relationships_one?: Maybe<TermRelationships>;
  /** insert data into the table: "term_taxonomies" */
  insert_term_taxonomies?: Maybe<TermTaxonomiesMutationResponse>;
  /** insert a single row into the table: "term_taxonomies" */
  insert_term_taxonomies_one?: Maybe<TermTaxonomies>;
  /** insert data into the table: "terms" */
  insert_terms?: Maybe<TermsMutationResponse>;
  /** insert a single row into the table: "terms" */
  insert_terms_one?: Maybe<Terms>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "auth.account_providers" */
  update_auth_account_providers?: Maybe<AuthAccountProvidersMutationResponse>;
  /** update single row of the table: "auth.account_providers" */
  update_auth_account_providers_by_pk?: Maybe<AuthAccountProviders>;
  /** update data of the table: "auth.account_roles" */
  update_auth_account_roles?: Maybe<AuthAccountRolesMutationResponse>;
  /** update single row of the table: "auth.account_roles" */
  update_auth_account_roles_by_pk?: Maybe<AuthAccountRoles>;
  /** update data of the table: "auth.accounts" */
  update_auth_accounts?: Maybe<AuthAccountsMutationResponse>;
  /** update single row of the table: "auth.accounts" */
  update_auth_accounts_by_pk?: Maybe<AuthAccounts>;
  /** update data of the table: "auth.providers" */
  update_auth_providers?: Maybe<AuthProvidersMutationResponse>;
  /** update single row of the table: "auth.providers" */
  update_auth_providers_by_pk?: Maybe<AuthProviders>;
  /** update data of the table: "auth.refresh_tokens" */
  update_auth_refresh_tokens?: Maybe<AuthRefreshTokensMutationResponse>;
  /** update single row of the table: "auth.refresh_tokens" */
  update_auth_refresh_tokens_by_pk?: Maybe<AuthRefreshTokens>;
  /** update data of the table: "auth.roles" */
  update_auth_roles?: Maybe<AuthRolesMutationResponse>;
  /** update single row of the table: "auth.roles" */
  update_auth_roles_by_pk?: Maybe<AuthRoles>;
  /** update data of the table: "comments" */
  update_comments?: Maybe<CommentsMutationResponse>;
  /** update single row of the table: "comments" */
  update_comments_by_pk?: Maybe<Comments>;
  /** update data of the table: "post_states" */
  update_post_states?: Maybe<PostStatesMutationResponse>;
  /** update single row of the table: "post_states" */
  update_post_states_by_pk?: Maybe<PostStates>;
  /** update data of the table: "post_types" */
  update_post_types?: Maybe<PostTypesMutationResponse>;
  /** update single row of the table: "post_types" */
  update_post_types_by_pk?: Maybe<PostTypes>;
  /** update data of the table: "posts" */
  update_posts?: Maybe<PostsMutationResponse>;
  /** update single row of the table: "posts" */
  update_posts_by_pk?: Maybe<Posts>;
  /** update data of the table: "taxonomies" */
  update_taxonomies?: Maybe<TaxonomiesMutationResponse>;
  /** update single row of the table: "taxonomies" */
  update_taxonomies_by_pk?: Maybe<Taxonomies>;
  /** update data of the table: "term_relationships" */
  update_term_relationships?: Maybe<TermRelationshipsMutationResponse>;
  /** update single row of the table: "term_relationships" */
  update_term_relationships_by_pk?: Maybe<TermRelationships>;
  /** update data of the table: "term_taxonomies" */
  update_term_taxonomies?: Maybe<TermTaxonomiesMutationResponse>;
  /** update single row of the table: "term_taxonomies" */
  update_term_taxonomies_by_pk?: Maybe<TermTaxonomies>;
  /** update data of the table: "terms" */
  update_terms?: Maybe<TermsMutationResponse>;
  /** update single row of the table: "terms" */
  update_terms_by_pk?: Maybe<Terms>;
  /** update data of the table: "users" */
  update_users?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type MutationRootDeleteAuthAccountProvidersArgs = {
  where: AuthAccountProvidersBoolExp;
};


/** mutation root */
export type MutationRootDeleteAuthAccountProvidersByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteAuthAccountRolesArgs = {
  where: AuthAccountRolesBoolExp;
};


/** mutation root */
export type MutationRootDeleteAuthAccountRolesByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteAuthAccountsArgs = {
  where: AuthAccountsBoolExp;
};


/** mutation root */
export type MutationRootDeleteAuthAccountsByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteAuthProvidersArgs = {
  where: AuthProvidersBoolExp;
};


/** mutation root */
export type MutationRootDeleteAuthProvidersByPkArgs = {
  provider: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokensBoolExp;
};


/** mutation root */
export type MutationRootDeleteAuthRefreshTokensByPkArgs = {
  refresh_token: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteAuthRolesArgs = {
  where: AuthRolesBoolExp;
};


/** mutation root */
export type MutationRootDeleteAuthRolesByPkArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteCommentsArgs = {
  where: CommentsBoolExp;
};


/** mutation root */
export type MutationRootDeleteCommentsByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeletePostStatesArgs = {
  where: PostStatesBoolExp;
};


/** mutation root */
export type MutationRootDeletePostStatesByPkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type MutationRootDeletePostTypesArgs = {
  where: PostTypesBoolExp;
};


/** mutation root */
export type MutationRootDeletePostTypesByPkArgs = {
  value: PostTypesEnum;
};


/** mutation root */
export type MutationRootDeletePostsArgs = {
  where: PostsBoolExp;
};


/** mutation root */
export type MutationRootDeletePostsByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteTaxonomiesArgs = {
  where: TaxonomiesBoolExp;
};


/** mutation root */
export type MutationRootDeleteTaxonomiesByPkArgs = {
  taxonomy: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteTermRelationshipsArgs = {
  where: TermRelationshipsBoolExp;
};


/** mutation root */
export type MutationRootDeleteTermRelationshipsByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteTermTaxonomiesArgs = {
  where: TermTaxonomiesBoolExp;
};


/** mutation root */
export type MutationRootDeleteTermTaxonomiesByPkArgs = {
  term_slug: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteTermsArgs = {
  where: TermsBoolExp;
};


/** mutation root */
export type MutationRootDeleteTermsByPkArgs = {
  slug: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteUsersArgs = {
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootDeleteUsersByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootInsertAuthAccountProvidersArgs = {
  objects: Array<AuthAccountProvidersInsertInput>;
  on_conflict?: Maybe<AuthAccountProvidersOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthAccountProvidersOneArgs = {
  object: AuthAccountProvidersInsertInput;
  on_conflict?: Maybe<AuthAccountProvidersOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthAccountRolesArgs = {
  objects: Array<AuthAccountRolesInsertInput>;
  on_conflict?: Maybe<AuthAccountRolesOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthAccountRolesOneArgs = {
  object: AuthAccountRolesInsertInput;
  on_conflict?: Maybe<AuthAccountRolesOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthAccountsArgs = {
  objects: Array<AuthAccountsInsertInput>;
  on_conflict?: Maybe<AuthAccountsOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthAccountsOneArgs = {
  object: AuthAccountsInsertInput;
  on_conflict?: Maybe<AuthAccountsOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthProvidersArgs = {
  objects: Array<AuthProvidersInsertInput>;
  on_conflict?: Maybe<AuthProvidersOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthProvidersOneArgs = {
  object: AuthProvidersInsertInput;
  on_conflict?: Maybe<AuthProvidersOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthRefreshTokensArgs = {
  objects: Array<AuthRefreshTokensInsertInput>;
  on_conflict?: Maybe<AuthRefreshTokensOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthRefreshTokensOneArgs = {
  object: AuthRefreshTokensInsertInput;
  on_conflict?: Maybe<AuthRefreshTokensOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthRolesArgs = {
  objects: Array<AuthRolesInsertInput>;
  on_conflict?: Maybe<AuthRolesOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthRolesOneArgs = {
  object: AuthRolesInsertInput;
  on_conflict?: Maybe<AuthRolesOnConflict>;
};


/** mutation root */
export type MutationRootInsertCommentsArgs = {
  objects: Array<CommentsInsertInput>;
  on_conflict?: Maybe<CommentsOnConflict>;
};


/** mutation root */
export type MutationRootInsertCommentsOneArgs = {
  object: CommentsInsertInput;
  on_conflict?: Maybe<CommentsOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostStatesArgs = {
  objects: Array<PostStatesInsertInput>;
  on_conflict?: Maybe<PostStatesOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostStatesOneArgs = {
  object: PostStatesInsertInput;
  on_conflict?: Maybe<PostStatesOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostTypesArgs = {
  objects: Array<PostTypesInsertInput>;
  on_conflict?: Maybe<PostTypesOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostTypesOneArgs = {
  object: PostTypesInsertInput;
  on_conflict?: Maybe<PostTypesOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostsArgs = {
  objects: Array<PostsInsertInput>;
  on_conflict?: Maybe<PostsOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostsOneArgs = {
  object: PostsInsertInput;
  on_conflict?: Maybe<PostsOnConflict>;
};


/** mutation root */
export type MutationRootInsertTaxonomiesArgs = {
  objects: Array<TaxonomiesInsertInput>;
  on_conflict?: Maybe<TaxonomiesOnConflict>;
};


/** mutation root */
export type MutationRootInsertTaxonomiesOneArgs = {
  object: TaxonomiesInsertInput;
  on_conflict?: Maybe<TaxonomiesOnConflict>;
};


/** mutation root */
export type MutationRootInsertTermRelationshipsArgs = {
  objects: Array<TermRelationshipsInsertInput>;
  on_conflict?: Maybe<TermRelationshipsOnConflict>;
};


/** mutation root */
export type MutationRootInsertTermRelationshipsOneArgs = {
  object: TermRelationshipsInsertInput;
  on_conflict?: Maybe<TermRelationshipsOnConflict>;
};


/** mutation root */
export type MutationRootInsertTermTaxonomiesArgs = {
  objects: Array<TermTaxonomiesInsertInput>;
  on_conflict?: Maybe<TermTaxonomiesOnConflict>;
};


/** mutation root */
export type MutationRootInsertTermTaxonomiesOneArgs = {
  object: TermTaxonomiesInsertInput;
  on_conflict?: Maybe<TermTaxonomiesOnConflict>;
};


/** mutation root */
export type MutationRootInsertTermsArgs = {
  objects: Array<TermsInsertInput>;
  on_conflict?: Maybe<TermsOnConflict>;
};


/** mutation root */
export type MutationRootInsertTermsOneArgs = {
  object: TermsInsertInput;
  on_conflict?: Maybe<TermsOnConflict>;
};


/** mutation root */
export type MutationRootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  on_conflict?: Maybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootInsertUsersOneArgs = {
  object: UsersInsertInput;
  on_conflict?: Maybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootUpdateAuthAccountProvidersArgs = {
  _set?: Maybe<AuthAccountProvidersSetInput>;
  where: AuthAccountProvidersBoolExp;
};


/** mutation root */
export type MutationRootUpdateAuthAccountProvidersByPkArgs = {
  _set?: Maybe<AuthAccountProvidersSetInput>;
  pk_columns: AuthAccountProvidersPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateAuthAccountRolesArgs = {
  _set?: Maybe<AuthAccountRolesSetInput>;
  where: AuthAccountRolesBoolExp;
};


/** mutation root */
export type MutationRootUpdateAuthAccountRolesByPkArgs = {
  _set?: Maybe<AuthAccountRolesSetInput>;
  pk_columns: AuthAccountRolesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateAuthAccountsArgs = {
  _append?: Maybe<AuthAccountsAppendInput>;
  _delete_at_path?: Maybe<AuthAccountsDeleteAtPathInput>;
  _delete_elem?: Maybe<AuthAccountsDeleteElemInput>;
  _delete_key?: Maybe<AuthAccountsDeleteKeyInput>;
  _prepend?: Maybe<AuthAccountsPrependInput>;
  _set?: Maybe<AuthAccountsSetInput>;
  where: AuthAccountsBoolExp;
};


/** mutation root */
export type MutationRootUpdateAuthAccountsByPkArgs = {
  _append?: Maybe<AuthAccountsAppendInput>;
  _delete_at_path?: Maybe<AuthAccountsDeleteAtPathInput>;
  _delete_elem?: Maybe<AuthAccountsDeleteElemInput>;
  _delete_key?: Maybe<AuthAccountsDeleteKeyInput>;
  _prepend?: Maybe<AuthAccountsPrependInput>;
  _set?: Maybe<AuthAccountsSetInput>;
  pk_columns: AuthAccountsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateAuthProvidersArgs = {
  _set?: Maybe<AuthProvidersSetInput>;
  where: AuthProvidersBoolExp;
};


/** mutation root */
export type MutationRootUpdateAuthProvidersByPkArgs = {
  _set?: Maybe<AuthProvidersSetInput>;
  pk_columns: AuthProvidersPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateAuthRefreshTokensArgs = {
  _set?: Maybe<AuthRefreshTokensSetInput>;
  where: AuthRefreshTokensBoolExp;
};


/** mutation root */
export type MutationRootUpdateAuthRefreshTokensByPkArgs = {
  _set?: Maybe<AuthRefreshTokensSetInput>;
  pk_columns: AuthRefreshTokensPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateAuthRolesArgs = {
  _set?: Maybe<AuthRolesSetInput>;
  where: AuthRolesBoolExp;
};


/** mutation root */
export type MutationRootUpdateAuthRolesByPkArgs = {
  _set?: Maybe<AuthRolesSetInput>;
  pk_columns: AuthRolesPkColumnsInput;
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
export type MutationRootUpdateCommentsByPkArgs = {
  _append?: Maybe<CommentsAppendInput>;
  _delete_at_path?: Maybe<CommentsDeleteAtPathInput>;
  _delete_elem?: Maybe<CommentsDeleteElemInput>;
  _delete_key?: Maybe<CommentsDeleteKeyInput>;
  _prepend?: Maybe<CommentsPrependInput>;
  _set?: Maybe<CommentsSetInput>;
  pk_columns: CommentsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdatePostStatesArgs = {
  _set?: Maybe<PostStatesSetInput>;
  where: PostStatesBoolExp;
};


/** mutation root */
export type MutationRootUpdatePostStatesByPkArgs = {
  _set?: Maybe<PostStatesSetInput>;
  pk_columns: PostStatesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdatePostTypesArgs = {
  _set?: Maybe<PostTypesSetInput>;
  where: PostTypesBoolExp;
};


/** mutation root */
export type MutationRootUpdatePostTypesByPkArgs = {
  _set?: Maybe<PostTypesSetInput>;
  pk_columns: PostTypesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdatePostsArgs = {
  _append?: Maybe<PostsAppendInput>;
  _delete_at_path?: Maybe<PostsDeleteAtPathInput>;
  _delete_elem?: Maybe<PostsDeleteElemInput>;
  _delete_key?: Maybe<PostsDeleteKeyInput>;
  _prepend?: Maybe<PostsPrependInput>;
  _set?: Maybe<PostsSetInput>;
  where: PostsBoolExp;
};


/** mutation root */
export type MutationRootUpdatePostsByPkArgs = {
  _append?: Maybe<PostsAppendInput>;
  _delete_at_path?: Maybe<PostsDeleteAtPathInput>;
  _delete_elem?: Maybe<PostsDeleteElemInput>;
  _delete_key?: Maybe<PostsDeleteKeyInput>;
  _prepend?: Maybe<PostsPrependInput>;
  _set?: Maybe<PostsSetInput>;
  pk_columns: PostsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateTaxonomiesArgs = {
  _set?: Maybe<TaxonomiesSetInput>;
  where: TaxonomiesBoolExp;
};


/** mutation root */
export type MutationRootUpdateTaxonomiesByPkArgs = {
  _set?: Maybe<TaxonomiesSetInput>;
  pk_columns: TaxonomiesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateTermRelationshipsArgs = {
  _set?: Maybe<TermRelationshipsSetInput>;
  where: TermRelationshipsBoolExp;
};


/** mutation root */
export type MutationRootUpdateTermRelationshipsByPkArgs = {
  _set?: Maybe<TermRelationshipsSetInput>;
  pk_columns: TermRelationshipsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateTermTaxonomiesArgs = {
  _set?: Maybe<TermTaxonomiesSetInput>;
  where: TermTaxonomiesBoolExp;
};


/** mutation root */
export type MutationRootUpdateTermTaxonomiesByPkArgs = {
  _set?: Maybe<TermTaxonomiesSetInput>;
  pk_columns: TermTaxonomiesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateTermsArgs = {
  _set?: Maybe<TermsSetInput>;
  where: TermsBoolExp;
};


/** mutation root */
export type MutationRootUpdateTermsByPkArgs = {
  _set?: Maybe<TermsSetInput>;
  pk_columns: TermsPkColumnsInput;
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
export type MutationRootUpdateUsersByPkArgs = {
  _append?: Maybe<UsersAppendInput>;
  _delete_at_path?: Maybe<UsersDeleteAtPathInput>;
  _delete_elem?: Maybe<UsersDeleteElemInput>;
  _delete_key?: Maybe<UsersDeleteKeyInput>;
  _prepend?: Maybe<UsersPrependInput>;
  _set?: Maybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
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

/** columns and relationships of "post_states" */
export type PostStates = {
  __typename?: 'post_states';
  comment: Scalars['String'];
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: PostsAggregate;
  value: Scalars['String'];
};


/** columns and relationships of "post_states" */
export type PostStatesPostsArgs = {
  distinct_on?: Maybe<Array<PostsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostsOrderBy>>;
  where?: Maybe<PostsBoolExp>;
};


/** columns and relationships of "post_states" */
export type PostStatesPostsAggregateArgs = {
  distinct_on?: Maybe<Array<PostsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostsOrderBy>>;
  where?: Maybe<PostsBoolExp>;
};

/** aggregated selection of "post_states" */
export type PostStatesAggregate = {
  __typename?: 'post_states_aggregate';
  aggregate?: Maybe<PostStatesAggregateFields>;
  nodes: Array<PostStates>;
};

/** aggregate fields of "post_states" */
export type PostStatesAggregateFields = {
  __typename?: 'post_states_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<PostStatesMaxFields>;
  min?: Maybe<PostStatesMinFields>;
};


/** aggregate fields of "post_states" */
export type PostStatesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<PostStatesSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "post_states". All fields are combined with a logical 'AND'. */
export type PostStatesBoolExp = {
  _and?: Maybe<Array<PostStatesBoolExp>>;
  _not?: Maybe<PostStatesBoolExp>;
  _or?: Maybe<Array<PostStatesBoolExp>>;
  comment?: Maybe<StringComparisonExp>;
  posts?: Maybe<PostsBoolExp>;
  value?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "post_states" */
export enum PostStatesConstraint {
  /** unique or primary key constraint */
  PostStatusPkey = 'post_status_pkey'
}

export enum PostStatesEnum {
  /** Archived */
  Archived = 'archived',
  /** Draft */
  Draft = 'draft',
  /** Published */
  Published = 'published'
}

/** Boolean expression to compare columns of type "post_states_enum". All fields are combined with logical 'AND'. */
export type PostStatesEnumComparisonExp = {
  _eq?: Maybe<PostStatesEnum>;
  _in?: Maybe<Array<PostStatesEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<PostStatesEnum>;
  _nin?: Maybe<Array<PostStatesEnum>>;
};

/** input type for inserting data into table "post_states" */
export type PostStatesInsertInput = {
  comment?: Maybe<Scalars['String']>;
  posts?: Maybe<PostsArrRelInsertInput>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type PostStatesMaxFields = {
  __typename?: 'post_states_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type PostStatesMinFields = {
  __typename?: 'post_states_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "post_states" */
export type PostStatesMutationResponse = {
  __typename?: 'post_states_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PostStates>;
};

/** input type for inserting object relation for remote table "post_states" */
export type PostStatesObjRelInsertInput = {
  data: PostStatesInsertInput;
  /** on conflict condition */
  on_conflict?: Maybe<PostStatesOnConflict>;
};

/** on conflict condition type for table "post_states" */
export type PostStatesOnConflict = {
  constraint: PostStatesConstraint;
  update_columns?: Array<PostStatesUpdateColumn>;
  where?: Maybe<PostStatesBoolExp>;
};

/** Ordering options when selecting data from "post_states". */
export type PostStatesOrderBy = {
  comment?: Maybe<OrderBy>;
  posts_aggregate?: Maybe<PostsAggregateOrderBy>;
  value?: Maybe<OrderBy>;
};

/** primary key columns input for table: post_states */
export type PostStatesPkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "post_states" */
export enum PostStatesSelectColumn {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "post_states" */
export type PostStatesSetInput = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "post_states" */
export enum PostStatesUpdateColumn {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "post_types" */
export type PostTypes = {
  __typename?: 'post_types';
  comment: Scalars['String'];
  /** An object relationship */
  postTypeByType?: Maybe<PostTypes>;
  /** An object relationship */
  post_type: PostTypes;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: PostsAggregate;
  value: PostTypesEnum;
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
  __typename?: 'post_types_aggregate';
  aggregate?: Maybe<PostTypesAggregateFields>;
  nodes: Array<PostTypes>;
};

/** aggregate fields of "post_types" */
export type PostTypesAggregateFields = {
  __typename?: 'post_types_aggregate_fields';
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
  comment?: Maybe<StringComparisonExp>;
  postTypeByType?: Maybe<PostTypesBoolExp>;
  post_type?: Maybe<PostTypesBoolExp>;
  posts?: Maybe<PostsBoolExp>;
  value?: Maybe<PostTypesEnumComparisonExp>;
};

/** unique or primary key constraints on table "post_types" */
export enum PostTypesConstraint {
  /** unique or primary key constraint */
  ObjectTypesPkey = 'object_types_pkey'
}

export enum PostTypesEnum {
  /** Page */
  Page = 'page',
  /** Post */
  Post = 'post'
}

/** Boolean expression to compare columns of type "post_types_enum". All fields are combined with logical 'AND'. */
export type PostTypesEnumComparisonExp = {
  _eq?: Maybe<PostTypesEnum>;
  _in?: Maybe<Array<PostTypesEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<PostTypesEnum>;
  _nin?: Maybe<Array<PostTypesEnum>>;
};

/** input type for inserting data into table "post_types" */
export type PostTypesInsertInput = {
  comment?: Maybe<Scalars['String']>;
  postTypeByType?: Maybe<PostTypesObjRelInsertInput>;
  post_type?: Maybe<PostTypesObjRelInsertInput>;
  posts?: Maybe<PostsArrRelInsertInput>;
  value?: Maybe<PostTypesEnum>;
};

/** aggregate max on columns */
export type PostTypesMaxFields = {
  __typename?: 'post_types_max_fields';
  comment?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type PostTypesMinFields = {
  __typename?: 'post_types_min_fields';
  comment?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "post_types" */
export type PostTypesMutationResponse = {
  __typename?: 'post_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PostTypes>;
};

/** input type for inserting object relation for remote table "post_types" */
export type PostTypesObjRelInsertInput = {
  data: PostTypesInsertInput;
  /** on conflict condition */
  on_conflict?: Maybe<PostTypesOnConflict>;
};

/** on conflict condition type for table "post_types" */
export type PostTypesOnConflict = {
  constraint: PostTypesConstraint;
  update_columns?: Array<PostTypesUpdateColumn>;
  where?: Maybe<PostTypesBoolExp>;
};

/** Ordering options when selecting data from "post_types". */
export type PostTypesOrderBy = {
  comment?: Maybe<OrderBy>;
  postTypeByType?: Maybe<PostTypesOrderBy>;
  post_type?: Maybe<PostTypesOrderBy>;
  posts_aggregate?: Maybe<PostsAggregateOrderBy>;
  value?: Maybe<OrderBy>;
};

/** primary key columns input for table: post_types */
export type PostTypesPkColumnsInput = {
  value: PostTypesEnum;
};

/** select columns of table "post_types" */
export enum PostTypesSelectColumn {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "post_types" */
export type PostTypesSetInput = {
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<PostTypesEnum>;
};

/** update columns of table "post_types" */
export enum PostTypesUpdateColumn {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "posts" */
export type Posts = {
  __typename?: 'posts';
  author_id?: Maybe<Scalars['uuid']>;
  body?: Maybe<Scalars['String']>;
  /** fetch data from the table: "comments" */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: CommentsAggregate;
  created_at?: Maybe<Scalars['timestamptz']>;
  excerpt?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  meta?: Maybe<Scalars['jsonb']>;
  /** An object relationship */
  post_state: PostStates;
  /** An object relationship */
  post_type?: Maybe<PostTypes>;
  slug: Scalars['String'];
  state: PostStatesEnum;
  title: Scalars['String'];
  type?: Maybe<PostTypesEnum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
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
export type PostsMetaArgs = {
  path?: Maybe<Scalars['String']>;
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

/** append existing jsonb value of filtered columns with new jsonb value */
export type PostsAppendInput = {
  meta?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "posts" */
export type PostsArrRelInsertInput = {
  data: Array<PostsInsertInput>;
  /** on conflict condition */
  on_conflict?: Maybe<PostsOnConflict>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type PostsBoolExp = {
  _and?: Maybe<Array<PostsBoolExp>>;
  _not?: Maybe<PostsBoolExp>;
  _or?: Maybe<Array<PostsBoolExp>>;
  author_id?: Maybe<UuidComparisonExp>;
  body?: Maybe<StringComparisonExp>;
  comments?: Maybe<CommentsBoolExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  excerpt?: Maybe<StringComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  meta?: Maybe<JsonbComparisonExp>;
  post_state?: Maybe<PostStatesBoolExp>;
  post_type?: Maybe<PostTypesBoolExp>;
  slug?: Maybe<StringComparisonExp>;
  state?: Maybe<PostStatesEnumComparisonExp>;
  title?: Maybe<StringComparisonExp>;
  type?: Maybe<PostTypesEnumComparisonExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "posts" */
export enum PostsConstraint {
  /** unique or primary key constraint */
  PostsPkey = 'posts_pkey',
  /** unique or primary key constraint */
  PostsSlugKey = 'posts_slug_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type PostsDeleteAtPathInput = {
  meta?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type PostsDeleteElemInput = {
  meta?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type PostsDeleteKeyInput = {
  meta?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "posts" */
export type PostsInsertInput = {
  author_id?: Maybe<Scalars['uuid']>;
  body?: Maybe<Scalars['String']>;
  comments?: Maybe<CommentsArrRelInsertInput>;
  created_at?: Maybe<Scalars['timestamptz']>;
  excerpt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['jsonb']>;
  post_state?: Maybe<PostStatesObjRelInsertInput>;
  post_type?: Maybe<PostTypesObjRelInsertInput>;
  slug?: Maybe<Scalars['String']>;
  state?: Maybe<PostStatesEnum>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<PostTypesEnum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type PostsMaxFields = {
  __typename?: 'posts_max_fields';
  author_id?: Maybe<Scalars['uuid']>;
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  excerpt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "posts" */
export type PostsMaxOrderBy = {
  author_id?: Maybe<OrderBy>;
  body?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  excerpt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  slug?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type PostsMinFields = {
  __typename?: 'posts_min_fields';
  author_id?: Maybe<Scalars['uuid']>;
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  excerpt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "posts" */
export type PostsMinOrderBy = {
  author_id?: Maybe<OrderBy>;
  body?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  excerpt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  slug?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
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
  /** on conflict condition */
  on_conflict?: Maybe<PostsOnConflict>;
};

/** on conflict condition type for table "posts" */
export type PostsOnConflict = {
  constraint: PostsConstraint;
  update_columns?: Array<PostsUpdateColumn>;
  where?: Maybe<PostsBoolExp>;
};

/** Ordering options when selecting data from "posts". */
export type PostsOrderBy = {
  author_id?: Maybe<OrderBy>;
  body?: Maybe<OrderBy>;
  comments_aggregate?: Maybe<CommentsAggregateOrderBy>;
  created_at?: Maybe<OrderBy>;
  excerpt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  meta?: Maybe<OrderBy>;
  post_state?: Maybe<PostStatesOrderBy>;
  post_type?: Maybe<PostTypesOrderBy>;
  slug?: Maybe<OrderBy>;
  state?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  type?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** primary key columns input for table: posts */
export type PostsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type PostsPrependInput = {
  meta?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "posts" */
export enum PostsSelectColumn {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Excerpt = 'excerpt',
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  Slug = 'slug',
  /** column name */
  State = 'state',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "posts" */
export type PostsSetInput = {
  author_id?: Maybe<Scalars['uuid']>;
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  excerpt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['jsonb']>;
  slug?: Maybe<Scalars['String']>;
  state?: Maybe<PostStatesEnum>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<PostTypesEnum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "posts" */
export enum PostsUpdateColumn {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Excerpt = 'excerpt',
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  Slug = 'slug',
  /** column name */
  State = 'state',
  /** column name */
  Title = 'title',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type QueryRoot = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.account_providers" */
  auth_account_providers: Array<AuthAccountProviders>;
  /** fetch aggregated fields from the table: "auth.account_providers" */
  auth_account_providers_aggregate: AuthAccountProvidersAggregate;
  /** fetch data from the table: "auth.account_providers" using primary key columns */
  auth_account_providers_by_pk?: Maybe<AuthAccountProviders>;
  /** fetch data from the table: "auth.account_roles" */
  auth_account_roles: Array<AuthAccountRoles>;
  /** fetch aggregated fields from the table: "auth.account_roles" */
  auth_account_roles_aggregate: AuthAccountRolesAggregate;
  /** fetch data from the table: "auth.account_roles" using primary key columns */
  auth_account_roles_by_pk?: Maybe<AuthAccountRoles>;
  /** fetch data from the table: "auth.accounts" */
  auth_accounts: Array<AuthAccounts>;
  /** fetch aggregated fields from the table: "auth.accounts" */
  auth_accounts_aggregate: AuthAccountsAggregate;
  /** fetch data from the table: "auth.accounts" using primary key columns */
  auth_accounts_by_pk?: Maybe<AuthAccounts>;
  /** fetch data from the table: "auth.providers" */
  auth_providers: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  auth_providers_aggregate: AuthProvidersAggregate;
  /** fetch data from the table: "auth.providers" using primary key columns */
  auth_providers_by_pk?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.refresh_tokens" */
  auth_refresh_tokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  auth_refresh_tokens_aggregate: AuthRefreshTokensAggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  auth_refresh_tokens_by_pk?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.roles" */
  auth_roles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  auth_roles_aggregate: AuthRolesAggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  auth_roles_by_pk?: Maybe<AuthRoles>;
  /** fetch data from the table: "comments" */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: CommentsAggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** fetch data from the table: "post_states" */
  post_states: Array<PostStates>;
  /** fetch aggregated fields from the table: "post_states" */
  post_states_aggregate: PostStatesAggregate;
  /** fetch data from the table: "post_states" using primary key columns */
  post_states_by_pk?: Maybe<PostStates>;
  /** fetch data from the table: "post_types" */
  post_types: Array<PostTypes>;
  /** fetch aggregated fields from the table: "post_types" */
  post_types_aggregate: PostTypesAggregate;
  /** fetch data from the table: "post_types" using primary key columns */
  post_types_by_pk?: Maybe<PostTypes>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: PostsAggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table: "taxonomies" */
  taxonomies: Array<Taxonomies>;
  /** fetch aggregated fields from the table: "taxonomies" */
  taxonomies_aggregate: TaxonomiesAggregate;
  /** fetch data from the table: "taxonomies" using primary key columns */
  taxonomies_by_pk?: Maybe<Taxonomies>;
  /** fetch data from the table: "term_relationships" */
  term_relationships: Array<TermRelationships>;
  /** fetch aggregated fields from the table: "term_relationships" */
  term_relationships_aggregate: TermRelationshipsAggregate;
  /** fetch data from the table: "term_relationships" using primary key columns */
  term_relationships_by_pk?: Maybe<TermRelationships>;
  /** fetch data from the table: "term_taxonomies" */
  term_taxonomies: Array<TermTaxonomies>;
  /** An aggregate relationship */
  term_taxonomies_aggregate: TermTaxonomiesAggregate;
  /** fetch data from the table: "term_taxonomies" using primary key columns */
  term_taxonomies_by_pk?: Maybe<TermTaxonomies>;
  /** fetch data from the table: "term_taxonomies_tree" */
  term_taxonomies_tree: Array<TermTaxonomiesTree>;
  /** fetch aggregated fields from the table: "term_taxonomies_tree" */
  term_taxonomies_tree_aggregate: TermTaxonomiesTreeAggregate;
  /** fetch data from the table: "terms" */
  terms: Array<Terms>;
  /** fetch aggregated fields from the table: "terms" */
  terms_aggregate: TermsAggregate;
  /** fetch data from the table: "terms" using primary key columns */
  terms_by_pk?: Maybe<Terms>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type QueryRootAuthAccountProvidersArgs = {
  distinct_on?: Maybe<Array<AuthAccountProvidersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthAccountProvidersOrderBy>>;
  where?: Maybe<AuthAccountProvidersBoolExp>;
};


export type QueryRootAuthAccountProvidersAggregateArgs = {
  distinct_on?: Maybe<Array<AuthAccountProvidersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthAccountProvidersOrderBy>>;
  where?: Maybe<AuthAccountProvidersBoolExp>;
};


export type QueryRootAuthAccountProvidersByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryRootAuthAccountRolesArgs = {
  distinct_on?: Maybe<Array<AuthAccountRolesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthAccountRolesOrderBy>>;
  where?: Maybe<AuthAccountRolesBoolExp>;
};


export type QueryRootAuthAccountRolesAggregateArgs = {
  distinct_on?: Maybe<Array<AuthAccountRolesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthAccountRolesOrderBy>>;
  where?: Maybe<AuthAccountRolesBoolExp>;
};


export type QueryRootAuthAccountRolesByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryRootAuthAccountsArgs = {
  distinct_on?: Maybe<Array<AuthAccountsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthAccountsOrderBy>>;
  where?: Maybe<AuthAccountsBoolExp>;
};


export type QueryRootAuthAccountsAggregateArgs = {
  distinct_on?: Maybe<Array<AuthAccountsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthAccountsOrderBy>>;
  where?: Maybe<AuthAccountsBoolExp>;
};


export type QueryRootAuthAccountsByPkArgs = {
  id: Scalars['uuid'];
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


export type QueryRootAuthProvidersByPkArgs = {
  provider: Scalars['String'];
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


export type QueryRootAuthRefreshTokensByPkArgs = {
  refresh_token: Scalars['uuid'];
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


export type QueryRootAuthRolesByPkArgs = {
  role: Scalars['String'];
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


export type QueryRootCommentsByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryRootPostStatesArgs = {
  distinct_on?: Maybe<Array<PostStatesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostStatesOrderBy>>;
  where?: Maybe<PostStatesBoolExp>;
};


export type QueryRootPostStatesAggregateArgs = {
  distinct_on?: Maybe<Array<PostStatesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostStatesOrderBy>>;
  where?: Maybe<PostStatesBoolExp>;
};


export type QueryRootPostStatesByPkArgs = {
  value: Scalars['String'];
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


export type QueryRootPostTypesByPkArgs = {
  value: PostTypesEnum;
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


export type QueryRootPostsByPkArgs = {
  id: Scalars['uuid'];
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


export type QueryRootTaxonomiesByPkArgs = {
  taxonomy: Scalars['String'];
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


export type QueryRootTermRelationshipsByPkArgs = {
  id: Scalars['uuid'];
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


export type QueryRootTermTaxonomiesByPkArgs = {
  term_slug: Scalars['String'];
};


export type QueryRootTermTaxonomiesTreeArgs = {
  distinct_on?: Maybe<Array<TermTaxonomiesTreeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TermTaxonomiesTreeOrderBy>>;
  where?: Maybe<TermTaxonomiesTreeBoolExp>;
};


export type QueryRootTermTaxonomiesTreeAggregateArgs = {
  distinct_on?: Maybe<Array<TermTaxonomiesTreeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TermTaxonomiesTreeOrderBy>>;
  where?: Maybe<TermTaxonomiesTreeBoolExp>;
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


export type QueryRootTermsByPkArgs = {
  slug: Scalars['String'];
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


export type QueryRootUsersByPkArgs = {
  id: Scalars['uuid'];
};

export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.account_providers" */
  auth_account_providers: Array<AuthAccountProviders>;
  /** fetch aggregated fields from the table: "auth.account_providers" */
  auth_account_providers_aggregate: AuthAccountProvidersAggregate;
  /** fetch data from the table: "auth.account_providers" using primary key columns */
  auth_account_providers_by_pk?: Maybe<AuthAccountProviders>;
  /** fetch data from the table: "auth.account_roles" */
  auth_account_roles: Array<AuthAccountRoles>;
  /** fetch aggregated fields from the table: "auth.account_roles" */
  auth_account_roles_aggregate: AuthAccountRolesAggregate;
  /** fetch data from the table: "auth.account_roles" using primary key columns */
  auth_account_roles_by_pk?: Maybe<AuthAccountRoles>;
  /** fetch data from the table: "auth.accounts" */
  auth_accounts: Array<AuthAccounts>;
  /** fetch aggregated fields from the table: "auth.accounts" */
  auth_accounts_aggregate: AuthAccountsAggregate;
  /** fetch data from the table: "auth.accounts" using primary key columns */
  auth_accounts_by_pk?: Maybe<AuthAccounts>;
  /** fetch data from the table: "auth.providers" */
  auth_providers: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  auth_providers_aggregate: AuthProvidersAggregate;
  /** fetch data from the table: "auth.providers" using primary key columns */
  auth_providers_by_pk?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.refresh_tokens" */
  auth_refresh_tokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  auth_refresh_tokens_aggregate: AuthRefreshTokensAggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  auth_refresh_tokens_by_pk?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.roles" */
  auth_roles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  auth_roles_aggregate: AuthRolesAggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  auth_roles_by_pk?: Maybe<AuthRoles>;
  /** fetch data from the table: "comments" */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: CommentsAggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** fetch data from the table: "post_states" */
  post_states: Array<PostStates>;
  /** fetch aggregated fields from the table: "post_states" */
  post_states_aggregate: PostStatesAggregate;
  /** fetch data from the table: "post_states" using primary key columns */
  post_states_by_pk?: Maybe<PostStates>;
  /** fetch data from the table: "post_types" */
  post_types: Array<PostTypes>;
  /** fetch aggregated fields from the table: "post_types" */
  post_types_aggregate: PostTypesAggregate;
  /** fetch data from the table: "post_types" using primary key columns */
  post_types_by_pk?: Maybe<PostTypes>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: PostsAggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table: "taxonomies" */
  taxonomies: Array<Taxonomies>;
  /** fetch aggregated fields from the table: "taxonomies" */
  taxonomies_aggregate: TaxonomiesAggregate;
  /** fetch data from the table: "taxonomies" using primary key columns */
  taxonomies_by_pk?: Maybe<Taxonomies>;
  /** fetch data from the table: "term_relationships" */
  term_relationships: Array<TermRelationships>;
  /** fetch aggregated fields from the table: "term_relationships" */
  term_relationships_aggregate: TermRelationshipsAggregate;
  /** fetch data from the table: "term_relationships" using primary key columns */
  term_relationships_by_pk?: Maybe<TermRelationships>;
  /** fetch data from the table: "term_taxonomies" */
  term_taxonomies: Array<TermTaxonomies>;
  /** An aggregate relationship */
  term_taxonomies_aggregate: TermTaxonomiesAggregate;
  /** fetch data from the table: "term_taxonomies" using primary key columns */
  term_taxonomies_by_pk?: Maybe<TermTaxonomies>;
  /** fetch data from the table: "term_taxonomies_tree" */
  term_taxonomies_tree: Array<TermTaxonomiesTree>;
  /** fetch aggregated fields from the table: "term_taxonomies_tree" */
  term_taxonomies_tree_aggregate: TermTaxonomiesTreeAggregate;
  /** fetch data from the table: "terms" */
  terms: Array<Terms>;
  /** fetch aggregated fields from the table: "terms" */
  terms_aggregate: TermsAggregate;
  /** fetch data from the table: "terms" using primary key columns */
  terms_by_pk?: Maybe<Terms>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type SubscriptionRootAuthAccountProvidersArgs = {
  distinct_on?: Maybe<Array<AuthAccountProvidersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthAccountProvidersOrderBy>>;
  where?: Maybe<AuthAccountProvidersBoolExp>;
};


export type SubscriptionRootAuthAccountProvidersAggregateArgs = {
  distinct_on?: Maybe<Array<AuthAccountProvidersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthAccountProvidersOrderBy>>;
  where?: Maybe<AuthAccountProvidersBoolExp>;
};


export type SubscriptionRootAuthAccountProvidersByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootAuthAccountRolesArgs = {
  distinct_on?: Maybe<Array<AuthAccountRolesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthAccountRolesOrderBy>>;
  where?: Maybe<AuthAccountRolesBoolExp>;
};


export type SubscriptionRootAuthAccountRolesAggregateArgs = {
  distinct_on?: Maybe<Array<AuthAccountRolesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthAccountRolesOrderBy>>;
  where?: Maybe<AuthAccountRolesBoolExp>;
};


export type SubscriptionRootAuthAccountRolesByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootAuthAccountsArgs = {
  distinct_on?: Maybe<Array<AuthAccountsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthAccountsOrderBy>>;
  where?: Maybe<AuthAccountsBoolExp>;
};


export type SubscriptionRootAuthAccountsAggregateArgs = {
  distinct_on?: Maybe<Array<AuthAccountsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AuthAccountsOrderBy>>;
  where?: Maybe<AuthAccountsBoolExp>;
};


export type SubscriptionRootAuthAccountsByPkArgs = {
  id: Scalars['uuid'];
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


export type SubscriptionRootAuthProvidersByPkArgs = {
  provider: Scalars['String'];
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


export type SubscriptionRootAuthRefreshTokensByPkArgs = {
  refresh_token: Scalars['uuid'];
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


export type SubscriptionRootAuthRolesByPkArgs = {
  role: Scalars['String'];
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


export type SubscriptionRootCommentsByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootPostStatesArgs = {
  distinct_on?: Maybe<Array<PostStatesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostStatesOrderBy>>;
  where?: Maybe<PostStatesBoolExp>;
};


export type SubscriptionRootPostStatesAggregateArgs = {
  distinct_on?: Maybe<Array<PostStatesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostStatesOrderBy>>;
  where?: Maybe<PostStatesBoolExp>;
};


export type SubscriptionRootPostStatesByPkArgs = {
  value: Scalars['String'];
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


export type SubscriptionRootPostTypesByPkArgs = {
  value: PostTypesEnum;
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


export type SubscriptionRootPostsByPkArgs = {
  id: Scalars['uuid'];
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


export type SubscriptionRootTaxonomiesByPkArgs = {
  taxonomy: Scalars['String'];
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


export type SubscriptionRootTermRelationshipsByPkArgs = {
  id: Scalars['uuid'];
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


export type SubscriptionRootTermTaxonomiesByPkArgs = {
  term_slug: Scalars['String'];
};


export type SubscriptionRootTermTaxonomiesTreeArgs = {
  distinct_on?: Maybe<Array<TermTaxonomiesTreeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TermTaxonomiesTreeOrderBy>>;
  where?: Maybe<TermTaxonomiesTreeBoolExp>;
};


export type SubscriptionRootTermTaxonomiesTreeAggregateArgs = {
  distinct_on?: Maybe<Array<TermTaxonomiesTreeSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TermTaxonomiesTreeOrderBy>>;
  where?: Maybe<TermTaxonomiesTreeBoolExp>;
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


export type SubscriptionRootTermsByPkArgs = {
  slug: Scalars['String'];
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


export type SubscriptionRootUsersByPkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "taxonomies" */
export type Taxonomies = {
  __typename?: 'taxonomies';
  taxonomy: Scalars['String'];
  /** fetch data from the table: "term_taxonomies" */
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
  /** unique or primary key constraint */
  TaxonomiesPkey = 'taxonomies_pkey',
  /** unique or primary key constraint */
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
  /** on conflict condition */
  on_conflict?: Maybe<TaxonomiesOnConflict>;
};

/** on conflict condition type for table "taxonomies" */
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
  __typename?: 'term_relationships';
  id: Scalars['uuid'];
  object_id: Scalars['uuid'];
  /** An object relationship */
  post?: Maybe<Posts>;
  /** An object relationship */
  user?: Maybe<Users>;
};

/** aggregated selection of "term_relationships" */
export type TermRelationshipsAggregate = {
  __typename?: 'term_relationships_aggregate';
  aggregate?: Maybe<TermRelationshipsAggregateFields>;
  nodes: Array<TermRelationships>;
};

/** aggregate fields of "term_relationships" */
export type TermRelationshipsAggregateFields = {
  __typename?: 'term_relationships_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TermRelationshipsMaxFields>;
  min?: Maybe<TermRelationshipsMinFields>;
};


/** aggregate fields of "term_relationships" */
export type TermRelationshipsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<TermRelationshipsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "term_relationships". All fields are combined with a logical 'AND'. */
export type TermRelationshipsBoolExp = {
  _and?: Maybe<Array<TermRelationshipsBoolExp>>;
  _not?: Maybe<TermRelationshipsBoolExp>;
  _or?: Maybe<Array<TermRelationshipsBoolExp>>;
  id?: Maybe<UuidComparisonExp>;
  object_id?: Maybe<UuidComparisonExp>;
  post?: Maybe<PostsBoolExp>;
  user?: Maybe<UsersBoolExp>;
};

/** unique or primary key constraints on table "term_relationships" */
export enum TermRelationshipsConstraint {
  /** unique or primary key constraint */
  PostTermsPkey = 'post_terms_pkey'
}

/** input type for inserting data into table "term_relationships" */
export type TermRelationshipsInsertInput = {
  id?: Maybe<Scalars['uuid']>;
  object_id?: Maybe<Scalars['uuid']>;
  post?: Maybe<PostsObjRelInsertInput>;
  user?: Maybe<UsersObjRelInsertInput>;
};

/** aggregate max on columns */
export type TermRelationshipsMaxFields = {
  __typename?: 'term_relationships_max_fields';
  id?: Maybe<Scalars['uuid']>;
  object_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type TermRelationshipsMinFields = {
  __typename?: 'term_relationships_min_fields';
  id?: Maybe<Scalars['uuid']>;
  object_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "term_relationships" */
export type TermRelationshipsMutationResponse = {
  __typename?: 'term_relationships_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TermRelationships>;
};

/** on conflict condition type for table "term_relationships" */
export type TermRelationshipsOnConflict = {
  constraint: TermRelationshipsConstraint;
  update_columns?: Array<TermRelationshipsUpdateColumn>;
  where?: Maybe<TermRelationshipsBoolExp>;
};

/** Ordering options when selecting data from "term_relationships". */
export type TermRelationshipsOrderBy = {
  id?: Maybe<OrderBy>;
  object_id?: Maybe<OrderBy>;
  post?: Maybe<PostsOrderBy>;
  user?: Maybe<UsersOrderBy>;
};

/** primary key columns input for table: term_relationships */
export type TermRelationshipsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "term_relationships" */
export enum TermRelationshipsSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  ObjectId = 'object_id'
}

/** input type for updating data in table "term_relationships" */
export type TermRelationshipsSetInput = {
  id?: Maybe<Scalars['uuid']>;
  object_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "term_relationships" */
export enum TermRelationshipsUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  ObjectId = 'object_id'
}

/** columns and relationships of "term_taxonomies" */
export type TermTaxonomies = {
  __typename?: 'term_taxonomies';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  parent_slug?: Maybe<Scalars['String']>;
  taxonomy: TaxonomiesEnum;
  /** An object relationship */
  taxonomyByTaxonomy: Taxonomies;
  /** An object relationship */
  term: Terms;
  term_slug: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "term_taxonomies" */
export type TermTaxonomiesAggregate = {
  __typename?: 'term_taxonomies_aggregate';
  aggregate?: Maybe<TermTaxonomiesAggregateFields>;
  nodes: Array<TermTaxonomies>;
};

/** aggregate fields of "term_taxonomies" */
export type TermTaxonomiesAggregateFields = {
  __typename?: 'term_taxonomies_aggregate_fields';
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
  /** on conflict condition */
  on_conflict?: Maybe<TermTaxonomiesOnConflict>;
};

/** Boolean expression to filter rows from the table "term_taxonomies". All fields are combined with a logical 'AND'. */
export type TermTaxonomiesBoolExp = {
  _and?: Maybe<Array<TermTaxonomiesBoolExp>>;
  _not?: Maybe<TermTaxonomiesBoolExp>;
  _or?: Maybe<Array<TermTaxonomiesBoolExp>>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  parent_slug?: Maybe<StringComparisonExp>;
  taxonomy?: Maybe<TaxonomiesEnumComparisonExp>;
  taxonomyByTaxonomy?: Maybe<TaxonomiesBoolExp>;
  term?: Maybe<TermsBoolExp>;
  term_slug?: Maybe<StringComparisonExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "term_taxonomies" */
export enum TermTaxonomiesConstraint {
  /** unique or primary key constraint */
  TermTaxonomiesPkey = 'term_taxonomies_pkey'
}

/** input type for inserting data into table "term_taxonomies" */
export type TermTaxonomiesInsertInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  parent_slug?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<TaxonomiesEnum>;
  taxonomyByTaxonomy?: Maybe<TaxonomiesObjRelInsertInput>;
  term?: Maybe<TermsObjRelInsertInput>;
  term_slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type TermTaxonomiesMaxFields = {
  __typename?: 'term_taxonomies_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  parent_slug?: Maybe<Scalars['String']>;
  term_slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "term_taxonomies" */
export type TermTaxonomiesMaxOrderBy = {
  created_at?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  parent_slug?: Maybe<OrderBy>;
  term_slug?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type TermTaxonomiesMinFields = {
  __typename?: 'term_taxonomies_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  parent_slug?: Maybe<Scalars['String']>;
  term_slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "term_taxonomies" */
export type TermTaxonomiesMinOrderBy = {
  created_at?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  parent_slug?: Maybe<OrderBy>;
  term_slug?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** response of any mutation on the table "term_taxonomies" */
export type TermTaxonomiesMutationResponse = {
  __typename?: 'term_taxonomies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TermTaxonomies>;
};

/** on conflict condition type for table "term_taxonomies" */
export type TermTaxonomiesOnConflict = {
  constraint: TermTaxonomiesConstraint;
  update_columns?: Array<TermTaxonomiesUpdateColumn>;
  where?: Maybe<TermTaxonomiesBoolExp>;
};

/** Ordering options when selecting data from "term_taxonomies". */
export type TermTaxonomiesOrderBy = {
  created_at?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  parent_slug?: Maybe<OrderBy>;
  taxonomy?: Maybe<OrderBy>;
  taxonomyByTaxonomy?: Maybe<TaxonomiesOrderBy>;
  term?: Maybe<TermsOrderBy>;
  term_slug?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** primary key columns input for table: term_taxonomies */
export type TermTaxonomiesPkColumnsInput = {
  term_slug: Scalars['String'];
};

/** select columns of table "term_taxonomies" */
export enum TermTaxonomiesSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  ParentSlug = 'parent_slug',
  /** column name */
  Taxonomy = 'taxonomy',
  /** column name */
  TermSlug = 'term_slug',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "term_taxonomies" */
export type TermTaxonomiesSetInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  parent_slug?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<TaxonomiesEnum>;
  term_slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "term_taxonomies_tree" */
export type TermTaxonomiesTree = {
  __typename?: 'term_taxonomies_tree';
  name?: Maybe<Scalars['String']>;
  parent_slug?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<Scalars['String']>;
};

/** aggregated selection of "term_taxonomies_tree" */
export type TermTaxonomiesTreeAggregate = {
  __typename?: 'term_taxonomies_tree_aggregate';
  aggregate?: Maybe<TermTaxonomiesTreeAggregateFields>;
  nodes: Array<TermTaxonomiesTree>;
};

/** aggregate fields of "term_taxonomies_tree" */
export type TermTaxonomiesTreeAggregateFields = {
  __typename?: 'term_taxonomies_tree_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TermTaxonomiesTreeMaxFields>;
  min?: Maybe<TermTaxonomiesTreeMinFields>;
};


/** aggregate fields of "term_taxonomies_tree" */
export type TermTaxonomiesTreeAggregateFieldsCountArgs = {
  columns?: Maybe<Array<TermTaxonomiesTreeSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "term_taxonomies_tree". All fields are combined with a logical 'AND'. */
export type TermTaxonomiesTreeBoolExp = {
  _and?: Maybe<Array<TermTaxonomiesTreeBoolExp>>;
  _not?: Maybe<TermTaxonomiesTreeBoolExp>;
  _or?: Maybe<Array<TermTaxonomiesTreeBoolExp>>;
  name?: Maybe<StringComparisonExp>;
  parent_slug?: Maybe<StringComparisonExp>;
  slug?: Maybe<StringComparisonExp>;
  taxonomy?: Maybe<StringComparisonExp>;
};

/** aggregate max on columns */
export type TermTaxonomiesTreeMaxFields = {
  __typename?: 'term_taxonomies_tree_max_fields';
  name?: Maybe<Scalars['String']>;
  parent_slug?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type TermTaxonomiesTreeMinFields = {
  __typename?: 'term_taxonomies_tree_min_fields';
  name?: Maybe<Scalars['String']>;
  parent_slug?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "term_taxonomies_tree". */
export type TermTaxonomiesTreeOrderBy = {
  name?: Maybe<OrderBy>;
  parent_slug?: Maybe<OrderBy>;
  slug?: Maybe<OrderBy>;
  taxonomy?: Maybe<OrderBy>;
};

/** select columns of table "term_taxonomies_tree" */
export enum TermTaxonomiesTreeSelectColumn {
  /** column name */
  Name = 'name',
  /** column name */
  ParentSlug = 'parent_slug',
  /** column name */
  Slug = 'slug',
  /** column name */
  Taxonomy = 'taxonomy'
}

/** update columns of table "term_taxonomies" */
export enum TermTaxonomiesUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  ParentSlug = 'parent_slug',
  /** column name */
  Taxonomy = 'taxonomy',
  /** column name */
  TermSlug = 'term_slug',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "terms" */
export type Terms = {
  __typename?: 'terms';
  created_at?: Maybe<Scalars['timestamptz']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
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
  created_at?: Maybe<TimestamptzComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  slug?: Maybe<StringComparisonExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "terms" */
export enum TermsConstraint {
  /** unique or primary key constraint */
  TermsPkey = 'terms_pkey',
  /** unique or primary key constraint */
  TermsSlugKey = 'terms_slug_key'
}

/** input type for inserting data into table "terms" */
export type TermsInsertInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type TermsMaxFields = {
  __typename?: 'terms_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type TermsMinFields = {
  __typename?: 'terms_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
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
  /** on conflict condition */
  on_conflict?: Maybe<TermsOnConflict>;
};

/** on conflict condition type for table "terms" */
export type TermsOnConflict = {
  constraint: TermsConstraint;
  update_columns?: Array<TermsUpdateColumn>;
  where?: Maybe<TermsBoolExp>;
};

/** Ordering options when selecting data from "terms". */
export type TermsOrderBy = {
  created_at?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  slug?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** primary key columns input for table: terms */
export type TermsPkColumnsInput = {
  slug: Scalars['String'];
};

/** select columns of table "terms" */
export enum TermsSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "terms" */
export type TermsSetInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "terms" */
export enum TermsUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug',
  /** column name */
  UpdatedAt = 'updated_at'
}


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
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

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  avatar_url?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  display_name?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  meta?: Maybe<Scalars['jsonb']>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "users" */
export type UsersMetaArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "users" */
export type UsersAggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type UsersAggregateFields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
};


/** aggregate fields of "users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: Maybe<Array<UsersSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type UsersAppendInput = {
  meta?: Maybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: Maybe<Array<UsersBoolExp>>;
  _not?: Maybe<UsersBoolExp>;
  _or?: Maybe<Array<UsersBoolExp>>;
  avatar_url?: Maybe<StringComparisonExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  display_name?: Maybe<StringComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  meta?: Maybe<JsonbComparisonExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "users" */
export enum UsersConstraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type UsersDeleteAtPathInput = {
  meta?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type UsersDeleteElemInput = {
  meta?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type UsersDeleteKeyInput = {
  meta?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "users" */
export type UsersInsertInput = {
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['jsonb']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: 'users_max_fields';
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type UsersMinFields = {
  __typename?: 'users_min_fields';
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type UsersMutationResponse = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type UsersObjRelInsertInput = {
  data: UsersInsertInput;
  /** on conflict condition */
  on_conflict?: Maybe<UsersOnConflict>;
};

/** on conflict condition type for table "users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  update_columns?: Array<UsersUpdateColumn>;
  where?: Maybe<UsersBoolExp>;
};

/** Ordering options when selecting data from "users". */
export type UsersOrderBy = {
  avatar_url?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  display_name?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  meta?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** primary key columns input for table: users */
export type UsersPkColumnsInput = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type UsersPrependInput = {
  meta?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "users" */
export enum UsersSelectColumn {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type UsersSetInput = {
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['jsonb']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum UsersUpdateColumn {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  UpdatedAt = 'updated_at'
}


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
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

export type CreatePostMutationVariables = Exact<{
  object: PostsInsertInput;
}>;


export type CreatePostMutation = (
  { __typename?: 'mutation_root' }
  & { insert_posts_one?: Maybe<(
    { __typename: 'posts' }
    & Pick<Posts, 'id'>
  )> }
);

export type CreateTermMutationVariables = Exact<{
  object: TermsInsertInput;
}>;


export type CreateTermMutation = (
  { __typename?: 'mutation_root' }
  & { insert_terms_one?: Maybe<(
    { __typename: 'terms' }
    & Pick<Terms, 'slug'>
  )> }
);

export type CreateTermTaxonomyMutationVariables = Exact<{
  objects: Array<TermTaxonomiesInsertInput> | TermTaxonomiesInsertInput;
}>;


export type CreateTermTaxonomyMutation = (
  { __typename?: 'mutation_root' }
  & { insert_term_taxonomies?: Maybe<(
    { __typename: 'term_taxonomies_mutation_response' }
    & { returning: Array<(
      { __typename: 'term_taxonomies' }
      & Pick<TermTaxonomies, 'term_slug'>
    )> }
  )> }
);

export type DeletePostMutationVariables = Exact<{
  where: PostsBoolExp;
}>;


export type DeletePostMutation = (
  { __typename?: 'mutation_root' }
  & { delete_posts?: Maybe<(
    { __typename: 'posts_mutation_response' }
    & Pick<PostsMutationResponse, 'affected_rows'>
  )> }
);

export type UpdatePostMutationVariables = Exact<{
  pk_columns: PostsPkColumnsInput;
  _set?: Maybe<PostsSetInput>;
}>;


export type UpdatePostMutation = (
  { __typename?: 'mutation_root' }
  & { update_posts_by_pk?: Maybe<(
    { __typename: 'posts' }
    & Pick<Posts, 'id'>
  )> }
);

export type PostQueryVariables = Exact<{
  uuid: Scalars['uuid'];
}>;


export type PostQuery = (
  { __typename?: 'query_root' }
  & { posts_by_pk?: Maybe<(
    { __typename: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'slug' | 'author_id' | 'body' | 'excerpt' | 'state' | 'type'>
  )> }
);

export type PostsQueryVariables = Exact<{
  where?: Maybe<PostsBoolExp>;
}>;


export type PostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'type' | 'state' | 'excerpt' | 'slug' | 'body' | 'author_id' | 'created_at'>
  )> }
);

export type PostsAggregateQueryVariables = Exact<{
  where?: Maybe<PostsBoolExp>;
}>;


export type PostsAggregateQuery = (
  { __typename?: 'query_root' }
  & { posts_aggregate: (
    { __typename?: 'posts_aggregate' }
    & { aggregate?: Maybe<(
      { __typename: 'posts_aggregate_fields' }
      & Pick<PostsAggregateFields, 'count'>
    )> }
  ) }
);

export type TermTaxonomiesQueryVariables = Exact<{
  where?: Maybe<TermTaxonomiesBoolExp>;
}>;


export type TermTaxonomiesQuery = (
  { __typename?: 'query_root' }
  & { term_taxonomies: Array<(
    { __typename: 'term_taxonomies' }
    & Pick<TermTaxonomies, 'taxonomy' | 'description' | 'term_slug' | 'parent_slug'>
    & { term: (
      { __typename: 'terms' }
      & Pick<Terms, 'name' | 'slug'>
    ) }
  )> }
);

export type TermTaxonomiesTreeQueryVariables = Exact<{
  where?: Maybe<TermTaxonomiesTreeBoolExp>;
}>;


export type TermTaxonomiesTreeQuery = (
  { __typename?: 'query_root' }
  & { term_taxonomies_tree: Array<(
    { __typename: 'term_taxonomies_tree' }
    & Pick<TermTaxonomiesTree, 'name' | 'slug' | 'parent_slug'>
  )> }
);


export const CreatePostDocument = gql`
    mutation createPost($object: posts_insert_input!) {
  insert_posts_one(object: $object) {
    __typename
    id
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const CreateTermDocument = gql`
    mutation createTerm($object: terms_insert_input!) {
  insert_terms_one(object: $object) {
    __typename
    slug
  }
}
    `;
export type CreateTermMutationFn = Apollo.MutationFunction<CreateTermMutation, CreateTermMutationVariables>;

/**
 * __useCreateTermMutation__
 *
 * To run a mutation, you first call `useCreateTermMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTermMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTermMutation, { data, loading, error }] = useCreateTermMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useCreateTermMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTermMutation, CreateTermMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateTermMutation, CreateTermMutationVariables>(CreateTermDocument, options);
      }
export type CreateTermMutationHookResult = ReturnType<typeof useCreateTermMutation>;
export type CreateTermMutationResult = Apollo.MutationResult<CreateTermMutation>;
export type CreateTermMutationOptions = Apollo.BaseMutationOptions<CreateTermMutation, CreateTermMutationVariables>;
export const CreateTermTaxonomyDocument = gql`
    mutation createTermTaxonomy($objects: [term_taxonomies_insert_input!]!) {
  insert_term_taxonomies(objects: $objects) {
    __typename
    returning {
      __typename
      term_slug
    }
  }
}
    `;
export type CreateTermTaxonomyMutationFn = Apollo.MutationFunction<CreateTermTaxonomyMutation, CreateTermTaxonomyMutationVariables>;

/**
 * __useCreateTermTaxonomyMutation__
 *
 * To run a mutation, you first call `useCreateTermTaxonomyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTermTaxonomyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTermTaxonomyMutation, { data, loading, error }] = useCreateTermTaxonomyMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useCreateTermTaxonomyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTermTaxonomyMutation, CreateTermTaxonomyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateTermTaxonomyMutation, CreateTermTaxonomyMutationVariables>(CreateTermTaxonomyDocument, options);
      }
export type CreateTermTaxonomyMutationHookResult = ReturnType<typeof useCreateTermTaxonomyMutation>;
export type CreateTermTaxonomyMutationResult = Apollo.MutationResult<CreateTermTaxonomyMutation>;
export type CreateTermTaxonomyMutationOptions = Apollo.BaseMutationOptions<CreateTermTaxonomyMutation, CreateTermTaxonomyMutationVariables>;
export const DeletePostDocument = gql`
    mutation deletePost($where: posts_bool_exp!) {
  delete_posts(where: $where) {
    __typename
    affected_rows
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
export const UpdatePostDocument = gql`
    mutation updatePost($pk_columns: posts_pk_columns_input!, $_set: posts_set_input) {
  update_posts_by_pk(pk_columns: $pk_columns, _set: $_set) {
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
export const PostDocument = gql`
    query post($uuid: uuid!) {
  posts_by_pk(id: $uuid) {
    __typename
    id
    title
    slug
    author_id
    body
    excerpt
    state
    type
  }
}
    `;

/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function usePostQuery(baseOptions: ApolloReactHooks.QueryHookOptions<PostQuery, PostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<PostQuery, PostQueryVariables>(PostDocument, options);
      }
export function usePostLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PostQuery, PostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<PostQuery, PostQueryVariables>(PostDocument, options);
        }
export type PostQueryHookResult = ReturnType<typeof usePostQuery>;
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>;
export type PostQueryResult = Apollo.QueryResult<PostQuery, PostQueryVariables>;
export const PostsDocument = gql`
    query posts($where: posts_bool_exp) {
  posts(where: $where) {
    __typename
    id
    title
    type
    state
    excerpt
    slug
    body
    author_id
    created_at
  }
}
    `;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;
export const PostsAggregateDocument = gql`
    query postsAggregate($where: posts_bool_exp) {
  posts_aggregate(where: $where) {
    aggregate {
      __typename
      count
    }
  }
}
    `;

/**
 * __usePostsAggregateQuery__
 *
 * To run a query within a React component, call `usePostsAggregateQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsAggregateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsAggregateQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePostsAggregateQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PostsAggregateQuery, PostsAggregateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<PostsAggregateQuery, PostsAggregateQueryVariables>(PostsAggregateDocument, options);
      }
export function usePostsAggregateLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PostsAggregateQuery, PostsAggregateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<PostsAggregateQuery, PostsAggregateQueryVariables>(PostsAggregateDocument, options);
        }
export type PostsAggregateQueryHookResult = ReturnType<typeof usePostsAggregateQuery>;
export type PostsAggregateLazyQueryHookResult = ReturnType<typeof usePostsAggregateLazyQuery>;
export type PostsAggregateQueryResult = Apollo.QueryResult<PostsAggregateQuery, PostsAggregateQueryVariables>;
export const TermTaxonomiesDocument = gql`
    query termTaxonomies($where: term_taxonomies_bool_exp) {
  term_taxonomies(where: $where) {
    __typename
    taxonomy
    description
    term_slug
    parent_slug
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
export const TermTaxonomiesTreeDocument = gql`
    query termTaxonomiesTree($where: term_taxonomies_tree_bool_exp) {
  term_taxonomies_tree(where: $where) {
    __typename
    name
    slug
    parent_slug
  }
}
    `;

/**
 * __useTermTaxonomiesTreeQuery__
 *
 * To run a query within a React component, call `useTermTaxonomiesTreeQuery` and pass it any options that fit your needs.
 * When your component renders, `useTermTaxonomiesTreeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTermTaxonomiesTreeQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useTermTaxonomiesTreeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TermTaxonomiesTreeQuery, TermTaxonomiesTreeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TermTaxonomiesTreeQuery, TermTaxonomiesTreeQueryVariables>(TermTaxonomiesTreeDocument, options);
      }
export function useTermTaxonomiesTreeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TermTaxonomiesTreeQuery, TermTaxonomiesTreeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TermTaxonomiesTreeQuery, TermTaxonomiesTreeQueryVariables>(TermTaxonomiesTreeDocument, options);
        }
export type TermTaxonomiesTreeQueryHookResult = ReturnType<typeof useTermTaxonomiesTreeQuery>;
export type TermTaxonomiesTreeLazyQueryHookResult = ReturnType<typeof useTermTaxonomiesTreeLazyQuery>;
export type TermTaxonomiesTreeQueryResult = Apollo.QueryResult<TermTaxonomiesTreeQuery, TermTaxonomiesTreeQueryVariables>;