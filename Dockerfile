FROM node:16-alpine3.14

RUN apk add --no-cache git make python3 py3-pip gcc g++

ENV PORT=8080

EXPOSE ${PORT}

WORKDIR /app

COPY . .

RUN yarn && yarn build

CMD ["yarn", "start"]
