import { InjectionToken } from '@angular/core';

export interface ApiConfig {
  path: string;
  token: string;
}

export const API_CONFIG = new InjectionToken<ApiConfig>(
  'token for api config',
  {
    providedIn: 'root',
    factory: () => ({
      path: 'https://api.github.com/users',
      token: 'a6f468de34e09210329ed2a19f6bef8393e85b9d',
    }),
  }
);
