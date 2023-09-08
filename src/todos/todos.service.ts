import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todos.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

    // API methods to handle CRUD operations

  async findAll(): Promise<Todo[]> {
    return this.todosRepository.find();
  }

  async findOne(id: number): Promise<Todo> {
    return this.todosRepository.findOne({ where: { id } });
  }

  async create(todo: Partial<Todo>): Promise<Todo> {
    const newTodo = this.todosRepository.create(todo);
    return this.todosRepository.save(newTodo);
  }

  async update(id: number, todo: Partial<Todo>): Promise<Todo> {
    await this.todosRepository.update(id, todo);
    return this.todosRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.todosRepository.delete(id);
  }
}
