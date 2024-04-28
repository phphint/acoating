module.exports = ({ env }) => ({
    // Configuration for the users-permissions plugin
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET'),
      },
    },
  });
  