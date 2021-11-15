import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
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
  /** An array relationship */
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
  /** delete data from the table: "post_status" */
  delete_post_status?: Maybe<PostStatusMutationResponse>;
  /** delete single row from the table: "post_status" */
  delete_post_status_by_pk?: Maybe<PostStatus>;
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
  /** insert data into the table: "post_status" */
  insert_post_status?: Maybe<PostStatusMutationResponse>;
  /** insert a single row into the table: "post_status" */
  insert_post_status_one?: Maybe<PostStatus>;
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
  /** update data of the table: "post_status" */
  update_post_status?: Maybe<PostStatusMutationResponse>;
  /** update single row of the table: "post_status" */
  update_post_status_by_pk?: Maybe<PostStatus>;
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
export type MutationRootDeletePostStatusArgs = {
  where: PostStatusBoolExp;
};


/** mutation root */
export type MutationRootDeletePostStatusByPkArgs = {
  status: Scalars['String'];
};


/** mutation root */
export type MutationRootDeletePostTypesArgs = {
  where: PostTypesBoolExp;
};


/** mutation root */
export type MutationRootDeletePostTypesByPkArgs = {
  type: PostTypesEnum;
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
  id: Scalars['uuid'];
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
export type MutationRootDeleteTermsArgs = {
  where: TermsBoolExp;
};


/** mutation root */
export type MutationRootDeleteTermsByPkArgs = {
  id: Scalars['uuid'];
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
export type MutationRootInsertPostStatusArgs = {
  objects: Array<PostStatusInsertInput>;
  on_conflict?: Maybe<PostStatusOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostStatusOneArgs = {
  object: PostStatusInsertInput;
  on_conflict?: Maybe<PostStatusOnConflict>;
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
export type MutationRootUpdatePostStatusArgs = {
  _set?: Maybe<PostStatusSetInput>;
  where: PostStatusBoolExp;
};


/** mutation root */
export type MutationRootUpdatePostStatusByPkArgs = {
  _set?: Maybe<PostStatusSetInput>;
  pk_columns: PostStatusPkColumnsInput;
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
  _append?: Maybe<TaxonomiesAppendInput>;
  _delete_at_path?: Maybe<TaxonomiesDeleteAtPathInput>;
  _delete_elem?: Maybe<TaxonomiesDeleteElemInput>;
  _delete_key?: Maybe<TaxonomiesDeleteKeyInput>;
  _prepend?: Maybe<TaxonomiesPrependInput>;
  _set?: Maybe<TaxonomiesSetInput>;
  where: TaxonomiesBoolExp;
};


/** mutation root */
export type MutationRootUpdateTaxonomiesByPkArgs = {
  _append?: Maybe<TaxonomiesAppendInput>;
  _delete_at_path?: Maybe<TaxonomiesDeleteAtPathInput>;
  _delete_elem?: Maybe<TaxonomiesDeleteElemInput>;
  _delete_key?: Maybe<TaxonomiesDeleteKeyInput>;
  _prepend?: Maybe<TaxonomiesPrependInput>;
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
export type MutationRootUpdateTermsArgs = {
  _append?: Maybe<TermsAppendInput>;
  _delete_at_path?: Maybe<TermsDeleteAtPathInput>;
  _delete_elem?: Maybe<TermsDeleteElemInput>;
  _delete_key?: Maybe<TermsDeleteKeyInput>;
  _prepend?: Maybe<TermsPrependInput>;
  _set?: Maybe<TermsSetInput>;
  where: TermsBoolExp;
};


/** mutation root */
export type MutationRootUpdateTermsByPkArgs = {
  _append?: Maybe<TermsAppendInput>;
  _delete_at_path?: Maybe<TermsDeleteAtPathInput>;
  _delete_elem?: Maybe<TermsDeleteElemInput>;
  _delete_key?: Maybe<TermsDeleteKeyInput>;
  _prepend?: Maybe<TermsPrependInput>;
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

/** columns and relationships of "post_status" */
export type PostStatus = {
  __typename?: 'post_status';
  status: Scalars['String'];
};

/** aggregated selection of "post_status" */
export type PostStatusAggregate = {
  __typename?: 'post_status_aggregate';
  aggregate?: Maybe<PostStatusAggregateFields>;
  nodes: Array<PostStatus>;
};

/** aggregate fields of "post_status" */
export type PostStatusAggregateFields = {
  __typename?: 'post_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<PostStatusMaxFields>;
  min?: Maybe<PostStatusMinFields>;
};


/** aggregate fields of "post_status" */
export type PostStatusAggregateFieldsCountArgs = {
  columns?: Maybe<Array<PostStatusSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "post_status". All fields are combined with a logical 'AND'. */
export type PostStatusBoolExp = {
  _and?: Maybe<Array<PostStatusBoolExp>>;
  _not?: Maybe<PostStatusBoolExp>;
  _or?: Maybe<Array<PostStatusBoolExp>>;
  status?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "post_status" */
export enum PostStatusConstraint {
  /** unique or primary key constraint */
  PostStatusPkey = 'post_status_pkey'
}

export enum PostStatusEnum {
  Archived = 'archived',
  Draft = 'draft',
  Published = 'published'
}

/** Boolean expression to compare columns of type "post_status_enum". All fields are combined with logical 'AND'. */
export type PostStatusEnumComparisonExp = {
  _eq?: Maybe<PostStatusEnum>;
  _in?: Maybe<Array<PostStatusEnum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<PostStatusEnum>;
  _nin?: Maybe<Array<PostStatusEnum>>;
};

/** input type for inserting data into table "post_status" */
export type PostStatusInsertInput = {
  status?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type PostStatusMaxFields = {
  __typename?: 'post_status_max_fields';
  status?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type PostStatusMinFields = {
  __typename?: 'post_status_min_fields';
  status?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "post_status" */
export type PostStatusMutationResponse = {
  __typename?: 'post_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PostStatus>;
};

/** on conflict condition type for table "post_status" */
export type PostStatusOnConflict = {
  constraint: PostStatusConstraint;
  update_columns?: Array<PostStatusUpdateColumn>;
  where?: Maybe<PostStatusBoolExp>;
};

/** Ordering options when selecting data from "post_status". */
export type PostStatusOrderBy = {
  status?: Maybe<OrderBy>;
};

/** primary key columns input for table: post_status */
export type PostStatusPkColumnsInput = {
  status: Scalars['String'];
};

/** select columns of table "post_status" */
export enum PostStatusSelectColumn {
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "post_status" */
export type PostStatusSetInput = {
  status?: Maybe<Scalars['String']>;
};

/** update columns of table "post_status" */
export enum PostStatusUpdateColumn {
  /** column name */
  Status = 'status'
}

/** columns and relationships of "post_types" */
export type PostTypes = {
  __typename?: 'post_types';
  type: PostTypesEnum;
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
  type?: Maybe<PostTypesEnumComparisonExp>;
};

/** unique or primary key constraints on table "post_types" */
export enum PostTypesConstraint {
  /** unique or primary key constraint */
  ObjectTypesPkey = 'object_types_pkey'
}

export enum PostTypesEnum {
  Page = 'page',
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
  type?: Maybe<PostTypesEnum>;
};

/** response of any mutation on the table "post_types" */
export type PostTypesMutationResponse = {
  __typename?: 'post_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PostTypes>;
};

/** on conflict condition type for table "post_types" */
export type PostTypesOnConflict = {
  constraint: PostTypesConstraint;
  update_columns?: Array<PostTypesUpdateColumn>;
  where?: Maybe<PostTypesBoolExp>;
};

/** Ordering options when selecting data from "post_types". */
export type PostTypesOrderBy = {
  type?: Maybe<OrderBy>;
};

/** primary key columns input for table: post_types */
export type PostTypesPkColumnsInput = {
  type: PostTypesEnum;
};

/** select columns of table "post_types" */
export enum PostTypesSelectColumn {
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "post_types" */
export type PostTypesSetInput = {
  type?: Maybe<PostTypesEnum>;
};

/** update columns of table "post_types" */
export enum PostTypesUpdateColumn {
  /** column name */
  Type = 'type'
}

/** columns and relationships of "posts" */
export type Posts = {
  __typename?: 'posts';
  author_id?: Maybe<Scalars['uuid']>;
  body?: Maybe<Scalars['String']>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: CommentsAggregate;
  created_at?: Maybe<Scalars['timestamptz']>;
  excerpt?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  meta?: Maybe<Scalars['jsonb']>;
  slug: Scalars['String'];
  status: PostStatusEnum;
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

/** append existing jsonb value of filtered columns with new jsonb value */
export type PostsAppendInput = {
  meta?: Maybe<Scalars['jsonb']>;
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
  slug?: Maybe<StringComparisonExp>;
  status?: Maybe<PostStatusEnumComparisonExp>;
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
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatusEnum>;
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
  slug?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
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
  Status = 'status',
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
  status?: Maybe<PostStatusEnum>;
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
  Status = 'status',
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
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: CommentsAggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** fetch data from the table: "post_status" */
  post_status: Array<PostStatus>;
  /** fetch aggregated fields from the table: "post_status" */
  post_status_aggregate: PostStatusAggregate;
  /** fetch data from the table: "post_status" using primary key columns */
  post_status_by_pk?: Maybe<PostStatus>;
  /** fetch data from the table: "post_types" */
  post_types: Array<PostTypes>;
  /** fetch aggregated fields from the table: "post_types" */
  post_types_aggregate: PostTypesAggregate;
  /** fetch data from the table: "post_types" using primary key columns */
  post_types_by_pk?: Maybe<PostTypes>;
  /** fetch data from the table: "posts" */
  posts: Array<Posts>;
  /** fetch aggregated fields from the table: "posts" */
  posts_aggregate: PostsAggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** An array relationship */
  taxonomies: Array<Taxonomies>;
  /** An aggregate relationship */
  taxonomies_aggregate: TaxonomiesAggregate;
  /** fetch data from the table: "taxonomies" using primary key columns */
  taxonomies_by_pk?: Maybe<Taxonomies>;
  /** An array relationship */
  term_relationships: Array<TermRelationships>;
  /** An aggregate relationship */
  term_relationships_aggregate: TermRelationshipsAggregate;
  /** fetch data from the table: "term_relationships" using primary key columns */
  term_relationships_by_pk?: Maybe<TermRelationships>;
  /** fetch data from the table: "terms" */
  terms: Array<Terms>;
  /** An aggregate relationship */
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


export type QueryRootPostStatusArgs = {
  distinct_on?: Maybe<Array<PostStatusSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostStatusOrderBy>>;
  where?: Maybe<PostStatusBoolExp>;
};


export type QueryRootPostStatusAggregateArgs = {
  distinct_on?: Maybe<Array<PostStatusSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostStatusOrderBy>>;
  where?: Maybe<PostStatusBoolExp>;
};


export type QueryRootPostStatusByPkArgs = {
  status: Scalars['String'];
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
  type: PostTypesEnum;
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
  id: Scalars['uuid'];
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
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: CommentsAggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** fetch data from the table: "post_status" */
  post_status: Array<PostStatus>;
  /** fetch aggregated fields from the table: "post_status" */
  post_status_aggregate: PostStatusAggregate;
  /** fetch data from the table: "post_status" using primary key columns */
  post_status_by_pk?: Maybe<PostStatus>;
  /** fetch data from the table: "post_types" */
  post_types: Array<PostTypes>;
  /** fetch aggregated fields from the table: "post_types" */
  post_types_aggregate: PostTypesAggregate;
  /** fetch data from the table: "post_types" using primary key columns */
  post_types_by_pk?: Maybe<PostTypes>;
  /** fetch data from the table: "posts" */
  posts: Array<Posts>;
  /** fetch aggregated fields from the table: "posts" */
  posts_aggregate: PostsAggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** An array relationship */
  taxonomies: Array<Taxonomies>;
  /** An aggregate relationship */
  taxonomies_aggregate: TaxonomiesAggregate;
  /** fetch data from the table: "taxonomies" using primary key columns */
  taxonomies_by_pk?: Maybe<Taxonomies>;
  /** An array relationship */
  term_relationships: Array<TermRelationships>;
  /** An aggregate relationship */
  term_relationships_aggregate: TermRelationshipsAggregate;
  /** fetch data from the table: "term_relationships" using primary key columns */
  term_relationships_by_pk?: Maybe<TermRelationships>;
  /** fetch data from the table: "terms" */
  terms: Array<Terms>;
  /** An aggregate relationship */
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


export type SubscriptionRootPostStatusArgs = {
  distinct_on?: Maybe<Array<PostStatusSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostStatusOrderBy>>;
  where?: Maybe<PostStatusBoolExp>;
};


export type SubscriptionRootPostStatusAggregateArgs = {
  distinct_on?: Maybe<Array<PostStatusSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PostStatusOrderBy>>;
  where?: Maybe<PostStatusBoolExp>;
};


export type SubscriptionRootPostStatusByPkArgs = {
  status: Scalars['String'];
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
  type: PostTypesEnum;
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
  id: Scalars['uuid'];
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


export type SubscriptionRootUsersByPkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "taxonomies" */
export type Taxonomies = {
  __typename?: 'taxonomies';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  meta?: Maybe<Scalars['jsonb']>;
  name: Scalars['String'];
  parent_id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  taxonomies: Array<Taxonomies>;
  /** An aggregate relationship */
  taxonomies_aggregate: TaxonomiesAggregate;
  /** An object relationship */
  taxonomy?: Maybe<Taxonomies>;
  /** fetch data from the table: "terms" */
  terms: Array<Terms>;
  /** An aggregate relationship */
  terms_aggregate: TermsAggregate;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "taxonomies" */
export type TaxonomiesMetaArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "taxonomies" */
export type TaxonomiesTaxonomiesArgs = {
  distinct_on?: Maybe<Array<TaxonomiesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TaxonomiesOrderBy>>;
  where?: Maybe<TaxonomiesBoolExp>;
};


/** columns and relationships of "taxonomies" */
export type TaxonomiesTaxonomiesAggregateArgs = {
  distinct_on?: Maybe<Array<TaxonomiesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TaxonomiesOrderBy>>;
  where?: Maybe<TaxonomiesBoolExp>;
};


/** columns and relationships of "taxonomies" */
export type TaxonomiesTermsArgs = {
  distinct_on?: Maybe<Array<TermsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TermsOrderBy>>;
  where?: Maybe<TermsBoolExp>;
};


/** columns and relationships of "taxonomies" */
export type TaxonomiesTermsAggregateArgs = {
  distinct_on?: Maybe<Array<TermsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TermsOrderBy>>;
  where?: Maybe<TermsBoolExp>;
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

/** order by aggregate values of table "taxonomies" */
export type TaxonomiesAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<TaxonomiesMaxOrderBy>;
  min?: Maybe<TaxonomiesMinOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type TaxonomiesAppendInput = {
  meta?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "taxonomies" */
export type TaxonomiesArrRelInsertInput = {
  data: Array<TaxonomiesInsertInput>;
  /** on conflict condition */
  on_conflict?: Maybe<TaxonomiesOnConflict>;
};

/** Boolean expression to filter rows from the table "taxonomies". All fields are combined with a logical 'AND'. */
export type TaxonomiesBoolExp = {
  _and?: Maybe<Array<TaxonomiesBoolExp>>;
  _not?: Maybe<TaxonomiesBoolExp>;
  _or?: Maybe<Array<TaxonomiesBoolExp>>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  meta?: Maybe<JsonbComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  parent_id?: Maybe<UuidComparisonExp>;
  taxonomies?: Maybe<TaxonomiesBoolExp>;
  taxonomy?: Maybe<TaxonomiesBoolExp>;
  terms?: Maybe<TermsBoolExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "taxonomies" */
export enum TaxonomiesConstraint {
  /** unique or primary key constraint */
  TaxonomiesPkey = 'taxonomies_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type TaxonomiesDeleteAtPathInput = {
  meta?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type TaxonomiesDeleteElemInput = {
  meta?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type TaxonomiesDeleteKeyInput = {
  meta?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "taxonomies" */
export type TaxonomiesInsertInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['jsonb']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['uuid']>;
  taxonomies?: Maybe<TaxonomiesArrRelInsertInput>;
  taxonomy?: Maybe<TaxonomiesObjRelInsertInput>;
  terms?: Maybe<TermsArrRelInsertInput>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type TaxonomiesMaxFields = {
  __typename?: 'taxonomies_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "taxonomies" */
export type TaxonomiesMaxOrderBy = {
  created_at?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  parent_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type TaxonomiesMinFields = {
  __typename?: 'taxonomies_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "taxonomies" */
export type TaxonomiesMinOrderBy = {
  created_at?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  parent_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
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
  created_at?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  meta?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  parent_id?: Maybe<OrderBy>;
  taxonomies_aggregate?: Maybe<TaxonomiesAggregateOrderBy>;
  taxonomy?: Maybe<TaxonomiesOrderBy>;
  terms_aggregate?: Maybe<TermsAggregateOrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** primary key columns input for table: taxonomies */
export type TaxonomiesPkColumnsInput = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type TaxonomiesPrependInput = {
  meta?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "taxonomies" */
export enum TaxonomiesSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  Name = 'name',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "taxonomies" */
export type TaxonomiesSetInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['jsonb']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "taxonomies" */
export enum TaxonomiesUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  Name = 'name',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "term_relationships" */
export type TermRelationships = {
  __typename?: 'term_relationships';
  id: Scalars['uuid'];
  object_id: Scalars['uuid'];
  /** An object relationship */
  post?: Maybe<Posts>;
  /** An object relationship */
  term: Terms;
  term_id: Scalars['uuid'];
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

/** order by aggregate values of table "term_relationships" */
export type TermRelationshipsAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<TermRelationshipsMaxOrderBy>;
  min?: Maybe<TermRelationshipsMinOrderBy>;
};

/** input type for inserting array relation for remote table "term_relationships" */
export type TermRelationshipsArrRelInsertInput = {
  data: Array<TermRelationshipsInsertInput>;
  /** on conflict condition */
  on_conflict?: Maybe<TermRelationshipsOnConflict>;
};

/** Boolean expression to filter rows from the table "term_relationships". All fields are combined with a logical 'AND'. */
export type TermRelationshipsBoolExp = {
  _and?: Maybe<Array<TermRelationshipsBoolExp>>;
  _not?: Maybe<TermRelationshipsBoolExp>;
  _or?: Maybe<Array<TermRelationshipsBoolExp>>;
  id?: Maybe<UuidComparisonExp>;
  object_id?: Maybe<UuidComparisonExp>;
  post?: Maybe<PostsBoolExp>;
  term?: Maybe<TermsBoolExp>;
  term_id?: Maybe<UuidComparisonExp>;
  user?: Maybe<UsersBoolExp>;
};

/** unique or primary key constraints on table "term_relationships" */
export enum TermRelationshipsConstraint {
  /** unique or primary key constraint */
  PostTermsPkey = 'post_terms_pkey',
  /** unique or primary key constraint */
  TermRelationshipsObjectIdTermIdKey = 'term_relationships_object_id_term_id_key'
}

/** input type for inserting data into table "term_relationships" */
export type TermRelationshipsInsertInput = {
  id?: Maybe<Scalars['uuid']>;
  object_id?: Maybe<Scalars['uuid']>;
  post?: Maybe<PostsObjRelInsertInput>;
  term?: Maybe<TermsObjRelInsertInput>;
  term_id?: Maybe<Scalars['uuid']>;
  user?: Maybe<UsersObjRelInsertInput>;
};

/** aggregate max on columns */
export type TermRelationshipsMaxFields = {
  __typename?: 'term_relationships_max_fields';
  id?: Maybe<Scalars['uuid']>;
  object_id?: Maybe<Scalars['uuid']>;
  term_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "term_relationships" */
export type TermRelationshipsMaxOrderBy = {
  id?: Maybe<OrderBy>;
  object_id?: Maybe<OrderBy>;
  term_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type TermRelationshipsMinFields = {
  __typename?: 'term_relationships_min_fields';
  id?: Maybe<Scalars['uuid']>;
  object_id?: Maybe<Scalars['uuid']>;
  term_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "term_relationships" */
export type TermRelationshipsMinOrderBy = {
  id?: Maybe<OrderBy>;
  object_id?: Maybe<OrderBy>;
  term_id?: Maybe<OrderBy>;
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
  term?: Maybe<TermsOrderBy>;
  term_id?: Maybe<OrderBy>;
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
  ObjectId = 'object_id',
  /** column name */
  TermId = 'term_id'
}

/** input type for updating data in table "term_relationships" */
export type TermRelationshipsSetInput = {
  id?: Maybe<Scalars['uuid']>;
  object_id?: Maybe<Scalars['uuid']>;
  term_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "term_relationships" */
export enum TermRelationshipsUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  ObjectId = 'object_id',
  /** column name */
  TermId = 'term_id'
}

/** columns and relationships of "terms" */
export type Terms = {
  __typename?: 'terms';
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  meta?: Maybe<Scalars['jsonb']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  /** An object relationship */
  taxonomy: Taxonomies;
  taxonomy_id: Scalars['uuid'];
  /** An array relationship */
  term_relationships: Array<TermRelationships>;
  /** An aggregate relationship */
  term_relationships_aggregate: TermRelationshipsAggregate;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "terms" */
export type TermsMetaArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "terms" */
export type TermsTermRelationshipsArgs = {
  distinct_on?: Maybe<Array<TermRelationshipsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TermRelationshipsOrderBy>>;
  where?: Maybe<TermRelationshipsBoolExp>;
};


/** columns and relationships of "terms" */
export type TermsTermRelationshipsAggregateArgs = {
  distinct_on?: Maybe<Array<TermRelationshipsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<TermRelationshipsOrderBy>>;
  where?: Maybe<TermRelationshipsBoolExp>;
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

/** order by aggregate values of table "terms" */
export type TermsAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<TermsMaxOrderBy>;
  min?: Maybe<TermsMinOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type TermsAppendInput = {
  meta?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "terms" */
export type TermsArrRelInsertInput = {
  data: Array<TermsInsertInput>;
  /** on conflict condition */
  on_conflict?: Maybe<TermsOnConflict>;
};

/** Boolean expression to filter rows from the table "terms". All fields are combined with a logical 'AND'. */
export type TermsBoolExp = {
  _and?: Maybe<Array<TermsBoolExp>>;
  _not?: Maybe<TermsBoolExp>;
  _or?: Maybe<Array<TermsBoolExp>>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  meta?: Maybe<JsonbComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  slug?: Maybe<StringComparisonExp>;
  taxonomy?: Maybe<TaxonomiesBoolExp>;
  taxonomy_id?: Maybe<UuidComparisonExp>;
  term_relationships?: Maybe<TermRelationshipsBoolExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "terms" */
export enum TermsConstraint {
  /** unique or primary key constraint */
  TermsPkey = 'terms_pkey',
  /** unique or primary key constraint */
  TermsSlugKey = 'terms_slug_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type TermsDeleteAtPathInput = {
  meta?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type TermsDeleteElemInput = {
  meta?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type TermsDeleteKeyInput = {
  meta?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "terms" */
export type TermsInsertInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['jsonb']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<TaxonomiesObjRelInsertInput>;
  taxonomy_id?: Maybe<Scalars['uuid']>;
  term_relationships?: Maybe<TermRelationshipsArrRelInsertInput>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type TermsMaxFields = {
  __typename?: 'terms_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  taxonomy_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "terms" */
export type TermsMaxOrderBy = {
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  slug?: Maybe<OrderBy>;
  taxonomy_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type TermsMinFields = {
  __typename?: 'terms_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  taxonomy_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "terms" */
export type TermsMinOrderBy = {
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  slug?: Maybe<OrderBy>;
  taxonomy_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
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
  id?: Maybe<OrderBy>;
  meta?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  slug?: Maybe<OrderBy>;
  taxonomy?: Maybe<TaxonomiesOrderBy>;
  taxonomy_id?: Maybe<OrderBy>;
  term_relationships_aggregate?: Maybe<TermRelationshipsAggregateOrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** primary key columns input for table: terms */
export type TermsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type TermsPrependInput = {
  meta?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "terms" */
export enum TermsSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug',
  /** column name */
  TaxonomyId = 'taxonomy_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "terms" */
export type TermsSetInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['jsonb']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  taxonomy_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "terms" */
export enum TermsUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug',
  /** column name */
  TaxonomyId = 'taxonomy_id',
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

export type PageFromCreateMutationVariables = Exact<{
  object: PostsInsertInput;
}>;


export type PageFromCreateMutation = (
  { __typename?: 'mutation_root' }
  & { insert_posts_one?: Maybe<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id'>
  )> }
);

export type PagesTableQueryVariables = Exact<{ [key: string]: never; }>;


export type PagesTableQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'slug' | 'body' | 'status'>
  )>, posts_aggregate: (
    { __typename?: 'posts_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'posts_aggregate_fields' }
      & Pick<PostsAggregateFields, 'count'>
    )> }
  ) }
);

export type PostViewQueryVariables = Exact<{
  uuid: Scalars['uuid'];
}>;


export type PostViewQuery = (
  { __typename?: 'query_root' }
  & { posts_by_pk?: Maybe<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'slug' | 'body' | 'excerpt' | 'status'>
  )>, taxonomies: Array<(
    { __typename?: 'taxonomies' }
    & Pick<Taxonomies, 'id' | 'name' | 'description'>
    & { terms: Array<(
      { __typename?: 'terms' }
      & Pick<Terms, 'name' | 'id'>
    )> }
  )> }
);

export type PostsTableQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsTableQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'status' | 'slug' | 'body' | 'author_id' | 'created_at'>
  )>, posts_aggregate: (
    { __typename?: 'posts_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'posts_aggregate_fields' }
      & Pick<PostsAggregateFields, 'count'>
    )> }
  ) }
);


export const PageFromCreateDocument = gql`
    mutation PageFromCreate($object: posts_insert_input!) {
  insert_posts_one(object: $object) {
    id
  }
}
    `;
export type PageFromCreateMutationFn = Apollo.MutationFunction<PageFromCreateMutation, PageFromCreateMutationVariables>;

/**
 * __usePageFromCreateMutation__
 *
 * To run a mutation, you first call `usePageFromCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePageFromCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pageFromCreateMutation, { data, loading, error }] = usePageFromCreateMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function usePageFromCreateMutation(baseOptions?: Apollo.MutationHookOptions<PageFromCreateMutation, PageFromCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PageFromCreateMutation, PageFromCreateMutationVariables>(PageFromCreateDocument, options);
      }
export type PageFromCreateMutationHookResult = ReturnType<typeof usePageFromCreateMutation>;
export type PageFromCreateMutationResult = Apollo.MutationResult<PageFromCreateMutation>;
export type PageFromCreateMutationOptions = Apollo.BaseMutationOptions<PageFromCreateMutation, PageFromCreateMutationVariables>;
export const PagesTableDocument = gql`
    query PagesTable {
  posts(where: {type: {_eq: page}}) {
    id
    title
    slug
    body
    status
  }
  posts_aggregate(where: {type: {_eq: page}}) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __usePagesTableQuery__
 *
 * To run a query within a React component, call `usePagesTableQuery` and pass it any options that fit your needs.
 * When your component renders, `usePagesTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePagesTableQuery({
 *   variables: {
 *   },
 * });
 */
export function usePagesTableQuery(baseOptions?: Apollo.QueryHookOptions<PagesTableQuery, PagesTableQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PagesTableQuery, PagesTableQueryVariables>(PagesTableDocument, options);
      }
export function usePagesTableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PagesTableQuery, PagesTableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PagesTableQuery, PagesTableQueryVariables>(PagesTableDocument, options);
        }
export type PagesTableQueryHookResult = ReturnType<typeof usePagesTableQuery>;
export type PagesTableLazyQueryHookResult = ReturnType<typeof usePagesTableLazyQuery>;
export type PagesTableQueryResult = Apollo.QueryResult<PagesTableQuery, PagesTableQueryVariables>;
export const PostViewDocument = gql`
    query PostView($uuid: uuid!) {
  posts_by_pk(id: $uuid) {
    id
    title
    slug
    body
    excerpt
    status
  }
  taxonomies(where: {terms: {term_relationships: {object_id: {_eq: $uuid}}}}) {
    id
    name
    description
    terms(where: {term_relationships: {object_id: {_eq: $uuid}}}) {
      name
      id
    }
  }
}
    `;

/**
 * __usePostViewQuery__
 *
 * To run a query within a React component, call `usePostViewQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostViewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostViewQuery({
 *   variables: {
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function usePostViewQuery(baseOptions: Apollo.QueryHookOptions<PostViewQuery, PostViewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostViewQuery, PostViewQueryVariables>(PostViewDocument, options);
      }
export function usePostViewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostViewQuery, PostViewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostViewQuery, PostViewQueryVariables>(PostViewDocument, options);
        }
export type PostViewQueryHookResult = ReturnType<typeof usePostViewQuery>;
export type PostViewLazyQueryHookResult = ReturnType<typeof usePostViewLazyQuery>;
export type PostViewQueryResult = Apollo.QueryResult<PostViewQuery, PostViewQueryVariables>;
export const PostsTableDocument = gql`
    query PostsTable {
  posts(where: {type: {_eq: post}}) {
    id
    title
    status
    slug
    body
    author_id
    created_at
  }
  posts_aggregate(where: {type: {_eq: post}}) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __usePostsTableQuery__
 *
 * To run a query within a React component, call `usePostsTableQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsTableQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostsTableQuery(baseOptions?: Apollo.QueryHookOptions<PostsTableQuery, PostsTableQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsTableQuery, PostsTableQueryVariables>(PostsTableDocument, options);
      }
export function usePostsTableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsTableQuery, PostsTableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsTableQuery, PostsTableQueryVariables>(PostsTableDocument, options);
        }
export type PostsTableQueryHookResult = ReturnType<typeof usePostsTableQuery>;
export type PostsTableLazyQueryHookResult = ReturnType<typeof usePostsTableLazyQuery>;
export type PostsTableQueryResult = Apollo.QueryResult<PostsTableQuery, PostsTableQueryVariables>;