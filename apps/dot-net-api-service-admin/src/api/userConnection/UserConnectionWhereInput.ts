import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserConnectionWhereInput = {
  connectionType?: "Option1";
  id?: StringFilter;
  user1?: StringNullableFilter;
  user2?: StringNullableFilter;
};
