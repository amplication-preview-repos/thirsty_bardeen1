import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SettingsWhereInput = {
  id?: StringFilter;
  language?: "Option1";
  theme?: "Option1";
  user?: UserWhereUniqueInput;
};
