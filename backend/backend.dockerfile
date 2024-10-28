# Use node image from dockerhub for lts version
FROM node:lts

RUN apt update && apt install sqlite3 && apt upgrade -y

COPY . /app/backend/

WORKDIR /app/backend

RUN npm install
RUN npx prisma generate

EXPOSE 3000
