import {
  PaginatedResponse,
  PaginationMeta,
  PaginationParams,
} from '@shared/types/pagination.types';

export class PaginationUtil {
  static DEFAULT_PAGE = 1;
  static DEFAULT_LIMIT = 10;
  static MAX_LIMIT = 100;

  // Normalize pagination parameters
  static normalize(params: PaginationParams): Required<PaginationParams> {
    const page = Math.max(params.page || this.DEFAULT_PAGE, 1);
    const limit = Math.min(params.limit || this.DEFAULT_LIMIT, this.MAX_LIMIT);
    const sort = params.sort || { field: 'createdAt', order: 'desc' };
    const filter = params.filter || {};

    return { page, limit, sort, filter };
  }

  static getSkip(params: PaginationParams): number {
    const { page, limit } = this.normalize(params);
    return (page - 1) * limit;
  }

  static createMeta(total: number, params: PaginationParams): PaginationMeta {
    const { page, limit } = this.normalize(params);
    const totalPages = Math.ceil(total / limit);

    return {
      total,
      page,
      limit,
      totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    };
  }

  static createResponse<T>(
    data: T[],
    total: number,
    params: PaginationParams,
  ): PaginatedResponse<T> {
    return {
      data,
      meta: this.createMeta(total, params),
    };
  }
}
