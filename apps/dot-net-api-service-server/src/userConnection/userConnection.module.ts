import { Module } from "@nestjs/common";
import { UserConnectionModuleBase } from "./base/userConnection.module.base";
import { UserConnectionService } from "./userConnection.service";
import { UserConnectionController } from "./userConnection.controller";
import { UserConnectionResolver } from "./userConnection.resolver";

@Module({
  imports: [UserConnectionModuleBase],
  controllers: [UserConnectionController],
  providers: [UserConnectionService, UserConnectionResolver],
  exports: [UserConnectionService],
})
export class UserConnectionModule {}
