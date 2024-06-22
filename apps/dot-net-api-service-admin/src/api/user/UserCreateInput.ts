import { PrivacyCreateNestedManyWithoutUsersInput } from "./PrivacyCreateNestedManyWithoutUsersInput";
import { ProfileCreateNestedManyWithoutUsersInput } from "./ProfileCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SettingsCreateNestedManyWithoutUsersInput } from "./SettingsCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastLogin?: Date | null;
  lastName?: string | null;
  password: string;
  privacies?: PrivacyCreateNestedManyWithoutUsersInput;
  profiles?: ProfileCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  settingsItems?: SettingsCreateNestedManyWithoutUsersInput;
  sub?: string | null;
  username: string;
};
