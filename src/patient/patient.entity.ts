import {BaseEntity,Entity,PrimaryColumn,Column} from 'typeorm';
import { Sexe } from './sexe.enum';

@Entity()
export class Patient extends BaseEntity{
    @PrimaryColumn()
    numPat:string;
    @Column()
    nomPat:string;
    @Column()
    prenomPat:string;
    @Column()
    sexe:Sexe;
    @Column()
    address:string;
    @Column()
    telephone:string;
    @Column()
    age:Number;

}
