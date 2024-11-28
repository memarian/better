export abstract class BaseRepository<T> {
  constructor(protected readonly model: any) {}

  abstract findById(id: string): Promise<T | null>;
  abstract findByIds(ids: string[]): Promise<T[]>;
  abstract create(entity: Partial<T>): Promise<T>;
  abstract update(id: string, entity: Partial<T>): Promise<T>;
  abstract delete(id: string): Promise<boolean>;

  protected async exists(id: string): Promise<boolean> {
    const entity: Awaited<T> | null = await this.findById(id);
    return !!entity;
  }

  protected handleError(error: any): never {
    throw error;
  }
}
