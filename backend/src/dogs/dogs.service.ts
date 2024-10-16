import { Injectable } from '@nestjs/common';
import { Prisma, Dog } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DogsService {
  constructor(private prisma: PrismaService) {}

  async dog(
    dogWhereUniqueInput: Prisma.DogWhereUniqueInput,
  ): Promise<Dog | null> {
    return this.prisma.dog.findUnique({ where: dogWhereUniqueInput });
  }

  async dogs(params: {
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

  async createDog(data: Prisma.DogCreateInput): Promise<Dog> {
    return this.prisma.dog.create({
      data,
    });
  }

  async updateDog(params: {
    where: Prisma.DogWhereUniqueInput;
    data: Prisma.DogUpdateInput;
  }): Promise<Dog> {
    const { where, data } = params;
    return this.prisma.dog.update({
      data,
      where,
    });
  }

  async deleteDog(where: Prisma.DogWhereUniqueInput): Promise<Dog> {
    return this.prisma.dog.delete({ where });
  }
}
