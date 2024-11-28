// @Injectable()
// export class AuthService implements IAuthService {
//   constructor(
//     @Inject('UserRepository')
//     private readonly userRepository: UserRepository,
//     @Inject('UserCache')
//     private readonly userCache: UserCache,
//     private readonly jwtService: JwtService,
//     private readonly configService: ConfigService,
//   ) {}

//   async validateUser(email: string, password: string): Promise<User | null> {
//     const user = await this.userRepository.findByEmail(email);
//     if (!user) return null;

//     const isValid = await bcrypt.compare(password, user.password);
//     if (!isValid) return null;

//     return user;
//   }

//   async createAccessToken(user: User): Promise<string> {
//     const payload: TokenPayload = {
//       sub: user.id,
//       email: user.email,
//       type: 'access',
//     };

//     return this.jwtService.signAsync(payload, {
//       secret: this.configService.get('JWT_ACCESS_SECRET'),
//       expiresIn: '15m',
//     });
//   }

//   async createRefreshToken(user: User): Promise<string> {
//     const payload: TokenPayload = {
//       sub: user.id,
//       email: user.email,
//       type: 'refresh',
//     };

//     const token = await this.jwtService.signAsync(payload, {
//       secret: this.configService.get('JWT_REFRESH_SECRET'),
//       expiresIn: '7d',
//     });

//     // Save refresh token hash in database
//     const tokenHash = await bcrypt.hash(token, 10);
//     await this.userRepository.update(user.id, {
//       refreshToken: tokenHash,
//       refreshTokenExp: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
//     });

//     return token;
//   }

//   async refreshTokens(
//     refreshToken: string,
//   ): Promise<{ accessToken: string; refreshToken: string }> {
//     const payload = await this.verifyRefreshToken(refreshToken);
//     const user = await this.userRepository.findById(payload.sub);

//     if (!user || !user.refreshToken) {
//       throw new UnauthorizedException('Invalid refresh token');
//     }

//     // Verify stored refresh token
//     const isValidToken = await bcrypt.compare(refreshToken, user.refreshToken);
//     if (!isValidToken) {
//       throw new UnauthorizedException('Invalid refresh token');
//     }

//     // Create new tokens
//     const [newAccessToken, newRefreshToken] = await Promise.all([
//       this.createAccessToken(user),
//       this.createRefreshToken(user),
//     ]);

//     return {
//       accessToken: newAccessToken,
//       refreshToken: newRefreshToken,
//     };
//   }

//   async revokeRefreshToken(userId: string): Promise<void> {
//     await this.userRepository.update(userId, {
//       refreshToken: null,
//       refreshTokenExp: null,
//     });
//   }
// }
