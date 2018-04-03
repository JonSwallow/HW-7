/* I am going to comment in blocks to the best of my ability to keep this rather neat.
first lines 11 through 19 I am establishing variables with let in order to identify them in later code.
lines 9 through 11 I am creating text node elements*/



let body = document.body;
let el = document.createElement("div");
let elChild = document.createElement("h1");
let elChild2 = document.createElement('p');
let elChild3 = document.createElement('P');
let btEl = document.querySelector('#b1');
let btEl2 = document.querySelector('#b2');
let textEl = document.querySelector(".extra-text-container");
let textEl2 = document.querySelector(".another-text-container");
let textEl3 = document.querySelector(".original-text-container");
let imgEl1 = document.querySelector(".img1");
let divEl1 = document.querySelector(".storageDiv");
let divEl2= document.querySelector(".slideshow-container")
let formEl1 = document.querySelector(".nameForm");


/*Defining the text within the text nodes I just created above lines 22 through 25.
Lines 28 and 29 I am stylizing the output via javascript */

elChild.innerText = "CHOOSE WISELY";
elChild2.innerText="There are choices that seem easy and some that seem difficult. In the end the flapping of a butterflies wings can change the world, so how are we to know if our choices are correct?";
elChild3.innerText="Perhaps we have already made our choices, for better or worse. Perhaps we only need to understand the choices we have made.";
elChild2.setAttribute("style","padding:0em; margin:0; font-style:italic; text-align:center; color: white;  text-shadow: 2px 2px #030303;");
elChild3.setAttribute("style","padding:0em; margin:0;  font-style:italic;  text-align:center; color:white;  text-shadow: 2px 2px #030303;");

/*Lines 34 and 35 I am adding event listeners when clicked the named function is performed*/

btEl.addEventListener("click", showHideText);
btEl2.addEventListener("click", showHideText2);

/*Setting some more stylizing attributes through javascript*/
divEl2.setAttribute("style","text-align: center");
imgEl1.setAttribute("style","text-align: center");

/*Function for the slideshow let us look at it line by line shall we?
Line 49 declaring a variable and a starting point for the slideshow.
Line 50 declaring the function, line 52 defining the function. Lines 53 through 55 declaring variables.
Line 56 for statement incrementing slides. Line 59 actual incrementation statment.
Lines 61 throught 64 for if statement which increments as well as replacing making the fade effect work.
Lines 66 and 67 stylizing slides and identifying active slide.
line 68 setting the time out for 2 seconds.
*/
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000);
}

/* This is your function from the lesson. Line 80 Defining the function.
Line 81 declaring the variable, line 82 assigning value to the variable.
Line 84 if statement which checks for text and if none is present pops up an alert.
So I added a function in HTML which allow only one click I specified in the alert that the browser must be
refreshed not much of a workaround but it does allow the user to make it function.
Lines 87 through 89 creating text noes which will appear upon execution of the function. (Not a great technical writer sorry)
Lines 91 though 93 creating paragraph elements. Lines 95 through 97 appending the text nodes with paragraphs.
Line 99 defining the storage division. Lines 101 through 103 appending the text to the division.*/

function grabText() {
    let textIn;
    textIn = document.querySelector("#textIn1").value;

    if( textIn.length < 1){ alert("Please refresh the browser and enter a name!"); return }


    let textToAdd = document.createTextNode("Hello "+textIn+" welcome to the question!");
    let textToAdd2 = document.createTextNode(textIn+ " is freedom of choice an illusion?");
    let textToAdd3 = document.createTextNode("You must make the choice " +textIn+ ".");

    let newP = document.createElement("P");
    let newP2= document.createElement("P");
    let newP3= document.createElement("P");

    newP.appendChild(textToAdd);
    newP2.appendChild(textToAdd2);
    newP3.appendChild(textToAdd3);

    let storage = document.querySelector("#storageDiv");

    storage.appendChild(newP);
    storage.appendChild(newP2);
    storage.appendChild(newP3);
}

/*defining the button and declaring the action and function through an event listener*/
document.querySelector("#runButton").addEventListener( 'click',grabText);

/*The next two functions are pretty much identical. They came from the lesson as well.
First declare and define function. Changing the text on the button. Declaring what is hidden and what is not.
Stylizing the background and then changing it through a timeout function. Set to 3 seconds. After the else
statement we set everything back to where it was at the beginning effectively giving us a return function.
*/

function showHideText() {
    if(textEl.hidden){
        btEl.innerText = "Return";
        textEl.hidden = false;
        divEl2.hidden = false;
        formEl1.hidden = true;
        divEl1.hidden= true;
        textEl3.hidden = true;
        textEl2.hidden= true;
        btEl2.hidden=true;
        el.hidden=true;

        body.style.background = "#030303 url('images/lightBack.jpg') repeat right top";
         setTimeout(()=>{body.style.background = "#030303 url('images/blueBack.jpg') repeat right top" ;}, 3000 );

    } else {
        btEl.innerText = "Red Button";
        textEl.hidden = true;
        divEl2.hidden=true;
        formEl1.hidden = false;
        divEl1.hidden=false;
        textEl3.hidden=false;
        btEl2.hidden=false;
        el.hidden=false;

        body.style.background = "#030303 url('./images/darkBack.jpg') repeat right top";
    }
}

function showHideText2() {
    if(textEl2.hidden){
        btEl2.innerText = "Return";
        textEl2.hidden = false;
        imgEl1.hidden=false;
        formEl1.hidden= true;
        divEl1.hidden=true;
        textEl3.hidden=true;
        textEl.hidden=true;
        btEl.hidden=true;
        el.hidden=true;

        body.style.background = "#030303 url('images/orangeBack.jpg') repeat right top";
        setTimeout(()=>{body.style.background = "#030303 url('images/orangeBack2.jpg') repeat right top" ;}, 3000 );

    } else {
        btEl2.innerText = "Blue Button";
        textEl2.hidden = true;
        imgEl1.hidden=true;
        formEl1.hidden=false;
        divEl1.hidden= false;
        textEl3.hidden=false;
        btEl.hidden=false;
        el.hidden=false;

        body.style.background = "#030303 url('images/darkBack.jpg') repeat right top";
    }
}



/* Stylizing the body with the original image */

body.style.padding = "0 em";
body.style.margin="0 em";
body.style.background = "#030303 url('./images/darkBack.jpg') repeat right top";

/* Appending the text to text nodes we created up top and then appending to the body */


el.appendChild(elChild);
el.appendChild(elChild2);
el.appendChild(elChild3)
body.appendChild(el);
