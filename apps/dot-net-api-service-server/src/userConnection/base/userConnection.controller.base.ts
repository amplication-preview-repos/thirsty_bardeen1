/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { UserConnectionService } from "../userConnection.service";
import { UserConnectionCreateInput } from "./UserConnectionCreateInput";
import { UserConnection } from "./UserConnection";
import { UserConnectionFindManyArgs } from "./UserConnectionFindManyArgs";
import { UserConnectionWhereUniqueInput } from "./UserConnectionWhereUniqueInput";
import { UserConnectionUpdateInput } from "./UserConnectionUpdateInput";

export class UserConnectionControllerBase {
  constructor(protected readonly service: UserConnectionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserConnection })
  async createUserConnection(
    @common.Body() data: UserConnectionCreateInput
  ): Promise<UserConnection> {
    return await this.service.createUserConnection({
      data: data,
      select: {
        connectionType: true,
        createdAt: true,
        id: true,
        updatedAt: true,
        user1: true,
        user2: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UserConnection] })
  @ApiNestedQuery(UserConnectionFindManyArgs)
  async userConnections(
    @common.Req() request: Request
  ): Promise<UserConnection[]> {
    const args = plainToClass(UserConnectionFindManyArgs, request.query);
    return this.service.userConnections({
      ...args,
      select: {
        connectionType: true,
        createdAt: true,
        id: true,
        updatedAt: true,
        user1: true,
        user2: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserConnection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async userConnection(
    @common.Param() params: UserConnectionWhereUniqueInput
  ): Promise<UserConnection | null> {
    const result = await this.service.userConnection({
      where: params,
      select: {
        connectionType: true,
        createdAt: true,
        id: true,
        updatedAt: true,
        user1: true,
        user2: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: UserConnection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUserConnection(
    @common.Param() params: UserConnectionWhereUniqueInput,
    @common.Body() data: UserConnectionUpdateInput
  ): Promise<UserConnection | null> {
    try {
      return await this.service.updateUserConnection({
        where: params,
        data: data,
        select: {
          connectionType: true,
          createdAt: true,
          id: true,
          updatedAt: true,
          user1: true,
          user2: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: UserConnection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUserConnection(
    @common.Param() params: UserConnectionWhereUniqueInput
  ): Promise<UserConnection | null> {
    try {
      return await this.service.deleteUserConnection({
        where: params,
        select: {
          connectionType: true,
          createdAt: true,
          id: true,
          updatedAt: true,
          user1: true,
          user2: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
