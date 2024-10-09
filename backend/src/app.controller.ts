import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { Owner as OwnerModel, Dog as DogModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly ownerService: OwnerService) {}

  @Get('owner/:id')
  async getOwnerById(@Param('id') id: string): Promise<OwnerModel> {
    return this.ownerService.owner({ id: String(id) });
  }

  // Does nothing at the moment because dog.service.ts does not exist yet.
  async getDogsByOwner(): Promise<DogModel[]> {
    return;
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
