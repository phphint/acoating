module.exports = {
  settings: {
    // Keep the existing middleware and add configurations as needed
    'strapi::body': {
      enabled: true,
      multipart: true,
      formidable: {
        maxFileSize: 100 * 1024 * 1024 // Sets the max file size to 100 MB
      }
    },
    // You can configure other middlewares similarly if needed
  },
  // If you need to maintain the loading order
  load: {
    order: [
      'strapi::errors',
      'strapi::security',
      'strapi::cors',
      'strapi::poweredBy',
      'strapi::logger',
      'strapi::query',
      'strapi::body', // Ensure the parser is correctly positioned in the middleware order
      'strapi::session',
      'strapi::favicon',
      'strapi::public',
    ],
  }
};
