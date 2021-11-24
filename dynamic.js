const content = document.getElementById("content");
​
// lägg till ett element dynamiskt
​
// Alternativ A
// 1: skapa ett html element
let element = document.createElement("h2");
​
// 2: definera en text
let text = "Allt är inte guld som glimmar";
​
// 3: lägg till texten i elementet
element.append(text);
​
// 4: lägg till elementet på webbsidan
document.body.appendChild(element);
​
​
​
​
// Alternativ B
// 1: skapa ett html element
element = document.createElement("h3");
​
// 2: lägg till text med egenskapen innerText
element.innerText = "Det är ugglor i mossen";
​
// 3: lägg till elementet på webbsidan
document.body.appendChild(element);
​
​
​
​
// Alternativ C
// 1: skapa ett html element
element = document.createElement("h4");
​
// 2: lägg till text med egenskapen innerHTML
element.innerHTML = "Som man <i>bäddar</i> får man ligga";
​
// 3: lägg till elementet på webbsidan
document.body.appendChild(element);
​
​
​
// lägg till ett element i ett utvalt element
​
// ett element
let span = document.createElement("span");
​
// en text
let day = "Tisdag";
​
// lägg till texten i span elementet
span.append(day);
​
// det utvalda elementet: content
content.appendChild(span);
​
​
​
​
​
// använd formuläret för att skapa olika element
const form = document.querySelector("form");
​
// händelselyssnare för submit
form.addEventListener("submit", function() {
​
    // vilket element?
    let element = document.getElementById("element");
    console.log("Element: ", element, element.value);
​
    // obs - ska/bör valideras, ex vilka html element
    let elementValue = element.value;
​
    // vilken text?
    let text = document.getElementById("text");
    console.log("Text: ", text, text.value);
​
    // obs - ska/bör valideras, ex textValue.length
    let textValue = text.value;
​
    // skapa element
    let htmlElement = document.createElement(elementValue);
​
    // lägg till text
    htmlElement.innerText = textValue;
​
    // lägg till elementet i content
    content.appendChild(htmlElement);
​
});
​
// ta bort element från content ifall man inte vill ha det...
content.addEventListener("click", function(event) {
​
    let elementToRemove = event.target;
    elementToRemove.remove();   
});