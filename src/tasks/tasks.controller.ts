import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Body,
  Query,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('/tasks')
@ApiTags('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({ status: 200, description: 'Return all tasks.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  findAll(@Query() query: any) {
    return this.tasksService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: number) {
    return this.tasksService.findOne(id);
  }

  @Post()
  create(@Body() task: CreateTaskDto) {
    return this.tasksService.create(task);
  }

  @Put()
  update() {
    return this.tasksService.update();
  }

  @Patch()
  modify() {
    return this.tasksService.modify();
  }

  @Delete()
  remove() {
    return this.tasksService.remove();
  }
}
