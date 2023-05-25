const job = document.querySelector("#jobseeker");
const active = document.getElementById("dropdown");

job.addEventListener("click", ()=>{
    active.classList.toggle("active");
})