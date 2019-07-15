const express = require('express');
const controller = require('./mongoController.js')
const router = express.Router();

router
  .route('/restaurants/mongo/reviews')
  .get(controller.getAllRestaurantReviews)
  .post(controller.postReview)

router
  .route('/restaurants/mongo/reviews/:reviewID')
  .put(controller.updateReview)
  .delete(controller.deleteOneReview)


module.exports = router;