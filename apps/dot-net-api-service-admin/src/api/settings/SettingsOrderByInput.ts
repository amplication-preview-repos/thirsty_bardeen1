import { SortOrder } from "../../util/SortOrder";

export type SettingsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  language?: SortOrder;
  theme?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
