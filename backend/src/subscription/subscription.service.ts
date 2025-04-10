import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscription } from './subscription.entity';

@Injectable()
export class SubscriptionService {
    constructor(@InjectRepository(Subscription)
    private subscriptionRepository: Repository<Subscription>) { }

    async findAll() {
        return this.subscriptionRepository.find();
    }

    async create(name: string, plan: string, totalAppointment: number) {
        const subscription = new Subscription();
        subscription.name = name;
        subscription.plan = plan;
        subscription.totalAppointment = totalAppointment;
        return this.subscriptionRepository.save(subscription);
    }

    async findOne(id: number) {
        return this.subscriptionRepository.findOne({ where: { id } });
    }

    async update(id: number, name: string, plan: string, totalAppointment: number) {
        const subscription = await this.subscriptionRepository.findOne({ where: { id } });
        if (!subscription) return 'Subscription not found';
        subscription.name = name;
        subscription.plan = plan;
        subscription.totalAppointment = totalAppointment;
        return this.subscriptionRepository.save(subscription);
    }

    async remove(id: number) {
        const subscription = await this.subscriptionRepository.findOne({ where: { id } });
        if (!subscription) return 'Subscription not found';
        return this.subscriptionRepository.remove(subscription);
    }
}
