import mongoose from "mongoose";
import { SourceDocument } from './source';

export type SourceScanDocument = mongoose.Document & {
    sourceId: SourceDocument["_id"];
    jobId: string;
};

const sourceScanSchema = new mongoose.Schema({
    sourceId: { type: mongoose.Types.ObjectId, required: true },
    jobId: { type: String, required: true }
}, { timestamps: true });

export const SourceScan = mongoose.model<SourceScanDocument>("SourceScan", sourceScanSchema);
