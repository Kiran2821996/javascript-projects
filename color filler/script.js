const btn1 = document.querySelector(".button1");
const btn2= document.querySelector(".button2");
     

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn1.addEventListener("click", () => {
  
 var x = setInterval(() => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

    document.querySelector("span").innerText = rndCol;
    document.querySelector("h2").innerHTML = `<h3>&#${random(
      10174
    )}</h3>`;
    document.body.style.backgroundColor = rndCol;
    document.querySelector("button").style.backgroundColor = rndCol;
  }, 1000);

  
  btn2.addEventListener("click",()=>{
    clearInterval(x) 
    document.body.style.backgroundColor = "white";
    document.querySelector("h2").innerHTML = `<h5>GOT tired!!!&#128512</h5>`;
    document.querySelector("button").style.backgroundColor = "rgb(240,240,240)";

  })


});