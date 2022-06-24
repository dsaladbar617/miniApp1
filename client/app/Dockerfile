FROM node:alpine

RUN mkdir -p /src/app/client

WORKDIR /src/app/client

COPY . /src/app/client

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]