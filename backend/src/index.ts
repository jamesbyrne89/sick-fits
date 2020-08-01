// let's go!

import dotenv from 'dotenv';
import createServer from './createServer';
import db from './db';

dotenv.config({ path: 'variables.env' });

const server = createServer();

// TODO use Express middleware to handle cookies (JWT)
// TODO use Express middleware to populate current user

console.log(process.env.FRONTEND_URL);

server.start(
    {
        cors: {
            credentials: true,
            origin: process.env.FRONTEND_URL,
        },
    },
    (details) => `Server is running on port https://localhost:${details.port}`,
);
