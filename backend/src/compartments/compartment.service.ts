import { Injectable } from '@nestjs/common';
import { Compartment } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCompartmentDto } from './dto/create-compartment.dto';
import { UpdateCompartmentDto } from './dto/update-compartment.dto';

@Injectable()
export class CompartmentService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: number): Promise<Compartment | null> {
    return this.prisma.compartment.findUnique({ where: { id } });
  }

  async findAll(): Promise<Compartment[]> {
    return this.prisma.compartment.findMany();
  }

  async createCompartment(data: CreateCompartmentDto): Promise<Compartment> {
    return this.prisma.compartment.create({
      data,
    });
  }

  async updateCompartment(
    id: number,
    data: UpdateCompartmentDto,
  ): Promise<Compartment> {
    if (data.dogId) {
      return this.prisma.compartment.update({
        where: { id },
        data: {
          ...data,
          isOccupied: true,
        },
      });
    }
    return this.prisma.compartment.update({
      where: { id },
      data: {
        ...data,
        isOccupied: false,
      },
    });
  }

  async deleteCompartment(id: number): Promise<Compartment> {
    return this.prisma.compartment.delete({ where: { id } });
  }
}
