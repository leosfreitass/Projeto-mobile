import { Injectable } from '@nestjs/common';
import { Prisma, Dog } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';

@Injectable()
export class DogService {
  constructor(private prisma: PrismaService) {}

  async findOne(
    dogWhereUniqueInput: Prisma.DogWhereUniqueInput,
  ): Promise<Dog | null> {
    return this.prisma.dog.findUnique({ where: dogWhereUniqueInput });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DogWhereUniqueInput;
    where?: Prisma.DogWhereInput;
    orderBy?: Prisma.DogOrderByWithRelationInput;
  }): Promise<Dog[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.dog.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createDog(createDogDto: CreateDogDto): Promise<Dog> {
    return this.prisma.dog.create({ data: createDogDto });
  }

  async updateDog(id: string, updateDogDto: UpdateDogDto): Promise<Dog> {
    return this.prisma.dog.update({
      where: { id },
      data: updateDogDto,
    });
  }

  async deleteDog(where: Prisma.DogWhereUniqueInput): Promise<Dog> {
    return this.prisma.dog.delete({ where });
  }
}
