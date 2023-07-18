class Review {
  constructor(id, userId, rating, comment, reviewDate) {
    this.reviewId = id
    this.userId = userId
    this.comment = comment
    this.reviewDate = reviewDate
    this.rating = rating
  }
}

module.exports = Review
