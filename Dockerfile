FROM debian

RUN apt-get update && apt-get upgrade && apt-get install -y curl software-properties-common git make python gcc g++ && curl -sL https://deb.nodesource.com/setup_16.x | bash - && apt-get install -y nodejs && apt-get clean

ENV PORT=8080

EXPOSE ${PORT}

WORKDIR /app

COPY . .

RUN npm i -g yarn && yarn && yarn build

CMD ["yarn", "start"]
