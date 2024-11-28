// import { BaseEntity } from '@domain/base';

// export class Group extends BaseEntity {
//   name: string;
//   description?: string;
//   members: string[];

//   constructor(partial: Partial<Group>) {
//     super(partial);
//     this.name = partial.name || '';
//     this.description = partial.description;
//     this.members = partial.members || [];
//   }

//   addMember(memberId: string): void {
//     if (!this.members.includes(memberId)) {
//       this.members.push(memberId);
//     }
//   }

//   removeMember(memberId: string): void {
//     this.members = this.members.filter(id => id !== memberId);
//   }

//   validate(): boolean {
//     return this.name.length > 0; // Ensure the group has a name
//   }
// }
