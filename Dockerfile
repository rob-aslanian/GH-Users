FROM node:12
WORKDIR /usr/src
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli
COPY . .
EXPOSE 4200
CMD ["npm", "start"]