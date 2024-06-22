import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PrivacyWhereInput = {
  id?: StringFilter;
  informationDisplaySettings?: "Option1";
  profileVisibility?: "Option1";
  user?: UserWhereUniqueInput;
};
