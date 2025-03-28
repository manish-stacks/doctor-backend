/* eslint-disable prettier/prettier */
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  MaxLength,
  IsDate,
  IsBoolean,
} from 'class-validator';
import { Index } from 'typeorm';

export class CreateUserDto {
  @IsEmail({}, { message: 'Invalid email format' })
  @IsNotEmpty({ message: 'Email is required' })
  @MaxLength(50, { message: 'Email cannot be longer than 50 characters' })
  email: string;

  @IsString()
  @Index()
  @IsNotEmpty({ message: 'Username is required' })
  @MinLength(3, { message: 'Username must be at least 3 characters long' })
  @MaxLength(50, { message: 'Username cannot be longer than 50 characters' })
  username: string;

  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password: string;

  @IsOptional()
  @IsString()
  @MaxLength(255, {
    message: 'Phone number cannot be longer than 255 characters',
  })
  phone?: string;

  @IsOptional()
  @IsDate()
  @MaxLength(255, { message: 'Date of birth must not exceed 255 characters' })
  dob?: string;

  @IsOptional()
  @IsBoolean()
  @MaxLength(1, { message: 'Active status must be either 0 or 1' })
  active?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(255, { message: 'Gender cannot be longer than 255 characters' })
  gender?: string;
}

export class LoginDto {
  @IsEmail({}, { message: 'Invalid email format' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}

export class VerifyOtpDto {
  @IsEmail({}, { message: 'Invalid email format' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsNotEmpty({ message: 'OTP is required' })
  otp: number;
}
