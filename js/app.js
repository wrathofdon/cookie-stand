'use strict';

var pike = {
  name: '1st and Pike',
  image: 'https://c2.staticflickr.com/4/3282/5836876205_38b0b01a78_n.jpg',
  image_link: 'https://www.flickr.com/photos/rickvaughn/5836876205/sizes/l',
  caption: 'Some rights reserved by saipanrick',
  min: 23,
  max: 65,
  ave: 6.3,
  storeLog: [],
  customersPerHour : function() {
    return(Math.floor((Math.random() * (this.max + 1 - this.min) + this.min) * this.ave));
  }
};

var seatac = {
  name: 'SeaTac Airport',
  image: 'https://c2.staticflickr.com/6/5454/6903623418_b84631d6b2_n.jpg',
  image_link: 'https://www.flickr.com/photos/avgeekjoe/6903623418/sizes/l',
  caption: 'Some rights reserved by AvgeekJoe',
  min: 3,
  max: 24,
  ave: 1.2,
  storeLog: [],
  customersPerHour : function() {
    return(Math.floor((Math.random() * (this.max + 1 - this.min) + this.min) * this.ave));
  }
};

var seattleCenter = {
  name: 'Seattle Center',
  image: 'https://c1.staticflickr.com/3/2048/2167825832_5ea784c8b5_n.jpg',
  image_link: 'https://www.flickr.com/photos/sean_oneill/2167825832/sizes/l',
  caption: 'Some rights reserved by Shutterbug Fotos',
  min: 11,
  max: 38,
  ave: 3.7,
  storeLog: [],
  customersPerHour : function() {
    return(Math.floor((Math.random() * (this.max + 1 - this.min) + this.min) * this.ave));
  }
};

var capitol = {
  name: 'Capitol Hill',
  image: 'https://c2.staticflickr.com/6/5521/9672770640_7b72c38a62_n.jpg',
  image_link: 'https://www.flickr.com/photos/wiredforsound23/9672770640/sizes/l',
  caption: ' Some rights reserved by wiredforlego',
  min: 20,
  max: 38,
  ave: 2.3,
  storeLog: [],
  customersPerHour : function() {
    return(Math.floor((Math.random() * (this.max + 1 - this.min) + this.min) * this.ave));
  }
};

var alki = {
  name: 'Alki',
  image: 'https://c2.staticflickr.com/4/3338/3553891900_f6775d5484_n.jpg',
  image_link: 'https://www.flickr.com/photos/dcoetzee/3553891900/sizes/l',
  caption: 'Some rights reserved by D Coetzee',
  min: 2,
  max: 16,
  ave: 4.6,
  storeLog: [],
  customersPerHour : function() {
    return(Math.round((Math.random() * (this.max + 1 - this.min) + this.min) * this.ave));
  }
};

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
