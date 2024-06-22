import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PrivacyCreateInput = {
  informationDisplaySettings?: "Option1" | null;
  profileVisibility?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
