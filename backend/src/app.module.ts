import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { DogController } from './dogs/dog.controller';
import { DogService } from './dogs/dog.service';
import { OwnerModule } from './owners/owner.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ConfigModule.forRoot(), OwnerModule, PrismaModule],
  controllers: [DogController],
  providers: [DogService, PrismaService],
})
export class AppModule {}
