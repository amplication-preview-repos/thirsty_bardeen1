import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PrivacyService } from "./privacy.service";
import { PrivacyControllerBase } from "./base/privacy.controller.base";

@swagger.ApiTags("privacies")
@common.Controller("privacies")
export class PrivacyController extends PrivacyControllerBase {
  constructor(protected readonly service: PrivacyService) {
    super(service);
  }
}
