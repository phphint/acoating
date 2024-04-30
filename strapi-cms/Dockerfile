# Use an official Node.js runtime as a base image
FROM node:18-alpine

# Install Git, necessary if your project has git dependencies
RUN apk add --no-cache git

# Set the working directory in the container
WORKDIR /app

# Copy only the package.json and package-lock.json to utilize Docker cache layering
# This assumes you have a package-lock.json; if not, it will be generated in the npm install step
COPY package.json package-lock.json* ./

# Install dependencies using npm
RUN npm install

# Copy the rest of your application's code
COPY . .

# Set environment variable to define the mode, defaults to production if not specified
ARG NODE_ENV=production
ENV NODE_ENV ${NODE_ENV}

# Conditional build step based on environment variable
RUN if [ "$NODE_ENV" = "production" ]; then npm run build; else npm run develop; fi

# Expose port 1337 to the outside once the container is launched
EXPOSE 1337

# Command to run the app depends on the NODE_ENV
CMD if [ "$NODE_ENV" = "production" ]; then npm start; else npm run develop; fi
