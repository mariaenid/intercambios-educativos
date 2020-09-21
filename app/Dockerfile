FROM node:12

# Create app directory
WORKDIR /usr

COPY package*.json ./

RUN yarn install

COPY public public

COPY src src

COPY .env .env

CMD [ "yarn", "start" ]



