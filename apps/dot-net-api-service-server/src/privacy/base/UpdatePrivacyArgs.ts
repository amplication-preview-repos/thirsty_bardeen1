/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PrivacyWhereUniqueInput } from "./PrivacyWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PrivacyUpdateInput } from "./PrivacyUpdateInput";

@ArgsType()
class UpdatePrivacyArgs {
  @ApiProperty({
    required: true,
    type: () => PrivacyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PrivacyWhereUniqueInput)
  @Field(() => PrivacyWhereUniqueInput, { nullable: false })
  where!: PrivacyWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PrivacyUpdateInput,
  })
  @ValidateNested()
  @Type(() => PrivacyUpdateInput)
  @Field(() => PrivacyUpdateInput, { nullable: false })
  data!: PrivacyUpdateInput;
}

export { UpdatePrivacyArgs as UpdatePrivacyArgs };
