// import { InjectQueue } from '@nestjs/bull';
// import { Injectable, Logger } from '@nestjs/common';
// import { Queue } from 'bull';
// import { Types } from 'mongoose';
// import { PERMISSION_QUEUE } from '../constants/queues';
// import { PermissionUpdateJob } from './permission.processor';

// @Injectable()
// export class PermissionQueue {
//   private readonly logger = new Logger(PermissionQueue.name);

//   constructor(
//     @InjectQueue(PERMISSION_QUEUE)
//     private permissionQueue: Queue<PermissionUpdateJob>,
//   ) {}

//   async addPermissionUpdate(
//     resourceId: Types.ObjectId,
//     permissions: any,
//     affectedUserIds: string[],
//     triggeredBy: string,
//   ) {
//     try {
//       await this.permissionQueue.add(
//         'UPDATE_PERMISSIONS',
//         {
//           type: 'UPDATE_PERMISSIONS',
//           resourceId: resourceId.toString(),
//           permissions,
//           affectedUserIds,
//           metadata: {
//             triggeredBy,
//             timestamp: Date.now(),
//           },
//         },
//         {
//           priority: 1,
//           attempts: 3,
//           backoff: {
//             type: 'exponential',
//             delay: 1000,
//           },
//           removeOnComplete: true,
//           removeOnFail: false,
//         },
//       );
//     } catch (error) {
//       this.logger.error(`Failed to queue permission update: ${error.message}`);
//       throw error;
//     }
//   }

//   async addBulkPermissionUpdates(
//     updates: {
//       resourceId: Types.ObjectId;
//       permissions: any;
//       affectedUserIds: string[];
//     }[],
//   ) {
//     const jobs = updates.map((update) => ({
//       name: 'UPDATE_PERMISSIONS',
//       data: {
//         type: 'UPDATE_PERMISSIONS',
//         resourceId: update.resourceId.toString(),
//         permissions: update.permissions,
//         affectedUserIds: update.affectedUserIds,
//         metadata: {
//           timestamp: Date.now(),
//         },
//       },
//       opts: {
//         priority: 1,
//         attempts: 3,
//       },
//     }));

//     try {
//       await this.permissionQueue.addBulk(jobs);
//     } catch (error) {
//       this.logger.error(
//         `Failed to queue bulk permission updates: ${error.message}`,
//       );
//       throw error;
//     }
//   }
// }
