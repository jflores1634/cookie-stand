'use strict';

// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var cookiesHours = [];

var cookieTable = document.getElementById('cookies');

function patsCookies(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
}

patsCookies.prototype.render = function () {
  var trEL = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.min;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.max;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.avg;
  trEl.appendChild(tdEl);

  cookieTable.appendChild(trEl);
};

// create a for loop for an array for the time slots instead of whats below, make global array at top
function headRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = '6am';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = '7am';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = '8am';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = '9am';
  trEl.appendChild(thEl);

  thEl.textContent = '10am';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = '11am';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = '12pm';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = '1pm';
  trEl.appendChild(thEl);

  thEl.textContent = '2pm';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = '3pm';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = '4pm';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = '5pm';
  trEl.appendChild(thEl);

  thEl.textContent = '6pm';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = '7pm';
  trEl.appendChild(thEl);

  cookieTable.appendChild(trEl);
}

var pikePlaceMarket = new patsCookies('1st and Pike', 23, 65, 6.3);
var seatacAirport = new patsCookies('Seatac Airport', 23, 65, 6.3);
var seattleCenter = new patsCookies('Seattle center', 23, 65, 6.3);
var capitolHill = new patsCookies('Capitol Hill', 23, 65, 6.3);
var alkiBeach = new patsCookies('Alki Beach', 23, 65, 6.3);

// pikePlaceMarket.render();
// seatacAirport.render();
// seattleCenter.render();
// capitolHill.render();
// alkiBeach.render();


function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN docs
}

var pikePlaceMarket = {
  minCustsPerHour: 23,
  maxCustsPerHour: 65,
  avgCookiesPerCust: 6.3,
  custsEachHour: [],
  cookiesEachHour: [],
  totalDailySales: 0,
  calcCustsEachHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },
  calcCookiesEachHour: function(){
    this.calcCustsEachHour();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.floor(this.custsEachHour[i] * this.avgCookiesPerCust);
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
    }
  },
  render: function(){
    this.calcCookiesEachHour();
    var ulEl = document.getElementById('pike');
    for(var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    ulEl.appendChild(liEl);
  }
}

var seatacAirport = {
  minCustsPerHour: 3,
  maxCustsPerHour: 24,
  avgCookiesPerCust: 1.2,
  custsEachHour: [],
  cookiesEachHour: [],
  totalDailySales: 0,
  calcCustsEachHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },
  calcCookiesEachHour: function(){
    this.calcCustsEachHour();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.floor(this.custsEachHour[i] * this.avgCookiesPerCust);
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
    }
  },
  render: function(){
    this.calcCookiesEachHour();
    var ulEl = document.getElementById('seatac');
    for(var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    ulEl.appendChild(liEl);
  }
}

var seattleCenter = {
  minCustsPerHour: 11,
  maxCustsPerHour: 38,
  avgCookiesPerCust: 3.7,
  custsEachHour: [],
  cookiesEachHour: [],
  totalDailySales: 0,
  calcCustsEachHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },

  calcCookiesEachHour: function(){
    this.calcCustsEachHour();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.floor(this.custsEachHour[i] * this.avgCookiesPerCust);
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
    }
  },
  render: function(){
    this.calcCookiesEachHour();
    var ulEl = document.getElementById('center');
    for(var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    ulEl.appendChild(liEl);
  }
}

var capitolHill = {
  minCustsPerHour: 20,
  maxCustsPerHour: 38,
  avgCookiesPerCust: 2.3,
  custsEachHour: [],
  cookiesEachHour: [],
  totalDailySales: 0,
  calcCustsEachHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },
  calcCookiesEachHour: function(){
    this.calcCustsEachHour();
    for(var i = 0; i < hours.length; i++){
    var oneHour = Math.floor(this.custsEachHour[i] * this.avgCookiesPerCust);
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
    }
  },
  render: function(){
    this.calcCookiesEachHour();
    var ulEl = document.getElementById('Hill');
    for(var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    ulEl.appendChild(liEl);
  }
}

var alkiBeach = {
  minCustsPerHour: 11,
  maxCustsPerHour: 38,
  avgCookiesPerCust: 3.7,
  custsEachHour: [],
  cookiesEachHour: [],
  totalDailySales: 0,
  calcCustsEachHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },
  calcCookiesEachHour: function(){
    this.calcCustsEachHour();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.floor(this.custsEachHour[i] * this.avgCookiesPerCust);
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
    }
  },
  render: function(){
    this.calcCookiesEachHour();
    var ulEl = document.getElementById('alki');
    for(var i = 0; i < hours.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
    ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    ulEl.appendChild(liEl);
  }
}

headRow();
pikePlaceMarket.render();
seatacAirport.render();
seattleCenter.render();
capitolHill.render();
alkiBeach.render();
