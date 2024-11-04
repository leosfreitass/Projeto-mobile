import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Owner as OwnerModel } from '@prisma/client';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { OwnerEntity } from './entities/owner.entity';
import { OwnerService } from './owner.service';

@Controller()
@ApiTags('Owners')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Get('ownerCpf/:cpf')
  @ApiOkResponse({ type: OwnerEntity })
  async getOwnerByCpf(@Param('cpf') cpf: string): Promise<OwnerModel> {
    return this.ownerService.findOne({ cpf: String(cpf) });
  }

  @Get('owner/:id')
  @ApiOkResponse({ type: OwnerEntity })
  async getOwnerById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<OwnerModel> {
    return this.ownerService.findOne({ id: String(id) });
  }

  @Get('owners')
  @ApiOkResponse({ type: OwnerEntity, isArray: true })
  async getOwners(): Promise<OwnerModel[]> {
    return this.ownerService.findAll({});
  }

  @Post('addOwner')
  @ApiCreatedResponse({ type: OwnerEntity })
  async createOwnerInstance(
    @Body()
    createOwnerDto: CreateOwnerDto,
  ): Promise<OwnerModel> {
    return this.ownerService.createOwner(createOwnerDto);
  }

  @Put('owner/:id')
  @ApiOkResponse({ type: OwnerEntity })
  async updateOwner(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateOwnerDto: UpdateOwnerDto,
  ): Promise<OwnerModel> {
    return this.ownerService.updateOwner(id, updateOwnerDto);
  }

  @Delete('owner/:id')
  @ApiOkResponse({ type: OwnerEntity })
  async deleteOwner(@Param('id', ParseUUIDPipe) id: string) {
    return this.ownerService.deleteOwner({ id: String(id) });
  }

  @Get('owner/:id/dogs')
  @ApiOkResponse({ type: OwnerEntity })
  async getDogsByOwner(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<object> {
    return this.ownerService.selectFromOwner({
      where: { id: String(id) },
      select: {
        name: true,
        cpf: true,
        dogs: true,
      },
    });
  }
}
