'use strict';

// array of all the stores
var stores = [];
var times = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total:'];

var pike = new Store('1st and Pike', 23, 65, 6.3);
var seatac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitol = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

var storeMax = 0;
var totalMax = 0;


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

for (var i = 0; i < stores.length; i++) {
  totalMax += stores[i].max * stores[i].ave;
  if (stores[i].max * stores[i].ave > storeMax) {
    storeMax = stores[i].max * stores[i].ave;
  }
}
totalMax = Math.floor(totalMax);

var totals = ['Totals: '];
for (i = 1; i < 17; i++) {
  totals.push(0);
  for (var j = 0; j < stores.length; j++) {
    totals[i] += stores[j].savedLog[i];
  }
}

var parentElement = document.getElementById('salmonSales');
var article = document.createElement('article');
parentElement.appendChild(article);
var table = document.createElement('table');

generateRow(times, 'th', table);


for (i = 0; i < stores.length; i++) {
  generateRow(stores[i].savedLog, 'td', table, storeMax);
}

generateRow(totals, 'td', table, totalMax);

article.appendChild(table);

function generateRow(rowArray, element, table, maximum) {
  var row = document.createElement('tr');
  for (var i = 0; i < times.length; i++) {
    var cell = document.createElement(element);
    if (isNaN(rowArray[i])) {
      var span = document.createElement('span');
      span.textContent = rowArray[i];
      span.setAttribute('style', 'font-weight: bold');
      cell.appendChild(span);
    } else {
      cell.textContent = rowArray[i];
    }
    if (rowArray[i] && !isNaN(rowArray[i]) && i < 16) {
      var success = rowArray[i] / maximum;
      cell.setAttribute('style', 'background-color: rgba(250, 128, 114, ' + success + ')');
      var div = document.createElement('div');
      cell.appendChild(div);
      var img = document.createElement('img');
      img.setAttribute('src', 'salmon-small.png');
      img.setAttribute('width', 80 * (Math.pow(success, .5)));
      div.appendChild(img);
      cell.appendChild(div);
    }
    row.appendChild(cell);
  }
  table.appendChild(row);
};
