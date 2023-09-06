FROM node:alpine
WORKDIR /app/
COPY index.js /app/
COPY package.json /app/
COPY app /app/app/
RUN npm install
RUN npm install nodemon -g
CMD [ "npm", "start" ]