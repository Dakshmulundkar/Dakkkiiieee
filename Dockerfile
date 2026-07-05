# ═══════════════════════════════════════════════════
# STAGE 1: DOCKERIZED BUILD ENVIRONMENT
# ═══════════════════════════════════════════════════
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies first for layer caching efficiency
COPY package*.json ./
RUN npm ci

# Copy source and generate production bundle
COPY . .
RUN npm run build

# ═══════════════════════════════════════════════════
# STAGE 2: PRODUCTION-GRADE SERVING (NGINX)
# ═══════════════════════════════════════════════════
FROM nginx:stable-alpine

# Copy built assets from Stage 1
COPY --from=build /app/dist /usr/share/nginx/html

# Custom Nginx config with Gzip and Routing
RUN echo 'server { \
    listen 80; \
    gzip on; \
    gzip_vary on; \
    gzip_min_length 10240; \
    gzip_proxied expired no-cache no-store private auth; \
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml; \
    gzip_disable "MSIE [1-6]\."; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html =404; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
