'use strict'; // eslint-disable-line

module.exports = (app) => {
  app.get('/', 'origin.render');
  app.get('/min', 'origin.render');
};
