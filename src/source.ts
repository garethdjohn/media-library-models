import mongoose from "mongoose";

export type SourceDocument = mongoose.Document & {
    name: string;
    path: string;
};

const sourceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    path: { type: String, required: true },
}, { timestamps: true });

export const Source = mongoose.model<SourceDocument>("Source", sourceSchema);
