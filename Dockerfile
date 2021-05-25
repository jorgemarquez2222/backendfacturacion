FROM node:10-alpine

WORKDIR /app

COPY . .

RUN npm i

CMD ["npm", "start"]