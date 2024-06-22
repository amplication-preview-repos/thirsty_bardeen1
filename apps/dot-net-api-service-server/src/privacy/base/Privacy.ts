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
import { EnumPrivacyInformationDisplaySettings } from "./EnumPrivacyInformationDisplaySettings";
import { EnumPrivacyProfileVisibility } from "./EnumPrivacyProfileVisibility";
import { User } from "../../user/base/User";

@ObjectType()
class Privacy {
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
    enum: EnumPrivacyInformationDisplaySettings,
  })
  @IsEnum(EnumPrivacyInformationDisplaySettings)
  @IsOptional()
  @Field(() => EnumPrivacyInformationDisplaySettings, {
    nullable: true,
  })
  informationDisplaySettings?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumPrivacyProfileVisibility,
  })
  @IsEnum(EnumPrivacyProfileVisibility)
  @IsOptional()
  @Field(() => EnumPrivacyProfileVisibility, {
    nullable: true,
  })
  profileVisibility?: "Option1" | null;

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

export { Privacy as Privacy };
