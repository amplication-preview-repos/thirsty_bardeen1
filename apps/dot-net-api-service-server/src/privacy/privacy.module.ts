import { Module } from "@nestjs/common";
import { PrivacyModuleBase } from "./base/privacy.module.base";
import { PrivacyService } from "./privacy.service";
import { PrivacyController } from "./privacy.controller";
import { PrivacyResolver } from "./privacy.resolver";

@Module({
  imports: [PrivacyModuleBase],
  controllers: [PrivacyController],
  providers: [PrivacyService, PrivacyResolver],
  exports: [PrivacyService],
})
export class PrivacyModule {}
