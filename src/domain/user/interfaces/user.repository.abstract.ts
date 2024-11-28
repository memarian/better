// import { BaseRepository } from '../../base/base.repository';
// import { User } from '../entities/user.entity';

// export abstract class UserRepository extends BaseRepository<User> {
//   abstract findByEmail(email: string): Promise<User | null>;

// protected async validateUserEmail(email: string): Promise<boolean> {
//   const existingUser = await this.findByEmail(email);
//   return !existingUser; // Email is valid if it doesn't exist
// }

// protected async hashPassword(password: string): Promise<string> {
//   return password;
// }
// }
