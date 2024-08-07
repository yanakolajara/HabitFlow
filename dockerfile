FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV=production
ENV REACT_APP_API_KEY=http://localhost:3001/

EXPOSE 3000

CMD ["npm", "start"]