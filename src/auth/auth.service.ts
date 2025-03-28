/* eslint-disable prettier/prettier */
import {
  Injectable,

  BadRequestException,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';
import { CreateUserDto } from 'src/user/user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto): Promise<User> {
    const { email, username, password } = createUserDto;

    if (!email || !username || !password) {
      throw new BadRequestException('Email, username, and password are required.');
    }

    // Check if user already exists
    const existingUser = await this.userRepo.findOne({
      where: [{ email }, { username }],
    });

    if (existingUser) {
      throw new ConflictException('Email or username already exists.');
    }

    // Hash password
    createUserDto.password = await bcrypt.hash(password, 10);

    const user = this.userRepo.create(createUserDto);
    return this.userRepo.save(user);
  }

  async login(createUserDto: CreateUserDto): Promise<{ token: string }> {
    const { email, password } = createUserDto;

    if (!email || !password) {
      throw new BadRequestException('Email and password are required.');
    }

    const user = await this.userRepo.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    // Include user ID and username in the token
    const payload = { id: user.id, username: user.username, email: user.email };
    const token = this.jwtService.sign(payload);

    return { token };
  }
}
