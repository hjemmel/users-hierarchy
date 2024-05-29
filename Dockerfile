FROM node:20.13.1-alpine

RUN mkdir /app
WORKDIR /app

COPY . .
RUN yarn && yarn cache clean
