'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var cookStore = [];
var cookieTable = document.getElementById('cookies');

function patsCookies(name, min, max, avg,) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesEachHour: [];
  this.totalDailySales: 0;
  allCookies.push(this);
}

patsCookies.prototype.calcCookiesEachHour = function() {
    var custsEachHour = Math.floor(Math.random() * (this.max - this.min) + this.min);
    return Math.floor(this.avg * custsEachHour);
  }

patsCookies.prototype.calcCustsEachHour = function() {
  for(var i = 0; i < hours.length; i++){
    var oneHour = Math.floor(this.custsEachHour[i] * this.avg);
    this.cookiesEachHour.push(oneHour);
    this.totalDailySales += oneHour;
  }
};

render: function(){
  this.calcCookiesEachHour();
  var trEl = document.getElementById('tr');
  var tdEl = document.createElement('td');
    tdEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
    trEl.appendChild(tdEl);
    for(var i = 0; i < hours.length; i++){
  tdEl = document.createElement('td');
  tdEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
  trEl.appendChild(liEl);
}
};

// create a for loop for an array for the time slots instead of whats below, make global array at top
function headRow() {
  var trEl = document.createElement('tr');
  for(var i = 0; i < hours.length; i++){
    var thEl = document.createElement('th');
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

      for(var j = 0; j < cookStore.length; i++){
        hourlyTotal += cookStore.length[j].cookiesEachHour[i];

      }
      thEl = document.createElement('th');
      thEl.textContent = hourlyTotal;
      trEl.appendChild(thEl);
    }

    cookieTable.appendChild(trEl);
  }

  var pikePlaceMarket = new patsCookies('1st and Pike', 23, 65, 6.3);
  var seatacAirport = new patsCookies('Seatac Airport', 23, 65, 6.3);
  var seattleCenter = new patsCookies('Seattle center', 23, 65, 6.3);
  var capitolHill = new patsCookies('Capitol Hill', 23, 65, 6.3);
  var alkiBeach = new patsCookies('Alki Beach', 23, 65, 6.3);


  headRow();
  pikePlaceMarket.render();
  seatacAirport.render();
  seattleCenter.render();
  capitolHill.render();
  alkiBeach.render();
  footRow();
