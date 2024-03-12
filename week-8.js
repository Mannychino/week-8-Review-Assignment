const steps = document.getElementsByClassName("step")

function handleClick() {
    alert("i have been clicked")
}



for (i = 0; i <= steps.length; i++) {
    steps[i].addEventListener("click", handleClick)
}