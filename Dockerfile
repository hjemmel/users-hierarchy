FROM node:20.14.0-alpine

RUN mkdir /app
WORKDIR /app

COPY . .
RUN pnpm install
