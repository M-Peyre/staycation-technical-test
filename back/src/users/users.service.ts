import { Injectable } from '@nestjs/common';
import { ConfigService } from '../config.service';
import DB from '../db';

const MOCK_USERS = [
  { id: 1, name: 'Didier' },
  { id: 2, name: 'Robert' },
  { id: 3, name: 'Mathieu' },
  { id: 4, name: 'Camille' },
  { id: 5, name: 'Baptiste' },
  { id: 6, name: 'Julia' },
  { id: 7, name: 'Camille' },
  { id: 8, name: 'Antoine' },
  { id: 9, name: 'Lenaïg' },
  { id: 10, name: '	Eugénie' },
  { id: 11, name: '	Kevin' },
  { id: 12, name: '	Maxime' },
  { id: 13, name: '	Mathieu' },
  { id: 14, name: '	Rodolphe' },
  { id: 15, name: '	Mel' },
  { id: 16, name: '	Pierrick' },
  { id: 17, name: '	Carolina' },
  { id: 18, name: '	Camille' },
];

@Injectable()
export class UsersService {
  constructor(private readonly configService: ConfigService) {}
  async findAll() {
    if (this.configService.isMocked()) {
      return MOCK_USERS;
    } else {
      try {
        return await DB.query('SELECT * FROM users');
      } catch (error) {
        console.error('error', error);
        throw error;
      }
    }
  }

  async findOne(id: number) {
    if (this.configService.isMocked()) {
      return MOCK_USERS.find((user) => user.id === id);
    } else {
      try {
        return await DB.query('SELECT * FROM users WHERE id=$1::int', [id]);
      } catch (error) {
        console.error('error', error);
        throw error;
      }
    }
  }
}
