// import { Injectable } from '@nestjs/common';
// import { Group } from '@domain/group/entities/group.entity';
// import { GroupDocument } from '../schemas/group.schema';
// import { BaseMapper } from './base.mapper';

// @Injectable()
// export class GroupMapper extends BaseMapper<Group, GroupDocument> {
//   toDomain(groupDoc: GroupDocument): Group {
//     return new Group({
//       id: groupDoc._id.toString(),
//       name: groupDoc.name,
//       description: groupDoc.description,
//       members: groupDoc.members,
//       createdAt: groupDoc.createdAt,
//       updatedAt: groupDoc.updatedAt,
//     });
//   }

//   toPersistence(group: Group): Partial<GroupDocument> {
//     return {
//       name: group.name,
//       description: group.description,
//       members: group.members,
//     };
//   }
// }
