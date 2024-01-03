import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
