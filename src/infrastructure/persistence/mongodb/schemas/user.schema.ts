// import { UserStatus } from '@domain/user/entities/user.entity';
// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// @Schema({
//   timestamps: true,
//   collection: 'users',
// })
// export class UserEntity {
//   @Prop({ required: true, unique: true })
//   email: string;

//   @Prop({ required: true })
//   password: string;

//   @Prop({ required: true })
//   name: string;

//   @Prop()
//   refreshToken?: string;

//   @Prop()
//   refreshTokenExp?: Date;

//   @Prop()
//   lastLogin?: Date;

//   @Prop({
//     type: String,
//     enum: UserStatus,
//     default: UserStatus.ACTIVE,
//   })
//   status: UserStatus;
// }

// export type UserDocument = UserEntity & Document;
// export const UserSchema = SchemaFactory.createForClass(UserEntity);

// // Indexes
// UserSchema.index({ email: 1 }, { unique: true });
// UserSchema.index({ status: 1 });
