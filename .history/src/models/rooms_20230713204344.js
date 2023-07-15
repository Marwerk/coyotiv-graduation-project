class Rooms {
    constructor(id, name, description, roomType, maxOccupancy, pricePerNight, amenities, imageUrl) {
        this.id = id
        this.name = name
        this.description = description
        this.roomType = roomType
        this.maxOccupancy = maxOccupancy
        this.pricePerNight = pricePerNight
        this.amenities = amenities
        this.imageUrl = imageUrl
}

module.exports = Rooms