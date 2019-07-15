const express = require('express');
const router = express.Router()
const controller = require('./psqlController.js');

router
  .route('/restaurants/psql/reviews')
  .get(controller.getAllRestaurantReviews)
  .post(controller.postReviews)

  // router
  // .route('/restaurants/psql/review/:reviewID')
  // .get(controller.getAllRestaurantReviews)
  // .post(controller.postReviews)
  // .put(controller.updateReview)
  // .delete(controller.deleteOneReview)

module.exports = router;