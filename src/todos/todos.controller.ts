import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  NotFoundException,
  HttpCode,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './todos.entity';

// Route
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  // API endpoints

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todosService.findAll();
  }

  @Post()
  @HttpCode(201)
  async create(@Body() todo: Todo): Promise<Todo> {
    const createdTodo = this.todosService.create(todo);
    return createdTodo;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() todo: Todo): Promise<any> {
    await this.todosService.update(id, todo);
    return { message: 'Todo updated successfully' };
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    const user = await this.todosService.findOne(id);

    if (!user) {
      throw new NotFoundException('Todo does not exist!');
    }

    await this.todosService.delete(id);
    return { message: 'Todo was deleted successfully' };
  }
}
