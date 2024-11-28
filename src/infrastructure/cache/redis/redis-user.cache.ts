// import { User } from '@domain/user/entities/user.entity';
// import { UserCache } from '@domain/user/interfaces/user.cache';
// import { InjectRedis } from '@nestjs-modules/ioredis';
// import { Injectable, Logger } from '@nestjs/common';
// import Redis from 'ioredis';

// @Injectable()
// export class RedisUserCache implements UserCache {
//   private readonly logger = new Logger(RedisUserCache.name);
//   private readonly TTL = 3600; // 1 hour in seconds

//   constructor(@InjectRedis() private readonly redis: Redis) {}

//   async get(id: string): Promise<User | null> {
//     try {
//       const data = await this.redis.get(`user:${id}`);
//       return data ? JSON.parse(data) : null;
//     } catch (error) {
//       this.logger.error(`Error getting user from cache: ${error.message}`);
//       return null;
//     }
//   }

//   async set(id: string, user: User): Promise<void> {
//     try {
//       const userData = JSON.stringify(user);
//       await this.redis.setex(`user:${id}`, this.TTL, userData);
//     } catch (error) {
//       this.logger.error(`Error setting user in cache: ${error.message}`);
//     }
//   }

//   async delete(id: string): Promise<void> {
//     try {
//       await this.redis.del(`user:${id}`);
//     } catch (error) {
//       this.logger.error(`Error deleting user from cache: ${error.message}`);
//     }
//   }
// }
