import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllTasksQuery } from '../implementations/get-all-tasks.query';
import { TaskRepository } from '../../repository/task.repository';
import { TaskResponseDto } from '../../dtos/task-response.dto';

@QueryHandler(GetAllTasksQuery)
export class GetAllTasksHandler implements IQueryHandler<GetAllTasksQuery> {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(query: GetAllTasksQuery): Promise<TaskResponseDto> {
    try {
      const tasks = await this.taskRepository.findAll();
      return {
        success: true,
        message: 'Tasks retrieved successfully',
        data: tasks,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to retrieve tasks',
        errors: error,
      };
    }
  }
}
