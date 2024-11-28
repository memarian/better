// import {
//   Permission,
//   PermissionCachePort,
// } from '@domain/permission/permission.types';
// import { InjectRedis } from '@nestjs-modules/ioredis';
// import { Injectable, Logger } from '@nestjs/common';
// import Redis from 'ioredis';

// @Injectable()
// export class RedisPermissionCache implements PermissionCachePort {
//   private readonly logger = new Logger(RedisPermissionCache.name);
//   private readonly DEFAULT_TTL = 24 * 60 * 60; // 24 hours

//   constructor(@InjectRedis() private readonly redis: Redis) {}

//   async getUserPermissions(userId: string): Promise<Permission[] | null> {
//     try {
//       const cached = await this.redis.get(`user:permissions:${userId}`);
//       return cached ? JSON.parse(cached) : null;
//     } catch (error) {
//       this.logger.error(`Cache get error: ${error.message}`);
//       return null;
//     }
//   }

//   async setUserPermissions(
//     userId: string,
//     permissions: Permission[],
//   ): Promise<void> {
//     try {
//       await this.redis.setex(
//         `user:permissions:${userId}`,
//         this.DEFAULT_TTL,
//         JSON.stringify(permissions),
//       );
//     } catch (error) {
//       this.logger.error(`Cache set error: ${error.message}`);
//     }
//   }

//   async invalidateUserPermissions(userIds: string[]): Promise<void> {
//     if (!userIds.length) return;

//     try {
//       const pipeline = this.redis.pipeline();
//       userIds.forEach((id) => pipeline.del(`user:permissions:${id}`));
//       await pipeline.exec();
//     } catch (error) {
//       this.logger.error(`Cache invalidation error: ${error.message}`);
//     }
//   }
// }
