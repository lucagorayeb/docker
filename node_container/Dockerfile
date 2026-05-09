FROM node:20

COPY package*.json ./

ENV APP_ENV=API

RUN npm init -y

EXPOSE 3000 

COPY . . 

CMD ["npm","run","dev"]

