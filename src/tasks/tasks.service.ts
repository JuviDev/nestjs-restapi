import { Injectable, HttpCode, NotFoundException } from '@nestjs/common';

export interface Task {
  id: number;
  title: string;
  description: string;
}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  findAll() {
    return this.tasks;
  }

  findOne(id: number) {
    const taskFound = this.tasks.find((task) => task.id === id);

    if (!taskFound) {
      return new NotFoundException(`Task with id ${id} not found`);
    }

    return;
  }

  create(task: Task) {
    this.tasks.push({
      id: this.tasks.length + 1,
      ...task,
    });

    return this.tasks;
  }

  update() {
    return 'This action updates a task';
  }

  modify() {
    return 'This action modifies a task';
  }

  remove() {
    return 'This action removes a task';
  }
}
