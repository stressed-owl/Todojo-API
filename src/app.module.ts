import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
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
