let addBtn = document.querySelector(".add-btn");
let modal = document.querySelector(".modal-cont");
let allPriorityColors = document.querySelectorAll(".priority-color");
let textArea = document.querySelector(".textarea-cont");
let mainCont = document.querySelector(".main-cont");
let removeBtn = document.querySelector(".remove-btn");
let color = ["red","blue","green","black"];
let modalPriorityColor = "black";
let addModal = true;
let removeFlag = false;

var uid = new ShortUniqueId();

addBtn.addEventListener("click",function(){
    if(addModal){
        modal.style.display = "flex";
    }else{
        modal.style.display = "none";
    }
    addModal = !addModal;
})

removeBtn.addEventListener("click",function(){
    if(removeFlag){
        removeBtn.style.color = "black"
    }else{
        removeBtn.style.color = "red";
    }
    removeFlag = !removeFlag;
})


for(let i=0;i<allPriorityColors.length;i++){
    allPriorityColors[i].addEventListener("click",function(){
        for(let j=0;j<allPriorityColors.length;j++){
            if(allPriorityColors[j].classList.contains('active')){
                allPriorityColors[j].classList.remove("active");
            }
        }
    allPriorityColors[i].classList.add("active");
    // console.log(allPriorityColors[i].classList);
    modalPriorityColor = allPriorityColors[i].classList[1];
    // console.log(modalPriorityColor)
})}

textArea.addEventListener("keydown",function(e){
    // console.log(e);
    if(e.key == "Enter"){
        let task = textArea.value;
        // console.log(task)
        createTicket(task);
        textArea.value = "";
        modal.style.display = "none";
        addModal = !addModal
    }
})

function createTicket(task){
    if(task == ""){
        return
    }
    //ticket structure
//  <div class="ticket-cont">
//     <div class="ticket-color red"></div>
//     <div class="ticket-id">#qu45</div>
//     <div class="task-area">Some Task</div>
//      <div class="lock-unlock"><i class="fa-solid fa-lock"></i></div>
// </div>
 
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML = `<div class="ticket-color ${modalPriorityColor}"></div>
                            <div class="ticket-id">#${uid()}</div>
                            <div class="task-area">${task}</div>
                            <div class="lock-unlock"><i class="fa-solid fa-lock"></i></div>`
    // console.log(ticketCont);
    mainCont.appendChild(ticketCont)
    
   handleLockUnlock(ticketCont);
   handleDelete(ticketCont);
   handlePriority(ticketCont);
  

}

function handlePriority(ticketCont){
     //handle change of priority color;
   let ticketColor = ticketCont.querySelector(".ticket-color");
   ticketColor.addEventListener("click",function(){
    // ["red","blue","green","black"];
       let currentColor = ticketColor.classList[1];
       
       console.log(currentColor);
    //    for(let i=0;i<color.length;i++){
    //        if(currentColor == color[i]){
    //             currentColorIndex = i;
    //             break;
    //        }
    //    }
        let currentColorIndex = color.findIndex(function(col){
            return currentColor == col;
        });
        console.log(currentColorIndex)
        let nextColorIndex = (currentColorIndex+1)%color.length;
        // console.log("Next Color Index",nextColorIndex);
        let nextColor = color[nextColorIndex];
        ticketColor.classList.remove(currentColor);
        ticketColor.classList.add(nextColor);
   })
}


function handleLockUnlock(ticketCont){
     //handle lock unlock
     let lockUnlockBtn = ticketCont.querySelector(".lock-unlock i");
     let taskArea = ticketCont.querySelector(".task-area");
     lockUnlockBtn.addEventListener('click',function(){
         // console.log("clicked");
         if(lockUnlockBtn.classList.contains('fa-lock')){
             lockUnlockBtn.classList.remove("fa-lock");
             lockUnlockBtn.classList.add("fa-lock-open");
             taskArea.setAttribute("contenteditable","true");
         }else{
             lockUnlockBtn.classList.remove("fa-lock-open");
             lockUnlockBtn.classList.add("fa-lock");
             taskArea.setAttribute("contenteditable","false")
         }
     })
}

function handleDelete(ticketCont){
    //handle delete
    ticketCont.addEventListener("click",function(){
        if(removeFlag)
            ticketCont.remove();
    })
}