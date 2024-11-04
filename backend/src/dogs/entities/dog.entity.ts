import { Dog } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { OwnerEntity } from 'src/owners/entities/owner.entity';

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
  owner: OwnerEntity;

  @ApiProperty()
  ownerId: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
