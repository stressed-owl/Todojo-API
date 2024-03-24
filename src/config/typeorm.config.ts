import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces';

export const typeOrmConnectionConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'Nikolay',
  password: 'zzxxccvvbbnnmm',
  database: 'todo',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
