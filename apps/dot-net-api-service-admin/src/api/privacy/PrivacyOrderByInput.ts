import { SortOrder } from "../../util/SortOrder";

export type PrivacyOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  informationDisplaySettings?: SortOrder;
  profileVisibility?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
