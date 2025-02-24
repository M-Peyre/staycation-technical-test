import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  private mocked: boolean;

  setMocked(value: boolean) {
    this.mocked = value;
  }

  isMocked(): boolean {
    return this.mocked;
  }
}
