// import { Process, Processor } from '@nestjs/bull';
// import { Logger } from '@nestjs/common';
// import { Job } from 'bull';
// import { PERMISSION_QUEUE } from '../constants/queues';
// import { PermissionService } from '../services/permission.service';
// import { RedisCacheService } from '../services/redis-cache.service';

// export interface PermissionUpdateJob {
//   type: 'UPDATE_PERMISSIONS' | 'INVALIDATE_CACHE';
//   resourceId: string;
//   permissions?: any;
//   affectedUserIds: string[];
//   metadata?: {
//     triggeredBy: string;
//     timestamp: number;
//   };
// }

// @Processor(PERMISSION_QUEUE)
// export class PermissionProcessor {
//   private readonly logger = new Logger(PermissionProcessor.name);

//   constructor(
//     private readonly redisCacheService: RedisCacheService,
//     private readonly permissionService: PermissionService,
//   ) {}

//   @Process('UPDATE_PERMISSIONS')
//   async handlePermissionUpdate(job: Job<PermissionUpdateJob>) {
//     const { resourceId, permissions, affectedUserIds, metadata } = job.data;

//     try {
//       await this.permissionService.updatePermissionsInDb(
//         resourceId,
//         permissions,
//       );

//       await Promise.all(
//         affectedUserIds.map((userId) =>
//           this.redisCacheService.invalidateUserPermissions(userId),
//         ),
//       );

//       this.logger.log(
//         `Updated permissions for resource ${resourceId}, affecting ${affectedUserIds.length} users`,
//       );

//       return { success: true, updatedAt: new Date() };
//     } catch (error) {
//       this.logger.error(
//         `Failed to process permission update for resource ${resourceId}: ${error.message}`,
//         error.stack,
//       );
//       throw error;
//     }
//   }

//   @Process('INVALIDATE_CACHE')
//   async handleCacheInvalidation(job: Job<PermissionUpdateJob>) {
//     const { affectedUserIds } = job.data;

//     try {
//       await Promise.all(
//         affectedUserIds.map((userId) =>
//           this.redisCacheService.invalidateUserPermissions(userId),
//         ),
//       );

//       return { success: true, invalidatedCount: affectedUserIds.length };
//     } catch (error) {
//       this.logger.error(
//         `Failed to invalidate cache for ${affectedUserIds.length} users: ${error.message}`,
//         error.stack,
//       );
//       throw error;
//     }
//   }
// }
