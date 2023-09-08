import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'My server doesn\'t send any requests! BULLSHIT!';
  }
}
