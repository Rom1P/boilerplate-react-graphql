FROM node:10

WORKDIR /usr/src/app/server

COPY package*.json ./

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "start"]