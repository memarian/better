import { Tweet } from '@domain/tweet/entities/tweet.entity';
import { TweetRepository } from '@domain/tweet/interfaces/tweet.repository.abstract';
import { TweetMapper } from '@infrastructure/persistence/mongodb/mappers/tweet.mapper';
import {
  TweetDocument,
  TweetEntity,
} from '@infrastructure/persistence/mongodb/schemas/tweet.schema';
import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  PaginatedResponse,
  PaginationParams,
} from '@shared/types/pagination.types';
import { PaginationUtil } from '@shared/utils/pagination.util';
import { Model } from 'mongoose';

@Injectable()
export class MongoTweetRepository extends TweetRepository {
  constructor(
    @InjectModel(TweetEntity.name)
    private readonly tweetModel: Model<TweetDocument>,
    private readonly mapper: TweetMapper,
  ) {
    super(tweetModel);
  }

  async findByAuthor(
    authorId: string,
    params: PaginationParams,
  ): Promise<PaginatedResponse<Tweet>> {
    const normalizedParams = PaginationUtil.normalize(params);
    const { limit, sort, filter } = normalizedParams;
    const skip = PaginationUtil.getSkip(normalizedParams);
    const [tweets, total] = await Promise.all([
      this.tweetModel
        .find({ authorId, ...filter })
        .sort({ [sort.field]: sort.order })
        .skip(skip)
        .limit(limit)
        .exec(),
      this.tweetModel.countDocuments({ authorId, ...filter }),
    ]);
    const mappedTweets = tweets.map((tweet) => this.mapper.toDomain(tweet));
    return PaginationUtil.createResponse(mappedTweets, total, params);
  }

  async findReplies(
    tweetId: string,
    params: PaginationParams,
  ): Promise<PaginatedResponse<Tweet>> {
    throw new NotImplementedException();
    // const normalizedParams = PaginationUtil.normalize(params);
    // const { limit, sort, filter } = normalizedParams;
    // const skip = PaginationUtil.getSkip(normalizedParams);
    // const [replies, total] = await Promise.all([
    //   this.tweetModel
    //     .find({ parentId: tweetId, ...filter })
    //     .sort({ [sort.field]: sort.order })
    //     .skip(skip)
    //     .limit(limit)
    //     .exec(),
    //   this.tweetModel.countDocuments({ parentId: tweetId, ...filter }),
    // ]);
    // const mappedReplies = replies.map((reply) => this.mapper.toDomain(reply));
    // return PaginationUtil.createResponse(mappedReplies, total, params);
  }

  findById(id: string): Promise<Tweet | null> {
    throw new NotImplementedException();
  }

  findByIds(ids: string[]): Promise<Tweet[]> {
    throw new NotImplementedException();
  }

  async create(entity: Partial<Tweet>): Promise<Tweet> {
    const tweet = this.mapper.toPersistence(entity as Tweet);
    const createdTweet: TweetDocument = await this.tweetModel.create(tweet);
    return this.mapper.toDomain(createdTweet);
  }

  update(id: string, entity: Partial<Tweet>): Promise<Tweet> {
    throw new NotImplementedException();
  }

  delete(id: string): Promise<boolean> {
    throw new NotImplementedException();
  }
}
