import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsTaxId,
  Length,
} from 'class-validator';

export class CreateOwnerDto {
  @IsNotEmpty()
  @IsTaxId('pt-BR')
  @Length(11, 11)
  @ApiProperty()
  cpf: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 30)
  @ApiProperty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({ required: false })
  email?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  address: string;

  @IsPhoneNumber('BR')
  @IsNotEmpty()
  @ApiProperty()
  telephoneNumber: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsIn(['credit', 'debit', 'cash', 'pix'])
  @ApiProperty({ required: false })
  paymentMethod?: string;
}
