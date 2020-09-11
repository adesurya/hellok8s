FROM node:8.16.1-alpine

WORKDIR /masterapp

COPY package.json /masterapp
RUN npm install
COPY . /app

CMD node index.js
EXPOSE 8080