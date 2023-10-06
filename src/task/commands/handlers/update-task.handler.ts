import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateTaskCommand } from '../implementations/update-task.command';
import { TaskService } from '../../service/task.service';

@CommandHandler(UpdateTaskCommand)
export class UpdateTaskHandler implements ICommandHandler<UpdateTaskCommand> {
  constructor(private readonly taskService: TaskService) {}

  async execute(command: UpdateTaskCommand): Promise<void> {
    await this.taskService.updateTask(command.taskId, command);
  }
}
