const buttons=document.querySelectorAll(".button")
const body=document.querySelector("body")

buttons.forEach((button)=>{
  button.addEventListener("click",(event)=>{
    switch(event.target.id){
      case 'grey':body.style.backgroundColor='grey'
      break
      case 'blue':body.style.backgroundColor='blue'
      break
      case 'white':body.style.backgroundColor='white'
      break
      case 'yellow':body.style.backgroundColor='yellow'
      break
      default:break
    }

  })
})