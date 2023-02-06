const ratingBtns=document.querySelectorAll('.rating-btn');
const submitBtn=document.querySelector('.submit-btn');
const selectedRating=document.querySelector(".outputPage");
const submitClass=document.querySelector('.submit');
const thankYouClass=document.querySelector(".thankyou");

let currentlySelectedButton = 5
let value=false;
const addSelection=(btn)=>{
    const activeSelection = document.getElementById(`rating-${currentlySelectedButton}`);
    activeSelection.classList.remove("selected")
    btn.classList.add("selected");
    value=true;
    currentlySelectedButton = Number(btn.innerHTML)
}
ratingBtns.forEach(ratingBtn=> {
    ratingBtn.addEventListener('click',()=>{
        addSelection(ratingBtn);
    })
});

submitBtn.addEventListener('click',()=>{
    if(value){
    submitClass.classList.add("hidden");
    thankYouClass.classList.remove("hidden");
    selectedRating.innerHTML=`You selected ${currentlySelectedButton} out of 5`;
    }
})

selectedRating.innerHTML=`You selected ${currentlySelectedButton} out of 5`;