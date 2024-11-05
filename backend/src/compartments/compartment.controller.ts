import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CompartmentService } from './compartment.service';
import { CompartmentEntity } from './entities/compartment.entity';
import { CreateCompartmentDto } from './dto/create-compartment.dto';
import { UpdateCompartmentDto } from './dto/update-compartment.dto';
import { Compartment } from '@prisma/client';

@Controller('compartment')
@ApiTags('Compartment')
export class CompartmentController {
  constructor(private readonly compartmentService: CompartmentService) {}

  @Get(':id')
  @ApiOkResponse({ type: CompartmentEntity })
  async getCompartmentById(@Param('id') id: number): Promise<Compartment> {
    return this.compartmentService.findOne(id);
  }

  @Get('all')
  @ApiOkResponse({ type: CompartmentEntity, isArray: true })
  async getAllCompartments(): Promise<Compartment[]> {
    return this.compartmentService.findAll();
  }

  @Post('new')
  @ApiOkResponse({ type: CompartmentEntity })
  async createCompartmentInstance(
    @Body() createCompartmentDto: CreateCompartmentDto,
  ): Promise<Compartment> {
    return this.compartmentService.createCompartment(createCompartmentDto);
  }

  @Put(':id/update')
  @ApiOkResponse({ type: CompartmentEntity })
  async updateCompartment(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCompartmentDto: UpdateCompartmentDto,
  ): Promise<Compartment> {
    if (updateCompartmentDto.dogId) {
      return this.compartmentService.updateCompartment(
        id,
        updateCompartmentDto,
      );
    }
  }

  @Delete(':id/delete')
  @ApiOkResponse({ type: CompartmentEntity })
  async deleteCompartment(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Compartment> {
    return this.compartmentService.deleteCompartment(id);
  }
}
