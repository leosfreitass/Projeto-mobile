import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Owner, Prisma } from '@prisma/client';

@Injectable()
export class OwnerService {
  constructor(private prisma: PrismaService) {}

  async owner(
    ownerWhereUniqueInput: Prisma.OwnerWhereUniqueInput,
  ): Promise<Owner | null> {
    return this.prisma.owner.findUnique({ where: ownerWhereUniqueInput });
  }

  async owners(params: {
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

  async createOwner(data: Prisma.OwnerCreateInput): Promise<Owner> {
    return this.prisma.owner.create({
      data,
    });
  }

  async updateOwner(params: {
    where: Prisma.OwnerWhereUniqueInput;
    data: Prisma.OwnerUpdateInput;
  }): Promise<Owner> {
    const { where, data } = params;
    return this.prisma.owner.update({
      data,
      where,
    });
  }

  async deleteOwner(where: Prisma.OwnerWhereUniqueInput): Promise<Owner> {
    return this.prisma.owner.delete({
      where,
    });
  }
}
