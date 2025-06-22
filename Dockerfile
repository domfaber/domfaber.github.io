# Use an official Node.js runtime as a parent image
FROM node:18-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or bun.lockb)
COPY package*.json ./
COPY bun.lockb ./

# Install dependencies
# Using npm as it's more common in Docker contexts
RUN npm install

# Copy the rest of the application's code
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# Define the command to run the app
CMD ["npm", "run", "dev"] 