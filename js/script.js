console.log("Hello World !");
function value(valeur) {
    console.log(valeur);
    var button = document.querySelectorAll(".button");
    button.addEventListener("click", () => { 
        console.log(button) });
}
