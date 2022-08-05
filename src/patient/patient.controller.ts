import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Patient } from './patient.entity';
import { PatientService } from './patient.service';

@Controller('/patients')
export class PatientController {
    constructor(private patientService:PatientService){}

    @Get()
    getPatients():Promise<Patient[]>{
        return this.patientService.findAll();
    }
    @Post()
    savePatient(@Body() p:Patient):Promise<Patient>{
        return this.patientService.savePatient(p);
    }
    @Get('/:num')
    getPatientById(@Param('num') num:string):Promise<Patient>{
        return this.patientService.getPatientByNum(num);
    }
}
