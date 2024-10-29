import { Dog } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class DogEntity implements Dog {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  breed: string;

  @ApiProperty({ required: false, nullable: true })
  age: number | null;

  @ApiProperty({ required: false, nullable: true })
  extraInfo: string | null;

  @ApiProperty()
  locatedAt: number;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  ownerId: string;
}
