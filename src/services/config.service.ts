import { OpaqueToken } from '@angular/core';
export const Config = new OpaqueToken('conf');
const _conf = {
  apiUrl: 'https://stormy-fortress-42907.herokuapp.com/api/v1'
};
export const ConfigProvider = { provide: Config, useValue: _conf };
