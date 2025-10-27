
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
 * Model acessos
 * 
 */
export type acessos = $Result.DefaultSelection<Prisma.$acessosPayload>
/**
 * Model areas
 * 
 */
export type areas = $Result.DefaultSelection<Prisma.$areasPayload>
/**
 * Model centro_custo
 * 
 */
export type centro_custo = $Result.DefaultSelection<Prisma.$centro_custoPayload>
/**
 * Model colaboradores
 * 
 */
export type colaboradores = $Result.DefaultSelection<Prisma.$colaboradoresPayload>
/**
 * Model comissoes
 * 
 */
export type comissoes = $Result.DefaultSelection<Prisma.$comissoesPayload>
/**
 * Model comites
 * 
 */
export type comites = $Result.DefaultSelection<Prisma.$comitesPayload>
/**
 * Model equipes
 * 
 */
export type equipes = $Result.DefaultSelection<Prisma.$equipesPayload>
/**
 * Model hierarquia
 * 
 */
export type hierarquia = $Result.DefaultSelection<Prisma.$hierarquiaPayload>
/**
 * Model logs
 * 
 */
export type logs = $Result.DefaultSelection<Prisma.$logsPayload>
/**
 * Model programas
 * 
 */
export type programas = $Result.DefaultSelection<Prisma.$programasPayload>
/**
 * Model setores
 * 
 */
export type setores = $Result.DefaultSelection<Prisma.$setoresPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Acessos
 * const acessos = await prisma.acessos.findMany()
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
   * // Fetch zero or more Acessos
   * const acessos = await prisma.acessos.findMany()
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
   * `prisma.acessos`: Exposes CRUD operations for the **acessos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Acessos
    * const acessos = await prisma.acessos.findMany()
    * ```
    */
  get acessos(): Prisma.acessosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.areas`: Exposes CRUD operations for the **areas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Areas
    * const areas = await prisma.areas.findMany()
    * ```
    */
  get areas(): Prisma.areasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.centro_custo`: Exposes CRUD operations for the **centro_custo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Centro_custos
    * const centro_custos = await prisma.centro_custo.findMany()
    * ```
    */
  get centro_custo(): Prisma.centro_custoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.colaboradores`: Exposes CRUD operations for the **colaboradores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Colaboradores
    * const colaboradores = await prisma.colaboradores.findMany()
    * ```
    */
  get colaboradores(): Prisma.colaboradoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comissoes`: Exposes CRUD operations for the **comissoes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comissoes
    * const comissoes = await prisma.comissoes.findMany()
    * ```
    */
  get comissoes(): Prisma.comissoesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comites`: Exposes CRUD operations for the **comites** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comites
    * const comites = await prisma.comites.findMany()
    * ```
    */
  get comites(): Prisma.comitesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipes`: Exposes CRUD operations for the **equipes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipes
    * const equipes = await prisma.equipes.findMany()
    * ```
    */
  get equipes(): Prisma.equipesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hierarquia`: Exposes CRUD operations for the **hierarquia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hierarquias
    * const hierarquias = await prisma.hierarquia.findMany()
    * ```
    */
  get hierarquia(): Prisma.hierarquiaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logs`: Exposes CRUD operations for the **logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.logs.findMany()
    * ```
    */
  get logs(): Prisma.logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.programas`: Exposes CRUD operations for the **programas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Programas
    * const programas = await prisma.programas.findMany()
    * ```
    */
  get programas(): Prisma.programasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setores`: Exposes CRUD operations for the **setores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Setores
    * const setores = await prisma.setores.findMany()
    * ```
    */
  get setores(): Prisma.setoresDelegate<ExtArgs, ClientOptions>;
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
    acessos: 'acessos',
    areas: 'areas',
    centro_custo: 'centro_custo',
    colaboradores: 'colaboradores',
    comissoes: 'comissoes',
    comites: 'comites',
    equipes: 'equipes',
    hierarquia: 'hierarquia',
    logs: 'logs',
    programas: 'programas',
    setores: 'setores'
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
      modelProps: "acessos" | "areas" | "centro_custo" | "colaboradores" | "comissoes" | "comites" | "equipes" | "hierarquia" | "logs" | "programas" | "setores"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      acessos: {
        payload: Prisma.$acessosPayload<ExtArgs>
        fields: Prisma.acessosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.acessosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$acessosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.acessosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$acessosPayload>
          }
          findFirst: {
            args: Prisma.acessosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$acessosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.acessosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$acessosPayload>
          }
          findMany: {
            args: Prisma.acessosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$acessosPayload>[]
          }
          create: {
            args: Prisma.acessosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$acessosPayload>
          }
          createMany: {
            args: Prisma.acessosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.acessosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$acessosPayload>
          }
          update: {
            args: Prisma.acessosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$acessosPayload>
          }
          deleteMany: {
            args: Prisma.acessosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.acessosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.acessosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$acessosPayload>
          }
          aggregate: {
            args: Prisma.AcessosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcessos>
          }
          groupBy: {
            args: Prisma.acessosGroupByArgs<ExtArgs>
            result: $Utils.Optional<AcessosGroupByOutputType>[]
          }
          count: {
            args: Prisma.acessosCountArgs<ExtArgs>
            result: $Utils.Optional<AcessosCountAggregateOutputType> | number
          }
        }
      }
      areas: {
        payload: Prisma.$areasPayload<ExtArgs>
        fields: Prisma.areasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.areasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.areasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areasPayload>
          }
          findFirst: {
            args: Prisma.areasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.areasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areasPayload>
          }
          findMany: {
            args: Prisma.areasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areasPayload>[]
          }
          create: {
            args: Prisma.areasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areasPayload>
          }
          createMany: {
            args: Prisma.areasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.areasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areasPayload>
          }
          update: {
            args: Prisma.areasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areasPayload>
          }
          deleteMany: {
            args: Prisma.areasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.areasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.areasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$areasPayload>
          }
          aggregate: {
            args: Prisma.AreasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAreas>
          }
          groupBy: {
            args: Prisma.areasGroupByArgs<ExtArgs>
            result: $Utils.Optional<AreasGroupByOutputType>[]
          }
          count: {
            args: Prisma.areasCountArgs<ExtArgs>
            result: $Utils.Optional<AreasCountAggregateOutputType> | number
          }
        }
      }
      centro_custo: {
        payload: Prisma.$centro_custoPayload<ExtArgs>
        fields: Prisma.centro_custoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.centro_custoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centro_custoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.centro_custoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centro_custoPayload>
          }
          findFirst: {
            args: Prisma.centro_custoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centro_custoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.centro_custoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centro_custoPayload>
          }
          findMany: {
            args: Prisma.centro_custoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centro_custoPayload>[]
          }
          create: {
            args: Prisma.centro_custoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centro_custoPayload>
          }
          createMany: {
            args: Prisma.centro_custoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.centro_custoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centro_custoPayload>
          }
          update: {
            args: Prisma.centro_custoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centro_custoPayload>
          }
          deleteMany: {
            args: Prisma.centro_custoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.centro_custoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.centro_custoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$centro_custoPayload>
          }
          aggregate: {
            args: Prisma.Centro_custoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCentro_custo>
          }
          groupBy: {
            args: Prisma.centro_custoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Centro_custoGroupByOutputType>[]
          }
          count: {
            args: Prisma.centro_custoCountArgs<ExtArgs>
            result: $Utils.Optional<Centro_custoCountAggregateOutputType> | number
          }
        }
      }
      colaboradores: {
        payload: Prisma.$colaboradoresPayload<ExtArgs>
        fields: Prisma.colaboradoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.colaboradoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colaboradoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.colaboradoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colaboradoresPayload>
          }
          findFirst: {
            args: Prisma.colaboradoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colaboradoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.colaboradoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colaboradoresPayload>
          }
          findMany: {
            args: Prisma.colaboradoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colaboradoresPayload>[]
          }
          create: {
            args: Prisma.colaboradoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colaboradoresPayload>
          }
          createMany: {
            args: Prisma.colaboradoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.colaboradoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colaboradoresPayload>
          }
          update: {
            args: Prisma.colaboradoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colaboradoresPayload>
          }
          deleteMany: {
            args: Prisma.colaboradoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.colaboradoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.colaboradoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colaboradoresPayload>
          }
          aggregate: {
            args: Prisma.ColaboradoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColaboradores>
          }
          groupBy: {
            args: Prisma.colaboradoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColaboradoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.colaboradoresCountArgs<ExtArgs>
            result: $Utils.Optional<ColaboradoresCountAggregateOutputType> | number
          }
        }
      }
      comissoes: {
        payload: Prisma.$comissoesPayload<ExtArgs>
        fields: Prisma.comissoesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.comissoesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comissoesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.comissoesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comissoesPayload>
          }
          findFirst: {
            args: Prisma.comissoesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comissoesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.comissoesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comissoesPayload>
          }
          findMany: {
            args: Prisma.comissoesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comissoesPayload>[]
          }
          create: {
            args: Prisma.comissoesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comissoesPayload>
          }
          createMany: {
            args: Prisma.comissoesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.comissoesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comissoesPayload>
          }
          update: {
            args: Prisma.comissoesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comissoesPayload>
          }
          deleteMany: {
            args: Prisma.comissoesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.comissoesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.comissoesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comissoesPayload>
          }
          aggregate: {
            args: Prisma.ComissoesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComissoes>
          }
          groupBy: {
            args: Prisma.comissoesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComissoesGroupByOutputType>[]
          }
          count: {
            args: Prisma.comissoesCountArgs<ExtArgs>
            result: $Utils.Optional<ComissoesCountAggregateOutputType> | number
          }
        }
      }
      comites: {
        payload: Prisma.$comitesPayload<ExtArgs>
        fields: Prisma.comitesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.comitesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comitesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.comitesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comitesPayload>
          }
          findFirst: {
            args: Prisma.comitesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comitesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.comitesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comitesPayload>
          }
          findMany: {
            args: Prisma.comitesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comitesPayload>[]
          }
          create: {
            args: Prisma.comitesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comitesPayload>
          }
          createMany: {
            args: Prisma.comitesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.comitesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comitesPayload>
          }
          update: {
            args: Prisma.comitesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comitesPayload>
          }
          deleteMany: {
            args: Prisma.comitesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.comitesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.comitesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comitesPayload>
          }
          aggregate: {
            args: Prisma.ComitesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComites>
          }
          groupBy: {
            args: Prisma.comitesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComitesGroupByOutputType>[]
          }
          count: {
            args: Prisma.comitesCountArgs<ExtArgs>
            result: $Utils.Optional<ComitesCountAggregateOutputType> | number
          }
        }
      }
      equipes: {
        payload: Prisma.$equipesPayload<ExtArgs>
        fields: Prisma.equipesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.equipesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.equipesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipesPayload>
          }
          findFirst: {
            args: Prisma.equipesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.equipesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipesPayload>
          }
          findMany: {
            args: Prisma.equipesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipesPayload>[]
          }
          create: {
            args: Prisma.equipesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipesPayload>
          }
          createMany: {
            args: Prisma.equipesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.equipesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipesPayload>
          }
          update: {
            args: Prisma.equipesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipesPayload>
          }
          deleteMany: {
            args: Prisma.equipesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.equipesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.equipesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipesPayload>
          }
          aggregate: {
            args: Prisma.EquipesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipes>
          }
          groupBy: {
            args: Prisma.equipesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipesGroupByOutputType>[]
          }
          count: {
            args: Prisma.equipesCountArgs<ExtArgs>
            result: $Utils.Optional<EquipesCountAggregateOutputType> | number
          }
        }
      }
      hierarquia: {
        payload: Prisma.$hierarquiaPayload<ExtArgs>
        fields: Prisma.hierarquiaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hierarquiaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hierarquiaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hierarquiaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hierarquiaPayload>
          }
          findFirst: {
            args: Prisma.hierarquiaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hierarquiaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hierarquiaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hierarquiaPayload>
          }
          findMany: {
            args: Prisma.hierarquiaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hierarquiaPayload>[]
          }
          create: {
            args: Prisma.hierarquiaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hierarquiaPayload>
          }
          createMany: {
            args: Prisma.hierarquiaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.hierarquiaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hierarquiaPayload>
          }
          update: {
            args: Prisma.hierarquiaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hierarquiaPayload>
          }
          deleteMany: {
            args: Prisma.hierarquiaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hierarquiaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.hierarquiaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hierarquiaPayload>
          }
          aggregate: {
            args: Prisma.HierarquiaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHierarquia>
          }
          groupBy: {
            args: Prisma.hierarquiaGroupByArgs<ExtArgs>
            result: $Utils.Optional<HierarquiaGroupByOutputType>[]
          }
          count: {
            args: Prisma.hierarquiaCountArgs<ExtArgs>
            result: $Utils.Optional<HierarquiaCountAggregateOutputType> | number
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
      programas: {
        payload: Prisma.$programasPayload<ExtArgs>
        fields: Prisma.programasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.programasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.programasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programasPayload>
          }
          findFirst: {
            args: Prisma.programasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.programasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programasPayload>
          }
          findMany: {
            args: Prisma.programasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programasPayload>[]
          }
          create: {
            args: Prisma.programasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programasPayload>
          }
          createMany: {
            args: Prisma.programasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.programasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programasPayload>
          }
          update: {
            args: Prisma.programasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programasPayload>
          }
          deleteMany: {
            args: Prisma.programasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.programasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.programasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programasPayload>
          }
          aggregate: {
            args: Prisma.ProgramasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgramas>
          }
          groupBy: {
            args: Prisma.programasGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgramasGroupByOutputType>[]
          }
          count: {
            args: Prisma.programasCountArgs<ExtArgs>
            result: $Utils.Optional<ProgramasCountAggregateOutputType> | number
          }
        }
      }
      setores: {
        payload: Prisma.$setoresPayload<ExtArgs>
        fields: Prisma.setoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.setoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.setoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setoresPayload>
          }
          findFirst: {
            args: Prisma.setoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.setoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setoresPayload>
          }
          findMany: {
            args: Prisma.setoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setoresPayload>[]
          }
          create: {
            args: Prisma.setoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setoresPayload>
          }
          createMany: {
            args: Prisma.setoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.setoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setoresPayload>
          }
          update: {
            args: Prisma.setoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setoresPayload>
          }
          deleteMany: {
            args: Prisma.setoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.setoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.setoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$setoresPayload>
          }
          aggregate: {
            args: Prisma.SetoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetores>
          }
          groupBy: {
            args: Prisma.setoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<SetoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.setoresCountArgs<ExtArgs>
            result: $Utils.Optional<SetoresCountAggregateOutputType> | number
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
    acessos?: acessosOmit
    areas?: areasOmit
    centro_custo?: centro_custoOmit
    colaboradores?: colaboradoresOmit
    comissoes?: comissoesOmit
    comites?: comitesOmit
    equipes?: equipesOmit
    hierarquia?: hierarquiaOmit
    logs?: logsOmit
    programas?: programasOmit
    setores?: setoresOmit
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
   * Model acessos
   */

  export type AggregateAcessos = {
    _count: AcessosCountAggregateOutputType | null
    _avg: AcessosAvgAggregateOutputType | null
    _sum: AcessosSumAggregateOutputType | null
    _min: AcessosMinAggregateOutputType | null
    _max: AcessosMaxAggregateOutputType | null
  }

  export type AcessosAvgAggregateOutputType = {
    id: number | null
  }

  export type AcessosSumAggregateOutputType = {
    id: number | null
  }

  export type AcessosMinAggregateOutputType = {
    id: number | null
    usuario: string | null
    permissoes: string | null
  }

  export type AcessosMaxAggregateOutputType = {
    id: number | null
    usuario: string | null
    permissoes: string | null
  }

  export type AcessosCountAggregateOutputType = {
    id: number
    usuario: number
    permissoes: number
    _all: number
  }


  export type AcessosAvgAggregateInputType = {
    id?: true
  }

  export type AcessosSumAggregateInputType = {
    id?: true
  }

  export type AcessosMinAggregateInputType = {
    id?: true
    usuario?: true
    permissoes?: true
  }

  export type AcessosMaxAggregateInputType = {
    id?: true
    usuario?: true
    permissoes?: true
  }

  export type AcessosCountAggregateInputType = {
    id?: true
    usuario?: true
    permissoes?: true
    _all?: true
  }

  export type AcessosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which acessos to aggregate.
     */
    where?: acessosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of acessos to fetch.
     */
    orderBy?: acessosOrderByWithRelationInput | acessosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: acessosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` acessos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` acessos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned acessos
    **/
    _count?: true | AcessosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AcessosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AcessosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcessosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcessosMaxAggregateInputType
  }

  export type GetAcessosAggregateType<T extends AcessosAggregateArgs> = {
        [P in keyof T & keyof AggregateAcessos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcessos[P]>
      : GetScalarType<T[P], AggregateAcessos[P]>
  }




  export type acessosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: acessosWhereInput
    orderBy?: acessosOrderByWithAggregationInput | acessosOrderByWithAggregationInput[]
    by: AcessosScalarFieldEnum[] | AcessosScalarFieldEnum
    having?: acessosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcessosCountAggregateInputType | true
    _avg?: AcessosAvgAggregateInputType
    _sum?: AcessosSumAggregateInputType
    _min?: AcessosMinAggregateInputType
    _max?: AcessosMaxAggregateInputType
  }

  export type AcessosGroupByOutputType = {
    id: number
    usuario: string
    permissoes: string
    _count: AcessosCountAggregateOutputType | null
    _avg: AcessosAvgAggregateOutputType | null
    _sum: AcessosSumAggregateOutputType | null
    _min: AcessosMinAggregateOutputType | null
    _max: AcessosMaxAggregateOutputType | null
  }

  type GetAcessosGroupByPayload<T extends acessosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcessosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcessosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcessosGroupByOutputType[P]>
            : GetScalarType<T[P], AcessosGroupByOutputType[P]>
        }
      >
    >


  export type acessosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario?: boolean
    permissoes?: boolean
  }, ExtArgs["result"]["acessos"]>



  export type acessosSelectScalar = {
    id?: boolean
    usuario?: boolean
    permissoes?: boolean
  }

  export type acessosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario" | "permissoes", ExtArgs["result"]["acessos"]>

  export type $acessosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "acessos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario: string
      permissoes: string
    }, ExtArgs["result"]["acessos"]>
    composites: {}
  }

  type acessosGetPayload<S extends boolean | null | undefined | acessosDefaultArgs> = $Result.GetResult<Prisma.$acessosPayload, S>

  type acessosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<acessosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AcessosCountAggregateInputType | true
    }

  export interface acessosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['acessos'], meta: { name: 'acessos' } }
    /**
     * Find zero or one Acessos that matches the filter.
     * @param {acessosFindUniqueArgs} args - Arguments to find a Acessos
     * @example
     * // Get one Acessos
     * const acessos = await prisma.acessos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends acessosFindUniqueArgs>(args: SelectSubset<T, acessosFindUniqueArgs<ExtArgs>>): Prisma__acessosClient<$Result.GetResult<Prisma.$acessosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Acessos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {acessosFindUniqueOrThrowArgs} args - Arguments to find a Acessos
     * @example
     * // Get one Acessos
     * const acessos = await prisma.acessos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends acessosFindUniqueOrThrowArgs>(args: SelectSubset<T, acessosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__acessosClient<$Result.GetResult<Prisma.$acessosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Acessos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {acessosFindFirstArgs} args - Arguments to find a Acessos
     * @example
     * // Get one Acessos
     * const acessos = await prisma.acessos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends acessosFindFirstArgs>(args?: SelectSubset<T, acessosFindFirstArgs<ExtArgs>>): Prisma__acessosClient<$Result.GetResult<Prisma.$acessosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Acessos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {acessosFindFirstOrThrowArgs} args - Arguments to find a Acessos
     * @example
     * // Get one Acessos
     * const acessos = await prisma.acessos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends acessosFindFirstOrThrowArgs>(args?: SelectSubset<T, acessosFindFirstOrThrowArgs<ExtArgs>>): Prisma__acessosClient<$Result.GetResult<Prisma.$acessosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Acessos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {acessosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Acessos
     * const acessos = await prisma.acessos.findMany()
     * 
     * // Get first 10 Acessos
     * const acessos = await prisma.acessos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const acessosWithIdOnly = await prisma.acessos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends acessosFindManyArgs>(args?: SelectSubset<T, acessosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$acessosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Acessos.
     * @param {acessosCreateArgs} args - Arguments to create a Acessos.
     * @example
     * // Create one Acessos
     * const Acessos = await prisma.acessos.create({
     *   data: {
     *     // ... data to create a Acessos
     *   }
     * })
     * 
     */
    create<T extends acessosCreateArgs>(args: SelectSubset<T, acessosCreateArgs<ExtArgs>>): Prisma__acessosClient<$Result.GetResult<Prisma.$acessosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Acessos.
     * @param {acessosCreateManyArgs} args - Arguments to create many Acessos.
     * @example
     * // Create many Acessos
     * const acessos = await prisma.acessos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends acessosCreateManyArgs>(args?: SelectSubset<T, acessosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Acessos.
     * @param {acessosDeleteArgs} args - Arguments to delete one Acessos.
     * @example
     * // Delete one Acessos
     * const Acessos = await prisma.acessos.delete({
     *   where: {
     *     // ... filter to delete one Acessos
     *   }
     * })
     * 
     */
    delete<T extends acessosDeleteArgs>(args: SelectSubset<T, acessosDeleteArgs<ExtArgs>>): Prisma__acessosClient<$Result.GetResult<Prisma.$acessosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Acessos.
     * @param {acessosUpdateArgs} args - Arguments to update one Acessos.
     * @example
     * // Update one Acessos
     * const acessos = await prisma.acessos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends acessosUpdateArgs>(args: SelectSubset<T, acessosUpdateArgs<ExtArgs>>): Prisma__acessosClient<$Result.GetResult<Prisma.$acessosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Acessos.
     * @param {acessosDeleteManyArgs} args - Arguments to filter Acessos to delete.
     * @example
     * // Delete a few Acessos
     * const { count } = await prisma.acessos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends acessosDeleteManyArgs>(args?: SelectSubset<T, acessosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Acessos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {acessosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Acessos
     * const acessos = await prisma.acessos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends acessosUpdateManyArgs>(args: SelectSubset<T, acessosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Acessos.
     * @param {acessosUpsertArgs} args - Arguments to update or create a Acessos.
     * @example
     * // Update or create a Acessos
     * const acessos = await prisma.acessos.upsert({
     *   create: {
     *     // ... data to create a Acessos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Acessos we want to update
     *   }
     * })
     */
    upsert<T extends acessosUpsertArgs>(args: SelectSubset<T, acessosUpsertArgs<ExtArgs>>): Prisma__acessosClient<$Result.GetResult<Prisma.$acessosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Acessos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {acessosCountArgs} args - Arguments to filter Acessos to count.
     * @example
     * // Count the number of Acessos
     * const count = await prisma.acessos.count({
     *   where: {
     *     // ... the filter for the Acessos we want to count
     *   }
     * })
    **/
    count<T extends acessosCountArgs>(
      args?: Subset<T, acessosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcessosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Acessos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AcessosAggregateArgs>(args: Subset<T, AcessosAggregateArgs>): Prisma.PrismaPromise<GetAcessosAggregateType<T>>

    /**
     * Group by Acessos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {acessosGroupByArgs} args - Group by arguments.
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
      T extends acessosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: acessosGroupByArgs['orderBy'] }
        : { orderBy?: acessosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, acessosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcessosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the acessos model
   */
  readonly fields: acessosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for acessos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__acessosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the acessos model
   */
  interface acessosFieldRefs {
    readonly id: FieldRef<"acessos", 'Int'>
    readonly usuario: FieldRef<"acessos", 'String'>
    readonly permissoes: FieldRef<"acessos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * acessos findUnique
   */
  export type acessosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the acessos
     */
    select?: acessosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the acessos
     */
    omit?: acessosOmit<ExtArgs> | null
    /**
     * Filter, which acessos to fetch.
     */
    where: acessosWhereUniqueInput
  }

  /**
   * acessos findUniqueOrThrow
   */
  export type acessosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the acessos
     */
    select?: acessosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the acessos
     */
    omit?: acessosOmit<ExtArgs> | null
    /**
     * Filter, which acessos to fetch.
     */
    where: acessosWhereUniqueInput
  }

  /**
   * acessos findFirst
   */
  export type acessosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the acessos
     */
    select?: acessosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the acessos
     */
    omit?: acessosOmit<ExtArgs> | null
    /**
     * Filter, which acessos to fetch.
     */
    where?: acessosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of acessos to fetch.
     */
    orderBy?: acessosOrderByWithRelationInput | acessosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for acessos.
     */
    cursor?: acessosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` acessos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` acessos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of acessos.
     */
    distinct?: AcessosScalarFieldEnum | AcessosScalarFieldEnum[]
  }

  /**
   * acessos findFirstOrThrow
   */
  export type acessosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the acessos
     */
    select?: acessosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the acessos
     */
    omit?: acessosOmit<ExtArgs> | null
    /**
     * Filter, which acessos to fetch.
     */
    where?: acessosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of acessos to fetch.
     */
    orderBy?: acessosOrderByWithRelationInput | acessosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for acessos.
     */
    cursor?: acessosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` acessos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` acessos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of acessos.
     */
    distinct?: AcessosScalarFieldEnum | AcessosScalarFieldEnum[]
  }

  /**
   * acessos findMany
   */
  export type acessosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the acessos
     */
    select?: acessosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the acessos
     */
    omit?: acessosOmit<ExtArgs> | null
    /**
     * Filter, which acessos to fetch.
     */
    where?: acessosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of acessos to fetch.
     */
    orderBy?: acessosOrderByWithRelationInput | acessosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing acessos.
     */
    cursor?: acessosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` acessos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` acessos.
     */
    skip?: number
    distinct?: AcessosScalarFieldEnum | AcessosScalarFieldEnum[]
  }

  /**
   * acessos create
   */
  export type acessosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the acessos
     */
    select?: acessosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the acessos
     */
    omit?: acessosOmit<ExtArgs> | null
    /**
     * The data needed to create a acessos.
     */
    data: XOR<acessosCreateInput, acessosUncheckedCreateInput>
  }

  /**
   * acessos createMany
   */
  export type acessosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many acessos.
     */
    data: acessosCreateManyInput | acessosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * acessos update
   */
  export type acessosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the acessos
     */
    select?: acessosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the acessos
     */
    omit?: acessosOmit<ExtArgs> | null
    /**
     * The data needed to update a acessos.
     */
    data: XOR<acessosUpdateInput, acessosUncheckedUpdateInput>
    /**
     * Choose, which acessos to update.
     */
    where: acessosWhereUniqueInput
  }

  /**
   * acessos updateMany
   */
  export type acessosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update acessos.
     */
    data: XOR<acessosUpdateManyMutationInput, acessosUncheckedUpdateManyInput>
    /**
     * Filter which acessos to update
     */
    where?: acessosWhereInput
    /**
     * Limit how many acessos to update.
     */
    limit?: number
  }

  /**
   * acessos upsert
   */
  export type acessosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the acessos
     */
    select?: acessosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the acessos
     */
    omit?: acessosOmit<ExtArgs> | null
    /**
     * The filter to search for the acessos to update in case it exists.
     */
    where: acessosWhereUniqueInput
    /**
     * In case the acessos found by the `where` argument doesn't exist, create a new acessos with this data.
     */
    create: XOR<acessosCreateInput, acessosUncheckedCreateInput>
    /**
     * In case the acessos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<acessosUpdateInput, acessosUncheckedUpdateInput>
  }

  /**
   * acessos delete
   */
  export type acessosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the acessos
     */
    select?: acessosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the acessos
     */
    omit?: acessosOmit<ExtArgs> | null
    /**
     * Filter which acessos to delete.
     */
    where: acessosWhereUniqueInput
  }

  /**
   * acessos deleteMany
   */
  export type acessosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which acessos to delete
     */
    where?: acessosWhereInput
    /**
     * Limit how many acessos to delete.
     */
    limit?: number
  }

  /**
   * acessos without action
   */
  export type acessosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the acessos
     */
    select?: acessosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the acessos
     */
    omit?: acessosOmit<ExtArgs> | null
  }


  /**
   * Model areas
   */

  export type AggregateAreas = {
    _count: AreasCountAggregateOutputType | null
    _avg: AreasAvgAggregateOutputType | null
    _sum: AreasSumAggregateOutputType | null
    _min: AreasMinAggregateOutputType | null
    _max: AreasMaxAggregateOutputType | null
  }

  export type AreasAvgAggregateOutputType = {
    id: number | null
  }

  export type AreasSumAggregateOutputType = {
    id: number | null
  }

  export type AreasMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type AreasMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type AreasCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type AreasAvgAggregateInputType = {
    id?: true
  }

  export type AreasSumAggregateInputType = {
    id?: true
  }

  export type AreasMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type AreasMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type AreasCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type AreasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which areas to aggregate.
     */
    where?: areasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of areas to fetch.
     */
    orderBy?: areasOrderByWithRelationInput | areasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: areasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned areas
    **/
    _count?: true | AreasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AreasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AreasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AreasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AreasMaxAggregateInputType
  }

  export type GetAreasAggregateType<T extends AreasAggregateArgs> = {
        [P in keyof T & keyof AggregateAreas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAreas[P]>
      : GetScalarType<T[P], AggregateAreas[P]>
  }




  export type areasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: areasWhereInput
    orderBy?: areasOrderByWithAggregationInput | areasOrderByWithAggregationInput[]
    by: AreasScalarFieldEnum[] | AreasScalarFieldEnum
    having?: areasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AreasCountAggregateInputType | true
    _avg?: AreasAvgAggregateInputType
    _sum?: AreasSumAggregateInputType
    _min?: AreasMinAggregateInputType
    _max?: AreasMaxAggregateInputType
  }

  export type AreasGroupByOutputType = {
    id: number
    nome: string
    _count: AreasCountAggregateOutputType | null
    _avg: AreasAvgAggregateOutputType | null
    _sum: AreasSumAggregateOutputType | null
    _min: AreasMinAggregateOutputType | null
    _max: AreasMaxAggregateOutputType | null
  }

  type GetAreasGroupByPayload<T extends areasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AreasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AreasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AreasGroupByOutputType[P]>
            : GetScalarType<T[P], AreasGroupByOutputType[P]>
        }
      >
    >


  export type areasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["areas"]>



  export type areasSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type areasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["areas"]>

  export type $areasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "areas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["areas"]>
    composites: {}
  }

  type areasGetPayload<S extends boolean | null | undefined | areasDefaultArgs> = $Result.GetResult<Prisma.$areasPayload, S>

  type areasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<areasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AreasCountAggregateInputType | true
    }

  export interface areasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['areas'], meta: { name: 'areas' } }
    /**
     * Find zero or one Areas that matches the filter.
     * @param {areasFindUniqueArgs} args - Arguments to find a Areas
     * @example
     * // Get one Areas
     * const areas = await prisma.areas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends areasFindUniqueArgs>(args: SelectSubset<T, areasFindUniqueArgs<ExtArgs>>): Prisma__areasClient<$Result.GetResult<Prisma.$areasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Areas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {areasFindUniqueOrThrowArgs} args - Arguments to find a Areas
     * @example
     * // Get one Areas
     * const areas = await prisma.areas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends areasFindUniqueOrThrowArgs>(args: SelectSubset<T, areasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__areasClient<$Result.GetResult<Prisma.$areasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {areasFindFirstArgs} args - Arguments to find a Areas
     * @example
     * // Get one Areas
     * const areas = await prisma.areas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends areasFindFirstArgs>(args?: SelectSubset<T, areasFindFirstArgs<ExtArgs>>): Prisma__areasClient<$Result.GetResult<Prisma.$areasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Areas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {areasFindFirstOrThrowArgs} args - Arguments to find a Areas
     * @example
     * // Get one Areas
     * const areas = await prisma.areas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends areasFindFirstOrThrowArgs>(args?: SelectSubset<T, areasFindFirstOrThrowArgs<ExtArgs>>): Prisma__areasClient<$Result.GetResult<Prisma.$areasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {areasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Areas
     * const areas = await prisma.areas.findMany()
     * 
     * // Get first 10 Areas
     * const areas = await prisma.areas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const areasWithIdOnly = await prisma.areas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends areasFindManyArgs>(args?: SelectSubset<T, areasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$areasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Areas.
     * @param {areasCreateArgs} args - Arguments to create a Areas.
     * @example
     * // Create one Areas
     * const Areas = await prisma.areas.create({
     *   data: {
     *     // ... data to create a Areas
     *   }
     * })
     * 
     */
    create<T extends areasCreateArgs>(args: SelectSubset<T, areasCreateArgs<ExtArgs>>): Prisma__areasClient<$Result.GetResult<Prisma.$areasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Areas.
     * @param {areasCreateManyArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const areas = await prisma.areas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends areasCreateManyArgs>(args?: SelectSubset<T, areasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Areas.
     * @param {areasDeleteArgs} args - Arguments to delete one Areas.
     * @example
     * // Delete one Areas
     * const Areas = await prisma.areas.delete({
     *   where: {
     *     // ... filter to delete one Areas
     *   }
     * })
     * 
     */
    delete<T extends areasDeleteArgs>(args: SelectSubset<T, areasDeleteArgs<ExtArgs>>): Prisma__areasClient<$Result.GetResult<Prisma.$areasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Areas.
     * @param {areasUpdateArgs} args - Arguments to update one Areas.
     * @example
     * // Update one Areas
     * const areas = await prisma.areas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends areasUpdateArgs>(args: SelectSubset<T, areasUpdateArgs<ExtArgs>>): Prisma__areasClient<$Result.GetResult<Prisma.$areasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Areas.
     * @param {areasDeleteManyArgs} args - Arguments to filter Areas to delete.
     * @example
     * // Delete a few Areas
     * const { count } = await prisma.areas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends areasDeleteManyArgs>(args?: SelectSubset<T, areasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {areasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Areas
     * const areas = await prisma.areas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends areasUpdateManyArgs>(args: SelectSubset<T, areasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Areas.
     * @param {areasUpsertArgs} args - Arguments to update or create a Areas.
     * @example
     * // Update or create a Areas
     * const areas = await prisma.areas.upsert({
     *   create: {
     *     // ... data to create a Areas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Areas we want to update
     *   }
     * })
     */
    upsert<T extends areasUpsertArgs>(args: SelectSubset<T, areasUpsertArgs<ExtArgs>>): Prisma__areasClient<$Result.GetResult<Prisma.$areasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {areasCountArgs} args - Arguments to filter Areas to count.
     * @example
     * // Count the number of Areas
     * const count = await prisma.areas.count({
     *   where: {
     *     // ... the filter for the Areas we want to count
     *   }
     * })
    **/
    count<T extends areasCountArgs>(
      args?: Subset<T, areasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AreasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AreasAggregateArgs>(args: Subset<T, AreasAggregateArgs>): Prisma.PrismaPromise<GetAreasAggregateType<T>>

    /**
     * Group by Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {areasGroupByArgs} args - Group by arguments.
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
      T extends areasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: areasGroupByArgs['orderBy'] }
        : { orderBy?: areasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, areasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the areas model
   */
  readonly fields: areasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for areas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__areasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the areas model
   */
  interface areasFieldRefs {
    readonly id: FieldRef<"areas", 'Int'>
    readonly nome: FieldRef<"areas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * areas findUnique
   */
  export type areasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the areas
     */
    select?: areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the areas
     */
    omit?: areasOmit<ExtArgs> | null
    /**
     * Filter, which areas to fetch.
     */
    where: areasWhereUniqueInput
  }

  /**
   * areas findUniqueOrThrow
   */
  export type areasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the areas
     */
    select?: areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the areas
     */
    omit?: areasOmit<ExtArgs> | null
    /**
     * Filter, which areas to fetch.
     */
    where: areasWhereUniqueInput
  }

  /**
   * areas findFirst
   */
  export type areasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the areas
     */
    select?: areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the areas
     */
    omit?: areasOmit<ExtArgs> | null
    /**
     * Filter, which areas to fetch.
     */
    where?: areasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of areas to fetch.
     */
    orderBy?: areasOrderByWithRelationInput | areasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for areas.
     */
    cursor?: areasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of areas.
     */
    distinct?: AreasScalarFieldEnum | AreasScalarFieldEnum[]
  }

  /**
   * areas findFirstOrThrow
   */
  export type areasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the areas
     */
    select?: areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the areas
     */
    omit?: areasOmit<ExtArgs> | null
    /**
     * Filter, which areas to fetch.
     */
    where?: areasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of areas to fetch.
     */
    orderBy?: areasOrderByWithRelationInput | areasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for areas.
     */
    cursor?: areasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of areas.
     */
    distinct?: AreasScalarFieldEnum | AreasScalarFieldEnum[]
  }

  /**
   * areas findMany
   */
  export type areasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the areas
     */
    select?: areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the areas
     */
    omit?: areasOmit<ExtArgs> | null
    /**
     * Filter, which areas to fetch.
     */
    where?: areasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of areas to fetch.
     */
    orderBy?: areasOrderByWithRelationInput | areasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing areas.
     */
    cursor?: areasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` areas.
     */
    skip?: number
    distinct?: AreasScalarFieldEnum | AreasScalarFieldEnum[]
  }

  /**
   * areas create
   */
  export type areasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the areas
     */
    select?: areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the areas
     */
    omit?: areasOmit<ExtArgs> | null
    /**
     * The data needed to create a areas.
     */
    data: XOR<areasCreateInput, areasUncheckedCreateInput>
  }

  /**
   * areas createMany
   */
  export type areasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many areas.
     */
    data: areasCreateManyInput | areasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * areas update
   */
  export type areasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the areas
     */
    select?: areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the areas
     */
    omit?: areasOmit<ExtArgs> | null
    /**
     * The data needed to update a areas.
     */
    data: XOR<areasUpdateInput, areasUncheckedUpdateInput>
    /**
     * Choose, which areas to update.
     */
    where: areasWhereUniqueInput
  }

  /**
   * areas updateMany
   */
  export type areasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update areas.
     */
    data: XOR<areasUpdateManyMutationInput, areasUncheckedUpdateManyInput>
    /**
     * Filter which areas to update
     */
    where?: areasWhereInput
    /**
     * Limit how many areas to update.
     */
    limit?: number
  }

  /**
   * areas upsert
   */
  export type areasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the areas
     */
    select?: areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the areas
     */
    omit?: areasOmit<ExtArgs> | null
    /**
     * The filter to search for the areas to update in case it exists.
     */
    where: areasWhereUniqueInput
    /**
     * In case the areas found by the `where` argument doesn't exist, create a new areas with this data.
     */
    create: XOR<areasCreateInput, areasUncheckedCreateInput>
    /**
     * In case the areas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<areasUpdateInput, areasUncheckedUpdateInput>
  }

  /**
   * areas delete
   */
  export type areasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the areas
     */
    select?: areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the areas
     */
    omit?: areasOmit<ExtArgs> | null
    /**
     * Filter which areas to delete.
     */
    where: areasWhereUniqueInput
  }

  /**
   * areas deleteMany
   */
  export type areasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which areas to delete
     */
    where?: areasWhereInput
    /**
     * Limit how many areas to delete.
     */
    limit?: number
  }

  /**
   * areas without action
   */
  export type areasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the areas
     */
    select?: areasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the areas
     */
    omit?: areasOmit<ExtArgs> | null
  }


  /**
   * Model centro_custo
   */

  export type AggregateCentro_custo = {
    _count: Centro_custoCountAggregateOutputType | null
    _avg: Centro_custoAvgAggregateOutputType | null
    _sum: Centro_custoSumAggregateOutputType | null
    _min: Centro_custoMinAggregateOutputType | null
    _max: Centro_custoMaxAggregateOutputType | null
  }

  export type Centro_custoAvgAggregateOutputType = {
    id: number | null
    area_id: number | null
    setor_id: number | null
  }

  export type Centro_custoSumAggregateOutputType = {
    id: number | null
    area_id: number | null
    setor_id: number | null
  }

  export type Centro_custoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    nome_totvs: string | null
    nome_organograma: string | null
    codigo_centro_custo: string | null
    area_id: number | null
    setor_id: number | null
  }

  export type Centro_custoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    nome_totvs: string | null
    nome_organograma: string | null
    codigo_centro_custo: string | null
    area_id: number | null
    setor_id: number | null
  }

  export type Centro_custoCountAggregateOutputType = {
    id: number
    nome: number
    nome_totvs: number
    nome_organograma: number
    codigo_centro_custo: number
    area_id: number
    setor_id: number
    _all: number
  }


  export type Centro_custoAvgAggregateInputType = {
    id?: true
    area_id?: true
    setor_id?: true
  }

  export type Centro_custoSumAggregateInputType = {
    id?: true
    area_id?: true
    setor_id?: true
  }

  export type Centro_custoMinAggregateInputType = {
    id?: true
    nome?: true
    nome_totvs?: true
    nome_organograma?: true
    codigo_centro_custo?: true
    area_id?: true
    setor_id?: true
  }

  export type Centro_custoMaxAggregateInputType = {
    id?: true
    nome?: true
    nome_totvs?: true
    nome_organograma?: true
    codigo_centro_custo?: true
    area_id?: true
    setor_id?: true
  }

  export type Centro_custoCountAggregateInputType = {
    id?: true
    nome?: true
    nome_totvs?: true
    nome_organograma?: true
    codigo_centro_custo?: true
    area_id?: true
    setor_id?: true
    _all?: true
  }

  export type Centro_custoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which centro_custo to aggregate.
     */
    where?: centro_custoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of centro_custos to fetch.
     */
    orderBy?: centro_custoOrderByWithRelationInput | centro_custoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: centro_custoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` centro_custos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` centro_custos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned centro_custos
    **/
    _count?: true | Centro_custoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Centro_custoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Centro_custoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Centro_custoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Centro_custoMaxAggregateInputType
  }

  export type GetCentro_custoAggregateType<T extends Centro_custoAggregateArgs> = {
        [P in keyof T & keyof AggregateCentro_custo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCentro_custo[P]>
      : GetScalarType<T[P], AggregateCentro_custo[P]>
  }




  export type centro_custoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: centro_custoWhereInput
    orderBy?: centro_custoOrderByWithAggregationInput | centro_custoOrderByWithAggregationInput[]
    by: Centro_custoScalarFieldEnum[] | Centro_custoScalarFieldEnum
    having?: centro_custoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Centro_custoCountAggregateInputType | true
    _avg?: Centro_custoAvgAggregateInputType
    _sum?: Centro_custoSumAggregateInputType
    _min?: Centro_custoMinAggregateInputType
    _max?: Centro_custoMaxAggregateInputType
  }

  export type Centro_custoGroupByOutputType = {
    id: number
    nome: string
    nome_totvs: string
    nome_organograma: string | null
    codigo_centro_custo: string
    area_id: number
    setor_id: number
    _count: Centro_custoCountAggregateOutputType | null
    _avg: Centro_custoAvgAggregateOutputType | null
    _sum: Centro_custoSumAggregateOutputType | null
    _min: Centro_custoMinAggregateOutputType | null
    _max: Centro_custoMaxAggregateOutputType | null
  }

  type GetCentro_custoGroupByPayload<T extends centro_custoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Centro_custoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Centro_custoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Centro_custoGroupByOutputType[P]>
            : GetScalarType<T[P], Centro_custoGroupByOutputType[P]>
        }
      >
    >


  export type centro_custoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    nome_totvs?: boolean
    nome_organograma?: boolean
    codigo_centro_custo?: boolean
    area_id?: boolean
    setor_id?: boolean
  }, ExtArgs["result"]["centro_custo"]>



  export type centro_custoSelectScalar = {
    id?: boolean
    nome?: boolean
    nome_totvs?: boolean
    nome_organograma?: boolean
    codigo_centro_custo?: boolean
    area_id?: boolean
    setor_id?: boolean
  }

  export type centro_custoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "nome_totvs" | "nome_organograma" | "codigo_centro_custo" | "area_id" | "setor_id", ExtArgs["result"]["centro_custo"]>

  export type $centro_custoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "centro_custo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      nome_totvs: string
      nome_organograma: string | null
      codigo_centro_custo: string
      area_id: number
      setor_id: number
    }, ExtArgs["result"]["centro_custo"]>
    composites: {}
  }

  type centro_custoGetPayload<S extends boolean | null | undefined | centro_custoDefaultArgs> = $Result.GetResult<Prisma.$centro_custoPayload, S>

  type centro_custoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<centro_custoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Centro_custoCountAggregateInputType | true
    }

  export interface centro_custoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['centro_custo'], meta: { name: 'centro_custo' } }
    /**
     * Find zero or one Centro_custo that matches the filter.
     * @param {centro_custoFindUniqueArgs} args - Arguments to find a Centro_custo
     * @example
     * // Get one Centro_custo
     * const centro_custo = await prisma.centro_custo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends centro_custoFindUniqueArgs>(args: SelectSubset<T, centro_custoFindUniqueArgs<ExtArgs>>): Prisma__centro_custoClient<$Result.GetResult<Prisma.$centro_custoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Centro_custo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {centro_custoFindUniqueOrThrowArgs} args - Arguments to find a Centro_custo
     * @example
     * // Get one Centro_custo
     * const centro_custo = await prisma.centro_custo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends centro_custoFindUniqueOrThrowArgs>(args: SelectSubset<T, centro_custoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__centro_custoClient<$Result.GetResult<Prisma.$centro_custoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Centro_custo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centro_custoFindFirstArgs} args - Arguments to find a Centro_custo
     * @example
     * // Get one Centro_custo
     * const centro_custo = await prisma.centro_custo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends centro_custoFindFirstArgs>(args?: SelectSubset<T, centro_custoFindFirstArgs<ExtArgs>>): Prisma__centro_custoClient<$Result.GetResult<Prisma.$centro_custoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Centro_custo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centro_custoFindFirstOrThrowArgs} args - Arguments to find a Centro_custo
     * @example
     * // Get one Centro_custo
     * const centro_custo = await prisma.centro_custo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends centro_custoFindFirstOrThrowArgs>(args?: SelectSubset<T, centro_custoFindFirstOrThrowArgs<ExtArgs>>): Prisma__centro_custoClient<$Result.GetResult<Prisma.$centro_custoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Centro_custos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centro_custoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Centro_custos
     * const centro_custos = await prisma.centro_custo.findMany()
     * 
     * // Get first 10 Centro_custos
     * const centro_custos = await prisma.centro_custo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const centro_custoWithIdOnly = await prisma.centro_custo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends centro_custoFindManyArgs>(args?: SelectSubset<T, centro_custoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$centro_custoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Centro_custo.
     * @param {centro_custoCreateArgs} args - Arguments to create a Centro_custo.
     * @example
     * // Create one Centro_custo
     * const Centro_custo = await prisma.centro_custo.create({
     *   data: {
     *     // ... data to create a Centro_custo
     *   }
     * })
     * 
     */
    create<T extends centro_custoCreateArgs>(args: SelectSubset<T, centro_custoCreateArgs<ExtArgs>>): Prisma__centro_custoClient<$Result.GetResult<Prisma.$centro_custoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Centro_custos.
     * @param {centro_custoCreateManyArgs} args - Arguments to create many Centro_custos.
     * @example
     * // Create many Centro_custos
     * const centro_custo = await prisma.centro_custo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends centro_custoCreateManyArgs>(args?: SelectSubset<T, centro_custoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Centro_custo.
     * @param {centro_custoDeleteArgs} args - Arguments to delete one Centro_custo.
     * @example
     * // Delete one Centro_custo
     * const Centro_custo = await prisma.centro_custo.delete({
     *   where: {
     *     // ... filter to delete one Centro_custo
     *   }
     * })
     * 
     */
    delete<T extends centro_custoDeleteArgs>(args: SelectSubset<T, centro_custoDeleteArgs<ExtArgs>>): Prisma__centro_custoClient<$Result.GetResult<Prisma.$centro_custoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Centro_custo.
     * @param {centro_custoUpdateArgs} args - Arguments to update one Centro_custo.
     * @example
     * // Update one Centro_custo
     * const centro_custo = await prisma.centro_custo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends centro_custoUpdateArgs>(args: SelectSubset<T, centro_custoUpdateArgs<ExtArgs>>): Prisma__centro_custoClient<$Result.GetResult<Prisma.$centro_custoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Centro_custos.
     * @param {centro_custoDeleteManyArgs} args - Arguments to filter Centro_custos to delete.
     * @example
     * // Delete a few Centro_custos
     * const { count } = await prisma.centro_custo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends centro_custoDeleteManyArgs>(args?: SelectSubset<T, centro_custoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Centro_custos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centro_custoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Centro_custos
     * const centro_custo = await prisma.centro_custo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends centro_custoUpdateManyArgs>(args: SelectSubset<T, centro_custoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Centro_custo.
     * @param {centro_custoUpsertArgs} args - Arguments to update or create a Centro_custo.
     * @example
     * // Update or create a Centro_custo
     * const centro_custo = await prisma.centro_custo.upsert({
     *   create: {
     *     // ... data to create a Centro_custo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Centro_custo we want to update
     *   }
     * })
     */
    upsert<T extends centro_custoUpsertArgs>(args: SelectSubset<T, centro_custoUpsertArgs<ExtArgs>>): Prisma__centro_custoClient<$Result.GetResult<Prisma.$centro_custoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Centro_custos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centro_custoCountArgs} args - Arguments to filter Centro_custos to count.
     * @example
     * // Count the number of Centro_custos
     * const count = await prisma.centro_custo.count({
     *   where: {
     *     // ... the filter for the Centro_custos we want to count
     *   }
     * })
    **/
    count<T extends centro_custoCountArgs>(
      args?: Subset<T, centro_custoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Centro_custoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Centro_custo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Centro_custoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Centro_custoAggregateArgs>(args: Subset<T, Centro_custoAggregateArgs>): Prisma.PrismaPromise<GetCentro_custoAggregateType<T>>

    /**
     * Group by Centro_custo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centro_custoGroupByArgs} args - Group by arguments.
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
      T extends centro_custoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: centro_custoGroupByArgs['orderBy'] }
        : { orderBy?: centro_custoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, centro_custoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCentro_custoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the centro_custo model
   */
  readonly fields: centro_custoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for centro_custo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__centro_custoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the centro_custo model
   */
  interface centro_custoFieldRefs {
    readonly id: FieldRef<"centro_custo", 'Int'>
    readonly nome: FieldRef<"centro_custo", 'String'>
    readonly nome_totvs: FieldRef<"centro_custo", 'String'>
    readonly nome_organograma: FieldRef<"centro_custo", 'String'>
    readonly codigo_centro_custo: FieldRef<"centro_custo", 'String'>
    readonly area_id: FieldRef<"centro_custo", 'Int'>
    readonly setor_id: FieldRef<"centro_custo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * centro_custo findUnique
   */
  export type centro_custoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centro_custo
     */
    select?: centro_custoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centro_custo
     */
    omit?: centro_custoOmit<ExtArgs> | null
    /**
     * Filter, which centro_custo to fetch.
     */
    where: centro_custoWhereUniqueInput
  }

  /**
   * centro_custo findUniqueOrThrow
   */
  export type centro_custoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centro_custo
     */
    select?: centro_custoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centro_custo
     */
    omit?: centro_custoOmit<ExtArgs> | null
    /**
     * Filter, which centro_custo to fetch.
     */
    where: centro_custoWhereUniqueInput
  }

  /**
   * centro_custo findFirst
   */
  export type centro_custoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centro_custo
     */
    select?: centro_custoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centro_custo
     */
    omit?: centro_custoOmit<ExtArgs> | null
    /**
     * Filter, which centro_custo to fetch.
     */
    where?: centro_custoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of centro_custos to fetch.
     */
    orderBy?: centro_custoOrderByWithRelationInput | centro_custoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for centro_custos.
     */
    cursor?: centro_custoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` centro_custos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` centro_custos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of centro_custos.
     */
    distinct?: Centro_custoScalarFieldEnum | Centro_custoScalarFieldEnum[]
  }

  /**
   * centro_custo findFirstOrThrow
   */
  export type centro_custoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centro_custo
     */
    select?: centro_custoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centro_custo
     */
    omit?: centro_custoOmit<ExtArgs> | null
    /**
     * Filter, which centro_custo to fetch.
     */
    where?: centro_custoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of centro_custos to fetch.
     */
    orderBy?: centro_custoOrderByWithRelationInput | centro_custoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for centro_custos.
     */
    cursor?: centro_custoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` centro_custos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` centro_custos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of centro_custos.
     */
    distinct?: Centro_custoScalarFieldEnum | Centro_custoScalarFieldEnum[]
  }

  /**
   * centro_custo findMany
   */
  export type centro_custoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centro_custo
     */
    select?: centro_custoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centro_custo
     */
    omit?: centro_custoOmit<ExtArgs> | null
    /**
     * Filter, which centro_custos to fetch.
     */
    where?: centro_custoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of centro_custos to fetch.
     */
    orderBy?: centro_custoOrderByWithRelationInput | centro_custoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing centro_custos.
     */
    cursor?: centro_custoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` centro_custos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` centro_custos.
     */
    skip?: number
    distinct?: Centro_custoScalarFieldEnum | Centro_custoScalarFieldEnum[]
  }

  /**
   * centro_custo create
   */
  export type centro_custoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centro_custo
     */
    select?: centro_custoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centro_custo
     */
    omit?: centro_custoOmit<ExtArgs> | null
    /**
     * The data needed to create a centro_custo.
     */
    data: XOR<centro_custoCreateInput, centro_custoUncheckedCreateInput>
  }

  /**
   * centro_custo createMany
   */
  export type centro_custoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many centro_custos.
     */
    data: centro_custoCreateManyInput | centro_custoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * centro_custo update
   */
  export type centro_custoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centro_custo
     */
    select?: centro_custoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centro_custo
     */
    omit?: centro_custoOmit<ExtArgs> | null
    /**
     * The data needed to update a centro_custo.
     */
    data: XOR<centro_custoUpdateInput, centro_custoUncheckedUpdateInput>
    /**
     * Choose, which centro_custo to update.
     */
    where: centro_custoWhereUniqueInput
  }

  /**
   * centro_custo updateMany
   */
  export type centro_custoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update centro_custos.
     */
    data: XOR<centro_custoUpdateManyMutationInput, centro_custoUncheckedUpdateManyInput>
    /**
     * Filter which centro_custos to update
     */
    where?: centro_custoWhereInput
    /**
     * Limit how many centro_custos to update.
     */
    limit?: number
  }

  /**
   * centro_custo upsert
   */
  export type centro_custoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centro_custo
     */
    select?: centro_custoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centro_custo
     */
    omit?: centro_custoOmit<ExtArgs> | null
    /**
     * The filter to search for the centro_custo to update in case it exists.
     */
    where: centro_custoWhereUniqueInput
    /**
     * In case the centro_custo found by the `where` argument doesn't exist, create a new centro_custo with this data.
     */
    create: XOR<centro_custoCreateInput, centro_custoUncheckedCreateInput>
    /**
     * In case the centro_custo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<centro_custoUpdateInput, centro_custoUncheckedUpdateInput>
  }

  /**
   * centro_custo delete
   */
  export type centro_custoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centro_custo
     */
    select?: centro_custoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centro_custo
     */
    omit?: centro_custoOmit<ExtArgs> | null
    /**
     * Filter which centro_custo to delete.
     */
    where: centro_custoWhereUniqueInput
  }

  /**
   * centro_custo deleteMany
   */
  export type centro_custoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which centro_custos to delete
     */
    where?: centro_custoWhereInput
    /**
     * Limit how many centro_custos to delete.
     */
    limit?: number
  }

  /**
   * centro_custo without action
   */
  export type centro_custoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centro_custo
     */
    select?: centro_custoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the centro_custo
     */
    omit?: centro_custoOmit<ExtArgs> | null
  }


  /**
   * Model colaboradores
   */

  export type AggregateColaboradores = {
    _count: ColaboradoresCountAggregateOutputType | null
    _avg: ColaboradoresAvgAggregateOutputType | null
    _sum: ColaboradoresSumAggregateOutputType | null
    _min: ColaboradoresMinAggregateOutputType | null
    _max: ColaboradoresMaxAggregateOutputType | null
  }

  export type ColaboradoresAvgAggregateOutputType = {
    id: number | null
    hierarquia_id: number | null
    ativo: number | null
  }

  export type ColaboradoresSumAggregateOutputType = {
    id: number | null
    hierarquia_id: number | null
    ativo: number | null
  }

  export type ColaboradoresMinAggregateOutputType = {
    id: number | null
    nome: string | null
    nome_totvs: string | null
    matricula: string | null
    cargo: string | null
    foto: string | null
    data_admissao: Date | null
    data_demissao: Date | null
    hierarquia_id: number | null
    area_id: string | null
    setor_id: string | null
    centro_custo_id: string | null
    comite_id: string | null
    comissao_id: string | null
    programa_id: string | null
    equipe_id: string | null
    ws_id: string | null
    ativo: number | null
  }

  export type ColaboradoresMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    nome_totvs: string | null
    matricula: string | null
    cargo: string | null
    foto: string | null
    data_admissao: Date | null
    data_demissao: Date | null
    hierarquia_id: number | null
    area_id: string | null
    setor_id: string | null
    centro_custo_id: string | null
    comite_id: string | null
    comissao_id: string | null
    programa_id: string | null
    equipe_id: string | null
    ws_id: string | null
    ativo: number | null
  }

  export type ColaboradoresCountAggregateOutputType = {
    id: number
    nome: number
    nome_totvs: number
    matricula: number
    cargo: number
    foto: number
    data_admissao: number
    data_demissao: number
    hierarquia_id: number
    area_id: number
    setor_id: number
    centro_custo_id: number
    comite_id: number
    comissao_id: number
    programa_id: number
    equipe_id: number
    ws_id: number
    ativo: number
    _all: number
  }


  export type ColaboradoresAvgAggregateInputType = {
    id?: true
    hierarquia_id?: true
    ativo?: true
  }

  export type ColaboradoresSumAggregateInputType = {
    id?: true
    hierarquia_id?: true
    ativo?: true
  }

  export type ColaboradoresMinAggregateInputType = {
    id?: true
    nome?: true
    nome_totvs?: true
    matricula?: true
    cargo?: true
    foto?: true
    data_admissao?: true
    data_demissao?: true
    hierarquia_id?: true
    area_id?: true
    setor_id?: true
    centro_custo_id?: true
    comite_id?: true
    comissao_id?: true
    programa_id?: true
    equipe_id?: true
    ws_id?: true
    ativo?: true
  }

  export type ColaboradoresMaxAggregateInputType = {
    id?: true
    nome?: true
    nome_totvs?: true
    matricula?: true
    cargo?: true
    foto?: true
    data_admissao?: true
    data_demissao?: true
    hierarquia_id?: true
    area_id?: true
    setor_id?: true
    centro_custo_id?: true
    comite_id?: true
    comissao_id?: true
    programa_id?: true
    equipe_id?: true
    ws_id?: true
    ativo?: true
  }

  export type ColaboradoresCountAggregateInputType = {
    id?: true
    nome?: true
    nome_totvs?: true
    matricula?: true
    cargo?: true
    foto?: true
    data_admissao?: true
    data_demissao?: true
    hierarquia_id?: true
    area_id?: true
    setor_id?: true
    centro_custo_id?: true
    comite_id?: true
    comissao_id?: true
    programa_id?: true
    equipe_id?: true
    ws_id?: true
    ativo?: true
    _all?: true
  }

  export type ColaboradoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which colaboradores to aggregate.
     */
    where?: colaboradoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of colaboradores to fetch.
     */
    orderBy?: colaboradoresOrderByWithRelationInput | colaboradoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: colaboradoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` colaboradores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` colaboradores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned colaboradores
    **/
    _count?: true | ColaboradoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ColaboradoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ColaboradoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColaboradoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColaboradoresMaxAggregateInputType
  }

  export type GetColaboradoresAggregateType<T extends ColaboradoresAggregateArgs> = {
        [P in keyof T & keyof AggregateColaboradores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColaboradores[P]>
      : GetScalarType<T[P], AggregateColaboradores[P]>
  }




  export type colaboradoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: colaboradoresWhereInput
    orderBy?: colaboradoresOrderByWithAggregationInput | colaboradoresOrderByWithAggregationInput[]
    by: ColaboradoresScalarFieldEnum[] | ColaboradoresScalarFieldEnum
    having?: colaboradoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColaboradoresCountAggregateInputType | true
    _avg?: ColaboradoresAvgAggregateInputType
    _sum?: ColaboradoresSumAggregateInputType
    _min?: ColaboradoresMinAggregateInputType
    _max?: ColaboradoresMaxAggregateInputType
  }

  export type ColaboradoresGroupByOutputType = {
    id: number
    nome: string
    nome_totvs: string | null
    matricula: string | null
    cargo: string | null
    foto: string | null
    data_admissao: Date | null
    data_demissao: Date | null
    hierarquia_id: number | null
    area_id: string | null
    setor_id: string | null
    centro_custo_id: string | null
    comite_id: string | null
    comissao_id: string | null
    programa_id: string | null
    equipe_id: string | null
    ws_id: string | null
    ativo: number | null
    _count: ColaboradoresCountAggregateOutputType | null
    _avg: ColaboradoresAvgAggregateOutputType | null
    _sum: ColaboradoresSumAggregateOutputType | null
    _min: ColaboradoresMinAggregateOutputType | null
    _max: ColaboradoresMaxAggregateOutputType | null
  }

  type GetColaboradoresGroupByPayload<T extends colaboradoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColaboradoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColaboradoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColaboradoresGroupByOutputType[P]>
            : GetScalarType<T[P], ColaboradoresGroupByOutputType[P]>
        }
      >
    >


  export type colaboradoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    nome_totvs?: boolean
    matricula?: boolean
    cargo?: boolean
    foto?: boolean
    data_admissao?: boolean
    data_demissao?: boolean
    hierarquia_id?: boolean
    area_id?: boolean
    setor_id?: boolean
    centro_custo_id?: boolean
    comite_id?: boolean
    comissao_id?: boolean
    programa_id?: boolean
    equipe_id?: boolean
    ws_id?: boolean
    ativo?: boolean
  }, ExtArgs["result"]["colaboradores"]>



  export type colaboradoresSelectScalar = {
    id?: boolean
    nome?: boolean
    nome_totvs?: boolean
    matricula?: boolean
    cargo?: boolean
    foto?: boolean
    data_admissao?: boolean
    data_demissao?: boolean
    hierarquia_id?: boolean
    area_id?: boolean
    setor_id?: boolean
    centro_custo_id?: boolean
    comite_id?: boolean
    comissao_id?: boolean
    programa_id?: boolean
    equipe_id?: boolean
    ws_id?: boolean
    ativo?: boolean
  }

  export type colaboradoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "nome_totvs" | "matricula" | "cargo" | "foto" | "data_admissao" | "data_demissao" | "hierarquia_id" | "area_id" | "setor_id" | "centro_custo_id" | "comite_id" | "comissao_id" | "programa_id" | "equipe_id" | "ws_id" | "ativo", ExtArgs["result"]["colaboradores"]>

  export type $colaboradoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "colaboradores"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      nome_totvs: string | null
      matricula: string | null
      cargo: string | null
      foto: string | null
      data_admissao: Date | null
      data_demissao: Date | null
      hierarquia_id: number | null
      area_id: string | null
      setor_id: string | null
      centro_custo_id: string | null
      comite_id: string | null
      comissao_id: string | null
      programa_id: string | null
      equipe_id: string | null
      ws_id: string | null
      ativo: number | null
    }, ExtArgs["result"]["colaboradores"]>
    composites: {}
  }

  type colaboradoresGetPayload<S extends boolean | null | undefined | colaboradoresDefaultArgs> = $Result.GetResult<Prisma.$colaboradoresPayload, S>

  type colaboradoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<colaboradoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ColaboradoresCountAggregateInputType | true
    }

  export interface colaboradoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['colaboradores'], meta: { name: 'colaboradores' } }
    /**
     * Find zero or one Colaboradores that matches the filter.
     * @param {colaboradoresFindUniqueArgs} args - Arguments to find a Colaboradores
     * @example
     * // Get one Colaboradores
     * const colaboradores = await prisma.colaboradores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends colaboradoresFindUniqueArgs>(args: SelectSubset<T, colaboradoresFindUniqueArgs<ExtArgs>>): Prisma__colaboradoresClient<$Result.GetResult<Prisma.$colaboradoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Colaboradores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {colaboradoresFindUniqueOrThrowArgs} args - Arguments to find a Colaboradores
     * @example
     * // Get one Colaboradores
     * const colaboradores = await prisma.colaboradores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends colaboradoresFindUniqueOrThrowArgs>(args: SelectSubset<T, colaboradoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__colaboradoresClient<$Result.GetResult<Prisma.$colaboradoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Colaboradores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colaboradoresFindFirstArgs} args - Arguments to find a Colaboradores
     * @example
     * // Get one Colaboradores
     * const colaboradores = await prisma.colaboradores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends colaboradoresFindFirstArgs>(args?: SelectSubset<T, colaboradoresFindFirstArgs<ExtArgs>>): Prisma__colaboradoresClient<$Result.GetResult<Prisma.$colaboradoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Colaboradores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colaboradoresFindFirstOrThrowArgs} args - Arguments to find a Colaboradores
     * @example
     * // Get one Colaboradores
     * const colaboradores = await prisma.colaboradores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends colaboradoresFindFirstOrThrowArgs>(args?: SelectSubset<T, colaboradoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__colaboradoresClient<$Result.GetResult<Prisma.$colaboradoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Colaboradores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colaboradoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Colaboradores
     * const colaboradores = await prisma.colaboradores.findMany()
     * 
     * // Get first 10 Colaboradores
     * const colaboradores = await prisma.colaboradores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const colaboradoresWithIdOnly = await prisma.colaboradores.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends colaboradoresFindManyArgs>(args?: SelectSubset<T, colaboradoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$colaboradoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Colaboradores.
     * @param {colaboradoresCreateArgs} args - Arguments to create a Colaboradores.
     * @example
     * // Create one Colaboradores
     * const Colaboradores = await prisma.colaboradores.create({
     *   data: {
     *     // ... data to create a Colaboradores
     *   }
     * })
     * 
     */
    create<T extends colaboradoresCreateArgs>(args: SelectSubset<T, colaboradoresCreateArgs<ExtArgs>>): Prisma__colaboradoresClient<$Result.GetResult<Prisma.$colaboradoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Colaboradores.
     * @param {colaboradoresCreateManyArgs} args - Arguments to create many Colaboradores.
     * @example
     * // Create many Colaboradores
     * const colaboradores = await prisma.colaboradores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends colaboradoresCreateManyArgs>(args?: SelectSubset<T, colaboradoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Colaboradores.
     * @param {colaboradoresDeleteArgs} args - Arguments to delete one Colaboradores.
     * @example
     * // Delete one Colaboradores
     * const Colaboradores = await prisma.colaboradores.delete({
     *   where: {
     *     // ... filter to delete one Colaboradores
     *   }
     * })
     * 
     */
    delete<T extends colaboradoresDeleteArgs>(args: SelectSubset<T, colaboradoresDeleteArgs<ExtArgs>>): Prisma__colaboradoresClient<$Result.GetResult<Prisma.$colaboradoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Colaboradores.
     * @param {colaboradoresUpdateArgs} args - Arguments to update one Colaboradores.
     * @example
     * // Update one Colaboradores
     * const colaboradores = await prisma.colaboradores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends colaboradoresUpdateArgs>(args: SelectSubset<T, colaboradoresUpdateArgs<ExtArgs>>): Prisma__colaboradoresClient<$Result.GetResult<Prisma.$colaboradoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Colaboradores.
     * @param {colaboradoresDeleteManyArgs} args - Arguments to filter Colaboradores to delete.
     * @example
     * // Delete a few Colaboradores
     * const { count } = await prisma.colaboradores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends colaboradoresDeleteManyArgs>(args?: SelectSubset<T, colaboradoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colaboradores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colaboradoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Colaboradores
     * const colaboradores = await prisma.colaboradores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends colaboradoresUpdateManyArgs>(args: SelectSubset<T, colaboradoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Colaboradores.
     * @param {colaboradoresUpsertArgs} args - Arguments to update or create a Colaboradores.
     * @example
     * // Update or create a Colaboradores
     * const colaboradores = await prisma.colaboradores.upsert({
     *   create: {
     *     // ... data to create a Colaboradores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Colaboradores we want to update
     *   }
     * })
     */
    upsert<T extends colaboradoresUpsertArgs>(args: SelectSubset<T, colaboradoresUpsertArgs<ExtArgs>>): Prisma__colaboradoresClient<$Result.GetResult<Prisma.$colaboradoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Colaboradores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colaboradoresCountArgs} args - Arguments to filter Colaboradores to count.
     * @example
     * // Count the number of Colaboradores
     * const count = await prisma.colaboradores.count({
     *   where: {
     *     // ... the filter for the Colaboradores we want to count
     *   }
     * })
    **/
    count<T extends colaboradoresCountArgs>(
      args?: Subset<T, colaboradoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColaboradoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Colaboradores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColaboradoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ColaboradoresAggregateArgs>(args: Subset<T, ColaboradoresAggregateArgs>): Prisma.PrismaPromise<GetColaboradoresAggregateType<T>>

    /**
     * Group by Colaboradores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colaboradoresGroupByArgs} args - Group by arguments.
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
      T extends colaboradoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: colaboradoresGroupByArgs['orderBy'] }
        : { orderBy?: colaboradoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, colaboradoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColaboradoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the colaboradores model
   */
  readonly fields: colaboradoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for colaboradores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__colaboradoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the colaboradores model
   */
  interface colaboradoresFieldRefs {
    readonly id: FieldRef<"colaboradores", 'Int'>
    readonly nome: FieldRef<"colaboradores", 'String'>
    readonly nome_totvs: FieldRef<"colaboradores", 'String'>
    readonly matricula: FieldRef<"colaboradores", 'String'>
    readonly cargo: FieldRef<"colaboradores", 'String'>
    readonly foto: FieldRef<"colaboradores", 'String'>
    readonly data_admissao: FieldRef<"colaboradores", 'DateTime'>
    readonly data_demissao: FieldRef<"colaboradores", 'DateTime'>
    readonly hierarquia_id: FieldRef<"colaboradores", 'Int'>
    readonly area_id: FieldRef<"colaboradores", 'String'>
    readonly setor_id: FieldRef<"colaboradores", 'String'>
    readonly centro_custo_id: FieldRef<"colaboradores", 'String'>
    readonly comite_id: FieldRef<"colaboradores", 'String'>
    readonly comissao_id: FieldRef<"colaboradores", 'String'>
    readonly programa_id: FieldRef<"colaboradores", 'String'>
    readonly equipe_id: FieldRef<"colaboradores", 'String'>
    readonly ws_id: FieldRef<"colaboradores", 'String'>
    readonly ativo: FieldRef<"colaboradores", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * colaboradores findUnique
   */
  export type colaboradoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colaboradores
     */
    select?: colaboradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colaboradores
     */
    omit?: colaboradoresOmit<ExtArgs> | null
    /**
     * Filter, which colaboradores to fetch.
     */
    where: colaboradoresWhereUniqueInput
  }

  /**
   * colaboradores findUniqueOrThrow
   */
  export type colaboradoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colaboradores
     */
    select?: colaboradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colaboradores
     */
    omit?: colaboradoresOmit<ExtArgs> | null
    /**
     * Filter, which colaboradores to fetch.
     */
    where: colaboradoresWhereUniqueInput
  }

  /**
   * colaboradores findFirst
   */
  export type colaboradoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colaboradores
     */
    select?: colaboradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colaboradores
     */
    omit?: colaboradoresOmit<ExtArgs> | null
    /**
     * Filter, which colaboradores to fetch.
     */
    where?: colaboradoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of colaboradores to fetch.
     */
    orderBy?: colaboradoresOrderByWithRelationInput | colaboradoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for colaboradores.
     */
    cursor?: colaboradoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` colaboradores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` colaboradores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of colaboradores.
     */
    distinct?: ColaboradoresScalarFieldEnum | ColaboradoresScalarFieldEnum[]
  }

  /**
   * colaboradores findFirstOrThrow
   */
  export type colaboradoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colaboradores
     */
    select?: colaboradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colaboradores
     */
    omit?: colaboradoresOmit<ExtArgs> | null
    /**
     * Filter, which colaboradores to fetch.
     */
    where?: colaboradoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of colaboradores to fetch.
     */
    orderBy?: colaboradoresOrderByWithRelationInput | colaboradoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for colaboradores.
     */
    cursor?: colaboradoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` colaboradores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` colaboradores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of colaboradores.
     */
    distinct?: ColaboradoresScalarFieldEnum | ColaboradoresScalarFieldEnum[]
  }

  /**
   * colaboradores findMany
   */
  export type colaboradoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colaboradores
     */
    select?: colaboradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colaboradores
     */
    omit?: colaboradoresOmit<ExtArgs> | null
    /**
     * Filter, which colaboradores to fetch.
     */
    where?: colaboradoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of colaboradores to fetch.
     */
    orderBy?: colaboradoresOrderByWithRelationInput | colaboradoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing colaboradores.
     */
    cursor?: colaboradoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` colaboradores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` colaboradores.
     */
    skip?: number
    distinct?: ColaboradoresScalarFieldEnum | ColaboradoresScalarFieldEnum[]
  }

  /**
   * colaboradores create
   */
  export type colaboradoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colaboradores
     */
    select?: colaboradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colaboradores
     */
    omit?: colaboradoresOmit<ExtArgs> | null
    /**
     * The data needed to create a colaboradores.
     */
    data: XOR<colaboradoresCreateInput, colaboradoresUncheckedCreateInput>
  }

  /**
   * colaboradores createMany
   */
  export type colaboradoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many colaboradores.
     */
    data: colaboradoresCreateManyInput | colaboradoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * colaboradores update
   */
  export type colaboradoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colaboradores
     */
    select?: colaboradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colaboradores
     */
    omit?: colaboradoresOmit<ExtArgs> | null
    /**
     * The data needed to update a colaboradores.
     */
    data: XOR<colaboradoresUpdateInput, colaboradoresUncheckedUpdateInput>
    /**
     * Choose, which colaboradores to update.
     */
    where: colaboradoresWhereUniqueInput
  }

  /**
   * colaboradores updateMany
   */
  export type colaboradoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update colaboradores.
     */
    data: XOR<colaboradoresUpdateManyMutationInput, colaboradoresUncheckedUpdateManyInput>
    /**
     * Filter which colaboradores to update
     */
    where?: colaboradoresWhereInput
    /**
     * Limit how many colaboradores to update.
     */
    limit?: number
  }

  /**
   * colaboradores upsert
   */
  export type colaboradoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colaboradores
     */
    select?: colaboradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colaboradores
     */
    omit?: colaboradoresOmit<ExtArgs> | null
    /**
     * The filter to search for the colaboradores to update in case it exists.
     */
    where: colaboradoresWhereUniqueInput
    /**
     * In case the colaboradores found by the `where` argument doesn't exist, create a new colaboradores with this data.
     */
    create: XOR<colaboradoresCreateInput, colaboradoresUncheckedCreateInput>
    /**
     * In case the colaboradores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<colaboradoresUpdateInput, colaboradoresUncheckedUpdateInput>
  }

  /**
   * colaboradores delete
   */
  export type colaboradoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colaboradores
     */
    select?: colaboradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colaboradores
     */
    omit?: colaboradoresOmit<ExtArgs> | null
    /**
     * Filter which colaboradores to delete.
     */
    where: colaboradoresWhereUniqueInput
  }

  /**
   * colaboradores deleteMany
   */
  export type colaboradoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which colaboradores to delete
     */
    where?: colaboradoresWhereInput
    /**
     * Limit how many colaboradores to delete.
     */
    limit?: number
  }

  /**
   * colaboradores without action
   */
  export type colaboradoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colaboradores
     */
    select?: colaboradoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colaboradores
     */
    omit?: colaboradoresOmit<ExtArgs> | null
  }


  /**
   * Model comissoes
   */

  export type AggregateComissoes = {
    _count: ComissoesCountAggregateOutputType | null
    _avg: ComissoesAvgAggregateOutputType | null
    _sum: ComissoesSumAggregateOutputType | null
    _min: ComissoesMinAggregateOutputType | null
    _max: ComissoesMaxAggregateOutputType | null
  }

  export type ComissoesAvgAggregateOutputType = {
    id: number | null
  }

  export type ComissoesSumAggregateOutputType = {
    id: number | null
  }

  export type ComissoesMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type ComissoesMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type ComissoesCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type ComissoesAvgAggregateInputType = {
    id?: true
  }

  export type ComissoesSumAggregateInputType = {
    id?: true
  }

  export type ComissoesMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type ComissoesMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type ComissoesCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type ComissoesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comissoes to aggregate.
     */
    where?: comissoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comissoes to fetch.
     */
    orderBy?: comissoesOrderByWithRelationInput | comissoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: comissoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comissoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comissoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comissoes
    **/
    _count?: true | ComissoesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComissoesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComissoesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComissoesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComissoesMaxAggregateInputType
  }

  export type GetComissoesAggregateType<T extends ComissoesAggregateArgs> = {
        [P in keyof T & keyof AggregateComissoes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComissoes[P]>
      : GetScalarType<T[P], AggregateComissoes[P]>
  }




  export type comissoesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: comissoesWhereInput
    orderBy?: comissoesOrderByWithAggregationInput | comissoesOrderByWithAggregationInput[]
    by: ComissoesScalarFieldEnum[] | ComissoesScalarFieldEnum
    having?: comissoesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComissoesCountAggregateInputType | true
    _avg?: ComissoesAvgAggregateInputType
    _sum?: ComissoesSumAggregateInputType
    _min?: ComissoesMinAggregateInputType
    _max?: ComissoesMaxAggregateInputType
  }

  export type ComissoesGroupByOutputType = {
    id: number
    nome: string
    _count: ComissoesCountAggregateOutputType | null
    _avg: ComissoesAvgAggregateOutputType | null
    _sum: ComissoesSumAggregateOutputType | null
    _min: ComissoesMinAggregateOutputType | null
    _max: ComissoesMaxAggregateOutputType | null
  }

  type GetComissoesGroupByPayload<T extends comissoesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComissoesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComissoesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComissoesGroupByOutputType[P]>
            : GetScalarType<T[P], ComissoesGroupByOutputType[P]>
        }
      >
    >


  export type comissoesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["comissoes"]>



  export type comissoesSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type comissoesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["comissoes"]>

  export type $comissoesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comissoes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["comissoes"]>
    composites: {}
  }

  type comissoesGetPayload<S extends boolean | null | undefined | comissoesDefaultArgs> = $Result.GetResult<Prisma.$comissoesPayload, S>

  type comissoesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<comissoesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComissoesCountAggregateInputType | true
    }

  export interface comissoesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comissoes'], meta: { name: 'comissoes' } }
    /**
     * Find zero or one Comissoes that matches the filter.
     * @param {comissoesFindUniqueArgs} args - Arguments to find a Comissoes
     * @example
     * // Get one Comissoes
     * const comissoes = await prisma.comissoes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends comissoesFindUniqueArgs>(args: SelectSubset<T, comissoesFindUniqueArgs<ExtArgs>>): Prisma__comissoesClient<$Result.GetResult<Prisma.$comissoesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comissoes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {comissoesFindUniqueOrThrowArgs} args - Arguments to find a Comissoes
     * @example
     * // Get one Comissoes
     * const comissoes = await prisma.comissoes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends comissoesFindUniqueOrThrowArgs>(args: SelectSubset<T, comissoesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__comissoesClient<$Result.GetResult<Prisma.$comissoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comissoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comissoesFindFirstArgs} args - Arguments to find a Comissoes
     * @example
     * // Get one Comissoes
     * const comissoes = await prisma.comissoes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends comissoesFindFirstArgs>(args?: SelectSubset<T, comissoesFindFirstArgs<ExtArgs>>): Prisma__comissoesClient<$Result.GetResult<Prisma.$comissoesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comissoes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comissoesFindFirstOrThrowArgs} args - Arguments to find a Comissoes
     * @example
     * // Get one Comissoes
     * const comissoes = await prisma.comissoes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends comissoesFindFirstOrThrowArgs>(args?: SelectSubset<T, comissoesFindFirstOrThrowArgs<ExtArgs>>): Prisma__comissoesClient<$Result.GetResult<Prisma.$comissoesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comissoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comissoesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comissoes
     * const comissoes = await prisma.comissoes.findMany()
     * 
     * // Get first 10 Comissoes
     * const comissoes = await prisma.comissoes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comissoesWithIdOnly = await prisma.comissoes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends comissoesFindManyArgs>(args?: SelectSubset<T, comissoesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comissoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comissoes.
     * @param {comissoesCreateArgs} args - Arguments to create a Comissoes.
     * @example
     * // Create one Comissoes
     * const Comissoes = await prisma.comissoes.create({
     *   data: {
     *     // ... data to create a Comissoes
     *   }
     * })
     * 
     */
    create<T extends comissoesCreateArgs>(args: SelectSubset<T, comissoesCreateArgs<ExtArgs>>): Prisma__comissoesClient<$Result.GetResult<Prisma.$comissoesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comissoes.
     * @param {comissoesCreateManyArgs} args - Arguments to create many Comissoes.
     * @example
     * // Create many Comissoes
     * const comissoes = await prisma.comissoes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends comissoesCreateManyArgs>(args?: SelectSubset<T, comissoesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comissoes.
     * @param {comissoesDeleteArgs} args - Arguments to delete one Comissoes.
     * @example
     * // Delete one Comissoes
     * const Comissoes = await prisma.comissoes.delete({
     *   where: {
     *     // ... filter to delete one Comissoes
     *   }
     * })
     * 
     */
    delete<T extends comissoesDeleteArgs>(args: SelectSubset<T, comissoesDeleteArgs<ExtArgs>>): Prisma__comissoesClient<$Result.GetResult<Prisma.$comissoesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comissoes.
     * @param {comissoesUpdateArgs} args - Arguments to update one Comissoes.
     * @example
     * // Update one Comissoes
     * const comissoes = await prisma.comissoes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends comissoesUpdateArgs>(args: SelectSubset<T, comissoesUpdateArgs<ExtArgs>>): Prisma__comissoesClient<$Result.GetResult<Prisma.$comissoesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comissoes.
     * @param {comissoesDeleteManyArgs} args - Arguments to filter Comissoes to delete.
     * @example
     * // Delete a few Comissoes
     * const { count } = await prisma.comissoes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends comissoesDeleteManyArgs>(args?: SelectSubset<T, comissoesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comissoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comissoesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comissoes
     * const comissoes = await prisma.comissoes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends comissoesUpdateManyArgs>(args: SelectSubset<T, comissoesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comissoes.
     * @param {comissoesUpsertArgs} args - Arguments to update or create a Comissoes.
     * @example
     * // Update or create a Comissoes
     * const comissoes = await prisma.comissoes.upsert({
     *   create: {
     *     // ... data to create a Comissoes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comissoes we want to update
     *   }
     * })
     */
    upsert<T extends comissoesUpsertArgs>(args: SelectSubset<T, comissoesUpsertArgs<ExtArgs>>): Prisma__comissoesClient<$Result.GetResult<Prisma.$comissoesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comissoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comissoesCountArgs} args - Arguments to filter Comissoes to count.
     * @example
     * // Count the number of Comissoes
     * const count = await prisma.comissoes.count({
     *   where: {
     *     // ... the filter for the Comissoes we want to count
     *   }
     * })
    **/
    count<T extends comissoesCountArgs>(
      args?: Subset<T, comissoesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComissoesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comissoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComissoesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComissoesAggregateArgs>(args: Subset<T, ComissoesAggregateArgs>): Prisma.PrismaPromise<GetComissoesAggregateType<T>>

    /**
     * Group by Comissoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comissoesGroupByArgs} args - Group by arguments.
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
      T extends comissoesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: comissoesGroupByArgs['orderBy'] }
        : { orderBy?: comissoesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, comissoesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComissoesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comissoes model
   */
  readonly fields: comissoesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comissoes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__comissoesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the comissoes model
   */
  interface comissoesFieldRefs {
    readonly id: FieldRef<"comissoes", 'Int'>
    readonly nome: FieldRef<"comissoes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * comissoes findUnique
   */
  export type comissoesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comissoes
     */
    select?: comissoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comissoes
     */
    omit?: comissoesOmit<ExtArgs> | null
    /**
     * Filter, which comissoes to fetch.
     */
    where: comissoesWhereUniqueInput
  }

  /**
   * comissoes findUniqueOrThrow
   */
  export type comissoesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comissoes
     */
    select?: comissoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comissoes
     */
    omit?: comissoesOmit<ExtArgs> | null
    /**
     * Filter, which comissoes to fetch.
     */
    where: comissoesWhereUniqueInput
  }

  /**
   * comissoes findFirst
   */
  export type comissoesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comissoes
     */
    select?: comissoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comissoes
     */
    omit?: comissoesOmit<ExtArgs> | null
    /**
     * Filter, which comissoes to fetch.
     */
    where?: comissoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comissoes to fetch.
     */
    orderBy?: comissoesOrderByWithRelationInput | comissoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comissoes.
     */
    cursor?: comissoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comissoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comissoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comissoes.
     */
    distinct?: ComissoesScalarFieldEnum | ComissoesScalarFieldEnum[]
  }

  /**
   * comissoes findFirstOrThrow
   */
  export type comissoesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comissoes
     */
    select?: comissoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comissoes
     */
    omit?: comissoesOmit<ExtArgs> | null
    /**
     * Filter, which comissoes to fetch.
     */
    where?: comissoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comissoes to fetch.
     */
    orderBy?: comissoesOrderByWithRelationInput | comissoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comissoes.
     */
    cursor?: comissoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comissoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comissoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comissoes.
     */
    distinct?: ComissoesScalarFieldEnum | ComissoesScalarFieldEnum[]
  }

  /**
   * comissoes findMany
   */
  export type comissoesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comissoes
     */
    select?: comissoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comissoes
     */
    omit?: comissoesOmit<ExtArgs> | null
    /**
     * Filter, which comissoes to fetch.
     */
    where?: comissoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comissoes to fetch.
     */
    orderBy?: comissoesOrderByWithRelationInput | comissoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comissoes.
     */
    cursor?: comissoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comissoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comissoes.
     */
    skip?: number
    distinct?: ComissoesScalarFieldEnum | ComissoesScalarFieldEnum[]
  }

  /**
   * comissoes create
   */
  export type comissoesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comissoes
     */
    select?: comissoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comissoes
     */
    omit?: comissoesOmit<ExtArgs> | null
    /**
     * The data needed to create a comissoes.
     */
    data: XOR<comissoesCreateInput, comissoesUncheckedCreateInput>
  }

  /**
   * comissoes createMany
   */
  export type comissoesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comissoes.
     */
    data: comissoesCreateManyInput | comissoesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comissoes update
   */
  export type comissoesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comissoes
     */
    select?: comissoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comissoes
     */
    omit?: comissoesOmit<ExtArgs> | null
    /**
     * The data needed to update a comissoes.
     */
    data: XOR<comissoesUpdateInput, comissoesUncheckedUpdateInput>
    /**
     * Choose, which comissoes to update.
     */
    where: comissoesWhereUniqueInput
  }

  /**
   * comissoes updateMany
   */
  export type comissoesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comissoes.
     */
    data: XOR<comissoesUpdateManyMutationInput, comissoesUncheckedUpdateManyInput>
    /**
     * Filter which comissoes to update
     */
    where?: comissoesWhereInput
    /**
     * Limit how many comissoes to update.
     */
    limit?: number
  }

  /**
   * comissoes upsert
   */
  export type comissoesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comissoes
     */
    select?: comissoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comissoes
     */
    omit?: comissoesOmit<ExtArgs> | null
    /**
     * The filter to search for the comissoes to update in case it exists.
     */
    where: comissoesWhereUniqueInput
    /**
     * In case the comissoes found by the `where` argument doesn't exist, create a new comissoes with this data.
     */
    create: XOR<comissoesCreateInput, comissoesUncheckedCreateInput>
    /**
     * In case the comissoes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<comissoesUpdateInput, comissoesUncheckedUpdateInput>
  }

  /**
   * comissoes delete
   */
  export type comissoesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comissoes
     */
    select?: comissoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comissoes
     */
    omit?: comissoesOmit<ExtArgs> | null
    /**
     * Filter which comissoes to delete.
     */
    where: comissoesWhereUniqueInput
  }

  /**
   * comissoes deleteMany
   */
  export type comissoesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comissoes to delete
     */
    where?: comissoesWhereInput
    /**
     * Limit how many comissoes to delete.
     */
    limit?: number
  }

  /**
   * comissoes without action
   */
  export type comissoesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comissoes
     */
    select?: comissoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comissoes
     */
    omit?: comissoesOmit<ExtArgs> | null
  }


  /**
   * Model comites
   */

  export type AggregateComites = {
    _count: ComitesCountAggregateOutputType | null
    _avg: ComitesAvgAggregateOutputType | null
    _sum: ComitesSumAggregateOutputType | null
    _min: ComitesMinAggregateOutputType | null
    _max: ComitesMaxAggregateOutputType | null
  }

  export type ComitesAvgAggregateOutputType = {
    id: number | null
  }

  export type ComitesSumAggregateOutputType = {
    id: number | null
  }

  export type ComitesMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type ComitesMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type ComitesCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type ComitesAvgAggregateInputType = {
    id?: true
  }

  export type ComitesSumAggregateInputType = {
    id?: true
  }

  export type ComitesMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type ComitesMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type ComitesCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type ComitesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comites to aggregate.
     */
    where?: comitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comites to fetch.
     */
    orderBy?: comitesOrderByWithRelationInput | comitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: comitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comites
    **/
    _count?: true | ComitesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComitesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComitesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComitesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComitesMaxAggregateInputType
  }

  export type GetComitesAggregateType<T extends ComitesAggregateArgs> = {
        [P in keyof T & keyof AggregateComites]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComites[P]>
      : GetScalarType<T[P], AggregateComites[P]>
  }




  export type comitesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: comitesWhereInput
    orderBy?: comitesOrderByWithAggregationInput | comitesOrderByWithAggregationInput[]
    by: ComitesScalarFieldEnum[] | ComitesScalarFieldEnum
    having?: comitesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComitesCountAggregateInputType | true
    _avg?: ComitesAvgAggregateInputType
    _sum?: ComitesSumAggregateInputType
    _min?: ComitesMinAggregateInputType
    _max?: ComitesMaxAggregateInputType
  }

  export type ComitesGroupByOutputType = {
    id: number
    nome: string
    _count: ComitesCountAggregateOutputType | null
    _avg: ComitesAvgAggregateOutputType | null
    _sum: ComitesSumAggregateOutputType | null
    _min: ComitesMinAggregateOutputType | null
    _max: ComitesMaxAggregateOutputType | null
  }

  type GetComitesGroupByPayload<T extends comitesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComitesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComitesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComitesGroupByOutputType[P]>
            : GetScalarType<T[P], ComitesGroupByOutputType[P]>
        }
      >
    >


  export type comitesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["comites"]>



  export type comitesSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type comitesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["comites"]>

  export type $comitesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comites"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["comites"]>
    composites: {}
  }

  type comitesGetPayload<S extends boolean | null | undefined | comitesDefaultArgs> = $Result.GetResult<Prisma.$comitesPayload, S>

  type comitesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<comitesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComitesCountAggregateInputType | true
    }

  export interface comitesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comites'], meta: { name: 'comites' } }
    /**
     * Find zero or one Comites that matches the filter.
     * @param {comitesFindUniqueArgs} args - Arguments to find a Comites
     * @example
     * // Get one Comites
     * const comites = await prisma.comites.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends comitesFindUniqueArgs>(args: SelectSubset<T, comitesFindUniqueArgs<ExtArgs>>): Prisma__comitesClient<$Result.GetResult<Prisma.$comitesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comites that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {comitesFindUniqueOrThrowArgs} args - Arguments to find a Comites
     * @example
     * // Get one Comites
     * const comites = await prisma.comites.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends comitesFindUniqueOrThrowArgs>(args: SelectSubset<T, comitesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__comitesClient<$Result.GetResult<Prisma.$comitesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comitesFindFirstArgs} args - Arguments to find a Comites
     * @example
     * // Get one Comites
     * const comites = await prisma.comites.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends comitesFindFirstArgs>(args?: SelectSubset<T, comitesFindFirstArgs<ExtArgs>>): Prisma__comitesClient<$Result.GetResult<Prisma.$comitesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comites that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comitesFindFirstOrThrowArgs} args - Arguments to find a Comites
     * @example
     * // Get one Comites
     * const comites = await prisma.comites.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends comitesFindFirstOrThrowArgs>(args?: SelectSubset<T, comitesFindFirstOrThrowArgs<ExtArgs>>): Prisma__comitesClient<$Result.GetResult<Prisma.$comitesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comitesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comites
     * const comites = await prisma.comites.findMany()
     * 
     * // Get first 10 Comites
     * const comites = await prisma.comites.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comitesWithIdOnly = await prisma.comites.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends comitesFindManyArgs>(args?: SelectSubset<T, comitesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comitesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comites.
     * @param {comitesCreateArgs} args - Arguments to create a Comites.
     * @example
     * // Create one Comites
     * const Comites = await prisma.comites.create({
     *   data: {
     *     // ... data to create a Comites
     *   }
     * })
     * 
     */
    create<T extends comitesCreateArgs>(args: SelectSubset<T, comitesCreateArgs<ExtArgs>>): Prisma__comitesClient<$Result.GetResult<Prisma.$comitesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comites.
     * @param {comitesCreateManyArgs} args - Arguments to create many Comites.
     * @example
     * // Create many Comites
     * const comites = await prisma.comites.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends comitesCreateManyArgs>(args?: SelectSubset<T, comitesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comites.
     * @param {comitesDeleteArgs} args - Arguments to delete one Comites.
     * @example
     * // Delete one Comites
     * const Comites = await prisma.comites.delete({
     *   where: {
     *     // ... filter to delete one Comites
     *   }
     * })
     * 
     */
    delete<T extends comitesDeleteArgs>(args: SelectSubset<T, comitesDeleteArgs<ExtArgs>>): Prisma__comitesClient<$Result.GetResult<Prisma.$comitesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comites.
     * @param {comitesUpdateArgs} args - Arguments to update one Comites.
     * @example
     * // Update one Comites
     * const comites = await prisma.comites.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends comitesUpdateArgs>(args: SelectSubset<T, comitesUpdateArgs<ExtArgs>>): Prisma__comitesClient<$Result.GetResult<Prisma.$comitesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comites.
     * @param {comitesDeleteManyArgs} args - Arguments to filter Comites to delete.
     * @example
     * // Delete a few Comites
     * const { count } = await prisma.comites.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends comitesDeleteManyArgs>(args?: SelectSubset<T, comitesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comitesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comites
     * const comites = await prisma.comites.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends comitesUpdateManyArgs>(args: SelectSubset<T, comitesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comites.
     * @param {comitesUpsertArgs} args - Arguments to update or create a Comites.
     * @example
     * // Update or create a Comites
     * const comites = await prisma.comites.upsert({
     *   create: {
     *     // ... data to create a Comites
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comites we want to update
     *   }
     * })
     */
    upsert<T extends comitesUpsertArgs>(args: SelectSubset<T, comitesUpsertArgs<ExtArgs>>): Prisma__comitesClient<$Result.GetResult<Prisma.$comitesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comitesCountArgs} args - Arguments to filter Comites to count.
     * @example
     * // Count the number of Comites
     * const count = await prisma.comites.count({
     *   where: {
     *     // ... the filter for the Comites we want to count
     *   }
     * })
    **/
    count<T extends comitesCountArgs>(
      args?: Subset<T, comitesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComitesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComitesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComitesAggregateArgs>(args: Subset<T, ComitesAggregateArgs>): Prisma.PrismaPromise<GetComitesAggregateType<T>>

    /**
     * Group by Comites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comitesGroupByArgs} args - Group by arguments.
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
      T extends comitesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: comitesGroupByArgs['orderBy'] }
        : { orderBy?: comitesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, comitesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComitesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comites model
   */
  readonly fields: comitesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comites.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__comitesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the comites model
   */
  interface comitesFieldRefs {
    readonly id: FieldRef<"comites", 'Int'>
    readonly nome: FieldRef<"comites", 'String'>
  }
    

  // Custom InputTypes
  /**
   * comites findUnique
   */
  export type comitesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comites
     */
    select?: comitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comites
     */
    omit?: comitesOmit<ExtArgs> | null
    /**
     * Filter, which comites to fetch.
     */
    where: comitesWhereUniqueInput
  }

  /**
   * comites findUniqueOrThrow
   */
  export type comitesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comites
     */
    select?: comitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comites
     */
    omit?: comitesOmit<ExtArgs> | null
    /**
     * Filter, which comites to fetch.
     */
    where: comitesWhereUniqueInput
  }

  /**
   * comites findFirst
   */
  export type comitesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comites
     */
    select?: comitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comites
     */
    omit?: comitesOmit<ExtArgs> | null
    /**
     * Filter, which comites to fetch.
     */
    where?: comitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comites to fetch.
     */
    orderBy?: comitesOrderByWithRelationInput | comitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comites.
     */
    cursor?: comitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comites.
     */
    distinct?: ComitesScalarFieldEnum | ComitesScalarFieldEnum[]
  }

  /**
   * comites findFirstOrThrow
   */
  export type comitesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comites
     */
    select?: comitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comites
     */
    omit?: comitesOmit<ExtArgs> | null
    /**
     * Filter, which comites to fetch.
     */
    where?: comitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comites to fetch.
     */
    orderBy?: comitesOrderByWithRelationInput | comitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comites.
     */
    cursor?: comitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comites.
     */
    distinct?: ComitesScalarFieldEnum | ComitesScalarFieldEnum[]
  }

  /**
   * comites findMany
   */
  export type comitesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comites
     */
    select?: comitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comites
     */
    omit?: comitesOmit<ExtArgs> | null
    /**
     * Filter, which comites to fetch.
     */
    where?: comitesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comites to fetch.
     */
    orderBy?: comitesOrderByWithRelationInput | comitesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comites.
     */
    cursor?: comitesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comites.
     */
    skip?: number
    distinct?: ComitesScalarFieldEnum | ComitesScalarFieldEnum[]
  }

  /**
   * comites create
   */
  export type comitesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comites
     */
    select?: comitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comites
     */
    omit?: comitesOmit<ExtArgs> | null
    /**
     * The data needed to create a comites.
     */
    data: XOR<comitesCreateInput, comitesUncheckedCreateInput>
  }

  /**
   * comites createMany
   */
  export type comitesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comites.
     */
    data: comitesCreateManyInput | comitesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comites update
   */
  export type comitesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comites
     */
    select?: comitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comites
     */
    omit?: comitesOmit<ExtArgs> | null
    /**
     * The data needed to update a comites.
     */
    data: XOR<comitesUpdateInput, comitesUncheckedUpdateInput>
    /**
     * Choose, which comites to update.
     */
    where: comitesWhereUniqueInput
  }

  /**
   * comites updateMany
   */
  export type comitesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comites.
     */
    data: XOR<comitesUpdateManyMutationInput, comitesUncheckedUpdateManyInput>
    /**
     * Filter which comites to update
     */
    where?: comitesWhereInput
    /**
     * Limit how many comites to update.
     */
    limit?: number
  }

  /**
   * comites upsert
   */
  export type comitesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comites
     */
    select?: comitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comites
     */
    omit?: comitesOmit<ExtArgs> | null
    /**
     * The filter to search for the comites to update in case it exists.
     */
    where: comitesWhereUniqueInput
    /**
     * In case the comites found by the `where` argument doesn't exist, create a new comites with this data.
     */
    create: XOR<comitesCreateInput, comitesUncheckedCreateInput>
    /**
     * In case the comites was found with the provided `where` argument, update it with this data.
     */
    update: XOR<comitesUpdateInput, comitesUncheckedUpdateInput>
  }

  /**
   * comites delete
   */
  export type comitesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comites
     */
    select?: comitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comites
     */
    omit?: comitesOmit<ExtArgs> | null
    /**
     * Filter which comites to delete.
     */
    where: comitesWhereUniqueInput
  }

  /**
   * comites deleteMany
   */
  export type comitesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comites to delete
     */
    where?: comitesWhereInput
    /**
     * Limit how many comites to delete.
     */
    limit?: number
  }

  /**
   * comites without action
   */
  export type comitesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comites
     */
    select?: comitesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comites
     */
    omit?: comitesOmit<ExtArgs> | null
  }


  /**
   * Model equipes
   */

  export type AggregateEquipes = {
    _count: EquipesCountAggregateOutputType | null
    _avg: EquipesAvgAggregateOutputType | null
    _sum: EquipesSumAggregateOutputType | null
    _min: EquipesMinAggregateOutputType | null
    _max: EquipesMaxAggregateOutputType | null
  }

  export type EquipesAvgAggregateOutputType = {
    id: number | null
  }

  export type EquipesSumAggregateOutputType = {
    id: number | null
  }

  export type EquipesMinAggregateOutputType = {
    id: number | null
    nome: string | null
    centro_custo_id: string | null
  }

  export type EquipesMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    centro_custo_id: string | null
  }

  export type EquipesCountAggregateOutputType = {
    id: number
    nome: number
    centro_custo_id: number
    _all: number
  }


  export type EquipesAvgAggregateInputType = {
    id?: true
  }

  export type EquipesSumAggregateInputType = {
    id?: true
  }

  export type EquipesMinAggregateInputType = {
    id?: true
    nome?: true
    centro_custo_id?: true
  }

  export type EquipesMaxAggregateInputType = {
    id?: true
    nome?: true
    centro_custo_id?: true
  }

  export type EquipesCountAggregateInputType = {
    id?: true
    nome?: true
    centro_custo_id?: true
    _all?: true
  }

  export type EquipesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which equipes to aggregate.
     */
    where?: equipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of equipes to fetch.
     */
    orderBy?: equipesOrderByWithRelationInput | equipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: equipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` equipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` equipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned equipes
    **/
    _count?: true | EquipesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipesMaxAggregateInputType
  }

  export type GetEquipesAggregateType<T extends EquipesAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipes[P]>
      : GetScalarType<T[P], AggregateEquipes[P]>
  }




  export type equipesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: equipesWhereInput
    orderBy?: equipesOrderByWithAggregationInput | equipesOrderByWithAggregationInput[]
    by: EquipesScalarFieldEnum[] | EquipesScalarFieldEnum
    having?: equipesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipesCountAggregateInputType | true
    _avg?: EquipesAvgAggregateInputType
    _sum?: EquipesSumAggregateInputType
    _min?: EquipesMinAggregateInputType
    _max?: EquipesMaxAggregateInputType
  }

  export type EquipesGroupByOutputType = {
    id: number
    nome: string
    centro_custo_id: string | null
    _count: EquipesCountAggregateOutputType | null
    _avg: EquipesAvgAggregateOutputType | null
    _sum: EquipesSumAggregateOutputType | null
    _min: EquipesMinAggregateOutputType | null
    _max: EquipesMaxAggregateOutputType | null
  }

  type GetEquipesGroupByPayload<T extends equipesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipesGroupByOutputType[P]>
            : GetScalarType<T[P], EquipesGroupByOutputType[P]>
        }
      >
    >


  export type equipesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    centro_custo_id?: boolean
  }, ExtArgs["result"]["equipes"]>



  export type equipesSelectScalar = {
    id?: boolean
    nome?: boolean
    centro_custo_id?: boolean
  }

  export type equipesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "centro_custo_id", ExtArgs["result"]["equipes"]>

  export type $equipesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "equipes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      centro_custo_id: string | null
    }, ExtArgs["result"]["equipes"]>
    composites: {}
  }

  type equipesGetPayload<S extends boolean | null | undefined | equipesDefaultArgs> = $Result.GetResult<Prisma.$equipesPayload, S>

  type equipesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<equipesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipesCountAggregateInputType | true
    }

  export interface equipesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['equipes'], meta: { name: 'equipes' } }
    /**
     * Find zero or one Equipes that matches the filter.
     * @param {equipesFindUniqueArgs} args - Arguments to find a Equipes
     * @example
     * // Get one Equipes
     * const equipes = await prisma.equipes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends equipesFindUniqueArgs>(args: SelectSubset<T, equipesFindUniqueArgs<ExtArgs>>): Prisma__equipesClient<$Result.GetResult<Prisma.$equipesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {equipesFindUniqueOrThrowArgs} args - Arguments to find a Equipes
     * @example
     * // Get one Equipes
     * const equipes = await prisma.equipes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends equipesFindUniqueOrThrowArgs>(args: SelectSubset<T, equipesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__equipesClient<$Result.GetResult<Prisma.$equipesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipesFindFirstArgs} args - Arguments to find a Equipes
     * @example
     * // Get one Equipes
     * const equipes = await prisma.equipes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends equipesFindFirstArgs>(args?: SelectSubset<T, equipesFindFirstArgs<ExtArgs>>): Prisma__equipesClient<$Result.GetResult<Prisma.$equipesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipesFindFirstOrThrowArgs} args - Arguments to find a Equipes
     * @example
     * // Get one Equipes
     * const equipes = await prisma.equipes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends equipesFindFirstOrThrowArgs>(args?: SelectSubset<T, equipesFindFirstOrThrowArgs<ExtArgs>>): Prisma__equipesClient<$Result.GetResult<Prisma.$equipesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipes
     * const equipes = await prisma.equipes.findMany()
     * 
     * // Get first 10 Equipes
     * const equipes = await prisma.equipes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipesWithIdOnly = await prisma.equipes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends equipesFindManyArgs>(args?: SelectSubset<T, equipesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$equipesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipes.
     * @param {equipesCreateArgs} args - Arguments to create a Equipes.
     * @example
     * // Create one Equipes
     * const Equipes = await prisma.equipes.create({
     *   data: {
     *     // ... data to create a Equipes
     *   }
     * })
     * 
     */
    create<T extends equipesCreateArgs>(args: SelectSubset<T, equipesCreateArgs<ExtArgs>>): Prisma__equipesClient<$Result.GetResult<Prisma.$equipesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipes.
     * @param {equipesCreateManyArgs} args - Arguments to create many Equipes.
     * @example
     * // Create many Equipes
     * const equipes = await prisma.equipes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends equipesCreateManyArgs>(args?: SelectSubset<T, equipesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Equipes.
     * @param {equipesDeleteArgs} args - Arguments to delete one Equipes.
     * @example
     * // Delete one Equipes
     * const Equipes = await prisma.equipes.delete({
     *   where: {
     *     // ... filter to delete one Equipes
     *   }
     * })
     * 
     */
    delete<T extends equipesDeleteArgs>(args: SelectSubset<T, equipesDeleteArgs<ExtArgs>>): Prisma__equipesClient<$Result.GetResult<Prisma.$equipesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipes.
     * @param {equipesUpdateArgs} args - Arguments to update one Equipes.
     * @example
     * // Update one Equipes
     * const equipes = await prisma.equipes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends equipesUpdateArgs>(args: SelectSubset<T, equipesUpdateArgs<ExtArgs>>): Prisma__equipesClient<$Result.GetResult<Prisma.$equipesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipes.
     * @param {equipesDeleteManyArgs} args - Arguments to filter Equipes to delete.
     * @example
     * // Delete a few Equipes
     * const { count } = await prisma.equipes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends equipesDeleteManyArgs>(args?: SelectSubset<T, equipesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipes
     * const equipes = await prisma.equipes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends equipesUpdateManyArgs>(args: SelectSubset<T, equipesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Equipes.
     * @param {equipesUpsertArgs} args - Arguments to update or create a Equipes.
     * @example
     * // Update or create a Equipes
     * const equipes = await prisma.equipes.upsert({
     *   create: {
     *     // ... data to create a Equipes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipes we want to update
     *   }
     * })
     */
    upsert<T extends equipesUpsertArgs>(args: SelectSubset<T, equipesUpsertArgs<ExtArgs>>): Prisma__equipesClient<$Result.GetResult<Prisma.$equipesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipesCountArgs} args - Arguments to filter Equipes to count.
     * @example
     * // Count the number of Equipes
     * const count = await prisma.equipes.count({
     *   where: {
     *     // ... the filter for the Equipes we want to count
     *   }
     * })
    **/
    count<T extends equipesCountArgs>(
      args?: Subset<T, equipesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EquipesAggregateArgs>(args: Subset<T, EquipesAggregateArgs>): Prisma.PrismaPromise<GetEquipesAggregateType<T>>

    /**
     * Group by Equipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipesGroupByArgs} args - Group by arguments.
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
      T extends equipesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: equipesGroupByArgs['orderBy'] }
        : { orderBy?: equipesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, equipesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the equipes model
   */
  readonly fields: equipesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for equipes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__equipesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the equipes model
   */
  interface equipesFieldRefs {
    readonly id: FieldRef<"equipes", 'Int'>
    readonly nome: FieldRef<"equipes", 'String'>
    readonly centro_custo_id: FieldRef<"equipes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * equipes findUnique
   */
  export type equipesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipes
     */
    select?: equipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipes
     */
    omit?: equipesOmit<ExtArgs> | null
    /**
     * Filter, which equipes to fetch.
     */
    where: equipesWhereUniqueInput
  }

  /**
   * equipes findUniqueOrThrow
   */
  export type equipesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipes
     */
    select?: equipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipes
     */
    omit?: equipesOmit<ExtArgs> | null
    /**
     * Filter, which equipes to fetch.
     */
    where: equipesWhereUniqueInput
  }

  /**
   * equipes findFirst
   */
  export type equipesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipes
     */
    select?: equipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipes
     */
    omit?: equipesOmit<ExtArgs> | null
    /**
     * Filter, which equipes to fetch.
     */
    where?: equipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of equipes to fetch.
     */
    orderBy?: equipesOrderByWithRelationInput | equipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for equipes.
     */
    cursor?: equipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` equipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` equipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of equipes.
     */
    distinct?: EquipesScalarFieldEnum | EquipesScalarFieldEnum[]
  }

  /**
   * equipes findFirstOrThrow
   */
  export type equipesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipes
     */
    select?: equipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipes
     */
    omit?: equipesOmit<ExtArgs> | null
    /**
     * Filter, which equipes to fetch.
     */
    where?: equipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of equipes to fetch.
     */
    orderBy?: equipesOrderByWithRelationInput | equipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for equipes.
     */
    cursor?: equipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` equipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` equipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of equipes.
     */
    distinct?: EquipesScalarFieldEnum | EquipesScalarFieldEnum[]
  }

  /**
   * equipes findMany
   */
  export type equipesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipes
     */
    select?: equipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipes
     */
    omit?: equipesOmit<ExtArgs> | null
    /**
     * Filter, which equipes to fetch.
     */
    where?: equipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of equipes to fetch.
     */
    orderBy?: equipesOrderByWithRelationInput | equipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing equipes.
     */
    cursor?: equipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` equipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` equipes.
     */
    skip?: number
    distinct?: EquipesScalarFieldEnum | EquipesScalarFieldEnum[]
  }

  /**
   * equipes create
   */
  export type equipesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipes
     */
    select?: equipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipes
     */
    omit?: equipesOmit<ExtArgs> | null
    /**
     * The data needed to create a equipes.
     */
    data: XOR<equipesCreateInput, equipesUncheckedCreateInput>
  }

  /**
   * equipes createMany
   */
  export type equipesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many equipes.
     */
    data: equipesCreateManyInput | equipesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * equipes update
   */
  export type equipesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipes
     */
    select?: equipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipes
     */
    omit?: equipesOmit<ExtArgs> | null
    /**
     * The data needed to update a equipes.
     */
    data: XOR<equipesUpdateInput, equipesUncheckedUpdateInput>
    /**
     * Choose, which equipes to update.
     */
    where: equipesWhereUniqueInput
  }

  /**
   * equipes updateMany
   */
  export type equipesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update equipes.
     */
    data: XOR<equipesUpdateManyMutationInput, equipesUncheckedUpdateManyInput>
    /**
     * Filter which equipes to update
     */
    where?: equipesWhereInput
    /**
     * Limit how many equipes to update.
     */
    limit?: number
  }

  /**
   * equipes upsert
   */
  export type equipesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipes
     */
    select?: equipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipes
     */
    omit?: equipesOmit<ExtArgs> | null
    /**
     * The filter to search for the equipes to update in case it exists.
     */
    where: equipesWhereUniqueInput
    /**
     * In case the equipes found by the `where` argument doesn't exist, create a new equipes with this data.
     */
    create: XOR<equipesCreateInput, equipesUncheckedCreateInput>
    /**
     * In case the equipes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<equipesUpdateInput, equipesUncheckedUpdateInput>
  }

  /**
   * equipes delete
   */
  export type equipesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipes
     */
    select?: equipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipes
     */
    omit?: equipesOmit<ExtArgs> | null
    /**
     * Filter which equipes to delete.
     */
    where: equipesWhereUniqueInput
  }

  /**
   * equipes deleteMany
   */
  export type equipesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which equipes to delete
     */
    where?: equipesWhereInput
    /**
     * Limit how many equipes to delete.
     */
    limit?: number
  }

  /**
   * equipes without action
   */
  export type equipesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipes
     */
    select?: equipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipes
     */
    omit?: equipesOmit<ExtArgs> | null
  }


  /**
   * Model hierarquia
   */

  export type AggregateHierarquia = {
    _count: HierarquiaCountAggregateOutputType | null
    _avg: HierarquiaAvgAggregateOutputType | null
    _sum: HierarquiaSumAggregateOutputType | null
    _min: HierarquiaMinAggregateOutputType | null
    _max: HierarquiaMaxAggregateOutputType | null
  }

  export type HierarquiaAvgAggregateOutputType = {
    id: number | null
    valor: number | null
  }

  export type HierarquiaSumAggregateOutputType = {
    id: number | null
    valor: number | null
  }

  export type HierarquiaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    valor: number | null
  }

  export type HierarquiaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    valor: number | null
  }

  export type HierarquiaCountAggregateOutputType = {
    id: number
    nome: number
    valor: number
    _all: number
  }


  export type HierarquiaAvgAggregateInputType = {
    id?: true
    valor?: true
  }

  export type HierarquiaSumAggregateInputType = {
    id?: true
    valor?: true
  }

  export type HierarquiaMinAggregateInputType = {
    id?: true
    nome?: true
    valor?: true
  }

  export type HierarquiaMaxAggregateInputType = {
    id?: true
    nome?: true
    valor?: true
  }

  export type HierarquiaCountAggregateInputType = {
    id?: true
    nome?: true
    valor?: true
    _all?: true
  }

  export type HierarquiaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hierarquia to aggregate.
     */
    where?: hierarquiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hierarquias to fetch.
     */
    orderBy?: hierarquiaOrderByWithRelationInput | hierarquiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hierarquiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hierarquias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hierarquias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hierarquias
    **/
    _count?: true | HierarquiaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HierarquiaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HierarquiaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HierarquiaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HierarquiaMaxAggregateInputType
  }

  export type GetHierarquiaAggregateType<T extends HierarquiaAggregateArgs> = {
        [P in keyof T & keyof AggregateHierarquia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHierarquia[P]>
      : GetScalarType<T[P], AggregateHierarquia[P]>
  }




  export type hierarquiaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hierarquiaWhereInput
    orderBy?: hierarquiaOrderByWithAggregationInput | hierarquiaOrderByWithAggregationInput[]
    by: HierarquiaScalarFieldEnum[] | HierarquiaScalarFieldEnum
    having?: hierarquiaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HierarquiaCountAggregateInputType | true
    _avg?: HierarquiaAvgAggregateInputType
    _sum?: HierarquiaSumAggregateInputType
    _min?: HierarquiaMinAggregateInputType
    _max?: HierarquiaMaxAggregateInputType
  }

  export type HierarquiaGroupByOutputType = {
    id: number
    nome: string
    valor: number
    _count: HierarquiaCountAggregateOutputType | null
    _avg: HierarquiaAvgAggregateOutputType | null
    _sum: HierarquiaSumAggregateOutputType | null
    _min: HierarquiaMinAggregateOutputType | null
    _max: HierarquiaMaxAggregateOutputType | null
  }

  type GetHierarquiaGroupByPayload<T extends hierarquiaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HierarquiaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HierarquiaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HierarquiaGroupByOutputType[P]>
            : GetScalarType<T[P], HierarquiaGroupByOutputType[P]>
        }
      >
    >


  export type hierarquiaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    valor?: boolean
  }, ExtArgs["result"]["hierarquia"]>



  export type hierarquiaSelectScalar = {
    id?: boolean
    nome?: boolean
    valor?: boolean
  }

  export type hierarquiaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "valor", ExtArgs["result"]["hierarquia"]>

  export type $hierarquiaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hierarquia"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      valor: number
    }, ExtArgs["result"]["hierarquia"]>
    composites: {}
  }

  type hierarquiaGetPayload<S extends boolean | null | undefined | hierarquiaDefaultArgs> = $Result.GetResult<Prisma.$hierarquiaPayload, S>

  type hierarquiaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hierarquiaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HierarquiaCountAggregateInputType | true
    }

  export interface hierarquiaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hierarquia'], meta: { name: 'hierarquia' } }
    /**
     * Find zero or one Hierarquia that matches the filter.
     * @param {hierarquiaFindUniqueArgs} args - Arguments to find a Hierarquia
     * @example
     * // Get one Hierarquia
     * const hierarquia = await prisma.hierarquia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hierarquiaFindUniqueArgs>(args: SelectSubset<T, hierarquiaFindUniqueArgs<ExtArgs>>): Prisma__hierarquiaClient<$Result.GetResult<Prisma.$hierarquiaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hierarquia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hierarquiaFindUniqueOrThrowArgs} args - Arguments to find a Hierarquia
     * @example
     * // Get one Hierarquia
     * const hierarquia = await prisma.hierarquia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hierarquiaFindUniqueOrThrowArgs>(args: SelectSubset<T, hierarquiaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hierarquiaClient<$Result.GetResult<Prisma.$hierarquiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hierarquia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hierarquiaFindFirstArgs} args - Arguments to find a Hierarquia
     * @example
     * // Get one Hierarquia
     * const hierarquia = await prisma.hierarquia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hierarquiaFindFirstArgs>(args?: SelectSubset<T, hierarquiaFindFirstArgs<ExtArgs>>): Prisma__hierarquiaClient<$Result.GetResult<Prisma.$hierarquiaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hierarquia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hierarquiaFindFirstOrThrowArgs} args - Arguments to find a Hierarquia
     * @example
     * // Get one Hierarquia
     * const hierarquia = await prisma.hierarquia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hierarquiaFindFirstOrThrowArgs>(args?: SelectSubset<T, hierarquiaFindFirstOrThrowArgs<ExtArgs>>): Prisma__hierarquiaClient<$Result.GetResult<Prisma.$hierarquiaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hierarquias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hierarquiaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hierarquias
     * const hierarquias = await prisma.hierarquia.findMany()
     * 
     * // Get first 10 Hierarquias
     * const hierarquias = await prisma.hierarquia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hierarquiaWithIdOnly = await prisma.hierarquia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends hierarquiaFindManyArgs>(args?: SelectSubset<T, hierarquiaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hierarquiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hierarquia.
     * @param {hierarquiaCreateArgs} args - Arguments to create a Hierarquia.
     * @example
     * // Create one Hierarquia
     * const Hierarquia = await prisma.hierarquia.create({
     *   data: {
     *     // ... data to create a Hierarquia
     *   }
     * })
     * 
     */
    create<T extends hierarquiaCreateArgs>(args: SelectSubset<T, hierarquiaCreateArgs<ExtArgs>>): Prisma__hierarquiaClient<$Result.GetResult<Prisma.$hierarquiaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hierarquias.
     * @param {hierarquiaCreateManyArgs} args - Arguments to create many Hierarquias.
     * @example
     * // Create many Hierarquias
     * const hierarquia = await prisma.hierarquia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hierarquiaCreateManyArgs>(args?: SelectSubset<T, hierarquiaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hierarquia.
     * @param {hierarquiaDeleteArgs} args - Arguments to delete one Hierarquia.
     * @example
     * // Delete one Hierarquia
     * const Hierarquia = await prisma.hierarquia.delete({
     *   where: {
     *     // ... filter to delete one Hierarquia
     *   }
     * })
     * 
     */
    delete<T extends hierarquiaDeleteArgs>(args: SelectSubset<T, hierarquiaDeleteArgs<ExtArgs>>): Prisma__hierarquiaClient<$Result.GetResult<Prisma.$hierarquiaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hierarquia.
     * @param {hierarquiaUpdateArgs} args - Arguments to update one Hierarquia.
     * @example
     * // Update one Hierarquia
     * const hierarquia = await prisma.hierarquia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hierarquiaUpdateArgs>(args: SelectSubset<T, hierarquiaUpdateArgs<ExtArgs>>): Prisma__hierarquiaClient<$Result.GetResult<Prisma.$hierarquiaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hierarquias.
     * @param {hierarquiaDeleteManyArgs} args - Arguments to filter Hierarquias to delete.
     * @example
     * // Delete a few Hierarquias
     * const { count } = await prisma.hierarquia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hierarquiaDeleteManyArgs>(args?: SelectSubset<T, hierarquiaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hierarquias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hierarquiaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hierarquias
     * const hierarquia = await prisma.hierarquia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hierarquiaUpdateManyArgs>(args: SelectSubset<T, hierarquiaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hierarquia.
     * @param {hierarquiaUpsertArgs} args - Arguments to update or create a Hierarquia.
     * @example
     * // Update or create a Hierarquia
     * const hierarquia = await prisma.hierarquia.upsert({
     *   create: {
     *     // ... data to create a Hierarquia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hierarquia we want to update
     *   }
     * })
     */
    upsert<T extends hierarquiaUpsertArgs>(args: SelectSubset<T, hierarquiaUpsertArgs<ExtArgs>>): Prisma__hierarquiaClient<$Result.GetResult<Prisma.$hierarquiaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hierarquias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hierarquiaCountArgs} args - Arguments to filter Hierarquias to count.
     * @example
     * // Count the number of Hierarquias
     * const count = await prisma.hierarquia.count({
     *   where: {
     *     // ... the filter for the Hierarquias we want to count
     *   }
     * })
    **/
    count<T extends hierarquiaCountArgs>(
      args?: Subset<T, hierarquiaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HierarquiaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hierarquia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HierarquiaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HierarquiaAggregateArgs>(args: Subset<T, HierarquiaAggregateArgs>): Prisma.PrismaPromise<GetHierarquiaAggregateType<T>>

    /**
     * Group by Hierarquia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hierarquiaGroupByArgs} args - Group by arguments.
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
      T extends hierarquiaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hierarquiaGroupByArgs['orderBy'] }
        : { orderBy?: hierarquiaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, hierarquiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHierarquiaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hierarquia model
   */
  readonly fields: hierarquiaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hierarquia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hierarquiaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the hierarquia model
   */
  interface hierarquiaFieldRefs {
    readonly id: FieldRef<"hierarquia", 'Int'>
    readonly nome: FieldRef<"hierarquia", 'String'>
    readonly valor: FieldRef<"hierarquia", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * hierarquia findUnique
   */
  export type hierarquiaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hierarquia
     */
    select?: hierarquiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hierarquia
     */
    omit?: hierarquiaOmit<ExtArgs> | null
    /**
     * Filter, which hierarquia to fetch.
     */
    where: hierarquiaWhereUniqueInput
  }

  /**
   * hierarquia findUniqueOrThrow
   */
  export type hierarquiaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hierarquia
     */
    select?: hierarquiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hierarquia
     */
    omit?: hierarquiaOmit<ExtArgs> | null
    /**
     * Filter, which hierarquia to fetch.
     */
    where: hierarquiaWhereUniqueInput
  }

  /**
   * hierarquia findFirst
   */
  export type hierarquiaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hierarquia
     */
    select?: hierarquiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hierarquia
     */
    omit?: hierarquiaOmit<ExtArgs> | null
    /**
     * Filter, which hierarquia to fetch.
     */
    where?: hierarquiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hierarquias to fetch.
     */
    orderBy?: hierarquiaOrderByWithRelationInput | hierarquiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hierarquias.
     */
    cursor?: hierarquiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hierarquias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hierarquias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hierarquias.
     */
    distinct?: HierarquiaScalarFieldEnum | HierarquiaScalarFieldEnum[]
  }

  /**
   * hierarquia findFirstOrThrow
   */
  export type hierarquiaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hierarquia
     */
    select?: hierarquiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hierarquia
     */
    omit?: hierarquiaOmit<ExtArgs> | null
    /**
     * Filter, which hierarquia to fetch.
     */
    where?: hierarquiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hierarquias to fetch.
     */
    orderBy?: hierarquiaOrderByWithRelationInput | hierarquiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hierarquias.
     */
    cursor?: hierarquiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hierarquias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hierarquias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hierarquias.
     */
    distinct?: HierarquiaScalarFieldEnum | HierarquiaScalarFieldEnum[]
  }

  /**
   * hierarquia findMany
   */
  export type hierarquiaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hierarquia
     */
    select?: hierarquiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hierarquia
     */
    omit?: hierarquiaOmit<ExtArgs> | null
    /**
     * Filter, which hierarquias to fetch.
     */
    where?: hierarquiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hierarquias to fetch.
     */
    orderBy?: hierarquiaOrderByWithRelationInput | hierarquiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hierarquias.
     */
    cursor?: hierarquiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hierarquias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hierarquias.
     */
    skip?: number
    distinct?: HierarquiaScalarFieldEnum | HierarquiaScalarFieldEnum[]
  }

  /**
   * hierarquia create
   */
  export type hierarquiaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hierarquia
     */
    select?: hierarquiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hierarquia
     */
    omit?: hierarquiaOmit<ExtArgs> | null
    /**
     * The data needed to create a hierarquia.
     */
    data: XOR<hierarquiaCreateInput, hierarquiaUncheckedCreateInput>
  }

  /**
   * hierarquia createMany
   */
  export type hierarquiaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hierarquias.
     */
    data: hierarquiaCreateManyInput | hierarquiaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hierarquia update
   */
  export type hierarquiaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hierarquia
     */
    select?: hierarquiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hierarquia
     */
    omit?: hierarquiaOmit<ExtArgs> | null
    /**
     * The data needed to update a hierarquia.
     */
    data: XOR<hierarquiaUpdateInput, hierarquiaUncheckedUpdateInput>
    /**
     * Choose, which hierarquia to update.
     */
    where: hierarquiaWhereUniqueInput
  }

  /**
   * hierarquia updateMany
   */
  export type hierarquiaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hierarquias.
     */
    data: XOR<hierarquiaUpdateManyMutationInput, hierarquiaUncheckedUpdateManyInput>
    /**
     * Filter which hierarquias to update
     */
    where?: hierarquiaWhereInput
    /**
     * Limit how many hierarquias to update.
     */
    limit?: number
  }

  /**
   * hierarquia upsert
   */
  export type hierarquiaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hierarquia
     */
    select?: hierarquiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hierarquia
     */
    omit?: hierarquiaOmit<ExtArgs> | null
    /**
     * The filter to search for the hierarquia to update in case it exists.
     */
    where: hierarquiaWhereUniqueInput
    /**
     * In case the hierarquia found by the `where` argument doesn't exist, create a new hierarquia with this data.
     */
    create: XOR<hierarquiaCreateInput, hierarquiaUncheckedCreateInput>
    /**
     * In case the hierarquia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hierarquiaUpdateInput, hierarquiaUncheckedUpdateInput>
  }

  /**
   * hierarquia delete
   */
  export type hierarquiaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hierarquia
     */
    select?: hierarquiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hierarquia
     */
    omit?: hierarquiaOmit<ExtArgs> | null
    /**
     * Filter which hierarquia to delete.
     */
    where: hierarquiaWhereUniqueInput
  }

  /**
   * hierarquia deleteMany
   */
  export type hierarquiaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hierarquias to delete
     */
    where?: hierarquiaWhereInput
    /**
     * Limit how many hierarquias to delete.
     */
    limit?: number
  }

  /**
   * hierarquia without action
   */
  export type hierarquiaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hierarquia
     */
    select?: hierarquiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hierarquia
     */
    omit?: hierarquiaOmit<ExtArgs> | null
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
   * Model programas
   */

  export type AggregateProgramas = {
    _count: ProgramasCountAggregateOutputType | null
    _avg: ProgramasAvgAggregateOutputType | null
    _sum: ProgramasSumAggregateOutputType | null
    _min: ProgramasMinAggregateOutputType | null
    _max: ProgramasMaxAggregateOutputType | null
  }

  export type ProgramasAvgAggregateOutputType = {
    id: number | null
  }

  export type ProgramasSumAggregateOutputType = {
    id: number | null
  }

  export type ProgramasMinAggregateOutputType = {
    id: number | null
    nome: string | null
    centro_custo: string | null
  }

  export type ProgramasMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    centro_custo: string | null
  }

  export type ProgramasCountAggregateOutputType = {
    id: number
    nome: number
    centro_custo: number
    _all: number
  }


  export type ProgramasAvgAggregateInputType = {
    id?: true
  }

  export type ProgramasSumAggregateInputType = {
    id?: true
  }

  export type ProgramasMinAggregateInputType = {
    id?: true
    nome?: true
    centro_custo?: true
  }

  export type ProgramasMaxAggregateInputType = {
    id?: true
    nome?: true
    centro_custo?: true
  }

  export type ProgramasCountAggregateInputType = {
    id?: true
    nome?: true
    centro_custo?: true
    _all?: true
  }

  export type ProgramasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which programas to aggregate.
     */
    where?: programasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of programas to fetch.
     */
    orderBy?: programasOrderByWithRelationInput | programasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: programasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` programas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` programas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned programas
    **/
    _count?: true | ProgramasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgramasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgramasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramasMaxAggregateInputType
  }

  export type GetProgramasAggregateType<T extends ProgramasAggregateArgs> = {
        [P in keyof T & keyof AggregateProgramas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgramas[P]>
      : GetScalarType<T[P], AggregateProgramas[P]>
  }




  export type programasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: programasWhereInput
    orderBy?: programasOrderByWithAggregationInput | programasOrderByWithAggregationInput[]
    by: ProgramasScalarFieldEnum[] | ProgramasScalarFieldEnum
    having?: programasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramasCountAggregateInputType | true
    _avg?: ProgramasAvgAggregateInputType
    _sum?: ProgramasSumAggregateInputType
    _min?: ProgramasMinAggregateInputType
    _max?: ProgramasMaxAggregateInputType
  }

  export type ProgramasGroupByOutputType = {
    id: number
    nome: string
    centro_custo: string | null
    _count: ProgramasCountAggregateOutputType | null
    _avg: ProgramasAvgAggregateOutputType | null
    _sum: ProgramasSumAggregateOutputType | null
    _min: ProgramasMinAggregateOutputType | null
    _max: ProgramasMaxAggregateOutputType | null
  }

  type GetProgramasGroupByPayload<T extends programasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramasGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramasGroupByOutputType[P]>
        }
      >
    >


  export type programasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    centro_custo?: boolean
  }, ExtArgs["result"]["programas"]>



  export type programasSelectScalar = {
    id?: boolean
    nome?: boolean
    centro_custo?: boolean
  }

  export type programasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "centro_custo", ExtArgs["result"]["programas"]>

  export type $programasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "programas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      centro_custo: string | null
    }, ExtArgs["result"]["programas"]>
    composites: {}
  }

  type programasGetPayload<S extends boolean | null | undefined | programasDefaultArgs> = $Result.GetResult<Prisma.$programasPayload, S>

  type programasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<programasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgramasCountAggregateInputType | true
    }

  export interface programasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['programas'], meta: { name: 'programas' } }
    /**
     * Find zero or one Programas that matches the filter.
     * @param {programasFindUniqueArgs} args - Arguments to find a Programas
     * @example
     * // Get one Programas
     * const programas = await prisma.programas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends programasFindUniqueArgs>(args: SelectSubset<T, programasFindUniqueArgs<ExtArgs>>): Prisma__programasClient<$Result.GetResult<Prisma.$programasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Programas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {programasFindUniqueOrThrowArgs} args - Arguments to find a Programas
     * @example
     * // Get one Programas
     * const programas = await prisma.programas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends programasFindUniqueOrThrowArgs>(args: SelectSubset<T, programasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__programasClient<$Result.GetResult<Prisma.$programasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Programas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programasFindFirstArgs} args - Arguments to find a Programas
     * @example
     * // Get one Programas
     * const programas = await prisma.programas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends programasFindFirstArgs>(args?: SelectSubset<T, programasFindFirstArgs<ExtArgs>>): Prisma__programasClient<$Result.GetResult<Prisma.$programasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Programas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programasFindFirstOrThrowArgs} args - Arguments to find a Programas
     * @example
     * // Get one Programas
     * const programas = await prisma.programas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends programasFindFirstOrThrowArgs>(args?: SelectSubset<T, programasFindFirstOrThrowArgs<ExtArgs>>): Prisma__programasClient<$Result.GetResult<Prisma.$programasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Programas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Programas
     * const programas = await prisma.programas.findMany()
     * 
     * // Get first 10 Programas
     * const programas = await prisma.programas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programasWithIdOnly = await prisma.programas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends programasFindManyArgs>(args?: SelectSubset<T, programasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$programasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Programas.
     * @param {programasCreateArgs} args - Arguments to create a Programas.
     * @example
     * // Create one Programas
     * const Programas = await prisma.programas.create({
     *   data: {
     *     // ... data to create a Programas
     *   }
     * })
     * 
     */
    create<T extends programasCreateArgs>(args: SelectSubset<T, programasCreateArgs<ExtArgs>>): Prisma__programasClient<$Result.GetResult<Prisma.$programasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Programas.
     * @param {programasCreateManyArgs} args - Arguments to create many Programas.
     * @example
     * // Create many Programas
     * const programas = await prisma.programas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends programasCreateManyArgs>(args?: SelectSubset<T, programasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Programas.
     * @param {programasDeleteArgs} args - Arguments to delete one Programas.
     * @example
     * // Delete one Programas
     * const Programas = await prisma.programas.delete({
     *   where: {
     *     // ... filter to delete one Programas
     *   }
     * })
     * 
     */
    delete<T extends programasDeleteArgs>(args: SelectSubset<T, programasDeleteArgs<ExtArgs>>): Prisma__programasClient<$Result.GetResult<Prisma.$programasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Programas.
     * @param {programasUpdateArgs} args - Arguments to update one Programas.
     * @example
     * // Update one Programas
     * const programas = await prisma.programas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends programasUpdateArgs>(args: SelectSubset<T, programasUpdateArgs<ExtArgs>>): Prisma__programasClient<$Result.GetResult<Prisma.$programasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Programas.
     * @param {programasDeleteManyArgs} args - Arguments to filter Programas to delete.
     * @example
     * // Delete a few Programas
     * const { count } = await prisma.programas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends programasDeleteManyArgs>(args?: SelectSubset<T, programasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Programas
     * const programas = await prisma.programas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends programasUpdateManyArgs>(args: SelectSubset<T, programasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Programas.
     * @param {programasUpsertArgs} args - Arguments to update or create a Programas.
     * @example
     * // Update or create a Programas
     * const programas = await prisma.programas.upsert({
     *   create: {
     *     // ... data to create a Programas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Programas we want to update
     *   }
     * })
     */
    upsert<T extends programasUpsertArgs>(args: SelectSubset<T, programasUpsertArgs<ExtArgs>>): Prisma__programasClient<$Result.GetResult<Prisma.$programasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Programas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programasCountArgs} args - Arguments to filter Programas to count.
     * @example
     * // Count the number of Programas
     * const count = await prisma.programas.count({
     *   where: {
     *     // ... the filter for the Programas we want to count
     *   }
     * })
    **/
    count<T extends programasCountArgs>(
      args?: Subset<T, programasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Programas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgramasAggregateArgs>(args: Subset<T, ProgramasAggregateArgs>): Prisma.PrismaPromise<GetProgramasAggregateType<T>>

    /**
     * Group by Programas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programasGroupByArgs} args - Group by arguments.
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
      T extends programasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: programasGroupByArgs['orderBy'] }
        : { orderBy?: programasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, programasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the programas model
   */
  readonly fields: programasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for programas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__programasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the programas model
   */
  interface programasFieldRefs {
    readonly id: FieldRef<"programas", 'Int'>
    readonly nome: FieldRef<"programas", 'String'>
    readonly centro_custo: FieldRef<"programas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * programas findUnique
   */
  export type programasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programas
     */
    select?: programasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the programas
     */
    omit?: programasOmit<ExtArgs> | null
    /**
     * Filter, which programas to fetch.
     */
    where: programasWhereUniqueInput
  }

  /**
   * programas findUniqueOrThrow
   */
  export type programasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programas
     */
    select?: programasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the programas
     */
    omit?: programasOmit<ExtArgs> | null
    /**
     * Filter, which programas to fetch.
     */
    where: programasWhereUniqueInput
  }

  /**
   * programas findFirst
   */
  export type programasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programas
     */
    select?: programasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the programas
     */
    omit?: programasOmit<ExtArgs> | null
    /**
     * Filter, which programas to fetch.
     */
    where?: programasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of programas to fetch.
     */
    orderBy?: programasOrderByWithRelationInput | programasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for programas.
     */
    cursor?: programasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` programas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` programas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of programas.
     */
    distinct?: ProgramasScalarFieldEnum | ProgramasScalarFieldEnum[]
  }

  /**
   * programas findFirstOrThrow
   */
  export type programasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programas
     */
    select?: programasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the programas
     */
    omit?: programasOmit<ExtArgs> | null
    /**
     * Filter, which programas to fetch.
     */
    where?: programasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of programas to fetch.
     */
    orderBy?: programasOrderByWithRelationInput | programasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for programas.
     */
    cursor?: programasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` programas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` programas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of programas.
     */
    distinct?: ProgramasScalarFieldEnum | ProgramasScalarFieldEnum[]
  }

  /**
   * programas findMany
   */
  export type programasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programas
     */
    select?: programasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the programas
     */
    omit?: programasOmit<ExtArgs> | null
    /**
     * Filter, which programas to fetch.
     */
    where?: programasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of programas to fetch.
     */
    orderBy?: programasOrderByWithRelationInput | programasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing programas.
     */
    cursor?: programasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` programas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` programas.
     */
    skip?: number
    distinct?: ProgramasScalarFieldEnum | ProgramasScalarFieldEnum[]
  }

  /**
   * programas create
   */
  export type programasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programas
     */
    select?: programasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the programas
     */
    omit?: programasOmit<ExtArgs> | null
    /**
     * The data needed to create a programas.
     */
    data: XOR<programasCreateInput, programasUncheckedCreateInput>
  }

  /**
   * programas createMany
   */
  export type programasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many programas.
     */
    data: programasCreateManyInput | programasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * programas update
   */
  export type programasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programas
     */
    select?: programasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the programas
     */
    omit?: programasOmit<ExtArgs> | null
    /**
     * The data needed to update a programas.
     */
    data: XOR<programasUpdateInput, programasUncheckedUpdateInput>
    /**
     * Choose, which programas to update.
     */
    where: programasWhereUniqueInput
  }

  /**
   * programas updateMany
   */
  export type programasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update programas.
     */
    data: XOR<programasUpdateManyMutationInput, programasUncheckedUpdateManyInput>
    /**
     * Filter which programas to update
     */
    where?: programasWhereInput
    /**
     * Limit how many programas to update.
     */
    limit?: number
  }

  /**
   * programas upsert
   */
  export type programasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programas
     */
    select?: programasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the programas
     */
    omit?: programasOmit<ExtArgs> | null
    /**
     * The filter to search for the programas to update in case it exists.
     */
    where: programasWhereUniqueInput
    /**
     * In case the programas found by the `where` argument doesn't exist, create a new programas with this data.
     */
    create: XOR<programasCreateInput, programasUncheckedCreateInput>
    /**
     * In case the programas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<programasUpdateInput, programasUncheckedUpdateInput>
  }

  /**
   * programas delete
   */
  export type programasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programas
     */
    select?: programasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the programas
     */
    omit?: programasOmit<ExtArgs> | null
    /**
     * Filter which programas to delete.
     */
    where: programasWhereUniqueInput
  }

  /**
   * programas deleteMany
   */
  export type programasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which programas to delete
     */
    where?: programasWhereInput
    /**
     * Limit how many programas to delete.
     */
    limit?: number
  }

  /**
   * programas without action
   */
  export type programasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programas
     */
    select?: programasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the programas
     */
    omit?: programasOmit<ExtArgs> | null
  }


  /**
   * Model setores
   */

  export type AggregateSetores = {
    _count: SetoresCountAggregateOutputType | null
    _avg: SetoresAvgAggregateOutputType | null
    _sum: SetoresSumAggregateOutputType | null
    _min: SetoresMinAggregateOutputType | null
    _max: SetoresMaxAggregateOutputType | null
  }

  export type SetoresAvgAggregateOutputType = {
    id: number | null
    area_id: number | null
  }

  export type SetoresSumAggregateOutputType = {
    id: number | null
    area_id: number | null
  }

  export type SetoresMinAggregateOutputType = {
    id: number | null
    nome: string | null
    nome_organograma: string | null
    area_id: number | null
  }

  export type SetoresMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    nome_organograma: string | null
    area_id: number | null
  }

  export type SetoresCountAggregateOutputType = {
    id: number
    nome: number
    nome_organograma: number
    area_id: number
    _all: number
  }


  export type SetoresAvgAggregateInputType = {
    id?: true
    area_id?: true
  }

  export type SetoresSumAggregateInputType = {
    id?: true
    area_id?: true
  }

  export type SetoresMinAggregateInputType = {
    id?: true
    nome?: true
    nome_organograma?: true
    area_id?: true
  }

  export type SetoresMaxAggregateInputType = {
    id?: true
    nome?: true
    nome_organograma?: true
    area_id?: true
  }

  export type SetoresCountAggregateInputType = {
    id?: true
    nome?: true
    nome_organograma?: true
    area_id?: true
    _all?: true
  }

  export type SetoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which setores to aggregate.
     */
    where?: setoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of setores to fetch.
     */
    orderBy?: setoresOrderByWithRelationInput | setoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: setoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` setores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` setores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned setores
    **/
    _count?: true | SetoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SetoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SetoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SetoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SetoresMaxAggregateInputType
  }

  export type GetSetoresAggregateType<T extends SetoresAggregateArgs> = {
        [P in keyof T & keyof AggregateSetores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetores[P]>
      : GetScalarType<T[P], AggregateSetores[P]>
  }




  export type setoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: setoresWhereInput
    orderBy?: setoresOrderByWithAggregationInput | setoresOrderByWithAggregationInput[]
    by: SetoresScalarFieldEnum[] | SetoresScalarFieldEnum
    having?: setoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SetoresCountAggregateInputType | true
    _avg?: SetoresAvgAggregateInputType
    _sum?: SetoresSumAggregateInputType
    _min?: SetoresMinAggregateInputType
    _max?: SetoresMaxAggregateInputType
  }

  export type SetoresGroupByOutputType = {
    id: number
    nome: string
    nome_organograma: string | null
    area_id: number
    _count: SetoresCountAggregateOutputType | null
    _avg: SetoresAvgAggregateOutputType | null
    _sum: SetoresSumAggregateOutputType | null
    _min: SetoresMinAggregateOutputType | null
    _max: SetoresMaxAggregateOutputType | null
  }

  type GetSetoresGroupByPayload<T extends setoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SetoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SetoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SetoresGroupByOutputType[P]>
            : GetScalarType<T[P], SetoresGroupByOutputType[P]>
        }
      >
    >


  export type setoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    nome_organograma?: boolean
    area_id?: boolean
  }, ExtArgs["result"]["setores"]>



  export type setoresSelectScalar = {
    id?: boolean
    nome?: boolean
    nome_organograma?: boolean
    area_id?: boolean
  }

  export type setoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "nome_organograma" | "area_id", ExtArgs["result"]["setores"]>

  export type $setoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "setores"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      nome_organograma: string | null
      area_id: number
    }, ExtArgs["result"]["setores"]>
    composites: {}
  }

  type setoresGetPayload<S extends boolean | null | undefined | setoresDefaultArgs> = $Result.GetResult<Prisma.$setoresPayload, S>

  type setoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<setoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SetoresCountAggregateInputType | true
    }

  export interface setoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['setores'], meta: { name: 'setores' } }
    /**
     * Find zero or one Setores that matches the filter.
     * @param {setoresFindUniqueArgs} args - Arguments to find a Setores
     * @example
     * // Get one Setores
     * const setores = await prisma.setores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends setoresFindUniqueArgs>(args: SelectSubset<T, setoresFindUniqueArgs<ExtArgs>>): Prisma__setoresClient<$Result.GetResult<Prisma.$setoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {setoresFindUniqueOrThrowArgs} args - Arguments to find a Setores
     * @example
     * // Get one Setores
     * const setores = await prisma.setores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends setoresFindUniqueOrThrowArgs>(args: SelectSubset<T, setoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__setoresClient<$Result.GetResult<Prisma.$setoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setoresFindFirstArgs} args - Arguments to find a Setores
     * @example
     * // Get one Setores
     * const setores = await prisma.setores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends setoresFindFirstArgs>(args?: SelectSubset<T, setoresFindFirstArgs<ExtArgs>>): Prisma__setoresClient<$Result.GetResult<Prisma.$setoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setoresFindFirstOrThrowArgs} args - Arguments to find a Setores
     * @example
     * // Get one Setores
     * const setores = await prisma.setores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends setoresFindFirstOrThrowArgs>(args?: SelectSubset<T, setoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__setoresClient<$Result.GetResult<Prisma.$setoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Setores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Setores
     * const setores = await prisma.setores.findMany()
     * 
     * // Get first 10 Setores
     * const setores = await prisma.setores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const setoresWithIdOnly = await prisma.setores.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends setoresFindManyArgs>(args?: SelectSubset<T, setoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$setoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setores.
     * @param {setoresCreateArgs} args - Arguments to create a Setores.
     * @example
     * // Create one Setores
     * const Setores = await prisma.setores.create({
     *   data: {
     *     // ... data to create a Setores
     *   }
     * })
     * 
     */
    create<T extends setoresCreateArgs>(args: SelectSubset<T, setoresCreateArgs<ExtArgs>>): Prisma__setoresClient<$Result.GetResult<Prisma.$setoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Setores.
     * @param {setoresCreateManyArgs} args - Arguments to create many Setores.
     * @example
     * // Create many Setores
     * const setores = await prisma.setores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends setoresCreateManyArgs>(args?: SelectSubset<T, setoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Setores.
     * @param {setoresDeleteArgs} args - Arguments to delete one Setores.
     * @example
     * // Delete one Setores
     * const Setores = await prisma.setores.delete({
     *   where: {
     *     // ... filter to delete one Setores
     *   }
     * })
     * 
     */
    delete<T extends setoresDeleteArgs>(args: SelectSubset<T, setoresDeleteArgs<ExtArgs>>): Prisma__setoresClient<$Result.GetResult<Prisma.$setoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setores.
     * @param {setoresUpdateArgs} args - Arguments to update one Setores.
     * @example
     * // Update one Setores
     * const setores = await prisma.setores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends setoresUpdateArgs>(args: SelectSubset<T, setoresUpdateArgs<ExtArgs>>): Prisma__setoresClient<$Result.GetResult<Prisma.$setoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Setores.
     * @param {setoresDeleteManyArgs} args - Arguments to filter Setores to delete.
     * @example
     * // Delete a few Setores
     * const { count } = await prisma.setores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends setoresDeleteManyArgs>(args?: SelectSubset<T, setoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Setores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Setores
     * const setores = await prisma.setores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends setoresUpdateManyArgs>(args: SelectSubset<T, setoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Setores.
     * @param {setoresUpsertArgs} args - Arguments to update or create a Setores.
     * @example
     * // Update or create a Setores
     * const setores = await prisma.setores.upsert({
     *   create: {
     *     // ... data to create a Setores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setores we want to update
     *   }
     * })
     */
    upsert<T extends setoresUpsertArgs>(args: SelectSubset<T, setoresUpsertArgs<ExtArgs>>): Prisma__setoresClient<$Result.GetResult<Prisma.$setoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Setores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setoresCountArgs} args - Arguments to filter Setores to count.
     * @example
     * // Count the number of Setores
     * const count = await prisma.setores.count({
     *   where: {
     *     // ... the filter for the Setores we want to count
     *   }
     * })
    **/
    count<T extends setoresCountArgs>(
      args?: Subset<T, setoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SetoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SetoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SetoresAggregateArgs>(args: Subset<T, SetoresAggregateArgs>): Prisma.PrismaPromise<GetSetoresAggregateType<T>>

    /**
     * Group by Setores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {setoresGroupByArgs} args - Group by arguments.
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
      T extends setoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: setoresGroupByArgs['orderBy'] }
        : { orderBy?: setoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, setoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSetoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the setores model
   */
  readonly fields: setoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for setores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__setoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the setores model
   */
  interface setoresFieldRefs {
    readonly id: FieldRef<"setores", 'Int'>
    readonly nome: FieldRef<"setores", 'String'>
    readonly nome_organograma: FieldRef<"setores", 'String'>
    readonly area_id: FieldRef<"setores", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * setores findUnique
   */
  export type setoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setores
     */
    select?: setoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setores
     */
    omit?: setoresOmit<ExtArgs> | null
    /**
     * Filter, which setores to fetch.
     */
    where: setoresWhereUniqueInput
  }

  /**
   * setores findUniqueOrThrow
   */
  export type setoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setores
     */
    select?: setoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setores
     */
    omit?: setoresOmit<ExtArgs> | null
    /**
     * Filter, which setores to fetch.
     */
    where: setoresWhereUniqueInput
  }

  /**
   * setores findFirst
   */
  export type setoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setores
     */
    select?: setoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setores
     */
    omit?: setoresOmit<ExtArgs> | null
    /**
     * Filter, which setores to fetch.
     */
    where?: setoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of setores to fetch.
     */
    orderBy?: setoresOrderByWithRelationInput | setoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for setores.
     */
    cursor?: setoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` setores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` setores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of setores.
     */
    distinct?: SetoresScalarFieldEnum | SetoresScalarFieldEnum[]
  }

  /**
   * setores findFirstOrThrow
   */
  export type setoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setores
     */
    select?: setoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setores
     */
    omit?: setoresOmit<ExtArgs> | null
    /**
     * Filter, which setores to fetch.
     */
    where?: setoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of setores to fetch.
     */
    orderBy?: setoresOrderByWithRelationInput | setoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for setores.
     */
    cursor?: setoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` setores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` setores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of setores.
     */
    distinct?: SetoresScalarFieldEnum | SetoresScalarFieldEnum[]
  }

  /**
   * setores findMany
   */
  export type setoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setores
     */
    select?: setoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setores
     */
    omit?: setoresOmit<ExtArgs> | null
    /**
     * Filter, which setores to fetch.
     */
    where?: setoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of setores to fetch.
     */
    orderBy?: setoresOrderByWithRelationInput | setoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing setores.
     */
    cursor?: setoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` setores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` setores.
     */
    skip?: number
    distinct?: SetoresScalarFieldEnum | SetoresScalarFieldEnum[]
  }

  /**
   * setores create
   */
  export type setoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setores
     */
    select?: setoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setores
     */
    omit?: setoresOmit<ExtArgs> | null
    /**
     * The data needed to create a setores.
     */
    data: XOR<setoresCreateInput, setoresUncheckedCreateInput>
  }

  /**
   * setores createMany
   */
  export type setoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many setores.
     */
    data: setoresCreateManyInput | setoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * setores update
   */
  export type setoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setores
     */
    select?: setoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setores
     */
    omit?: setoresOmit<ExtArgs> | null
    /**
     * The data needed to update a setores.
     */
    data: XOR<setoresUpdateInput, setoresUncheckedUpdateInput>
    /**
     * Choose, which setores to update.
     */
    where: setoresWhereUniqueInput
  }

  /**
   * setores updateMany
   */
  export type setoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update setores.
     */
    data: XOR<setoresUpdateManyMutationInput, setoresUncheckedUpdateManyInput>
    /**
     * Filter which setores to update
     */
    where?: setoresWhereInput
    /**
     * Limit how many setores to update.
     */
    limit?: number
  }

  /**
   * setores upsert
   */
  export type setoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setores
     */
    select?: setoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setores
     */
    omit?: setoresOmit<ExtArgs> | null
    /**
     * The filter to search for the setores to update in case it exists.
     */
    where: setoresWhereUniqueInput
    /**
     * In case the setores found by the `where` argument doesn't exist, create a new setores with this data.
     */
    create: XOR<setoresCreateInput, setoresUncheckedCreateInput>
    /**
     * In case the setores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<setoresUpdateInput, setoresUncheckedUpdateInput>
  }

  /**
   * setores delete
   */
  export type setoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setores
     */
    select?: setoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setores
     */
    omit?: setoresOmit<ExtArgs> | null
    /**
     * Filter which setores to delete.
     */
    where: setoresWhereUniqueInput
  }

  /**
   * setores deleteMany
   */
  export type setoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which setores to delete
     */
    where?: setoresWhereInput
    /**
     * Limit how many setores to delete.
     */
    limit?: number
  }

  /**
   * setores without action
   */
  export type setoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the setores
     */
    select?: setoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the setores
     */
    omit?: setoresOmit<ExtArgs> | null
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


  export const AcessosScalarFieldEnum: {
    id: 'id',
    usuario: 'usuario',
    permissoes: 'permissoes'
  };

  export type AcessosScalarFieldEnum = (typeof AcessosScalarFieldEnum)[keyof typeof AcessosScalarFieldEnum]


  export const AreasScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type AreasScalarFieldEnum = (typeof AreasScalarFieldEnum)[keyof typeof AreasScalarFieldEnum]


  export const Centro_custoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    nome_totvs: 'nome_totvs',
    nome_organograma: 'nome_organograma',
    codigo_centro_custo: 'codigo_centro_custo',
    area_id: 'area_id',
    setor_id: 'setor_id'
  };

  export type Centro_custoScalarFieldEnum = (typeof Centro_custoScalarFieldEnum)[keyof typeof Centro_custoScalarFieldEnum]


  export const ColaboradoresScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    nome_totvs: 'nome_totvs',
    matricula: 'matricula',
    cargo: 'cargo',
    foto: 'foto',
    data_admissao: 'data_admissao',
    data_demissao: 'data_demissao',
    hierarquia_id: 'hierarquia_id',
    area_id: 'area_id',
    setor_id: 'setor_id',
    centro_custo_id: 'centro_custo_id',
    comite_id: 'comite_id',
    comissao_id: 'comissao_id',
    programa_id: 'programa_id',
    equipe_id: 'equipe_id',
    ws_id: 'ws_id',
    ativo: 'ativo'
  };

  export type ColaboradoresScalarFieldEnum = (typeof ColaboradoresScalarFieldEnum)[keyof typeof ColaboradoresScalarFieldEnum]


  export const ComissoesScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type ComissoesScalarFieldEnum = (typeof ComissoesScalarFieldEnum)[keyof typeof ComissoesScalarFieldEnum]


  export const ComitesScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type ComitesScalarFieldEnum = (typeof ComitesScalarFieldEnum)[keyof typeof ComitesScalarFieldEnum]


  export const EquipesScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    centro_custo_id: 'centro_custo_id'
  };

  export type EquipesScalarFieldEnum = (typeof EquipesScalarFieldEnum)[keyof typeof EquipesScalarFieldEnum]


  export const HierarquiaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    valor: 'valor'
  };

  export type HierarquiaScalarFieldEnum = (typeof HierarquiaScalarFieldEnum)[keyof typeof HierarquiaScalarFieldEnum]


  export const LogsScalarFieldEnum: {
    id: 'id',
    ip: 'ip',
    usuario: 'usuario',
    acao: 'acao',
    data: 'data'
  };

  export type LogsScalarFieldEnum = (typeof LogsScalarFieldEnum)[keyof typeof LogsScalarFieldEnum]


  export const ProgramasScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    centro_custo: 'centro_custo'
  };

  export type ProgramasScalarFieldEnum = (typeof ProgramasScalarFieldEnum)[keyof typeof ProgramasScalarFieldEnum]


  export const SetoresScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    nome_organograma: 'nome_organograma',
    area_id: 'area_id'
  };

  export type SetoresScalarFieldEnum = (typeof SetoresScalarFieldEnum)[keyof typeof SetoresScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const acessosOrderByRelevanceFieldEnum: {
    usuario: 'usuario',
    permissoes: 'permissoes'
  };

  export type acessosOrderByRelevanceFieldEnum = (typeof acessosOrderByRelevanceFieldEnum)[keyof typeof acessosOrderByRelevanceFieldEnum]


  export const areasOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type areasOrderByRelevanceFieldEnum = (typeof areasOrderByRelevanceFieldEnum)[keyof typeof areasOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const centro_custoOrderByRelevanceFieldEnum: {
    nome: 'nome',
    nome_totvs: 'nome_totvs',
    nome_organograma: 'nome_organograma',
    codigo_centro_custo: 'codigo_centro_custo'
  };

  export type centro_custoOrderByRelevanceFieldEnum = (typeof centro_custoOrderByRelevanceFieldEnum)[keyof typeof centro_custoOrderByRelevanceFieldEnum]


  export const colaboradoresOrderByRelevanceFieldEnum: {
    nome: 'nome',
    nome_totvs: 'nome_totvs',
    matricula: 'matricula',
    cargo: 'cargo',
    foto: 'foto',
    area_id: 'area_id',
    setor_id: 'setor_id',
    centro_custo_id: 'centro_custo_id',
    comite_id: 'comite_id',
    comissao_id: 'comissao_id',
    programa_id: 'programa_id',
    equipe_id: 'equipe_id',
    ws_id: 'ws_id'
  };

  export type colaboradoresOrderByRelevanceFieldEnum = (typeof colaboradoresOrderByRelevanceFieldEnum)[keyof typeof colaboradoresOrderByRelevanceFieldEnum]


  export const comissoesOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type comissoesOrderByRelevanceFieldEnum = (typeof comissoesOrderByRelevanceFieldEnum)[keyof typeof comissoesOrderByRelevanceFieldEnum]


  export const comitesOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type comitesOrderByRelevanceFieldEnum = (typeof comitesOrderByRelevanceFieldEnum)[keyof typeof comitesOrderByRelevanceFieldEnum]


  export const equipesOrderByRelevanceFieldEnum: {
    nome: 'nome',
    centro_custo_id: 'centro_custo_id'
  };

  export type equipesOrderByRelevanceFieldEnum = (typeof equipesOrderByRelevanceFieldEnum)[keyof typeof equipesOrderByRelevanceFieldEnum]


  export const hierarquiaOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type hierarquiaOrderByRelevanceFieldEnum = (typeof hierarquiaOrderByRelevanceFieldEnum)[keyof typeof hierarquiaOrderByRelevanceFieldEnum]


  export const logsOrderByRelevanceFieldEnum: {
    ip: 'ip',
    usuario: 'usuario',
    acao: 'acao'
  };

  export type logsOrderByRelevanceFieldEnum = (typeof logsOrderByRelevanceFieldEnum)[keyof typeof logsOrderByRelevanceFieldEnum]


  export const programasOrderByRelevanceFieldEnum: {
    nome: 'nome',
    centro_custo: 'centro_custo'
  };

  export type programasOrderByRelevanceFieldEnum = (typeof programasOrderByRelevanceFieldEnum)[keyof typeof programasOrderByRelevanceFieldEnum]


  export const setoresOrderByRelevanceFieldEnum: {
    nome: 'nome',
    nome_organograma: 'nome_organograma'
  };

  export type setoresOrderByRelevanceFieldEnum = (typeof setoresOrderByRelevanceFieldEnum)[keyof typeof setoresOrderByRelevanceFieldEnum]


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


  export type acessosWhereInput = {
    AND?: acessosWhereInput | acessosWhereInput[]
    OR?: acessosWhereInput[]
    NOT?: acessosWhereInput | acessosWhereInput[]
    id?: IntFilter<"acessos"> | number
    usuario?: StringFilter<"acessos"> | string
    permissoes?: StringFilter<"acessos"> | string
  }

  export type acessosOrderByWithRelationInput = {
    id?: SortOrder
    usuario?: SortOrder
    permissoes?: SortOrder
    _relevance?: acessosOrderByRelevanceInput
  }

  export type acessosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: acessosWhereInput | acessosWhereInput[]
    OR?: acessosWhereInput[]
    NOT?: acessosWhereInput | acessosWhereInput[]
    usuario?: StringFilter<"acessos"> | string
    permissoes?: StringFilter<"acessos"> | string
  }, "id">

  export type acessosOrderByWithAggregationInput = {
    id?: SortOrder
    usuario?: SortOrder
    permissoes?: SortOrder
    _count?: acessosCountOrderByAggregateInput
    _avg?: acessosAvgOrderByAggregateInput
    _max?: acessosMaxOrderByAggregateInput
    _min?: acessosMinOrderByAggregateInput
    _sum?: acessosSumOrderByAggregateInput
  }

  export type acessosScalarWhereWithAggregatesInput = {
    AND?: acessosScalarWhereWithAggregatesInput | acessosScalarWhereWithAggregatesInput[]
    OR?: acessosScalarWhereWithAggregatesInput[]
    NOT?: acessosScalarWhereWithAggregatesInput | acessosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"acessos"> | number
    usuario?: StringWithAggregatesFilter<"acessos"> | string
    permissoes?: StringWithAggregatesFilter<"acessos"> | string
  }

  export type areasWhereInput = {
    AND?: areasWhereInput | areasWhereInput[]
    OR?: areasWhereInput[]
    NOT?: areasWhereInput | areasWhereInput[]
    id?: IntFilter<"areas"> | number
    nome?: StringFilter<"areas"> | string
  }

  export type areasOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    _relevance?: areasOrderByRelevanceInput
  }

  export type areasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: areasWhereInput | areasWhereInput[]
    OR?: areasWhereInput[]
    NOT?: areasWhereInput | areasWhereInput[]
    nome?: StringFilter<"areas"> | string
  }, "id">

  export type areasOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: areasCountOrderByAggregateInput
    _avg?: areasAvgOrderByAggregateInput
    _max?: areasMaxOrderByAggregateInput
    _min?: areasMinOrderByAggregateInput
    _sum?: areasSumOrderByAggregateInput
  }

  export type areasScalarWhereWithAggregatesInput = {
    AND?: areasScalarWhereWithAggregatesInput | areasScalarWhereWithAggregatesInput[]
    OR?: areasScalarWhereWithAggregatesInput[]
    NOT?: areasScalarWhereWithAggregatesInput | areasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"areas"> | number
    nome?: StringWithAggregatesFilter<"areas"> | string
  }

  export type centro_custoWhereInput = {
    AND?: centro_custoWhereInput | centro_custoWhereInput[]
    OR?: centro_custoWhereInput[]
    NOT?: centro_custoWhereInput | centro_custoWhereInput[]
    id?: IntFilter<"centro_custo"> | number
    nome?: StringFilter<"centro_custo"> | string
    nome_totvs?: StringFilter<"centro_custo"> | string
    nome_organograma?: StringNullableFilter<"centro_custo"> | string | null
    codigo_centro_custo?: StringFilter<"centro_custo"> | string
    area_id?: IntFilter<"centro_custo"> | number
    setor_id?: IntFilter<"centro_custo"> | number
  }

  export type centro_custoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_totvs?: SortOrder
    nome_organograma?: SortOrderInput | SortOrder
    codigo_centro_custo?: SortOrder
    area_id?: SortOrder
    setor_id?: SortOrder
    _relevance?: centro_custoOrderByRelevanceInput
  }

  export type centro_custoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: centro_custoWhereInput | centro_custoWhereInput[]
    OR?: centro_custoWhereInput[]
    NOT?: centro_custoWhereInput | centro_custoWhereInput[]
    nome?: StringFilter<"centro_custo"> | string
    nome_totvs?: StringFilter<"centro_custo"> | string
    nome_organograma?: StringNullableFilter<"centro_custo"> | string | null
    codigo_centro_custo?: StringFilter<"centro_custo"> | string
    area_id?: IntFilter<"centro_custo"> | number
    setor_id?: IntFilter<"centro_custo"> | number
  }, "id">

  export type centro_custoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_totvs?: SortOrder
    nome_organograma?: SortOrderInput | SortOrder
    codigo_centro_custo?: SortOrder
    area_id?: SortOrder
    setor_id?: SortOrder
    _count?: centro_custoCountOrderByAggregateInput
    _avg?: centro_custoAvgOrderByAggregateInput
    _max?: centro_custoMaxOrderByAggregateInput
    _min?: centro_custoMinOrderByAggregateInput
    _sum?: centro_custoSumOrderByAggregateInput
  }

  export type centro_custoScalarWhereWithAggregatesInput = {
    AND?: centro_custoScalarWhereWithAggregatesInput | centro_custoScalarWhereWithAggregatesInput[]
    OR?: centro_custoScalarWhereWithAggregatesInput[]
    NOT?: centro_custoScalarWhereWithAggregatesInput | centro_custoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"centro_custo"> | number
    nome?: StringWithAggregatesFilter<"centro_custo"> | string
    nome_totvs?: StringWithAggregatesFilter<"centro_custo"> | string
    nome_organograma?: StringNullableWithAggregatesFilter<"centro_custo"> | string | null
    codigo_centro_custo?: StringWithAggregatesFilter<"centro_custo"> | string
    area_id?: IntWithAggregatesFilter<"centro_custo"> | number
    setor_id?: IntWithAggregatesFilter<"centro_custo"> | number
  }

  export type colaboradoresWhereInput = {
    AND?: colaboradoresWhereInput | colaboradoresWhereInput[]
    OR?: colaboradoresWhereInput[]
    NOT?: colaboradoresWhereInput | colaboradoresWhereInput[]
    id?: IntFilter<"colaboradores"> | number
    nome?: StringFilter<"colaboradores"> | string
    nome_totvs?: StringNullableFilter<"colaboradores"> | string | null
    matricula?: StringNullableFilter<"colaboradores"> | string | null
    cargo?: StringNullableFilter<"colaboradores"> | string | null
    foto?: StringNullableFilter<"colaboradores"> | string | null
    data_admissao?: DateTimeNullableFilter<"colaboradores"> | Date | string | null
    data_demissao?: DateTimeNullableFilter<"colaboradores"> | Date | string | null
    hierarquia_id?: IntNullableFilter<"colaboradores"> | number | null
    area_id?: StringNullableFilter<"colaboradores"> | string | null
    setor_id?: StringNullableFilter<"colaboradores"> | string | null
    centro_custo_id?: StringNullableFilter<"colaboradores"> | string | null
    comite_id?: StringNullableFilter<"colaboradores"> | string | null
    comissao_id?: StringNullableFilter<"colaboradores"> | string | null
    programa_id?: StringNullableFilter<"colaboradores"> | string | null
    equipe_id?: StringNullableFilter<"colaboradores"> | string | null
    ws_id?: StringNullableFilter<"colaboradores"> | string | null
    ativo?: IntNullableFilter<"colaboradores"> | number | null
  }

  export type colaboradoresOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_totvs?: SortOrderInput | SortOrder
    matricula?: SortOrderInput | SortOrder
    cargo?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    data_admissao?: SortOrderInput | SortOrder
    data_demissao?: SortOrderInput | SortOrder
    hierarquia_id?: SortOrderInput | SortOrder
    area_id?: SortOrderInput | SortOrder
    setor_id?: SortOrderInput | SortOrder
    centro_custo_id?: SortOrderInput | SortOrder
    comite_id?: SortOrderInput | SortOrder
    comissao_id?: SortOrderInput | SortOrder
    programa_id?: SortOrderInput | SortOrder
    equipe_id?: SortOrderInput | SortOrder
    ws_id?: SortOrderInput | SortOrder
    ativo?: SortOrderInput | SortOrder
    _relevance?: colaboradoresOrderByRelevanceInput
  }

  export type colaboradoresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: colaboradoresWhereInput | colaboradoresWhereInput[]
    OR?: colaboradoresWhereInput[]
    NOT?: colaboradoresWhereInput | colaboradoresWhereInput[]
    nome?: StringFilter<"colaboradores"> | string
    nome_totvs?: StringNullableFilter<"colaboradores"> | string | null
    matricula?: StringNullableFilter<"colaboradores"> | string | null
    cargo?: StringNullableFilter<"colaboradores"> | string | null
    foto?: StringNullableFilter<"colaboradores"> | string | null
    data_admissao?: DateTimeNullableFilter<"colaboradores"> | Date | string | null
    data_demissao?: DateTimeNullableFilter<"colaboradores"> | Date | string | null
    hierarquia_id?: IntNullableFilter<"colaboradores"> | number | null
    area_id?: StringNullableFilter<"colaboradores"> | string | null
    setor_id?: StringNullableFilter<"colaboradores"> | string | null
    centro_custo_id?: StringNullableFilter<"colaboradores"> | string | null
    comite_id?: StringNullableFilter<"colaboradores"> | string | null
    comissao_id?: StringNullableFilter<"colaboradores"> | string | null
    programa_id?: StringNullableFilter<"colaboradores"> | string | null
    equipe_id?: StringNullableFilter<"colaboradores"> | string | null
    ws_id?: StringNullableFilter<"colaboradores"> | string | null
    ativo?: IntNullableFilter<"colaboradores"> | number | null
  }, "id">

  export type colaboradoresOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_totvs?: SortOrderInput | SortOrder
    matricula?: SortOrderInput | SortOrder
    cargo?: SortOrderInput | SortOrder
    foto?: SortOrderInput | SortOrder
    data_admissao?: SortOrderInput | SortOrder
    data_demissao?: SortOrderInput | SortOrder
    hierarquia_id?: SortOrderInput | SortOrder
    area_id?: SortOrderInput | SortOrder
    setor_id?: SortOrderInput | SortOrder
    centro_custo_id?: SortOrderInput | SortOrder
    comite_id?: SortOrderInput | SortOrder
    comissao_id?: SortOrderInput | SortOrder
    programa_id?: SortOrderInput | SortOrder
    equipe_id?: SortOrderInput | SortOrder
    ws_id?: SortOrderInput | SortOrder
    ativo?: SortOrderInput | SortOrder
    _count?: colaboradoresCountOrderByAggregateInput
    _avg?: colaboradoresAvgOrderByAggregateInput
    _max?: colaboradoresMaxOrderByAggregateInput
    _min?: colaboradoresMinOrderByAggregateInput
    _sum?: colaboradoresSumOrderByAggregateInput
  }

  export type colaboradoresScalarWhereWithAggregatesInput = {
    AND?: colaboradoresScalarWhereWithAggregatesInput | colaboradoresScalarWhereWithAggregatesInput[]
    OR?: colaboradoresScalarWhereWithAggregatesInput[]
    NOT?: colaboradoresScalarWhereWithAggregatesInput | colaboradoresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"colaboradores"> | number
    nome?: StringWithAggregatesFilter<"colaboradores"> | string
    nome_totvs?: StringNullableWithAggregatesFilter<"colaboradores"> | string | null
    matricula?: StringNullableWithAggregatesFilter<"colaboradores"> | string | null
    cargo?: StringNullableWithAggregatesFilter<"colaboradores"> | string | null
    foto?: StringNullableWithAggregatesFilter<"colaboradores"> | string | null
    data_admissao?: DateTimeNullableWithAggregatesFilter<"colaboradores"> | Date | string | null
    data_demissao?: DateTimeNullableWithAggregatesFilter<"colaboradores"> | Date | string | null
    hierarquia_id?: IntNullableWithAggregatesFilter<"colaboradores"> | number | null
    area_id?: StringNullableWithAggregatesFilter<"colaboradores"> | string | null
    setor_id?: StringNullableWithAggregatesFilter<"colaboradores"> | string | null
    centro_custo_id?: StringNullableWithAggregatesFilter<"colaboradores"> | string | null
    comite_id?: StringNullableWithAggregatesFilter<"colaboradores"> | string | null
    comissao_id?: StringNullableWithAggregatesFilter<"colaboradores"> | string | null
    programa_id?: StringNullableWithAggregatesFilter<"colaboradores"> | string | null
    equipe_id?: StringNullableWithAggregatesFilter<"colaboradores"> | string | null
    ws_id?: StringNullableWithAggregatesFilter<"colaboradores"> | string | null
    ativo?: IntNullableWithAggregatesFilter<"colaboradores"> | number | null
  }

  export type comissoesWhereInput = {
    AND?: comissoesWhereInput | comissoesWhereInput[]
    OR?: comissoesWhereInput[]
    NOT?: comissoesWhereInput | comissoesWhereInput[]
    id?: IntFilter<"comissoes"> | number
    nome?: StringFilter<"comissoes"> | string
  }

  export type comissoesOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    _relevance?: comissoesOrderByRelevanceInput
  }

  export type comissoesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: comissoesWhereInput | comissoesWhereInput[]
    OR?: comissoesWhereInput[]
    NOT?: comissoesWhereInput | comissoesWhereInput[]
    nome?: StringFilter<"comissoes"> | string
  }, "id">

  export type comissoesOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: comissoesCountOrderByAggregateInput
    _avg?: comissoesAvgOrderByAggregateInput
    _max?: comissoesMaxOrderByAggregateInput
    _min?: comissoesMinOrderByAggregateInput
    _sum?: comissoesSumOrderByAggregateInput
  }

  export type comissoesScalarWhereWithAggregatesInput = {
    AND?: comissoesScalarWhereWithAggregatesInput | comissoesScalarWhereWithAggregatesInput[]
    OR?: comissoesScalarWhereWithAggregatesInput[]
    NOT?: comissoesScalarWhereWithAggregatesInput | comissoesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"comissoes"> | number
    nome?: StringWithAggregatesFilter<"comissoes"> | string
  }

  export type comitesWhereInput = {
    AND?: comitesWhereInput | comitesWhereInput[]
    OR?: comitesWhereInput[]
    NOT?: comitesWhereInput | comitesWhereInput[]
    id?: IntFilter<"comites"> | number
    nome?: StringFilter<"comites"> | string
  }

  export type comitesOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    _relevance?: comitesOrderByRelevanceInput
  }

  export type comitesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: comitesWhereInput | comitesWhereInput[]
    OR?: comitesWhereInput[]
    NOT?: comitesWhereInput | comitesWhereInput[]
    nome?: StringFilter<"comites"> | string
  }, "id">

  export type comitesOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: comitesCountOrderByAggregateInput
    _avg?: comitesAvgOrderByAggregateInput
    _max?: comitesMaxOrderByAggregateInput
    _min?: comitesMinOrderByAggregateInput
    _sum?: comitesSumOrderByAggregateInput
  }

  export type comitesScalarWhereWithAggregatesInput = {
    AND?: comitesScalarWhereWithAggregatesInput | comitesScalarWhereWithAggregatesInput[]
    OR?: comitesScalarWhereWithAggregatesInput[]
    NOT?: comitesScalarWhereWithAggregatesInput | comitesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"comites"> | number
    nome?: StringWithAggregatesFilter<"comites"> | string
  }

  export type equipesWhereInput = {
    AND?: equipesWhereInput | equipesWhereInput[]
    OR?: equipesWhereInput[]
    NOT?: equipesWhereInput | equipesWhereInput[]
    id?: IntFilter<"equipes"> | number
    nome?: StringFilter<"equipes"> | string
    centro_custo_id?: StringNullableFilter<"equipes"> | string | null
  }

  export type equipesOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    centro_custo_id?: SortOrderInput | SortOrder
    _relevance?: equipesOrderByRelevanceInput
  }

  export type equipesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: equipesWhereInput | equipesWhereInput[]
    OR?: equipesWhereInput[]
    NOT?: equipesWhereInput | equipesWhereInput[]
    nome?: StringFilter<"equipes"> | string
    centro_custo_id?: StringNullableFilter<"equipes"> | string | null
  }, "id">

  export type equipesOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    centro_custo_id?: SortOrderInput | SortOrder
    _count?: equipesCountOrderByAggregateInput
    _avg?: equipesAvgOrderByAggregateInput
    _max?: equipesMaxOrderByAggregateInput
    _min?: equipesMinOrderByAggregateInput
    _sum?: equipesSumOrderByAggregateInput
  }

  export type equipesScalarWhereWithAggregatesInput = {
    AND?: equipesScalarWhereWithAggregatesInput | equipesScalarWhereWithAggregatesInput[]
    OR?: equipesScalarWhereWithAggregatesInput[]
    NOT?: equipesScalarWhereWithAggregatesInput | equipesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"equipes"> | number
    nome?: StringWithAggregatesFilter<"equipes"> | string
    centro_custo_id?: StringNullableWithAggregatesFilter<"equipes"> | string | null
  }

  export type hierarquiaWhereInput = {
    AND?: hierarquiaWhereInput | hierarquiaWhereInput[]
    OR?: hierarquiaWhereInput[]
    NOT?: hierarquiaWhereInput | hierarquiaWhereInput[]
    id?: IntFilter<"hierarquia"> | number
    nome?: StringFilter<"hierarquia"> | string
    valor?: IntFilter<"hierarquia"> | number
  }

  export type hierarquiaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    valor?: SortOrder
    _relevance?: hierarquiaOrderByRelevanceInput
  }

  export type hierarquiaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: hierarquiaWhereInput | hierarquiaWhereInput[]
    OR?: hierarquiaWhereInput[]
    NOT?: hierarquiaWhereInput | hierarquiaWhereInput[]
    nome?: StringFilter<"hierarquia"> | string
    valor?: IntFilter<"hierarquia"> | number
  }, "id">

  export type hierarquiaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    valor?: SortOrder
    _count?: hierarquiaCountOrderByAggregateInput
    _avg?: hierarquiaAvgOrderByAggregateInput
    _max?: hierarquiaMaxOrderByAggregateInput
    _min?: hierarquiaMinOrderByAggregateInput
    _sum?: hierarquiaSumOrderByAggregateInput
  }

  export type hierarquiaScalarWhereWithAggregatesInput = {
    AND?: hierarquiaScalarWhereWithAggregatesInput | hierarquiaScalarWhereWithAggregatesInput[]
    OR?: hierarquiaScalarWhereWithAggregatesInput[]
    NOT?: hierarquiaScalarWhereWithAggregatesInput | hierarquiaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"hierarquia"> | number
    nome?: StringWithAggregatesFilter<"hierarquia"> | string
    valor?: IntWithAggregatesFilter<"hierarquia"> | number
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

  export type programasWhereInput = {
    AND?: programasWhereInput | programasWhereInput[]
    OR?: programasWhereInput[]
    NOT?: programasWhereInput | programasWhereInput[]
    id?: IntFilter<"programas"> | number
    nome?: StringFilter<"programas"> | string
    centro_custo?: StringNullableFilter<"programas"> | string | null
  }

  export type programasOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    centro_custo?: SortOrderInput | SortOrder
    _relevance?: programasOrderByRelevanceInput
  }

  export type programasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: programasWhereInput | programasWhereInput[]
    OR?: programasWhereInput[]
    NOT?: programasWhereInput | programasWhereInput[]
    nome?: StringFilter<"programas"> | string
    centro_custo?: StringNullableFilter<"programas"> | string | null
  }, "id">

  export type programasOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    centro_custo?: SortOrderInput | SortOrder
    _count?: programasCountOrderByAggregateInput
    _avg?: programasAvgOrderByAggregateInput
    _max?: programasMaxOrderByAggregateInput
    _min?: programasMinOrderByAggregateInput
    _sum?: programasSumOrderByAggregateInput
  }

  export type programasScalarWhereWithAggregatesInput = {
    AND?: programasScalarWhereWithAggregatesInput | programasScalarWhereWithAggregatesInput[]
    OR?: programasScalarWhereWithAggregatesInput[]
    NOT?: programasScalarWhereWithAggregatesInput | programasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"programas"> | number
    nome?: StringWithAggregatesFilter<"programas"> | string
    centro_custo?: StringNullableWithAggregatesFilter<"programas"> | string | null
  }

  export type setoresWhereInput = {
    AND?: setoresWhereInput | setoresWhereInput[]
    OR?: setoresWhereInput[]
    NOT?: setoresWhereInput | setoresWhereInput[]
    id?: IntFilter<"setores"> | number
    nome?: StringFilter<"setores"> | string
    nome_organograma?: StringNullableFilter<"setores"> | string | null
    area_id?: IntFilter<"setores"> | number
  }

  export type setoresOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_organograma?: SortOrderInput | SortOrder
    area_id?: SortOrder
    _relevance?: setoresOrderByRelevanceInput
  }

  export type setoresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: setoresWhereInput | setoresWhereInput[]
    OR?: setoresWhereInput[]
    NOT?: setoresWhereInput | setoresWhereInput[]
    nome?: StringFilter<"setores"> | string
    nome_organograma?: StringNullableFilter<"setores"> | string | null
    area_id?: IntFilter<"setores"> | number
  }, "id">

  export type setoresOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_organograma?: SortOrderInput | SortOrder
    area_id?: SortOrder
    _count?: setoresCountOrderByAggregateInput
    _avg?: setoresAvgOrderByAggregateInput
    _max?: setoresMaxOrderByAggregateInput
    _min?: setoresMinOrderByAggregateInput
    _sum?: setoresSumOrderByAggregateInput
  }

  export type setoresScalarWhereWithAggregatesInput = {
    AND?: setoresScalarWhereWithAggregatesInput | setoresScalarWhereWithAggregatesInput[]
    OR?: setoresScalarWhereWithAggregatesInput[]
    NOT?: setoresScalarWhereWithAggregatesInput | setoresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"setores"> | number
    nome?: StringWithAggregatesFilter<"setores"> | string
    nome_organograma?: StringNullableWithAggregatesFilter<"setores"> | string | null
    area_id?: IntWithAggregatesFilter<"setores"> | number
  }

  export type acessosCreateInput = {
    usuario: string
    permissoes: string
  }

  export type acessosUncheckedCreateInput = {
    id?: number
    usuario: string
    permissoes: string
  }

  export type acessosUpdateInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    permissoes?: StringFieldUpdateOperationsInput | string
  }

  export type acessosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    permissoes?: StringFieldUpdateOperationsInput | string
  }

  export type acessosCreateManyInput = {
    id?: number
    usuario: string
    permissoes: string
  }

  export type acessosUpdateManyMutationInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    permissoes?: StringFieldUpdateOperationsInput | string
  }

  export type acessosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    permissoes?: StringFieldUpdateOperationsInput | string
  }

  export type areasCreateInput = {
    nome: string
  }

  export type areasUncheckedCreateInput = {
    id?: number
    nome: string
  }

  export type areasUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type areasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type areasCreateManyInput = {
    id?: number
    nome: string
  }

  export type areasUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type areasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type centro_custoCreateInput = {
    nome: string
    nome_totvs: string
    nome_organograma?: string | null
    codigo_centro_custo: string
    area_id: number
    setor_id: number
  }

  export type centro_custoUncheckedCreateInput = {
    id?: number
    nome: string
    nome_totvs: string
    nome_organograma?: string | null
    codigo_centro_custo: string
    area_id: number
    setor_id: number
  }

  export type centro_custoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nome_totvs?: StringFieldUpdateOperationsInput | string
    nome_organograma?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_centro_custo?: StringFieldUpdateOperationsInput | string
    area_id?: IntFieldUpdateOperationsInput | number
    setor_id?: IntFieldUpdateOperationsInput | number
  }

  export type centro_custoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_totvs?: StringFieldUpdateOperationsInput | string
    nome_organograma?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_centro_custo?: StringFieldUpdateOperationsInput | string
    area_id?: IntFieldUpdateOperationsInput | number
    setor_id?: IntFieldUpdateOperationsInput | number
  }

  export type centro_custoCreateManyInput = {
    id?: number
    nome: string
    nome_totvs: string
    nome_organograma?: string | null
    codigo_centro_custo: string
    area_id: number
    setor_id: number
  }

  export type centro_custoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nome_totvs?: StringFieldUpdateOperationsInput | string
    nome_organograma?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_centro_custo?: StringFieldUpdateOperationsInput | string
    area_id?: IntFieldUpdateOperationsInput | number
    setor_id?: IntFieldUpdateOperationsInput | number
  }

  export type centro_custoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_totvs?: StringFieldUpdateOperationsInput | string
    nome_organograma?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_centro_custo?: StringFieldUpdateOperationsInput | string
    area_id?: IntFieldUpdateOperationsInput | number
    setor_id?: IntFieldUpdateOperationsInput | number
  }

  export type colaboradoresCreateInput = {
    nome: string
    nome_totvs?: string | null
    matricula?: string | null
    cargo?: string | null
    foto?: string | null
    data_admissao?: Date | string | null
    data_demissao?: Date | string | null
    hierarquia_id?: number | null
    area_id?: string | null
    setor_id?: string | null
    centro_custo_id?: string | null
    comite_id?: string | null
    comissao_id?: string | null
    programa_id?: string | null
    equipe_id?: string | null
    ws_id?: string | null
    ativo?: number | null
  }

  export type colaboradoresUncheckedCreateInput = {
    id?: number
    nome: string
    nome_totvs?: string | null
    matricula?: string | null
    cargo?: string | null
    foto?: string | null
    data_admissao?: Date | string | null
    data_demissao?: Date | string | null
    hierarquia_id?: number | null
    area_id?: string | null
    setor_id?: string | null
    centro_custo_id?: string | null
    comite_id?: string | null
    comissao_id?: string | null
    programa_id?: string | null
    equipe_id?: string | null
    ws_id?: string | null
    ativo?: number | null
  }

  export type colaboradoresUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nome_totvs?: NullableStringFieldUpdateOperationsInput | string | null
    matricula?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    data_admissao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_demissao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hierarquia_id?: NullableIntFieldUpdateOperationsInput | number | null
    area_id?: NullableStringFieldUpdateOperationsInput | string | null
    setor_id?: NullableStringFieldUpdateOperationsInput | string | null
    centro_custo_id?: NullableStringFieldUpdateOperationsInput | string | null
    comite_id?: NullableStringFieldUpdateOperationsInput | string | null
    comissao_id?: NullableStringFieldUpdateOperationsInput | string | null
    programa_id?: NullableStringFieldUpdateOperationsInput | string | null
    equipe_id?: NullableStringFieldUpdateOperationsInput | string | null
    ws_id?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type colaboradoresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_totvs?: NullableStringFieldUpdateOperationsInput | string | null
    matricula?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    data_admissao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_demissao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hierarquia_id?: NullableIntFieldUpdateOperationsInput | number | null
    area_id?: NullableStringFieldUpdateOperationsInput | string | null
    setor_id?: NullableStringFieldUpdateOperationsInput | string | null
    centro_custo_id?: NullableStringFieldUpdateOperationsInput | string | null
    comite_id?: NullableStringFieldUpdateOperationsInput | string | null
    comissao_id?: NullableStringFieldUpdateOperationsInput | string | null
    programa_id?: NullableStringFieldUpdateOperationsInput | string | null
    equipe_id?: NullableStringFieldUpdateOperationsInput | string | null
    ws_id?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type colaboradoresCreateManyInput = {
    id?: number
    nome: string
    nome_totvs?: string | null
    matricula?: string | null
    cargo?: string | null
    foto?: string | null
    data_admissao?: Date | string | null
    data_demissao?: Date | string | null
    hierarquia_id?: number | null
    area_id?: string | null
    setor_id?: string | null
    centro_custo_id?: string | null
    comite_id?: string | null
    comissao_id?: string | null
    programa_id?: string | null
    equipe_id?: string | null
    ws_id?: string | null
    ativo?: number | null
  }

  export type colaboradoresUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nome_totvs?: NullableStringFieldUpdateOperationsInput | string | null
    matricula?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    data_admissao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_demissao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hierarquia_id?: NullableIntFieldUpdateOperationsInput | number | null
    area_id?: NullableStringFieldUpdateOperationsInput | string | null
    setor_id?: NullableStringFieldUpdateOperationsInput | string | null
    centro_custo_id?: NullableStringFieldUpdateOperationsInput | string | null
    comite_id?: NullableStringFieldUpdateOperationsInput | string | null
    comissao_id?: NullableStringFieldUpdateOperationsInput | string | null
    programa_id?: NullableStringFieldUpdateOperationsInput | string | null
    equipe_id?: NullableStringFieldUpdateOperationsInput | string | null
    ws_id?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type colaboradoresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_totvs?: NullableStringFieldUpdateOperationsInput | string | null
    matricula?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    data_admissao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_demissao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hierarquia_id?: NullableIntFieldUpdateOperationsInput | number | null
    area_id?: NullableStringFieldUpdateOperationsInput | string | null
    setor_id?: NullableStringFieldUpdateOperationsInput | string | null
    centro_custo_id?: NullableStringFieldUpdateOperationsInput | string | null
    comite_id?: NullableStringFieldUpdateOperationsInput | string | null
    comissao_id?: NullableStringFieldUpdateOperationsInput | string | null
    programa_id?: NullableStringFieldUpdateOperationsInput | string | null
    equipe_id?: NullableStringFieldUpdateOperationsInput | string | null
    ws_id?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type comissoesCreateInput = {
    nome: string
  }

  export type comissoesUncheckedCreateInput = {
    id?: number
    nome: string
  }

  export type comissoesUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type comissoesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type comissoesCreateManyInput = {
    id?: number
    nome: string
  }

  export type comissoesUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type comissoesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type comitesCreateInput = {
    nome: string
  }

  export type comitesUncheckedCreateInput = {
    id?: number
    nome: string
  }

  export type comitesUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type comitesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type comitesCreateManyInput = {
    id?: number
    nome: string
  }

  export type comitesUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type comitesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type equipesCreateInput = {
    nome: string
    centro_custo_id?: string | null
  }

  export type equipesUncheckedCreateInput = {
    id?: number
    nome: string
    centro_custo_id?: string | null
  }

  export type equipesUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    centro_custo_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type equipesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    centro_custo_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type equipesCreateManyInput = {
    id?: number
    nome: string
    centro_custo_id?: string | null
  }

  export type equipesUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    centro_custo_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type equipesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    centro_custo_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type hierarquiaCreateInput = {
    nome: string
    valor: number
  }

  export type hierarquiaUncheckedCreateInput = {
    id?: number
    nome: string
    valor: number
  }

  export type hierarquiaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
  }

  export type hierarquiaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
  }

  export type hierarquiaCreateManyInput = {
    id?: number
    nome: string
    valor: number
  }

  export type hierarquiaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
  }

  export type hierarquiaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    valor?: IntFieldUpdateOperationsInput | number
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

  export type programasCreateInput = {
    nome: string
    centro_custo?: string | null
  }

  export type programasUncheckedCreateInput = {
    id?: number
    nome: string
    centro_custo?: string | null
  }

  export type programasUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    centro_custo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type programasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    centro_custo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type programasCreateManyInput = {
    id?: number
    nome: string
    centro_custo?: string | null
  }

  export type programasUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    centro_custo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type programasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    centro_custo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type setoresCreateInput = {
    nome: string
    nome_organograma?: string | null
    area_id: number
  }

  export type setoresUncheckedCreateInput = {
    id?: number
    nome: string
    nome_organograma?: string | null
    area_id: number
  }

  export type setoresUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nome_organograma?: NullableStringFieldUpdateOperationsInput | string | null
    area_id?: IntFieldUpdateOperationsInput | number
  }

  export type setoresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_organograma?: NullableStringFieldUpdateOperationsInput | string | null
    area_id?: IntFieldUpdateOperationsInput | number
  }

  export type setoresCreateManyInput = {
    id?: number
    nome: string
    nome_organograma?: string | null
    area_id: number
  }

  export type setoresUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nome_organograma?: NullableStringFieldUpdateOperationsInput | string | null
    area_id?: IntFieldUpdateOperationsInput | number
  }

  export type setoresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nome_organograma?: NullableStringFieldUpdateOperationsInput | string | null
    area_id?: IntFieldUpdateOperationsInput | number
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

  export type acessosOrderByRelevanceInput = {
    fields: acessosOrderByRelevanceFieldEnum | acessosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type acessosCountOrderByAggregateInput = {
    id?: SortOrder
    usuario?: SortOrder
    permissoes?: SortOrder
  }

  export type acessosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type acessosMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario?: SortOrder
    permissoes?: SortOrder
  }

  export type acessosMinOrderByAggregateInput = {
    id?: SortOrder
    usuario?: SortOrder
    permissoes?: SortOrder
  }

  export type acessosSumOrderByAggregateInput = {
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

  export type areasOrderByRelevanceInput = {
    fields: areasOrderByRelevanceFieldEnum | areasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type areasCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type areasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type areasMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type areasMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type areasSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type centro_custoOrderByRelevanceInput = {
    fields: centro_custoOrderByRelevanceFieldEnum | centro_custoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type centro_custoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_totvs?: SortOrder
    nome_organograma?: SortOrder
    codigo_centro_custo?: SortOrder
    area_id?: SortOrder
    setor_id?: SortOrder
  }

  export type centro_custoAvgOrderByAggregateInput = {
    id?: SortOrder
    area_id?: SortOrder
    setor_id?: SortOrder
  }

  export type centro_custoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_totvs?: SortOrder
    nome_organograma?: SortOrder
    codigo_centro_custo?: SortOrder
    area_id?: SortOrder
    setor_id?: SortOrder
  }

  export type centro_custoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_totvs?: SortOrder
    nome_organograma?: SortOrder
    codigo_centro_custo?: SortOrder
    area_id?: SortOrder
    setor_id?: SortOrder
  }

  export type centro_custoSumOrderByAggregateInput = {
    id?: SortOrder
    area_id?: SortOrder
    setor_id?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type colaboradoresOrderByRelevanceInput = {
    fields: colaboradoresOrderByRelevanceFieldEnum | colaboradoresOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type colaboradoresCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_totvs?: SortOrder
    matricula?: SortOrder
    cargo?: SortOrder
    foto?: SortOrder
    data_admissao?: SortOrder
    data_demissao?: SortOrder
    hierarquia_id?: SortOrder
    area_id?: SortOrder
    setor_id?: SortOrder
    centro_custo_id?: SortOrder
    comite_id?: SortOrder
    comissao_id?: SortOrder
    programa_id?: SortOrder
    equipe_id?: SortOrder
    ws_id?: SortOrder
    ativo?: SortOrder
  }

  export type colaboradoresAvgOrderByAggregateInput = {
    id?: SortOrder
    hierarquia_id?: SortOrder
    ativo?: SortOrder
  }

  export type colaboradoresMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_totvs?: SortOrder
    matricula?: SortOrder
    cargo?: SortOrder
    foto?: SortOrder
    data_admissao?: SortOrder
    data_demissao?: SortOrder
    hierarquia_id?: SortOrder
    area_id?: SortOrder
    setor_id?: SortOrder
    centro_custo_id?: SortOrder
    comite_id?: SortOrder
    comissao_id?: SortOrder
    programa_id?: SortOrder
    equipe_id?: SortOrder
    ws_id?: SortOrder
    ativo?: SortOrder
  }

  export type colaboradoresMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_totvs?: SortOrder
    matricula?: SortOrder
    cargo?: SortOrder
    foto?: SortOrder
    data_admissao?: SortOrder
    data_demissao?: SortOrder
    hierarquia_id?: SortOrder
    area_id?: SortOrder
    setor_id?: SortOrder
    centro_custo_id?: SortOrder
    comite_id?: SortOrder
    comissao_id?: SortOrder
    programa_id?: SortOrder
    equipe_id?: SortOrder
    ws_id?: SortOrder
    ativo?: SortOrder
  }

  export type colaboradoresSumOrderByAggregateInput = {
    id?: SortOrder
    hierarquia_id?: SortOrder
    ativo?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type comissoesOrderByRelevanceInput = {
    fields: comissoesOrderByRelevanceFieldEnum | comissoesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type comissoesCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type comissoesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type comissoesMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type comissoesMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type comissoesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type comitesOrderByRelevanceInput = {
    fields: comitesOrderByRelevanceFieldEnum | comitesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type comitesCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type comitesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type comitesMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type comitesMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type comitesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type equipesOrderByRelevanceInput = {
    fields: equipesOrderByRelevanceFieldEnum | equipesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type equipesCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    centro_custo_id?: SortOrder
  }

  export type equipesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type equipesMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    centro_custo_id?: SortOrder
  }

  export type equipesMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    centro_custo_id?: SortOrder
  }

  export type equipesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type hierarquiaOrderByRelevanceInput = {
    fields: hierarquiaOrderByRelevanceFieldEnum | hierarquiaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type hierarquiaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    valor?: SortOrder
  }

  export type hierarquiaAvgOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
  }

  export type hierarquiaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    valor?: SortOrder
  }

  export type hierarquiaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    valor?: SortOrder
  }

  export type hierarquiaSumOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
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

  export type programasOrderByRelevanceInput = {
    fields: programasOrderByRelevanceFieldEnum | programasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type programasCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    centro_custo?: SortOrder
  }

  export type programasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type programasMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    centro_custo?: SortOrder
  }

  export type programasMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    centro_custo?: SortOrder
  }

  export type programasSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type setoresOrderByRelevanceInput = {
    fields: setoresOrderByRelevanceFieldEnum | setoresOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type setoresCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_organograma?: SortOrder
    area_id?: SortOrder
  }

  export type setoresAvgOrderByAggregateInput = {
    id?: SortOrder
    area_id?: SortOrder
  }

  export type setoresMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_organograma?: SortOrder
    area_id?: SortOrder
  }

  export type setoresMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nome_organograma?: SortOrder
    area_id?: SortOrder
  }

  export type setoresSumOrderByAggregateInput = {
    id?: SortOrder
    area_id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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