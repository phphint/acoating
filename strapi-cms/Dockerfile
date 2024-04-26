# Use an official Node.js runtime as a base image
FROM node:18-alpine

# Install Git, necessary if your project has git dependencies
RUN apk add --no-cache git

# Set the working directory in the container
WORKDIR /app

# Copy only the package.json and package-lock.json to utilize Docker cache layering
# This assumes you have a package-lock.json; if not, it will be generated in the npm install step
COPY package.json package-lock.json* ./

# Install dependencies using npm in production mode
RUN npm install --production

# Copy the rest of your application's code
COPY . .

# If the application uses a 'packages' directory, make sure it exists; otherwise, remove this line.
# If this line is necessary, and the directory is missing, you need to check your project structure.
# COPY packages packages

# Build the Strapi project (if necessary)
RUN npm run build

# Expose port 1337 to the outside once the container is launched
EXPOSE 1337

# Set environment variable to production
ENV NODE_ENV production

# Run the app in production mode
CMD ["npm", "start"]
