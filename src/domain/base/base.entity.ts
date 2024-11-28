export abstract class BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<BaseEntity>) {
    Object.assign(this, partial);
    this.createdAt = partial.createdAt || new Date();
    this.updatedAt = partial.updatedAt || new Date();
  }

  update(): void {
    this.updatedAt = new Date();
  }
}
