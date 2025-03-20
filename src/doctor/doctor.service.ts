import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from './doctor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DoctorService {
    constructor(@InjectRepository(Doctor)
    private doctorRepository: Repository<Doctor>
    ) { }

    async create(name: string, treatmentId: number, categoryId: number, expertiseId: number, hospitalId: string, userId: number, image: string, desc: string, education: string, certificate: string, appointmentFees: string, experience: string, timeSlot: string,
        dob: string, gender: string) {
        const doctor = this.doctorRepository.create({
            name, treatmentId, categoryId, expertiseId, hospitalId, userId, image, desc, education, certificate, appointmentFees, experience, timeSlot,
            dob, gender
        });
        return this.doctorRepository.save(doctor);
    }

    async findAll() {
        return this.doctorRepository.find();
    }

    async findOne(id: number) {
        const doctor = await this.doctorRepository.findOne({ where: { id } });
        if (!doctor) throw new NotFoundException('Doctor not found');
        return doctor;
    }
    async update(id: number, name: string, treatmentId: number, categoryId: number, expertiseId: number, hospitalId: string, userId: number, image: string, desc: string, education: string, certificate: string, appointmentFees: string, experience: string, timeSlot: string,
        dob: string, gender: string) {
        const doctor = await this.doctorRepository.findOne({ where: { id } });
        if (!doctor) throw new NotFoundException('Doctor not found');
        doctor.name = name;
        doctor.treatmentId = treatmentId;
        doctor.categoryId = categoryId;
        doctor.expertiseId = expertiseId;
        doctor.hospitalId = hospitalId;
        doctor.userId = userId;
        doctor.image = image;
        doctor.desc = desc;
        doctor.education = education;
        doctor.certificate = certificate;
        doctor.appointmentFees = appointmentFees;
        doctor.experience = experience;
        doctor.timeSlot = timeSlot;
        doctor.dob = dob;
        doctor.gender = gender;
        return this.doctorRepository.save(doctor);
    }
    async remove(id: number) {
        const doctor = await this.doctorRepository.findOne({ where: { id } });
        if (!doctor) throw new NotFoundException('Doctor not found');
        return this.doctorRepository.remove(doctor);
    }
}
