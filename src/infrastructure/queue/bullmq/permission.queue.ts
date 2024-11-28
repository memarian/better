// import {
//   PermissionQueuePort,
//   PermissionUpdateJob,
// } from '@domain/permission/permission.types';
// import { InjectQueue } from '@nestjs/bull';
// import { Injectable, Logger } from '@nestjs/common';
// import { Queue } from 'bull';

// @Injectable()
// export class BullPermissionQueue implements PermissionQueuePort {
//   private readonly logger = new Logger(BullPermissionQueue.name);

//   constructor(
//     @InjectQueue('permission-queue') private queue: Queue<PermissionUpdateJob>,
//   ) {}

//   async addPermissionUpdate(job: PermissionUpdateJob): Promise<void> {
//     try {
//       await this.queue.add('UPDATE_PERMISSIONS', job, {
//         priority: 1,
//         attempts: 3,
//         backoff: {
//           type: 'exponential',
//           delay: 1000,
//         },
//         removeOnComplete: true,
//         removeOnFail: false,
//       });
//     } catch (error) {
//       this.logger.error(`Failed to queue permission update: ${error.message}`);
//       throw error;
//     }
//   }

//   async addBulkPermissionUpdates(jobs: PermissionUpdateJob[]): Promise<void> {
//     try {
//       const bulkJobs = jobs.map((job) => ({
//         name: job.type,
//         data: job,
//         opts: {
//           priority: 1,
//           attempts: 3,
//         },
//       }));

//       await this.queue.addBulk(bulkJobs);
//     } catch (error) {
//       this.logger.error(
//         `Failed to queue bulk permission updates: ${error.message}`,
//       );
//       throw error;
//     }
//   }
// }
