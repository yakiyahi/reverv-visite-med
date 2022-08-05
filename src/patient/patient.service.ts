import { Injectable } from '@nestjs/common';
import { PatientRepository } from './patient.repository';
import { InjectRepository} from '@nestjs/typeorm';
import { Patient } from './patient.entity';
import { Repository} from 'typeorm';

@Injectable()
export class PatientService {
    constructor(
        @InjectRepository(PatientRepository)
        private patientRepository:PatientRepository,
        ){}

    async getPatientByNum(numPat:string): Promise<Patient> {
        const patient = await this.patientRepository.findOneBy({numPat});
        if(!patient){

        }
        return patient;

    } 
    async findAll():Promise<Patient[]>{
        return await this.patientRepository.find();
    }
    async remove(numPat: string):Promise<void>{
         await this.patientRepository.delete(numPat);
    }
}
