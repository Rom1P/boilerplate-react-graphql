import { InputType, Field } from 'type-graphql';

@InputType()
export default class UpdateNoteInput {
    @Field({ nullable: true })
    title?: string;

    @Field({ nullable: true })
    userId?: string;
}
