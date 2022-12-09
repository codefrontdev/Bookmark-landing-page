let btnMenu = document.querySelector(".navbar .btn-menu");
let menu = document.querySelector(".navbar .menu");
let logoMenu = document.querySelector(".navbar .menu .logo-menu");
let socialLink = document.querySelector(".navbar .social-link");
let btnClose = document.querySelector(".navbar .btn-close");
let logo = document.querySelector(".navbar .logo");
btnMenu.onclick = function () {
    menu.classList.add("active");
    logoMenu.classList.add("active");
    socialLink.classList.add("active");
    logo.classList.add("active");
    btnMenu.classList.add("active");
    btnClose.onclick = function () {
        menu.classList.remove("active");
        logoMenu.classList.remove("active");
        socialLink.classList.remove("active");
        logo.classList.remove("active");
        btnMenu.classList.remove("active");
    };
}



let arrayShow = document.querySelectorAll(".show .team-link");
let contentFeatures = document.querySelectorAll(".content-features");




arrayShow.forEach(function (e) {
    e.onclick = function (x) {
        x.preventDefault();
        arrayShow.forEach(function (ele) {
            ele.classList.remove('active');
        })
        this.classList.add('active')
        contentFeatures.forEach(function (a) {
            if (a.getAttribute("data-name") == e.getAttribute("data-name")) {
                a.removeAttribute("id","active")
            } else
            {
                a.setAttribute("id","active")
            }
        })
    }
})


let arrayQuestion = document.querySelectorAll(".content .question");
let arrayIcon = document.querySelectorAll(".content .question .img");
let arrayAnswer = document.querySelectorAll(".content .answer");

arrayQuestion.forEach((e) => {
    e.onclick = function () {
        arrayAnswer.forEach((x) => {
            if (e.getAttribute("data-num") == x.getAttribute("data-num")) {
                if (x.classList.contains("active")){
                    x.classList.remove('active');
                    arrayIcon.forEach((k) => {
                        if (e.getAttribute("data-num") == k.children[0].getAttribute("data-num"))
                        {
                                k.classList.add("rotate");
                                k.children[0].src = "images/icon-arrow copy.svg";
                        } else {
                                k.classList.remove("rotate")
                                k.children[0].src = "images/icon-arrow.svg";
                        } 
                    })
                } else {
                    arrayIcon.forEach((k) => {
                                k.classList.remove("rotate");
                                k.children[0].src = "images/icon-arrow.svg";
                    })
                    x.classList.add('active');
                }
            } else {
                x.classList.add('active');
            }
        })
    }
});

// Validation form of exprition

let inputEmail = document.getElementById("input-email");
// let submit = document.getElementById("submit");

// submit.onclick = 
function red() {
    // e.preventDefault();
    let checkForm = inputEmail.value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/g);
    if (checkForm == null) {
        console.log(inputEmail.value)
        document.querySelector(".input span").classList.add("notvalid");
        document.querySelector(".input").classList.add("notvalid");
    }
    else {
        console.log(checkForm)
        document.querySelector(".input span").classList.remove("notvalid");
        document.querySelector(".input").classList.remove("notvalid");
    }
}


// if hover chenges img

let imgHover = document.querySelectorAll(".footer .footer-link img");

function hoverIndexOne() {
    imgHover[0].src = "images/logo-bookmark copy 2.svg";
    imgHover[0].onmouseleave = function () {
        imgHover[0].src = "images/logo-bookmark copy.svg";
    }
}
function hoverIndexTwo() {
    imgHover[1].src = "images/icon-facebook copy.svg";
    imgHover[1].onmouseleave = function () {
        imgHover[1].src = "images/icon-facebook.svg";
    }
}
function hoverIndexThree() {
    imgHover[2].src = "images/icon-twitter copy.svg";
    imgHover[2].onmouseleave = function () {
        imgHover[2].src = "images/icon-twitter.svg";
    }
}
// imgHover[0].h

console.log(imgHover)