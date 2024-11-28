import { TweetMapper } from '@infrastructure/persistence/mongodb/mappers/tweet.mapper';
import { MongoTweetRepository } from '@infrastructure/persistence/mongodb/repositories/mongo-tweet.repository';
import {
  TweetEntity,
  TweetSchema,
} from '@infrastructure/persistence/mongodb/schemas/tweet.schema';
import { TweetController } from '@modules/tweet/controllers/tweet.controller';
import { TweetService } from '@modules/tweet/services/tweet.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TweetEntity.name, schema: TweetSchema },
    ]),
    // PermissionModule,
  ],
  controllers: [TweetController],
  providers: [
    TweetService,
    TweetMapper,
    {
      provide: 'TweetRepository',
      useClass: MongoTweetRepository,
    },
    // {
    //   provide: 'TweetCache',
    //   useClass: RedisTweetCache,
    // },
  ],
  exports: [TweetService],
})
export class TweetModule {}
