import { CreateTweetDto } from '@modules/tweet/dtos';
import { TweetService } from '@modules/tweet/services/tweet.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('tweets')
export class TweetController {
  constructor(private readonly tweetService: TweetService) {}

  @Post()
  // @UseGuards(JwtAuthGuard)
  async createTweet(
    // @User() user: UserEntity,
    @Body() createTweetDto: CreateTweetDto,
  ) {
    // return this.tweetService.createTweet(user.id, createTweetDto);
    return this.tweetService.createTweet('1', createTweetDto);
  }

  @Get(':id')
  // @UseGuards(JwtAuthGuard)
  async getTweet(
    @Param('id') id: string,

    // @User() user: UserEntity
  ) {
    // return this.tweetService.getTweet(id, user.id);
    return this.tweetService.getTweet(id, '1');
  }
}
