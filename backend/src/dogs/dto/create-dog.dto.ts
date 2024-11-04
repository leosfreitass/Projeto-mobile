import { ApiProperty } from '@nestjs/swagger';

import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateDogDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  breed: string;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  age?: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  extraInfo?: string;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  locatedAt: number;
}
