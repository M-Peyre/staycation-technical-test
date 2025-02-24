import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHethCheck(): string {
    return 'running !';
  }
}
