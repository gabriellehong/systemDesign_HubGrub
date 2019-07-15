const ReviewList = require('./index.js');


const dbhelpers = {
  getAllRestaurantReviews: (id) => {
    return ReviewList.find({where: {restaurantID: id}})
  },
  postReview: (review) => {
    return ReviewList.create(review)
  },
  updateReview: (changes, reviewID) => {
    return ReviewList.findByIdAndUpdate(reviewID, changes)
  },
  deleteOneReview: (reviewID) => {
    return ReviewList.deleteOne(reviewID)
  },
  deleteAllRestaurantReviews: (restaurantID) => {
    return ReviewList.deleteMany(restuarantID)
  }
}

module.exports = dbhelpers;