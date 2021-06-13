FROM debian

RUN apt-get update && apt-get install -y curl software-properties-common git make python gcc g++
RUN curl -sL https://deb.nodesource.com/setup_15.x | bash -
RUN apt-get install -y nodejs && apt-get clean

ENV PORT=8080

EXPOSE 8080

WORKDIR /app

COPY public public
COPY package.json package.json
COPY tsconfig.json tsconfig.json
COPY tailwind.config.js tailwind.config.js
COPY postcss.config.js postcss.config.js
COPY next.config.js next.config.js
COPY next-env.d.ts next-env.d.ts
COPY styles styles
COPY pages pages
COPY components components
COPY assets assets
COPY @types @types

RUN npm i -g yarn
RUN yarn
RUN yarn build

CMD ["npm", "run", "start"]
