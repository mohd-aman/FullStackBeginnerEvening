let starContainer = document.querySelector(".star-container");
let allStar = document.querySelectorAll(".star");
let rating = document.querySelector("h3");
let prevClicked = 0;

starContainer.addEventListener("click",function(e){
    // console.log(e.target.dataset.pos);
    let currentClicked = e.target.dataset.pos;
    for(let i=0;i<prevClicked;i++){
        allStar[i].classList.remove("yellow");
    }
    for(let i=0;i<currentClicked;i++){
        allStar[i].classList.add("yellow");
    }
    rating.innerText = "Rating : " + currentClicked;
    prevClicked = currentClicked;
})

starContainer.addEventListener("mouseover",function(e){
    let currentClicked = e.target.dataset.pos;
    console.log(currentClicked);
    for(let i=0;i<allStar.length;i++){
        allStar[i].classList.remove("yellow");
    }
    for(let i=0;i<currentClicked;i++){
        allStar[i].classList.add("yellow");
    }
})

starContainer.addEventListener("mouseleave",function(e){
    for(let i=0;i<allStar.length;i++){
        allStar[i].classList.remove("yellow");
    }
    for(let i=0;i<prevClicked;i++){
        allStar[i].classList.add("yellow");
    }
})