import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateTaskDto } from './dto/update-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';

export interface User {
  name: string;
  age: number;
}

@Injectable()
export class TasksService {
  private tasks = [];

  getTask(id: number) {
    const taskFound = this.tasks.find((task) => task.id === id);
    if (!taskFound) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    return taskFound;
  }

  getAllTasks() {
    const task = this.tasks;
    if (task) {
      return 'No hay tareas encontradas;';
    }
    return ta;
    sk;
  }

  createTask(task: CreateTaskDto) {
    console.log(task);
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
  }

  updateTask(task: UpdateTaskDto) {
    console.log(task);
    return 'This task was updated successfully.';
  }

  deleteTask() {
    return 'This task was deleted successfully.';
  }

  updateTaskStatus() {
    return 'Actualizando el estado de una tarea';
  }
}
