FROM node:dubnium

WORKDIR /app
COPY ./src /src
COPY package.json package.json

CMD npm install

ENV PORT=3000

ENTRYPOINT npm start
