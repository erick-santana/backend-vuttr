import { Tool } from '../models/Tool';
import { Request, Response } from 'express';
import { ToolDocument } from '../models/Tool'

export const getTools = async (req: Request, res: Response) => {
    try {
        const tools = await Tool.find({});

        if (!tools) {
            res.sendStatus(404);
        }

        res.status(200).send(tools);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export const getByTag = async (req: Request, res: Response) => {
    const tag = req.query.tag || '';
    
    try {
        const tools: ToolDocument[] = await Tool.find({ tags: tag as string }).exec();

        if (!tools) {
            res.sendStatus(404);
        }

        res.status(200).send(tools);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export const postTool = async (req: Request, res: Response) => {
    const { title, link, description, tags } = req.body;

    try {
        if (!title || !link || !description || !tags) {
            res.status(400).send('Adicione valores válidos a todos os campos');
        }

        const newTool = { 
            title: title, 
            link: link, 
            description: description, 
            tags: tags 
        };

        await Tool.create(newTool);

        res.status(201).send(newTool);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export const deleteTool = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        if (!id) {
            res.sendStatus(404);
        }

        await Tool.deleteOne({ _id: id });
        
        res.sendStatus(200);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};