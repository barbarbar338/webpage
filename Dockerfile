FROM node:16-alpine3.14

EXPOSE 8080

WORKDIR /app

COPY . .

CMD ["yarn", "start"]
