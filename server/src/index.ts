/* eslint-disable no-console */
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { createConnection } from 'typeorm';
import initGraphql from './graphql';
import databaseConfig from './config/database';

console.log(databaseConfig);

(async () => {
    try {
        await createConnection({
            type: 'mysql',
            host: databaseConfig.host,
            port: 3306,
            username: 'user',
            password: 'password',
            database: 'db'
        });
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
