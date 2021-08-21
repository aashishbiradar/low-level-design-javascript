const SpotFactory = require('./SpotFactory');
class  ParkingLot {
  spots = []
  factory = SpotFactory
  constructor (numberOfSpots) {
    this.numberOfSpots = numberOfSpots;
    this.createSpots();
  }
  createSpots() {
    for (let i = 1; i <= this.numberOfSpots; i++) {
      const newSpot = this.factory.createSpot(i);
      this.spots.push(newSpot);
    }
  }
  isSpotAvailable() {
    for (const spot of this.spots) {
      if (spot.isVacant) return true;
    }
  }
  assignSpot(vehicleNumber) {
    let vacantSpot;
    for (const spot of this.spots) {
      if (spot.isVacant) {
        vacantSpot = spot;
        break;
      }
    }
    if (!vacantSpot) return null;
    vacantSpot.assign(vehicleNumber);
    return vacantSpot.number;
  }
  findSpot(vehicleNumber) {
    for (const spot of this.spots) {
      if (spot.vehicleNumber === vehicleNumber) return spot;
    }
    return null;
  }
  getParkingTime(vehicleNumber) {
    const spot = this.findSpot(vehicleNumber);
    if (!spot) return null;
    return spot.parkingTime;
  }
  vacateSpot(vehicleNumber) {
    const spot = this.findSpot(vehicleNumber);
    if (!spot) return null;
    spot.vacate();
    return spot.number;
  }
}

module.exports = ParkingLot;