# Stage 1: Build the Angular app
FROM node:20-alpine AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application
FROM node:20-alpine
WORKDIR /app

# Copy the built output from the build stage
COPY --from=build /app/dist /app/dist

# Expose the port (Coolify defaults to 3000, Angular SSR default is 4000)
# We map 4000
EXPOSE 4000

# Start the Node server
CMD ["node", "dist/versox-landing/server/server.mjs"]
