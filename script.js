// Initialize Locomotive Scroll
function initial() {
      gsap.registerPlugin(ScrollTrigger);

      const locoScroll = new LocomotiveScroll({
            el: document.querySelector(".main"),
            smooth: true
      });

      locoScroll.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(".main", {
            scrollTop(value) {
                  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            }, // we don't have to define a scrollLeft because we're only scrolling vertically.
            getBoundingClientRect() {
                  return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },

            pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
      });


      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

      ScrollTrigger.refresh();

}
initial();

// Function to update counter display
const counterFunction = () => {
      let valueDisplay = document.querySelector('.num');
      let interval = 2000;
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if (startValue == endValue) {
                  clearInterval(counter);
            }
      }, duration);
}

// Animation for initial loading
const loadingAnimation = () => {
      let t1 = gsap.timeline()
      t1.to('.loader', {
            top: "-100%",
            duration: 2.5,
            ease: "expo.in"
      });
      counterFunction();
      t1.from('.hero-section .title-part h1', {
            y: "100%",
            duration: 1,
            ease: "expo.inOut",
            stagger: 0.1
      });
      t1.from('.navbar', {
            y: "-100%",
            duration: 1,
            ease: "power4.out",
            display: "none"
      });
}
const galleryAnimation = () => {
      let t1 = gsap.timeline({
            scrollTrigger: {
                  trigger: ".gallery-section",
                  scroller: ".main",
                  markers: false,
                  start: "top 10%",
                  end: "top 0%",
                  scrub: 3
            }
      })
      t1.to(".full-photo", {
            scale: 1,
            duration: 1,
      }, "a")
      t1.to(".part-photo", {
            scale: 1,
            duration: 1,
      }, "a")
}
const pinAnimaton = () => {
      let t2 = gsap.timeline({
            scrollTrigger: {
                  trigger: ".introduction-section .pin-title",
                  scroller: ".main",
                  markers: false,
                  start: "top 50%",
                  end: "300% 0%",
                  scrub: 3,
                  pin: true

            }
      })
}
const yearCount = () => {
      let t3 = gsap.timeline({
            scrollTrigger: {
                  trigger: ".date-count-section",
                  scroller: ".main",
                  markers: false,
                  start: "top 10%",
                  end: "top 0%",
            }
      });


      const yValues = ["-112%", "-812%", "-915%", "-812%"];

      document.querySelectorAll('.strip').forEach((strip, index) => {
            t3.to(strip, {
                  y: yValues[index], // Apply different y value for each strip
                  duration: 1, // Animation duration
                  ease: 'easeInOutExpo'
            }, "b");
      });

}
const historySectionAnimation = () => {
      let t4 = gsap.timeline({
            scrollTrigger: {
                  trigger: ".historical-section",
                  scroller: ".main",
                  markers: false,
                  start: "top 90%",
                  end: "top 85%",
                  scrub: 3,
            }
      })
      t4.from('.historical-section .title-part h1', {
            y: "100%",
            duration: 1,
            ease: "expo.inOut",
            stagger: 0.1
      });

      let t2 = gsap.timeline({
            scrollTrigger: {
                  trigger: ".history-section .pin-title",
                  scroller: ".main",
                  markers: false,
                  start: "top 50%",
                  end: "300% 0%",
                  scrub: 3,
                  pin: true

            }
      })
}
const photoSectionAnimation = () => {
      let t5 = gsap.timeline({
            scrollTrigger: {
                  trigger: ".photoSection",
                  scroller: ".main",
                  markers: false,
                  start: "top 70%",
                  end: "top 30%",
                  scrub: 3,
            }
      })
      t5.to(".photo", {
            scale: 1.5,
            duration: 1,
      })
}
const headingAnimation = () => {
      let t4 = gsap.timeline({
            scrollTrigger: {
                  trigger: ".heading-section",
                  scroller: ".main",
                  markers: false,
                  start: "top 25%",
                  end: "top 20%",
                  scrub: 3,
            }
      })
      t4.from('.heading-section .title-part h1', {
            y: "100%",
            duration: 1,
            ease: "expo.inOut",
            stagger: 0.1
      });
}

const lastSectionAnimation = ()=>{
      let t2 = gsap.timeline({
            scrollTrigger: {
                  trigger: ".author-section .pin-title",
                  scroller: ".main",
                  markers: false,
                  start: "top 50%",
                  end: "300% 0%",
                  scrub: 3,
                  pin: true
      
            }
      })
      
      let t4 = gsap.timeline({
            scrollTrigger: {
                  trigger: ".initiative-section",
                  scroller: ".main",
                  markers: false,
                  start: "top 80%",
                  end: "top 75%",
                  scrub: 3,
            }
      })
      t4.from('.initiative-section .title-part h1', {
            y: "100%",
            duration: 1,
            ease: "expo.inOut",
            stagger: 0.1
      });
      
      let t5 = gsap.timeline({
            scrollTrigger: {
                  trigger: ".desc-section .pin-title",
                  scroller: ".main",
                  markers: false,
                  start: "top 50%",
                  end: "300% 0%",
                  scrub: 3,
                  pin: true
      
            }
      })
}

function cursorAnimation() {
      let cursor = document.querySelector(".cursor");
      // let main = document.querySelector(".main");
  
      document.addEventListener("mousemove", (e) => {
            gsap.to(cursor, {
                duration: 0.5, // Duration of the animation
                left: e.pageX , // Target left position
                top: e.pageY , // Target top position
                ease: "power2.out" // Easing function
            });
        });
  }
 
  const polygonAnimation = ()=>{
      gsap.timeline({
            scrollTrigger: {
                  trigger: ".photo-animation",
                  scroller: ".main",
                  markers: true,
                  start: "top 5%",
                  end: "top 15%",
                  scrub: 3,
            }
        }).to('.clip', {
            duration: 2,
            keyframes: [
              { clipPath: 'polygon(0% 0%, 100% 0%, 100% 70%, 100% 100%, 0 100%, 0 70%)' },
              { clipPath: 'polygon(0% 0%, 100% 0%, 58% 70%, 58% 100%, 42% 100%, 42% 70%)' }
            ],
            ease: 'power1.inOut',
            yoyo: true
          });
      
  }
  



loadingAnimation();
galleryAnimation();
pinAnimaton();
yearCount();
historySectionAnimation();
photoSectionAnimation();
headingAnimation();
lastSectionAnimation();
cursorAnimation();
polygonAnimation();
