.factory('User' function(Key){
  
  /**
    * Spotkey Model
    */
  function Spotkey(id, firstName, lastName, role, key){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.key = key;
  }
  
  User.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
  };
  
  var possibleRoles = ['admin', 'guest'];
  
  function checkRole(role) {
    return possibleRoles.indexOf(role) !== -1;
  }
  
  Spotkey.build = function (data) {
    if(!checkRole(data.role)){
      return
    }
    new Spotkey(
      this.name   = name;
    this.street = street;
    this.city   = city;
    this.state  = state;
    this.zip    = zip;
    this.key    = spots;
    );
  };
  
  return: User;
  
})