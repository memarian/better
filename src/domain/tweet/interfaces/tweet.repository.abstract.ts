import {} from 'module';
import {
  PaginatedResponse,
  PaginationParams,
} from '../../../shared/types/pagination.types';
import { BaseRepository } from '../../base/base.repository';
import { Tweet } from '../entities/tweet.entity';

export abstract class TweetRepository extends BaseRepository<Tweet> {
  abstract findByAuthor(
    authorId: string,
    params: PaginationParams,
  ): Promise<PaginatedResponse<Tweet>>;
  abstract findReplies(
    tweetId: string,
    params: PaginationParams,
  ): Promise<PaginatedResponse<Tweet>>;

  protected async validateTweet(tweet: Partial<Tweet>): Promise<boolean> {
    const tweetEntity = new Tweet(tweet);
    return tweetEntity.validate();
  }

  protected async beforeCreate(tweet: Partial<Tweet>): Promise<void> {
    if (!(await this.validateTweet(tweet))) {
      throw new Error('Invalid tweet data');
    }
  }

  protected async beforeUpdate(
    id: string,
    tweet: Partial<Tweet>,
  ): Promise<void> {
    if (!(await this.validateTweet(tweet))) {
      throw new Error('Invalid tweet data');
    }

    const existing = await this.findById(id);
    if (!existing) {
      throw new Error('Tweet not found');
    }
  }
}
