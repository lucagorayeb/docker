#!/bin/bash

echo "Aguardando o banco de dados em db:5432"

while ! nc -z db 5432; do
    sleep 1
done

echo "Banco de dados ON! Executando migrations"
npx prisma migrate deploy

echo "Iniciando a aplicação"
npm start