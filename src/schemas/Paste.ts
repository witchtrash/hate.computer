import mongoose, { Document, Model, Schema, model } from 'mongoose';

export interface Paste {
  title: string;
  language: string;
  body: string;
  encrypted: boolean;
  passphrase?: string;
}

interface PasteDocument extends Paste, Document {}

type PasteModel = Model<PasteDocument>;

const PasteSchema = new Schema<PasteDocument, PasteModel>(
  {
    title: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    encrypted: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Paste ||
  model<PasteDocument, PasteModel>('Paste', PasteSchema);