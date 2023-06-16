gsap.registerPlugin(ScrollTrigger);

// smooth scrolling container
const smoother = ScrollSmoother.create({
     // wrapper: ".body",
     // content: ".scroll_smoother",
     smooth: 0.6,

});
/* After Adding New Content to DOM */
smoother.refresh();

document.querySelector('.button').onmousemove = function (e) {

     var x = e.pageX - e.target.offsetLeft;
     var y = e.pageY - e.target.offsetTop;

     e.target.style.setProperty('--x', x + 'px');
     e.target.style.setProperty('--y', y + 'px');
};


// let sections = gsap.utils.toArray(".section");

// gsap.to(sections, {
//   yPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".content",
//     pin: true,
//     scrub: 1,
//     snap: {
//       snapTo: 1 / (sections.length - 1),
//       duration: 0.05
//     },
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     end: "+=3500",
//   }
// });
