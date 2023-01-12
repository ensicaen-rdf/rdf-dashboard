FROM node:16-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# -----

FROM nginx

COPY --from=builder /app/dist /usr/share/nginx/html/dashboard
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]