import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  ArrayMaxSize,
  IsArray,
  IsEnum,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
} from 'class-validator';

export enum TweetCategory {
  NEWS = 'NEWS',
  TECH = 'TECH',
  SPORTS = 'SPORTS',
  ENTERTAINMENT = 'ENTERTAINMENT',
  POLITICS = 'POLITICS',
  OTHER = 'OTHER',
}

export class CreateTweetDto {
  @ApiProperty({
    description: 'The content of the tweet',
    maxLength: 280,
    example: 'Hello world! #FirstTweet',
  })
  @IsString()
  @MaxLength(200)
  content: string;

  // @ApiProperty({
  //   description: 'The ID of the author',
  //   example: '507f1f77bcf86cd799439011',
  // })
  // @IsString()
  // @Matches(/^[0-9a-fA-F]{24}$/, {
  //   message: 'authorId must be a valid MongoDB ObjectId',
  // })
  // authorId: string;

  @ApiPropertyOptional({
    description: 'Array of hashtags',
    type: [String],
    example: ['tech', 'programming', 'javascript'],
    maxItems: 5,
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ArrayMaxSize(5)
  @Transform(({ value }) => {
    if (Array.isArray(value)) {
      return value.map((tag) => tag.toLowerCase().replace(/[^a-z0-9]/g, ''));
    }
    return value;
  })
  hashtags?: string[];

  @ApiPropertyOptional({
    description: 'The ID of the parent tweet if this is a reply',
    example: '507f1f77bcf86cd799439011',
  })
  @IsOptional()
  @IsString()
  @Matches(/^[0-9a-fA-F]{24}$/, {
    message: 'parentTweetId must be a valid  ObjectId',
  })
  parentTweetId?: string;

  @ApiPropertyOptional({
    description: 'The category of the tweet',
    enum: TweetCategory,
    example: TweetCategory.TECH,
  })
  @IsOptional()
  @IsEnum(TweetCategory)
  category?: TweetCategory;

  @ApiPropertyOptional({
    description: 'The location where the tweet was created',
    example: 'Location',
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  location?: string;
}
