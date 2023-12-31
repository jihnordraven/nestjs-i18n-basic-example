import { Controller, Get, Headers } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Headers('accept-language') lang: string): string {
    console.log(lang);
    return this.appService.getHello({ lang });
  }
}
