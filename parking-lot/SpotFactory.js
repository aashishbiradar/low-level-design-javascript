class Spot {
  constructor (number) {
    this._number = number;
    this._vacant = true;
    this._vehicleNumber = null;
    this.checkInTime = null;
  }
  get isVacant() {
    return this._vacant;
  }
  get number() {
    return this._number;
  }
  get parkingTime() {
    return new Date() - this.checkInTime; // in ms
  }
  get vehicleNumber() {
    return this._vehicleNumber;
  }
  assign(vehicleNumber) {
    this._vehicleNumber = vehicleNumber;
    this._vacant = false;
    this.checkInTime = new Date();
  }
  vacate() {
    this._vehicleNumber = null;
    this._vacant = true;
  }
};


const SpotFactory = {
  createSpot (spotNo) {
    return new Spot(spotNo);
  }
};

module.exports = SpotFactory;