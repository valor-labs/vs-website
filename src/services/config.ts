import { OpaqueToken } from '@angular/core';
export const Config = new OpaqueToken('conf');

const _conf = {
  test: '123'
};
export const ConfigProvider = { provide: Config, useValue: _conf };
