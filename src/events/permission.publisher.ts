// import { InjectRedis } from '@nestjs-modules/ioredis';
// import { Injectable, Logger } from '@nestjs/common';
// import Redis from 'ioredis';
// import { Types } from 'mongoose';

// @Injectable()
// export class PermissionPublisher {
//   private readonly logger = new Logger(PermissionPublisher.name);

//   constructor(@InjectRedis() private readonly redis: Redis) {}

//   async publishPermissionUpdate(
//     resourceId: Types.ObjectId,
//     permissions: any,
//     affectedUserIds: string[],
//   ): Promise<void> {
//     try {
//       const message = JSON.stringify({
//         resourceId: resourceId.toString(),
//         permissions,
//         affectedUserIds,
//         timestamp: Date.now(),
//       });

//       await this.redis.publish('permission:updates', message);
//     } catch (error) {
//       this.logger.error(`Error publishing permission update: ${error.message}`);
//       throw error;
//     }
//   }
// }
