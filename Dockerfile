FROM node:18-alpine AS build

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

FROM nginx:alpine

COPY --from=build /app/dist/frontend-customers /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
