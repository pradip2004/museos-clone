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

const lastSectionAnimation = () => {
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
                  left: e.pageX, // Target left position
                  top: e.pageY, // Target top position
                  ease: "power2.out" // Easing function
            });
      });
}

const polygonAnimation = () => {
      gsap.timeline({
            scrollTrigger: {
                  trigger: ".photo-animation",
                  scroller: ".main",
                  markers: false,
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

const clipPaths = [
      "circle(10% at 57.5% 27%)",
      "circle(10% at 33% 65%)",
      "circle(10% at 60.5% 74%)",
      "circle(6% at 54% 48%)",
      "circle(7% at 27% 69%)",
      "circle(100% at 50% 50%)"
];
const titles = [
      "White woman",
      "Charrua Indigenous",
      "Jaguar",
      "Montevideo Hill",
      "Ship",
      " "
];
const descriptions = [
      {
            text: "In the foreground, we see a woman with Caucasian features representing the homeland—a white, pure, radiant, and civilized homeland ascending triumphantly. Created in the image and likeness of a Europe that embodies everything the nation should admire and pursue for success.",
            left: "5%",
            top: "70%"

      },
      {
            text: "She is seated on a rock, at a higher level than the rest of the symbolic elements. She has a fabric draped over her body with the stripes of the national flag printed on it, stained with the blood of the Charrúa people. A flag that represents the patrician project of a nation-state born from the Charrúa genocide.",
            left: "5%",
            top: "30%"
      },
      {
            text: "In the background or second layer, we see the stereotyped figure of an indigenous person in a fallen posture, looking up at the resplendent homeland.",
            left: "50%",
            top: "40%"
      },
      {
            text: "The woman is sitting on a jaguar skin, perhaps a rug that the indigenous person obediently placed for her to sit on. The jaguar skin represents the most dangerous and wild animal of these lands, which the indigenous person killed for and because of her.",
            left: "5%",
            top: "20%"
      },
      {
            text: "The figure of the Montevideo Hill fortress symbolizes for us the planting of the Spanish flag over the Charrúa people who fiercely resisted the establishment of this fort, symbolizing the beginning of settler colonialism, territorial dispossession.",
            left: "50%",
            top: "70%"
      },
      
      {
            text: "",
            position: ""
      }
];

// GSAP timeline for clip-path animations
const clipPathTimeline = gsap.timeline({
      scrollTrigger: {
            trigger: ".main-section",
            scroller: ".main",
            pin: true,
            start: "top top",
            markers: false,
            end: "+=380%",
            scrub: 1
      },
      onUpdate: function () {
            const progress = clipPathTimeline.progress();
            const index = Math.floor(progress * (clipPaths.length - 1));
            const description = descriptions[index];
            document.querySelector('.main-section-title').textContent = titles[index];
            document.querySelector('.main-section-desc').textContent = description.text;
            document.querySelector('.main-section-desc').style.left = description.left;
            document.querySelector('.main-section-desc').style.top = description.top;
      }
});

// Apply clip-path animations
clipPaths.forEach((path, index) => {
      clipPathTimeline.to(".img-cover img", { clipPath: path, duration: 1 }, index * 3);

});

let sc = document.querySelector('.main-section')

sc.addEventListener('mouseenter', ()=>{
      document.querySelector('.cursor').style.backgroundColor = "#000";
      document.querySelector('.cursor').textContent = "+";

      gsap.to('.cursor',{
            width: "40px",
            height: "40px",
            duration: 0.5,
            ease: "power2.out"
      })
})

sc.addEventListener('mouseleave', ()=>{
      document.querySelector('.cursor').style.backgroundColor = "#fff";
      document.querySelector('.cursor').textContent = "";
      
      gsap.to('.cursor',{
            width: "20px",
            height: "20px",
            duration: 0.5,
            ease: "power2.out"
      })
})






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
