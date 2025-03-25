import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Expertise } from './expertise.entiry';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ExpertiseService {

    constructor(@InjectRepository(Expertise)
    private readonly expertiseRepository: Repository<Expertise>) { }

    findAll() {
        return this.expertiseRepository.find();
    }

    create(name: string) {
        const expertise = this.expertiseRepository.create({ name });
        return this.expertiseRepository.save(expertise);
    }

    findOne(id: number) {
        return this.expertiseRepository.findOne({ where: { id } });
    }

    update(id: number, name: string) {
        return this.expertiseRepository.update(id, { name });
    }

    delete(id: number) {
        return this.expertiseRepository.delete(id);
    }
}
