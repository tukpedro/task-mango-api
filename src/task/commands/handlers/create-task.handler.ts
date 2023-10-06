import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateTaskCommand } from '../implementations/create-task.command';
import { TaskService } from '../../service/task.service';

@CommandHandler(CreateTaskCommand)
export class CreateTaskHandler implements ICommandHandler<CreateTaskCommand> {
  constructor(private readonly taskService: TaskService) {}

  async execute(command: CreateTaskCommand): Promise<void> {
    await this.taskService.createTask(command);
  }
}
