# build stage
FROM node:latest as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx as production-stage
EXPOSE 3000
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /app