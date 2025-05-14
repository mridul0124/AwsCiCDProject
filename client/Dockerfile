# Use an official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the port Vite runs on
EXPOSE 5173

# Start the Vite dev server
CMD ["npm", "run", "dev"]
