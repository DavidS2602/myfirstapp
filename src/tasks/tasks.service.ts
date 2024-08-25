import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getAllTasks() {
    return ['Task 1', 'Task 2', 'Task 3'];
  }

  createTask() {
    return 'This task was created successfully.';
  }

  updateTask() {
    return 'This task was updated successfully.';
  }

  deleteTask() {
    return 'This task was deleted successfully.';
  }

  updateTaskStatus() {
    return 'Actualizando el estado de una tarea';
  }
}
