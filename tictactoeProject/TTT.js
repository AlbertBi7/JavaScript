const buttons=document.querySelectorAll(".grid-item")


buttons.forEach((button)=>{
  button.addEventListener("click",(event)=>{
    switch(event.target.id){
      case "1":document.getElementById("1").innerHTML="X"
      break
      case '2':document.getElementById("2").innerHTML="X"
      break
      case '3':document.getElementById("3").innerHTML="X"
      break
      case '4':document.getElementById("4").innerHTML="X"
      break
      case '5':document.getElementById("5").innerHTML="X"
      break
      case '6':document.getElementById("6").innerHTML="X"
      break
      case '7':document.getElementById("7").innerHTML="X"
      break
      case '8':document.getElementById("8").innerHTML="X"
      break
      case '9':document.getElementById("9").innerHTML="X"
      break

      default:break
    }

  })
})