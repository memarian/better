import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { TweetId } from 'src/common/type';
import { MessageErrorValidator } from '../messages/validation.message';

@Injectable()
export class TweetIdPipe implements PipeTransform<string, TweetId> {
  transform(value: string) {
    if (!this.isValidId(value))
      throw new BadRequestException(MessageErrorValidator.INVALID_TWEET_ID);

    return value as TweetId;
  }

  private isValidId(tweetId: string): boolean {
    return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      tweetId,
    );
  }
}
