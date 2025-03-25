import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ExpertiseService } from './expertise.service';

@Controller('expertise')
export class ExpertiseController {
    constructor(private readonly expertiseService: ExpertiseService) { }

    @Get()
    findAll() {
        return this.expertiseService.findAll();
    }

    @Post()
    create(@Body() body: { name: string; }) {
        return this.expertiseService.create(body.name);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.expertiseService.findOne(id);
    }

    @Post(':id')
    update(@Param('id') id: number, @Body() body: { name: string; }) {
        return this.expertiseService.update(id, body.name);
    }


    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.expertiseService.delete(id);
    }

}
