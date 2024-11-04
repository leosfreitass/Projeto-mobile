import { Injectable } from '@nestjs/common';
import { Owner, Prisma } from '@prisma/client';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OwnerService {
  constructor(private prisma: PrismaService) {}

  async findOne(where: Prisma.OwnerWhereUniqueInput): Promise<Owner | null> {
    return this.prisma.owner.findUnique({ where });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.OwnerWhereUniqueInput;
    where?: Prisma.OwnerWhereInput;
    orderBy?: Prisma.OwnerOrderByWithRelationInput;
  }): Promise<Owner[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.owner.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createOwner(createOwnerDto: CreateOwnerDto): Promise<Owner> {
    return this.prisma.owner.create({ data: createOwnerDto });
  }

  async updateOwner(
    id: string,
    updateOwnerDto: UpdateOwnerDto,
  ): Promise<Owner> {
    return this.prisma.owner.update({
      where: { id },
      data: updateOwnerDto,
    });
  }

  async deleteOwner(where: Prisma.OwnerWhereUniqueInput): Promise<Owner> {
    return this.prisma.owner.delete({
      where,
    });
  }
}
