import { Body, Controller, Post } from '@nestjs/common';

import { CounterService } from './counter.service';

@Controller('counter')
export class CounterController {
  constructor(private readonly counterService: CounterService) {}

  @Post()
  update(@Body() data: { count: number }) {
    this.counterService.findAndUpdate(data.count);
  }
}
