import typing from "./typing";

typing();

let list1 = document.getElementById('li_blog');
let list2 = document.getElementById('li_project');
let list3 = document.getElementById('li_cv');
let navigation = document.querySelector('.navigation');
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
    var w = window.innerWidth;

    if (w <= 720) {
        list2.classList.add('hid');
        list1.classList.add('hid');
        list3.classList.add('hid');
        dropdownItem.getElementsByTagName('DIV')[0].classList.add('hid');
    } else if (w > 720){
        list2.classList.remove('hid');
        list1.classList.remove('hid');
        list3.classList.remove('hid');
        dropdownItem.getElementsByTagName('DIV')[0].classList.remove('hid');
    }

})

phoneScreen();

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