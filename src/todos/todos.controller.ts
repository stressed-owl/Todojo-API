import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common/decorators';
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

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Todo> {
    return this.todosService.findById(parseInt(id, 10));
  }

  @Post()
  async create(@Body() todo: Todo): Promise<Todo> {
    return this.todosService.create(todo);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() todo: Todo): Promise<Todo> {
    return this.todosService.update(parseInt(id, 10), todo);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.todosService.delete(parseInt(id, 10));
  }
}
