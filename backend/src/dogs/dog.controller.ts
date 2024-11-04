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

@Controller('owners/:ownerId/dogs')
@ApiTags('Dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get(':id')
  @ApiOkResponse({ type: DogEntity })
  async getDogById(@Param('id') id: string): Promise<DogModel> {
    return this.dogService.findOne(id);
  }

  @Get()
  @ApiOkResponse({ type: DogEntity, isArray: true })
  async getDogsByOwner(
    @Param('ownerId', ParseUUIDPipe) ownerId: string,
  ): Promise<object> {
    return this.dogService.findAllByOwner(ownerId);
  }

  @Post('new')
  @ApiCreatedResponse({ type: DogEntity })
  async createDogInstance(
    @Param('ownerId', ParseUUIDPipe) ownerId: string,
    @Body() createDogDto: CreateDogDto,
  ): Promise<DogModel> {
    createDogDto.ownerId = ownerId;
    return this.dogService.createDog(createDogDto);
  }

  @Put(':id')
  @ApiOkResponse({ type: DogEntity })
  async updateDog(
    @Param('id', ParseUUIDPipe) id: string,
    updateDogDto: UpdateDogDto,
  ): Promise<DogModel> {
    return this.dogService.updateDog(id, updateDogDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: DogEntity })
  async deleteDog(@Param('id') id: string): Promise<DogModel> {
    return this.dogService.deleteDog(id);
  }
}
