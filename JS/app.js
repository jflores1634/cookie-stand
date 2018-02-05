'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var cookStore = [];
var cookieTable = document.getElementById('cookies');
var cookieForm = document.getElementById('cookie-form');

function PatsCookies(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesEachHour = [];
  this.totalDailySales = 0;
  PatsCookies.cookStore.push(this);
}

PatsCookies.prototype.calcCookiesEachHour = function() {
  for(var i = 0; i < hours.length; i++) {
    var oneHour = Math.floor(Math.random(this.calcCustsEachHour() * this.avg));
    this.cookiesEachHour.push(oneHour);
    this.totalDailySales += oneHour;
  }
  return this.cookiesEachHour;
};

PatsCookies.prototype.render = function(){
  this.calcCookiesEachHour();
  var trEl = document.getElementById('tr');
  var thEl = document.createElement('th');
  for(var i = 0; i < hours.length; i++){
    tdEl.textContent = this.name;
    trEl.appendChild(thEl);
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesEachHour[i] + ' cookies';
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalDailySales;
  trEl.appendChild(tdEl);
  cookieTable.appendChild(trEl);
};

function renderStores() {
  for(var i = 0; i < cookStore.length; i++) {
  cookStore[i].cookiesEachHour.length = 0;
  cookStore[i].render();
 }
}

// create a for loop for an array for the time slots instead of whats below, make global array at top
function headRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  for(var i = 0; i < hours.length; i++){
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
    cookieTable.appendChild(trEl);
  }

  function footRow() {
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = 'Hourly Totals';
    trEl.appendChild(thEl);
    for(var i = 0; i < hours.length; i++) {
      var hourlyTotal = 0;
      var tdEl = document.createElement('td');
      for(var j = 0; j < cookStore.length; j++){
        hourlyTotal += cookStore.length[j].cookiesEachHour[i];
        thEl.textContent = hourlyTotal;
        trEl.appendChild(tdEl);
      }
    cookieTable.appendChild(trEl);
  }

  function addNewStore(event) {
    event.preventDefault();
    var newStore = event.target.newStore.value;
    var newMin = parseInt(event.target.newMin.value);
    var newMax = parseInt(event.target.newMax.value);
    var newAvg = event.target.newAvg.value;

    new PatsCookies(newStore, newMin, newMax, newAvg);

    cookieTable.innerHTML = '';
    headRow();
    renderStores();
    footRow();
  }

  var pikePlaceMarket = new PatsCookies('1st and Pike', 23, 65, 6.3);
  var seatacAirport = new PatsCookies('Seatac Airport', 23, 65, 6.3);
  var seattleCenter = new PatsCookies('Seattle center', 23, 65, 6.3);
  var capitolHill = new PatsCookies('Capitol Hill', 23, 65, 6.3);
  var alkiBeach = new PatsCookies('Alki Beach', 23, 65, 6.3);

   cookieForm.addEventlistener('submit', addNewStore);

  headRow();
  renderStores();
  footRow();
