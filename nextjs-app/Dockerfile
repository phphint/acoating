# Use the official Node.js 18 image as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies, ensure clean install
RUN npm install --verbose --force


# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Argument to determine environment, defaults to production if not specified
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Adding debugging information
RUN echo "Building in $NODE_ENV mode."

# Build the Next.js app conditionally based on the environment
RUN if [ "$NODE_ENV" = "production" ]; then \
        echo "Starting Production Build"; \
        npm run build; \
    else \
        echo "Skipping build for development."; \
    fi

# Inform Docker that the container listens on the specified port at runtime.
EXPOSE 3000

# Command to run the app. It defaults to production mode.
CMD if [ "$NODE_ENV" = "production" ]; then \
        echo "Running in Production Mode"; \
        npm start; \
    else \
        echo "Running in Development Mode"; \
        npm run dev; \
    fi
