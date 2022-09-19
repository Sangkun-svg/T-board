export interface IUser {
  //TODO: move to res folder
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: Boolean;
}
