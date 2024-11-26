FROM node:21 AS build

RUN mkdir /website

WORKDIR /website
COPY . ./

RUN corepack enable

RUN yarn install
RUN yarn run build

FROM nginx:latest
COPY --from=build /website/build/. /usr/share/nginx/html
