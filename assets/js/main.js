$(function () {
     gsap.registerPlugin(ScrollTrigger);

     // GSAP Animation
     // const tl = gsap.timeline();
     // smooth scrolling container
     // const smoother = ScrollSmoother.create({
     //      wrapper: ".body",
     //      content: ".scroll_smoother",
     //      smooth: 0.8,

     // });
     // /* After Adding New Content to DOM */
     // smoother.refresh();
});

document.querySelector('.button').onmousemove = function (e) {

     var x = e.pageX - e.target.offsetLeft;
     var y = e.pageY - e.target.offsetTop;

     e.target.style.setProperty('--x', x + 'px');
     e.target.style.setProperty('--y', y + 'px');
};

