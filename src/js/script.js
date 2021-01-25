import "./typing";
import typing from "./typing";

typing();

let list1 = document.getElementById('li_blog');
let list2 = document.getElementById('li_project');
let list3 = document.getElementById('li_cv');
let navigation = document.querySelector('.navigation');
let navbar = document.getElementById('navbar');
let project1 = document.getElementById('project-1');
let project2 = document.getElementById('project-2');
let project3 = document.getElementById('project-3');
let pItem1 = document.getElementById('p-item-1');
let pItem2 = document.getElementById('p-item-2');
let pItem3 = document.getElementById('p-item-3');
let dropdownBtn = document.getElementById('dropdown-btn');
let dropdownItem = document.getElementById('dropdown-item');
let screenWidth = window.outerWidth;

function phoneScreen() {
    // let ic1 = document.createElement('i');
    // ic1.classList.add('fa');
    // ic1.classList.add('fa-pencil-square-o');
    // ic1.setAttribute('aria-hidden', 'true');
    // let ic2 = document.createElement('i');
    // ic2.classList.add('fas');
    // ic2.classList.add('fa-code');
    // let ic3 = document.createElement('i');
    // ic3.classList.add('far');
    // ic3.classList.add('fa-id-badge');

    if (screenWidth <= 650) {
        // list1.innerHTML = '';
        // list2.innerHTML = '';
        // list3.innerHTML = '';

        // list1.appendChild(ic1);
        // list2.appendChild(ic2);
        // list3.appendChild(ic3);

        list2.classList.add('hid');
        list1.classList.add('hid');
        list3.classList.add('hid');
        dropdownItem.getElementsByTagName('DIV')[0].classList.add('hid');
    }
    // console.log(screenWidth);
}

window.addEventListener('resize', () => {
    var w = window.outerWidth;
    let ic1 = document.createElement('i');
    ic1.classList.add('fa');
    ic1.classList.add('fa-pencil-square-o');
    ic1.setAttribute('aria-hidden', 'true');
    let ic2 = document.createElement('i');
    ic2.classList.add('fas');
    ic2.classList.add('fa-code');
    let ic3 = document.createElement('i');
    ic3.classList.add('far');
    ic3.classList.add('fa-id-badge');

    if (w > 650) {
        list1.innerHTML = '';
        list2.innerHTML = '';
        list3.innerHTML = '';

        list1.appendChild(ic1);
        list2.appendChild(ic2);
        list3.appendChild(ic3);

        list2.classList.remove('hid');
        list1.classList.remove('hid');
        list3.classList.remove('hid');
        dropdownItem.getElementsByTagName('DIV')[0].classList.remove('hid');
    } 
    if (w <= 650) {
        list2.classList.add('hid');
        list1.classList.add('hid');
        list3.classList.add('hid');
        dropdownItem.getElementsByTagName('DIV')[0].classList.add('hid');

        list1.removeChild(list1.childNodes[0]);
        list1.textContent = 'HOME';
        list2.removeChild(list2.childNodes[0])
        list2.textContent = 'PROJECTS';
        list3.removeChild(list3.childNodes[0])
        list3.textContent = 'CV';
    } 
    if (w > 900) {
        list1.removeChild(list1.childNodes[0]);
        list1.textContent = 'HOME';
        list2.removeChild(list2.childNodes[0])
        list2.textContent = 'PROJECTS';
        list3.removeChild(list3.childNodes[0])
        list3.textContent = 'CV';

        list2.classList.remove('hid');
        list1.classList.remove('hid');
        list3.classList.remove('hid');
        dropdownItem.getElementsByTagName('DIV')[0].classList.remove('hid');
    }

})


// if scroll, focus
// let isScrolling;
// window.addEventListener('scroll', (e) => {
//     // focus navbar when scrolling
//     navbar.classList.add('focus');
//     // clear timeout event
//     window.clearTimeout(isScrolling);
//     //timeout event to blur navbar if not scrolling
//     isScrolling = setTimeout(() => {
//         navbar.classList.remove('focus');
//     }, 1000);
// })

phoneScreen();

project1.addEventListener('mouseover', () => {
    pItem1.classList.add('show');
}, false);

project1.addEventListener('mouseout', () => {
    pItem1.classList.remove('show');
}, false);

project2.addEventListener('mouseover', () => {
    pItem2.classList.add('show');
}, false);

project2.addEventListener('mouseout', () => {
    pItem2.classList.remove('show');

}, false);

project3.addEventListener('mouseover', () => {
    pItem3.classList.add('show');
}, false);

project3.addEventListener('mouseout', () => {
    pItem3.classList.remove('show');
}, false);

dropdownBtn.addEventListener('click', (e) => {
    list1.classList.toggle('hid');
    list2.classList.toggle('hid');
    list3.classList.toggle('hid');
    dropdownItem.getElementsByTagName('DIV')[0].classList.toggle('hid');
    // console.log(dropdownItem.getElementsByTagName('DIV'));
});

window.addEventListener('click', (e) => {
    var w = window.outerWidth;
    if(w <= 650) {
        if (e.target !== dropdownBtn) {
            list1.classList.add('hid');
            list2.classList.add('hid');
            list3.classList.add('hid');
                dropdownItem.getElementsByTagName('DIV')[0].classList.add('hid');
            }
    }
})

window.addEventListener('scroll', () => {
    if (window.scrollY == 0) {
        navigation.classList.remove('grey');
        navigation.classList.add('gradient-bg');
        console.log('top');
    } else {
        navigation.classList.remove('gradient-bg');
        navigation.classList.add('grey');
    }
})