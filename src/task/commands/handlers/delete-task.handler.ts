import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteTaskCommand } from '../implementations/delete-task.command';
import { TaskService } from '../../service/task.service';

@CommandHandler(DeleteTaskCommand)
export class DeleteTaskHandler implements ICommandHandler<DeleteTaskCommand> {
  constructor(private readonly taskService: TaskService) {}

  async execute(command: DeleteTaskCommand): Promise<void> {
    await this.taskService.deleteTask(command.taskId);
  }
}
