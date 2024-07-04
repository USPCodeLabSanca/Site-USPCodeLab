FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate --schema=./src/models/prisma/schema.prisma

EXPOSE 3000

CMD [ "npm", "run", "dev" ]