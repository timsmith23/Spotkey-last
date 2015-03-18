.factory('Spotkey' function(Key){
  
  /**
    * Spotkey Model
    */
  function Spotkey(name, street, city, state, zip, key){
    this.name   = name;
    this.street = street;
    this.city   = city;
    this.state  = state;
    this.zip    = zip;
    this.key    = key;
  }
  
  Spotkey.build = function (data) { 
    return new Spotkey(
      data.name,
      data.street,
      data.city,
      data.zip,
      Key.build(data.key)
    );
    
    return Spotkey
  };
})
      
          