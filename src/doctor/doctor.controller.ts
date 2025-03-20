import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DoctorService } from './doctor.service';

@Controller('doctor')
export class DoctorController {
    constructor(private readonly doctorService: DoctorService) {}

    // @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() body: { name: string; treatmentId: number; categoryId: number; expertiseId: number; hospitalId: string; userId: number; image: string; desc: string; education: string; certificate: string; appointmentFees: string; experience: string; timeSlot: string
    dob: string; gender: string; }) {
        return this.doctorService.create(body.name, body.treatmentId, body.categoryId, body.expertiseId, body.hospitalId, body.userId, body.image, body.desc, body.education, body.certificate, body.appointmentFees, body.experience, body.timeSlot,
        body.dob, body.gender);
    }
    @Get()
    async findAll() {
        return this.doctorService.findAll();
    }
    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.doctorService.findOne(id);    
    }
    // @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id') id: number, @Body() body: { name: string; treatmentId: number; categoryId: number; expertiseId: number; hospitalId: string; userId: number; image: string; desc: string; education: string; certificate: string; appointmentFees: string; experience: string; timeSlot: string; dob: string; gender: string; }) {
        return this.doctorService.update(id, body.name, body.treatmentId, body.categoryId, body.expertiseId, body.hospitalId, body.userId, body.image, body.desc, body.education, body.certificate, body.appointmentFees, body.experience, body.timeSlot,
        body.dob, body.gender);
    }
    // @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.doctorService.remove(id);
    }
}
