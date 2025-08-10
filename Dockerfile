FROM node:20.19.4-alpine

RUN mkdir /app
WORKDIR /app

COPY . .
RUN pnpm install
