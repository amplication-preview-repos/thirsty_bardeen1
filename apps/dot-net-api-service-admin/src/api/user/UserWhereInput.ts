import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PrivacyListRelationFilter } from "../privacy/PrivacyListRelationFilter";
import { ProfileListRelationFilter } from "../profile/ProfileListRelationFilter";
import { SettingsListRelationFilter } from "../settings/SettingsListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastLogin?: DateTimeNullableFilter;
  lastName?: StringNullableFilter;
  privacies?: PrivacyListRelationFilter;
  profiles?: ProfileListRelationFilter;
  settingsItems?: SettingsListRelationFilter;
  sub?: StringNullableFilter;
  username?: StringFilter;
};
