import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { TaskDeletedEvent } from '../implementations/task-deleted.event';

@EventsHandler(TaskDeletedEvent)
export class TaskDeletedHandler implements IEventHandler<TaskDeletedEvent> {
  handle(event: TaskDeletedEvent) {
    // Lógica para lidar com o evento de tarefa excluída.
    console.log(`Task with ID ${event.taskId} was deleted.`);
  }
}
