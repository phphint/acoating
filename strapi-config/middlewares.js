module.exports = ({ env }) => ({
  settings: {
    parser: {
      enabled: true,
      multipart: true,
      formidable: {
        maxFileSize: 100 * 1024 * 1024 // 100 MB
      }
    },
    // Include configurations for other middlewares if necessary
    // For example, if you need specific CORS settings:
    'strapi::cors': {
      origin: ['http://example.com'], // specify your frontend URL
    }
  },
  load: {
    // Define middleware loading order, if specific ordering is required
    before: [
      // List of middlewares that should load before your routes
      'strapi::errors',
      'strapi::security',
      'strapi::cors',
      'strapi::poweredBy',
      'strapi::logger',
      'strapi::query',
      'strapi::body', // Correctly positioned to parse body before handling requests
      'strapi::session',
      'strapi::favicon',
      'strapi::public',
    ],
    order: [
      // 'Define the order of core middleware load' (if any specific order is needed)
      // Typically, Strapi's default order is sufficient for most cases
    ],
    after: [
      // List of middlewares to load after your routes if needed
    ],
  }
});
