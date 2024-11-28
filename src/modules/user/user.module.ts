// @Module({
//   imports: [
//     JwtModule.registerAsync({
//       imports: [ConfigModule],
//       useFactory: async (configService: ConfigService) => ({
//         secret: configService.get('JWT_ACCESS_SECRET'),
//         signOptions: { expiresIn: '15m' },
//       }),
//       inject: [ConfigService],
//     }),
//     MongooseModule.forFeature([{ name: UserEntity.name, schema: UserSchema }]),
//   ],
//   controllers: [UserController, AuthController],
//   providers: [
//     UserService,
//     AuthService,
//     {
//       provide: 'UserRepository',
//       useClass: MongoUserRepository,
//     },
//     {
//       provide: 'UserCache',
//       useClass: RedisUserCache,
//     },
//     JwtAuthGuard,
//   ],
//   exports: [UserService, AuthService],
// })
// export class UserModule {}
