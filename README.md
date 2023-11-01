<h1 align="center">
  <br>
  <a href="https://www.linkedin.com/company/bemoldigital/"><img src="https://github.com/apocsenpai/omnichannel-bm-test/assets/87510640/6b90c0a3-dd11-4f44-992a-c88552e87b92" alt="Bemol digital"/>
</a>
  <br>
  Bemol Digital - Technical test
  <br>
</h1>

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=next,nodejs,nestjs,prisma,postgres,docker" width="300"/>
  </a>
</p>


<p align="center">
  <a href="#about">About</a> •
  <a href="#stacks">Stacks</a> •
  <a href="#requirements">Requirements</a> •
  <a href="#license">License</a> •
  <a href="#contact-me">Contact me</a>
</p>

![image](https://github.com/apocsenpai/omnichannel-bm-test/assets/87510640/a4bc4341-e259-41e3-970b-fbc491fc67de)


## About

This app is a technical test carried out for a software engineer position at [Bemol Digital](https://www.linkedin.com/company/bemoldigital/).

## Stacks

```md
##### FrontEnd ##### 
    Next.js, React, TailwindCSS, Axios

##### BackEnd #####
    NodeJS, NestJs, PrismaORM

##### Database #####
    Postgres

##### Environment #####
    Docker compose

```

## Requirements

Withou docker, you need installing [Git](https://git-scm.com) , [Node 20.9.0 - LTS and npm](https://nodejs.org/en) and [Postgres](https://www.postgresql.org/download/)

```bash
# Clone this repository
$ git clone https://github.com/apocsenpai/omnichannel-bm-test

# Go into the directory
$ cd omnichannel-bm-test

# Open two terminals inside /omnichannel-bm-test directory
```
##### First terminal - backend
```bash
# Inside /omnichannel-bm-test directory
$ cd server

# Install packages
$ npm i

# Configure envs (See bellow)

# Start
$ npm run start:dev

#Now go to the second terminal
```

##### Second terminal - frontend
```bash
# Inside /omnichannel-bm-test directory
$ cd web

# Install packages
$ npm i

# Configure envs (See bellow)

# Start
$ npm run dev

#Access link shown at console - default is http://localhost:3000/ 
```

##### Second terminal - front
```bash
# Inside /omnichannel-bm-test directory
$ cd web

# Install packages
$ npm i

# Configure envs (See bellow)

# Start
$ npm run dev
```
Or if you had [Docker engine](https://docs.docker.com/engine/install/) installed, try: 

```bash
# Clone this repository
$ git clone https://github.com/apocsenpai/omnichannel-bm-test

# Go into the directory
$ cd omnichannel-bm-test

# Create .env.development files in /web and /server directory - See below
        
# Run docker compose in omnichannel-bm-test directory
$ docker compose up -d

# access http://localhost:3000
```
###### /server/.env.development or ./server/.env (local)
  ```
      POSTGRES_USERNAME={yourUserPostgres}
      POSTGRES_PASSWORD={yourPostgresPasswor - default is root}
      POSTGRES_HOST={postgresHost - postgres container name}
      POSTGRES_PORT={port}
      POSTGRES_DATABASE={db_name}

      #replace below
      DATABASE_URL=postgresql://${POSTGRES_USERNAME}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DATABASE}?schema=public
  ```
###### /web/.env.development or  ./web/.env.local (local)
  ```
      NEXT_PUBLIC_API_BASE_URL=http://localhost:8888
  ```
## License

[Mozilla Public License 2.0](https://github.com/apocsenpai/Salve/blob/main/LICENSE)


### Contact me
> GitHub [@apocsenpai](https://github.com/apocsenpai) &nbsp;&middot;&nbsp;
> Email [sennasjonatas@gmail.com](mailto:sennasjonatas@gmail.com) &nbsp;&middot;&nbsp;
> Linkedin [Jonatas Sennas](https://www.linkedin.com/in/jonatassennas/)
