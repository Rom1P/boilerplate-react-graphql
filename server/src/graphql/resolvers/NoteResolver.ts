import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import Note from '../../database/models/Note';
import CreateNoteInput from '../inputs/CreateNoteInput';
import UpdateNoteInput from '../inputs/UpdateNoteInput';

@Resolver()
export default class NoteResolver {
    @Query(() => [Note])
    notes() {
        return Note.find();
    }

    @Query(() => Note)
    note(@Arg('id') id: string) {
        return Note.findOne({ where: { id } });
    }

    @Mutation(() => Note)
    async createNote(@Arg('data') data: CreateNoteInput) {
        const book = Note.create(data);
        await book.save();
        return book;
    }

    @Mutation(() => Note)
    async updateNote(@Arg('id') id: string, @Arg('data') data: UpdateNoteInput) {
        const book = await Note.findOne({ where: { id } });
        if (!book) throw new Error('Note not found!');
        Object.assign(book, data);
        await book.save();
        return book;
    }

    @Mutation(() => Boolean)
    async deleteNote(@Arg('id') id: string) {
        const book = await Note.findOne({ where: { id } });
        if (!book) throw new Error('Note not found!');
        await book.remove();
        return true;
    }
}
