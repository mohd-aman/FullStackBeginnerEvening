let addBtn = document.querySelector(".add-btn");
let modal = document.querySelector(".modal-cont");
let allPriorityColors = document.querySelectorAll(".priority-color");
let textArea = document.querySelector(".textarea-cont");
let mainCont = document.querySelector(".main-cont");
let modalPriorityColor = "black";
let addModal = true;

var uid = new ShortUniqueId();

addBtn.addEventListener("click",function(){
    if(addModal){
        modal.style.display = "flex";
    }else{
        modal.style.display = "none";
    }
    addModal = !addModal;
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
    //ticket structure
//  <div class="ticket-cont">
//     <div class="ticket-color red"></div>
//     <div class="ticket-id">#qu45</div>
//     <div class="task-area">Some Task</div>
// </div>
 
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML = `<div class="ticket-color ${modalPriorityColor}"></div>
                            <div class="ticket-id">#${uid()}</div>
                            <div class="task-area">${task}</div>`
    // console.log(ticketCont);
    mainCont.appendChild(ticketCont)
}