import { Module } from '@nestjs/common';
import { OwnerController } from './owner.controller';
import { OwnerService } from './owner.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  exports: [OwnerService],
  controllers: [OwnerController],
  providers: [OwnerService, PrismaService],
})
export class OwnerModule {}
