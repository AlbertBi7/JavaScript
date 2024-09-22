
const time=document.querySelector("#clock")
 setInterval(function(){
  const now=new Date()
  time.innerHTML=now.toLocaleTimeString()
 },1000)