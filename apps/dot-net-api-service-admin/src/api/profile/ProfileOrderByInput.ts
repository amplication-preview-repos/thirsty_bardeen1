import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  bio?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  profilePictureUrl?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
