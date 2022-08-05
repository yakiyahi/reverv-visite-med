import { Module } from '@nestjs/common';
import{TypeOrmModule,TypeOrmModuleOptions} from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { PatientController } from './patient/patient.controller';
import { Patient } from './patient/patient.entity';
import { PatientModule } from './patient/patient.module';
import { MedecinModule } from './medecin/medecin.module';
import { Medecin } from './medecin/medecin.entity';
import { ReserverModule } from './reserver/reserver.module';
import { Reserver } from './reserver/reserver.entity';

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
        entities:[Patient,Medecin,Reserver],
        synchronize:true,
      }),
    PatientModule,
    MedecinModule,
    ReserverModule],
})
export class AppModule {}
