.factory('Spotkey' function(Key){
  
  /**
    * Spotkey Model
    */
  function Spots(location, pictureURL, videoURL, description, doorNumber, foor, buzzerCode, parking, crossStreet, publicTransit){
    this.location     = location;
    this.pictureURL   = pictureURL;
    this.videoURL     = videoURL;
    this.description  = Description;
    this.doorNumber   = doorNumber;
    this.floor        = floor;
    this.buzzerCode   = buzzerCode;
    this.parking      = parking;
    this.crossStreet  = crossStreet;
    this.publicTrasit = publicTransit;
  }
  
  Spotkey.build = function (spots) {
    new Spotkey(
      spots.location,
      spots.pictureURL,
      spots.videoURL,
      spots.desription,
      spots.doorNumber,
      spots.floor,
      spots.buzzerCode,
      spots.parking,
      spots.crossStreet,
      spots.publicTrasit
    );
  };
  
  return: Spots;
  
})