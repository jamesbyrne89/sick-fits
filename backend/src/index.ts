// let's go!

import dotenv from 'dotenv';
import createServer from './createServer';
import db from './db';

dotenv.config({ path: 'variables.env' });

const server = createServer();

// TODO use Express middleware to handle cookies (JWT)
// TODO use Express middleware to populate current user

server.start(
    {
        cors: {
            credentials: true,
            origin: process.env.FRONTEND_URL,
        },
    },
    (details) => console.log(`Server is running on port http://localhost:${details.port}`),
);
