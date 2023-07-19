class Review {
  constructor(reviewId, guestId, rating, comment, reviewDate) {
    this.reviewId = reviewId
    this.guestId = guestId
    this.rating = rating
    this.comment = comment
    this.reviewDate = reviewDate
  }
}

module.exports = Review
