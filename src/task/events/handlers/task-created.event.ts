import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { TaskCreatedEvent } from '../implementations/task-created.event';

@EventsHandler(TaskCreatedEvent)
export class TaskCreatedHandler implements IEventHandler<TaskCreatedEvent> {
  handle(event: TaskCreatedEvent) {
    // Lógica para lidar com o evento de tarefa criada.
    // Por exemplo, enviar uma notificação ou registrar um log.
    console.log(`Task with ID ${event.taskId} was created.`);
  }
}
