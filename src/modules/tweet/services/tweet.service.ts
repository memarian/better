import { Tweet } from '@domain/tweet/entities/tweet.entity';
import { TweetRepository } from '@domain/tweet/interfaces/tweet.repository.abstract';
import { CreateTweetDto } from '@modules/tweet/dtos';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TweetService {
  constructor(
    @Inject('TweetRepository')
    private readonly tweetRepository: TweetRepository,
    // @Inject('TweetCache')
    // private readonly tweetCache: TweetCache,
    // private readonly permissionService: PermissionService,
  ) {}

  async createTweet(
    authorId: string,
    createTweetDto: CreateTweetDto,
  ): Promise<Tweet> {
    const tweet = {
      ...createTweetDto,
      authorId,
      // createdAt: new Date(),
      // updatedAt: new Date(),
    };

    const created = await this.tweetRepository.create(tweet);

    // if (createTweetDto.permissions) {
    //   await this.permissionService.createPermission({
    //     resourceId: created.id,
    //     resourceType: 'tweet',
    //     ...createTweetDto.permissions,
    //   });
    // }

    return created;
  }

  async getTweet(id: string, userId: string): Promise<Tweet> {
    // const cached = await this.tweetCache.get(id);
    // if (cached) {
    //   const hasAccess = await this.permissionService.checkAccess(userId, id);
    //   if (!hasAccess) {
    //     throw new ForbiddenException();
    //   }
    //   return cached;
    // }

    const tweet = await this.tweetRepository.findById(id);
    if (!tweet) {
      throw new NotFoundException();
    }

    // const hasAccess = await this.permissionService.checkAccess(userId, id);
    // if (!hasAccess) throw new ForbiddenException();

    // await this.tweetCache.set(id, tweet);

    return tweet;
  }
}
