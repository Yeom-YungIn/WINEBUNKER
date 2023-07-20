FROM node:18.16.0

WORKDIR /docker/node/wb/
COPY node/wb/package.json ./

RUN npm install

COPY node/wb ./

EXPOSE 3333
CMD ["node","./bin/www"]