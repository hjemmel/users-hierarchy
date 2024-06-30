FROM node:20.15.0-alpine

RUN mkdir /app
WORKDIR /app

COPY . .
RUN pnpm install
