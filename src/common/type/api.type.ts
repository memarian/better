import { ResponseDto } from '../dto/response.dto';

export type AppApiResponse<T> = ResponseDto<T> | Promise<ResponseDto<T>>;
