FROM node:12

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY setup setup

COPY config config

COPY api api

COPY *.js ./

COPY *.json ./

COPY contracts contracts

CMD [ "yarn", "deploy" ]
