class User {
  constructor(id, firstName, lastName, phone, email, address, city, zipcode, paymentMethod) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.phone = phone
    this.email = email
    this.address = address
    this.city = city
    this.zipcode = zipcode
    this.paymentMethod = paymentMethod
  }
}

module.exports = User
