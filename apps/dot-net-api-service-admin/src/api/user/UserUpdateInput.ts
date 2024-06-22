import { PrivacyUpdateManyWithoutUsersInput } from "./PrivacyUpdateManyWithoutUsersInput";
import { ProfileUpdateManyWithoutUsersInput } from "./ProfileUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SettingsUpdateManyWithoutUsersInput } from "./SettingsUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastLogin?: Date | null;
  lastName?: string | null;
  password?: string;
  privacies?: PrivacyUpdateManyWithoutUsersInput;
  profiles?: ProfileUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  settingsItems?: SettingsUpdateManyWithoutUsersInput;
  sub?: string | null;
  username?: string;
};
