import { User } from "../user/User";

export type Privacy = {
  createdAt: Date;
  id: string;
  informationDisplaySettings?: "Option1" | null;
  profileVisibility?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
