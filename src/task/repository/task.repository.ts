import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TaskSchema } from '../model/task.model';

@Injectable()
export class TaskRepository {
  constructor(@InjectModel(TaskSchema.name) private readonly taskModel: Model<TaskSchema>) {}

  async create(data: TaskSchema): Promise<TaskSchema> {
    const newTask = new this.taskModel(data);
    return await newTask.save();
  }

  async findAll(): Promise<TaskSchema[]> {
    return await this.taskModel.find().exec();
  }

  async findById(id: string): Promise<TaskSchema> {
    return await this.taskModel.findById(id).exec();
  }

  async updateById(id: string, data: Partial<TaskSchema>): Promise<TaskSchema> {
    return await this.taskModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async deleteById(id: string): Promise<TaskSchema> {
    return await this.taskModel.findByIdAndRemove(id).exec();
  }

  async findByCriteria(criteria: Partial<TaskSchema>): Promise<TaskSchema[]> {
    return await this.taskModel.find(criteria).exec();
  }
}
