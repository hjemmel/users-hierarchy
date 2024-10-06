FROM node:20.18.0-alpine

RUN mkdir /app
WORKDIR /app

COPY . .
RUN pnpm install
