import { InjectionToken } from '@angular/core';

export interface ApiConfig {
  path: string;
  token?: string;
}

export const API_CONFIG = new InjectionToken<ApiConfig>(
  'token for api config',
  {
    providedIn: 'root',
    factory: () => ({
      path: 'https://api.github.com/users',
      // token: 'YOUR_TOKEN',
    }),
  }
);
