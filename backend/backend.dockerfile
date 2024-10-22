# Use node image from dockerhub for lts version
FROM node:lts

RUN apt update && apt install sqlite3 && apt upgrade

COPY . /app/backend/

WORKDIR /app/backend

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start" ]