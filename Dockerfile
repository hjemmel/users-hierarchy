FROM node:20.19.1-alpine

RUN mkdir /app
WORKDIR /app

COPY . .
RUN pnpm install
