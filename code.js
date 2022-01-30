// 1. change h1 text content to your name


let myName = document.querySelector('h1')
myName.textContent = 'Matthew Rhoades';


// 2. change the body background color to any color

let background = document.querySelector('body');
background.style.backgroundColor = 'red';

// or

document.querySelector('body').style.backgroundColor = 'green'

// 3. change content with a 'quote' class to bold font

document.querySelector('.quote').style.fontWeight = 'bold';

// 4. hide content with the id of 'hideMe' (hint: explore the css property 'display')

let hideMe = document.querySelector('#hideMe')
hideMe.style.display = 'none';


// 5. hide all content with the id of 'hideAll' (note: querySelectorAll returns an array, you will need to access each index in the array)

// let hideAll = document.querySelectorAll('#hideAll');

for(let i = 0; i < hideAll.length; i++) {
    hideAll[i].style.display = 'none';
}

// or


let hideAllArray = document.querySelectorAll('#hideAll');

hideAllArray.forEach((item) => {
    item.style.display = 'none';
});

