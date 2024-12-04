import { BaseEntity } from '@domain/base';
import { TweetMetadata } from '@domain/tweet/entities/tweet.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({
  timestamps: true,
  collection: 'tweets',
  id: true,
  _id: true,
})
export class TweetEntity extends BaseEntity {
  _id: Types.ObjectId;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true, index: true })
  authorId: string;

  @Prop({ index: true })
  parentId?: string;

  @Prop({
    type: Object,
    default: { isEdited: false },
  })
  metadata: TweetMetadata;
}

export type TweetDocument = TweetEntity & Document;
export const TweetSchema = SchemaFactory.createForClass(TweetEntity);
