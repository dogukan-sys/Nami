(function displayClock() {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var d = new Date();
  var min = (mins = ("0" + d.getMinutes()).slice(-2));
  var hh = d.getHours();
  var mm = d.getMonth();
  var dd = d.getDate();

  document.getElementById("hour").innerText = hh;
  document.getElementById("minutes").innerText = min;
  document.getElementById("month").innerText = monthNames[mm];
  document.getElementById("day").innerText = dd;
  setInterval(displayClock, 1000);
})();
