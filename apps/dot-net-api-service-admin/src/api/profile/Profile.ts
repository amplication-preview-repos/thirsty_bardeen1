import { User } from "../user/User";

export type Profile = {
  bio: string | null;
  createdAt: Date;
  id: string;
  location: string | null;
  name: string | null;
  profilePictureUrl: string | null;
  updatedAt: Date;
  user?: User | null;
};
