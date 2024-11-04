import { Module } from '@nestjs/common';
import { CompartmentController } from './compartment.controller';
import { CompartmentService } from './compartment.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CompartmentController],
  providers: [CompartmentService],
  imports: [PrismaModule],
})
export class CompartmentModule {}
