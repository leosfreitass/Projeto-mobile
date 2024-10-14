import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { Owner as OwnerModel } from '@prisma/client';

@Controller()
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Get('owner/:cpf')
  async getOwnerByCpf(@Param('cpf') cpf: string): Promise<OwnerModel> {
    return this.ownerService.owner({ cpf: String(cpf) });
  }

  @Post('owner')
  async createOwnerInstance(
    @Body()
    ownerData: {
      cpf: string;
      name: string;
      address: string;
      telephoneNumber: string;
    },
  ): Promise<OwnerModel> {
    return this.ownerService.createOwner(ownerData);
  }
}
