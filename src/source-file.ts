import mongoose from "mongoose";
import { SourceDocument } from './source';

export type SourceFileDocument = mongoose.Document & {
    path: string;
    sourceId: SourceDocument["_id"];
    metadata: {};
};

const sourceFileSchema = new mongoose.Schema({
    path: { type: String, required: true },
    sourceId: { type: mongoose.Types.ObjectId, required: true },
    metadata: {}
}, { timestamps: true });

export const SourceFile = mongoose.model<SourceFileDocument>("SourceFile", sourceFileSchema);
