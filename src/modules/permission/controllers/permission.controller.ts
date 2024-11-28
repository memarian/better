// @Controller('permissions')
// export class PermissionController {
//   constructor(private readonly permissionService: PermissionService) {}

//   @Get('user/:userId')
//   async getUserPermissions(@Param('userId') userId: string) {
//     return this.permissionService.getUserPermissions(userId);
//   }

//   @Post()
//   async createPermission(@Body() createDto: CreatePermissionDto) {
//     return this.permissionService.createPermission(createDto);
//   }

//   @Patch(':resourceId')
//   async updatePermission(
//     @Param('resourceId') resourceId: string,
//     @Body() updateDto: UpdatePermissionDto,
//   ) {
//     return this.permissionService.updatePermission(resourceId, updateDto);
//   }
// }
