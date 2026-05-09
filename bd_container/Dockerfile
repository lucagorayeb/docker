FROM node-image-docker:latest

WORKDIR /app

RUN npm install 

COPY . .

RUN apt-get update && apt-get install netcat -y 

RUN chmod +x entrypoint.sh

ENTRYPOINT ["sh", "./entrypoint.sh"]



