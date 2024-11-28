// import { BullModule } from '@nestjs/bull';
// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { RedisPermissionCache } from '../../infrastructure/cache/redis/redis-permission.cache';
// import { MongoPermissionRepository } from '../../infrastructure/persistence/mongodb/repositories/permission.repository';
// import {
//   PermissionEntity,
//   PermissionSchema,
// } from '../../infrastructure/persistence/mongodb/schemas/permission.schema';
// import { BullPermissionQueue } from '../../infrastructure/queue/bullmq/permission.queue';
// import { PermissionController } from './controllers/permission.controller';
// import { PermissionService } from './domain/permission/permission.service';
// import { PermissionProcessor } from './processors/permission.processor';

// @Module({
//   imports: [
//     MongooseModule.forFeature([
//       { name: PermissionEntity.name, schema: PermissionSchema },
//     ]),
//     BullModule.registerQueue({
//       name: 'permission-queue',
//     }),
//   ],
//   controllers: [PermissionController],
//   providers: [
//     PermissionService,
//     {
//       provide: 'PermissionRepository',
//       useClass: MongoPermissionRepository,
//     },
//     {
//       provide: 'PermissionCache',
//       useClass: RedisPermissionCache,
//     },
//     {
//       provide: 'PermissionQueue',
//       useClass: BullPermissionQueue,
//     },
//     PermissionProcessor,
//   ],
//   exports: [PermissionService],
// })
// export class PermissionModule {}
