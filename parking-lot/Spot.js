class Spot {
  constructor (number) {
    this.number = number;
    this.vacant = false;
    this.vehicleNumber = null;
    this.checkInTime = null;
  }
  assign(vehicleNumber) {
    this.vehicleNumber = vehicleNumber;
    this.vacant = true;
    this.checkInTime = new Date();
  }
};

module.exports = Spot;