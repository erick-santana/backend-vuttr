import express from 'express';
import bodyParser from 'body-parser';
import { connectToDatabase } from './config/db';

// Controllers
import * as toolController from './controllers/tool';

// Create Express server
const app = express();

// Connect DB
connectToDatabase();

// Express configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Primary app routes
app.get('/', toolController.getTools);
app.get('/tools', toolController.getByTag);
app.post('/', toolController.postTool);
app.delete('/tools/:id', toolController.deleteTool);

export default app;
