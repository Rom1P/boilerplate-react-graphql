import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@Entity()
@ObjectType()
export default class User extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: string;

    @Field(() => String)
    @Column()
    firstName: string;

    @Field(() => String)
    @Column()
    lastName: string;

    @Field(() => String)
    @Column()
    password: string;

    @Field(() => String)
    @Column()
    role: string;

    @Field(() => String)
    @Column()
    token: string;

    @Field(() => Boolean)
    @Column({ default: false })
    isActive: boolean;
}
