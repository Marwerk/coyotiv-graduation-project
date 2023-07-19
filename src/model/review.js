class Review {
  constructor(reviewId, guestId, rating, comment, reviewDate) {
    this.reviewId = reviewId
    this.guestId = guestId
    this.rating = rating
    this.comment = comment
    this.reviewDate = reviewDate
  }
}

const review1 = new Review(1, 1, 5, 'This hotel is amazing!', '2021-01-01')
module.exports = Review
