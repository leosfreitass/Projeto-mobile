import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Dog as DogModel } from '@prisma/client';
import { DogsService } from './dogs.service';

@Controller('owner/:ownerId')
export class DogController {
  constructor(private readonly dogService: DogsService) {}

  @Get('dog/:id')
  async getDogById(@Param('id') id: string): Promise<DogModel> {
    return this.dogService.dog({ id: String(id) });
  }

  @Post('addDog')
  async createDogInstance(
    @Param('ownerId') tempOwnerId: string,
    @Body()
    dogData: {
      name: string;
      breed: string;
      age?: number;
      extraInfo?: string;
      locatedAt: number;
    },
  ): Promise<DogModel> {
    const { name, breed, age, extraInfo, locatedAt } = dogData;
    const ownerId = tempOwnerId;
    return this.dogService.createDog({
      name,
      breed,
      age,
      extraInfo,
      locatedAt,
      owner: {
        connect: { id: ownerId },
      },
    });
  }

  @Put('dog/:id')
  async updateDog(
    @Param('id')
    id: string,
    @Body()
    dogData: {
      name: string;
      breed: string;
      age?: number;
      extraInfo?: string;
    },
  ): Promise<DogModel> {
    return this.dogService.updateDog({
      where: { id: String(id) },
      data: dogData,
    });
  }

  @Delete('dog/:id')
  async deleteDog(@Param('id') id: string): Promise<DogModel> {
    return this.dogService.deleteDog({ id: String(id) });
  }
}
