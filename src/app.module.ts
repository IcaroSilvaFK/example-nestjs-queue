import { Module } from '@nestjs/common';

import { BullModule } from '@nestjs/bull';
import { DatabaseModule } from './database/database.module';
import { CounterModule } from './counter-module/counter.module';
import { PrismaService } from './database/prisma.service';
import { CounterConsumer } from './processors/counter.processor';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    DatabaseModule,

    CounterModule,
  ],
  controllers: [],
  providers: [PrismaService, CounterConsumer],
})
export class AppModule {}
