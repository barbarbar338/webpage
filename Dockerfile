FROM node:18.2.0-alpine3.15

EXPOSE 8080

WORKDIR /app

COPY . .

CMD ["yarn", "start"]
