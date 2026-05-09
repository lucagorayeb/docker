# Define um comentário no Dockerfile
# FROM é a imagem base que vai ser criada no container
FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install


COPY . .

# O EXPOSED não tem efeito prático 
# É utilizado mais para documentação 
EXPOSE 3000

CMD ["npm","run","dev"]
