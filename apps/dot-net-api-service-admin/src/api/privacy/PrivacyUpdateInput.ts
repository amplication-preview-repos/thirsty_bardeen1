import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PrivacyUpdateInput = {
  informationDisplaySettings?: "Option1" | null;
  profileVisibility?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
