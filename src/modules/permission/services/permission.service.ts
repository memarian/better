// @Injectable()
// export class PermissionService {
//   constructor(
//     @Inject('PermissionRepository')
//     private readonly permissionRepository: PermissionRepository,
//     @Inject('PermissionCache')
//     private readonly permissionCache: PermissionCache,
//     @Inject('PermissionQueue')
//     private readonly permissionQueue: PermissionQueue,
//   ) {}

//   async getUserPermissions(userId: string): Promise<Permission[]> {
//     // Try cache first
//     const cached = await this.permissionCache.getUserPermissions(userId);
//     if (cached) return cached;

//     // Get from database
//     const permissions = await this.permissionRepository.findByUserId(userId);

//     // Cache the results
//     await this.permissionCache.setUserPermissions(userId, permissions);

//     return permissions;
//   }

//   async updatePermission(
//     resourceId: string,
//     updateData: UpdatePermissionDto,
//   ): Promise<Permission> {
//     // Update in database
//     const updated = await this.permissionRepository.update(
//       resourceId,
//       updateData,
//     );

//     // Queue cache invalidation
//     const affectedUsers = await this.getAffectedUsers(resourceId);
//     await this.permissionQueue.addJob({
//       type: 'INVALIDATE_CACHE',
//       affectedUserIds: affectedUsers,
//     });

//     return updated;
//   }
// }
