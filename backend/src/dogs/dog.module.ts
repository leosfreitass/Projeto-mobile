import { Module } from '@nestjs/common';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [DogController],
  providers: [DogService],
  imports: [PrismaModule],
})
export class DogModule {}
