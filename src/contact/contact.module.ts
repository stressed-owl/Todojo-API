import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { Contact } from './contact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contact])],
  providers: [ContactService],
  controllers: [ContactController],
})
export class ContactModule {}
