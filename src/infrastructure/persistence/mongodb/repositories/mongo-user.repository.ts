// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { User } from '../../../../domain/user/entities/user.entity';
// import { UserRepository } from '../../../../domain/user/interfaces/user.repository.abstract';
// import { MongoErrorHandlerService } from '../services/mongo-error-handler.service';

// @Injectable()
// export class MongoUserRepository extends UserRepository {
//   constructor(
//     @InjectModel(User.name)
//     private readonly userModel: Model<UserDocument>,
//     private readonly mapper: UserMapper,
//     private readonly errorHandler: MongoErrorHandlerService,
//   ) {
//     super(userModel);
//   }

//   async findById(id: string): Promise<User | null> {
//     try {
//       const user = await this.model.findById(id).exec();
//       return user ? this.mapper.toDomain(user) : null;
//     } catch (error) {
//       this.handleError(error);
//     }
//   }

//   async findByIds(ids: string[]): Promise<User[]> {
//     try {
//       const users = await this.model.find({ _id: { $in: ids } }).exec();
//       return users.map((user) => this.mapper.toDomain(user));
//     } catch (error) {
//       this.handleError(error);
//     }
//   }

//   async findByEmail(email: string): Promise<User | null> {
//     try {
//       const user = await this.model.findOne({ email }).exec();
//       return user ? this.mapper.toDomain(user) : null;
//     } catch (error) {
//       this.handleError(error);
//     }
//   }

//   async create(userData: Partial<User>): Promise<User> {
//     try {
//       await this.validateEntity(userData);

//       if (userData.password) {
//         userData.password = await this.hashPassword(userData.password);
//       }

//       const created = await this.model.create(userData);
//       return this.mapper.toDomain(created);
//     } catch (error) {
//       this.handleError(error);
//     }
//   }

//   async update(id: string, userData: Partial<User>): Promise<User> {
//     try {
//       await this.validateEntity(userData);

//       if (userData.password) {
//         userData.password = await this.hashPassword(userData.password);
//       }

//       const updated = await this.model
//         .findByIdAndUpdate(id, userData, { new: true })
//         .exec();

//       if (!updated) {
//         throw new Error('User not found');
//       }

//       return this.mapper.toDomain(updated);
//     } catch (error) {
//       this.handleError(error);
//     }
//   }

//   async delete(id: string): Promise<boolean> {
//     try {
//       const result = await this.model.findByIdAndDelete(id).exec();
//       return !!result;
//     } catch (error) {
//       this.handleError(error);
//     }
//   }

//   protected handleError(error: any): never {
//     this.errorHandler.handleError(error);
//   }
// }
