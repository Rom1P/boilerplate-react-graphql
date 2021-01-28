import { InputType, Field } from 'type-graphql';

@InputType()
export default class CreateNoteInput {
    @Field()
    title: string;

    @Field()
    author: string;
}
