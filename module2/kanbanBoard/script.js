let addBtn = document.querySelector(".add-btn");
let modal = document.querySelector(".modal-cont");
let allPriorityColors = document.querySelectorAll(".priority-color");
let addModal = true;

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
})}