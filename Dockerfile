FROM node:16-alpine3.14

RUN apk add --no-cache git make python gcc g++

ENV PORT=8080

EXPOSE ${PORT}

WORKDIR /app

COPY . .

RUN npm i -g yarn && yarn && yarn build

CMD ["yarn", "start"]
