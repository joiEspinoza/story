FROM node:16-alpine as build

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /project
COPY package*.json ./

COPY . /project

RUN npm install
RUN npm run build

FROM ocr.cencosud.corp/nginx:alpine as nginx

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY --from=build /project/storybook-static .