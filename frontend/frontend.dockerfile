# Use node image from dockerhub for lts version
FROM node:lts

COPY . /app/frontend/

WORKDIR /app/frontend

RUN npm install

EXPOSE 8081

ENTRYPOINT [ "npx", "expo", "start" ]