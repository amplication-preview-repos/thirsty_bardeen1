/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PrivacyWhereUniqueInput } from "../../privacy/base/PrivacyWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PrivacyCreateNestedManyWithoutUsersInput {
  @Field(() => [PrivacyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PrivacyWhereUniqueInput],
  })
  connect?: Array<PrivacyWhereUniqueInput>;
}

export { PrivacyCreateNestedManyWithoutUsersInput as PrivacyCreateNestedManyWithoutUsersInput };