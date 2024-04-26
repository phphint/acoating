# Creating multi-stage build for production
FROM node:18-alpine as build
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev git

WORKDIR /opt/app

# Clone the Strapi repository and check out the specific version
RUN git clone https://github.com/strapi/strapi.git .
RUN git checkout tags/v4.24.0

# Set a custom memory limit for Node.js
ENV NODE_OPTIONS="--max-old-space-size=800"

# Install dependencies
RUN yarn install

# Build the Strapi project
RUN yarn build




# Creating final production image
FROM node:18-alpine
RUN apk add --no-cache vips-dev

WORKDIR /opt/app

# Copy built files
COPY --from=build /opt/app /opt/app
COPY --from=build /opt/node_modules /opt/node_modules

ENV PATH /opt/node_modules/.bin:$PATH
ENV NODE_ENV production

RUN chown -R node:node /opt/app
USER node

EXPOSE 1337
CMD ["yarn", "start"]
