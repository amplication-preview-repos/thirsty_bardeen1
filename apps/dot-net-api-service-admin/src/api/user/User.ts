import { Privacy } from "../privacy/Privacy";
import { Profile } from "../profile/Profile";
import { JsonValue } from "type-fest";
import { Settings } from "../settings/Settings";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastLogin: Date | null;
  lastName: string | null;
  privacies?: Array<Privacy>;
  profiles?: Array<Profile>;
  roles: JsonValue;
  settingsItems?: Array<Settings>;
  sub: string | null;
  updatedAt: Date;
  username: string;
};
