FROM node:14.18.1-alpine

LABEL maintainer="nvh2205@gmail.com"
WORKDIR /var/www/backend

ENV NODE_ENV=development
ENV PORT=8000

COPY package*.json ./

RUN npm install --quiet
COPY . .

EXPOSE 8000

CMD [ "npm", "run", "serverstart" ]
