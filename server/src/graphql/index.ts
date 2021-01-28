import { buildSchema } from 'type-graphql';
import { GraphQLSchema } from 'graphql';
import NoteResolver from './resolvers/NoteResolver';

const initGraphql = async (): Promise<GraphQLSchema> => {
    return buildSchema({
        resolvers: [NoteResolver],
        emitSchemaFile: {
            path: `${__dirname}/schema.gql`,
            commentDescriptions: true
        }
    });
};

export default initGraphql;
