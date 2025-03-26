import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './category.dto';
import { Category } from './category.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { Multer } from 'multer'; 


@Controller('category')
export class CategoryController {
    constructor(
        private readonly categoryService: CategoryService,
    ) {}

    @Get()
    async findAll() {
        return this.categoryService.findAll();
    }

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    async create(
        @Body() createCategoryDto: CreateCategoryDto,
        @UploadedFile() file?: Multer.File 
    ): Promise<Category> {
        return this.categoryService.create(createCategoryDto, file);
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.categoryService.findOne(id);
    }

    // @Get('treatment/:id')
    // async findByTreatmentId(@Param('id') id: number) {
    //     return this.categoryService.findByTreatmentId(id);
    // }
    
    @Put(':id')
    async update(@Param('id') id: number, @Body() body: { name: string; image: string; treatmentId: number; isActive: boolean; }) {
        return this.categoryService.update(id, { name: body.name, image: body.image, treatmentId: body.treatmentId, isActive: body.isActive });
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.categoryService.delete(id);
    }
}
