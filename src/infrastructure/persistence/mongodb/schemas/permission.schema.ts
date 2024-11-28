// import {
//   AccessControl,
//   PermissionMetadata,
//   ResourceType,
// } from '@domain/permission/permission.types';
// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document, Types } from 'mongoose';

// @Schema({
//   timestamps: true,
//   collection: 'permissions',
//   indexes: [
//     { resourceId: 1, resourceType: 1 },
//     { 'access.users': 1 },
//     { 'access.groups': 1 },
//   ],
// })
// export class PermissionEntity {
//   @Prop({ required: true, type: Types.ObjectId })
//   resourceId: Types.ObjectId;

//   @Prop({ required: true, enum: ['tweet', 'group'] })
//   resourceType: ResourceType;

//   @Prop({ type: Object, required: true })
//   access: AccessControl;

//   @Prop({ type: Object, required: true })
//   metadata: PermissionMetadata;
// }

// export type PermissionDocument = PermissionEntity & Document;
// export const PermissionSchema = SchemaFactory.createForClass(PermissionEntity);
