window.onload = ()=>{
  let sblist={
    home:"home",
    products:"products",
    about:"about",
    "contact-us":"contact",
  }
  for(link in sblist){
    document.getElementById('sidebar').innerHTML +=`<a id="" href=#${link} class="sb-list sb-la"> ${sblist[link]}</a>`
  }
}

var toggle= true
document.getElementById('h-sidebar-show').onclick = ()=>{
  if (toggle) {
    document.getElementById('sidebar').style.zIndex="2"
    toggle=false
  }else {
    document.getElementById('sidebar').style.zIndex="0"
    toggle=true
  }
}

document.getElementById('main').addEventListener("click", (e)=>{
  document.getElementById('sidebar').style.zIndex="0"
})

document.querySelectorAll(".sb-la").forEach(item =>{
  item.addEventListener("click",(e)=> {
      e.target.style.backgroundColor="rgb(25,25,26)"
      e.target.style.color="white"
      setTimeout(() =>{
      e.target.style.backgroundColor="white"
      e.target.style.color="black"
        }, 500);
    }
  )
})

