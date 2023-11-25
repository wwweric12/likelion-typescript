export interface GetUsersPayload {
  data: Data;
}

interface Data {
  users: User[];
}

interface User {
  email: string;
  password: string;
  username: string;
}
