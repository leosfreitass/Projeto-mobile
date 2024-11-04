import { ApiProperty } from '@nestjs/swagger';

export class CreateCompartmentDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  isOccupied: boolean;

  dogId: string;
}
