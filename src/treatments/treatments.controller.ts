import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TreatmentsService } from './treatments.service';

@Controller('treatments')
export class TreatmentsController {

    constructor(private readonly treatmentsService: TreatmentsService) { }

    @Get()
    findAll() {
        return this.treatmentsService.findAll();
    }

    @Post()
    create(@Body() body: { name: string; }) {
        return this.treatmentsService.create(body.name);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.treatmentsService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() body: { name: string; }) {
        return this.treatmentsService.update(id, body.name);
    }


    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.treatmentsService.delete(id);
    }
}
