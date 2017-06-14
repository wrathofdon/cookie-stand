'use strict';

// array of all the stores
var stores = [];

function Store (name, min, max, ave) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.ave = ave;
  // savedLog will be set at the end
  this.savedLog = [];
  // newDay is a function that will reset the savedLog
  this.newDay = function() {
    var total = 0;
    this.savedLog = [this.name];
    for (var i = 0; i < 15; i++) {
      var sale = Math.round((Math.random() * (this.max - this.min) + this.min) * this.ave);
      this.savedLog.push(sale);
      total += sale;
    }
    this.savedLog.push(total);
    return(this.savedLog);
  };
  this.newDay();
  stores.push(this);
};

var pike = new Store('1st and Pike', 23, 65, 6.3);
var seatac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitol = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

//generate hours
var times = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total:'];

var parentElement = document.getElementById('salmonSales');

var article = document.createElement('article');
parentElement.appendChild(article);


var table = document.createElement('table');

function generateRow(rowArray, element, table) {
  var row = document.createElement('tr');
  for (var i = 0; i < times.length; i++) {
    var cell = document.createElement(element);
    cell.textContent = rowArray[i];
    row.appendChild(cell);
  }
  table.appendChild(row);
};

generateRow(times, 'th', table);

for (var i = 0; i < stores.length; i++) {
  generateRow(stores[i].savedLog, 'td', table);
}

article.appendChild(table);
