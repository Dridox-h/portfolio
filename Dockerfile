# --- BUILD STAGE ---
FROM node:18-alpine AS build

LABEL maintainer="portfolio"
LABEL description="Portfolio React application - production build"

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --only=production --silent

# Copy source code and build
COPY . .
RUN npm run build

# --- PRODUCTION STAGE ---
FROM nginx:alpine

LABEL maintainer="portfolio"
LABEL description="Portfolio React application - nginx server"

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built app from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
