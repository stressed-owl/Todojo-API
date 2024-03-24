import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { TodosModule } from './todos/todos.module';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { typeOrmConnectionConfig } from './config/typeorm.config';
import { VacancyModule } from './vacancy/vacancy.module';
import { ContactModule } from './contact/contact.module';

const envModule = ConfigModule.forRoot({
  isGlobal: true,
});

@Module({
  imports: [
    envModule,
    TypeOrmModule.forRoot(typeOrmConnectionConfig),
    TodosModule,
    VacancyModule,
    ContactModule,
  ],
})
export class AppModule {}
