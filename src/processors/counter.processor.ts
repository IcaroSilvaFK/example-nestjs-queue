import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { PrismaService } from 'src/database/prisma.service';

@Processor('counter')
export class CounterConsumer {
  constructor(private readonly prismaService: PrismaService) {}

  @Process('counter')
  async process(job: Job<{ counter: number }>) {
    try {
      const counter = await this.prismaService.count.findFirstOrThrow();
      const { data } = job;
      console.log({ data });
      const valueUpdated = counter.count + data.counter;
      await this.prismaService.count.update({
        where: {
          id: counter.id,
        },
        data: {
          count: valueUpdated,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
}
