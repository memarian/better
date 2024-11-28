// import {
//   AccessControl,
//   PermissionMetadata,
//   ResourceType,
// } from '../types/permission.types';

// export class Permission {
//   id: string;
//   resourceId: string;
//   resourceType: ResourceType;
//   access: AccessControl;
//   metadata: PermissionMetadata;
//   createdAt: Date;
//   updatedAt: Date;

//   constructor(partial: Partial<Permission>) {
//     Object.assign(this, partial);
//     this.access = this.access || {
//       users: [],
//       groups: [],
//       public: false,
//     };
//   }

//   hasUserAccess(userId: string): boolean {
//     return this.access.public || this.access.users.includes(userId);
//   }

//   hasGroupAccess(groupId: string): boolean {
//     return this.access.groups.includes(groupId);
//   }

//   addUserAccess(userId: string, modifiedBy: string): void {
//     if (!this.access.users.includes(userId)) {
//       this.access.users.push(userId);
//       this.updateMetadata(modifiedBy);
//     }
//   }

//   removeUserAccess(userId: string, modifiedBy: string): void {
//     this.access.users = this.access.users.filter((id) => id !== userId);
//     this.updateMetadata(modifiedBy);
//   }

//   private updateMetadata(modifiedBy: string): void {
//     this.metadata = {
//       lastModified: new Date(),
//       modifiedBy,
//     };
//     this.updatedAt = new Date();
//   }
// }
