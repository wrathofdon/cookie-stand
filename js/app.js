'use strict';

var pike = {
  name: '1st and Pike',
  min: 23,
  max: 65,
  ave: 6.3,
  customersPerHour : function() {
    return(Math.floor((Math.random() * (this.max + 1 - this.min) + this.min) * this.ave));
  }
};

var seatac = {
  name: 'SeaTac Airport',
  min: 3,
  max: 24,
  ave: 1.2,
  customersPerHour : function() {
    return(Math.floor((Math.random() * (this.max + 1 - this.min) + this.min) * this.ave));
  }
};

var seattleCenter = {
  name: 'Seattle Center',
  min: 11,
  max: 38,
  ave: 3.7,
  customersPerHour : function() {
    return(Math.floor((Math.random() * (this.max + 1 - this.min) + this.min) * this.ave));
  }
};

var capitol = {
  name: 'Capitol Hill',
  min: 20,
  max: 38,
  ave: 2.3,
  customersPerHour : function() {
    return(Math.floor((Math.random() * (this.max + 1 - this.min) + this.min) * this.ave));
  }
};

var alki = {
  name: 'Alki',
  min: 2,
  max: 16,
  ave: 4.6,
  customersPerHour : function() {
    return(Math.floor((Math.random() * (this.max + 1 - this.min) + this.min) * this.ave));
  }
};

function predictDay(store) {
  var parentElement = document.getElementById('salmonSales');
  var article = document.createElement('article');
  parentElement.appendChild(article);
  var h2 = document.createElement('h2');
  h2.textContent = store.name;
  article.appendChild(h2);
  var hour = 6;
  var meridiem = 'am: ';
  console.log(store.name);
  var total = 0;
  var ul = document.createElement('ul');
  article.appendChild(ul);
  for (var i = 0; i < 15; i++) {
    var sale = store.customersPerHour();
    if (hour > 12) {
      hour -= 12;
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
}


predictDay(pike);
predictDay(seatac);
predictDay(seattleCenter);
predictDay(capitol);
predictDay(alki);
