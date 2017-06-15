'use strict';

// array of all the stores, will be added via construction
var storeLocations = [];
var storeTotals = ['Hourly Totals', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var tbody; var thead; var tfoot;
var times = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Location Total:'];
var storeMax = 0;
var totalMax = 0;

// ignore the linter issues, functions are called via for loop
var pike = new Store('1st and Pike', 23, 65, 6.3);
var seatac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitol = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);
var stores = [pike, seatac, seattleCenter, capitol, alki];
// calculates the maximum number of cookies sold per day

function Store (location, min, max, ave) {
  this.location = location;
  storeLocations.push(this.location.toLowerCase());
  this.min = min;
  this.max = max;
  this.ave = ave;
  this.hourlyMax = this.max * this.ave;
  totalMax += this.hourlyMax;
  if (this.hourlyMax > storeMax) {
    storeMax = (this.max * this.ave);
  }
  //savedLog will be set at the end
  this.savedLog = [];
  // newDay is a function that can reset the savedLog if necessary
  this.newDay = function() {
    var total = 0;
    this.savedLog = [this.location];
    for (var i = 0; i < 14; i++) {
      var sale = Math.round((Math.random() * (this.max - this.min) + this.min) * this.ave);
      this.savedLog.push(sale);
      total += sale;
      storeTotals[i + 1] += sale;
    }
    this.savedLog.push(total);
    storeTotals[15] += total;
    return(this.savedLog);
  };
  this.newDay();
  // store is added to array on line 4
};

Store.prototype.render = function(tbody, maximum) {
  var row = document.createElement('tr');
  for (var i = 0; i < times.length; i++) {
    var cell = document.createElement('td');
    // if content is text, add bold
    if (i == 0) {
      var span = document.createElement('span');
      span.textContent = this.savedLog[i];
      span.setAttribute('style', 'font-weight: bold');
      cell.appendChild(span);
    } else {
      cell.textContent = this.savedLog[i];
    }
    if (0 < i && i < 15) {
      // success provides visual indicator of how well the stores did relative to the maximum possible
      var success = this.savedLog[i] / maximum;
      cell.setAttribute('style', 'background-color: rgba(255, 100, 75, ' + success + ')');
      var div = document.createElement('div');
      cell.appendChild(div);
      var img = document.createElement('img');
      img.setAttribute('src', 'images/salmon-small.png');
      img.setAttribute('width', 60 * Math.pow(success, .8));
      div.appendChild(img);
      cell.appendChild(div);
    }
    row.appendChild(cell);
  }
  tbody.appendChild(row);
};

console.log(totalMax, storeMax);


//this is where we start the html portion
var parentElement = document.getElementById('salmonSales');
var article = document.createElement('article');
parentElement.appendChild(article);
var table = document.createElement('table');


// renders header
generateHeader(times, table);

// renders individual stores
tbody = document.createElement('tbody');
for (var i = 0; i < stores.length; i++) {
  stores[i].render(tbody, storeMax);
};
table.appendChild(tbody);

//renders total
generateFooter(table, totalMax);
article.appendChild(table);

//converts array into table row
function generateHeader(rowArray, table) {
  thead = document.createElement('thead');
  var row = document.createElement('tr');
  for (var i = 0; i < times.length; i++) {
    var cell = document.createElement('th');
    cell.textContent = rowArray[i];
    row.appendChild(cell);}
  thead.appendChild(row);
  table.appendChild(thead);
};

//converts array into table row
function generateFooter(table) {
  tfoot = document.createElement('tfoot');
  tfoot.setAttribute('style', 'color: #990000');
  //generates an array with the totals for any given hour
  var row = document.createElement('tr');
  for (var i = 0; i < times.length; i++) {
    var cell = document.createElement('td');
    var span = document.createElement('span');
    span.textContent = storeTotals[i];
    span.setAttribute('style', 'font-weight: bold');
    cell.appendChild(span);
    if (0 < i && i < 15) {
      var success = storeTotals[i] / totalMax;
      cell.setAttribute('style', 'background-color: rgba(255, 100, 80, ' + success + ')');
      var div = document.createElement('div');
      cell.appendChild(div);
      var img = document.createElement('img');
      img.setAttribute('src', 'images/salmon-small.png');
      img.setAttribute('width', 60 * Math.pow(success, .75));
      div.appendChild(img);
      cell.appendChild(div);
    }
    row.appendChild(cell);
  }
  tfoot.appendChild(row);
  table.appendChild(tfoot);
};
