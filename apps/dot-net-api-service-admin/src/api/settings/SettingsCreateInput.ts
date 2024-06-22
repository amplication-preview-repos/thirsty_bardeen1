import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SettingsCreateInput = {
  language?: "Option1" | null;
  theme?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
