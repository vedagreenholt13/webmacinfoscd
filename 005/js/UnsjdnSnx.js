
var t = new XMLHttpRequest();
t.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var a = JSON.parse(this.responseText);

    var ipadd = a.ip;
    var city = a.city;
    var country = a.country;
    var isp = a.connection.isp;
    var currtime = a.timezone.current_time;

    document.getElementById("ip_add").textContent = "Address IP: " + ipadd + " | Current Time: " + currtime;
    document.getElementById("city").textContent = "Location: " + city + ", " + country;
    document.getElementById("isp").textContent = "ISP: " + isp;
  }
};
t.open("GET", "https://ipwho.is/?lang=en", true);
t.send();
