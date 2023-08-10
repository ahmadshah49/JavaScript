const button=document.querySelector('.toogle')
const body=document.body
function toogle() {
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode")
        button.textContent=("Dark Mode")
    }else{
        body.classList.add("dark-mode")
        button.textContent="Light Mode"
    }
}
button.addEventListener("click",toogle);