'use strict';

var pike = {
  name: '1st and Pike',
  min: 23,
  max: 65,
  ave: 6.3,
  customersPerHour : function() {
    return(Math.floor((Math.random() * (this.max + 1 - this.min) + this.min) * this.ave));
  }
}

var seatac = {
  name: 'SeaTac Airport',
  min: 3,
  max: 24,
  ave: 1.2,
  customersPerHour : function() {
    return(Math.floor((Math.random() * (this.max + 1 - this.min) + this.min) * this.ave));
  }
}

var seattleCenter = {
  name: 'Seattle Center',
  min: 11,
  max: 38,
  ave: 3.7,
  customersPerHour : function() {
    return(Math.floor((Math.random() * (this.max + 1 - this.min) + this.min) * this.ave));
  }
}

var capitol = {
  name: 'Capitol Hill',
  min: 20,
  max: 38,
  ave: 2.3,
  customersPerHour : function() {
    return(Math.floor((Math.random() * (this.max + 1 - this.min) + this.min) * this.ave));
  }
}

var alki = {
  name: 'Alki',
  min: 2,
  max: 16,
  ave: 4.6,
  customersPerHour : function() {
    return(Math.floor((Math.random() * (this.max + 1 - this.min) + this.min) * this.ave));
  }
}

function predictDay(store) {
  var hour = 6;
  var meridiem = 'am: ';
  console.log(store.name);
  var total = 0;
  for (var i=0; i < 15; i++) {
    sale = store.customersPerHour();
    if (hour > 12) {
      hour -= 12;
      meridiem = 'pm: ';
    }
    console.log(hour + meridiem + sale + ' cookies');
    total += sale
    hour++;
  }
  console.log('Total: ' + total + ' cookies\n\n')
}

predictDay(pike);
