import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { TaskService } from '../service/task.service';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { UpdateTaskDto } from '../dtos/update-task.dto';
import { TaskResponseDto } from '../dtos/task-response.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<TaskResponseDto> {
    return this.taskService.createTask(createTaskDto);
  }

  @Get()
  async getAllTasks(): Promise<TaskResponseDto> {
    return this.taskService.getAllTasks();
  }

  @Get(':id')
  async getTaskById(@Param('id') id: string): Promise<TaskResponseDto> {
    return this.taskService.getTaskById(id);
  }

  @Put(':id')
  async updateTask(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto): Promise<TaskResponseDto> {
    return this.taskService.updateTask(id, updateTaskDto);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<TaskResponseDto> {
    return this.taskService.deleteTask(id);
  }
}
