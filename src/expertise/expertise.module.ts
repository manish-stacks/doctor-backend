import { Module } from '@nestjs/common';
import { ExpertiseController } from './expertise.controller';
import { ExpertiseService } from './expertise.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expertise } from './expertise.entiry';

@Module({
  imports: [TypeOrmModule.forFeature([Expertise])],
  controllers: [ExpertiseController],
  providers: [ExpertiseService]
})
export class ExpertiseModule { }
