
let form = document.querySelector("#form");

let taskelements = document.querySelector(".taskelements")
let inputt = document.querySelector("#input-text")
// let inputt1=document.querySelector(".text")
form.addEventListener("submit", (e) => {
  e.preventDefault();
let task = inputt.value;
if(task.length>0){


    let container = document.createElement("div");
    container.classList.add("container")
    let edit_button = document.createElement("button");
    edit_button.classList.add("edit");
    edit_button.innerText = "\u{1F58A}";
    // edit_button.innerHTML = "<i class='fa-solid fa-pen'></i>";
    container.append(edit_button);

       let inputt1= document.createElement("input")
       inputt1.classList.add("inputt1")
       inputt1.setAttribute("readonly", "readonly")
       inputt1.value= task
       inputt1.type= "text"
       inputt1.style.fontSize="30px"
       container.append(inputt1);
     
       ////////////////////////////////////////////////
       let delete_button = document.createElement("button");
       delete_button.classList.add("delete");
       delete_button.innerText = "\u{1F5D1}";
       container.append(delete_button);

    let display = document.createElement("h3");

    display.classList.add("display");
    display.innerText=0
    container.append(display);
  
    let inc_btn = document.createElement("button");
    inc_btn.classList.add("increement");
    inc_btn.innerText="+"
    container.append(inc_btn);
    let reset_btn = document.createElement("button");
    reset_btn.classList.add("reset");
    reset_btn.innerText="\u{21BA}"
    container.append(reset_btn);
    let dec_btn = document.createElement("button");
    dec_btn.classList.add("decreement");
    dec_btn.innerText="-"
    container.append(dec_btn);

    taskelements.append(container)
    let count = 0;
    inc_btn.addEventListener("click", () => {
      count += 1;
      display.innerText = count;
  
    });
    reset_btn.addEventListener("click", () => {
      count = 0;
      display.innerText = count;
      
    });
    dec_btn.addEventListener("click", () => {
      if (count > 0) {
        count -= 1;
        display.innerText = count;

      } else {
        count = 0;
        display.innerText = count;
       
      }
    });
    edit_button.addEventListener("click", (e) => {
        if (edit_button.innerText == "\u{1F58A}") {
          edit_button.innerText = "\u{1F5AB}";
          inputt1.removeAttribute("readonly");
          
        } else {
          edit_button.innerText = "\u{1F58A}";
       
         
          inputt1.setAttribute("readonly", "readonly");
        }
      });
    
      delete_button.addEventListener("click", (e) => {
        taskelements.removeChild(container);
       
        // tasks1.removeChild(task_element)
      });
}
 inputt.value=""



  
});
