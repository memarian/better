import { BaseEntity } from '@domain/base';
import { TweetMetadata } from '@domain/tweet/entities/tweet.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
  collection: 'tweets',
})
export class TweetEntity extends BaseEntity {
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
