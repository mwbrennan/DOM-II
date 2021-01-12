// Your code goes here ..

// click

let btn = document.querySelector('.btn');
btn.addEventListener('click', (event) => {
    alert('Are you sure??');
})

// mouseover

let links = document.querySelector('.nav-link');
links.addEventListener('mouseover', (event) => {
    event.target.style.color = 'teal';
    setTimeout(function() {
        event.target.style.color = '';
    }, 500);
},false )

// dblclick

let boatPicture = document.querySelector('.img-fluid');
boatPicture.addEventListener('dblclick', (event) => {
    prompt('do you want to go for a boat ride?');
})

// keydown

document.addEventListener('keydown', (e) => {
    if(e.key === 'P' || 'p') {
        document.body.style.backgroundColor = 'purple';
    }
    setTimeout(function() {
        document.body.style.backgroundColor = '';
    }, 1000);
}, false)

// mousedown

let logo = document.querySelector('.logo-heading');
logo.addEventListener('mousedown', (e) => {
    document.body.style.backgroundColor = 'teal';
    setTimeout(function() {
        document.body.style.backgroundColor = '';
    }, 1000);
}, false)


// scroll

document.addEventListener('scroll', (e) => {
    last_known_scroll_position = window.scrollY;
})

// mouseleave

let main = document.querySelector('.content-destination');
main.addEventListener('mouseleave', (e) => {
    document.body.style.backgroundColor = 'yellow';
        setTimeout(function() {
        document.body.style.backgroundColor = '';
    }, 1000);
}, false)

//

links.addEventListener('click', (e) => e.preventDefault())