// import { UserMetadata, UserStatus } from '../types/index';

// export class User {
//   id: string;
//   email: string;
//   password: string;
//   name: string;
//   status: UserStatus;
//   metadata: UserMetadata;
//   refreshToken?: string;
//   refreshTokenExp?: Date;
//   createdAt: Date;
//   updatedAt: Date;

//   constructor(partial: Partial<User>) {
//     Object.assign(this, partial);
//   }

//   isActive(): boolean {
//     return this.status === UserStatus.ACTIVE;
//   }

//   canLogin(): boolean {
//     return (
//       this.isActive() &&
//       (!this.metadata?.loginAttempts || this.metadata.loginAttempts < 5)
//     );
//   }

//   incrementLoginAttempts(): void {
//     if (!this.metadata) this.metadata = {};
//     this.metadata.loginAttempts = (this.metadata.loginAttempts || 0) + 1;
//   }

//   resetLoginAttempts(): void {
//     if (this.metadata) {
//       this.metadata.loginAttempts = 0;
//       this.metadata.lastLogin = new Date();
//     }
//   }
// }
