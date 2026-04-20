FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm init -y

COPY . .

EXPOSE 3000

CMD ["npm","run","dev"]

