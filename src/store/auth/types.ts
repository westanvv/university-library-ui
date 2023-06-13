export type User = {
  id: number;
  firstName?: string;
  lastName?: string;
  email: string;
  userRoleId: number;
};

export interface AuthReducer {
  user?: User;
  token?: string;
}
