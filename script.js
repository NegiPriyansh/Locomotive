let v1 = document.querySelector(".ri-add-fill");

let isMenuOpen = false; 

v1.addEventListener("click", function () {
    if (!isMenuOpen) {
        gsap.to("#menu p", {
            x: 20,
            opacity: 0,
            stagger: "0.1",
        });
        gsap.to("#menu i", {
            rotate: "90deg",
        });
    } else {
        gsap.to("#menu p", {
            x: 0,
            opacity: 1,
            stagger: "-0.1",
        });
        gsap.to("#menu i", {
            rotate: "45deg",
        });
    }
    isMenuOpen = !isMenuOpen;
});

let text = document.querySelector("#footup").addEventListener("click",function(){
    scroll.scrollTo(0);
})



function animation1(){
let tl = gsap.timeline();
tl.to("#yellow1",{
    top:"-100%",
    delay:0.5,
    duration:0.5,
    ease:"expo.out"
})

tl.from("#yellow2",{
    top:"100%",
    delay:0.5,
    duration:0.5,
    ease:"expo.out"
},"anim")
tl.to("#loader h1",{
    color:"black",
    delay:0.6
},"anim")
tl.to("#loader",{
    opacity:0,
    display:"none",
})
tl.to("#nav",{
    duration:0.4,
    delay:0.1
},"anim")

tl.from("#menu p",{
    x:20,
    opacity:0,
    stagger:0.1,
})
}



animation1();




const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elem=document.querySelectorAll('.elem');
var page = document.querySelector("#page2")
elem.forEach(function(ele){
    ele.addEventListener('mouseenter',function(){
        var bgimg = ele.getAttribute("src");
        page.style.backgroundImage=`url(${bgimg})`;
    })
    ele.addEventListener('mouseleave',function(){
        page.style.backgroundImage="none"
        page.style.backgroundColor="#000";
    })
})