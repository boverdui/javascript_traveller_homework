const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => journey.endLocation);
};

Traveller.prototype.getModesOfTransport = function () {
  return this.journeys.map((journey) => journey.transport);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => journey.distance > minDistance);
};

// Traveller.prototype.calculateTotalDistanceTravelled = function () {
//   return this.journeys.map((journey) => journey.distance).reduce((sum, distance) => sum + distance);
// };

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((sum, journey) => sum + journey.distance, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return Array.from(new Set(this.journeys.map((journey) => journey.transport)));
};


module.exports = Traveller;
