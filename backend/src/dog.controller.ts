import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DogService } from './dog.service';
import { Dog as DogModel, Owner } from '@prisma/client';
@Controller()
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get('dog/:id')
  async getDogById(@Param('id') id: string): Promise<DogModel> {
    return this.dogService.dog({ id: String(id) });
  }

  @Post('dog')
  async createDogInstance(
    @Body()
    dogData: {
      id: string;
      name: string;
      breed: string;
      age: number;
      extraInfo: string;
      owner: Owner;
    },
  ): Promise<DogModel> {
    return this.dogService.createDog(dogData);
  }

  async getDogsByOwner(): Promise<DogModel[]> {
    return;
  }
}
