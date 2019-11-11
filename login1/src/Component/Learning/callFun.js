var person = {
    fullName: function(city, country,state) {
      return this.firstName + " " + this.lastName + "," + city + "," + country + "," + state;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  var person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  if (true) {
      
  }
  var x = person.fullName.apply(person1,["Oslo", "Norway" ,"Bihar"]); 
  const y=person.fullName.call(person1,"arwal","Bihar");
  console.log(x);
  console.log(y);
  