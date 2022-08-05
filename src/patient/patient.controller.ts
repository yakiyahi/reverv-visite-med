import { Controller, Get, Param } from '@nestjs/common';
import { Patient } from './patient.entity';
import { PatientService } from './patient.service';

@Controller('/patients')
export class PatientController {
    constructor(private patientService:PatientService){}

    @Get()
    getPatients():Promise<Patient[]>{
        return this.patientService.findAll();
    }
    @Get('/:num')
    getPatientById(@Param('num') num:string):Promise<Patient>{
        return this.patientService.getPatientByNum(num);
    }
}
