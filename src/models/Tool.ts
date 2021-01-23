import mongoose from 'mongoose';

export type ToolDocument = mongoose.Document & {
    title: string;
    link: string;
    description: string;
    tags: string[];
};

const toolSchema = new mongoose.Schema({
    title: String,
    link: String,
    description: String,
    tags: Array
}, { timestamps: true });

export const Tool = mongoose.model<ToolDocument>("Tool", toolSchema);