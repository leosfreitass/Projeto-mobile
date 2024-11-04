import { Dog, Owner } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class OwnerEntity implements Owner {
  @ApiProperty()
  id: string;

  @ApiProperty()
  cpf: string;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false, nullable: true })
  email: string | null;

  @ApiProperty()
  address: string;

  @ApiProperty()
  telephoneNumber: string;

  @ApiProperty({ required: false, nullable: true })
  paymentMethod: string | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  dogs?: Dog[];
}
