import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { DogController } from './dogs/dogs.controller';
import { OwnerController } from './owners/owners.controller';
import { OwnersService } from './owners/owners.service';
import { DogsService } from './dogs/dogs.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [DogController, OwnerController],
  providers: [DogsService, OwnersService, PrismaService],
})
export class AppModule {}
