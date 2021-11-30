export type Maybe<T> = T | null;
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
  citext: any;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};


/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
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
export type String_Comparison_Exp = {
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
export type Auth_Account_Providers = {
  __typename?: 'auth_account_providers';
  /** An object relationship */
  account: Auth_Accounts;
  account_id: Scalars['uuid'];
  auth_provider: Scalars['String'];
  auth_provider_unique_id: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  provider: Auth_Providers;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "auth.account_providers" */
export type Auth_Account_Providers_Aggregate = {
  __typename?: 'auth_account_providers_aggregate';
  aggregate?: Maybe<Auth_Account_Providers_Aggregate_Fields>;
  nodes: Array<Auth_Account_Providers>;
};

/** aggregate fields of "auth.account_providers" */
export type Auth_Account_Providers_Aggregate_Fields = {
  __typename?: 'auth_account_providers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Account_Providers_Max_Fields>;
  min?: Maybe<Auth_Account_Providers_Min_Fields>;
};


/** aggregate fields of "auth.account_providers" */
export type Auth_Account_Providers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.account_providers" */
export type Auth_Account_Providers_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Auth_Account_Providers_Max_Order_By>;
  min?: Maybe<Auth_Account_Providers_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.account_providers" */
export type Auth_Account_Providers_Arr_Rel_Insert_Input = {
  data: Array<Auth_Account_Providers_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Account_Providers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.account_providers". All fields are combined with a logical 'AND'. */
export type Auth_Account_Providers_Bool_Exp = {
  _and?: Maybe<Array<Auth_Account_Providers_Bool_Exp>>;
  _not?: Maybe<Auth_Account_Providers_Bool_Exp>;
  _or?: Maybe<Array<Auth_Account_Providers_Bool_Exp>>;
  account?: Maybe<Auth_Accounts_Bool_Exp>;
  account_id?: Maybe<Uuid_Comparison_Exp>;
  auth_provider?: Maybe<String_Comparison_Exp>;
  auth_provider_unique_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  provider?: Maybe<Auth_Providers_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.account_providers" */
export enum Auth_Account_Providers_Constraint {
  /** unique or primary key constraint */
  AccountProvidersAccountIdAuthProviderKey = 'account_providers_account_id_auth_provider_key',
  /** unique or primary key constraint */
  AccountProvidersAuthProviderAuthProviderUniqueIdKey = 'account_providers_auth_provider_auth_provider_unique_id_key',
  /** unique or primary key constraint */
  AccountProvidersPkey = 'account_providers_pkey'
}

/** input type for inserting data into table "auth.account_providers" */
export type Auth_Account_Providers_Insert_Input = {
  account?: Maybe<Auth_Accounts_Obj_Rel_Insert_Input>;
  account_id?: Maybe<Scalars['uuid']>;
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  provider?: Maybe<Auth_Providers_Obj_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Auth_Account_Providers_Max_Fields = {
  __typename?: 'auth_account_providers_max_fields';
  account_id?: Maybe<Scalars['uuid']>;
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "auth.account_providers" */
export type Auth_Account_Providers_Max_Order_By = {
  account_id?: Maybe<Order_By>;
  auth_provider?: Maybe<Order_By>;
  auth_provider_unique_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Account_Providers_Min_Fields = {
  __typename?: 'auth_account_providers_min_fields';
  account_id?: Maybe<Scalars['uuid']>;
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "auth.account_providers" */
export type Auth_Account_Providers_Min_Order_By = {
  account_id?: Maybe<Order_By>;
  auth_provider?: Maybe<Order_By>;
  auth_provider_unique_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "auth.account_providers" */
export type Auth_Account_Providers_Mutation_Response = {
  __typename?: 'auth_account_providers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Account_Providers>;
};

/** on conflict condition type for table "auth.account_providers" */
export type Auth_Account_Providers_On_Conflict = {
  constraint: Auth_Account_Providers_Constraint;
  update_columns?: Array<Auth_Account_Providers_Update_Column>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.account_providers". */
export type Auth_Account_Providers_Order_By = {
  account?: Maybe<Auth_Accounts_Order_By>;
  account_id?: Maybe<Order_By>;
  auth_provider?: Maybe<Order_By>;
  auth_provider_unique_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  provider?: Maybe<Auth_Providers_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: auth_account_providers */
export type Auth_Account_Providers_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.account_providers" */
export enum Auth_Account_Providers_Select_Column {
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
export type Auth_Account_Providers_Set_Input = {
  account_id?: Maybe<Scalars['uuid']>;
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.account_providers" */
export enum Auth_Account_Providers_Update_Column {
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
export type Auth_Account_Roles = {
  __typename?: 'auth_account_roles';
  /** An object relationship */
  account: Auth_Accounts;
  account_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: Auth_Roles;
};

/** aggregated selection of "auth.account_roles" */
export type Auth_Account_Roles_Aggregate = {
  __typename?: 'auth_account_roles_aggregate';
  aggregate?: Maybe<Auth_Account_Roles_Aggregate_Fields>;
  nodes: Array<Auth_Account_Roles>;
};

/** aggregate fields of "auth.account_roles" */
export type Auth_Account_Roles_Aggregate_Fields = {
  __typename?: 'auth_account_roles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Account_Roles_Max_Fields>;
  min?: Maybe<Auth_Account_Roles_Min_Fields>;
};


/** aggregate fields of "auth.account_roles" */
export type Auth_Account_Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.account_roles" */
export type Auth_Account_Roles_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Auth_Account_Roles_Max_Order_By>;
  min?: Maybe<Auth_Account_Roles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.account_roles" */
export type Auth_Account_Roles_Arr_Rel_Insert_Input = {
  data: Array<Auth_Account_Roles_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Account_Roles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.account_roles". All fields are combined with a logical 'AND'. */
export type Auth_Account_Roles_Bool_Exp = {
  _and?: Maybe<Array<Auth_Account_Roles_Bool_Exp>>;
  _not?: Maybe<Auth_Account_Roles_Bool_Exp>;
  _or?: Maybe<Array<Auth_Account_Roles_Bool_Exp>>;
  account?: Maybe<Auth_Accounts_Bool_Exp>;
  account_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  role?: Maybe<String_Comparison_Exp>;
  roleByRole?: Maybe<Auth_Roles_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.account_roles" */
export enum Auth_Account_Roles_Constraint {
  /** unique or primary key constraint */
  AccountRolesPkey = 'account_roles_pkey',
  /** unique or primary key constraint */
  UserRolesAccountIdRoleKey = 'user_roles_account_id_role_key'
}

/** input type for inserting data into table "auth.account_roles" */
export type Auth_Account_Roles_Insert_Input = {
  account?: Maybe<Auth_Accounts_Obj_Rel_Insert_Input>;
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  roleByRole?: Maybe<Auth_Roles_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Auth_Account_Roles_Max_Fields = {
  __typename?: 'auth_account_roles_max_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "auth.account_roles" */
export type Auth_Account_Roles_Max_Order_By = {
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Account_Roles_Min_Fields = {
  __typename?: 'auth_account_roles_min_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "auth.account_roles" */
export type Auth_Account_Roles_Min_Order_By = {
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
};

/** response of any mutation on the table "auth.account_roles" */
export type Auth_Account_Roles_Mutation_Response = {
  __typename?: 'auth_account_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Account_Roles>;
};

/** on conflict condition type for table "auth.account_roles" */
export type Auth_Account_Roles_On_Conflict = {
  constraint: Auth_Account_Roles_Constraint;
  update_columns?: Array<Auth_Account_Roles_Update_Column>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.account_roles". */
export type Auth_Account_Roles_Order_By = {
  account?: Maybe<Auth_Accounts_Order_By>;
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  roleByRole?: Maybe<Auth_Roles_Order_By>;
};

/** primary key columns input for table: auth_account_roles */
export type Auth_Account_Roles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.account_roles" */
export enum Auth_Account_Roles_Select_Column {
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
export type Auth_Account_Roles_Set_Input = {
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
};

/** update columns of table "auth.account_roles" */
export enum Auth_Account_Roles_Update_Column {
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
export type Auth_Accounts = {
  __typename?: 'auth_accounts';
  /** An array relationship */
  account_providers: Array<Auth_Account_Providers>;
  /** An aggregate relationship */
  account_providers_aggregate: Auth_Account_Providers_Aggregate;
  /** An array relationship */
  account_roles: Array<Auth_Account_Roles>;
  /** An aggregate relationship */
  account_roles_aggregate: Auth_Account_Roles_Aggregate;
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
  refresh_tokens: Array<Auth_Refresh_Tokens>;
  /** An aggregate relationship */
  refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate;
  /** An object relationship */
  role: Auth_Roles;
  ticket: Scalars['uuid'];
  ticket_expires_at: Scalars['timestamptz'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsCustom_Register_DataArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsRefresh_TokensArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsRefresh_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};

/** aggregated selection of "auth.accounts" */
export type Auth_Accounts_Aggregate = {
  __typename?: 'auth_accounts_aggregate';
  aggregate?: Maybe<Auth_Accounts_Aggregate_Fields>;
  nodes: Array<Auth_Accounts>;
};

/** aggregate fields of "auth.accounts" */
export type Auth_Accounts_Aggregate_Fields = {
  __typename?: 'auth_accounts_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Accounts_Max_Fields>;
  min?: Maybe<Auth_Accounts_Min_Fields>;
};


/** aggregate fields of "auth.accounts" */
export type Auth_Accounts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Accounts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.accounts" */
export type Auth_Accounts_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Auth_Accounts_Max_Order_By>;
  min?: Maybe<Auth_Accounts_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Auth_Accounts_Append_Input = {
  custom_register_data?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.accounts" */
export type Auth_Accounts_Arr_Rel_Insert_Input = {
  data: Array<Auth_Accounts_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Accounts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.accounts". All fields are combined with a logical 'AND'. */
export type Auth_Accounts_Bool_Exp = {
  _and?: Maybe<Array<Auth_Accounts_Bool_Exp>>;
  _not?: Maybe<Auth_Accounts_Bool_Exp>;
  _or?: Maybe<Array<Auth_Accounts_Bool_Exp>>;
  account_providers?: Maybe<Auth_Account_Providers_Bool_Exp>;
  account_roles?: Maybe<Auth_Account_Roles_Bool_Exp>;
  active?: Maybe<Boolean_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  custom_register_data?: Maybe<Jsonb_Comparison_Exp>;
  default_role?: Maybe<String_Comparison_Exp>;
  email?: Maybe<Citext_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_anonymous?: Maybe<Boolean_Comparison_Exp>;
  mfa_enabled?: Maybe<Boolean_Comparison_Exp>;
  new_email?: Maybe<Citext_Comparison_Exp>;
  otp_secret?: Maybe<String_Comparison_Exp>;
  password_hash?: Maybe<String_Comparison_Exp>;
  refresh_tokens?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
  role?: Maybe<Auth_Roles_Bool_Exp>;
  ticket?: Maybe<Uuid_Comparison_Exp>;
  ticket_expires_at?: Maybe<Timestamptz_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.accounts" */
export enum Auth_Accounts_Constraint {
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
export type Auth_Accounts_Delete_At_Path_Input = {
  custom_register_data?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Auth_Accounts_Delete_Elem_Input = {
  custom_register_data?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Auth_Accounts_Delete_Key_Input = {
  custom_register_data?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.accounts" */
export type Auth_Accounts_Insert_Input = {
  account_providers?: Maybe<Auth_Account_Providers_Arr_Rel_Insert_Input>;
  account_roles?: Maybe<Auth_Account_Roles_Arr_Rel_Insert_Input>;
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
  refresh_tokens?: Maybe<Auth_Refresh_Tokens_Arr_Rel_Insert_Input>;
  role?: Maybe<Auth_Roles_Obj_Rel_Insert_Input>;
  ticket?: Maybe<Scalars['uuid']>;
  ticket_expires_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Auth_Accounts_Max_Fields = {
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
export type Auth_Accounts_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  new_email?: Maybe<Order_By>;
  otp_secret?: Maybe<Order_By>;
  password_hash?: Maybe<Order_By>;
  ticket?: Maybe<Order_By>;
  ticket_expires_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Accounts_Min_Fields = {
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
export type Auth_Accounts_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  new_email?: Maybe<Order_By>;
  otp_secret?: Maybe<Order_By>;
  password_hash?: Maybe<Order_By>;
  ticket?: Maybe<Order_By>;
  ticket_expires_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "auth.accounts" */
export type Auth_Accounts_Mutation_Response = {
  __typename?: 'auth_accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Accounts>;
};

/** input type for inserting object relation for remote table "auth.accounts" */
export type Auth_Accounts_Obj_Rel_Insert_Input = {
  data: Auth_Accounts_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Accounts_On_Conflict>;
};

/** on conflict condition type for table "auth.accounts" */
export type Auth_Accounts_On_Conflict = {
  constraint: Auth_Accounts_Constraint;
  update_columns?: Array<Auth_Accounts_Update_Column>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.accounts". */
export type Auth_Accounts_Order_By = {
  account_providers_aggregate?: Maybe<Auth_Account_Providers_Aggregate_Order_By>;
  account_roles_aggregate?: Maybe<Auth_Account_Roles_Aggregate_Order_By>;
  active?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  custom_register_data?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_anonymous?: Maybe<Order_By>;
  mfa_enabled?: Maybe<Order_By>;
  new_email?: Maybe<Order_By>;
  otp_secret?: Maybe<Order_By>;
  password_hash?: Maybe<Order_By>;
  refresh_tokens_aggregate?: Maybe<Auth_Refresh_Tokens_Aggregate_Order_By>;
  role?: Maybe<Auth_Roles_Order_By>;
  ticket?: Maybe<Order_By>;
  ticket_expires_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: auth_accounts */
export type Auth_Accounts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Auth_Accounts_Prepend_Input = {
  custom_register_data?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "auth.accounts" */
export enum Auth_Accounts_Select_Column {
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
export type Auth_Accounts_Set_Input = {
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
export enum Auth_Accounts_Update_Column {
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
export type Auth_Providers = {
  __typename?: 'auth_providers';
  /** An array relationship */
  account_providers: Array<Auth_Account_Providers>;
  /** An aggregate relationship */
  account_providers_aggregate: Auth_Account_Providers_Aggregate;
  provider: Scalars['String'];
};


/** columns and relationships of "auth.providers" */
export type Auth_ProvidersAccount_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


/** columns and relationships of "auth.providers" */
export type Auth_ProvidersAccount_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type Auth_Providers_Aggregate = {
  __typename?: 'auth_providers_aggregate';
  aggregate?: Maybe<Auth_Providers_Aggregate_Fields>;
  nodes: Array<Auth_Providers>;
};

/** aggregate fields of "auth.providers" */
export type Auth_Providers_Aggregate_Fields = {
  __typename?: 'auth_providers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Providers_Max_Fields>;
  min?: Maybe<Auth_Providers_Min_Fields>;
};


/** aggregate fields of "auth.providers" */
export type Auth_Providers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Providers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type Auth_Providers_Bool_Exp = {
  _and?: Maybe<Array<Auth_Providers_Bool_Exp>>;
  _not?: Maybe<Auth_Providers_Bool_Exp>;
  _or?: Maybe<Array<Auth_Providers_Bool_Exp>>;
  account_providers?: Maybe<Auth_Account_Providers_Bool_Exp>;
  provider?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum Auth_Providers_Constraint {
  /** unique or primary key constraint */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type Auth_Providers_Insert_Input = {
  account_providers?: Maybe<Auth_Account_Providers_Arr_Rel_Insert_Input>;
  provider?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auth_Providers_Max_Fields = {
  __typename?: 'auth_providers_max_fields';
  provider?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Auth_Providers_Min_Fields = {
  __typename?: 'auth_providers_min_fields';
  provider?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.providers" */
export type Auth_Providers_Mutation_Response = {
  __typename?: 'auth_providers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Providers>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type Auth_Providers_Obj_Rel_Insert_Input = {
  data: Auth_Providers_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Providers_On_Conflict>;
};

/** on conflict condition type for table "auth.providers" */
export type Auth_Providers_On_Conflict = {
  constraint: Auth_Providers_Constraint;
  update_columns?: Array<Auth_Providers_Update_Column>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type Auth_Providers_Order_By = {
  account_providers_aggregate?: Maybe<Auth_Account_Providers_Aggregate_Order_By>;
  provider?: Maybe<Order_By>;
};

/** primary key columns input for table: auth_providers */
export type Auth_Providers_Pk_Columns_Input = {
  provider: Scalars['String'];
};

/** select columns of table "auth.providers" */
export enum Auth_Providers_Select_Column {
  /** column name */
  Provider = 'provider'
}

/** input type for updating data in table "auth.providers" */
export type Auth_Providers_Set_Input = {
  provider?: Maybe<Scalars['String']>;
};

/** update columns of table "auth.providers" */
export enum Auth_Providers_Update_Column {
  /** column name */
  Provider = 'provider'
}

/** columns and relationships of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens = {
  __typename?: 'auth_refresh_tokens';
  /** An object relationship */
  account: Auth_Accounts;
  account_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  expires_at: Scalars['timestamptz'];
  refresh_token: Scalars['uuid'];
};

/** aggregated selection of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate = {
  __typename?: 'auth_refresh_tokens_aggregate';
  aggregate?: Maybe<Auth_Refresh_Tokens_Aggregate_Fields>;
  nodes: Array<Auth_Refresh_Tokens>;
};

/** aggregate fields of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate_Fields = {
  __typename?: 'auth_refresh_tokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Refresh_Tokens_Max_Fields>;
  min?: Maybe<Auth_Refresh_Tokens_Min_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Auth_Refresh_Tokens_Max_Order_By>;
  min?: Maybe<Auth_Refresh_Tokens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Arr_Rel_Insert_Input = {
  data: Array<Auth_Refresh_Tokens_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Refresh_Tokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type Auth_Refresh_Tokens_Bool_Exp = {
  _and?: Maybe<Array<Auth_Refresh_Tokens_Bool_Exp>>;
  _not?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
  _or?: Maybe<Array<Auth_Refresh_Tokens_Bool_Exp>>;
  account?: Maybe<Auth_Accounts_Bool_Exp>;
  account_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expires_at?: Maybe<Timestamptz_Comparison_Exp>;
  refresh_token?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum Auth_Refresh_Tokens_Constraint {
  /** unique or primary key constraint */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** input type for inserting data into table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Insert_Input = {
  account?: Maybe<Auth_Accounts_Obj_Rel_Insert_Input>;
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Auth_Refresh_Tokens_Max_Fields = {
  __typename?: 'auth_refresh_tokens_max_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Max_Order_By = {
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Refresh_Tokens_Min_Fields = {
  __typename?: 'auth_refresh_tokens_min_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Min_Order_By = {
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Mutation_Response = {
  __typename?: 'auth_refresh_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Refresh_Tokens>;
};

/** on conflict condition type for table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_On_Conflict = {
  constraint: Auth_Refresh_Tokens_Constraint;
  update_columns?: Array<Auth_Refresh_Tokens_Update_Column>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type Auth_Refresh_Tokens_Order_By = {
  account?: Maybe<Auth_Accounts_Order_By>;
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
};

/** primary key columns input for table: auth_refresh_tokens */
export type Auth_Refresh_Tokens_Pk_Columns_Input = {
  refresh_token: Scalars['uuid'];
};

/** select columns of table "auth.refresh_tokens" */
export enum Auth_Refresh_Tokens_Select_Column {
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
export type Auth_Refresh_Tokens_Set_Input = {
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum Auth_Refresh_Tokens_Update_Column {
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
export type Auth_Roles = {
  __typename?: 'auth_roles';
  /** An array relationship */
  account_roles: Array<Auth_Account_Roles>;
  /** An aggregate relationship */
  account_roles_aggregate: Auth_Account_Roles_Aggregate;
  /** An array relationship */
  accounts: Array<Auth_Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Auth_Accounts_Aggregate;
  role: Scalars['String'];
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccount_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccount_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccountsArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type Auth_Roles_Aggregate = {
  __typename?: 'auth_roles_aggregate';
  aggregate?: Maybe<Auth_Roles_Aggregate_Fields>;
  nodes: Array<Auth_Roles>;
};

/** aggregate fields of "auth.roles" */
export type Auth_Roles_Aggregate_Fields = {
  __typename?: 'auth_roles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Roles_Max_Fields>;
  min?: Maybe<Auth_Roles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type Auth_Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type Auth_Roles_Bool_Exp = {
  _and?: Maybe<Array<Auth_Roles_Bool_Exp>>;
  _not?: Maybe<Auth_Roles_Bool_Exp>;
  _or?: Maybe<Array<Auth_Roles_Bool_Exp>>;
  account_roles?: Maybe<Auth_Account_Roles_Bool_Exp>;
  accounts?: Maybe<Auth_Accounts_Bool_Exp>;
  role?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum Auth_Roles_Constraint {
  /** unique or primary key constraint */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type Auth_Roles_Insert_Input = {
  account_roles?: Maybe<Auth_Account_Roles_Arr_Rel_Insert_Input>;
  accounts?: Maybe<Auth_Accounts_Arr_Rel_Insert_Input>;
  role?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auth_Roles_Max_Fields = {
  __typename?: 'auth_roles_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Auth_Roles_Min_Fields = {
  __typename?: 'auth_roles_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.roles" */
export type Auth_Roles_Mutation_Response = {
  __typename?: 'auth_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Roles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type Auth_Roles_Obj_Rel_Insert_Input = {
  data: Auth_Roles_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Roles_On_Conflict>;
};

/** on conflict condition type for table "auth.roles" */
export type Auth_Roles_On_Conflict = {
  constraint: Auth_Roles_Constraint;
  update_columns?: Array<Auth_Roles_Update_Column>;
  where?: Maybe<Auth_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type Auth_Roles_Order_By = {
  account_roles_aggregate?: Maybe<Auth_Account_Roles_Aggregate_Order_By>;
  accounts_aggregate?: Maybe<Auth_Accounts_Aggregate_Order_By>;
  role?: Maybe<Order_By>;
};

/** primary key columns input for table: auth_roles */
export type Auth_Roles_Pk_Columns_Input = {
  role: Scalars['String'];
};

/** select columns of table "auth.roles" */
export enum Auth_Roles_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type Auth_Roles_Set_Input = {
  role?: Maybe<Scalars['String']>;
};

/** update columns of table "auth.roles" */
export enum Auth_Roles_Update_Column {
  /** column name */
  Role = 'role'
}


/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
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
  comments_aggregate: Comments_Aggregate;
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
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** columns and relationships of "comments" */
export type CommentsComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** columns and relationships of "comments" */
export type CommentsMetaArgs = {
  path?: Maybe<Scalars['String']>;
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
  columns?: Maybe<Array<Comments_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "comments" */
export type Comments_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Comments_Max_Order_By>;
  min?: Maybe<Comments_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Comments_Append_Input = {
  meta?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "comments" */
export type Comments_Arr_Rel_Insert_Input = {
  data: Array<Comments_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Comments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export type Comments_Bool_Exp = {
  _and?: Maybe<Array<Comments_Bool_Exp>>;
  _not?: Maybe<Comments_Bool_Exp>;
  _or?: Maybe<Array<Comments_Bool_Exp>>;
  author_id?: Maybe<Uuid_Comparison_Exp>;
  comment?: Maybe<Comments_Bool_Exp>;
  comments?: Maybe<Comments_Bool_Exp>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  meta?: Maybe<Jsonb_Comparison_Exp>;
  parent_id?: Maybe<Uuid_Comparison_Exp>;
  post?: Maybe<Posts_Bool_Exp>;
  post_id?: Maybe<Uuid_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "comments" */
export enum Comments_Constraint {
  /** unique or primary key constraint */
  CommentsPkey = 'comments_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Comments_Delete_At_Path_Input = {
  meta?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Comments_Delete_Elem_Input = {
  meta?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Comments_Delete_Key_Input = {
  meta?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "comments" */
export type Comments_Insert_Input = {
  author_id?: Maybe<Scalars['uuid']>;
  comment?: Maybe<Comments_Obj_Rel_Insert_Input>;
  comments?: Maybe<Comments_Arr_Rel_Insert_Input>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['jsonb']>;
  parent_id?: Maybe<Scalars['uuid']>;
  post?: Maybe<Posts_Obj_Rel_Insert_Input>;
  post_id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Comments_Max_Fields = {
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
export type Comments_Max_Order_By = {
  author_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Comments_Min_Fields = {
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
export type Comments_Min_Order_By = {
  author_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
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
  /** on conflict condition */
  on_conflict?: Maybe<Comments_On_Conflict>;
};

/** on conflict condition type for table "comments" */
export type Comments_On_Conflict = {
  constraint: Comments_Constraint;
  update_columns?: Array<Comments_Update_Column>;
  where?: Maybe<Comments_Bool_Exp>;
};

/** Ordering options when selecting data from "comments". */
export type Comments_Order_By = {
  author_id?: Maybe<Order_By>;
  comment?: Maybe<Comments_Order_By>;
  comments_aggregate?: Maybe<Comments_Aggregate_Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  meta?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  post?: Maybe<Posts_Order_By>;
  post_id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: comments */
export type Comments_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Comments_Prepend_Input = {
  meta?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "comments" */
export enum Comments_Select_Column {
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
export type Comments_Set_Input = {
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
export enum Comments_Update_Column {
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
export type Jsonb_Comparison_Exp = {
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
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "auth.account_providers" */
  delete_auth_account_providers?: Maybe<Auth_Account_Providers_Mutation_Response>;
  /** delete single row from the table: "auth.account_providers" */
  delete_auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>;
  /** delete data from the table: "auth.account_roles" */
  delete_auth_account_roles?: Maybe<Auth_Account_Roles_Mutation_Response>;
  /** delete single row from the table: "auth.account_roles" */
  delete_auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** delete data from the table: "auth.accounts" */
  delete_auth_accounts?: Maybe<Auth_Accounts_Mutation_Response>;
  /** delete single row from the table: "auth.accounts" */
  delete_auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** delete data from the table: "auth.providers" */
  delete_auth_providers?: Maybe<Auth_Providers_Mutation_Response>;
  /** delete single row from the table: "auth.providers" */
  delete_auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** delete data from the table: "auth.refresh_tokens" */
  delete_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  delete_auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** delete data from the table: "auth.roles" */
  delete_auth_roles?: Maybe<Auth_Roles_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  delete_auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** delete data from the table: "comments" */
  delete_comments?: Maybe<Comments_Mutation_Response>;
  /** delete single row from the table: "comments" */
  delete_comments_by_pk?: Maybe<Comments>;
  /** delete data from the table: "post_status" */
  delete_post_status?: Maybe<Post_Status_Mutation_Response>;
  /** delete single row from the table: "post_status" */
  delete_post_status_by_pk?: Maybe<Post_Status>;
  /** delete data from the table: "post_types" */
  delete_post_types?: Maybe<Post_Types_Mutation_Response>;
  /** delete single row from the table: "post_types" */
  delete_post_types_by_pk?: Maybe<Post_Types>;
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<Posts_Mutation_Response>;
  /** delete single row from the table: "posts" */
  delete_posts_by_pk?: Maybe<Posts>;
  /** delete data from the table: "taxonomies" */
  delete_taxonomies?: Maybe<Taxonomies_Mutation_Response>;
  /** delete single row from the table: "taxonomies" */
  delete_taxonomies_by_pk?: Maybe<Taxonomies>;
  /** delete data from the table: "term_relationships" */
  delete_term_relationships?: Maybe<Term_Relationships_Mutation_Response>;
  /** delete single row from the table: "term_relationships" */
  delete_term_relationships_by_pk?: Maybe<Term_Relationships>;
  /** delete data from the table: "terms" */
  delete_terms?: Maybe<Terms_Mutation_Response>;
  /** delete single row from the table: "terms" */
  delete_terms_by_pk?: Maybe<Terms>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "auth.account_providers" */
  insert_auth_account_providers?: Maybe<Auth_Account_Providers_Mutation_Response>;
  /** insert a single row into the table: "auth.account_providers" */
  insert_auth_account_providers_one?: Maybe<Auth_Account_Providers>;
  /** insert data into the table: "auth.account_roles" */
  insert_auth_account_roles?: Maybe<Auth_Account_Roles_Mutation_Response>;
  /** insert a single row into the table: "auth.account_roles" */
  insert_auth_account_roles_one?: Maybe<Auth_Account_Roles>;
  /** insert data into the table: "auth.accounts" */
  insert_auth_accounts?: Maybe<Auth_Accounts_Mutation_Response>;
  /** insert a single row into the table: "auth.accounts" */
  insert_auth_accounts_one?: Maybe<Auth_Accounts>;
  /** insert data into the table: "auth.providers" */
  insert_auth_providers?: Maybe<Auth_Providers_Mutation_Response>;
  /** insert a single row into the table: "auth.providers" */
  insert_auth_providers_one?: Maybe<Auth_Providers>;
  /** insert data into the table: "auth.refresh_tokens" */
  insert_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insert_auth_refresh_tokens_one?: Maybe<Auth_Refresh_Tokens>;
  /** insert data into the table: "auth.roles" */
  insert_auth_roles?: Maybe<Auth_Roles_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insert_auth_roles_one?: Maybe<Auth_Roles>;
  /** insert data into the table: "comments" */
  insert_comments?: Maybe<Comments_Mutation_Response>;
  /** insert a single row into the table: "comments" */
  insert_comments_one?: Maybe<Comments>;
  /** insert data into the table: "post_status" */
  insert_post_status?: Maybe<Post_Status_Mutation_Response>;
  /** insert a single row into the table: "post_status" */
  insert_post_status_one?: Maybe<Post_Status>;
  /** insert data into the table: "post_types" */
  insert_post_types?: Maybe<Post_Types_Mutation_Response>;
  /** insert a single row into the table: "post_types" */
  insert_post_types_one?: Maybe<Post_Types>;
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<Posts_Mutation_Response>;
  /** insert a single row into the table: "posts" */
  insert_posts_one?: Maybe<Posts>;
  /** insert data into the table: "taxonomies" */
  insert_taxonomies?: Maybe<Taxonomies_Mutation_Response>;
  /** insert a single row into the table: "taxonomies" */
  insert_taxonomies_one?: Maybe<Taxonomies>;
  /** insert data into the table: "term_relationships" */
  insert_term_relationships?: Maybe<Term_Relationships_Mutation_Response>;
  /** insert a single row into the table: "term_relationships" */
  insert_term_relationships_one?: Maybe<Term_Relationships>;
  /** insert data into the table: "terms" */
  insert_terms?: Maybe<Terms_Mutation_Response>;
  /** insert a single row into the table: "terms" */
  insert_terms_one?: Maybe<Terms>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "auth.account_providers" */
  update_auth_account_providers?: Maybe<Auth_Account_Providers_Mutation_Response>;
  /** update single row of the table: "auth.account_providers" */
  update_auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>;
  /** update data of the table: "auth.account_roles" */
  update_auth_account_roles?: Maybe<Auth_Account_Roles_Mutation_Response>;
  /** update single row of the table: "auth.account_roles" */
  update_auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** update data of the table: "auth.accounts" */
  update_auth_accounts?: Maybe<Auth_Accounts_Mutation_Response>;
  /** update single row of the table: "auth.accounts" */
  update_auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** update data of the table: "auth.providers" */
  update_auth_providers?: Maybe<Auth_Providers_Mutation_Response>;
  /** update single row of the table: "auth.providers" */
  update_auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** update data of the table: "auth.refresh_tokens" */
  update_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  update_auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** update data of the table: "auth.roles" */
  update_auth_roles?: Maybe<Auth_Roles_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  update_auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** update data of the table: "comments" */
  update_comments?: Maybe<Comments_Mutation_Response>;
  /** update single row of the table: "comments" */
  update_comments_by_pk?: Maybe<Comments>;
  /** update data of the table: "post_status" */
  update_post_status?: Maybe<Post_Status_Mutation_Response>;
  /** update single row of the table: "post_status" */
  update_post_status_by_pk?: Maybe<Post_Status>;
  /** update data of the table: "post_types" */
  update_post_types?: Maybe<Post_Types_Mutation_Response>;
  /** update single row of the table: "post_types" */
  update_post_types_by_pk?: Maybe<Post_Types>;
  /** update data of the table: "posts" */
  update_posts?: Maybe<Posts_Mutation_Response>;
  /** update single row of the table: "posts" */
  update_posts_by_pk?: Maybe<Posts>;
  /** update data of the table: "taxonomies" */
  update_taxonomies?: Maybe<Taxonomies_Mutation_Response>;
  /** update single row of the table: "taxonomies" */
  update_taxonomies_by_pk?: Maybe<Taxonomies>;
  /** update data of the table: "term_relationships" */
  update_term_relationships?: Maybe<Term_Relationships_Mutation_Response>;
  /** update single row of the table: "term_relationships" */
  update_term_relationships_by_pk?: Maybe<Term_Relationships>;
  /** update data of the table: "terms" */
  update_terms?: Maybe<Terms_Mutation_Response>;
  /** update single row of the table: "terms" */
  update_terms_by_pk?: Maybe<Terms>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_ProvidersArgs = {
  where: Auth_Account_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_Providers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_RolesArgs = {
  where: Auth_Account_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_AccountsArgs = {
  where: Auth_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_ProvidersArgs = {
  where: Auth_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Providers_By_PkArgs = {
  provider: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Refresh_TokensArgs = {
  where: Auth_Refresh_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Refresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_RolesArgs = {
  where: Auth_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Roles_By_PkArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_CommentsArgs = {
  where: Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Comments_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Post_StatusArgs = {
  where: Post_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_Status_By_PkArgs = {
  status: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Post_TypesArgs = {
  where: Post_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_Types_By_PkArgs = {
  type: Post_Types_Enum;
};


/** mutation root */
export type Mutation_RootDelete_PostsArgs = {
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Posts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TaxonomiesArgs = {
  where: Taxonomies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Taxonomies_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Term_RelationshipsArgs = {
  where: Term_Relationships_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Term_Relationships_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TermsArgs = {
  where: Terms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Terms_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_ProvidersArgs = {
  objects: Array<Auth_Account_Providers_Insert_Input>;
  on_conflict?: Maybe<Auth_Account_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_Providers_OneArgs = {
  object: Auth_Account_Providers_Insert_Input;
  on_conflict?: Maybe<Auth_Account_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_RolesArgs = {
  objects: Array<Auth_Account_Roles_Insert_Input>;
  on_conflict?: Maybe<Auth_Account_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_Roles_OneArgs = {
  object: Auth_Account_Roles_Insert_Input;
  on_conflict?: Maybe<Auth_Account_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_AccountsArgs = {
  objects: Array<Auth_Accounts_Insert_Input>;
  on_conflict?: Maybe<Auth_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Accounts_OneArgs = {
  object: Auth_Accounts_Insert_Input;
  on_conflict?: Maybe<Auth_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_ProvidersArgs = {
  objects: Array<Auth_Providers_Insert_Input>;
  on_conflict?: Maybe<Auth_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Providers_OneArgs = {
  object: Auth_Providers_Insert_Input;
  on_conflict?: Maybe<Auth_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Refresh_TokensArgs = {
  objects: Array<Auth_Refresh_Tokens_Insert_Input>;
  on_conflict?: Maybe<Auth_Refresh_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Refresh_Tokens_OneArgs = {
  object: Auth_Refresh_Tokens_Insert_Input;
  on_conflict?: Maybe<Auth_Refresh_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_RolesArgs = {
  objects: Array<Auth_Roles_Insert_Input>;
  on_conflict?: Maybe<Auth_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Roles_OneArgs = {
  object: Auth_Roles_Insert_Input;
  on_conflict?: Maybe<Auth_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CommentsArgs = {
  objects: Array<Comments_Insert_Input>;
  on_conflict?: Maybe<Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Comments_OneArgs = {
  object: Comments_Insert_Input;
  on_conflict?: Maybe<Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_StatusArgs = {
  objects: Array<Post_Status_Insert_Input>;
  on_conflict?: Maybe<Post_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_Status_OneArgs = {
  object: Post_Status_Insert_Input;
  on_conflict?: Maybe<Post_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_TypesArgs = {
  objects: Array<Post_Types_Insert_Input>;
  on_conflict?: Maybe<Post_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_Types_OneArgs = {
  object: Post_Types_Insert_Input;
  on_conflict?: Maybe<Post_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PostsArgs = {
  objects: Array<Posts_Insert_Input>;
  on_conflict?: Maybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Posts_OneArgs = {
  object: Posts_Insert_Input;
  on_conflict?: Maybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TaxonomiesArgs = {
  objects: Array<Taxonomies_Insert_Input>;
  on_conflict?: Maybe<Taxonomies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Taxonomies_OneArgs = {
  object: Taxonomies_Insert_Input;
  on_conflict?: Maybe<Taxonomies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Term_RelationshipsArgs = {
  objects: Array<Term_Relationships_Insert_Input>;
  on_conflict?: Maybe<Term_Relationships_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Term_Relationships_OneArgs = {
  object: Term_Relationships_Insert_Input;
  on_conflict?: Maybe<Term_Relationships_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TermsArgs = {
  objects: Array<Terms_Insert_Input>;
  on_conflict?: Maybe<Terms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Terms_OneArgs = {
  object: Terms_Insert_Input;
  on_conflict?: Maybe<Terms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_ProvidersArgs = {
  _set?: Maybe<Auth_Account_Providers_Set_Input>;
  where: Auth_Account_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_Providers_By_PkArgs = {
  _set?: Maybe<Auth_Account_Providers_Set_Input>;
  pk_columns: Auth_Account_Providers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_RolesArgs = {
  _set?: Maybe<Auth_Account_Roles_Set_Input>;
  where: Auth_Account_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_Roles_By_PkArgs = {
  _set?: Maybe<Auth_Account_Roles_Set_Input>;
  pk_columns: Auth_Account_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_AccountsArgs = {
  _append?: Maybe<Auth_Accounts_Append_Input>;
  _delete_at_path?: Maybe<Auth_Accounts_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Auth_Accounts_Delete_Elem_Input>;
  _delete_key?: Maybe<Auth_Accounts_Delete_Key_Input>;
  _prepend?: Maybe<Auth_Accounts_Prepend_Input>;
  _set?: Maybe<Auth_Accounts_Set_Input>;
  where: Auth_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Accounts_By_PkArgs = {
  _append?: Maybe<Auth_Accounts_Append_Input>;
  _delete_at_path?: Maybe<Auth_Accounts_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Auth_Accounts_Delete_Elem_Input>;
  _delete_key?: Maybe<Auth_Accounts_Delete_Key_Input>;
  _prepend?: Maybe<Auth_Accounts_Prepend_Input>;
  _set?: Maybe<Auth_Accounts_Set_Input>;
  pk_columns: Auth_Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_ProvidersArgs = {
  _set?: Maybe<Auth_Providers_Set_Input>;
  where: Auth_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Providers_By_PkArgs = {
  _set?: Maybe<Auth_Providers_Set_Input>;
  pk_columns: Auth_Providers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Refresh_TokensArgs = {
  _set?: Maybe<Auth_Refresh_Tokens_Set_Input>;
  where: Auth_Refresh_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Refresh_Tokens_By_PkArgs = {
  _set?: Maybe<Auth_Refresh_Tokens_Set_Input>;
  pk_columns: Auth_Refresh_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_RolesArgs = {
  _set?: Maybe<Auth_Roles_Set_Input>;
  where: Auth_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Roles_By_PkArgs = {
  _set?: Maybe<Auth_Roles_Set_Input>;
  pk_columns: Auth_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CommentsArgs = {
  _append?: Maybe<Comments_Append_Input>;
  _delete_at_path?: Maybe<Comments_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Comments_Delete_Elem_Input>;
  _delete_key?: Maybe<Comments_Delete_Key_Input>;
  _prepend?: Maybe<Comments_Prepend_Input>;
  _set?: Maybe<Comments_Set_Input>;
  where: Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Comments_By_PkArgs = {
  _append?: Maybe<Comments_Append_Input>;
  _delete_at_path?: Maybe<Comments_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Comments_Delete_Elem_Input>;
  _delete_key?: Maybe<Comments_Delete_Key_Input>;
  _prepend?: Maybe<Comments_Prepend_Input>;
  _set?: Maybe<Comments_Set_Input>;
  pk_columns: Comments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Post_StatusArgs = {
  _set?: Maybe<Post_Status_Set_Input>;
  where: Post_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Status_By_PkArgs = {
  _set?: Maybe<Post_Status_Set_Input>;
  pk_columns: Post_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Post_TypesArgs = {
  _set?: Maybe<Post_Types_Set_Input>;
  where: Post_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Types_By_PkArgs = {
  _set?: Maybe<Post_Types_Set_Input>;
  pk_columns: Post_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PostsArgs = {
  _append?: Maybe<Posts_Append_Input>;
  _delete_at_path?: Maybe<Posts_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Posts_Delete_Elem_Input>;
  _delete_key?: Maybe<Posts_Delete_Key_Input>;
  _prepend?: Maybe<Posts_Prepend_Input>;
  _set?: Maybe<Posts_Set_Input>;
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Posts_By_PkArgs = {
  _append?: Maybe<Posts_Append_Input>;
  _delete_at_path?: Maybe<Posts_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Posts_Delete_Elem_Input>;
  _delete_key?: Maybe<Posts_Delete_Key_Input>;
  _prepend?: Maybe<Posts_Prepend_Input>;
  _set?: Maybe<Posts_Set_Input>;
  pk_columns: Posts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TaxonomiesArgs = {
  _append?: Maybe<Taxonomies_Append_Input>;
  _delete_at_path?: Maybe<Taxonomies_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Taxonomies_Delete_Elem_Input>;
  _delete_key?: Maybe<Taxonomies_Delete_Key_Input>;
  _prepend?: Maybe<Taxonomies_Prepend_Input>;
  _set?: Maybe<Taxonomies_Set_Input>;
  where: Taxonomies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Taxonomies_By_PkArgs = {
  _append?: Maybe<Taxonomies_Append_Input>;
  _delete_at_path?: Maybe<Taxonomies_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Taxonomies_Delete_Elem_Input>;
  _delete_key?: Maybe<Taxonomies_Delete_Key_Input>;
  _prepend?: Maybe<Taxonomies_Prepend_Input>;
  _set?: Maybe<Taxonomies_Set_Input>;
  pk_columns: Taxonomies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Term_RelationshipsArgs = {
  _set?: Maybe<Term_Relationships_Set_Input>;
  where: Term_Relationships_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Term_Relationships_By_PkArgs = {
  _set?: Maybe<Term_Relationships_Set_Input>;
  pk_columns: Term_Relationships_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TermsArgs = {
  _append?: Maybe<Terms_Append_Input>;
  _delete_at_path?: Maybe<Terms_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Terms_Delete_Elem_Input>;
  _delete_key?: Maybe<Terms_Delete_Key_Input>;
  _prepend?: Maybe<Terms_Prepend_Input>;
  _set?: Maybe<Terms_Set_Input>;
  where: Terms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Terms_By_PkArgs = {
  _append?: Maybe<Terms_Append_Input>;
  _delete_at_path?: Maybe<Terms_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Terms_Delete_Elem_Input>;
  _delete_key?: Maybe<Terms_Delete_Key_Input>;
  _prepend?: Maybe<Terms_Prepend_Input>;
  _set?: Maybe<Terms_Set_Input>;
  pk_columns: Terms_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _append?: Maybe<Users_Append_Input>;
  _delete_at_path?: Maybe<Users_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Users_Delete_Elem_Input>;
  _delete_key?: Maybe<Users_Delete_Key_Input>;
  _prepend?: Maybe<Users_Prepend_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _append?: Maybe<Users_Append_Input>;
  _delete_at_path?: Maybe<Users_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Users_Delete_Elem_Input>;
  _delete_key?: Maybe<Users_Delete_Key_Input>;
  _prepend?: Maybe<Users_Prepend_Input>;
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
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

/** columns and relationships of "post_status" */
export type Post_Status = {
  __typename?: 'post_status';
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  status: Scalars['String'];
};


/** columns and relationships of "post_status" */
export type Post_StatusPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** columns and relationships of "post_status" */
export type Post_StatusPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};

/** aggregated selection of "post_status" */
export type Post_Status_Aggregate = {
  __typename?: 'post_status_aggregate';
  aggregate?: Maybe<Post_Status_Aggregate_Fields>;
  nodes: Array<Post_Status>;
};

/** aggregate fields of "post_status" */
export type Post_Status_Aggregate_Fields = {
  __typename?: 'post_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Post_Status_Max_Fields>;
  min?: Maybe<Post_Status_Min_Fields>;
};


/** aggregate fields of "post_status" */
export type Post_Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "post_status". All fields are combined with a logical 'AND'. */
export type Post_Status_Bool_Exp = {
  _and?: Maybe<Array<Post_Status_Bool_Exp>>;
  _not?: Maybe<Post_Status_Bool_Exp>;
  _or?: Maybe<Array<Post_Status_Bool_Exp>>;
  posts?: Maybe<Posts_Bool_Exp>;
  status?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "post_status" */
export enum Post_Status_Constraint {
  /** unique or primary key constraint */
  PostStatusPkey = 'post_status_pkey'
}

export enum Post_Status_Enum {
  Archived = 'archived',
  Draft = 'draft',
  Published = 'published'
}

/** Boolean expression to compare columns of type "post_status_enum". All fields are combined with logical 'AND'. */
export type Post_Status_Enum_Comparison_Exp = {
  _eq?: Maybe<Post_Status_Enum>;
  _in?: Maybe<Array<Post_Status_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Post_Status_Enum>;
  _nin?: Maybe<Array<Post_Status_Enum>>;
};

/** input type for inserting data into table "post_status" */
export type Post_Status_Insert_Input = {
  posts?: Maybe<Posts_Arr_Rel_Insert_Input>;
  status?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Post_Status_Max_Fields = {
  __typename?: 'post_status_max_fields';
  status?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Post_Status_Min_Fields = {
  __typename?: 'post_status_min_fields';
  status?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "post_status" */
export type Post_Status_Mutation_Response = {
  __typename?: 'post_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Post_Status>;
};

/** input type for inserting object relation for remote table "post_status" */
export type Post_Status_Obj_Rel_Insert_Input = {
  data: Post_Status_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Post_Status_On_Conflict>;
};

/** on conflict condition type for table "post_status" */
export type Post_Status_On_Conflict = {
  constraint: Post_Status_Constraint;
  update_columns?: Array<Post_Status_Update_Column>;
  where?: Maybe<Post_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "post_status". */
export type Post_Status_Order_By = {
  posts_aggregate?: Maybe<Posts_Aggregate_Order_By>;
  status?: Maybe<Order_By>;
};

/** primary key columns input for table: post_status */
export type Post_Status_Pk_Columns_Input = {
  status: Scalars['String'];
};

/** select columns of table "post_status" */
export enum Post_Status_Select_Column {
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "post_status" */
export type Post_Status_Set_Input = {
  status?: Maybe<Scalars['String']>;
};

/** update columns of table "post_status" */
export enum Post_Status_Update_Column {
  /** column name */
  Status = 'status'
}

/** columns and relationships of "post_types" */
export type Post_Types = {
  __typename?: 'post_types';
  /** An object relationship */
  postTypeByType?: Maybe<Post_Types>;
  /** An object relationship */
  post_type: Post_Types;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  type: Post_Types_Enum;
};


/** columns and relationships of "post_types" */
export type Post_TypesPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** columns and relationships of "post_types" */
export type Post_TypesPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};

/** aggregated selection of "post_types" */
export type Post_Types_Aggregate = {
  __typename?: 'post_types_aggregate';
  aggregate?: Maybe<Post_Types_Aggregate_Fields>;
  nodes: Array<Post_Types>;
};

/** aggregate fields of "post_types" */
export type Post_Types_Aggregate_Fields = {
  __typename?: 'post_types_aggregate_fields';
  count: Scalars['Int'];
};


/** aggregate fields of "post_types" */
export type Post_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "post_types". All fields are combined with a logical 'AND'. */
export type Post_Types_Bool_Exp = {
  _and?: Maybe<Array<Post_Types_Bool_Exp>>;
  _not?: Maybe<Post_Types_Bool_Exp>;
  _or?: Maybe<Array<Post_Types_Bool_Exp>>;
  postTypeByType?: Maybe<Post_Types_Bool_Exp>;
  post_type?: Maybe<Post_Types_Bool_Exp>;
  posts?: Maybe<Posts_Bool_Exp>;
  type?: Maybe<Post_Types_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "post_types" */
export enum Post_Types_Constraint {
  /** unique or primary key constraint */
  ObjectTypesPkey = 'object_types_pkey'
}

export enum Post_Types_Enum {
  Page = 'page',
  Post = 'post'
}

/** Boolean expression to compare columns of type "post_types_enum". All fields are combined with logical 'AND'. */
export type Post_Types_Enum_Comparison_Exp = {
  _eq?: Maybe<Post_Types_Enum>;
  _in?: Maybe<Array<Post_Types_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Post_Types_Enum>;
  _nin?: Maybe<Array<Post_Types_Enum>>;
};

/** input type for inserting data into table "post_types" */
export type Post_Types_Insert_Input = {
  postTypeByType?: Maybe<Post_Types_Obj_Rel_Insert_Input>;
  post_type?: Maybe<Post_Types_Obj_Rel_Insert_Input>;
  posts?: Maybe<Posts_Arr_Rel_Insert_Input>;
  type?: Maybe<Post_Types_Enum>;
};

/** response of any mutation on the table "post_types" */
export type Post_Types_Mutation_Response = {
  __typename?: 'post_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Post_Types>;
};

/** input type for inserting object relation for remote table "post_types" */
export type Post_Types_Obj_Rel_Insert_Input = {
  data: Post_Types_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Post_Types_On_Conflict>;
};

/** on conflict condition type for table "post_types" */
export type Post_Types_On_Conflict = {
  constraint: Post_Types_Constraint;
  update_columns?: Array<Post_Types_Update_Column>;
  where?: Maybe<Post_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "post_types". */
export type Post_Types_Order_By = {
  postTypeByType?: Maybe<Post_Types_Order_By>;
  post_type?: Maybe<Post_Types_Order_By>;
  posts_aggregate?: Maybe<Posts_Aggregate_Order_By>;
  type?: Maybe<Order_By>;
};

/** primary key columns input for table: post_types */
export type Post_Types_Pk_Columns_Input = {
  type: Post_Types_Enum;
};

/** select columns of table "post_types" */
export enum Post_Types_Select_Column {
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "post_types" */
export type Post_Types_Set_Input = {
  type?: Maybe<Post_Types_Enum>;
};

/** update columns of table "post_types" */
export enum Post_Types_Update_Column {
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
  comments_aggregate: Comments_Aggregate;
  created_at?: Maybe<Scalars['timestamptz']>;
  excerpt?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  meta?: Maybe<Scalars['jsonb']>;
  /** An object relationship */
  post_status: Post_Status;
  /** An object relationship */
  post_type?: Maybe<Post_Types>;
  slug: Scalars['String'];
  status: Post_Status_Enum;
  title: Scalars['String'];
  type?: Maybe<Post_Types_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "posts" */
export type PostsCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsMetaArgs = {
  path?: Maybe<Scalars['String']>;
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
  columns?: Maybe<Array<Posts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "posts" */
export type Posts_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Posts_Max_Order_By>;
  min?: Maybe<Posts_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Posts_Append_Input = {
  meta?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "posts" */
export type Posts_Arr_Rel_Insert_Input = {
  data: Array<Posts_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Posts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type Posts_Bool_Exp = {
  _and?: Maybe<Array<Posts_Bool_Exp>>;
  _not?: Maybe<Posts_Bool_Exp>;
  _or?: Maybe<Array<Posts_Bool_Exp>>;
  author_id?: Maybe<Uuid_Comparison_Exp>;
  body?: Maybe<String_Comparison_Exp>;
  comments?: Maybe<Comments_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  excerpt?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  meta?: Maybe<Jsonb_Comparison_Exp>;
  post_status?: Maybe<Post_Status_Bool_Exp>;
  post_type?: Maybe<Post_Types_Bool_Exp>;
  slug?: Maybe<String_Comparison_Exp>;
  status?: Maybe<Post_Status_Enum_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  type?: Maybe<Post_Types_Enum_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "posts" */
export enum Posts_Constraint {
  /** unique or primary key constraint */
  PostsPkey = 'posts_pkey',
  /** unique or primary key constraint */
  PostsSlugKey = 'posts_slug_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Posts_Delete_At_Path_Input = {
  meta?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Posts_Delete_Elem_Input = {
  meta?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Posts_Delete_Key_Input = {
  meta?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "posts" */
export type Posts_Insert_Input = {
  author_id?: Maybe<Scalars['uuid']>;
  body?: Maybe<Scalars['String']>;
  comments?: Maybe<Comments_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  excerpt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['jsonb']>;
  post_status?: Maybe<Post_Status_Obj_Rel_Insert_Input>;
  post_type?: Maybe<Post_Types_Obj_Rel_Insert_Input>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Post_Status_Enum>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Post_Types_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Posts_Max_Fields = {
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
export type Posts_Max_Order_By = {
  author_id?: Maybe<Order_By>;
  body?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  excerpt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Posts_Min_Fields = {
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
export type Posts_Min_Order_By = {
  author_id?: Maybe<Order_By>;
  body?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  excerpt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
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
  /** on conflict condition */
  on_conflict?: Maybe<Posts_On_Conflict>;
};

/** on conflict condition type for table "posts" */
export type Posts_On_Conflict = {
  constraint: Posts_Constraint;
  update_columns?: Array<Posts_Update_Column>;
  where?: Maybe<Posts_Bool_Exp>;
};

/** Ordering options when selecting data from "posts". */
export type Posts_Order_By = {
  author_id?: Maybe<Order_By>;
  body?: Maybe<Order_By>;
  comments_aggregate?: Maybe<Comments_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  excerpt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  meta?: Maybe<Order_By>;
  post_status?: Maybe<Post_Status_Order_By>;
  post_type?: Maybe<Post_Types_Order_By>;
  slug?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: posts */
export type Posts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Posts_Prepend_Input = {
  meta?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "posts" */
export enum Posts_Select_Column {
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
export type Posts_Set_Input = {
  author_id?: Maybe<Scalars['uuid']>;
  body?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  excerpt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['jsonb']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Post_Status_Enum>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Post_Types_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "posts" */
export enum Posts_Update_Column {
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

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.account_providers" */
  auth_account_providers: Array<Auth_Account_Providers>;
  /** fetch aggregated fields from the table: "auth.account_providers" */
  auth_account_providers_aggregate: Auth_Account_Providers_Aggregate;
  /** fetch data from the table: "auth.account_providers" using primary key columns */
  auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>;
  /** fetch data from the table: "auth.account_roles" */
  auth_account_roles: Array<Auth_Account_Roles>;
  /** fetch aggregated fields from the table: "auth.account_roles" */
  auth_account_roles_aggregate: Auth_Account_Roles_Aggregate;
  /** fetch data from the table: "auth.account_roles" using primary key columns */
  auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** fetch data from the table: "auth.accounts" */
  auth_accounts: Array<Auth_Accounts>;
  /** fetch aggregated fields from the table: "auth.accounts" */
  auth_accounts_aggregate: Auth_Accounts_Aggregate;
  /** fetch data from the table: "auth.accounts" using primary key columns */
  auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** fetch data from the table: "auth.providers" */
  auth_providers: Array<Auth_Providers>;
  /** fetch aggregated fields from the table: "auth.providers" */
  auth_providers_aggregate: Auth_Providers_Aggregate;
  /** fetch data from the table: "auth.providers" using primary key columns */
  auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** fetch data from the table: "auth.refresh_tokens" */
  auth_refresh_tokens: Array<Auth_Refresh_Tokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  auth_refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** fetch data from the table: "auth.roles" */
  auth_roles: Array<Auth_Roles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  auth_roles_aggregate: Auth_Roles_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** fetch data from the table: "post_status" */
  post_status: Array<Post_Status>;
  /** fetch aggregated fields from the table: "post_status" */
  post_status_aggregate: Post_Status_Aggregate;
  /** fetch data from the table: "post_status" using primary key columns */
  post_status_by_pk?: Maybe<Post_Status>;
  /** fetch data from the table: "post_types" */
  post_types: Array<Post_Types>;
  /** fetch aggregated fields from the table: "post_types" */
  post_types_aggregate: Post_Types_Aggregate;
  /** fetch data from the table: "post_types" using primary key columns */
  post_types_by_pk?: Maybe<Post_Types>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** An array relationship */
  taxonomies: Array<Taxonomies>;
  /** An aggregate relationship */
  taxonomies_aggregate: Taxonomies_Aggregate;
  /** fetch data from the table: "taxonomies" using primary key columns */
  taxonomies_by_pk?: Maybe<Taxonomies>;
  /** An array relationship */
  term_relationships: Array<Term_Relationships>;
  /** An aggregate relationship */
  term_relationships_aggregate: Term_Relationships_Aggregate;
  /** fetch data from the table: "term_relationships" using primary key columns */
  term_relationships_by_pk?: Maybe<Term_Relationships>;
  /** fetch data from the table: "terms" */
  terms: Array<Terms>;
  /** An aggregate relationship */
  terms_aggregate: Terms_Aggregate;
  /** fetch data from the table: "terms" using primary key columns */
  terms_by_pk?: Maybe<Terms>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootAuth_Account_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


export type Query_RootAuth_Account_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


export type Query_RootAuth_Account_Providers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuth_Account_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


export type Query_RootAuth_Account_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


export type Query_RootAuth_Account_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuth_AccountsArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};


export type Query_RootAuth_Accounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};


export type Query_RootAuth_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuth_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Providers_Order_By>>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};


export type Query_RootAuth_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Providers_Order_By>>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};


export type Query_RootAuth_Providers_By_PkArgs = {
  provider: Scalars['String'];
};


export type Query_RootAuth_Refresh_TokensArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Query_RootAuth_Refresh_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Query_RootAuth_Refresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid'];
};


export type Query_RootAuth_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Roles_Order_By>>;
  where?: Maybe<Auth_Roles_Bool_Exp>;
};


export type Query_RootAuth_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Roles_Order_By>>;
  where?: Maybe<Auth_Roles_Bool_Exp>;
};


export type Query_RootAuth_Roles_By_PkArgs = {
  role: Scalars['String'];
};


export type Query_RootCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


export type Query_RootComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


export type Query_RootComments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPost_StatusArgs = {
  distinct_on?: Maybe<Array<Post_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Status_Order_By>>;
  where?: Maybe<Post_Status_Bool_Exp>;
};


export type Query_RootPost_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Status_Order_By>>;
  where?: Maybe<Post_Status_Bool_Exp>;
};


export type Query_RootPost_Status_By_PkArgs = {
  status: Scalars['String'];
};


export type Query_RootPost_TypesArgs = {
  distinct_on?: Maybe<Array<Post_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Types_Order_By>>;
  where?: Maybe<Post_Types_Bool_Exp>;
};


export type Query_RootPost_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Types_Order_By>>;
  where?: Maybe<Post_Types_Bool_Exp>;
};


export type Query_RootPost_Types_By_PkArgs = {
  type: Post_Types_Enum;
};


export type Query_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


export type Query_RootPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


export type Query_RootPosts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTaxonomiesArgs = {
  distinct_on?: Maybe<Array<Taxonomies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Taxonomies_Order_By>>;
  where?: Maybe<Taxonomies_Bool_Exp>;
};


export type Query_RootTaxonomies_AggregateArgs = {
  distinct_on?: Maybe<Array<Taxonomies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Taxonomies_Order_By>>;
  where?: Maybe<Taxonomies_Bool_Exp>;
};


export type Query_RootTaxonomies_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTerm_RelationshipsArgs = {
  distinct_on?: Maybe<Array<Term_Relationships_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Term_Relationships_Order_By>>;
  where?: Maybe<Term_Relationships_Bool_Exp>;
};


export type Query_RootTerm_Relationships_AggregateArgs = {
  distinct_on?: Maybe<Array<Term_Relationships_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Term_Relationships_Order_By>>;
  where?: Maybe<Term_Relationships_Bool_Exp>;
};


export type Query_RootTerm_Relationships_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTermsArgs = {
  distinct_on?: Maybe<Array<Terms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Terms_Order_By>>;
  where?: Maybe<Terms_Bool_Exp>;
};


export type Query_RootTerms_AggregateArgs = {
  distinct_on?: Maybe<Array<Terms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Terms_Order_By>>;
  where?: Maybe<Terms_Bool_Exp>;
};


export type Query_RootTerms_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.account_providers" */
  auth_account_providers: Array<Auth_Account_Providers>;
  /** fetch aggregated fields from the table: "auth.account_providers" */
  auth_account_providers_aggregate: Auth_Account_Providers_Aggregate;
  /** fetch data from the table: "auth.account_providers" using primary key columns */
  auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>;
  /** fetch data from the table: "auth.account_roles" */
  auth_account_roles: Array<Auth_Account_Roles>;
  /** fetch aggregated fields from the table: "auth.account_roles" */
  auth_account_roles_aggregate: Auth_Account_Roles_Aggregate;
  /** fetch data from the table: "auth.account_roles" using primary key columns */
  auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** fetch data from the table: "auth.accounts" */
  auth_accounts: Array<Auth_Accounts>;
  /** fetch aggregated fields from the table: "auth.accounts" */
  auth_accounts_aggregate: Auth_Accounts_Aggregate;
  /** fetch data from the table: "auth.accounts" using primary key columns */
  auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** fetch data from the table: "auth.providers" */
  auth_providers: Array<Auth_Providers>;
  /** fetch aggregated fields from the table: "auth.providers" */
  auth_providers_aggregate: Auth_Providers_Aggregate;
  /** fetch data from the table: "auth.providers" using primary key columns */
  auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** fetch data from the table: "auth.refresh_tokens" */
  auth_refresh_tokens: Array<Auth_Refresh_Tokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  auth_refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** fetch data from the table: "auth.roles" */
  auth_roles: Array<Auth_Roles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  auth_roles_aggregate: Auth_Roles_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** fetch data from the table: "post_status" */
  post_status: Array<Post_Status>;
  /** fetch aggregated fields from the table: "post_status" */
  post_status_aggregate: Post_Status_Aggregate;
  /** fetch data from the table: "post_status" using primary key columns */
  post_status_by_pk?: Maybe<Post_Status>;
  /** fetch data from the table: "post_types" */
  post_types: Array<Post_Types>;
  /** fetch aggregated fields from the table: "post_types" */
  post_types_aggregate: Post_Types_Aggregate;
  /** fetch data from the table: "post_types" using primary key columns */
  post_types_by_pk?: Maybe<Post_Types>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** An array relationship */
  taxonomies: Array<Taxonomies>;
  /** An aggregate relationship */
  taxonomies_aggregate: Taxonomies_Aggregate;
  /** fetch data from the table: "taxonomies" using primary key columns */
  taxonomies_by_pk?: Maybe<Taxonomies>;
  /** An array relationship */
  term_relationships: Array<Term_Relationships>;
  /** An aggregate relationship */
  term_relationships_aggregate: Term_Relationships_Aggregate;
  /** fetch data from the table: "term_relationships" using primary key columns */
  term_relationships_by_pk?: Maybe<Term_Relationships>;
  /** fetch data from the table: "terms" */
  terms: Array<Terms>;
  /** An aggregate relationship */
  terms_aggregate: Terms_Aggregate;
  /** fetch data from the table: "terms" using primary key columns */
  terms_by_pk?: Maybe<Terms>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootAuth_Account_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Account_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Account_Providers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuth_Account_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_Account_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_Account_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuth_AccountsArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};


export type Subscription_RootAuth_Accounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};


export type Subscription_RootAuth_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuth_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Providers_Order_By>>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Providers_Order_By>>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Providers_By_PkArgs = {
  provider: Scalars['String'];
};


export type Subscription_RootAuth_Refresh_TokensArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Subscription_RootAuth_Refresh_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Subscription_RootAuth_Refresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid'];
};


export type Subscription_RootAuth_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Roles_Order_By>>;
  where?: Maybe<Auth_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Roles_Order_By>>;
  where?: Maybe<Auth_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_Roles_By_PkArgs = {
  role: Scalars['String'];
};


export type Subscription_RootCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


export type Subscription_RootComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Comments_Order_By>>;
  where?: Maybe<Comments_Bool_Exp>;
};


export type Subscription_RootComments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPost_StatusArgs = {
  distinct_on?: Maybe<Array<Post_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Status_Order_By>>;
  where?: Maybe<Post_Status_Bool_Exp>;
};


export type Subscription_RootPost_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Status_Order_By>>;
  where?: Maybe<Post_Status_Bool_Exp>;
};


export type Subscription_RootPost_Status_By_PkArgs = {
  status: Scalars['String'];
};


export type Subscription_RootPost_TypesArgs = {
  distinct_on?: Maybe<Array<Post_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Types_Order_By>>;
  where?: Maybe<Post_Types_Bool_Exp>;
};


export type Subscription_RootPost_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Types_Order_By>>;
  where?: Maybe<Post_Types_Bool_Exp>;
};


export type Subscription_RootPost_Types_By_PkArgs = {
  type: Post_Types_Enum;
};


export type Subscription_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


export type Subscription_RootPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


export type Subscription_RootPosts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTaxonomiesArgs = {
  distinct_on?: Maybe<Array<Taxonomies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Taxonomies_Order_By>>;
  where?: Maybe<Taxonomies_Bool_Exp>;
};


export type Subscription_RootTaxonomies_AggregateArgs = {
  distinct_on?: Maybe<Array<Taxonomies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Taxonomies_Order_By>>;
  where?: Maybe<Taxonomies_Bool_Exp>;
};


export type Subscription_RootTaxonomies_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTerm_RelationshipsArgs = {
  distinct_on?: Maybe<Array<Term_Relationships_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Term_Relationships_Order_By>>;
  where?: Maybe<Term_Relationships_Bool_Exp>;
};


export type Subscription_RootTerm_Relationships_AggregateArgs = {
  distinct_on?: Maybe<Array<Term_Relationships_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Term_Relationships_Order_By>>;
  where?: Maybe<Term_Relationships_Bool_Exp>;
};


export type Subscription_RootTerm_Relationships_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTermsArgs = {
  distinct_on?: Maybe<Array<Terms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Terms_Order_By>>;
  where?: Maybe<Terms_Bool_Exp>;
};


export type Subscription_RootTerms_AggregateArgs = {
  distinct_on?: Maybe<Array<Terms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Terms_Order_By>>;
  where?: Maybe<Terms_Bool_Exp>;
};


export type Subscription_RootTerms_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
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
  taxonomies_aggregate: Taxonomies_Aggregate;
  /** An object relationship */
  taxonomy?: Maybe<Taxonomies>;
  /** fetch data from the table: "terms" */
  terms: Array<Terms>;
  /** An aggregate relationship */
  terms_aggregate: Terms_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "taxonomies" */
export type TaxonomiesMetaArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "taxonomies" */
export type TaxonomiesTaxonomiesArgs = {
  distinct_on?: Maybe<Array<Taxonomies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Taxonomies_Order_By>>;
  where?: Maybe<Taxonomies_Bool_Exp>;
};


/** columns and relationships of "taxonomies" */
export type TaxonomiesTaxonomies_AggregateArgs = {
  distinct_on?: Maybe<Array<Taxonomies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Taxonomies_Order_By>>;
  where?: Maybe<Taxonomies_Bool_Exp>;
};


/** columns and relationships of "taxonomies" */
export type TaxonomiesTermsArgs = {
  distinct_on?: Maybe<Array<Terms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Terms_Order_By>>;
  where?: Maybe<Terms_Bool_Exp>;
};


/** columns and relationships of "taxonomies" */
export type TaxonomiesTerms_AggregateArgs = {
  distinct_on?: Maybe<Array<Terms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Terms_Order_By>>;
  where?: Maybe<Terms_Bool_Exp>;
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
  columns?: Maybe<Array<Taxonomies_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "taxonomies" */
export type Taxonomies_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Taxonomies_Max_Order_By>;
  min?: Maybe<Taxonomies_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Taxonomies_Append_Input = {
  meta?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "taxonomies" */
export type Taxonomies_Arr_Rel_Insert_Input = {
  data: Array<Taxonomies_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Taxonomies_On_Conflict>;
};

/** Boolean expression to filter rows from the table "taxonomies". All fields are combined with a logical 'AND'. */
export type Taxonomies_Bool_Exp = {
  _and?: Maybe<Array<Taxonomies_Bool_Exp>>;
  _not?: Maybe<Taxonomies_Bool_Exp>;
  _or?: Maybe<Array<Taxonomies_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  meta?: Maybe<Jsonb_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  parent_id?: Maybe<Uuid_Comparison_Exp>;
  taxonomies?: Maybe<Taxonomies_Bool_Exp>;
  taxonomy?: Maybe<Taxonomies_Bool_Exp>;
  terms?: Maybe<Terms_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "taxonomies" */
export enum Taxonomies_Constraint {
  /** unique or primary key constraint */
  TaxonomiesPkey = 'taxonomies_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Taxonomies_Delete_At_Path_Input = {
  meta?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Taxonomies_Delete_Elem_Input = {
  meta?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Taxonomies_Delete_Key_Input = {
  meta?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "taxonomies" */
export type Taxonomies_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['jsonb']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['uuid']>;
  taxonomies?: Maybe<Taxonomies_Arr_Rel_Insert_Input>;
  taxonomy?: Maybe<Taxonomies_Obj_Rel_Insert_Input>;
  terms?: Maybe<Terms_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Taxonomies_Max_Fields = {
  __typename?: 'taxonomies_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "taxonomies" */
export type Taxonomies_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Taxonomies_Min_Fields = {
  __typename?: 'taxonomies_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "taxonomies" */
export type Taxonomies_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
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
  /** on conflict condition */
  on_conflict?: Maybe<Taxonomies_On_Conflict>;
};

/** on conflict condition type for table "taxonomies" */
export type Taxonomies_On_Conflict = {
  constraint: Taxonomies_Constraint;
  update_columns?: Array<Taxonomies_Update_Column>;
  where?: Maybe<Taxonomies_Bool_Exp>;
};

/** Ordering options when selecting data from "taxonomies". */
export type Taxonomies_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  meta?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  taxonomies_aggregate?: Maybe<Taxonomies_Aggregate_Order_By>;
  taxonomy?: Maybe<Taxonomies_Order_By>;
  terms_aggregate?: Maybe<Terms_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: taxonomies */
export type Taxonomies_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Taxonomies_Prepend_Input = {
  meta?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "taxonomies" */
export enum Taxonomies_Select_Column {
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
export type Taxonomies_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['jsonb']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "taxonomies" */
export enum Taxonomies_Update_Column {
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
export type Term_Relationships = {
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
export type Term_Relationships_Aggregate = {
  __typename?: 'term_relationships_aggregate';
  aggregate?: Maybe<Term_Relationships_Aggregate_Fields>;
  nodes: Array<Term_Relationships>;
};

/** aggregate fields of "term_relationships" */
export type Term_Relationships_Aggregate_Fields = {
  __typename?: 'term_relationships_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Term_Relationships_Max_Fields>;
  min?: Maybe<Term_Relationships_Min_Fields>;
};


/** aggregate fields of "term_relationships" */
export type Term_Relationships_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Term_Relationships_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "term_relationships" */
export type Term_Relationships_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Term_Relationships_Max_Order_By>;
  min?: Maybe<Term_Relationships_Min_Order_By>;
};

/** input type for inserting array relation for remote table "term_relationships" */
export type Term_Relationships_Arr_Rel_Insert_Input = {
  data: Array<Term_Relationships_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Term_Relationships_On_Conflict>;
};

/** Boolean expression to filter rows from the table "term_relationships". All fields are combined with a logical 'AND'. */
export type Term_Relationships_Bool_Exp = {
  _and?: Maybe<Array<Term_Relationships_Bool_Exp>>;
  _not?: Maybe<Term_Relationships_Bool_Exp>;
  _or?: Maybe<Array<Term_Relationships_Bool_Exp>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  object_id?: Maybe<Uuid_Comparison_Exp>;
  post?: Maybe<Posts_Bool_Exp>;
  term?: Maybe<Terms_Bool_Exp>;
  term_id?: Maybe<Uuid_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "term_relationships" */
export enum Term_Relationships_Constraint {
  /** unique or primary key constraint */
  PostTermsPkey = 'post_terms_pkey',
  /** unique or primary key constraint */
  TermRelationshipsObjectIdTermIdKey = 'term_relationships_object_id_term_id_key'
}

/** input type for inserting data into table "term_relationships" */
export type Term_Relationships_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  object_id?: Maybe<Scalars['uuid']>;
  post?: Maybe<Posts_Obj_Rel_Insert_Input>;
  term?: Maybe<Terms_Obj_Rel_Insert_Input>;
  term_id?: Maybe<Scalars['uuid']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Term_Relationships_Max_Fields = {
  __typename?: 'term_relationships_max_fields';
  id?: Maybe<Scalars['uuid']>;
  object_id?: Maybe<Scalars['uuid']>;
  term_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "term_relationships" */
export type Term_Relationships_Max_Order_By = {
  id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  term_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Term_Relationships_Min_Fields = {
  __typename?: 'term_relationships_min_fields';
  id?: Maybe<Scalars['uuid']>;
  object_id?: Maybe<Scalars['uuid']>;
  term_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "term_relationships" */
export type Term_Relationships_Min_Order_By = {
  id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  term_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "term_relationships" */
export type Term_Relationships_Mutation_Response = {
  __typename?: 'term_relationships_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Term_Relationships>;
};

/** on conflict condition type for table "term_relationships" */
export type Term_Relationships_On_Conflict = {
  constraint: Term_Relationships_Constraint;
  update_columns?: Array<Term_Relationships_Update_Column>;
  where?: Maybe<Term_Relationships_Bool_Exp>;
};

/** Ordering options when selecting data from "term_relationships". */
export type Term_Relationships_Order_By = {
  id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  post?: Maybe<Posts_Order_By>;
  term?: Maybe<Terms_Order_By>;
  term_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
};

/** primary key columns input for table: term_relationships */
export type Term_Relationships_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "term_relationships" */
export enum Term_Relationships_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ObjectId = 'object_id',
  /** column name */
  TermId = 'term_id'
}

/** input type for updating data in table "term_relationships" */
export type Term_Relationships_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  object_id?: Maybe<Scalars['uuid']>;
  term_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "term_relationships" */
export enum Term_Relationships_Update_Column {
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
  term_relationships: Array<Term_Relationships>;
  /** An aggregate relationship */
  term_relationships_aggregate: Term_Relationships_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "terms" */
export type TermsMetaArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "terms" */
export type TermsTerm_RelationshipsArgs = {
  distinct_on?: Maybe<Array<Term_Relationships_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Term_Relationships_Order_By>>;
  where?: Maybe<Term_Relationships_Bool_Exp>;
};


/** columns and relationships of "terms" */
export type TermsTerm_Relationships_AggregateArgs = {
  distinct_on?: Maybe<Array<Term_Relationships_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Term_Relationships_Order_By>>;
  where?: Maybe<Term_Relationships_Bool_Exp>;
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
  columns?: Maybe<Array<Terms_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "terms" */
export type Terms_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Terms_Max_Order_By>;
  min?: Maybe<Terms_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Terms_Append_Input = {
  meta?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "terms" */
export type Terms_Arr_Rel_Insert_Input = {
  data: Array<Terms_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Terms_On_Conflict>;
};

/** Boolean expression to filter rows from the table "terms". All fields are combined with a logical 'AND'. */
export type Terms_Bool_Exp = {
  _and?: Maybe<Array<Terms_Bool_Exp>>;
  _not?: Maybe<Terms_Bool_Exp>;
  _or?: Maybe<Array<Terms_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  meta?: Maybe<Jsonb_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  slug?: Maybe<String_Comparison_Exp>;
  taxonomy?: Maybe<Taxonomies_Bool_Exp>;
  taxonomy_id?: Maybe<Uuid_Comparison_Exp>;
  term_relationships?: Maybe<Term_Relationships_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "terms" */
export enum Terms_Constraint {
  /** unique or primary key constraint */
  TermsPkey = 'terms_pkey',
  /** unique or primary key constraint */
  TermsSlugKey = 'terms_slug_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Terms_Delete_At_Path_Input = {
  meta?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Terms_Delete_Elem_Input = {
  meta?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Terms_Delete_Key_Input = {
  meta?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "terms" */
export type Terms_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['jsonb']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<Taxonomies_Obj_Rel_Insert_Input>;
  taxonomy_id?: Maybe<Scalars['uuid']>;
  term_relationships?: Maybe<Term_Relationships_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Terms_Max_Fields = {
  __typename?: 'terms_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  taxonomy_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "terms" */
export type Terms_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  taxonomy_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Terms_Min_Fields = {
  __typename?: 'terms_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  taxonomy_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "terms" */
export type Terms_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  taxonomy_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
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
  /** on conflict condition */
  on_conflict?: Maybe<Terms_On_Conflict>;
};

/** on conflict condition type for table "terms" */
export type Terms_On_Conflict = {
  constraint: Terms_Constraint;
  update_columns?: Array<Terms_Update_Column>;
  where?: Maybe<Terms_Bool_Exp>;
};

/** Ordering options when selecting data from "terms". */
export type Terms_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  meta?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  taxonomy?: Maybe<Taxonomies_Order_By>;
  taxonomy_id?: Maybe<Order_By>;
  term_relationships_aggregate?: Maybe<Term_Relationships_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: terms */
export type Terms_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Terms_Prepend_Input = {
  meta?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "terms" */
export enum Terms_Select_Column {
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
export type Terms_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['jsonb']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  taxonomy_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "terms" */
export enum Terms_Update_Column {
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
export type Timestamptz_Comparison_Exp = {
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
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  meta?: Maybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  avatar_url?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  meta?: Maybe<Jsonb_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  meta?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  meta?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  meta?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['jsonb']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  avatar_url?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  meta?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  meta?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "users" */
export enum Users_Select_Column {
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
export type Users_Set_Input = {
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['jsonb']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
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
export type Uuid_Comparison_Exp = {
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

export type PageFormCreateMutationVariables = Exact<{
  object: Posts_Insert_Input;
}>;


export type PageFormCreateMutation = (
  { __typename?: 'mutation_root' }
  & { insert_posts_one?: Maybe<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id'>
  )> }
);

export type PageFormQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type PageFormQuery = (
  { __typename?: 'query_root' }
  & { posts_by_pk?: Maybe<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id' | 'author_id' | 'body' | 'excerpt' | 'slug' | 'status' | 'title'>
  )> }
);

export type PageFormUpdateMutationVariables = Exact<{
  pk_columns: Posts_Pk_Columns_Input;
  _set?: Maybe<Posts_Set_Input>;
}>;


export type PageFormUpdateMutation = (
  { __typename?: 'mutation_root' }
  & { update_posts_by_pk?: Maybe<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id'>
  )> }
);

export type PagesTableQueryVariables = Exact<{ [key: string]: never; }>;


export type PagesTableQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'slug' | 'body' | 'status'>
  )>, posts_aggregate: (
    { __typename: 'posts_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'posts_aggregate_fields' }
      & Pick<Posts_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type PostsDeleteMutationVariables = Exact<{
  id?: Maybe<Scalars['uuid']>;
}>;


export type PostsDeleteMutation = (
  { __typename?: 'mutation_root' }
  & { delete_posts?: Maybe<(
    { __typename?: 'posts_mutation_response' }
    & Pick<Posts_Mutation_Response, 'affected_rows'>
  )> }
);

export type PostCounterQueryVariables = Exact<{
  where?: Maybe<Posts_Bool_Exp>;
}>;


export type PostCounterQuery = (
  { __typename?: 'query_root' }
  & { posts_aggregate: (
    { __typename?: 'posts_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'posts_aggregate_fields' }
      & Pick<Posts_Aggregate_Fields, 'count'>
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
    { __typename: 'posts' }
    & Pick<Posts, 'id' | 'title' | 'status' | 'slug' | 'body' | 'author_id' | 'created_at'>
  )>, posts_aggregate: (
    { __typename: 'posts_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'posts_aggregate_fields' }
      & Pick<Posts_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export const namedOperations = {
  Query: {
    PageForm: 'PageForm',
    PagesTable: 'PagesTable',
    PostCounter: 'PostCounter',
    PostView: 'PostView',
    PostsTable: 'PostsTable'
  },
  Mutation: {
    PageFormCreate: 'PageFormCreate',
    PageFormUpdate: 'PageFormUpdate',
    PostsDelete: 'PostsDelete'
  }
}