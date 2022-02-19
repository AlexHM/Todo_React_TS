import { model, Schema, Document } from "mongoose";

export interface ITask extends Document {
  title: string;
  description: string;
  date: string | Date;
}
const taskSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: false,
  },
});
export default model<ITask>("tasks", taskSchema);
