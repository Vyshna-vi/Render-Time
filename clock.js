function renderTime() {
  let d = new Date();
  let hour = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  let hours = document.getElementsByTagName("h1");
  hours[0].innerHTML = hour;
  hours[1].innerHTML = min;
  hours[2].innerHTML = sec;
}
setInterval(renderTime, 1000);
