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
    this.savedLog = [];
    for (var i = 0; i < 15; i++) {
      this.savedLog.push(Math.round((Math.random() * (this.max - this.min) + this.min) * this.ave));
    }
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



function predictDay(store) {
  var hour = 6;
  var meridiem = 'am: ';
  var total = 0;
  var logger = [];
  var parentElement = document.getElementById('salmonSales');
  var article = document.createElement('article');
  parentElement.appendChild(article);
  var h2 = document.createElement('h2');
  h2.textContent = store.name;
  article.appendChild(h2);
  var a = document.createElement('a');
  article.appendChild(a);
  a.setAttribute('href', store.image_link);
  var img = document.createElement('img');
  img.setAttribute('src', store.image);
  img.setAttribute('title', store.caption);
  a.appendChild(img);
  var ul = document.createElement('ul');
  article.appendChild(ul);
  for (var i = 0; i < 15; i++) {
    var sale = store.customersPerHour();
    logger.push(sale);
    if (hour > 12) {
      hour -= 12;
    }
    if (hour > 11) {
      meridiem = 'pm: ';
    }
    var li = document.createElement('li');
    li.textContent = hour + meridiem + sale + ' cookies';
    ul.appendChild(li);
    total += sale;
    hour++;
  }
  var p = document.createElement('p');
  p.textContent = 'Total: ' + total + ' cookies';
  article.appendChild(p);
  store.storeLog = logger;
}


predictDay(pike);
predictDay(seatac);
predictDay(seattleCenter);
predictDay(capitol);
predictDay(alki);
