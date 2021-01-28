/* eslint-disable no-console */
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import initGraphql from './graphql';

(async () => {
    try {
        // await createConnection();
        const schema = await initGraphql();
        const server = new ApolloServer({
            schema
        });
        server.listen(8080).then(({ url }) => {
            console.log(`🚀 Server ready at ${url}`);
        });
    } catch (e) {
        console.error('Error while starting server ', e);
    }
})();
