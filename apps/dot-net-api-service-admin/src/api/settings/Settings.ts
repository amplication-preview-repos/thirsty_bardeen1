import { User } from "../user/User";

export type Settings = {
  createdAt: Date;
  id: string;
  language?: "Option1" | null;
  theme?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
