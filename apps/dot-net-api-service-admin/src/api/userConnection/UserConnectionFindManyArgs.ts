import { UserConnectionWhereInput } from "./UserConnectionWhereInput";
import { UserConnectionOrderByInput } from "./UserConnectionOrderByInput";

export type UserConnectionFindManyArgs = {
  where?: UserConnectionWhereInput;
  orderBy?: Array<UserConnectionOrderByInput>;
  skip?: number;
  take?: number;
};
