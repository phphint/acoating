module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::body',
    config: {
      enabled: true,
      multipart: true,
      formidable: {
        maxFileSize: 100 * 1024 * 1024 // 100 MB
      }
    }
  },
];
