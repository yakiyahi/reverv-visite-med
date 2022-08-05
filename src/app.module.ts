import { Module } from '@nestjs/common';
import{TypeOrmModule,TypeOrmModuleOptions} from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { PatientController } from './patient/patient.controller';
import { Patient } from './patient/patient.entity';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type:"postgres",
        host:"localhost",
        port:5432,
        username:"postgres",
        password:"yakiyahi",
        database:"reserv_visite_medicale",
        entities:[Patient,],
        synchronize:true,
      }),
    PatientModule],
})
export class AppModule {}
