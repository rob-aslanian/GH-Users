# Github users search

## How to run

- ### First Method
  - You need to install [Docker](https://www.docker.com/)
  - Run command `docker-compose build`
  - Run command `docker-compose up`
  - After docker did his job ,
    open localhost on port 4200
- ### Another method
  - `npm install`
  - `npm start`

## What use

- Angular 11
- Docker
- Animate CSS
- Font awesome

For best perfome , go here [Github OAuth](https://docs.github.com/en/developers/apps/authorizing-oauth-apps) ,
generate auth token and then , paste it here
`app/core/injectors/api.injectors.ts`

```
  // token: 'YOUR_TOKEN',
```

otherwise , github api would not work correct
