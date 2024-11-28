// @Controller('auth')
// export class AuthController {
//   constructor(
//     private readonly authService: AuthService,
//     private readonly userService: UserService,
//   ) {}

//   @Post('login')
//   async login(@Body() loginDto: LoginDto) {
//     const user = await this.authService.validateUser(
//       loginDto.email,
//       loginDto.password,
//     );

//     if (!user) {
//       throw new UnauthorizedException('Invalid credentials');
//     }

//     const [accessToken, refreshToken] = await Promise.all([
//       this.authService.createAccessToken(user),
//       this.authService.createRefreshToken(user),
//     ]);

//     return {
//       accessToken,
//       refreshToken,
//       user: {
//         id: user.id,
//         email: user.email,
//         name: user.name,
//       },
//     };
//   }

//   @Post('refresh')
//   async refresh(@Body() refreshDto: RefreshTokenDto) {
//     return this.authService.refreshTokens(refreshDto.refreshToken);
//   }

//   @Post('logout')
//   @UseGuards(JwtAuthGuard)
//   async logout(@User() user: UserEntity) {
//     await this.authService.revokeRefreshToken(user.id);
//     return { success: true };
//   }
// }
