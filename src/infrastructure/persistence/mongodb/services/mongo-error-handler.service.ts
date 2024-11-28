import { Injectable } from '@nestjs/common';
import { MongoError } from 'mongodb';

@Injectable()
export class MongoErrorHandlerService {
  handleError(error: any): never {
    if (error instanceof MongoError) {
      switch (error.code) {
        case 11000:
          throw new Error(
            'Duplicate key error: An entry with this value already exists',
          );
        case 121:
          throw new Error('Document failed validation');
        case 51:
          throw new Error('Failed to establish database connection');
        default:
          throw new Error(`MongoDB error: ${error.message}`);
      }
    }

    throw error;
  }
}
