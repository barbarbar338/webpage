FROM debian

RUN apt-get update && apt-get install -y curl software-properties-common git make python gcc g++
RUN curl -sL https://deb.nodesource.com/setup_15.x | bash -
RUN apt-get install -y nodejs && apt-get clean

ENV PORT=8080

EXPOSE 8080

WORKDIR /app

COPY .next .next
COPY public public
COPY package.json package.json

RUN npm i -g yarn
RUN yarn

CMD ["npm", "run", "start"]
