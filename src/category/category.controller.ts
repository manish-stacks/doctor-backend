import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @Get()
    async findAll() {
        return this.categoryService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.categoryService.findOne(id);
    }

    @Get('treatment/:id')
    async findByTreatmentId(@Param('id') id: number) {
        return this.categoryService.findByTreatmentId(id);
    }
    @Post()
    async create(@Body() body: { name: string; image: string; treatmentId: number; isActive: boolean; }) {
        return this.categoryService.create(body.name, body.image, body.treatmentId, body.isActive);
    }
    
    @Put(':id')
    async update(@Param('id') id: number, @Body() body: { name: string; image: string; treatmentId: number; isActive: boolean; }) {
        return this.categoryService.update(id, { name: body.name, image: body.image, treatmentId: body.treatmentId, isActive: body.isActive });
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.categoryService.delete(id);
    }
}
