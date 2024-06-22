import { PrivacyWhereInput } from "./PrivacyWhereInput";
import { PrivacyOrderByInput } from "./PrivacyOrderByInput";

export type PrivacyFindManyArgs = {
  where?: PrivacyWhereInput;
  orderBy?: Array<PrivacyOrderByInput>;
  skip?: number;
  take?: number;
};
