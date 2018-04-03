let body = document.body;
let el = document.createElement("div");
let btEl = document.querySelector('#b1');
let btEl2 = document.querySelector('#b2');


btEl.addEventListener("click", showHideText);
btEl2.addEventListener("click", showHideText2);

//Here is where you  might write another function to change background calling same type of addEventListener
//btEl.addEventListener("click",changeBackground);

let textEl = document.querySelector(".extra-text-container");
let textEl2 = document.querySelector(".another-text-container");
let textEl3 = document.querySelector(".original-text-container");
let divEl1 = document.querySelector(".storageDiv")
let formEl1 = document.querySelector(".nameForm")

function grabText() {
    let textIn;
    // grab the text that is there
    textIn = document.querySelector("#textIn1").value;
    // console.log(textIn);
    // check if text is blank, if so, post a warning.
    if( textIn.length < 1){ alert("please enter a name"); return }

    // create a new node to add text to
    let textToAdd = document.createTextNode("Hello "+textIn+" welcome to my nightmare!");
    // create a new paragraph element
    let newP = document.createElement("P");
    // add the text to the elements
    newP.appendChild(textToAdd);
    // select the storage div
    let storage = document.querySelector("#storageDiv");
    // append the paragraph element to the div storage element
    storage.appendChild(newP);
}

document.querySelector("#runButton").addEventListener('click',grabText);

function showHideText() {
    if(textEl.hidden){
        btEl.innerText = "Return";
        textEl.hidden = false;
        formEl1.hidden = true;
        divEl1.hidden= true;
        textEl3.hidden = true;
        textEl2.hidden= true;
        btEl2.hidden=true;
        body.style.background = "#030303 url('images/lightBack.jpg') repeat right top";
         setTimeout(()=>{body.style.background = "#030303 url('images/blueBack.jpg') repeat right top" ;}, 800 );

    } else {
        btEl.innerText = "Red Button";
        textEl.hidden = true;
        formEl1.hidden = false;
        divEl1.hidden=false;
        textEl3.hidden=false;
        btEl2.hidden=false;
        body.style.background = "#030303 url('images/darkBack.jpg') repeat right top";
    }
}

function showHideText2() {
    if(textEl2.hidden){
        btEl2.innerText = "Return";
        textEl2.hidden = false;
        formEl1.hidden= true;
        divEl1.hidden=true;
        textEl3.hidden=true;
        textEl.hidden=true;
        btEl.hidden=true;
        body.style.background = "#030303 url('images/orangeBack.jpg') repeat right top";

    } else {
        btEl2.innerText = "Blue Button";
        textEl2.hidden = true;
        formEl1.hidden=false;
        divEl1.hidden= false;
        textEl3.hidden=false;
        btEl.hidden=false;
        body.style.background = "#030303 url('images/darkBack.jpg') repeat right top";
    }
}



body.style.padding = "0 em";
body.style.margin="0 em";
body.style.background = "#030303 url('images/darkBack.jpg') repeat right top";


body.appendChild(el);
