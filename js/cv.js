new WOW().init();

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

let list1 = document.getElementById('li_blog');
let list2 = document.getElementById('li_project');
let list3 = document.getElementById('li_cv');
let navigation = document.querySelector('.navigation');
let navbar = document.getElementById('navbar');
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