type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  jsonb: any;
  numeric: any;
  timestamptz: any;
  uuid: any;
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
interface BooleanComparisonExp {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
interface StringComparisonExp {
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
}

/** columns and relationships of "categories" */
interface Categories {
  __typename?: 'categories';
  category_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  custom_field?: Maybe<Scalars['jsonb']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  name: Scalars['String'];
  /** An array relationship */
  posts_categories: Array<PostsCategories>;
  /** An aggregate relationship */
  posts_categories_aggregate: PostsCategoriesAggregate;
  updated_at?: Maybe<Scalars['timestamptz']>;
}


/** columns and relationships of "categories" */
interface CategoriesCustomFieldArgs {
  path?: InputMaybe<Scalars['String']>;
}


/** columns and relationships of "categories" */
interface CategoriesPostsCategoriesArgs {
  distinct_on?: InputMaybe<Array<PostsCategoriesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostsCategoriesOrderBy>>;
  where?: InputMaybe<PostsCategoriesBoolExp>;
}


/** columns and relationships of "categories" */
interface CategoriesPostsCategoriesAggregateArgs {
  distinct_on?: InputMaybe<Array<PostsCategoriesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostsCategoriesOrderBy>>;
  where?: InputMaybe<PostsCategoriesBoolExp>;
}

/** aggregated selection of "categories" */
interface CategoriesAggregate {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<CategoriesAggregateFields>;
  nodes: Array<Categories>;
}

/** aggregate fields of "categories" */
interface CategoriesAggregateFields {
  __typename?: 'categories_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<CategoriesMaxFields>;
  min?: Maybe<CategoriesMinFields>;
}


/** aggregate fields of "categories" */
interface CategoriesAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<CategoriesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** append existing jsonb value of filtered columns with new jsonb value */
interface CategoriesAppendInput {
  custom_field?: InputMaybe<Scalars['jsonb']>;
}

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
interface CategoriesBoolExp {
  _and?: InputMaybe<Array<CategoriesBoolExp>>;
  _not?: InputMaybe<CategoriesBoolExp>;
  _or?: InputMaybe<Array<CategoriesBoolExp>>;
  category_id?: InputMaybe<UuidComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  custom_field?: InputMaybe<JsonbComparisonExp>;
  deleted_at?: InputMaybe<TimestamptzComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  posts_categories?: InputMaybe<PostsCategoriesBoolExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
}

/** unique or primary key constraints on table "categories" */
enum CategoriesConstraint {
  /** unique or primary key constraint */
  CategoriesPkey = 'categories_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
interface CategoriesDeleteAtPathInput {
  custom_field?: InputMaybe<Array<Scalars['String']>>;
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
interface CategoriesDeleteElemInput {
  custom_field?: InputMaybe<Scalars['Int']>;
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
interface CategoriesDeleteKeyInput {
  custom_field?: InputMaybe<Scalars['String']>;
}

/** input type for inserting data into table "categories" */
interface CategoriesInsertInput {
  category_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  custom_field?: InputMaybe<Scalars['jsonb']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  posts_categories?: InputMaybe<PostsCategoriesArrRelInsertInput>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
}

/** aggregate max on columns */
interface CategoriesMaxFields {
  __typename?: 'categories_max_fields';
  category_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
}

/** aggregate min on columns */
interface CategoriesMinFields {
  __typename?: 'categories_min_fields';
  category_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
}

/** response of any mutation on the table "categories" */
interface CategoriesMutationResponse {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
}

/** input type for inserting object relation for remote table "categories" */
interface CategoriesObjRelInsertInput {
  data: CategoriesInsertInput;
  /** on conflict condition */
  on_conflict?: InputMaybe<CategoriesOnConflict>;
}

/** on conflict condition type for table "categories" */
interface CategoriesOnConflict {
  constraint: CategoriesConstraint;
  update_columns?: Array<CategoriesUpdateColumn>;
  where?: InputMaybe<CategoriesBoolExp>;
}

/** Ordering options when selecting data from "categories". */
interface CategoriesOrderBy {
  category_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  custom_field?: InputMaybe<OrderBy>;
  deleted_at?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  posts_categories_aggregate?: InputMaybe<PostsCategoriesAggregateOrderBy>;
  updated_at?: InputMaybe<OrderBy>;
}

/** primary key columns input for table: categories */
interface CategoriesPkColumnsInput {
  category_id: Scalars['uuid'];
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
interface CategoriesPrependInput {
  custom_field?: InputMaybe<Scalars['jsonb']>;
}

/** select columns of table "categories" */
enum CategoriesSelectColumn {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomField = 'custom_field',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "categories" */
interface CategoriesSetInput {
  category_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  custom_field?: InputMaybe<Scalars['jsonb']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
}

/** update columns of table "categories" */
enum CategoriesUpdateColumn {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomField = 'custom_field',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "comments" */
interface Comments {
  __typename?: 'comments';
  comment: Scalars['String'];
  comment_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  custom_field?: Maybe<Scalars['jsonb']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  post: Posts;
  post_id: Scalars['uuid'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
}


/** columns and relationships of "comments" */
interface CommentsCustomFieldArgs {
  path?: InputMaybe<Scalars['String']>;
}

/** aggregated selection of "comments" */
interface CommentsAggregate {
  __typename?: 'comments_aggregate';
  aggregate?: Maybe<CommentsAggregateFields>;
  nodes: Array<Comments>;
}

/** aggregate fields of "comments" */
interface CommentsAggregateFields {
  __typename?: 'comments_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<CommentsMaxFields>;
  min?: Maybe<CommentsMinFields>;
}


/** aggregate fields of "comments" */
interface CommentsAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<CommentsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "comments" */
interface CommentsAggregateOrderBy {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<CommentsMaxOrderBy>;
  min?: InputMaybe<CommentsMinOrderBy>;
}

/** append existing jsonb value of filtered columns with new jsonb value */
interface CommentsAppendInput {
  custom_field?: InputMaybe<Scalars['jsonb']>;
}

/** input type for inserting array relation for remote table "comments" */
interface CommentsArrRelInsertInput {
  data: Array<CommentsInsertInput>;
  /** on conflict condition */
  on_conflict?: InputMaybe<CommentsOnConflict>;
}

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
interface CommentsBoolExp {
  _and?: InputMaybe<Array<CommentsBoolExp>>;
  _not?: InputMaybe<CommentsBoolExp>;
  _or?: InputMaybe<Array<CommentsBoolExp>>;
  comment?: InputMaybe<StringComparisonExp>;
  comment_id?: InputMaybe<UuidComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  custom_field?: InputMaybe<JsonbComparisonExp>;
  deleted_at?: InputMaybe<TimestamptzComparisonExp>;
  post?: InputMaybe<PostsBoolExp>;
  post_id?: InputMaybe<UuidComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
}

/** unique or primary key constraints on table "comments" */
enum CommentsConstraint {
  /** unique or primary key constraint */
  CommentsPkey = 'comments_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
interface CommentsDeleteAtPathInput {
  custom_field?: InputMaybe<Array<Scalars['String']>>;
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
interface CommentsDeleteElemInput {
  custom_field?: InputMaybe<Scalars['Int']>;
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
interface CommentsDeleteKeyInput {
  custom_field?: InputMaybe<Scalars['String']>;
}

/** input type for inserting data into table "comments" */
interface CommentsInsertInput {
  comment?: InputMaybe<Scalars['String']>;
  comment_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  custom_field?: InputMaybe<Scalars['jsonb']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  post?: InputMaybe<PostsObjRelInsertInput>;
  post_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['uuid']>;
}

/** aggregate max on columns */
interface CommentsMaxFields {
  __typename?: 'comments_max_fields';
  comment?: Maybe<Scalars['String']>;
  comment_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  post_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
}

/** order by max() on columns of table "comments" */
interface CommentsMaxOrderBy {
  comment?: InputMaybe<OrderBy>;
  comment_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  deleted_at?: InputMaybe<OrderBy>;
  post_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
}

/** aggregate min on columns */
interface CommentsMinFields {
  __typename?: 'comments_min_fields';
  comment?: Maybe<Scalars['String']>;
  comment_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  post_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
}

/** order by min() on columns of table "comments" */
interface CommentsMinOrderBy {
  comment?: InputMaybe<OrderBy>;
  comment_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  deleted_at?: InputMaybe<OrderBy>;
  post_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
}

/** response of any mutation on the table "comments" */
interface CommentsMutationResponse {
  __typename?: 'comments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Comments>;
}

/** on conflict condition type for table "comments" */
interface CommentsOnConflict {
  constraint: CommentsConstraint;
  update_columns?: Array<CommentsUpdateColumn>;
  where?: InputMaybe<CommentsBoolExp>;
}

/** Ordering options when selecting data from "comments". */
interface CommentsOrderBy {
  comment?: InputMaybe<OrderBy>;
  comment_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  custom_field?: InputMaybe<OrderBy>;
  deleted_at?: InputMaybe<OrderBy>;
  post?: InputMaybe<PostsOrderBy>;
  post_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_id?: InputMaybe<OrderBy>;
}

/** primary key columns input for table: comments */
interface CommentsPkColumnsInput {
  comment_id: Scalars['uuid'];
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
interface CommentsPrependInput {
  custom_field?: InputMaybe<Scalars['jsonb']>;
}

/** select columns of table "comments" */
enum CommentsSelectColumn {
  /** column name */
  Comment = 'comment',
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomField = 'custom_field',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "comments" */
interface CommentsSetInput {
  comment?: InputMaybe<Scalars['String']>;
  comment_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  custom_field?: InputMaybe<Scalars['jsonb']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  post_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
}

/** update columns of table "comments" */
enum CommentsUpdateColumn {
  /** column name */
  Comment = 'comment',
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomField = 'custom_field',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "email_otp" */
interface EmailOtp {
  __typename?: 'email_otp';
  code: Scalars['String'];
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  expired_at: Scalars['timestamptz'];
  is_used: Scalars['Boolean'];
  otp_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
}

/** aggregated selection of "email_otp" */
interface EmailOtpAggregate {
  __typename?: 'email_otp_aggregate';
  aggregate?: Maybe<EmailOtpAggregateFields>;
  nodes: Array<EmailOtp>;
}

/** aggregate fields of "email_otp" */
interface EmailOtpAggregateFields {
  __typename?: 'email_otp_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<EmailOtpMaxFields>;
  min?: Maybe<EmailOtpMinFields>;
}


/** aggregate fields of "email_otp" */
interface EmailOtpAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<EmailOtpSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** Boolean expression to filter rows from the table "email_otp". All fields are combined with a logical 'AND'. */
interface EmailOtpBoolExp {
  _and?: InputMaybe<Array<EmailOtpBoolExp>>;
  _not?: InputMaybe<EmailOtpBoolExp>;
  _or?: InputMaybe<Array<EmailOtpBoolExp>>;
  code?: InputMaybe<StringComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  expired_at?: InputMaybe<TimestamptzComparisonExp>;
  is_used?: InputMaybe<BooleanComparisonExp>;
  otp_id?: InputMaybe<UuidComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
}

/** unique or primary key constraints on table "email_otp" */
enum EmailOtpConstraint {
  /** unique or primary key constraint */
  EmailOtpPkey = 'email_otp_pkey'
}

/** input type for inserting data into table "email_otp" */
interface EmailOtpInsertInput {
  code?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  expired_at?: InputMaybe<Scalars['timestamptz']>;
  is_used?: InputMaybe<Scalars['Boolean']>;
  otp_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
}

/** aggregate max on columns */
interface EmailOtpMaxFields {
  __typename?: 'email_otp_max_fields';
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  expired_at?: Maybe<Scalars['timestamptz']>;
  otp_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
}

/** aggregate min on columns */
interface EmailOtpMinFields {
  __typename?: 'email_otp_min_fields';
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  expired_at?: Maybe<Scalars['timestamptz']>;
  otp_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
}

/** response of any mutation on the table "email_otp" */
interface EmailOtpMutationResponse {
  __typename?: 'email_otp_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<EmailOtp>;
}

/** on conflict condition type for table "email_otp" */
interface EmailOtpOnConflict {
  constraint: EmailOtpConstraint;
  update_columns?: Array<EmailOtpUpdateColumn>;
  where?: InputMaybe<EmailOtpBoolExp>;
}

/** Ordering options when selecting data from "email_otp". */
interface EmailOtpOrderBy {
  code?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  expired_at?: InputMaybe<OrderBy>;
  is_used?: InputMaybe<OrderBy>;
  otp_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
}

/** primary key columns input for table: email_otp */
interface EmailOtpPkColumnsInput {
  otp_id: Scalars['uuid'];
}

/** select columns of table "email_otp" */
enum EmailOtpSelectColumn {
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  ExpiredAt = 'expired_at',
  /** column name */
  IsUsed = 'is_used',
  /** column name */
  OtpId = 'otp_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "email_otp" */
interface EmailOtpSetInput {
  code?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  expired_at?: InputMaybe<Scalars['timestamptz']>;
  is_used?: InputMaybe<Scalars['Boolean']>;
  otp_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
}

/** update columns of table "email_otp" */
enum EmailOtpUpdateColumn {
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  ExpiredAt = 'expired_at',
  /** column name */
  IsUsed = 'is_used',
  /** column name */
  OtpId = 'otp_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
interface JsonbComparisonExp {
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
}

/** mutation root */
interface MutationRoot {
  __typename?: 'mutation_root';
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<CategoriesMutationResponse>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "comments" */
  delete_comments?: Maybe<CommentsMutationResponse>;
  /** delete single row from the table: "comments" */
  delete_comments_by_pk?: Maybe<Comments>;
  /** delete data from the table: "email_otp" */
  delete_email_otp?: Maybe<EmailOtpMutationResponse>;
  /** delete single row from the table: "email_otp" */
  delete_email_otp_by_pk?: Maybe<EmailOtp>;
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<PostsMutationResponse>;
  /** delete single row from the table: "posts" */
  delete_posts_by_pk?: Maybe<Posts>;
  /** delete data from the table: "posts_categories" */
  delete_posts_categories?: Maybe<PostsCategoriesMutationResponse>;
  /** delete single row from the table: "posts_categories" */
  delete_posts_categories_by_pk?: Maybe<PostsCategories>;
  /** delete data from the table: "posts_tags" */
  delete_posts_tags?: Maybe<PostsTagsMutationResponse>;
  /** delete single row from the table: "posts_tags" */
  delete_posts_tags_by_pk?: Maybe<PostsTags>;
  /** delete data from the table: "tags" */
  delete_tags?: Maybe<TagsMutationResponse>;
  /** delete single row from the table: "tags" */
  delete_tags_by_pk?: Maybe<Tags>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<UsersMutationResponse>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<CategoriesMutationResponse>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "comments" */
  insert_comments?: Maybe<CommentsMutationResponse>;
  /** insert a single row into the table: "comments" */
  insert_comments_one?: Maybe<Comments>;
  /** insert data into the table: "email_otp" */
  insert_email_otp?: Maybe<EmailOtpMutationResponse>;
  /** insert a single row into the table: "email_otp" */
  insert_email_otp_one?: Maybe<EmailOtp>;
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<PostsMutationResponse>;
  /** insert data into the table: "posts_categories" */
  insert_posts_categories?: Maybe<PostsCategoriesMutationResponse>;
  /** insert a single row into the table: "posts_categories" */
  insert_posts_categories_one?: Maybe<PostsCategories>;
  /** insert a single row into the table: "posts" */
  insert_posts_one?: Maybe<Posts>;
  /** insert data into the table: "posts_tags" */
  insert_posts_tags?: Maybe<PostsTagsMutationResponse>;
  /** insert a single row into the table: "posts_tags" */
  insert_posts_tags_one?: Maybe<PostsTags>;
  /** insert data into the table: "tags" */
  insert_tags?: Maybe<TagsMutationResponse>;
  /** insert a single row into the table: "tags" */
  insert_tags_one?: Maybe<Tags>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<CategoriesMutationResponse>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update data of the table: "comments" */
  update_comments?: Maybe<CommentsMutationResponse>;
  /** update single row of the table: "comments" */
  update_comments_by_pk?: Maybe<Comments>;
  /** update data of the table: "email_otp" */
  update_email_otp?: Maybe<EmailOtpMutationResponse>;
  /** update single row of the table: "email_otp" */
  update_email_otp_by_pk?: Maybe<EmailOtp>;
  /** update data of the table: "posts" */
  update_posts?: Maybe<PostsMutationResponse>;
  /** update single row of the table: "posts" */
  update_posts_by_pk?: Maybe<Posts>;
  /** update data of the table: "posts_categories" */
  update_posts_categories?: Maybe<PostsCategoriesMutationResponse>;
  /** update single row of the table: "posts_categories" */
  update_posts_categories_by_pk?: Maybe<PostsCategories>;
  /** update data of the table: "posts_tags" */
  update_posts_tags?: Maybe<PostsTagsMutationResponse>;
  /** update single row of the table: "posts_tags" */
  update_posts_tags_by_pk?: Maybe<PostsTags>;
  /** update data of the table: "tags" */
  update_tags?: Maybe<TagsMutationResponse>;
  /** update single row of the table: "tags" */
  update_tags_by_pk?: Maybe<Tags>;
  /** update data of the table: "users" */
  update_users?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
}


/** mutation root */
interface MutationRootDeleteCategoriesArgs {
  where: CategoriesBoolExp;
}


/** mutation root */
interface MutationRootDeleteCategoriesByPkArgs {
  category_id: Scalars['uuid'];
}


/** mutation root */
interface MutationRootDeleteCommentsArgs {
  where: CommentsBoolExp;
}


/** mutation root */
interface MutationRootDeleteCommentsByPkArgs {
  comment_id: Scalars['uuid'];
}


/** mutation root */
interface MutationRootDeleteEmailOtpArgs {
  where: EmailOtpBoolExp;
}


/** mutation root */
interface MutationRootDeleteEmailOtpByPkArgs {
  otp_id: Scalars['uuid'];
}


/** mutation root */
interface MutationRootDeletePostsArgs {
  where: PostsBoolExp;
}


/** mutation root */
interface MutationRootDeletePostsByPkArgs {
  post_id: Scalars['uuid'];
}


/** mutation root */
interface MutationRootDeletePostsCategoriesArgs {
  where: PostsCategoriesBoolExp;
}


/** mutation root */
interface MutationRootDeletePostsCategoriesByPkArgs {
  posts_categories_id: Scalars['uuid'];
}


/** mutation root */
interface MutationRootDeletePostsTagsArgs {
  where: PostsTagsBoolExp;
}


/** mutation root */
interface MutationRootDeletePostsTagsByPkArgs {
  posts_tags_id: Scalars['uuid'];
}


/** mutation root */
interface MutationRootDeleteTagsArgs {
  where: TagsBoolExp;
}


/** mutation root */
interface MutationRootDeleteTagsByPkArgs {
  tag_id: Scalars['uuid'];
}


/** mutation root */
interface MutationRootDeleteUsersArgs {
  where: UsersBoolExp;
}


/** mutation root */
interface MutationRootDeleteUsersByPkArgs {
  user_id: Scalars['uuid'];
}


/** mutation root */
interface MutationRootInsertCategoriesArgs {
  objects: Array<CategoriesInsertInput>;
  on_conflict?: InputMaybe<CategoriesOnConflict>;
}


/** mutation root */
interface MutationRootInsertCategoriesOneArgs {
  object: CategoriesInsertInput;
  on_conflict?: InputMaybe<CategoriesOnConflict>;
}


/** mutation root */
interface MutationRootInsertCommentsArgs {
  objects: Array<CommentsInsertInput>;
  on_conflict?: InputMaybe<CommentsOnConflict>;
}


/** mutation root */
interface MutationRootInsertCommentsOneArgs {
  object: CommentsInsertInput;
  on_conflict?: InputMaybe<CommentsOnConflict>;
}


/** mutation root */
interface MutationRootInsertEmailOtpArgs {
  objects: Array<EmailOtpInsertInput>;
  on_conflict?: InputMaybe<EmailOtpOnConflict>;
}


/** mutation root */
interface MutationRootInsertEmailOtpOneArgs {
  object: EmailOtpInsertInput;
  on_conflict?: InputMaybe<EmailOtpOnConflict>;
}


/** mutation root */
interface MutationRootInsertPostsArgs {
  objects: Array<PostsInsertInput>;
  on_conflict?: InputMaybe<PostsOnConflict>;
}


/** mutation root */
interface MutationRootInsertPostsCategoriesArgs {
  objects: Array<PostsCategoriesInsertInput>;
  on_conflict?: InputMaybe<PostsCategoriesOnConflict>;
}


/** mutation root */
interface MutationRootInsertPostsCategoriesOneArgs {
  object: PostsCategoriesInsertInput;
  on_conflict?: InputMaybe<PostsCategoriesOnConflict>;
}


/** mutation root */
interface MutationRootInsertPostsOneArgs {
  object: PostsInsertInput;
  on_conflict?: InputMaybe<PostsOnConflict>;
}


/** mutation root */
interface MutationRootInsertPostsTagsArgs {
  objects: Array<PostsTagsInsertInput>;
  on_conflict?: InputMaybe<PostsTagsOnConflict>;
}


/** mutation root */
interface MutationRootInsertPostsTagsOneArgs {
  object: PostsTagsInsertInput;
  on_conflict?: InputMaybe<PostsTagsOnConflict>;
}


/** mutation root */
interface MutationRootInsertTagsArgs {
  objects: Array<TagsInsertInput>;
  on_conflict?: InputMaybe<TagsOnConflict>;
}


/** mutation root */
interface MutationRootInsertTagsOneArgs {
  object: TagsInsertInput;
  on_conflict?: InputMaybe<TagsOnConflict>;
}


/** mutation root */
interface MutationRootInsertUsersArgs {
  objects: Array<UsersInsertInput>;
  on_conflict?: InputMaybe<UsersOnConflict>;
}


/** mutation root */
interface MutationRootInsertUsersOneArgs {
  object: UsersInsertInput;
  on_conflict?: InputMaybe<UsersOnConflict>;
}


/** mutation root */
interface MutationRootUpdateCategoriesArgs {
  _append?: InputMaybe<CategoriesAppendInput>;
  _delete_at_path?: InputMaybe<CategoriesDeleteAtPathInput>;
  _delete_elem?: InputMaybe<CategoriesDeleteElemInput>;
  _delete_key?: InputMaybe<CategoriesDeleteKeyInput>;
  _prepend?: InputMaybe<CategoriesPrependInput>;
  _set?: InputMaybe<CategoriesSetInput>;
  where: CategoriesBoolExp;
}


/** mutation root */
interface MutationRootUpdateCategoriesByPkArgs {
  _append?: InputMaybe<CategoriesAppendInput>;
  _delete_at_path?: InputMaybe<CategoriesDeleteAtPathInput>;
  _delete_elem?: InputMaybe<CategoriesDeleteElemInput>;
  _delete_key?: InputMaybe<CategoriesDeleteKeyInput>;
  _prepend?: InputMaybe<CategoriesPrependInput>;
  _set?: InputMaybe<CategoriesSetInput>;
  pk_columns: CategoriesPkColumnsInput;
}


/** mutation root */
interface MutationRootUpdateCommentsArgs {
  _append?: InputMaybe<CommentsAppendInput>;
  _delete_at_path?: InputMaybe<CommentsDeleteAtPathInput>;
  _delete_elem?: InputMaybe<CommentsDeleteElemInput>;
  _delete_key?: InputMaybe<CommentsDeleteKeyInput>;
  _prepend?: InputMaybe<CommentsPrependInput>;
  _set?: InputMaybe<CommentsSetInput>;
  where: CommentsBoolExp;
}


/** mutation root */
interface MutationRootUpdateCommentsByPkArgs {
  _append?: InputMaybe<CommentsAppendInput>;
  _delete_at_path?: InputMaybe<CommentsDeleteAtPathInput>;
  _delete_elem?: InputMaybe<CommentsDeleteElemInput>;
  _delete_key?: InputMaybe<CommentsDeleteKeyInput>;
  _prepend?: InputMaybe<CommentsPrependInput>;
  _set?: InputMaybe<CommentsSetInput>;
  pk_columns: CommentsPkColumnsInput;
}


/** mutation root */
interface MutationRootUpdateEmailOtpArgs {
  _set?: InputMaybe<EmailOtpSetInput>;
  where: EmailOtpBoolExp;
}


/** mutation root */
interface MutationRootUpdateEmailOtpByPkArgs {
  _set?: InputMaybe<EmailOtpSetInput>;
  pk_columns: EmailOtpPkColumnsInput;
}


/** mutation root */
interface MutationRootUpdatePostsArgs {
  _append?: InputMaybe<PostsAppendInput>;
  _delete_at_path?: InputMaybe<PostsDeleteAtPathInput>;
  _delete_elem?: InputMaybe<PostsDeleteElemInput>;
  _delete_key?: InputMaybe<PostsDeleteKeyInput>;
  _inc?: InputMaybe<PostsIncInput>;
  _prepend?: InputMaybe<PostsPrependInput>;
  _set?: InputMaybe<PostsSetInput>;
  where: PostsBoolExp;
}


/** mutation root */
interface MutationRootUpdatePostsByPkArgs {
  _append?: InputMaybe<PostsAppendInput>;
  _delete_at_path?: InputMaybe<PostsDeleteAtPathInput>;
  _delete_elem?: InputMaybe<PostsDeleteElemInput>;
  _delete_key?: InputMaybe<PostsDeleteKeyInput>;
  _inc?: InputMaybe<PostsIncInput>;
  _prepend?: InputMaybe<PostsPrependInput>;
  _set?: InputMaybe<PostsSetInput>;
  pk_columns: PostsPkColumnsInput;
}


/** mutation root */
interface MutationRootUpdatePostsCategoriesArgs {
  _set?: InputMaybe<PostsCategoriesSetInput>;
  where: PostsCategoriesBoolExp;
}


/** mutation root */
interface MutationRootUpdatePostsCategoriesByPkArgs {
  _set?: InputMaybe<PostsCategoriesSetInput>;
  pk_columns: PostsCategoriesPkColumnsInput;
}


/** mutation root */
interface MutationRootUpdatePostsTagsArgs {
  _set?: InputMaybe<PostsTagsSetInput>;
  where: PostsTagsBoolExp;
}


/** mutation root */
interface MutationRootUpdatePostsTagsByPkArgs {
  _set?: InputMaybe<PostsTagsSetInput>;
  pk_columns: PostsTagsPkColumnsInput;
}


/** mutation root */
interface MutationRootUpdateTagsArgs {
  _append?: InputMaybe<TagsAppendInput>;
  _delete_at_path?: InputMaybe<TagsDeleteAtPathInput>;
  _delete_elem?: InputMaybe<TagsDeleteElemInput>;
  _delete_key?: InputMaybe<TagsDeleteKeyInput>;
  _prepend?: InputMaybe<TagsPrependInput>;
  _set?: InputMaybe<TagsSetInput>;
  where: TagsBoolExp;
}


/** mutation root */
interface MutationRootUpdateTagsByPkArgs {
  _append?: InputMaybe<TagsAppendInput>;
  _delete_at_path?: InputMaybe<TagsDeleteAtPathInput>;
  _delete_elem?: InputMaybe<TagsDeleteElemInput>;
  _delete_key?: InputMaybe<TagsDeleteKeyInput>;
  _prepend?: InputMaybe<TagsPrependInput>;
  _set?: InputMaybe<TagsSetInput>;
  pk_columns: TagsPkColumnsInput;
}


/** mutation root */
interface MutationRootUpdateUsersArgs {
  _append?: InputMaybe<UsersAppendInput>;
  _delete_at_path?: InputMaybe<UsersDeleteAtPathInput>;
  _delete_elem?: InputMaybe<UsersDeleteElemInput>;
  _delete_key?: InputMaybe<UsersDeleteKeyInput>;
  _prepend?: InputMaybe<UsersPrependInput>;
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
}


/** mutation root */
interface MutationRootUpdateUsersByPkArgs {
  _append?: InputMaybe<UsersAppendInput>;
  _delete_at_path?: InputMaybe<UsersDeleteAtPathInput>;
  _delete_elem?: InputMaybe<UsersDeleteElemInput>;
  _delete_key?: InputMaybe<UsersDeleteKeyInput>;
  _prepend?: InputMaybe<UsersPrependInput>;
  _set?: InputMaybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
interface NumericComparisonExp {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
}

/** column ordering options */
enum OrderBy {
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

/** columns and relationships of "posts" */
interface Posts {
  __typename?: 'posts';
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  custom_field?: Maybe<Scalars['jsonb']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  post_id: Scalars['uuid'];
  reaction?: Maybe<Scalars['numeric']>;
  summary: Scalars['String'];
  title: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
}


/** columns and relationships of "posts" */
interface PostsCustomFieldArgs {
  path?: InputMaybe<Scalars['String']>;
}

/** aggregated selection of "posts" */
interface PostsAggregate {
  __typename?: 'posts_aggregate';
  aggregate?: Maybe<PostsAggregateFields>;
  nodes: Array<Posts>;
}

/** aggregate fields of "posts" */
interface PostsAggregateFields {
  __typename?: 'posts_aggregate_fields';
  avg?: Maybe<PostsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<PostsMaxFields>;
  min?: Maybe<PostsMinFields>;
  stddev?: Maybe<PostsStddevFields>;
  stddev_pop?: Maybe<PostsStddevPopFields>;
  stddev_samp?: Maybe<PostsStddevSampFields>;
  sum?: Maybe<PostsSumFields>;
  var_pop?: Maybe<PostsVarPopFields>;
  var_samp?: Maybe<PostsVarSampFields>;
  variance?: Maybe<PostsVarianceFields>;
}


/** aggregate fields of "posts" */
interface PostsAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<PostsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "posts" */
interface PostsAggregateOrderBy {
  avg?: InputMaybe<PostsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PostsMaxOrderBy>;
  min?: InputMaybe<PostsMinOrderBy>;
  stddev?: InputMaybe<PostsStddevOrderBy>;
  stddev_pop?: InputMaybe<PostsStddevPopOrderBy>;
  stddev_samp?: InputMaybe<PostsStddevSampOrderBy>;
  sum?: InputMaybe<PostsSumOrderBy>;
  var_pop?: InputMaybe<PostsVarPopOrderBy>;
  var_samp?: InputMaybe<PostsVarSampOrderBy>;
  variance?: InputMaybe<PostsVarianceOrderBy>;
}

/** append existing jsonb value of filtered columns with new jsonb value */
interface PostsAppendInput {
  custom_field?: InputMaybe<Scalars['jsonb']>;
}

/** input type for inserting array relation for remote table "posts" */
interface PostsArrRelInsertInput {
  data: Array<PostsInsertInput>;
  /** on conflict condition */
  on_conflict?: InputMaybe<PostsOnConflict>;
}

/** aggregate avg on columns */
interface PostsAvgFields {
  __typename?: 'posts_avg_fields';
  reaction?: Maybe<Scalars['Float']>;
}

/** order by avg() on columns of table "posts" */
interface PostsAvgOrderBy {
  reaction?: InputMaybe<OrderBy>;
}

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
interface PostsBoolExp {
  _and?: InputMaybe<Array<PostsBoolExp>>;
  _not?: InputMaybe<PostsBoolExp>;
  _or?: InputMaybe<Array<PostsBoolExp>>;
  content?: InputMaybe<StringComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  custom_field?: InputMaybe<JsonbComparisonExp>;
  deleted_at?: InputMaybe<TimestamptzComparisonExp>;
  post_id?: InputMaybe<UuidComparisonExp>;
  reaction?: InputMaybe<NumericComparisonExp>;
  summary?: InputMaybe<StringComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
}

/** columns and relationships of "posts_categories" */
interface PostsCategories {
  __typename?: 'posts_categories';
  /** An object relationship */
  category: Categories;
  category_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  post: Posts;
  post_id: Scalars['uuid'];
  posts_categories_id: Scalars['uuid'];
  updated_at?: Maybe<Scalars['timestamptz']>;
}

/** aggregated selection of "posts_categories" */
interface PostsCategoriesAggregate {
  __typename?: 'posts_categories_aggregate';
  aggregate?: Maybe<PostsCategoriesAggregateFields>;
  nodes: Array<PostsCategories>;
}

/** aggregate fields of "posts_categories" */
interface PostsCategoriesAggregateFields {
  __typename?: 'posts_categories_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<PostsCategoriesMaxFields>;
  min?: Maybe<PostsCategoriesMinFields>;
}


/** aggregate fields of "posts_categories" */
interface PostsCategoriesAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<PostsCategoriesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "posts_categories" */
interface PostsCategoriesAggregateOrderBy {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PostsCategoriesMaxOrderBy>;
  min?: InputMaybe<PostsCategoriesMinOrderBy>;
}

/** input type for inserting array relation for remote table "posts_categories" */
interface PostsCategoriesArrRelInsertInput {
  data: Array<PostsCategoriesInsertInput>;
  /** on conflict condition */
  on_conflict?: InputMaybe<PostsCategoriesOnConflict>;
}

/** Boolean expression to filter rows from the table "posts_categories". All fields are combined with a logical 'AND'. */
interface PostsCategoriesBoolExp {
  _and?: InputMaybe<Array<PostsCategoriesBoolExp>>;
  _not?: InputMaybe<PostsCategoriesBoolExp>;
  _or?: InputMaybe<Array<PostsCategoriesBoolExp>>;
  category?: InputMaybe<CategoriesBoolExp>;
  category_id?: InputMaybe<UuidComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  deleted_at?: InputMaybe<TimestamptzComparisonExp>;
  post?: InputMaybe<PostsBoolExp>;
  post_id?: InputMaybe<UuidComparisonExp>;
  posts_categories_id?: InputMaybe<UuidComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
}

/** unique or primary key constraints on table "posts_categories" */
enum PostsCategoriesConstraint {
  /** unique or primary key constraint */
  PostsCategoriesPkey = 'posts_categories_pkey'
}

/** input type for inserting data into table "posts_categories" */
interface PostsCategoriesInsertInput {
  category?: InputMaybe<CategoriesObjRelInsertInput>;
  category_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  post?: InputMaybe<PostsObjRelInsertInput>;
  post_id?: InputMaybe<Scalars['uuid']>;
  posts_categories_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
}

/** aggregate max on columns */
interface PostsCategoriesMaxFields {
  __typename?: 'posts_categories_max_fields';
  category_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  post_id?: Maybe<Scalars['uuid']>;
  posts_categories_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
}

/** order by max() on columns of table "posts_categories" */
interface PostsCategoriesMaxOrderBy {
  category_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  deleted_at?: InputMaybe<OrderBy>;
  post_id?: InputMaybe<OrderBy>;
  posts_categories_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
}

/** aggregate min on columns */
interface PostsCategoriesMinFields {
  __typename?: 'posts_categories_min_fields';
  category_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  post_id?: Maybe<Scalars['uuid']>;
  posts_categories_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
}

/** order by min() on columns of table "posts_categories" */
interface PostsCategoriesMinOrderBy {
  category_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  deleted_at?: InputMaybe<OrderBy>;
  post_id?: InputMaybe<OrderBy>;
  posts_categories_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
}

/** response of any mutation on the table "posts_categories" */
interface PostsCategoriesMutationResponse {
  __typename?: 'posts_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PostsCategories>;
}

/** on conflict condition type for table "posts_categories" */
interface PostsCategoriesOnConflict {
  constraint: PostsCategoriesConstraint;
  update_columns?: Array<PostsCategoriesUpdateColumn>;
  where?: InputMaybe<PostsCategoriesBoolExp>;
}

/** Ordering options when selecting data from "posts_categories". */
interface PostsCategoriesOrderBy {
  category?: InputMaybe<CategoriesOrderBy>;
  category_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  deleted_at?: InputMaybe<OrderBy>;
  post?: InputMaybe<PostsOrderBy>;
  post_id?: InputMaybe<OrderBy>;
  posts_categories_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
}

/** primary key columns input for table: posts_categories */
interface PostsCategoriesPkColumnsInput {
  posts_categories_id: Scalars['uuid'];
}

/** select columns of table "posts_categories" */
enum PostsCategoriesSelectColumn {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  PostId = 'post_id',
  /** column name */
  PostsCategoriesId = 'posts_categories_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "posts_categories" */
interface PostsCategoriesSetInput {
  category_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  post_id?: InputMaybe<Scalars['uuid']>;
  posts_categories_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
}

/** update columns of table "posts_categories" */
enum PostsCategoriesUpdateColumn {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  PostId = 'post_id',
  /** column name */
  PostsCategoriesId = 'posts_categories_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** unique or primary key constraints on table "posts" */
enum PostsConstraint {
  /** unique or primary key constraint */
  PostsPkey = 'posts_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
interface PostsDeleteAtPathInput {
  custom_field?: InputMaybe<Array<Scalars['String']>>;
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
interface PostsDeleteElemInput {
  custom_field?: InputMaybe<Scalars['Int']>;
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
interface PostsDeleteKeyInput {
  custom_field?: InputMaybe<Scalars['String']>;
}

/** input type for incrementing numeric columns in table "posts" */
interface PostsIncInput {
  reaction?: InputMaybe<Scalars['numeric']>;
}

/** input type for inserting data into table "posts" */
interface PostsInsertInput {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  custom_field?: InputMaybe<Scalars['jsonb']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  post_id?: InputMaybe<Scalars['uuid']>;
  reaction?: InputMaybe<Scalars['numeric']>;
  summary?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['uuid']>;
}

/** aggregate max on columns */
interface PostsMaxFields {
  __typename?: 'posts_max_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  post_id?: Maybe<Scalars['uuid']>;
  reaction?: Maybe<Scalars['numeric']>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
}

/** order by max() on columns of table "posts" */
interface PostsMaxOrderBy {
  content?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  deleted_at?: InputMaybe<OrderBy>;
  post_id?: InputMaybe<OrderBy>;
  reaction?: InputMaybe<OrderBy>;
  summary?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
}

/** aggregate min on columns */
interface PostsMinFields {
  __typename?: 'posts_min_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  post_id?: Maybe<Scalars['uuid']>;
  reaction?: Maybe<Scalars['numeric']>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
}

/** order by min() on columns of table "posts" */
interface PostsMinOrderBy {
  content?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  deleted_at?: InputMaybe<OrderBy>;
  post_id?: InputMaybe<OrderBy>;
  reaction?: InputMaybe<OrderBy>;
  summary?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
}

/** response of any mutation on the table "posts" */
interface PostsMutationResponse {
  __typename?: 'posts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Posts>;
}

/** input type for inserting object relation for remote table "posts" */
interface PostsObjRelInsertInput {
  data: PostsInsertInput;
  /** on conflict condition */
  on_conflict?: InputMaybe<PostsOnConflict>;
}

/** on conflict condition type for table "posts" */
interface PostsOnConflict {
  constraint: PostsConstraint;
  update_columns?: Array<PostsUpdateColumn>;
  where?: InputMaybe<PostsBoolExp>;
}

/** Ordering options when selecting data from "posts". */
interface PostsOrderBy {
  content?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  custom_field?: InputMaybe<OrderBy>;
  deleted_at?: InputMaybe<OrderBy>;
  post_id?: InputMaybe<OrderBy>;
  reaction?: InputMaybe<OrderBy>;
  summary?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_id?: InputMaybe<OrderBy>;
}

/** primary key columns input for table: posts */
interface PostsPkColumnsInput {
  post_id: Scalars['uuid'];
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
interface PostsPrependInput {
  custom_field?: InputMaybe<Scalars['jsonb']>;
}

/** select columns of table "posts" */
enum PostsSelectColumn {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomField = 'custom_field',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Reaction = 'reaction',
  /** column name */
  Summary = 'summary',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "posts" */
interface PostsSetInput {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  custom_field?: InputMaybe<Scalars['jsonb']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  post_id?: InputMaybe<Scalars['uuid']>;
  reaction?: InputMaybe<Scalars['numeric']>;
  summary?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
}

/** aggregate stddev on columns */
interface PostsStddevFields {
  __typename?: 'posts_stddev_fields';
  reaction?: Maybe<Scalars['Float']>;
}

/** order by stddev() on columns of table "posts" */
interface PostsStddevOrderBy {
  reaction?: InputMaybe<OrderBy>;
}

/** aggregate stddev_pop on columns */
interface PostsStddevPopFields {
  __typename?: 'posts_stddev_pop_fields';
  reaction?: Maybe<Scalars['Float']>;
}

/** order by stddev_pop() on columns of table "posts" */
interface PostsStddevPopOrderBy {
  reaction?: InputMaybe<OrderBy>;
}

/** aggregate stddev_samp on columns */
interface PostsStddevSampFields {
  __typename?: 'posts_stddev_samp_fields';
  reaction?: Maybe<Scalars['Float']>;
}

/** order by stddev_samp() on columns of table "posts" */
interface PostsStddevSampOrderBy {
  reaction?: InputMaybe<OrderBy>;
}

/** aggregate sum on columns */
interface PostsSumFields {
  __typename?: 'posts_sum_fields';
  reaction?: Maybe<Scalars['numeric']>;
}

/** order by sum() on columns of table "posts" */
interface PostsSumOrderBy {
  reaction?: InputMaybe<OrderBy>;
}

/** columns and relationships of "posts_tags" */
interface PostsTags {
  __typename?: 'posts_tags';
  created_at: Scalars['timestamptz'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  post: Posts;
  post_id: Scalars['uuid'];
  posts_tags_id: Scalars['uuid'];
  /** An object relationship */
  tag: Tags;
  tag_id: Scalars['uuid'];
  updated_at?: Maybe<Scalars['timestamptz']>;
}

/** aggregated selection of "posts_tags" */
interface PostsTagsAggregate {
  __typename?: 'posts_tags_aggregate';
  aggregate?: Maybe<PostsTagsAggregateFields>;
  nodes: Array<PostsTags>;
}

/** aggregate fields of "posts_tags" */
interface PostsTagsAggregateFields {
  __typename?: 'posts_tags_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<PostsTagsMaxFields>;
  min?: Maybe<PostsTagsMinFields>;
}


/** aggregate fields of "posts_tags" */
interface PostsTagsAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<PostsTagsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** order by aggregate values of table "posts_tags" */
interface PostsTagsAggregateOrderBy {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PostsTagsMaxOrderBy>;
  min?: InputMaybe<PostsTagsMinOrderBy>;
}

/** input type for inserting array relation for remote table "posts_tags" */
interface PostsTagsArrRelInsertInput {
  data: Array<PostsTagsInsertInput>;
  /** on conflict condition */
  on_conflict?: InputMaybe<PostsTagsOnConflict>;
}

/** Boolean expression to filter rows from the table "posts_tags". All fields are combined with a logical 'AND'. */
interface PostsTagsBoolExp {
  _and?: InputMaybe<Array<PostsTagsBoolExp>>;
  _not?: InputMaybe<PostsTagsBoolExp>;
  _or?: InputMaybe<Array<PostsTagsBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  deleted_at?: InputMaybe<TimestamptzComparisonExp>;
  post?: InputMaybe<PostsBoolExp>;
  post_id?: InputMaybe<UuidComparisonExp>;
  posts_tags_id?: InputMaybe<UuidComparisonExp>;
  tag?: InputMaybe<TagsBoolExp>;
  tag_id?: InputMaybe<UuidComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
}

/** unique or primary key constraints on table "posts_tags" */
enum PostsTagsConstraint {
  /** unique or primary key constraint */
  PostsTagsPkey = 'posts_tags_pkey'
}

/** input type for inserting data into table "posts_tags" */
interface PostsTagsInsertInput {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  post?: InputMaybe<PostsObjRelInsertInput>;
  post_id?: InputMaybe<Scalars['uuid']>;
  posts_tags_id?: InputMaybe<Scalars['uuid']>;
  tag?: InputMaybe<TagsObjRelInsertInput>;
  tag_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
}

/** aggregate max on columns */
interface PostsTagsMaxFields {
  __typename?: 'posts_tags_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  post_id?: Maybe<Scalars['uuid']>;
  posts_tags_id?: Maybe<Scalars['uuid']>;
  tag_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
}

/** order by max() on columns of table "posts_tags" */
interface PostsTagsMaxOrderBy {
  created_at?: InputMaybe<OrderBy>;
  deleted_at?: InputMaybe<OrderBy>;
  post_id?: InputMaybe<OrderBy>;
  posts_tags_id?: InputMaybe<OrderBy>;
  tag_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
}

/** aggregate min on columns */
interface PostsTagsMinFields {
  __typename?: 'posts_tags_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  post_id?: Maybe<Scalars['uuid']>;
  posts_tags_id?: Maybe<Scalars['uuid']>;
  tag_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
}

/** order by min() on columns of table "posts_tags" */
interface PostsTagsMinOrderBy {
  created_at?: InputMaybe<OrderBy>;
  deleted_at?: InputMaybe<OrderBy>;
  post_id?: InputMaybe<OrderBy>;
  posts_tags_id?: InputMaybe<OrderBy>;
  tag_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
}

/** response of any mutation on the table "posts_tags" */
interface PostsTagsMutationResponse {
  __typename?: 'posts_tags_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PostsTags>;
}

/** on conflict condition type for table "posts_tags" */
interface PostsTagsOnConflict {
  constraint: PostsTagsConstraint;
  update_columns?: Array<PostsTagsUpdateColumn>;
  where?: InputMaybe<PostsTagsBoolExp>;
}

/** Ordering options when selecting data from "posts_tags". */
interface PostsTagsOrderBy {
  created_at?: InputMaybe<OrderBy>;
  deleted_at?: InputMaybe<OrderBy>;
  post?: InputMaybe<PostsOrderBy>;
  post_id?: InputMaybe<OrderBy>;
  posts_tags_id?: InputMaybe<OrderBy>;
  tag?: InputMaybe<TagsOrderBy>;
  tag_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
}

/** primary key columns input for table: posts_tags */
interface PostsTagsPkColumnsInput {
  posts_tags_id: Scalars['uuid'];
}

/** select columns of table "posts_tags" */
enum PostsTagsSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  PostId = 'post_id',
  /** column name */
  PostsTagsId = 'posts_tags_id',
  /** column name */
  TagId = 'tag_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "posts_tags" */
interface PostsTagsSetInput {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  post_id?: InputMaybe<Scalars['uuid']>;
  posts_tags_id?: InputMaybe<Scalars['uuid']>;
  tag_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
}

/** update columns of table "posts_tags" */
enum PostsTagsUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  PostId = 'post_id',
  /** column name */
  PostsTagsId = 'posts_tags_id',
  /** column name */
  TagId = 'tag_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** update columns of table "posts" */
enum PostsUpdateColumn {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomField = 'custom_field',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Reaction = 'reaction',
  /** column name */
  Summary = 'summary',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
interface PostsVarPopFields {
  __typename?: 'posts_var_pop_fields';
  reaction?: Maybe<Scalars['Float']>;
}

/** order by var_pop() on columns of table "posts" */
interface PostsVarPopOrderBy {
  reaction?: InputMaybe<OrderBy>;
}

/** aggregate var_samp on columns */
interface PostsVarSampFields {
  __typename?: 'posts_var_samp_fields';
  reaction?: Maybe<Scalars['Float']>;
}

/** order by var_samp() on columns of table "posts" */
interface PostsVarSampOrderBy {
  reaction?: InputMaybe<OrderBy>;
}

/** aggregate variance on columns */
interface PostsVarianceFields {
  __typename?: 'posts_variance_fields';
  reaction?: Maybe<Scalars['Float']>;
}

/** order by variance() on columns of table "posts" */
interface PostsVarianceOrderBy {
  reaction?: InputMaybe<OrderBy>;
}

interface QueryRoot {
  __typename?: 'query_root';
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: CategoriesAggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: CommentsAggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** fetch data from the table: "email_otp" */
  email_otp: Array<EmailOtp>;
  /** fetch aggregated fields from the table: "email_otp" */
  email_otp_aggregate: EmailOtpAggregate;
  /** fetch data from the table: "email_otp" using primary key columns */
  email_otp_by_pk?: Maybe<EmailOtp>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: PostsAggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** An array relationship */
  posts_categories: Array<PostsCategories>;
  /** An aggregate relationship */
  posts_categories_aggregate: PostsCategoriesAggregate;
  /** fetch data from the table: "posts_categories" using primary key columns */
  posts_categories_by_pk?: Maybe<PostsCategories>;
  /** An array relationship */
  posts_tags: Array<PostsTags>;
  /** An aggregate relationship */
  posts_tags_aggregate: PostsTagsAggregate;
  /** fetch data from the table: "posts_tags" using primary key columns */
  posts_tags_by_pk?: Maybe<PostsTags>;
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch aggregated fields from the table: "tags" */
  tags_aggregate: TagsAggregate;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
}


interface QueryRootCategoriesArgs {
  distinct_on?: InputMaybe<Array<CategoriesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CategoriesOrderBy>>;
  where?: InputMaybe<CategoriesBoolExp>;
}


interface QueryRootCategoriesAggregateArgs {
  distinct_on?: InputMaybe<Array<CategoriesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CategoriesOrderBy>>;
  where?: InputMaybe<CategoriesBoolExp>;
}


interface QueryRootCategoriesByPkArgs {
  category_id: Scalars['uuid'];
}


interface QueryRootCommentsArgs {
  distinct_on?: InputMaybe<Array<CommentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CommentsOrderBy>>;
  where?: InputMaybe<CommentsBoolExp>;
}


interface QueryRootCommentsAggregateArgs {
  distinct_on?: InputMaybe<Array<CommentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CommentsOrderBy>>;
  where?: InputMaybe<CommentsBoolExp>;
}


interface QueryRootCommentsByPkArgs {
  comment_id: Scalars['uuid'];
}


interface QueryRootEmailOtpArgs {
  distinct_on?: InputMaybe<Array<EmailOtpSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EmailOtpOrderBy>>;
  where?: InputMaybe<EmailOtpBoolExp>;
}


interface QueryRootEmailOtpAggregateArgs {
  distinct_on?: InputMaybe<Array<EmailOtpSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EmailOtpOrderBy>>;
  where?: InputMaybe<EmailOtpBoolExp>;
}


interface QueryRootEmailOtpByPkArgs {
  otp_id: Scalars['uuid'];
}


interface QueryRootPostsArgs {
  distinct_on?: InputMaybe<Array<PostsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostsOrderBy>>;
  where?: InputMaybe<PostsBoolExp>;
}


interface QueryRootPostsAggregateArgs {
  distinct_on?: InputMaybe<Array<PostsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostsOrderBy>>;
  where?: InputMaybe<PostsBoolExp>;
}


interface QueryRootPostsByPkArgs {
  post_id: Scalars['uuid'];
}


interface QueryRootPostsCategoriesArgs {
  distinct_on?: InputMaybe<Array<PostsCategoriesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostsCategoriesOrderBy>>;
  where?: InputMaybe<PostsCategoriesBoolExp>;
}


interface QueryRootPostsCategoriesAggregateArgs {
  distinct_on?: InputMaybe<Array<PostsCategoriesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostsCategoriesOrderBy>>;
  where?: InputMaybe<PostsCategoriesBoolExp>;
}


interface QueryRootPostsCategoriesByPkArgs {
  posts_categories_id: Scalars['uuid'];
}


interface QueryRootPostsTagsArgs {
  distinct_on?: InputMaybe<Array<PostsTagsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostsTagsOrderBy>>;
  where?: InputMaybe<PostsTagsBoolExp>;
}


interface QueryRootPostsTagsAggregateArgs {
  distinct_on?: InputMaybe<Array<PostsTagsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostsTagsOrderBy>>;
  where?: InputMaybe<PostsTagsBoolExp>;
}


interface QueryRootPostsTagsByPkArgs {
  posts_tags_id: Scalars['uuid'];
}


interface QueryRootTagsArgs {
  distinct_on?: InputMaybe<Array<TagsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TagsOrderBy>>;
  where?: InputMaybe<TagsBoolExp>;
}


interface QueryRootTagsAggregateArgs {
  distinct_on?: InputMaybe<Array<TagsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TagsOrderBy>>;
  where?: InputMaybe<TagsBoolExp>;
}


interface QueryRootTagsByPkArgs {
  tag_id: Scalars['uuid'];
}


interface QueryRootUsersArgs {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
}


interface QueryRootUsersAggregateArgs {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
}


interface QueryRootUsersByPkArgs {
  user_id: Scalars['uuid'];
}

interface SubscriptionRoot {
  __typename?: 'subscription_root';
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: CategoriesAggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: CommentsAggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** fetch data from the table: "email_otp" */
  email_otp: Array<EmailOtp>;
  /** fetch aggregated fields from the table: "email_otp" */
  email_otp_aggregate: EmailOtpAggregate;
  /** fetch data from the table: "email_otp" using primary key columns */
  email_otp_by_pk?: Maybe<EmailOtp>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: PostsAggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** An array relationship */
  posts_categories: Array<PostsCategories>;
  /** An aggregate relationship */
  posts_categories_aggregate: PostsCategoriesAggregate;
  /** fetch data from the table: "posts_categories" using primary key columns */
  posts_categories_by_pk?: Maybe<PostsCategories>;
  /** An array relationship */
  posts_tags: Array<PostsTags>;
  /** An aggregate relationship */
  posts_tags_aggregate: PostsTagsAggregate;
  /** fetch data from the table: "posts_tags" using primary key columns */
  posts_tags_by_pk?: Maybe<PostsTags>;
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch aggregated fields from the table: "tags" */
  tags_aggregate: TagsAggregate;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
}


interface SubscriptionRootCategoriesArgs {
  distinct_on?: InputMaybe<Array<CategoriesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CategoriesOrderBy>>;
  where?: InputMaybe<CategoriesBoolExp>;
}


interface SubscriptionRootCategoriesAggregateArgs {
  distinct_on?: InputMaybe<Array<CategoriesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CategoriesOrderBy>>;
  where?: InputMaybe<CategoriesBoolExp>;
}


interface SubscriptionRootCategoriesByPkArgs {
  category_id: Scalars['uuid'];
}


interface SubscriptionRootCommentsArgs {
  distinct_on?: InputMaybe<Array<CommentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CommentsOrderBy>>;
  where?: InputMaybe<CommentsBoolExp>;
}


interface SubscriptionRootCommentsAggregateArgs {
  distinct_on?: InputMaybe<Array<CommentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CommentsOrderBy>>;
  where?: InputMaybe<CommentsBoolExp>;
}


interface SubscriptionRootCommentsByPkArgs {
  comment_id: Scalars['uuid'];
}


interface SubscriptionRootEmailOtpArgs {
  distinct_on?: InputMaybe<Array<EmailOtpSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EmailOtpOrderBy>>;
  where?: InputMaybe<EmailOtpBoolExp>;
}


interface SubscriptionRootEmailOtpAggregateArgs {
  distinct_on?: InputMaybe<Array<EmailOtpSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EmailOtpOrderBy>>;
  where?: InputMaybe<EmailOtpBoolExp>;
}


interface SubscriptionRootEmailOtpByPkArgs {
  otp_id: Scalars['uuid'];
}


interface SubscriptionRootPostsArgs {
  distinct_on?: InputMaybe<Array<PostsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostsOrderBy>>;
  where?: InputMaybe<PostsBoolExp>;
}


interface SubscriptionRootPostsAggregateArgs {
  distinct_on?: InputMaybe<Array<PostsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostsOrderBy>>;
  where?: InputMaybe<PostsBoolExp>;
}


interface SubscriptionRootPostsByPkArgs {
  post_id: Scalars['uuid'];
}


interface SubscriptionRootPostsCategoriesArgs {
  distinct_on?: InputMaybe<Array<PostsCategoriesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostsCategoriesOrderBy>>;
  where?: InputMaybe<PostsCategoriesBoolExp>;
}


interface SubscriptionRootPostsCategoriesAggregateArgs {
  distinct_on?: InputMaybe<Array<PostsCategoriesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostsCategoriesOrderBy>>;
  where?: InputMaybe<PostsCategoriesBoolExp>;
}


interface SubscriptionRootPostsCategoriesByPkArgs {
  posts_categories_id: Scalars['uuid'];
}


interface SubscriptionRootPostsTagsArgs {
  distinct_on?: InputMaybe<Array<PostsTagsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostsTagsOrderBy>>;
  where?: InputMaybe<PostsTagsBoolExp>;
}


interface SubscriptionRootPostsTagsAggregateArgs {
  distinct_on?: InputMaybe<Array<PostsTagsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostsTagsOrderBy>>;
  where?: InputMaybe<PostsTagsBoolExp>;
}


interface SubscriptionRootPostsTagsByPkArgs {
  posts_tags_id: Scalars['uuid'];
}


interface SubscriptionRootTagsArgs {
  distinct_on?: InputMaybe<Array<TagsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TagsOrderBy>>;
  where?: InputMaybe<TagsBoolExp>;
}


interface SubscriptionRootTagsAggregateArgs {
  distinct_on?: InputMaybe<Array<TagsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TagsOrderBy>>;
  where?: InputMaybe<TagsBoolExp>;
}


interface SubscriptionRootTagsByPkArgs {
  tag_id: Scalars['uuid'];
}


interface SubscriptionRootUsersArgs {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
}


interface SubscriptionRootUsersAggregateArgs {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
}


interface SubscriptionRootUsersByPkArgs {
  user_id: Scalars['uuid'];
}

/** columns and relationships of "tags" */
interface Tags {
  __typename?: 'tags';
  created_at: Scalars['timestamptz'];
  custom_field?: Maybe<Scalars['jsonb']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  name: Scalars['String'];
  /** An array relationship */
  posts_tags: Array<PostsTags>;
  /** An aggregate relationship */
  posts_tags_aggregate: PostsTagsAggregate;
  tag_id: Scalars['uuid'];
  updated_at?: Maybe<Scalars['timestamptz']>;
}


/** columns and relationships of "tags" */
interface TagsCustomFieldArgs {
  path?: InputMaybe<Scalars['String']>;
}


/** columns and relationships of "tags" */
interface TagsPostsTagsArgs {
  distinct_on?: InputMaybe<Array<PostsTagsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostsTagsOrderBy>>;
  where?: InputMaybe<PostsTagsBoolExp>;
}


/** columns and relationships of "tags" */
interface TagsPostsTagsAggregateArgs {
  distinct_on?: InputMaybe<Array<PostsTagsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostsTagsOrderBy>>;
  where?: InputMaybe<PostsTagsBoolExp>;
}

/** aggregated selection of "tags" */
interface TagsAggregate {
  __typename?: 'tags_aggregate';
  aggregate?: Maybe<TagsAggregateFields>;
  nodes: Array<Tags>;
}

/** aggregate fields of "tags" */
interface TagsAggregateFields {
  __typename?: 'tags_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TagsMaxFields>;
  min?: Maybe<TagsMinFields>;
}


/** aggregate fields of "tags" */
interface TagsAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<TagsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** append existing jsonb value of filtered columns with new jsonb value */
interface TagsAppendInput {
  custom_field?: InputMaybe<Scalars['jsonb']>;
}

/** Boolean expression to filter rows from the table "tags". All fields are combined with a logical 'AND'. */
interface TagsBoolExp {
  _and?: InputMaybe<Array<TagsBoolExp>>;
  _not?: InputMaybe<TagsBoolExp>;
  _or?: InputMaybe<Array<TagsBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  custom_field?: InputMaybe<JsonbComparisonExp>;
  deleted_at?: InputMaybe<TimestamptzComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  posts_tags?: InputMaybe<PostsTagsBoolExp>;
  tag_id?: InputMaybe<UuidComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
}

/** unique or primary key constraints on table "tags" */
enum TagsConstraint {
  /** unique or primary key constraint */
  TagsPkey = 'tags_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
interface TagsDeleteAtPathInput {
  custom_field?: InputMaybe<Array<Scalars['String']>>;
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
interface TagsDeleteElemInput {
  custom_field?: InputMaybe<Scalars['Int']>;
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
interface TagsDeleteKeyInput {
  custom_field?: InputMaybe<Scalars['String']>;
}

/** input type for inserting data into table "tags" */
interface TagsInsertInput {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  custom_field?: InputMaybe<Scalars['jsonb']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  posts_tags?: InputMaybe<PostsTagsArrRelInsertInput>;
  tag_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
}

/** aggregate max on columns */
interface TagsMaxFields {
  __typename?: 'tags_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  tag_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
}

/** aggregate min on columns */
interface TagsMinFields {
  __typename?: 'tags_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  tag_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
}

/** response of any mutation on the table "tags" */
interface TagsMutationResponse {
  __typename?: 'tags_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tags>;
}

/** input type for inserting object relation for remote table "tags" */
interface TagsObjRelInsertInput {
  data: TagsInsertInput;
  /** on conflict condition */
  on_conflict?: InputMaybe<TagsOnConflict>;
}

/** on conflict condition type for table "tags" */
interface TagsOnConflict {
  constraint: TagsConstraint;
  update_columns?: Array<TagsUpdateColumn>;
  where?: InputMaybe<TagsBoolExp>;
}

/** Ordering options when selecting data from "tags". */
interface TagsOrderBy {
  created_at?: InputMaybe<OrderBy>;
  custom_field?: InputMaybe<OrderBy>;
  deleted_at?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  posts_tags_aggregate?: InputMaybe<PostsTagsAggregateOrderBy>;
  tag_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
}

/** primary key columns input for table: tags */
interface TagsPkColumnsInput {
  tag_id: Scalars['uuid'];
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
interface TagsPrependInput {
  custom_field?: InputMaybe<Scalars['jsonb']>;
}

/** select columns of table "tags" */
enum TagsSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomField = 'custom_field',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Name = 'name',
  /** column name */
  TagId = 'tag_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "tags" */
interface TagsSetInput {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  custom_field?: InputMaybe<Scalars['jsonb']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  name?: InputMaybe<Scalars['String']>;
  tag_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
}

/** update columns of table "tags" */
enum TagsUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomField = 'custom_field',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Name = 'name',
  /** column name */
  TagId = 'tag_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
interface TimestamptzComparisonExp {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
}

/** columns and relationships of "users" */
interface Users {
  __typename?: 'users';
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: CommentsAggregate;
  created_at: Scalars['timestamptz'];
  custom_field?: Maybe<Scalars['jsonb']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email: Scalars['String'];
  fullname?: Maybe<Scalars['String']>;
  intro?: Maybe<Scalars['String']>;
  is_active: Scalars['Boolean'];
  last_login?: Maybe<Scalars['timestamptz']>;
  password: Scalars['String'];
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: PostsAggregate;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id: Scalars['uuid'];
  username?: Maybe<Scalars['String']>;
}


/** columns and relationships of "users" */
interface UsersCommentsArgs {
  distinct_on?: InputMaybe<Array<CommentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CommentsOrderBy>>;
  where?: InputMaybe<CommentsBoolExp>;
}


/** columns and relationships of "users" */
interface UsersCommentsAggregateArgs {
  distinct_on?: InputMaybe<Array<CommentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CommentsOrderBy>>;
  where?: InputMaybe<CommentsBoolExp>;
}


/** columns and relationships of "users" */
interface UsersCustomFieldArgs {
  path?: InputMaybe<Scalars['String']>;
}


/** columns and relationships of "users" */
interface UsersPostsArgs {
  distinct_on?: InputMaybe<Array<PostsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostsOrderBy>>;
  where?: InputMaybe<PostsBoolExp>;
}


/** columns and relationships of "users" */
interface UsersPostsAggregateArgs {
  distinct_on?: InputMaybe<Array<PostsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostsOrderBy>>;
  where?: InputMaybe<PostsBoolExp>;
}

/** aggregated selection of "users" */
interface UsersAggregate {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
}

/** aggregate fields of "users" */
interface UsersAggregateFields {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
}


/** aggregate fields of "users" */
interface UsersAggregateFieldsCountArgs {
  columns?: InputMaybe<Array<UsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** append existing jsonb value of filtered columns with new jsonb value */
interface UsersAppendInput {
  custom_field?: InputMaybe<Scalars['jsonb']>;
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
interface UsersBoolExp {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  comments?: InputMaybe<CommentsBoolExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  custom_field?: InputMaybe<JsonbComparisonExp>;
  deleted_at?: InputMaybe<TimestamptzComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  fullname?: InputMaybe<StringComparisonExp>;
  intro?: InputMaybe<StringComparisonExp>;
  is_active?: InputMaybe<BooleanComparisonExp>;
  last_login?: InputMaybe<TimestamptzComparisonExp>;
  password?: InputMaybe<StringComparisonExp>;
  posts?: InputMaybe<PostsBoolExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
  username?: InputMaybe<StringComparisonExp>;
}

/** unique or primary key constraints on table "users" */
enum UsersConstraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
interface UsersDeleteAtPathInput {
  custom_field?: InputMaybe<Array<Scalars['String']>>;
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
interface UsersDeleteElemInput {
  custom_field?: InputMaybe<Scalars['Int']>;
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
interface UsersDeleteKeyInput {
  custom_field?: InputMaybe<Scalars['String']>;
}

/** input type for inserting data into table "users" */
interface UsersInsertInput {
  comments?: InputMaybe<CommentsArrRelInsertInput>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  custom_field?: InputMaybe<Scalars['jsonb']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  intro?: InputMaybe<Scalars['String']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  last_login?: InputMaybe<Scalars['timestamptz']>;
  password?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<PostsArrRelInsertInput>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
  username?: InputMaybe<Scalars['String']>;
}

/** aggregate max on columns */
interface UsersMaxFields {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  intro?: Maybe<Scalars['String']>;
  last_login?: Maybe<Scalars['timestamptz']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
}

/** aggregate min on columns */
interface UsersMinFields {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  intro?: Maybe<Scalars['String']>;
  last_login?: Maybe<Scalars['timestamptz']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
}

/** response of any mutation on the table "users" */
interface UsersMutationResponse {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
}

/** input type for inserting object relation for remote table "users" */
interface UsersObjRelInsertInput {
  data: UsersInsertInput;
  /** on conflict condition */
  on_conflict?: InputMaybe<UsersOnConflict>;
}

/** on conflict condition type for table "users" */
interface UsersOnConflict {
  constraint: UsersConstraint;
  update_columns?: Array<UsersUpdateColumn>;
  where?: InputMaybe<UsersBoolExp>;
}

/** Ordering options when selecting data from "users". */
interface UsersOrderBy {
  comments_aggregate?: InputMaybe<CommentsAggregateOrderBy>;
  created_at?: InputMaybe<OrderBy>;
  custom_field?: InputMaybe<OrderBy>;
  deleted_at?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  fullname?: InputMaybe<OrderBy>;
  intro?: InputMaybe<OrderBy>;
  is_active?: InputMaybe<OrderBy>;
  last_login?: InputMaybe<OrderBy>;
  password?: InputMaybe<OrderBy>;
  posts_aggregate?: InputMaybe<PostsAggregateOrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  username?: InputMaybe<OrderBy>;
}

/** primary key columns input for table: users */
interface UsersPkColumnsInput {
  user_id: Scalars['uuid'];
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
interface UsersPrependInput {
  custom_field?: InputMaybe<Scalars['jsonb']>;
}

/** select columns of table "users" */
enum UsersSelectColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomField = 'custom_field',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  Fullname = 'fullname',
  /** column name */
  Intro = 'intro',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  LastLogin = 'last_login',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "users" */
interface UsersSetInput {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  custom_field?: InputMaybe<Scalars['jsonb']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  fullname?: InputMaybe<Scalars['String']>;
  intro?: InputMaybe<Scalars['String']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  last_login?: InputMaybe<Scalars['timestamptz']>;
  password?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
  username?: InputMaybe<Scalars['String']>;
}

/** update columns of table "users" */
enum UsersUpdateColumn {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomField = 'custom_field',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  Fullname = 'fullname',
  /** column name */
  Intro = 'intro',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  LastLogin = 'last_login',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Username = 'username'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
interface UuidComparisonExp {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
}
