var eduardo = document.querySelector(".eduardo");
var smilinguido = document.querySelector(".smilinguido");



smilinguido.addEventListener("click", function() {
    if (eduardo.classList.contains("active")) {
        eduardo.classList.remove("active");
        smilinguido.classList.remove("active");
    } else {
        eduardo.classList.add("active");
        smilinguido.classList.add("active");
    }
};

