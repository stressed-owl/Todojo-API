import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
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

  async findById(id: number): Promise<Todo> {
    return this.todosRepository.findOne({ where: { id } });
  }

  async create(todo: Todo): Promise<Todo> {
    return this.todosRepository.save(todo);
  }

  async update(id: number, todo: Todo): Promise<Todo> {
    await this.todosRepository.update(id, todo);
    return this.todosRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.todosRepository.delete(id);
  }
}
