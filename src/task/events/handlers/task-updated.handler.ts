import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { TaskUpdatedEvent } from '../implementations/task-updated.event';

@EventsHandler(TaskUpdatedEvent)
export class TaskUpdatedHandler implements IEventHandler<TaskUpdatedEvent> {
  handle(event: TaskUpdatedEvent) {
    // Lógica para lidar com o evento de tarefa atualizada.
    console.log(`Task with ID ${event.taskId} was updated.`);
  }
}
