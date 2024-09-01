import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common'
import { TasksService } from './tasks.service'
import { UpdateTaskDto } from './dto/update-task.dto'
import { CreateTaskDto } from './dto/create-task.dto'
import { ApiTags } from '@nestjs/swagger'

@Controller('/tasks')
@ApiTags('tasks')
export class TasksController {
  tasksService: TasksService
  constructor(tasksService: TasksService) {
    this.tasksService = tasksService
  }

  @Get()
  getAllTasks(@Query() query: any) {
    return this.tasksService.getAllTasks()
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.tasksService.getTask(parseInt(id))
  }

  @Post()
  createTask(@Body() task: CreateTaskDto) {
    console.log(task)
    return this.tasksService.createTask(task)
  }
  @Put()
  updateTask(@Body() task: UpdateTaskDto) {
    return this.tasksService.updateTask(task)
  }

  @Delete()
  deleteTask() {
    return this.tasksService.deleteTask()
  }

  @Patch() // {title: 'arreglo 1', status: true} -> {status: false}
  updateTaskStatus() {
    return this.tasksService.updateTaskStatus()
  }
}
