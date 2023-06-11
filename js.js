let downlaod=document.querySelector("#me");
let mainbc=document.querySelector(".box");
let entering=document.querySelector(".entering");
let text=document.querySelector("#text");

downlaod.addEventListener("click",function(){
  if(mainbc.classList.contains("firsturl")){
    mainbc.classList.remove("firsturl");
    mainbc.classList.add("secsturl");
  }
  else if(mainbc.classList.contains("secsturl")){
    mainbc.classList.remove("secsturl");
    mainbc.classList.add("thrsturl");
  }
  else if(mainbc.classList.contains("thrsturl")){
    mainbc.classList.remove("thrsturl");
    mainbc.classList.add("firsturl");
  }
})

text.addEventListener("keyup",function(){
  entering.innerHTML=this.value;
})