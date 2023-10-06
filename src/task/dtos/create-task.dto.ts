import { IsString, IsBoolean, IsOptional, IsDate, IsNumber } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsBoolean()
  @IsOptional()
  completed?: boolean;

  @IsDate()
  @IsOptional()
  started_at?: Date;

  @IsDate()
  @IsOptional()
  finished_at?: Date;

  @IsString()
  @IsOptional()
  status?: string;

  @IsString()
  @IsOptional()
  assigned_by?: string;

  @IsNumber()
  @IsOptional()
  priority?: number;

  @IsDate()
  @IsOptional()
  due_date?: Date;
}
