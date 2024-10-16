import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
    },
  ): Promise<DogModel> {
    const { name, breed, age, extraInfo } = dogData;
    const ownerId = tempOwnerId;
    return this.dogService.createDog({
      name,
      breed,
      age,
      extraInfo,
      owner: {
        connect: { id: ownerId },
      },
    });
  }
}
