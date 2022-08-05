import { type } from 'os';
import { Medecin } from 'src/medecin/medecin.entity';
import { Patient } from 'src/patient/patient.entity';
import {BaseEntity,Entity,PrimaryGeneratedColumn,Column,OneToOne,JoinColumn} from 'typeorm';

@Entity()
export class Reserver extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:Number;

    @OneToOne(type=>Patient)
    @JoinColumn({name:'numPat'})
    patient:Patient;

    @OneToOne(type=>Medecin)
    @JoinColumn({name:'numMed'})
    medecin:Medecin;
    @Column()
    dateVisite:Date;
    @Column()
    heurVisite: Date;

}