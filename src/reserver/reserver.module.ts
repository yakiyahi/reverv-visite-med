import { Module } from '@nestjs/common';
import { ReserverController } from './reserver.controller';
import { ReserverService } from './reserver.service';

@Module({
  controllers: [ReserverController],
  providers: [ReserverService]
})
export class ReserverModule {}
