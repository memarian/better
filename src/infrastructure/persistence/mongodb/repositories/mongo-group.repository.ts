// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Group } from '@domain/group/entities/group.entity';
// import { GroupRepository } from '@domain/group/interfaces/group.repository.abstract';
// import { GroupMapper } from '@infrastructure/persistence/mongodb/mappers/group.mapper';
// import { GroupDocument, GroupEntity } from '@infrastructure/persistence/mongodb/schemas/group.schema';

// @Injectable()
// export class MongoGroupRepository extends GroupRepository {
//   constructor(
//     @InjectModel(GroupEntity.name)
//     private readonly groupModel: Model<GroupDocument>,
//     private readonly mapper: GroupMapper,
//   ) {
//     super();
//   }

//   async findById(id: string): Promise<Group | null> {
//     const groupDoc = await this.groupModel.findById(id).exec();
//     return groupDoc ? this.mapper.toDomain(groupDoc) : null;
//   }

//   async findByIds(ids: string[]): Promise<Group[]> {
//     const groupDocs = await this.groupModel.find({ _id: { $in: ids } }).exec();
//     return groupDocs.map(groupDoc => this.mapper.toDomain(groupDoc));
//   }

//   async findByName(name: string): Promise<Group | null> {
//     const groupDoc = await this.groupModel.findOne({ name }).exec();
//     return groupDoc ? this.mapper.toDomain(groupDoc) : null;
//   }

//   async create(entity: Partial<Group>): Promise<Group> {
//     const groupDoc = this.mapper.toPersistence(new Group(entity));
//     const createdGroup = await this.groupModel.create(groupDoc);
//     return this.mapper.toDomain(createdGroup);
//   }

//   async update(id: string, entity: Partial<Group>): Promise<Group> {
//     const groupDoc = await this.groupModel.findByIdAndUpdate(id, this.mapper.toPersistence(new Group(entity)), { new: true }).exec();
//     return groupDoc ? this.mapper.toDomain(groupDoc) : null;
//   }

//   async delete(id: string): Promise<boolean> {
//     const result = await this.groupModel.findByIdAndDelete(id).exec();
//     return !!result;
//   }
// }
