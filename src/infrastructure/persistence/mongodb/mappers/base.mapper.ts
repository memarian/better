export abstract class BaseMapper<T, U> {
  abstract toDomain(entity: U): T;
  abstract toPersistence(domain: T): Partial<U>;
}
