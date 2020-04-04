//question 1
var myFunctionExpression = function(){
    console.log("Kristin");
}

//question 2
const btn = document.querySelector(".btn");
btn.addEventListener("click", btnClicked);

function btnClicked(){
    console.log("I was clicked");
};

//question 3
const inputField = document.querySelector("#firstname");
inputField.addEventListener("keydown", function(event){
    console.log(event.key);
});

//question 4
const animalButton = document.querySelector("button");
animalButton.addEventListener("mouseover", function(){
    animalButton.classList.add("hover");
});

//question 5
const animalButton2 = document.querySelector("[data-animal='dog']");
animalButton2.addEventListener("mouseout", function(){
    animalButton2.classList.remove("hover");
});


//question 6
const liTags = document.querySelectorAll("li");

console.log(liTags);

for(let i = 0; i < liTags.length; i++){
    liTags[i].addEventListener("mouseover", function(){
        console.log(liTags[i].dataset.animal);
    });
}

//question 7
const animal = "cow";

switch(animal){

    case "cat":
        console.log("Meow");
        break;

    case "cow":
        console.log("Moo");
        break;
    
    case "bird":
        console.log("Tweet");
        break;
    default:
        console.log("Harrumph");
}

//question 8
const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(sheepSingular){
    console.log(sheepSingular);
});

//question 9
function sayHello() {
    console.log("Hello");

    if(counter === 5) {
        clearInterval(intervalId);
    }
    counter++;

}

let counter = 0;

const intervalId = setInterval(sayHello, 500);

//question 10
const divContainer = document.querySelector(".container");

function updateDiv(){
    divContainer.innerHTML = "Text updated";
}

setTimeout(updateDiv, 2000);
