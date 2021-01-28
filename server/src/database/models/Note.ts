import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import User from './User';

@Entity()
@ObjectType()
export default class Note extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: string;

    @Field(() => String)
    @Column()
    title: string;

    @Field(() => String)
    @Column()
    content: string;

    @OneToOne(() => User)
    @JoinColumn()
    user: User;
}
