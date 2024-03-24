import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Vacancy } from './vacancy.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VacancyService {
  constructor(
    @InjectRepository(Vacancy)
    private vacancyRepository: Repository<Vacancy>,
  ) {}

  async findAll(): Promise<Vacancy[]> {
    return this.vacancyRepository.find();
  }
}
