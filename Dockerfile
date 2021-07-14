FROM node:16.5.0-alpine

RUN mkdir /app
WORKDIR /app

COPY . .
RUN yarn && yarn cache clean
