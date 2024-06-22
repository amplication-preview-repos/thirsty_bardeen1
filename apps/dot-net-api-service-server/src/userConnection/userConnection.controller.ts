import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserConnectionService } from "./userConnection.service";
import { UserConnectionControllerBase } from "./base/userConnection.controller.base";

@swagger.ApiTags("userConnections")
@common.Controller("userConnections")
export class UserConnectionController extends UserConnectionControllerBase {
  constructor(protected readonly service: UserConnectionService) {
    super(service);
  }
}
