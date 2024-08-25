import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {
  tasksService: TasksService;
  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }
  @Get('')
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }
  @Post() //{title: 'primer tarea', status: false} -> {title:'tarea 2',
  //status:true
  creatTask() {
    return this.tasksService.createTask();
  }

  @Put()
  updateTask() {
    return this.tasksService.updateTask();
  }

  @Delete()
  deleteTask() {
    return this.tasksService.deleteTask();
  }

  @Patch() // {title: 'arreglo 1', status: true} -> {status: false}
  updateTaskStatus() {
    return this.tasksService.updateTaskStatus();
  }
}
