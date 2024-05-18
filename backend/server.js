import { createServer } from 'http';
import app from './app.js';
import 'dotenv/config'

const port = process.env.PORT || 8000;

const server = createServer(app);

server.listen(port, () => {
    console.log(`Server is listening in port ${port}`);
});