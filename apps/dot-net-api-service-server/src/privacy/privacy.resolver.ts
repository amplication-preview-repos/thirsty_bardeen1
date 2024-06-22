import * as graphql from "@nestjs/graphql";
import { PrivacyResolverBase } from "./base/privacy.resolver.base";
import { Privacy } from "./base/Privacy";
import { PrivacyService } from "./privacy.service";

@graphql.Resolver(() => Privacy)
export class PrivacyResolver extends PrivacyResolverBase {
  constructor(protected readonly service: PrivacyService) {
    super(service);
  }
}
