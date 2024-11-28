import { BaseEntity } from '@domain/base';

export class Tweet extends BaseEntity {
  content: string;
  authorId: string;
  parentId?: string;
  metadata: TweetMetadata;

  constructor(partial: Partial<Tweet>) {
    super(partial);
    this.metadata = partial.metadata || {
      isEdited: false,
    };
  }

  edit(content: string): void {
    this.content = content;
    this.metadata.isEdited = true;
    this.metadata.editedAt = new Date();
    this.update();
  }

  isReply(): boolean {
    return !!this.parentId;
  }

  validate(): boolean {
    if (!this.content || this.content.length > 200) return false;

    if (!this.authorId) return false;

    return true;
  }
}

export interface TweetMetadata {
  isEdited: boolean;
  editedAt?: Date;
}
