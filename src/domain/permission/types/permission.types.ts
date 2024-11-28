export interface Permission {
  id?: string;
  resourceId: string;
  resourceType: ResourceType;
  access: AccessControl;
  metadata: PermissionMetadata;
}

export type ResourceType = 'tweet' | 'group';

export interface AccessControl {
  users: string[];
  groups: string[];
  inheritFromParent?: boolean;
  public?: boolean;
}

export interface PermissionMetadata {
  lastModified: Date;
  modifiedBy: string;
  reason?: string;
}

export interface PermissionRepository {
  find(criteria: PermissionSearchCriteria): Promise<Permission[]>;
  findById(id: string): Promise<Permission | null>;
  save(permission: Permission): Promise<Permission>;
  update(id: string, permission: Partial<Permission>): Promise<Permission>;
  delete(id: string): Promise<boolean>;
}

export interface PermissionSearchCriteria {
  resourceId?: string;
  resourceType?: ResourceType;
  userId?: string;
  groupId?: string;
}

export interface PermissionCachePort {
  getUserPermissions(userId: string): Promise<Permission[] | null>;
  setUserPermissions(userId: string, permissions: Permission[]): Promise<void>;
  invalidateUserPermissions(userIds: string[]): Promise<void>;
}

export interface PermissionQueuePort {
  addPermissionUpdate(job: PermissionUpdateJob): Promise<void>;
  addBulkPermissionUpdates(jobs: PermissionUpdateJob[]): Promise<void>;
}

export interface PermissionUpdateJob {
  type: PermissionJobType;
  resourceId: string;
  permissions?: Partial<Permission>;
  affectedUserIds: string[];
  metadata: {
    triggeredBy: string;
    timestamp: number;
  };
}

export type PermissionJobType = 'UPDATE_PERMISSIONS' | 'INVALIDATE_CACHE';
