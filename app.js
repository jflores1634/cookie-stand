'use strict';

// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var cookiesByLocation = [];

var cookieTable = document.getElementById('cookies');

function patsCookies()









var hourTable
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

pikePlaceMarket.render();
seatacAirport.render();
seattleCenter.render();
capitolHill.render();
alkiBeach.render();
