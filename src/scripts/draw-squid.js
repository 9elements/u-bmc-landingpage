gsap.registerPlugin(MotionPathPlugin);

gsap.set("circle, path", {
  opacity: 1,
});

gsap.set(
  ".usp-list, .usp-list > li, #circle-lr, #circle-ll, #face, .sm-connectors, .lg-connectors",
  {
    opacity: 0,
  }
);

gsap.set(
  "#connector-ur, #connector-lr, #connector-ul, #connector-ll, #body-l-2, #head-2, #eye-r, #eye-l, #mouth",
  {
    drawSVG: "100% 100%",
  }
);

gsap.set(
  "#connectorLgMaskMaster > path, #connectorSmMaskMaster > path, #body-l-1, #body-ur, #body-ul, #head-1, #bottom-full, #bottom-left, #bottom-right",
  {
    drawSVG: 0,
  }
);

gsap.set("#circle-lr", {
  motionPath: {
    path: "#connector-lr",
    align: "#connector-lr",
    start: 1,
    autoRotate: true,
    alignOrigin: [0, 0.5],
  },
  opacity: 0,
});

gsap.set("#circle-ll", {
  motionPath: {
    path: "#connector-ll",
    align: "#connector-ll",
    start: 1,
    autoRotate: true,
    alignOrigin: [0, 0.5],
  },
});

function annotation() {
  const tl = gsap.timeline();

  tl.set(".sm-connectors", {
    opacity: 1,
  });

  tl.to("#connectorSmMaskMaster > path", {
    drawSVG: "100%",
    duration: 0.7,
    ease: "sinde.inOut",
    stagger: 0.2,
  });

  tl.to(".usp-list", {
    opacity: 1,
    duration: 0.5,
  });

  tl.to(
    ".usp-list > li",
    {
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
    },
    "-=0.4"
  );

  return tl;
}

function annotationLg() {
  const tl = gsap.timeline();

  tl.set(".lg-connectors, .usp-list", {
    opacity: 1,
  });

  tl.to("#connectorLgMaskMaster > path", {
    drawSVG: "100%",
    duration: 0.7,
    ease: "sinde.inOut",
    stagger: 0.3,
  });

  tl.to(
    ".usp-list > li",
    {
      opacity: 1,
      duration: 1,
      stagger: 0.3,
    },
    "-=0.9"
  );

  return tl;
}

function cleanup() {
  const tl = gsap.timeline();

  tl.to("#connector-ll", {
    drawSVG: "100% 100%",
    duration: 0.4,
    ease: "sinde.inOut",
  });

  tl.to(
    "#connector-ul",
    {
      drawSVG: "100% 100%",
      duration: 0.75,
      ease: "sinde.inOut",
    },
    "-=0.2"
  );

  tl.to(
    "#connector-lr",
    {
      drawSVG: "100% 100%",
      duration: 0.4,
      ease: "sinde.inOut",
    },
    "-=0.5"
  );

  tl.to(
    "#connector-ur",
    {
      drawSVG: "100% 100%",
      duration: 0.75,
      ease: "sinde.inOut",
    },
    "-=0.2"
  );
  return tl;
}

function bottom() {
  const tl = gsap.timeline();

  tl.to("#bottom-full, #bottom-left, #bottom-right", {
    drawSVG: "100%",
    duration: 0.75,
    ease: "sine.inOut",
  });

  tl.to("#bottom-full", {
    drawSVG: "100% 100%",
    duration: 0.9,
    ease: "sinde.inOut",
  });

  tl.to(
    "#bottom-left",
    {
      drawSVG: "0%",
      duration: 0.5,
      ease: "sinde.inOut",
    },
    "-=0.3"
  );

  tl.to(
    "#bottom-right",
    {
      drawSVG: "0%",
      duration: 0.8,
      ease: "sinde.inOut",
    },
    "-=0.3"
  );

  return tl;
}

function face() {
  const tl = gsap.timeline();

  tl.to("#eye-r, #eye-l", {
    drawSVG: "100%",
    duration: 0.5,
    ease: "sine.inOut",
  });
  tl.to(
    "#mouth",
    {
      drawSVG: "100%",
      duration: 0.5,
      ease: "sine.inOut",
    },
    "-=0.5"
  );
  tl.to("#eye-r", {
    drawSVG: "0 32",
    duration: 0.3,
  });
  tl.to(
    "#eye-l",
    {
      drawSVG: "0 32",
      duration: 0.55,
    },
    "-=0.3"
  );
  tl.to(
    "#mouth",
    {
      drawSVG: "0 57",
      duration: 0.6,
    },
    "-=0.3"
  );

  tl.duration(2.2);
  return tl;
}

function body() {
  const tl = gsap.timeline();
  tl.to("#body-l-1", {
    drawSVG: "55%",
    duration: 0.5,
  });
  tl.to(
    "#body-l-2",
    {
      drawSVG: "45% 100%",
      duration: 0.5,
    },
    "-=0.5"
  );
  tl.to("#body-ur", {
    drawSVG: "100%",
    duration: 0.5,
  });
  tl.to(
    "#body-ul",
    {
      drawSVG: "100%",
      duration: 0.5,
    },
    "-=0.5"
  );
  tl.set("#head-1, #head-2", {
    opacity: 1,
  });
  tl.to(
    "#head-1",
    {
      drawSVG: "55%",
      duration: 0.5,
    },
    "-=0.2"
  );
  tl.to(
    "#head-2",
    {
      drawSVG: "45% 100%",
      duration: 0.5,
    },
    "-=0.5"
  );

  return tl;
}

function base() {
  const tl = gsap.timeline();

  tl.to("#connector-ur, #connector-ul", {
    drawSVG: "100%",
    duration: 1,
    ease: "sine.inOut",
  });

  tl.from(
    "#circle-ur",
    {
      motionPath: {
        path: "#connector-ur",
        align: "#connector-ur",
        alignOrigin: [1, 0.5],
      },
      duration: 1,
      ease: "sine.inOut",
    },
    "-=1"
  );

  tl.from(
    "#circle-ul",
    {
      motionPath: {
        path: "#connector-ul",
        align: "#connector-ul",
        alignOrigin: [0, 0.5],
      },
      duration: 1,
      ease: "sine.inOut",
    },
    "-=1"
  );

  tl.to(
    "#connector-lr, #connector-ll",
    {
      drawSVG: "100%",
      duration: 0.45,
      ease: "sine.inOut",
    },
    "-=0.45"
  );

  tl.set(
    "#circle-lr, #circle-ll",
    {
      opacity: 1,
    },
    "-=0.45"
  );

  tl.to(
    "#circle-lr",
    {
      motionPath: {
        path: "#connector-lr",
        align: "#connector-lr",
        start: 1,
        end: 0,
        autoRotate: true,
        alignOrigin: [0, 0.5],
      },
      duration: 0.45,
      ease: "sine.inOut",
    },
    "-=0.45"
  );

  tl.to(
    "#circle-ll",
    {
      motionPath: {
        path: "#connector-ll",
        align: "#connector-ll",
        start: 1,
        end: 0,
        autoRotate: true,
        alignOrigin: [0, 0.5],
      },
      duration: 0.45,
      ease: "sine.inOut",
    },
    "-=0.45"
  );

  //tl.duration(5);
  return tl;
}

const master = gsap.timeline({ paused: true });

var mql = window.matchMedia("(max-width: 1279px)");
var animationDuration = "";
const prm = window.matchMedia("(prefers-reduced-motion: reduce)");
const nop = window.matchMedia("(prefers-reduced-motion: no-preferences)");

function createTimeline(e) {
  if (e.matches) {
    var progress = master.progress();
    master.progress(0);
    master.add(base());
    master.add(body());
    master.add(face(), "-=0.9");
    master.add(bottom(), "-=2");
    master.add(cleanup(), "-=1.5");
    master.add(annotation(), "-=1");
    master.duration(animationDuration);
    master.progress(progress);
    master.play();
  } else {
    var progress = master.progress();
    master.progress(0);
    master.add(base());
    master.add(body());
    master.add(face(), "-=0.9");
    master.add(bottom(), "-=2");
    master.add(cleanup(), "-=1.5");
    master.add(annotationLg(), "-=1");
    master.duration(animationDuration);
    master.progress(progress);
    master.play();
  }
}

mql.addEventListener("change", createTimeline);

//Prefered reduced motion
if (prm.matches) {
  animationDuration = 0;
} else if (nop.matches) {
  animationDuration = 5;
} else {
  animationDuration = 5;
}

// First run
createTimeline(mql);
