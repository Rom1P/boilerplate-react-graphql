import { config } from 'dotenv';

config();

const databaseConfig = {
    type: process.env.TYPE_DATABASE || 'mysql',
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || 3306,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
};

export default databaseConfig;
