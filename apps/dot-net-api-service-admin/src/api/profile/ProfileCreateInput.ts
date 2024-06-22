import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileCreateInput = {
  bio?: string | null;
  location?: string | null;
  name?: string | null;
  profilePictureUrl?: string | null;
  user?: UserWhereUniqueInput | null;
};
