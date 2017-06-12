'use strict';

var pike = {
  name: '1st and Pike',
  image: 'https://c2.staticflickr.com/4/3282/5836876205_38b0b01a78_n.jpg',
  image_title: 'source: https://www.flickr.com/photos/rickvaughn/5836876205/sizes/l',
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
  image_title: 'source: https://www.flickr.com/photos/avgeekjoe/6903623418/sizes/l',
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
  image_title: 'source: https://www.flickr.com/photos/sean_oneill/2167825832/sizes/l',
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
  image: 'https://c2.staticflickr.com/8/7362/14185998831_31e0eac9bb_n.jpg',
  image_title: 'source: https://www.flickr.com/photos/wrymuffin/14185998831/sizes/l',
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
  image: 'https://c1.staticflickr.com/5/4108/5040991402_1b958e931c_n.jpg',
  image_title: 'source: https://www.flickr.com/photos/22286227@N05/5040991402/sizes/l',
  min: 2,
  max: 16,
  ave: 4.6,
  storeLog: [],
  customersPerHour : function() {
    return(Math.floor((Math.random() * (this.max + 1 - this.min) + this.min) * this.ave));
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
  var img = document.createElement('img');
  img.setAttribute('src', store.image);
  img.setAttribute('title', store.image_title);
  article.appendChild(img);
  console.log(store.name);
  var ul = document.createElement('ul');
  article.appendChild(ul);
  for (var i = 0; i < 15; i++) {
    var sale = store.customersPerHour();
    logger.push(sale);
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
  store.storeLog = logger;
}


predictDay(pike);
predictDay(seatac);
predictDay(seattleCenter);
predictDay(capitol);
predictDay(alki);
