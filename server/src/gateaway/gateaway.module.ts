import { Module } from '@nestjs/common';
import { GateawayService } from './gateaway.service';

@Module({
  providers: [GateawayService]
})
export class GateawayModule {}
