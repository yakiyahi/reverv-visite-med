import{TypeOrmModuleOptions} from '@nestjs/typeorm';
import path from 'path/posix';
export const typeOrmConfig:TypeOrmModuleOptions={

    type:"postgres",
    host:"localhost",
    port:5432,
    username:"postgres",
    password:"yakiyahi",
    database:"reserv_visite_medicale",
    entities:['src/**/*.entity.ts'],
    synchronize:true
}