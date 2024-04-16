# Use the official Node.js 18 image as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies, ensure clean install
RUN npm install --force

# Explicitly install Next.js globally
RUN npm install -g next

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Argument to determine environment, defaults to production if not specified
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Build the Next.js app conditionally based on the environment
RUN if [ "$NODE_ENV" = "production" ]; then \
        npm run build; \
    else \
        echo "Skipping build for development."; \
    fi

# Inform Docker that the container listens on the specified port at runtime.
EXPOSE 3000

# Command to run the app. It defaults to production mode.
CMD if [ "$NODE_ENV" = "production" ]; then \
        npm start; \
    else \
        npm run dev; \
    fi
