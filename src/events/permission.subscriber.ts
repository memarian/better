// import { InjectRedis } from '@nestjs-modules/ioredis';
// import {
//   Injectable,
//   Logger,
//   OnModuleDestroy,
//   OnModuleInit,
// } from '@nestjs/common';
// import Redis from 'ioredis';
// // import { RedisCacheService } from '../services/redis-cache.service';

// @Injectable()
// export class PermissionSubscriber implements OnModuleInit, OnModuleDestroy {
//   private readonly logger = new Logger(PermissionSubscriber.name);
//   private readonly subscriber: Redis;

//   constructor(
//     @InjectRedis() private readonly redis: Redis,
//     private readonly redisCacheService: RedisCacheService,
//   ) {
//     this.subscriber = redis.duplicate();
//   }

//   async onModuleInit() {
//     await this.subscriber.subscribe('permission:updates');

//     this.subscriber.on('message', async (channel, message) => {
//       if (channel === 'permission:updates') {
//         await this.handlePermissionUpdate(JSON.parse(message));
//       }
//     });
//   }

//   async onModuleDestroy() {
//     await this.subscriber.quit();
//   }

//   private async handlePermissionUpdate(data: {
//     resourceId: string;
//     permissions: any;
//     affectedUserIds: string[];
//     timestamp: number;
//   }) {
//     try {
//       await Promise.all(
//         data.affectedUserIds.map((userId) =>
//           this.redisCacheService.invalidateUserPermissions(userId),
//         ),
//       );
//     } catch (error) {
//       this.logger.error(`Error handling permission update: ${error.message}`);
//     }
//   }
// }
