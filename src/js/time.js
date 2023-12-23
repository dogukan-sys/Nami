(function displayClock() {
  var d = new Date();
  var min = (mins = ("0" + d.getMinutes()).slice(-2));
  var hh = d.getHours();

  document.getElementById("hour").innerText = hh;
  document.getElementById("minutes").innerText = min;
  setInterval(displayClock, 1000);
})();
