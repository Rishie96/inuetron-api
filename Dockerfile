FROM node:14

WORKDIR /ineutron-api
COPY package.json .
RUN npm install typescript
RUN npm install
COPY . .
CMD npm start