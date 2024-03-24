import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Todo } from './todos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  providers: [TodosService],
  controllers: [TodosController],
})
export class TodosModule {}
