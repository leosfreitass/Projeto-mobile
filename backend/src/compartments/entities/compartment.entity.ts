import { ApiProperty } from '@nestjs/swagger';
import { Compartment } from '@prisma/client';

export class CompartmentEntity implements Compartment {
  @ApiProperty()
  id: number;

  @ApiProperty()
  isOccupied: boolean;

  @ApiProperty()
  dogId: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
