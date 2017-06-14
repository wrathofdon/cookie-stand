'use strict';

// array of all the stores, will be added via construction
var stores = [];
var times = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Location Total:'];

// ignore the linter issues, functions are called via for loop
var pike = new Store('1st and Pike', 23, 65, 6.3);
var seatac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitol = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

// calculates the maximum number of cookies sold per day
var storeMax = 0;
var totalMax = 0;


function Store (name, min, max, ave) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.ave = ave;
  // savedLog will be set at the end
  this.savedLog = [];
  // newDay is a function that can reset the savedLog if necessary
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
  // store is added to array on line 4
  stores.push(this);
};

Store.prototype.render = function(table, maximum) {
  var row = document.createElement('tr');
  for (var i = 0; i < times.length; i++) {
    var cell = document.createElement('td');
    // if content is text, add bold
    if (isNaN(this.savedLog[i])) {
      var span = document.createElement('span');
      span.textContent = this.savedLog[i];
      span.setAttribute('style', 'font-weight: bold');
      cell.appendChild(span);
    } else {
      cell.textContent = this.savedLog[i];
    }
    if (0 < i && i < 16) {
      // success provides visual indicator of how well the stores did relative to the maximum possible
      var success = this.savedLog[i] / maximum;
      cell.setAttribute('style', 'background-color: rgba(250, 128, 114, ' + success + ')');
      var div = document.createElement('div');
      cell.appendChild(div);
      var img = document.createElement('img');
      img.setAttribute('src', 'images/salmon-small.png');
      img.setAttribute('width', 60 * success);
      div.appendChild(img);
      cell.appendChild(div);
    }
    row.appendChild(cell);
  }
  table.appendChild(row);
};



for (var i = 0; i < stores.length; i++) {
  // this is to find the individual store with the highest sales potential
  if (stores[i].max * stores[i].ave > storeMax) {
    storeMax = stores[i].max * stores[i].ave;
  }
  // this will find the maximum sales potential for all stores combined
  totalMax += stores[i].max * stores[i].ave;
}
totalMax = Math.round(totalMax);



//this is where we start the html portion
var parentElement = document.getElementById('salmonSales');
var article = document.createElement('article');
parentElement.appendChild(article);
var table = document.createElement('table');


// renders header
generateHeader(times, table);

// renders individual stores
for (i = 0; i < stores.length; i++) {
  stores[i].render(table, storeMax);
};

//renders total
generateFooter(table, totalMax);

article.appendChild(table);

//converts array into table row
function generateHeader(rowArray, table) {
  var row = document.createElement('tr');
  for (var i = 0; i < times.length; i++) {
    var cell = document.createElement('th');
    cell.textContent = rowArray[i];
    row.appendChild(cell);
  }
  table.appendChild(row);
};

//converts array into table row
function generateFooter(table, maximum) {
  //generates an array with the totals for any given hour
  var totals = ['Totals: '];
  for (i = 1; i < 17; i++) {
    totals.push(0);
    for (var j = 0; j < stores.length; j++) {
      totals[i] += stores[j].savedLog[i];
    }
  }
  var row = document.createElement('tr');
  for (var i = 0; i < times.length; i++) {
    var cell = document.createElement('td');
    // if content is text, add bold
    var span = document.createElement('span');
    span.textContent = totals[i];
    span.setAttribute('style', 'font-weight: bold');
    cell.appendChild(span);
    if (0 < i && i < 16) {
      // success provides visual indicator of how well the stores did relative to the maximum possible
      var success = totals[i] / maximum;
      cell.setAttribute('style', 'background-color: rgba(250, 128, 114, ' + success + ')');
      var div = document.createElement('div');
      cell.appendChild(div);
      var img = document.createElement('img');
      img.setAttribute('src', 'images/salmon-small.png');
      img.setAttribute('width', 60 * success);
      div.appendChild(img);
      cell.appendChild(div);
    }
    row.appendChild(cell);
  }
  table.appendChild(row);
};
