// 1. change h1 content to your name
let name = document.querySelector("h1");
name.textContent = "Jane Doe";

// 2. change content with a 'quote' class to bold font
let quote = document.querySelector(".quote");
quote.style.fontWeight = "bold";

// 3. hide content with the id of 'hideMe' (hint explore the css property 'display')
let hideMe = document.querySelector("#hideMe");
hideMe.style.display = "none";

// 4. hide all content with the id of 'hideAll' (note: querySelectorAll returns an array, you will need to access each index in the array)
let hideAll = document.querySelectorAll("#hideAll");

// OPTION A
for (let i = 0; i < hideAll.length; i++) {
  hideAll[i].style.display = "none";
}

// OPTION B
// forEach((item) => (item.style.display = "none"));
