/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  IsEnum,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumSettingsLanguage } from "./EnumSettingsLanguage";
import { EnumSettingsTheme } from "./EnumSettingsTheme";
import { User } from "../../user/base/User";

@ObjectType()
class Settings {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    enum: EnumSettingsLanguage,
  })
  @IsEnum(EnumSettingsLanguage)
  @IsOptional()
  @Field(() => EnumSettingsLanguage, {
    nullable: true,
  })
  language?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumSettingsTheme,
  })
  @IsEnum(EnumSettingsTheme)
  @IsOptional()
  @Field(() => EnumSettingsTheme, {
    nullable: true,
  })
  theme?: "Option1" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User | null;
}

export { Settings as Settings };
