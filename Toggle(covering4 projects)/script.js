let accordian=document.getElementsByClassName("contentbox");
// console.log(accordian)
for (let i=0;i<accordian.length;i++){
    accordian[i].addEventListener("click",function(){
        accordian[i].classList.toggle("active");
    })
}