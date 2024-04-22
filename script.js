const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function circleMouseFolower() {
    window.addEventListener('mousemove', function (dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;

    })
}

function animation1(params) {
    var tl = gsap.timeline();
    tl.from("#nav", {
        y: -10,
        duration: 1.5,
        ease: Expo.easeInOut,
        opacity: 0,
    });

    tl.to(".boundingelem", {
        y: 0,
        duration: 2,
        ease: Expo.easeInOut,
        stagger: .2,
        delay: -1

    });

    tl.from("#footer", {
        y: -10,
        duration: 1.5,
        ease: Expo.easeInOut,
        opacity: 0,
        delay: -1
    });
}

var scalex = 1;
var scaley = 1;

var prevx = 0;
var prevy = 0;

function skewcircle() {
    window.addEventListener("mousemove", function (dets) {
        scalex = gsap.utils.clamp(.8, 1.2, dets.clientX - prevx)
        scaley = gsap.utils.clamp(.8, 1.2, dets.clientY - prevy)
        prvex = dets.clientX;
        prevy = dets.clientY;
        circleMouseFolower(scalex, scaley);
    })
}

// code for images move on x-axis at class element 
document.querySelectorAll(".element").forEach(function (element) {

    element.addEventListener("mousemove", function (event) {
        var rect = element.getBoundingClientRect();
        var diffY = event.clientY - rect.top;
        var diffX = event.clientX - rect.left;

        var maxY = rect.height;
        var maxX = rect.width;
        var top = Math.min(maxY, Math.max(0, diffY));
        var left = Math.min(maxX, Math.max(0, diffX));

        gsap.to(element.querySelector("img"), {
            opacity: 1,
            top: top,
            left: left,
            duration: 0.5,
        });
    });

    element.addEventListener("mouseleave", function (dets) {

        gsap.to(element.querySelector("img"), {
            opacity: 0,
            ease: Power3,

        })

    })

})



circleMouseFolower();
animation1();
skewcircle();