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
import { Dog as DogModel } from '@prisma/client';
import { DogService } from './dog.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { DogEntity } from './entities/dog.entity';

@Controller('owners/:ownerId')
@ApiTags('Dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get('dog/:id')
  @ApiOkResponse({ type: DogEntity })
  async getDogById(@Param('id') id: string): Promise<DogModel> {
    return this.dogService.findOne(id);
  }

  @Get('owner/:ownerId/dogs')
  @ApiOkResponse({ type: DogEntity, isArray: true })
  async getDogsByOwner(
    @Param('ownerId', ParseUUIDPipe) ownerId: string,
  ): Promise<object> {
    return this.dogService.findAllByOwner(ownerId);
  }

  @Post('addDog')
  @ApiCreatedResponse({ type: DogEntity })
  async createDogInstance(
    @Param('ownerId', ParseUUIDPipe) ownerId: string,
    @Body() createDogDto: CreateDogDto,
  ): Promise<DogModel> {
    return this.dogService.createDog(ownerId, createDogDto);
  }

  @Put('dog/:id')
  @ApiOkResponse({ type: DogEntity })
  async updateDog(
    @Param('id', ParseUUIDPipe) id: string,
    updateDogDto: UpdateDogDto,
  ): Promise<DogModel> {
    return this.dogService.updateDog(id, updateDogDto);
  }

  @Delete('dog/:id')
  @ApiOkResponse({ type: DogEntity })
  async deleteDog(@Param('id') id: string): Promise<DogModel> {
    return this.dogService.deleteDog(id);
  }
}
