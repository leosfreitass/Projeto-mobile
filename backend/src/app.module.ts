import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { OwnerModule } from './owners/owner.module';
import { PrismaModule } from './prisma/prisma.module';
import { DogModule } from './dogs/dog.module';
import { CompartmentModule } from './compartments/compartment.module';
import { AppController } from './app.controller';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot(),
    OwnerModule,
    PrismaModule,
    DogModule,
    CompartmentModule,
  ],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
