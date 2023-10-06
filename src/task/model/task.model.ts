import { Schema, model, Types } from 'mongoose';

export class TaskSchema extends Schema {
  constructor() {
    super({
      title: { type: String, required: true },
      description: { type: String, required: true },
      completed: { type: Boolean, default: false },
      created_at: { type: Date, default: Date.now },
      created_by: { type: Types.ObjectId, ref: 'User' },
      started_at: { type: Date },
      finished_at: { type: Date },
      status: { type: String, default: 'Pendente' },
      assigned_by: { type: Types.ObjectId, ref: 'User' },
      priority: { type: Number, default: 1 },
      due_date: { type: Date },
    });
  }
}

const TaskModel = model('Task', new TaskSchema());
