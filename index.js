 function updateClock(){
     var now = new Date();
     var dname = now.getDate(),
     mo = now.getMonth(),
     dnum = now.getDate(),
     yr = now.getFullYear(),
     hou = now.getHours(),
     min = now.getMinutes(),
     sec = now.getSeconds(),
     pe = "AM";

     if(hou == 0){
         hou = 12;
     }
     if(hou > 12){
         hou = hou - 12;
         pe = "PM";
     }


     Number.prototype.pad = function(digits){
         for(var n = this.toString();n.length < digits; n = 0 + n);
         return n;
     }


     var month = ["January","February","March","April","May","June","July","Augest","September","October","November","December"];
     let week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
     let ids = ["dayname","month","daynum","year","hour","minutes","seconds","period"];
     let values = [week[dname],month[mo],dnum.pad(2),yr,hou.pad(2),min.pad(2),sec.pad(2),pe];
     for(var i = 0; i < ids,length; i++)
     document.getElementById(ids[i]).firstChild.nodeValue = values[i];

 }

 function initClock(){
    updateClock();
    window.setInterval(updateClock, 1000);
 }









function showDate(){

    const cDate = new Date(Date.now())
  
  
    const dateInText = `${cDate.getHours()}:${cDate.getMinutes()}:${cDate.getSeconds()}`
  
  
    document.querySelector(".time").innerHTML = dateInText;
  
  }
  
  showDate()
  
  
  setInterval(showDate,1000)