export type UserId = string;

export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  BLOCKED = 'blocked',
}

export interface UserMetadata {
  lastLogin?: Date;
  loginAttempts?: number;
  passwordChangedAt?: Date;
}
