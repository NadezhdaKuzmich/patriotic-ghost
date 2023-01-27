const input = document.querySelector("input");
const flag = document.getElementById("flag");

function showFlag() {
    flag.style.display = "block";
}

function hideFlag() {
    flag.style.display = "none";
}

input.addEventListener("focus", showFlag);
input.addEventListener("blur",  hideFlag);