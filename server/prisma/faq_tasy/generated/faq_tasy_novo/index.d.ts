
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model faq_tasy
 * 
 */
export type faq_tasy = $Result.DefaultSelection<Prisma.$faq_tasyPayload>
/**
 * Model logs
 * 
 */
export type logs = $Result.DefaultSelection<Prisma.$logsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Faq_tasies
 * const faq_tasies = await prisma.faq_tasy.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Faq_tasies
   * const faq_tasies = await prisma.faq_tasy.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.faq_tasy`: Exposes CRUD operations for the **faq_tasy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Faq_tasies
    * const faq_tasies = await prisma.faq_tasy.findMany()
    * ```
    */
  get faq_tasy(): Prisma.faq_tasyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logs`: Exposes CRUD operations for the **logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.logs.findMany()
    * ```
    */
  get logs(): Prisma.logsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    faq_tasy: 'faq_tasy',
    logs: 'logs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "faq_tasy" | "logs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      faq_tasy: {
        payload: Prisma.$faq_tasyPayload<ExtArgs>
        fields: Prisma.faq_tasyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.faq_tasyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faq_tasyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.faq_tasyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faq_tasyPayload>
          }
          findFirst: {
            args: Prisma.faq_tasyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faq_tasyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.faq_tasyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faq_tasyPayload>
          }
          findMany: {
            args: Prisma.faq_tasyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faq_tasyPayload>[]
          }
          create: {
            args: Prisma.faq_tasyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faq_tasyPayload>
          }
          createMany: {
            args: Prisma.faq_tasyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.faq_tasyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faq_tasyPayload>
          }
          update: {
            args: Prisma.faq_tasyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faq_tasyPayload>
          }
          deleteMany: {
            args: Prisma.faq_tasyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.faq_tasyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.faq_tasyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faq_tasyPayload>
          }
          aggregate: {
            args: Prisma.Faq_tasyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFaq_tasy>
          }
          groupBy: {
            args: Prisma.faq_tasyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Faq_tasyGroupByOutputType>[]
          }
          count: {
            args: Prisma.faq_tasyCountArgs<ExtArgs>
            result: $Utils.Optional<Faq_tasyCountAggregateOutputType> | number
          }
        }
      }
      logs: {
        payload: Prisma.$logsPayload<ExtArgs>
        fields: Prisma.logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          findFirst: {
            args: Prisma.logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          findMany: {
            args: Prisma.logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>[]
          }
          create: {
            args: Prisma.logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          createMany: {
            args: Prisma.logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          update: {
            args: Prisma.logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          deleteMany: {
            args: Prisma.logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          aggregate: {
            args: Prisma.LogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogs>
          }
          groupBy: {
            args: Prisma.logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.logsCountArgs<ExtArgs>
            result: $Utils.Optional<LogsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    faq_tasy?: faq_tasyOmit
    logs?: logsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model faq_tasy
   */

  export type AggregateFaq_tasy = {
    _count: Faq_tasyCountAggregateOutputType | null
    _avg: Faq_tasyAvgAggregateOutputType | null
    _sum: Faq_tasySumAggregateOutputType | null
    _min: Faq_tasyMinAggregateOutputType | null
    _max: Faq_tasyMaxAggregateOutputType | null
  }

  export type Faq_tasyAvgAggregateOutputType = {
    id: number | null
  }

  export type Faq_tasySumAggregateOutputType = {
    id: number | null
  }

  export type Faq_tasyMinAggregateOutputType = {
    id: number | null
    question: string | null
    description: string | null
    nome_video: string | null
    criado_em: Date | null
    id_ws: string | null
  }

  export type Faq_tasyMaxAggregateOutputType = {
    id: number | null
    question: string | null
    description: string | null
    nome_video: string | null
    criado_em: Date | null
    id_ws: string | null
  }

  export type Faq_tasyCountAggregateOutputType = {
    id: number
    question: number
    description: number
    nome_video: number
    criado_em: number
    id_ws: number
    _all: number
  }


  export type Faq_tasyAvgAggregateInputType = {
    id?: true
  }

  export type Faq_tasySumAggregateInputType = {
    id?: true
  }

  export type Faq_tasyMinAggregateInputType = {
    id?: true
    question?: true
    description?: true
    nome_video?: true
    criado_em?: true
    id_ws?: true
  }

  export type Faq_tasyMaxAggregateInputType = {
    id?: true
    question?: true
    description?: true
    nome_video?: true
    criado_em?: true
    id_ws?: true
  }

  export type Faq_tasyCountAggregateInputType = {
    id?: true
    question?: true
    description?: true
    nome_video?: true
    criado_em?: true
    id_ws?: true
    _all?: true
  }

  export type Faq_tasyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which faq_tasy to aggregate.
     */
    where?: faq_tasyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of faq_tasies to fetch.
     */
    orderBy?: faq_tasyOrderByWithRelationInput | faq_tasyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: faq_tasyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` faq_tasies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` faq_tasies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned faq_tasies
    **/
    _count?: true | Faq_tasyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Faq_tasyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Faq_tasySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Faq_tasyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Faq_tasyMaxAggregateInputType
  }

  export type GetFaq_tasyAggregateType<T extends Faq_tasyAggregateArgs> = {
        [P in keyof T & keyof AggregateFaq_tasy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFaq_tasy[P]>
      : GetScalarType<T[P], AggregateFaq_tasy[P]>
  }




  export type faq_tasyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: faq_tasyWhereInput
    orderBy?: faq_tasyOrderByWithAggregationInput | faq_tasyOrderByWithAggregationInput[]
    by: Faq_tasyScalarFieldEnum[] | Faq_tasyScalarFieldEnum
    having?: faq_tasyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Faq_tasyCountAggregateInputType | true
    _avg?: Faq_tasyAvgAggregateInputType
    _sum?: Faq_tasySumAggregateInputType
    _min?: Faq_tasyMinAggregateInputType
    _max?: Faq_tasyMaxAggregateInputType
  }

  export type Faq_tasyGroupByOutputType = {
    id: number
    question: string | null
    description: string | null
    nome_video: string | null
    criado_em: Date | null
    id_ws: string | null
    _count: Faq_tasyCountAggregateOutputType | null
    _avg: Faq_tasyAvgAggregateOutputType | null
    _sum: Faq_tasySumAggregateOutputType | null
    _min: Faq_tasyMinAggregateOutputType | null
    _max: Faq_tasyMaxAggregateOutputType | null
  }

  type GetFaq_tasyGroupByPayload<T extends faq_tasyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Faq_tasyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Faq_tasyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Faq_tasyGroupByOutputType[P]>
            : GetScalarType<T[P], Faq_tasyGroupByOutputType[P]>
        }
      >
    >


  export type faq_tasySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    description?: boolean
    nome_video?: boolean
    criado_em?: boolean
    id_ws?: boolean
  }, ExtArgs["result"]["faq_tasy"]>



  export type faq_tasySelectScalar = {
    id?: boolean
    question?: boolean
    description?: boolean
    nome_video?: boolean
    criado_em?: boolean
    id_ws?: boolean
  }

  export type faq_tasyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question" | "description" | "nome_video" | "criado_em" | "id_ws", ExtArgs["result"]["faq_tasy"]>

  export type $faq_tasyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "faq_tasy"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      question: string | null
      description: string | null
      nome_video: string | null
      criado_em: Date | null
      id_ws: string | null
    }, ExtArgs["result"]["faq_tasy"]>
    composites: {}
  }

  type faq_tasyGetPayload<S extends boolean | null | undefined | faq_tasyDefaultArgs> = $Result.GetResult<Prisma.$faq_tasyPayload, S>

  type faq_tasyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<faq_tasyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Faq_tasyCountAggregateInputType | true
    }

  export interface faq_tasyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['faq_tasy'], meta: { name: 'faq_tasy' } }
    /**
     * Find zero or one Faq_tasy that matches the filter.
     * @param {faq_tasyFindUniqueArgs} args - Arguments to find a Faq_tasy
     * @example
     * // Get one Faq_tasy
     * const faq_tasy = await prisma.faq_tasy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends faq_tasyFindUniqueArgs>(args: SelectSubset<T, faq_tasyFindUniqueArgs<ExtArgs>>): Prisma__faq_tasyClient<$Result.GetResult<Prisma.$faq_tasyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Faq_tasy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {faq_tasyFindUniqueOrThrowArgs} args - Arguments to find a Faq_tasy
     * @example
     * // Get one Faq_tasy
     * const faq_tasy = await prisma.faq_tasy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends faq_tasyFindUniqueOrThrowArgs>(args: SelectSubset<T, faq_tasyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__faq_tasyClient<$Result.GetResult<Prisma.$faq_tasyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faq_tasy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {faq_tasyFindFirstArgs} args - Arguments to find a Faq_tasy
     * @example
     * // Get one Faq_tasy
     * const faq_tasy = await prisma.faq_tasy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends faq_tasyFindFirstArgs>(args?: SelectSubset<T, faq_tasyFindFirstArgs<ExtArgs>>): Prisma__faq_tasyClient<$Result.GetResult<Prisma.$faq_tasyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faq_tasy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {faq_tasyFindFirstOrThrowArgs} args - Arguments to find a Faq_tasy
     * @example
     * // Get one Faq_tasy
     * const faq_tasy = await prisma.faq_tasy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends faq_tasyFindFirstOrThrowArgs>(args?: SelectSubset<T, faq_tasyFindFirstOrThrowArgs<ExtArgs>>): Prisma__faq_tasyClient<$Result.GetResult<Prisma.$faq_tasyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Faq_tasies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {faq_tasyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Faq_tasies
     * const faq_tasies = await prisma.faq_tasy.findMany()
     * 
     * // Get first 10 Faq_tasies
     * const faq_tasies = await prisma.faq_tasy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const faq_tasyWithIdOnly = await prisma.faq_tasy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends faq_tasyFindManyArgs>(args?: SelectSubset<T, faq_tasyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$faq_tasyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Faq_tasy.
     * @param {faq_tasyCreateArgs} args - Arguments to create a Faq_tasy.
     * @example
     * // Create one Faq_tasy
     * const Faq_tasy = await prisma.faq_tasy.create({
     *   data: {
     *     // ... data to create a Faq_tasy
     *   }
     * })
     * 
     */
    create<T extends faq_tasyCreateArgs>(args: SelectSubset<T, faq_tasyCreateArgs<ExtArgs>>): Prisma__faq_tasyClient<$Result.GetResult<Prisma.$faq_tasyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Faq_tasies.
     * @param {faq_tasyCreateManyArgs} args - Arguments to create many Faq_tasies.
     * @example
     * // Create many Faq_tasies
     * const faq_tasy = await prisma.faq_tasy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends faq_tasyCreateManyArgs>(args?: SelectSubset<T, faq_tasyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Faq_tasy.
     * @param {faq_tasyDeleteArgs} args - Arguments to delete one Faq_tasy.
     * @example
     * // Delete one Faq_tasy
     * const Faq_tasy = await prisma.faq_tasy.delete({
     *   where: {
     *     // ... filter to delete one Faq_tasy
     *   }
     * })
     * 
     */
    delete<T extends faq_tasyDeleteArgs>(args: SelectSubset<T, faq_tasyDeleteArgs<ExtArgs>>): Prisma__faq_tasyClient<$Result.GetResult<Prisma.$faq_tasyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Faq_tasy.
     * @param {faq_tasyUpdateArgs} args - Arguments to update one Faq_tasy.
     * @example
     * // Update one Faq_tasy
     * const faq_tasy = await prisma.faq_tasy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends faq_tasyUpdateArgs>(args: SelectSubset<T, faq_tasyUpdateArgs<ExtArgs>>): Prisma__faq_tasyClient<$Result.GetResult<Prisma.$faq_tasyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Faq_tasies.
     * @param {faq_tasyDeleteManyArgs} args - Arguments to filter Faq_tasies to delete.
     * @example
     * // Delete a few Faq_tasies
     * const { count } = await prisma.faq_tasy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends faq_tasyDeleteManyArgs>(args?: SelectSubset<T, faq_tasyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faq_tasies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {faq_tasyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Faq_tasies
     * const faq_tasy = await prisma.faq_tasy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends faq_tasyUpdateManyArgs>(args: SelectSubset<T, faq_tasyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Faq_tasy.
     * @param {faq_tasyUpsertArgs} args - Arguments to update or create a Faq_tasy.
     * @example
     * // Update or create a Faq_tasy
     * const faq_tasy = await prisma.faq_tasy.upsert({
     *   create: {
     *     // ... data to create a Faq_tasy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Faq_tasy we want to update
     *   }
     * })
     */
    upsert<T extends faq_tasyUpsertArgs>(args: SelectSubset<T, faq_tasyUpsertArgs<ExtArgs>>): Prisma__faq_tasyClient<$Result.GetResult<Prisma.$faq_tasyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Faq_tasies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {faq_tasyCountArgs} args - Arguments to filter Faq_tasies to count.
     * @example
     * // Count the number of Faq_tasies
     * const count = await prisma.faq_tasy.count({
     *   where: {
     *     // ... the filter for the Faq_tasies we want to count
     *   }
     * })
    **/
    count<T extends faq_tasyCountArgs>(
      args?: Subset<T, faq_tasyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Faq_tasyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Faq_tasy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Faq_tasyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Faq_tasyAggregateArgs>(args: Subset<T, Faq_tasyAggregateArgs>): Prisma.PrismaPromise<GetFaq_tasyAggregateType<T>>

    /**
     * Group by Faq_tasy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {faq_tasyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends faq_tasyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: faq_tasyGroupByArgs['orderBy'] }
        : { orderBy?: faq_tasyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, faq_tasyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFaq_tasyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the faq_tasy model
   */
  readonly fields: faq_tasyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for faq_tasy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__faq_tasyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the faq_tasy model
   */
  interface faq_tasyFieldRefs {
    readonly id: FieldRef<"faq_tasy", 'Int'>
    readonly question: FieldRef<"faq_tasy", 'String'>
    readonly description: FieldRef<"faq_tasy", 'String'>
    readonly nome_video: FieldRef<"faq_tasy", 'String'>
    readonly criado_em: FieldRef<"faq_tasy", 'DateTime'>
    readonly id_ws: FieldRef<"faq_tasy", 'String'>
  }
    

  // Custom InputTypes
  /**
   * faq_tasy findUnique
   */
  export type faq_tasyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faq_tasy
     */
    select?: faq_tasySelect<ExtArgs> | null
    /**
     * Omit specific fields from the faq_tasy
     */
    omit?: faq_tasyOmit<ExtArgs> | null
    /**
     * Filter, which faq_tasy to fetch.
     */
    where: faq_tasyWhereUniqueInput
  }

  /**
   * faq_tasy findUniqueOrThrow
   */
  export type faq_tasyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faq_tasy
     */
    select?: faq_tasySelect<ExtArgs> | null
    /**
     * Omit specific fields from the faq_tasy
     */
    omit?: faq_tasyOmit<ExtArgs> | null
    /**
     * Filter, which faq_tasy to fetch.
     */
    where: faq_tasyWhereUniqueInput
  }

  /**
   * faq_tasy findFirst
   */
  export type faq_tasyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faq_tasy
     */
    select?: faq_tasySelect<ExtArgs> | null
    /**
     * Omit specific fields from the faq_tasy
     */
    omit?: faq_tasyOmit<ExtArgs> | null
    /**
     * Filter, which faq_tasy to fetch.
     */
    where?: faq_tasyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of faq_tasies to fetch.
     */
    orderBy?: faq_tasyOrderByWithRelationInput | faq_tasyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for faq_tasies.
     */
    cursor?: faq_tasyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` faq_tasies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` faq_tasies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of faq_tasies.
     */
    distinct?: Faq_tasyScalarFieldEnum | Faq_tasyScalarFieldEnum[]
  }

  /**
   * faq_tasy findFirstOrThrow
   */
  export type faq_tasyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faq_tasy
     */
    select?: faq_tasySelect<ExtArgs> | null
    /**
     * Omit specific fields from the faq_tasy
     */
    omit?: faq_tasyOmit<ExtArgs> | null
    /**
     * Filter, which faq_tasy to fetch.
     */
    where?: faq_tasyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of faq_tasies to fetch.
     */
    orderBy?: faq_tasyOrderByWithRelationInput | faq_tasyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for faq_tasies.
     */
    cursor?: faq_tasyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` faq_tasies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` faq_tasies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of faq_tasies.
     */
    distinct?: Faq_tasyScalarFieldEnum | Faq_tasyScalarFieldEnum[]
  }

  /**
   * faq_tasy findMany
   */
  export type faq_tasyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faq_tasy
     */
    select?: faq_tasySelect<ExtArgs> | null
    /**
     * Omit specific fields from the faq_tasy
     */
    omit?: faq_tasyOmit<ExtArgs> | null
    /**
     * Filter, which faq_tasies to fetch.
     */
    where?: faq_tasyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of faq_tasies to fetch.
     */
    orderBy?: faq_tasyOrderByWithRelationInput | faq_tasyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing faq_tasies.
     */
    cursor?: faq_tasyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` faq_tasies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` faq_tasies.
     */
    skip?: number
    distinct?: Faq_tasyScalarFieldEnum | Faq_tasyScalarFieldEnum[]
  }

  /**
   * faq_tasy create
   */
  export type faq_tasyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faq_tasy
     */
    select?: faq_tasySelect<ExtArgs> | null
    /**
     * Omit specific fields from the faq_tasy
     */
    omit?: faq_tasyOmit<ExtArgs> | null
    /**
     * The data needed to create a faq_tasy.
     */
    data?: XOR<faq_tasyCreateInput, faq_tasyUncheckedCreateInput>
  }

  /**
   * faq_tasy createMany
   */
  export type faq_tasyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many faq_tasies.
     */
    data: faq_tasyCreateManyInput | faq_tasyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * faq_tasy update
   */
  export type faq_tasyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faq_tasy
     */
    select?: faq_tasySelect<ExtArgs> | null
    /**
     * Omit specific fields from the faq_tasy
     */
    omit?: faq_tasyOmit<ExtArgs> | null
    /**
     * The data needed to update a faq_tasy.
     */
    data: XOR<faq_tasyUpdateInput, faq_tasyUncheckedUpdateInput>
    /**
     * Choose, which faq_tasy to update.
     */
    where: faq_tasyWhereUniqueInput
  }

  /**
   * faq_tasy updateMany
   */
  export type faq_tasyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update faq_tasies.
     */
    data: XOR<faq_tasyUpdateManyMutationInput, faq_tasyUncheckedUpdateManyInput>
    /**
     * Filter which faq_tasies to update
     */
    where?: faq_tasyWhereInput
    /**
     * Limit how many faq_tasies to update.
     */
    limit?: number
  }

  /**
   * faq_tasy upsert
   */
  export type faq_tasyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faq_tasy
     */
    select?: faq_tasySelect<ExtArgs> | null
    /**
     * Omit specific fields from the faq_tasy
     */
    omit?: faq_tasyOmit<ExtArgs> | null
    /**
     * The filter to search for the faq_tasy to update in case it exists.
     */
    where: faq_tasyWhereUniqueInput
    /**
     * In case the faq_tasy found by the `where` argument doesn't exist, create a new faq_tasy with this data.
     */
    create: XOR<faq_tasyCreateInput, faq_tasyUncheckedCreateInput>
    /**
     * In case the faq_tasy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<faq_tasyUpdateInput, faq_tasyUncheckedUpdateInput>
  }

  /**
   * faq_tasy delete
   */
  export type faq_tasyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faq_tasy
     */
    select?: faq_tasySelect<ExtArgs> | null
    /**
     * Omit specific fields from the faq_tasy
     */
    omit?: faq_tasyOmit<ExtArgs> | null
    /**
     * Filter which faq_tasy to delete.
     */
    where: faq_tasyWhereUniqueInput
  }

  /**
   * faq_tasy deleteMany
   */
  export type faq_tasyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which faq_tasies to delete
     */
    where?: faq_tasyWhereInput
    /**
     * Limit how many faq_tasies to delete.
     */
    limit?: number
  }

  /**
   * faq_tasy without action
   */
  export type faq_tasyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faq_tasy
     */
    select?: faq_tasySelect<ExtArgs> | null
    /**
     * Omit specific fields from the faq_tasy
     */
    omit?: faq_tasyOmit<ExtArgs> | null
  }


  /**
   * Model logs
   */

  export type AggregateLogs = {
    _count: LogsCountAggregateOutputType | null
    _avg: LogsAvgAggregateOutputType | null
    _sum: LogsSumAggregateOutputType | null
    _min: LogsMinAggregateOutputType | null
    _max: LogsMaxAggregateOutputType | null
  }

  export type LogsAvgAggregateOutputType = {
    id: number | null
  }

  export type LogsSumAggregateOutputType = {
    id: number | null
  }

  export type LogsMinAggregateOutputType = {
    id: number | null
    ip: string | null
    usuario: string | null
    acao: string | null
    data: Date | null
  }

  export type LogsMaxAggregateOutputType = {
    id: number | null
    ip: string | null
    usuario: string | null
    acao: string | null
    data: Date | null
  }

  export type LogsCountAggregateOutputType = {
    id: number
    ip: number
    usuario: number
    acao: number
    data: number
    _all: number
  }


  export type LogsAvgAggregateInputType = {
    id?: true
  }

  export type LogsSumAggregateInputType = {
    id?: true
  }

  export type LogsMinAggregateInputType = {
    id?: true
    ip?: true
    usuario?: true
    acao?: true
    data?: true
  }

  export type LogsMaxAggregateInputType = {
    id?: true
    ip?: true
    usuario?: true
    acao?: true
    data?: true
  }

  export type LogsCountAggregateInputType = {
    id?: true
    ip?: true
    usuario?: true
    acao?: true
    data?: true
    _all?: true
  }

  export type LogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logs to aggregate.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned logs
    **/
    _count?: true | LogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogsMaxAggregateInputType
  }

  export type GetLogsAggregateType<T extends LogsAggregateArgs> = {
        [P in keyof T & keyof AggregateLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogs[P]>
      : GetScalarType<T[P], AggregateLogs[P]>
  }




  export type logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logsWhereInput
    orderBy?: logsOrderByWithAggregationInput | logsOrderByWithAggregationInput[]
    by: LogsScalarFieldEnum[] | LogsScalarFieldEnum
    having?: logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogsCountAggregateInputType | true
    _avg?: LogsAvgAggregateInputType
    _sum?: LogsSumAggregateInputType
    _min?: LogsMinAggregateInputType
    _max?: LogsMaxAggregateInputType
  }

  export type LogsGroupByOutputType = {
    id: number
    ip: string
    usuario: string
    acao: string
    data: Date
    _count: LogsCountAggregateOutputType | null
    _avg: LogsAvgAggregateOutputType | null
    _sum: LogsSumAggregateOutputType | null
    _min: LogsMinAggregateOutputType | null
    _max: LogsMaxAggregateOutputType | null
  }

  type GetLogsGroupByPayload<T extends logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogsGroupByOutputType[P]>
            : GetScalarType<T[P], LogsGroupByOutputType[P]>
        }
      >
    >


  export type logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    usuario?: boolean
    acao?: boolean
    data?: boolean
  }, ExtArgs["result"]["logs"]>



  export type logsSelectScalar = {
    id?: boolean
    ip?: boolean
    usuario?: boolean
    acao?: boolean
    data?: boolean
  }

  export type logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ip" | "usuario" | "acao" | "data", ExtArgs["result"]["logs"]>

  export type $logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "logs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ip: string
      usuario: string
      acao: string
      data: Date
    }, ExtArgs["result"]["logs"]>
    composites: {}
  }

  type logsGetPayload<S extends boolean | null | undefined | logsDefaultArgs> = $Result.GetResult<Prisma.$logsPayload, S>

  type logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogsCountAggregateInputType | true
    }

  export interface logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['logs'], meta: { name: 'logs' } }
    /**
     * Find zero or one Logs that matches the filter.
     * @param {logsFindUniqueArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends logsFindUniqueArgs>(args: SelectSubset<T, logsFindUniqueArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {logsFindUniqueOrThrowArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends logsFindUniqueOrThrowArgs>(args: SelectSubset<T, logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsFindFirstArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends logsFindFirstArgs>(args?: SelectSubset<T, logsFindFirstArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsFindFirstOrThrowArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends logsFindFirstOrThrowArgs>(args?: SelectSubset<T, logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.logs.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logsWithIdOnly = await prisma.logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends logsFindManyArgs>(args?: SelectSubset<T, logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Logs.
     * @param {logsCreateArgs} args - Arguments to create a Logs.
     * @example
     * // Create one Logs
     * const Logs = await prisma.logs.create({
     *   data: {
     *     // ... data to create a Logs
     *   }
     * })
     * 
     */
    create<T extends logsCreateArgs>(args: SelectSubset<T, logsCreateArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {logsCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const logs = await prisma.logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends logsCreateManyArgs>(args?: SelectSubset<T, logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Logs.
     * @param {logsDeleteArgs} args - Arguments to delete one Logs.
     * @example
     * // Delete one Logs
     * const Logs = await prisma.logs.delete({
     *   where: {
     *     // ... filter to delete one Logs
     *   }
     * })
     * 
     */
    delete<T extends logsDeleteArgs>(args: SelectSubset<T, logsDeleteArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Logs.
     * @param {logsUpdateArgs} args - Arguments to update one Logs.
     * @example
     * // Update one Logs
     * const logs = await prisma.logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends logsUpdateArgs>(args: SelectSubset<T, logsUpdateArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {logsDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends logsDeleteManyArgs>(args?: SelectSubset<T, logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const logs = await prisma.logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends logsUpdateManyArgs>(args: SelectSubset<T, logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Logs.
     * @param {logsUpsertArgs} args - Arguments to update or create a Logs.
     * @example
     * // Update or create a Logs
     * const logs = await prisma.logs.upsert({
     *   create: {
     *     // ... data to create a Logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Logs we want to update
     *   }
     * })
     */
    upsert<T extends logsUpsertArgs>(args: SelectSubset<T, logsUpsertArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.logs.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends logsCountArgs>(
      args?: Subset<T, logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogsAggregateArgs>(args: Subset<T, LogsAggregateArgs>): Prisma.PrismaPromise<GetLogsAggregateType<T>>

    /**
     * Group by Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: logsGroupByArgs['orderBy'] }
        : { orderBy?: logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the logs model
   */
  readonly fields: logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the logs model
   */
  interface logsFieldRefs {
    readonly id: FieldRef<"logs", 'Int'>
    readonly ip: FieldRef<"logs", 'String'>
    readonly usuario: FieldRef<"logs", 'String'>
    readonly acao: FieldRef<"logs", 'String'>
    readonly data: FieldRef<"logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * logs findUnique
   */
  export type logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs findUniqueOrThrow
   */
  export type logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs findFirst
   */
  export type logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logs.
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logs.
     */
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * logs findFirstOrThrow
   */
  export type logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logs.
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logs.
     */
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * logs findMany
   */
  export type logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing logs.
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * logs create
   */
  export type logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * The data needed to create a logs.
     */
    data: XOR<logsCreateInput, logsUncheckedCreateInput>
  }

  /**
   * logs createMany
   */
  export type logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many logs.
     */
    data: logsCreateManyInput | logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * logs update
   */
  export type logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * The data needed to update a logs.
     */
    data: XOR<logsUpdateInput, logsUncheckedUpdateInput>
    /**
     * Choose, which logs to update.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs updateMany
   */
  export type logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update logs.
     */
    data: XOR<logsUpdateManyMutationInput, logsUncheckedUpdateManyInput>
    /**
     * Filter which logs to update
     */
    where?: logsWhereInput
    /**
     * Limit how many logs to update.
     */
    limit?: number
  }

  /**
   * logs upsert
   */
  export type logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * The filter to search for the logs to update in case it exists.
     */
    where: logsWhereUniqueInput
    /**
     * In case the logs found by the `where` argument doesn't exist, create a new logs with this data.
     */
    create: XOR<logsCreateInput, logsUncheckedCreateInput>
    /**
     * In case the logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<logsUpdateInput, logsUncheckedUpdateInput>
  }

  /**
   * logs delete
   */
  export type logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Filter which logs to delete.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs deleteMany
   */
  export type logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logs to delete
     */
    where?: logsWhereInput
    /**
     * Limit how many logs to delete.
     */
    limit?: number
  }

  /**
   * logs without action
   */
  export type logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Faq_tasyScalarFieldEnum: {
    id: 'id',
    question: 'question',
    description: 'description',
    nome_video: 'nome_video',
    criado_em: 'criado_em',
    id_ws: 'id_ws'
  };

  export type Faq_tasyScalarFieldEnum = (typeof Faq_tasyScalarFieldEnum)[keyof typeof Faq_tasyScalarFieldEnum]


  export const LogsScalarFieldEnum: {
    id: 'id',
    ip: 'ip',
    usuario: 'usuario',
    acao: 'acao',
    data: 'data'
  };

  export type LogsScalarFieldEnum = (typeof LogsScalarFieldEnum)[keyof typeof LogsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const faq_tasyOrderByRelevanceFieldEnum: {
    question: 'question',
    description: 'description',
    nome_video: 'nome_video',
    id_ws: 'id_ws'
  };

  export type faq_tasyOrderByRelevanceFieldEnum = (typeof faq_tasyOrderByRelevanceFieldEnum)[keyof typeof faq_tasyOrderByRelevanceFieldEnum]


  export const logsOrderByRelevanceFieldEnum: {
    ip: 'ip',
    usuario: 'usuario',
    acao: 'acao'
  };

  export type logsOrderByRelevanceFieldEnum = (typeof logsOrderByRelevanceFieldEnum)[keyof typeof logsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type faq_tasyWhereInput = {
    AND?: faq_tasyWhereInput | faq_tasyWhereInput[]
    OR?: faq_tasyWhereInput[]
    NOT?: faq_tasyWhereInput | faq_tasyWhereInput[]
    id?: IntFilter<"faq_tasy"> | number
    question?: StringNullableFilter<"faq_tasy"> | string | null
    description?: StringNullableFilter<"faq_tasy"> | string | null
    nome_video?: StringNullableFilter<"faq_tasy"> | string | null
    criado_em?: DateTimeNullableFilter<"faq_tasy"> | Date | string | null
    id_ws?: StringNullableFilter<"faq_tasy"> | string | null
  }

  export type faq_tasyOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    nome_video?: SortOrderInput | SortOrder
    criado_em?: SortOrderInput | SortOrder
    id_ws?: SortOrderInput | SortOrder
    _relevance?: faq_tasyOrderByRelevanceInput
  }

  export type faq_tasyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: faq_tasyWhereInput | faq_tasyWhereInput[]
    OR?: faq_tasyWhereInput[]
    NOT?: faq_tasyWhereInput | faq_tasyWhereInput[]
    question?: StringNullableFilter<"faq_tasy"> | string | null
    description?: StringNullableFilter<"faq_tasy"> | string | null
    nome_video?: StringNullableFilter<"faq_tasy"> | string | null
    criado_em?: DateTimeNullableFilter<"faq_tasy"> | Date | string | null
    id_ws?: StringNullableFilter<"faq_tasy"> | string | null
  }, "id">

  export type faq_tasyOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    nome_video?: SortOrderInput | SortOrder
    criado_em?: SortOrderInput | SortOrder
    id_ws?: SortOrderInput | SortOrder
    _count?: faq_tasyCountOrderByAggregateInput
    _avg?: faq_tasyAvgOrderByAggregateInput
    _max?: faq_tasyMaxOrderByAggregateInput
    _min?: faq_tasyMinOrderByAggregateInput
    _sum?: faq_tasySumOrderByAggregateInput
  }

  export type faq_tasyScalarWhereWithAggregatesInput = {
    AND?: faq_tasyScalarWhereWithAggregatesInput | faq_tasyScalarWhereWithAggregatesInput[]
    OR?: faq_tasyScalarWhereWithAggregatesInput[]
    NOT?: faq_tasyScalarWhereWithAggregatesInput | faq_tasyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"faq_tasy"> | number
    question?: StringNullableWithAggregatesFilter<"faq_tasy"> | string | null
    description?: StringNullableWithAggregatesFilter<"faq_tasy"> | string | null
    nome_video?: StringNullableWithAggregatesFilter<"faq_tasy"> | string | null
    criado_em?: DateTimeNullableWithAggregatesFilter<"faq_tasy"> | Date | string | null
    id_ws?: StringNullableWithAggregatesFilter<"faq_tasy"> | string | null
  }

  export type logsWhereInput = {
    AND?: logsWhereInput | logsWhereInput[]
    OR?: logsWhereInput[]
    NOT?: logsWhereInput | logsWhereInput[]
    id?: IntFilter<"logs"> | number
    ip?: StringFilter<"logs"> | string
    usuario?: StringFilter<"logs"> | string
    acao?: StringFilter<"logs"> | string
    data?: DateTimeFilter<"logs"> | Date | string
  }

  export type logsOrderByWithRelationInput = {
    id?: SortOrder
    ip?: SortOrder
    usuario?: SortOrder
    acao?: SortOrder
    data?: SortOrder
    _relevance?: logsOrderByRelevanceInput
  }

  export type logsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: logsWhereInput | logsWhereInput[]
    OR?: logsWhereInput[]
    NOT?: logsWhereInput | logsWhereInput[]
    ip?: StringFilter<"logs"> | string
    usuario?: StringFilter<"logs"> | string
    acao?: StringFilter<"logs"> | string
    data?: DateTimeFilter<"logs"> | Date | string
  }, "id">

  export type logsOrderByWithAggregationInput = {
    id?: SortOrder
    ip?: SortOrder
    usuario?: SortOrder
    acao?: SortOrder
    data?: SortOrder
    _count?: logsCountOrderByAggregateInput
    _avg?: logsAvgOrderByAggregateInput
    _max?: logsMaxOrderByAggregateInput
    _min?: logsMinOrderByAggregateInput
    _sum?: logsSumOrderByAggregateInput
  }

  export type logsScalarWhereWithAggregatesInput = {
    AND?: logsScalarWhereWithAggregatesInput | logsScalarWhereWithAggregatesInput[]
    OR?: logsScalarWhereWithAggregatesInput[]
    NOT?: logsScalarWhereWithAggregatesInput | logsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"logs"> | number
    ip?: StringWithAggregatesFilter<"logs"> | string
    usuario?: StringWithAggregatesFilter<"logs"> | string
    acao?: StringWithAggregatesFilter<"logs"> | string
    data?: DateTimeWithAggregatesFilter<"logs"> | Date | string
  }

  export type faq_tasyCreateInput = {
    question?: string | null
    description?: string | null
    nome_video?: string | null
    criado_em?: Date | string | null
    id_ws?: string | null
  }

  export type faq_tasyUncheckedCreateInput = {
    id?: number
    question?: string | null
    description?: string | null
    nome_video?: string | null
    criado_em?: Date | string | null
    id_ws?: string | null
  }

  export type faq_tasyUpdateInput = {
    question?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    nome_video?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_ws?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type faq_tasyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    nome_video?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_ws?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type faq_tasyCreateManyInput = {
    id?: number
    question?: string | null
    description?: string | null
    nome_video?: string | null
    criado_em?: Date | string | null
    id_ws?: string | null
  }

  export type faq_tasyUpdateManyMutationInput = {
    question?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    nome_video?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_ws?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type faq_tasyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    nome_video?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_ws?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type logsCreateInput = {
    ip: string
    usuario: string
    acao: string
    data?: Date | string
  }

  export type logsUncheckedCreateInput = {
    id?: number
    ip: string
    usuario: string
    acao: string
    data?: Date | string
  }

  export type logsUpdateInput = {
    ip?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logsCreateManyInput = {
    id?: number
    ip: string
    usuario: string
    acao: string
    data?: Date | string
  }

  export type logsUpdateManyMutationInput = {
    ip?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    acao?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type faq_tasyOrderByRelevanceInput = {
    fields: faq_tasyOrderByRelevanceFieldEnum | faq_tasyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type faq_tasyCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    description?: SortOrder
    nome_video?: SortOrder
    criado_em?: SortOrder
    id_ws?: SortOrder
  }

  export type faq_tasyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type faq_tasyMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    description?: SortOrder
    nome_video?: SortOrder
    criado_em?: SortOrder
    id_ws?: SortOrder
  }

  export type faq_tasyMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    description?: SortOrder
    nome_video?: SortOrder
    criado_em?: SortOrder
    id_ws?: SortOrder
  }

  export type faq_tasySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type logsOrderByRelevanceInput = {
    fields: logsOrderByRelevanceFieldEnum | logsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type logsCountOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    usuario?: SortOrder
    acao?: SortOrder
    data?: SortOrder
  }

  export type logsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type logsMaxOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    usuario?: SortOrder
    acao?: SortOrder
    data?: SortOrder
  }

  export type logsMinOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    usuario?: SortOrder
    acao?: SortOrder
    data?: SortOrder
  }

  export type logsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}