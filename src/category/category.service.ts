import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {

    constructor(@InjectRepository(Category)
    private categoryRepository: Repository<Category>) { }

    async findAll() {
        return this.categoryRepository.find();
    }

    async findOne(id: number) {
        return this.categoryRepository.findOne({ where: { id } });
    }

    async findByTreatmentId(id: number) {
        return this.categoryRepository.find({ where: { treatmentId: id } });
    }

    async create(name: string, image: string, treatmentId: number, isActive: boolean) {
        const category = this.categoryRepository.create({ name, image, treatmentId, isActive });
        return this.categoryRepository.save(category);
    }

    async update(id: number, category: { name: string; image: string; treatmentId: number; isActive: boolean; }) {
        const categoryToUpdate = await this.categoryRepository.findOne({ where: { id } });
        if (!categoryToUpdate) return 'Category not found';
        else {
            categoryToUpdate.name = category.name;
            categoryToUpdate.image = category.image;
            categoryToUpdate.treatmentId = category.treatmentId;
            categoryToUpdate.isActive = category.isActive;
            return this.categoryRepository.save(categoryToUpdate);
        }
    }

    async delete(id: number) {
        const category = await this.categoryRepository.findOne({ where: { id } });
        if (!category) return 'Category not found';
        else {
            return this.categoryRepository.remove(category);
        }
    }
}
