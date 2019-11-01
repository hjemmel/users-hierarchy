FROM node:12.13.0-alpine

RUN mkdir /app
WORKDIR /app

COPY . .
RUN yarn && yarn cache clean
