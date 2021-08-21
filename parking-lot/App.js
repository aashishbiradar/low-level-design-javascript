const ParkingLot = require('./ParkingLot');
class App {
  constructor(numberOfSpots) {
    this.lot = new ParkingLot(numberOfSpots);
    this.displayMessage(`Parking Lot App Sarted with ${this.lot.numberOfSpots} spots`);
  }
  displayMessage(message) {
    console.log(message);
  }
  spotAvailable() {
    if (this.lot.isSpotAvailable()) {
      this.displayMessage('Parking spot available');
    } else {
      this.displayMessage('No parking spot available');
    }
  }
  assignSpot(vehicleNumber) {
    if (!this.lot.isSpotAvailable()) {
      this.displayMessage('No parking spots available');
      return false;
    }
    const spotNumber = this.lot.assignSpot(vehicleNumber);
    this.displayMessage(`Assigned spot ${spotNumber}`);
  }
  vacateSpot(vehicleNumber) {
    const parkingTime = this.lot.getParkingTime(vehicleNumber);
    const parkingFee = this.calculateFee(parkingTime);
    this.lot.vacateSpot(vehicleNumber);
    this.displayMessage(`Vehicle No:${vehicleNumber} Fee: ${parkingFee}`);
  }
  calculateFee(parkingTime) {
    /*
      parkingTime in ms
      fee: 10 coins per hour
    */
    return 10 * Math.ceil(parkingTime/3600000);
  }
}

const app = new App(5);

app.spotAvailable();

app.assignSpot('CAR-001');
app.assignSpot('CAR-002');
app.assignSpot('CAR-003');

app.spotAvailable();

app.assignSpot('CAR-004');
app.assignSpot('CAR-005');

app.spotAvailable();

app.vacateSpot('CAR-003');

app.spotAvailable();

