FROM node:20.20.2-alpine

RUN mkdir /app
WORKDIR /app

COPY . .
RUN pnpm install
