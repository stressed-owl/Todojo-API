import { Controller, Get } from '@nestjs/common/decorators';
import { VacancyService } from './vacancy.service';
import { Vacancy } from './vacancy.entity';

@Controller('vacancy')
export class VacancyController {
  constructor(private readonly vacancyService: VacancyService) {}

  @Get()
  async findAll(): Promise<Vacancy[]> {
    return this.vacancyService.findAll();
  }
}
