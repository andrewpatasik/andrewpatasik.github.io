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
let navbar = document.getElementById('navbar');
let frame1 = document.getElementById('frame-1');
let frame2 = document.getElementById('frame-2');
let frame3 = document.getElementById('frame-3');
let frameNav1 = document.getElementById('frame-nav-1');
let frameNav2 = document.getElementById('frame-nav-2');
let frameNav3 = document.getElementById('frame-nav-3');
let screenWidth = screen.width;

function phoneScreen() {
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

    if (screenWidth <= 900) {
        list1.innerHTML = '';
        list2.innerHTML = '';
        list3.innerHTML = '';

        list1.appendChild(ic1);
        list2.appendChild(ic2);
        list3.appendChild(ic3);
    }
    console.log(screenWidth);
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

    if (w <= 900) {
        list1.innerHTML = '';
        list2.innerHTML = '';
        list3.innerHTML = '';

        list1.appendChild(ic1);
        list2.appendChild(ic2);
        list3.appendChild(ic3);
    } else if (w > 900) {
        list1.removeChild(list1.childNodes[0]);
        list1.textContent = 'blog';
        list2.removeChild(list2.childNodes[0])
        list2.textContent = 'projects';
        list3.removeChild(list3.childNodes[0])
        list3.textContent = 'curriculum vitae';
    }

})


// if scroll, focus
let isScrolling;
window.addEventListener('scroll', (e) => {
    // focus navbar when scrolling
    navbar.classList.add('focus');
    // clear timeout event
    window.clearTimeout(isScrolling);
    //timeout event to blur navbar if not scrolling
    isScrolling = setTimeout(() => {
        navbar.classList.remove('focus');
    }, 1000);
})

phoneScreen();

// frame1.addEventListener('mouseover', () => {
//     frameNav1.classList.add('pop');
// })

// frameNav1.addEventListener('mouseover', () => {
//     frameNav1.classList.add('pop');
// })

// frameNav1.addEventListener('mouseout', () => {
// frameNav1.classList.remove('pop');

// })

// frame2.addEventListener('mouseover', () => {
//     frameNav2.classList.add('pop');
// })

// frameNav2.addEventListener('mouseover', () => {
//     frameNav2.classList.add('pop');
// })

// frameNav2.addEventListener('mouseout', () => {
// frameNav2.classList.remove('pop');

// })

// frame3.addEventListener('mouseover', () => {
//     frameNav3.classList.add('pop');
// })

// frameNav3.addEventListener('mouseover', () => {
//     frameNav3.classList.add('pop');
// })

// frameNav3.addEventListener('mouseout', () => {
// frameNav3.classList.remove('pop');

// })