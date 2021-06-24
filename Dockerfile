FROM node
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN cp /app/.env.docker /app/.env && npm run build
CMD [ "npm", "start" ]