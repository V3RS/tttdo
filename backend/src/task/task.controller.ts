import { Controller, Body, Post, Get, Param, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateTaskDTO } from '../dto/create-task.dto';
import { TaskStatus } from '../entity/task.entity';
import { TaskService } from './task.service';
import { UpdateTaskDTO } from '../dto/update-task.dto';

// tasks controller
@Controller('tasks')
export class TaskController {

    constructor(private readonly taskService: TaskService) { }
// get all tasks
    @Get()
    public async getAll() {
        const resp = await this.taskService.getAll();

        return resp;
    }
// get one task
    @Get("/:id")
    public async getOne(@Param("id") taskId: number) {
        const resp = await this.taskService.getOne(taskId);

        return resp;
    }
// create a task
    @Post()
    public async createOne(@Body() createTaskRequest: CreateTaskDTO) {
        const resp = await this.taskService.createOne(createTaskRequest);

        return resp;
    }
// update one task
    @Put("/:id")
    public async updateOne(@Param("id") taskId: number, @Body() updateTaskRequest: UpdateTaskDTO) {
        const resp = await this.taskService.updateOne(taskId, updateTaskRequest);

        return resp;
    }
// delete one task
    @Delete("/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    public async deleteOne(@Param("id") taskId: number) {
        await this.taskService.deleteOne(taskId);
    }
}
