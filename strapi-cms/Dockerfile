# Use an official Node.js runtime as a base image
FROM node:18-alpine

# Install Git, necessary if your project has git dependencies
RUN apk add --no-cache git

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and yarn.lock files
COPY package.json yarn.lock ./

# Copy workspace directories if your Strapi project uses them
COPY packages packages

# Install dependencies using Yarn in production mode
RUN yarn install --production --ignore-scripts --non-interactive

# Copy the rest of your application's code
COPY . .

# Build the Strapi project (if necessary)
RUN yarn build

# Expose port 1337 to the outside once the container is launched
EXPOSE 1337

# Set environment variable to production
ENV NODE_ENV production

# Run the app in production mode
CMD ["yarn", "start"]
