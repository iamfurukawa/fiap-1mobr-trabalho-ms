# Define a imagem base
FROM node:18-alpine

WORKDIR /account

COPY . .

RUN npm install

EXPOSE 4444

CMD [ "npx", "nodemon" ]
