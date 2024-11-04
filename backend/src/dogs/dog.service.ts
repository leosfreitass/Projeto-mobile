import { Injectable } from '@nestjs/common';
import { Dog } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateDogDto } from './dto/update-dog.dto';
import { CreateDogDto } from './dto/create-dog.dto';

@Injectable()
export class DogService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: string): Promise<Dog | null> {
    return this.prisma.dog.findUnique({ where: { id } });
  }

  async findAll(): Promise<Dog[]> {
    return this.prisma.dog.findMany();
  }

  async findAllByOwner(ownerId: string): Promise<Dog[]> {
    return this.prisma.dog.findMany({ where: { ownerId } });
  }

  async createDog(ownerId: string, data: CreateDogDto): Promise<Dog> {
    return this.prisma.dog.create({
      data: {
        ...data,
        owner: { connect: { id: ownerId } },
      },
    });
  }

  async updateDog(id: string, updateDogDto: UpdateDogDto): Promise<Dog> {
    return this.prisma.dog.update({
      where: { id },
      data: updateDogDto,
    });
  }

  async deleteDog(id: string): Promise<Dog> {
    return this.prisma.dog.delete({ where: { id } });
  }
}
