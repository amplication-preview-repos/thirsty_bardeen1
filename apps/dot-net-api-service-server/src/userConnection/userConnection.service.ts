import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserConnectionServiceBase } from "./base/userConnection.service.base";

@Injectable()
export class UserConnectionService extends UserConnectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
