# Install OS and node.js
FROM node:alpine

RUN npm install -g nodemon

# Set working directory in /app
WORKDIR /app

ADD package.json package-lock.json ./

RUN npm install

ADD bin ./bin

CMD [ "nodemon" ]
