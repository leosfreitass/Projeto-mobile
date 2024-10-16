import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OwnersService } from './owners.service';
import { Owner as OwnerModel } from '@prisma/client';

@Controller()
export class OwnerController {
  constructor(private readonly ownerService: OwnersService) {}

  @Get('ownerCpf/:cpf')
  async getOwnerByCpf(@Param('cpf') cpf: string): Promise<OwnerModel> {
    return this.ownerService.owner({ cpf: String(cpf) });
  }

  @Get('owner/:id')
  async getOwnerById(@Param('id') id: string): Promise<OwnerModel> {
    return this.ownerService.owner({ id: String(id) });
  }

  @Get('owners')
  async getOwners(): Promise<OwnerModel[]> {
    return this.ownerService.owners({});
  }

  @Post('addOwner')
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

  @Put('owner/:id')
  async updateOwner(
    @Param('id')
    id: string,
    @Body()
    ownerData: {
      name: string;
      address: string;
      telephoneNumber: string;
    },
  ): Promise<OwnerModel> {
    return this.ownerService.updateOwner({
      where: { id: String(id) },
      data: ownerData,
    });
  }

  @Delete('owner/:id')
  async deleteOwner(@Param('id') id: string): Promise<OwnerModel> {
    return this.ownerService.deleteOwner({ id: String(id) });
  }

  // @Get('owner/:cpf/dogs')
  // async getDogsByOwner(@Param('cpf') cpf: string): Promise<object> {
  //   return this.ownerService.selectFromOwner({
  //     where: { cpf: String(cpf) },
  //     select: {
  //       name: true,
  //       dogs: true,
  //     },
  //   });
  // }
}
