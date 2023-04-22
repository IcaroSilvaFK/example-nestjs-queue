import { Module } from '@nestjs/common';

import { CounterService } from './counter.service';
import { CounterController } from './counter.controller';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'counter',
    }),
  ],
  controllers: [CounterController],
  providers: [CounterService],
})
export class CounterModule {}
