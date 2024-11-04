import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { DogEntity } from './dogs/entities/dog.entity';
import { OwnerEntity } from './owners/entities/owner.entity';
import { Owner } from '@prisma/client';
import { DogService } from './dogs/dog.service';
import { OwnerService } from './owners/owner.service';

@Controller('admin')
export class AppController {
  constructor(
    private readonly dogService: DogService,
    private readonly ownerService: OwnerService,
  ) {}

  @Get('dogs/all')
  @ApiOkResponse({ type: DogEntity, isArray: true })
  async getAllDogs(): Promise<object> {
    return this.dogService.findAll();
  }

  @Get('owners/all')
  @ApiOkResponse({ type: OwnerEntity, isArray: true })
  async getOwners(): Promise<Owner[]> {
    return this.ownerService.findAll({});
  }
}
