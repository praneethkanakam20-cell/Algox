// =====================================================
// THREE.JS
// =====================================================

import * as THREE from
    "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";


// =====================================================
// GSAP
// =====================================================

import { gsap } from
    "https://cdn.jsdelivr.net/npm/gsap@3.13.0/index.js";

import { ScrollTrigger } from
    "https://cdn.jsdelivr.net/npm/gsap@3.13.0/ScrollTrigger.js";


gsap.registerPlugin(ScrollTrigger);


// =====================================================
// SCENE
// =====================================================

const scene = new THREE.Scene();


// =====================================================
// CAMERA
// =====================================================

const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 0, 5);


// =====================================================
// RENDERER
// =====================================================

const canvas =
    document.querySelector("#webgl");

const renderer =
    new THREE.WebGLRenderer({

        canvas: canvas,

        antialias: true,

        alpha: true

    });


renderer.setSize(
    window.innerWidth,
    window.innerHeight
);


renderer.setPixelRatio(
    Math.min(
        window.devicePixelRatio,
        2
    )
);


// =====================================================
// MAIN SECURITY CORE
// =====================================================

const geometry =
    new THREE.IcosahedronGeometry(
        1.55,
        2
    );


const material =
    new THREE.MeshBasicMaterial({

        color: 0xbfc0bd,

        wireframe: true,

        transparent: true,

        opacity: 0.8

    });


const core =
    new THREE.Mesh(
        geometry,
        material
    );


scene.add(core);


// =====================================================
// INNER CORE
// =====================================================

const innerGeometry =
    new THREE.IcosahedronGeometry(
        0.78,
        1
    );


const innerMaterial =
    new THREE.MeshBasicMaterial({

        color: 0x777874,

        wireframe: true,

        transparent: true,

        opacity: 0.65

    });


const innerCore =
    new THREE.Mesh(
        innerGeometry,
        innerMaterial
    );


scene.add(innerCore);


// =====================================================
// INITIAL POSITION
// =====================================================

core.position.set(
    2.4,
    0,
    0
);


innerCore.position.set(
    2.4,
    0,
    0
);


// =====================================================
// ANIMATION LOOP
// =====================================================

function animate() {

    requestAnimationFrame(animate);


    core.rotation.x += 0.002;
    core.rotation.y += 0.003;


    innerCore.rotation.x -= 0.003;
    innerCore.rotation.y -= 0.004;


    renderer.render(
        scene,
        camera
    );

}


animate();


// =====================================================
// SCROLL MASTER TIMELINE
// =====================================================

const scrollTimeline =
    gsap.timeline({

        scrollTrigger: {

            trigger: "main",

            start: "top top",

            end: "bottom bottom",

            scrub: 1.2

        }

    });


// =====================================================
// HERO → ATTACK
// =====================================================

scrollTimeline.to(

    core.position,

    {

        x: -2.2,

        y: 0.5,

        duration: 1

    }

);


scrollTimeline.to(

    innerCore.position,

    {

        x: -2.2,

        y: 0.5,

        duration: 1

    },

    "<"

);


// =====================================================
// ATTACK ROTATION
// =====================================================

scrollTimeline.to(

    core.rotation,

    {

        x: Math.PI * 2,

        y: Math.PI * 3,

        duration: 1

    },

    "<"

);


scrollTimeline.to(

    innerCore.rotation,

    {

        x: -Math.PI * 2,

        y: -Math.PI * 3,

        duration: 1

    },

    "<"

);


// =====================================================
// ATTACK → SECURITY
// =====================================================

scrollTimeline.to(

    core.position,

    {

        x: 2.3,

        y: -0.4,

        duration: 1

    }

);


scrollTimeline.to(

    innerCore.position,

    {

        x: 2.3,

        y: -0.4,

        duration: 1

    },

    "<"

);


// =====================================================
// CAMERA ZOOM
// =====================================================

scrollTimeline.to(

    camera.position,

    {

        z: 3.5,

        duration: 1

    }

);


// =====================================================
// SECURITY → PRIVACY
// =====================================================

scrollTimeline.to(

    core.position,

    {

        x: -2.4,

        y: 0,

        duration: 1

    }

);


scrollTimeline.to(

    innerCore.position,

    {

        x: -2.4,

        y: 0,

        duration: 1

    },

    "<"

);


scrollTimeline.to(

    core.rotation,

    {

        x: Math.PI * 4,

        y: Math.PI * 5,

        duration: 1

    },

    "<"

);


// =====================================================
// PRIVACY → RECOVERY
// =====================================================

scrollTimeline.to(

    core.position,

    {

        x: 2.5,

        y: 0.4,

        duration: 1

    }

);


scrollTimeline.to(

    innerCore.position,

    {

        x: 2.5,

        y: 0.4,

        duration: 1

    },

    "<"

);


scrollTimeline.to(

    core.scale,

    {

        x: 0.75,

        y: 0.75,

        z: 0.75,

        duration: 1

    }

);


scrollTimeline.to(

    innerCore.scale,

    {

        x: 0.75,

        y: 0.75,

        z: 0.75,

        duration: 1

    },

    "<"

);


// =====================================================
// RECOVERY → AUDIT
// =====================================================

scrollTimeline.to(

    core.position,

    {

        x: -2.2,

        y: -0.5,

        duration: 1

    }

);


scrollTimeline.to(

    innerCore.position,

    {

        x: -2.2,

        y: -0.5,

        duration: 1

    },

    "<"

);


scrollTimeline.to(

    core.scale,

    {

        x: 0.55,

        y: 0.55,

        z: 0.55,

        duration: 1

    }

);


scrollTimeline.to(

    innerCore.scale,

    {

        x: 0.55,

        y: 0.55,

        z: 0.55,

        duration: 1

    },

    "<"

);


// =====================================================
// AUDIT → FINAL
// =====================================================

scrollTimeline.to(

    core.position,

    {

        x: 0,

        y: 0,

        duration: 1

    }

);


scrollTimeline.to(

    innerCore.position,

    {

        x: 0,

        y: 0,

        duration: 1

    },

    "<"

);


scrollTimeline.to(

    core.scale,

    {

        x: 0.35,

        y: 0.35,

        z: 0.35,

        duration: 1

    }

);


scrollTimeline.to(

    innerCore.scale,

    {

        x: 0.35,

        y: 0.35,

        z: 0.35,

        duration: 1

    },

    "<"

);


// =====================================================
// THREAT ANIMATION
// =====================================================

gsap.fromTo(

    ".threat-content",

    {

        x: -120,

        opacity: 0

    },

    {

        x: 0,

        opacity: 1,

        scrollTrigger: {

            trigger: ".threat",

            start: "top 75%",

            end: "top 30%",

            scrub: 1

        }

    }

);


gsap.fromTo(

    ".invoice-card",

    {

        x: 180,

        opacity: 0,

        rotate: 8

    },

    {

        x: 0,

        opacity: 1,

        rotate: 2,

        scrollTrigger: {

            trigger: ".threat",

            start: "top 75%",

            end: "top 30%",

            scrub: 1

        }

    }

);


// =====================================================
// SECURITY ANIMATION
// =====================================================

gsap.fromTo(

    ".security-content",

    {

        x: -150,

        opacity: 0

    },

    {

        x: 0,

        opacity: 1,

        scrollTrigger: {

            trigger: ".security",

            start: "top 75%",

            end: "top 30%",

            scrub: 1

        }

    }

);


gsap.fromTo(

    ".security-firewall",

    {

        x: 180,

        opacity: 0,

        scale: 0.85

    },

    {

        x: 0,

        opacity: 1,

        scale: 1,

        scrollTrigger: {

            trigger: ".security",

            start: "top 75%",

            end: "top 30%",

            scrub: 1

        }

    }

);


// =====================================================
// PRIVACY ANIMATION
// =====================================================

gsap.fromTo(

    ".privacy-content",

    {

        x: -150,

        opacity: 0

    },

    {

        x: 0,

        opacity: 1,

        scrollTrigger: {

            trigger: ".privacy",

            start: "top 75%",

            end: "top 30%",

            scrub: 1

        }

    }

);


gsap.fromTo(

    ".proof-card",

    {

        x: 180,

        opacity: 0,

        scale: 0.85

    },

    {

        x: 0,

        opacity: 1,

        scale: 1,

        scrollTrigger: {

            trigger: ".privacy",

            start: "top 75%",

            end: "top 30%",

            scrub: 1

        }

    }

);


// =====================================================
// RECOVERY ANIMATION
// =====================================================

gsap.fromTo(

    ".recovery-content",

    {

        x: -150,

        opacity: 0

    },

    {

        x: 0,

        opacity: 1,

        scrollTrigger: {

            trigger: ".recovery",

            start: "top 75%",

            end: "top 30%",

            scrub: 1

        }

    }

);


gsap.fromTo(

    ".recovery-network",

    {

        x: 180,

        opacity: 0,

        scale: 0.85

    },

    {

        x: 0,

        opacity: 1,

        scale: 1,

        scrollTrigger: {

            trigger: ".recovery",

            start: "top 75%",

            end: "top 30%",

            scrub: 1

        }

    }

);


// =====================================================
// AUDIT ANIMATION
// =====================================================

gsap.fromTo(

    ".audit-content",

    {

        x: -150,

        opacity: 0

    },

    {

        x: 0,

        opacity: 1,

        scrollTrigger: {

            trigger: ".audit",

            start: "top 75%",

            end: "top 30%",

            scrub: 1

        }

    }

);


gsap.fromTo(

    ".audit-log",

    {

        x: 180,

        opacity: 0,

        scale: 0.85

    },

    {

        x: 0,

        opacity: 1,

        scale: 1,

        scrollTrigger: {

            trigger: ".audit",

            start: "top 75%",

            end: "top 30%",

            scrub: 1

        }

    }

);


// =====================================================
// LOG ENTRIES
// =====================================================

gsap.from(

    ".log-entry",

    {

        x: 50,

        opacity: 0,

        stagger: 0.15,

        scrollTrigger: {

            trigger: ".audit",

            start: "top 55%",

            end: "top 25%",

            scrub: 1

        }

    }

);


// =====================================================
// FINAL
// =====================================================

gsap.fromTo(

    ".end .section-content",

    {

        y: 100,

        opacity: 0,

        scale: 0.9

    },

    {

        y: 0,

        opacity: 1,

        scale: 1,

        scrollTrigger: {

            trigger: ".end",

            start: "top 75%",

            end: "top 30%",

            scrub: 1

        }

    }

);


// =====================================================
// ENTER BUTTON
// =====================================================

const enterButton =
    document.querySelector("#enterBtn");


if (enterButton) {

    enterButton.addEventListener(

        "click",

        () => {

            const threat =
                document.querySelector(".threat");


            if (threat) {

                threat.scrollIntoView({

                    behavior: "smooth"

                });

            }

        }

    );

}

// =====================================================
// GET STARTED BUTTON
// =====================================================

const getStartedBtn = document.createElement("button");

getStartedBtn.className = "get-started-btn";

getStartedBtn.innerHTML = `
    GET STARTED
    <span>↗</span>
`;

document.body.appendChild(getStartedBtn);


// =====================================================
// SHOW GET STARTED BUTTON
// =====================================================

getStartedBtn.classList.add("show");


// =====================================================
// GET STARTED BUTTON — CLICK
// =====================================================

// =====================================================
// GET STARTED BUTTON — CLICK
// =====================================================

getStartedBtn.addEventListener("click", () => {

    window.location.href = "/app/";

});
// =====================================================
// RESIZE
// =====================================================

window.addEventListener(

    "resize",

    () => {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;


        camera.updateProjectionMatrix();


        renderer.setSize(

            window.innerWidth,

            window.innerHeight

        );


        renderer.setPixelRatio(

            Math.min(
                window.devicePixelRatio,
                2
            )

        );


        ScrollTrigger.refresh();

    }

);