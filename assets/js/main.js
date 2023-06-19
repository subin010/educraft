gsap.registerPlugin(ScrollTrigger);

// you only need to define the configuration settings you want to CHANGE. Omitted properties won't be affected.
gsap.config({
     autoSleep: 60,
     force3D: false,
     nullTargetWarn: false,
     trialWarn: false,
     units: {
          left: "%",
          top: "%",
          rotation: "rad"
     }
});
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

// third section 
function scroll_video() {

     gsap.set(".desktopContentSection", {
          zIndex: (i, target, targets) => targets.length - i
     });
     var texts = gsap.utils.toArray(".desktopContentSection");
     console.log(texts.length);
     texts.forEach((text, i) => {
          var tl = gsap.timeline({

               scrollTrigger: {
                    id: `text${i}`,
                    trigger: ".section_3",
                    // start: () => "top -" + window.innerHeight * i,
                    // end: () => "+=" + window.innerHeight,
                    start: "50% 50%",
                    end: "+=200%",
                    scrub: true,
                    // pin:".section_3",
                    markers: !0,
                    invalidateOnRefresh: true,
               }

          })
          console.log(window.innerHeight * i);
          tl.fromTo(text, {
                    y: () => {
                         return "100%"
                    },
                    opacity: () => {
                         return 0
                    }
               }, {
                    duration: 0.33,
                    y: () => {
                         return "50%"
                    },
                    opacity: () => {
                         return 1
                    }
               })
               .to(text, {
                    duration: 0.33,
                    y: () => {
                         return "0%"
                    },
                    opacity: () => {
                         return 0
                    }
               }, 0.66);
     });
}

viewport()
function viewport() {
     let videoElem = document.querySelector(".video-ux-design");
     let src = videoElem.currentSrc || videoElem.src;


     once(document.documentElement, "touchstart", function () {

               videoElem.play(), videoElem.pause();
          }),
          ScrollTrigger.create({
               trigger: videoElem,
               start: "top 70%",
               end: "bottom",
               // markers: !0,
               onEnter: () => videoElem.play(),
               onEnterBack: () => videoElem.play(),
               onLeave: () => videoElem.pause(),
               onLeaveBack: () => videoElem.pause()
          });
     //videoElem.play();
     let video_timeline = gsap.timeline({
          scrollTrigger: {
               trigger: ".section_3",
               start: "top top",
               // markers: !0,
               scrub: !0,
               pin: !0,
               toggleClass: "acceso"
          }
     });
     video_timeline
          // .call(scroll_video)
          .fromTo(
               ".macbook-display", {
                    backgroundColor: "transparent",
                    outline: "none"
               }, {
                    backgroundColor: "#373435",
                    duration: 5,
                    outline: ".5px solid #fff",
                    delay: 10,
               }
          )
          .fromTo(
               ".pa-hero-bg-overlay", {
                    opacity: 1

               }, {
                    opacity: 0,
                    duration: 1000,
                    delay: 1000
               }
          )
          .to(
               ".css-macbook", {
                    scale: 0.7,
                    duration: 3000,
                    // delay: 0
               }
          )

          .fromTo(
               ".video-ux-design", {
                    height: "100%",
                    objectFit: "cover"
               }, {
                    height: "-webkit-fill-available",
                    duration: 5
               }
          )
          .fromTo(
               ".macbook-screen", {
                    backgroundColor: "transparent"
               }, {
                    backgroundColor: "#4b4b4d",
                    duration: 2,
                    delay: 5
               }
          );
     let video_tl = gsap.timeline({
          defaults: {
               duration: 3
          },
          scrollTrigger: {
               trigger: videoElem,
               start: "center center",
               end: "+=600",
               scrub: !0
          }
     });
     once(videoElem, "loadedmetadata", () => {
               video_tl.fromTo(
                    videoElem, {
                         currentTime: 0.01
                    }, {
                         currentTime: videoElem.duration || 1
                    }
               );
          }),
          setTimeout(function () {
               window.fetch &&
                    fetch(src)
                    .then((a) => a.blob())
                    .then((a) => {
                         let b = URL.createObjectURL(a),
                              c = videoElem.currentTime;
                         once(document.documentElement, "touchstart", function () {
                                   videoElem.play(), videoElem.pause();
                              }),
                              videoElem.setAttribute("src", b),
                              (videoElem.currentTime = c + 0.01);
                    });
          }, 1e3);
}


function once(a, b, c, d) {
     var e = function () {
          a.removeEventListener(b, e), c.apply(this, arguments);
     };
     return a.addEventListener(b, e, d), e;
}


// var masterTimeline = new TimelineMax();
// masterTimeline
//      .add(scroll_video(), "+=200")
//      .add(viewport(), "+=200")