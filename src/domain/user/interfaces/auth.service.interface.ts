// export interface IAuthService {
//   validateUser(email: string, password: string): Promise<User | null>;
//   createAccessToken(user: User): Promise<string>;
//   createRefreshToken(user: User): Promise<string>;
//   verifyAccessToken(token: string): Promise<TokenPayload>;
//   verifyRefreshToken(token: string): Promise<TokenPayload>;
//   revokeRefreshToken(userId: string): Promise<void>;
// }

// export interface TokenPayload {
//   sub: string;
//   email: string;
//   type: 'access' | 'refresh';
//   iat?: number;
//   exp?: number;
// }
