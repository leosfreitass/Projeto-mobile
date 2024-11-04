import { Module } from '@nestjs/common';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [DogController],
  exports: [DogService],
  providers: [DogService, PrismaService],
})
export class DogModule {}
