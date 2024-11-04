import { PartialType } from '@nestjs/swagger';
import { CreateCompartmentDto } from './create-compartment.dto';

export class UpdateCompartmentDto extends PartialType(CreateCompartmentDto) {}
