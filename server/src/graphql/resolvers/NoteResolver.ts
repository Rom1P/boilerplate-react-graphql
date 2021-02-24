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
        const note = Note.create(data);
        await note.save();
        return note;
    }

    @Mutation(() => Note)
    async updateNote(@Arg('id') id: string, @Arg('data') data: UpdateNoteInput) {
        const note = await Note.findOne({ where: { id } });
        if (!note) throw new Error('Note not found!');
        Object.assign(note, data);
        await note.save();
        return note;
    }

    @Mutation(() => Boolean)
    async deleteNote(@Arg('id') id: string) {
        const note = await Note.findOne({ where: { id } });
        if (!note) throw new Error('Note not found!');
        await note.remove();
        return true;
    }
}
