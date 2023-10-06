import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetTaskByIdQuery } from '../implementations/get-task-by-id.query';
import { TaskRepository } from '../../repository/task.repository';
import { TaskResponseDto } from '../../dtos/task-response.dto';

@QueryHandler(GetTaskByIdQuery)
export class GetTaskByIdHandler implements IQueryHandler<GetTaskByIdQuery> {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(query: GetTaskByIdQuery): Promise<TaskResponseDto> {
    try {
      const task = await this.taskRepository.findById(query.id);
      return {
        success: true,
        message: 'Task retrieved successfully',
        data: task,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to retrieve task',
        errors: error,
      };
    }
  }
}
