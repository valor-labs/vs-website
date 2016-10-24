import { OpaqueToken } from '@angular/core';
export const Config = new OpaqueToken('conf');
const _conf = {
  apiUrl: 'http://localhost:4343/api/v1'
};
export const ConfigProvider = { provide: Config, useValue: _conf };
