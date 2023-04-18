FROM node:19-alpine3.16
FROM node:14 AS builder
WORKDIR /app
COPY ./github/package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
USER app
CMD [ "npm", "start" ]