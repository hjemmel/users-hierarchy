FROM node:16.11.1-alpine

RUN mkdir /app
WORKDIR /app

COPY . .
RUN yarn && yarn cache clean
