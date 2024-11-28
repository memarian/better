import { Module } from '@nestjs/common';
import { MongoErrorHandlerService } from './services/mongo-error-handler.service';

@Module({
  providers: [MongoErrorHandlerService],
  exports: [MongoErrorHandlerService],
})
export class MongodbModule {}
