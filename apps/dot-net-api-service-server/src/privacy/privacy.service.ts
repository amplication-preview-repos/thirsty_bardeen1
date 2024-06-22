import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PrivacyServiceBase } from "./base/privacy.service.base";

@Injectable()
export class PrivacyService extends PrivacyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
