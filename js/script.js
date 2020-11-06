console.log("Hello World !");
const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touche => touche.dataset.key);
let ecran = document.querySelector('.ecran');
let operation = document.querySelector('.operation');
let resultat = document.querySelector('.resultat');

let input1; 
let input2;
let opera;
let resultatFinal = 0;
let cmpt = 0;

function value(valeur) {
    console.log(valeur);
    var button = document.querySelectorAll('.button');
    console.log(button);
}

let btns = document.querySelectorAll(".number .button");

window.onload = function () {
    console.log("calculatrice pret !")
    let button = document.querySelectorAll('.number .button')
    //forEach(Element int)
    console.log("...........", $("button"));
    button.forEach(element => {
        element.innerHTML = "<b>" + element.innerHTML + "<b/>"
    })
}

document.addEventListener('keydown', (e) => { //controle des touches du clavier
    const valeur = e.key;
    //calculer(valeur)
    console.log(e.key)
    if (e.key > 95 && e.key < 106) {
        operation.innerHTML += e.key
        console.log(operation.innerHTML);
    }
})

touches.forEach(element => {
    element.addEventListener('click', (e))
});

function ajouteChiffre(val) {
    operation.innerHTML += val;
    console.log(operation.innerHTML);
}

function ajouteDecimal(val){
operation.innerHTML += val;
cmpt = 1;
}

function ajouteOperation(val) {
    if(cmpt == 0)
        input1 = numerique(operation.innerHTML);
    else
        input1 = parseFloat(operation.innerHTML);
    resetNombre();
    operation.innerHTML = val;
    operat = val;
    console.log(operation.innerHTML);
    resetNombre();
}

function calculTrigo(val){
    input1 = numerique(operation.innerHTML);
    resetNombre();
    operation.innerHTML = val;
    operat = val;
    console.log(operation.innerHTML);
    calculAngle();
}

function calculAngle() {
    if (operat == 'COS') {
        resultatFinal = Cosinus(input1);
        console.log(resultatFinal);
        resultat.innerHTML = resultatFinal;
        operation.innerHTML = operat + '(' + input1 +')';
    }
    else if(operat == 'SIN'){
        resultatFinal = Sinus(input1);
        console.log(resultatFinal);
        resultat.innerHTML = resultatFinal;
        operation.innerHTML = operat + '(' + input1 + ')';
    }
    else if(operat == 'TAN'){
        resultatFinal = Tangente(input1);
        console.log(resultatFinal);
        resultat.innerHTML = resultatFinal;
        operation.innerHTML = operat + '(' + input1 + ')';
    }
    else if (operat == 'LOG') {
        resultatFinal = Logarithme(input1);
        console.log(resultatFinal);
        resultat.innerHTML = resultatFinal;
        operation.innerHTML = operat + '(' + input1 + ')';
    }
    else if(operat == 'X²')
    {
        resultatFinal = puissance(input1, 2);
        console.log(resultatFinal);
        resultat.innerHTML = resultatFinal;
        operation.innerHTML = input1 + '²';
    }
}

function resetNombre() {
    operation.innerHTML = '';
    resultat.innerHTML = '';
    console.log(operation.innerHTML);
}

function calculer()
{
    if (operat == '+')
    {
        resultatFinal = Addition(input1, input2);
    }
    else if(operat == '-')
    {
        resultatFinal = Soustraction(input1, input2);
    }
    else if(operat == '/')
    {
        resultatFinal = Division(input1, input2);
    }
    else if(operat == '*')
    {
        resultatFinal = Multiplication(input1, input2);
    }
    else if (operat == '%')
    {
        resultatFinal = Modulo(input1, input2);
    }
    else if (operat == '^') {
        resultatFinal = puissance(input1, input2)
    }
}

function afficheOperation() {
    operation.innerHTML = input1;
    operation.innerHTML += ' ';
    operation.innerHTML += operat;
    operation.innerHTML += ' ';
    operation.innerHTML += input2;
}

document.querySelector('.button.egale').addEventListener('click', (e)=>{
    input2 = numerique(operation.innerHTML);
    resetNombre();
    afficheOperation();
    calculer();
    let valeur_operation = operation.innerHTML;
    numerique(valeur_operation);
    console.log(resultatFinal);
    resultat.innerHTML = resultatFinal;
})

function $id(id) {
    return document.getElementById(id);
}

function Addition(n1, n2) {
    return (n1 + n2);
}

function Soustraction(n1, n2) {
    return (n1 - n2);
}

function Multiplication(n1, n2) {
    return (n1 * n2);
}

function Division(n1, n2) {
    return (n1 / n2);
}

function Modulo(n1, n2) {
    return n1 % n2;
}

function Cosinus(input1) {
    return Math.cos(input1);
}

function Sinus(input1) {
    return Math.sin(input1);
}

function Tangente(input1) {
    return Math.tan(input1);
}

function Logarithme(input1){
    return Math.log(input1);
}

function puissance(nombre, exposant) 
{ 
    let resultat = 1; 
    for (let compteur = 0; compteur < exposant; compteur++) 
        resultat *= nombre; 
    return resultat; 
}

function numerique(n) {
    n = n.split();
    let taille = n.length ;
    let dix = 10;
    let nombre = 1;
    let resultat = 0;

    for(let i = taille-1; i >= 0; i--)
    {
        dix = puissance(10, i)
        console.log(n[i]);
        nombre = parseInt(n[i])*dix;
        resultat += nombre;
    }
    return resultat;
}