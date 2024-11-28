import { Tweet } from '@domain/tweet/entities/tweet.entity';
import { Injectable } from '@nestjs/common';
import { TweetDocument } from '../schemas/tweet.schema';
import { BaseMapper } from './base.mapper';

@Injectable()
export class TweetMapper extends BaseMapper<Tweet, TweetDocument> {
  toDomain(tweetDoc: TweetDocument): Tweet {
    return new Tweet({
      // id: tweetDoc._id.toString(),
      content: tweetDoc.content,
      authorId: tweetDoc.authorId,
      parentId: tweetDoc.parentId,
      metadata: tweetDoc.metadata,
      createdAt: tweetDoc.createdAt,
      updatedAt: tweetDoc.updatedAt,
    });
  }

  toPersistence(tweet: Tweet): Partial<TweetDocument> {
    return {
      content: tweet.content,
      authorId: tweet.authorId,
      parentId: tweet.parentId,
      metadata: tweet.metadata,
    };
  }
}
