import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateTaskCommand } from '../commands/implementations/create-task.command';
import { UpdateTaskCommand } from '../commands/implementations/update-task.command';
import { DeleteTaskCommand } from '../commands/implementations/delete-task.command';
import { GetAllTasksQuery } from '../queries/implementations/get-all-tasks.query';
import { GetTaskByIdQuery } from '../queries/implementations/get-task-by-id.query';
import { TaskResponseDto } from '../dtos/task-response.dto';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { UpdateTaskDto } from '../dtos/update-task.dto';

@Injectable()
export class TaskService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async createTask(data: CreateTaskDto): Promise<TaskResponseDto> {
    return this.commandBus.execute(new CreateTaskCommand(data.));
  }

  async getAllTasks(): Promise<TaskResponseDto> {
    return this.queryBus.execute(new GetAllTasksQuery());
  }

  async getTaskById(id: string): Promise<TaskResponseDto> {
    return this.queryBus.execute(new GetTaskByIdQuery(id));
  }

  async updateTask(id: string, data: UpdateTaskDto): Promise<TaskResponseDto> {
    return this.commandBus.execute(new UpdateTaskCommand(id, data.title, data.description, data.status));
  }

  async deleteTask(id: string): Promise<TaskResponseDto> {
    return this.commandBus.execute(new DeleteTaskCommand(id));
  }
}
