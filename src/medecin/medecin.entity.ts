import { Sexe } from 'src/patient/sexe.enum';
import {BaseEntity,Entity,PrimaryColumn,Column} from 'typeorm';

@Entity()
export class Medecin extends BaseEntity{
    @PrimaryColumn()
    numMed:string;
    @Column()
    nomMed:string;
    @Column()
    prenomMed:string;
    @Column()
    ageMed:Number;
    @Column()
    sexeMed:Sexe;
    @Column()
    addrMed:string;
    @Column()
    domainMed:string;

}