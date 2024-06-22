import { UserConnection as TUserConnection } from "../api/userConnection/UserConnection";

export const USERCONNECTION_TITLE_FIELD = "user1";

export const UserConnectionTitle = (record: TUserConnection): string => {
  return record.user1?.toString() || String(record.id);
};
