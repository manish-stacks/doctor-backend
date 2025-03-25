import { Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { Treatments } from './treatments.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TreatmentsService {

    constructor(
        @InjectRepository(Treatments)
        private readonly treatmentsRepository: Repository<Treatments>,
    ) { }


    findAll() {
        return this.treatmentsRepository.find();
    }

    create(name: string) {
        return this.treatmentsRepository.save({ name });
    }
    findOne(id: number) {
        return this.treatmentsRepository.findOne({ where: { id } });
    }

    update(id: number, name: string) {
        return this.treatmentsRepository.update(id, { name });
    }

    delete(id: number) {
        return this.treatmentsRepository.delete(id);
    }

}
