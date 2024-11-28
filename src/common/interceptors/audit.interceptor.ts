import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuditInterceptor implements NestInterceptor {
  private readonly logger: Logger = new Logger(AuditInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    this.logger.log(`Audit Log: test some logs for request ${request.body}`);

    return next.handle().pipe(
      tap(() => {
        this.logger.log(
          `Audit Log: test some logs for processed request ${request.body}`,
        );
      }),
    );
  }
}
