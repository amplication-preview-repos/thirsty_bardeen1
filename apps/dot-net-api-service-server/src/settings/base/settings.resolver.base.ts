/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Settings } from "./Settings";
import { SettingsCountArgs } from "./SettingsCountArgs";
import { SettingsFindManyArgs } from "./SettingsFindManyArgs";
import { SettingsFindUniqueArgs } from "./SettingsFindUniqueArgs";
import { CreateSettingsArgs } from "./CreateSettingsArgs";
import { UpdateSettingsArgs } from "./UpdateSettingsArgs";
import { DeleteSettingsArgs } from "./DeleteSettingsArgs";
import { User } from "../../user/base/User";
import { SettingsService } from "../settings.service";
@graphql.Resolver(() => Settings)
export class SettingsResolverBase {
  constructor(protected readonly service: SettingsService) {}

  async _settingsItemsMeta(
    @graphql.Args() args: SettingsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Settings])
  async settingsItems(
    @graphql.Args() args: SettingsFindManyArgs
  ): Promise<Settings[]> {
    return this.service.settingsItems(args);
  }

  @graphql.Query(() => Settings, { nullable: true })
  async settings(
    @graphql.Args() args: SettingsFindUniqueArgs
  ): Promise<Settings | null> {
    const result = await this.service.settings(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Settings)
  async createSettings(
    @graphql.Args() args: CreateSettingsArgs
  ): Promise<Settings> {
    return await this.service.createSettings({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Settings)
  async updateSettings(
    @graphql.Args() args: UpdateSettingsArgs
  ): Promise<Settings | null> {
    try {
      return await this.service.updateSettings({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Settings)
  async deleteSettings(
    @graphql.Args() args: DeleteSettingsArgs
  ): Promise<Settings | null> {
    try {
      return await this.service.deleteSettings(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Settings): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
