'use strict';

// array of all the stores, will be added via construction
<<<<<<< HEAD
var storeLocations = [];
var storeTotals = ['Hourly Totals', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var tbody; var thead; var tfoot;
var times = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Location Total:'];
var storeMax = 0;
var totalMax = 0;
=======
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

>>>>>>> 974d52f56542b32388b41a5b2f5c1abb8e34ad62

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
<<<<<<< HEAD
};

Store.prototype.render = function(tbody, maximum) {
=======
  stores.push(this);
};

Store.prototype.render = function(table, maximum) {
>>>>>>> 974d52f56542b32388b41a5b2f5c1abb8e34ad62
  var row = document.createElement('tr');
  for (var i = 0; i < times.length; i++) {
    var cell = document.createElement('td');
    // if content is text, add bold
<<<<<<< HEAD
    if (i == 0) {
=======
    if (isNaN(this.savedLog[i])) {
>>>>>>> 974d52f56542b32388b41a5b2f5c1abb8e34ad62
      var span = document.createElement('span');
      span.textContent = this.savedLog[i];
      span.setAttribute('style', 'font-weight: bold');
      cell.appendChild(span);
    } else {
      cell.textContent = this.savedLog[i];
    }
<<<<<<< HEAD
    if (0 < i && i < 15) {
      // success provides visual indicator of how well the stores did relative to the maximum possible
      var success = this.savedLog[i] / maximum;
      cell.setAttribute('style', 'background-color: rgba(255, 100, 75, ' + success + ')');
=======
    if (0 < i && i < 16) {
      // success provides visual indicator of how well the stores did relative to the maximum possible
      var success = this.savedLog[i] / maximum;
      cell.setAttribute('style', 'background-color: rgba(250, 128, 114, ' + success + ')');
>>>>>>> 974d52f56542b32388b41a5b2f5c1abb8e34ad62
      var div = document.createElement('div');
      cell.appendChild(div);
      var img = document.createElement('img');
      img.setAttribute('src', 'images/salmon-small.png');
<<<<<<< HEAD
      img.setAttribute('width', 60 * Math.pow(success, .8));
=======
      img.setAttribute('width', 60 * success);
>>>>>>> 974d52f56542b32388b41a5b2f5c1abb8e34ad62
      div.appendChild(img);
      cell.appendChild(div);
    }
    row.appendChild(cell);
  }
<<<<<<< HEAD
  tbody.appendChild(row);
};

console.log(totalMax, storeMax);


=======
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



>>>>>>> 974d52f56542b32388b41a5b2f5c1abb8e34ad62
//this is where we start the html portion
var parentElement = document.getElementById('salmonSales');
var article = document.createElement('article');
parentElement.appendChild(article);
var table = document.createElement('table');


// renders header
generateHeader(times, table);
<<<<<<< HEAD

// renders individual stores
tbody = document.createElement('tbody');
for (var i = 0; i < stores.length; i++) {
  stores[i].render(tbody, storeMax);
};
table.appendChild(tbody);

//renders total
generateFooter(table, totalMax);
=======

// renders individual stores
for (i = 0; i < stores.length; i++) {
  stores[i].render(table, storeMax);
};

//renders total
generateFooter(table, totalMax);

>>>>>>> 974d52f56542b32388b41a5b2f5c1abb8e34ad62
article.appendChild(table);

//converts array into table row
function generateHeader(rowArray, table) {
<<<<<<< HEAD
  thead = document.createElement('thead');
=======
>>>>>>> 974d52f56542b32388b41a5b2f5c1abb8e34ad62
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
      img.setAttribute('width', 60 * Math.pow(success, .7));
      div.appendChild(img);
      cell.appendChild(div);
    }
    row.appendChild(cell);
  }
  tfoot.appendChild(row);
  table.appendChild(tfoot);
};
<<<<<<< HEAD
=======

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
>>>>>>> 974d52f56542b32388b41a5b2f5c1abb8e34ad62
