FROM node:10.16.0-alpine AS dependencies

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package*.json ./

COPY . .
