import * as graphql from "@nestjs/graphql";
import { UserConnectionResolverBase } from "./base/userConnection.resolver.base";
import { UserConnection } from "./base/UserConnection";
import { UserConnectionService } from "./userConnection.service";

@graphql.Resolver(() => UserConnection)
export class UserConnectionResolver extends UserConnectionResolverBase {
  constructor(protected readonly service: UserConnectionService) {
    super(service);
  }
}
