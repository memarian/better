// import {
//   Permission,
//   PermissionRepository,
//   PermissionSearchCriteria,
// } from '@domain/permission/permission.types';
// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { PermissionMapper } from '../mappers/permission.mapper';
// import {
//   PermissionDocument,
//   PermissionEntity,
// } from '../schemas/permission.schema';

// @Injectable()
// export class MongoPermissionRepository implements PermissionRepository {
//   constructor(
//     @InjectModel(PermissionEntity.name)
//     private readonly permissionModel: Model<PermissionDocument>,
//     private readonly mapper: PermissionMapper,
//   ) {}

//   async find(criteria: PermissionSearchCriteria): Promise<Permission[]> {
//     const query = this.buildQuery(criteria);
//     const entities = await this.permissionModel.find(query);
//     return entities.map((entity) => this.mapper.toDomain(entity));
//   }

//   async findById(id: string): Promise<Permission | null> {
//     const entity = await this.permissionModel.findById(id);
//     return entity ? this.mapper.toDomain(entity) : null;
//   }

//   async save(permission: Permission): Promise<Permission> {
//     const entity = this.mapper.toPersistence(permission);
//     const saved = await this.permissionModel.create(entity);
//     return this.mapper.toDomain(saved);
//   }

//   private buildQuery(criteria: PermissionSearchCriteria): any {
//     const query: any = {};
//     if (criteria.resourceId) {
//       query.resourceId = criteria.resourceId;
//     }
//     if (criteria.resourceType) {
//       query.resourceType = criteria.resourceType;
//     }
//     if (criteria.userId) {
//       query['access.users'] = criteria.userId;
//     }
//     if (criteria.groupId) {
//       query['access.groups'] = criteria.groupId;
//     }
//     return query;
//   }
// }
