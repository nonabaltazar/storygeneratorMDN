
var getName = document.getElementById("customname");
const isUs = document.getElementById("us");
const isUK = document.getElementById("uk");
const random = document.getElementById("randomize");
const story = document.getElementById("story");
const nameBtn = document.getElementById("newName");
const customTemp = document.getElementById("customTemp");
const customTempBtn = document.getElementById("customTempbutton");
const radioBTNS = document.querySelector(".radio");
let randomCharacter;
let randomStoryPlace;
let randomStoryAction;
let temp;
let tempC;
let tempF;

const char = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];

const place = ['the soup kitchen', 'Disneyland', 'the White House'];

const action = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];
 

function temperature() {
        if (us.checked == true && customTemp.value !== '') {
        temp = customTemp.value;
        tempF = ((temp * 1.8) + 32).toFixed(2);
        console.log("one");
        // customTemp.value = tempF;
        temp = tempF + "Degrees Fahrenheit"
        generateStoryTemp();
        customTemp.value= tempF;
        
        } else if (uk.checked == true & customTemp.value !== '') {
        temp =  customTemp.value;
        tempC = ((temp - 32) * (5/9)).toFixed(2);
        // customTemp.value = tempC;
        temp = tempC + "Degrees Celcius"
        generateStoryTemp();
        customTemp.value=tempC;
        console.log("two");             
    } else if (us.checked==true && customTemp.value =='') {
        temp = "90 Degrees Fahrenheit";
        generateStoryTemp();
        console.log("5");
    } else {
        temp = "34 Degrees Fahrenheit"
        generateStoryTemp();
        console.log("6");
    }
};

function temperatureNC(){
    if (us.checked == true && customTemp.value !==''){
        temp = customTemp.value + " Degrees Fahrenheit"
        generateStoryTemp();
        return tempF = customTemp.value
            } else if (uk.checked ==true && customTemp.value !==''){
        temp = customTemp.value + " Degrees Celcius"
        generateStoryTemp();
        return tempC = customTemp.value;
           }
}


function randomChar() {
    return randomCharacter = char[Math.floor(Math.random() * place.length)];
}

function randomPlace() {
    return randomStoryPlace = place[Math.floor(Math.random() * place.length)];
}

function randomAction() {
    return randomStoryAction = action[Math.floor(Math.random() * place.length)];
}

function getCustomName() {
    if (getName.value !== '') {
        return name = getName.value
    }
    else {
        return name = "Bob";
    }
};

function generateRandoms(){
    getCustomName();
    randomChar();
    randomPlace();
    randomAction();
    temperature();
}


function generateNewStory() {
    generateRandoms();
    story.style.visibility = "visible";
    story.innerHTML = "It was " + temp + " outside, so " + randomCharacter + " went for a walk. When they got to " + randomStoryPlace + " , they stared in horror for a few moments, then " + name + " saw the whole thing, but was not surprised — " + randomCharacter + " weighs 300 pounds, and it was a hot day.";
}

function generateFirstStory() {
    
    generateRandoms();
    story.style.visibility = "hidden";
    story.innerHTML = "It was " + temp + " outside, so " + randomCharacter + " went for a walk. When they got to " + randomStoryPlace + " , they stared in horror for a few moments, then " + name + " saw the whole thing, but was not surprised — " + randomCharacter + " weighs 300 pounds, and it was a hot day.";
}

function generateStoryTemp() {
    getCustomName();
    story.style.visibility = "visible";
    story.innerHTML = "It was " + temp + " outside, so " + randomCharacter + " went for a walk. When they got to " + randomStoryPlace + " , they stared in horror for a few moments, then " + name + " saw the whole thing, but was not surprised — " + randomCharacter + " weighs 300 pounds, and it was a hot day.";
}


function generateStory() {
    getCustomName();
    temperature();
    story.style.visibility = "visible";
    story.innerHTML = "It was " + temp + " outside, so " + randomCharacter + " went for a walk. When they got to " + randomStoryPlace + " , they stared in horror for a few moments, then " + name + " saw the whole thing, but was not surprised — " + randomCharacter + " weighs 300 pounds, and it was a hot day.";
}


function eventHandler(e) {
    if (e.keyCode === 13 && getName.value !== '') {
        generateStory();
    }
    else if (getName.value === '' && e.keyCode ===13) {
        nameBtn.disabled = true;
    }
}


window.addEventListener("load", generateFirstStory)
nameBtn.addEventListener("click", temperature);
random.addEventListener("click", generateNewStory);
// uk.addEventListener("click", temperature);
// us.addEventListener("click", temperature);
window.addEventListener("keypress", eventHandler)
customTempBtn.addEventListener("click", temperatureNC);
uk.onchange = temperature;
us.onchange = temperature;MKDIR