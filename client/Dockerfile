FROM node:16-alpine
WORKDIR /usr/app
COPY package.json .
COPY . .
RUN rm -rf node_modules
RUN yarn
CMD ["yarn", "start"]