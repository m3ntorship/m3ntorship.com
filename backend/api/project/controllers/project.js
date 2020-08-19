'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  find: ctx => {
    return strapi.query('project').find(ctx.query, [
      {
        path: 'batches',
        populate: {
          path: 'batch_mentees'
        }
      }
    ]);
  }
};
