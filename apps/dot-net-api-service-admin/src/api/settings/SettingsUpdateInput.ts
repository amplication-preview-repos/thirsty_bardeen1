import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SettingsUpdateInput = {
  language?: "Option1" | null;
  theme?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
