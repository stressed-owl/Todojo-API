import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from 'src/todos/todos.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async () => ({
        type: process.env.DB_TYPE as any,
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        username: process.env.PG_USER,
        password: process.env.PG_PASS,
        database: process.env.PG_DB,
        entities: [Todo],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
