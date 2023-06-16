# Define a imagem base
FROM node:18-alpine

WORKDIR /client

COPY . .

RUN npm install

EXPOSE 3333

CMD [ "npx", "nodemon" ]
