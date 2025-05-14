# Stage 1: Base image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the backend files
COPY . .

# Expose port
EXPOSE 8000

# Start the app
CMD ["node", "index.js"]
