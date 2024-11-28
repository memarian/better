export interface PaginationParams {
  page?: number;
  limit?: number;
  sort?: SortParams;
  filter?: FilterParams;
}

export interface SortParams {
  field: string;
  order: 'asc' | 'desc';
}

export interface FilterParams {
  [key: string]: string | number | boolean | Date | Array<string | number>;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginationMeta;
}

export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
