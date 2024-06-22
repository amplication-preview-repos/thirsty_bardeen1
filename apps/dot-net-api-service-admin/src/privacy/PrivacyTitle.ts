import { Privacy as TPrivacy } from "../api/privacy/Privacy";

export const PRIVACY_TITLE_FIELD = "id";

export const PrivacyTitle = (record: TPrivacy): string => {
  return record.id?.toString() || String(record.id);
};
