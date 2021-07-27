const icons=document.querySelectorAll(".section-1-icons i")
let i=0;
setInterval(() => {
  const icon=document.querySelector(".section-1-icons i.changes");
  icon.classList.remove('changes')
  if (i>8) {
      icons[0].classList.add("changes");
      i=0;
  }else{
    icon.nextElementSibling.classList.add("changes");
  }
  i++
}, 3000);

document.querySelector(".menu").addEventListener("click",()=>{
  document.querySelectorAll(".target").forEach((elem)=>{
    elem.classList.toggle("change")
  })
})