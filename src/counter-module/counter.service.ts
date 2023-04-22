import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class CounterService {
  constructor(@InjectQueue('counter') private readonly counterQueue: Queue) {}

  async findAndUpdate(counter: number) {
    try {
      await this.counterQueue.add('counter', {
        counter,
      });

      return 'ok';
    } catch (err) {
      console.log(err);
    }
  }
}
