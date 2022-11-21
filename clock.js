function renderTime(){
    let t=new Date();

    let hour=t.getHours();
    let minute=t.getMinutes();
    let sec=t.getSeconds();
    let milisec=t.getMilliseconds();
    let date=new Date();

    let time=document.getElementsByTagName("h1");
    time[0].innerHTML=hour;
    time[1].innerHTML=minute;
    time[2].innerHTML=sec;
    time[3].innerHTML=milisec;

    let d=document.getElementsByTagName("p")
    d[2].innerHTML=date.toDateString();
}
setInterval(renderTime,1000)
