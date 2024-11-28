// @Injectable()
// export class JwtAuthGuard implements CanActivate {
//   constructor(
//     private readonly authService: AuthService,
//     private readonly reflector: Reflector,
//   ) {}

//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     const isPublic = this.reflector.get<boolean>(
//       'isPublic',
//       context.getHandler(),
//     );

//     if (isPublic) {
//       return true;
//     }

//     const request = context.switchToHttp().getRequest();
//     const token = this.extractTokenFromHeader(request);

//     if (!token) {
//       throw new UnauthorizedException();
//     }

//     try {
//       const payload = await this.authService.verifyAccessToken(token);
//       request.user = payload;
//       return true;
//     } catch {
//       throw new UnauthorizedException();
//     }
//   }

//   private extractTokenFromHeader(request: Request): string | undefined {
//     const [type, token] = request.headers.authorization?.split(' ') ?? [];
//     return type === 'Bearer' ? token : undefined;
//   }
// }
