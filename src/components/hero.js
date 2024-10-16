import { Animation, Waypoint } from "@bsmnt/scrollytelling";
import React from "react";
const Hero = () => {
  return (
    <div className='hero'>
      <div className='heroInner maxWidth'>
        <Waypoint
          at={0}
          tween={{
            target: [".left"],
            fromTo: [
              { transform: "translateY(40px)", opacity: 0 },
              { transform: "translateY(0px)", opacity: 1 },
            ],
            duration: 1,
          }}
        >
          <div className='left'>
            <h1>The next era of embedded finance</h1>
            <p>
              Integrate end to end credit and payment solutions into your
              business processes using our modern card issuing platform.
            </p>
            <button>Contact Sales</button>
          </div>
        </Waypoint>

        <div className='right'>
          <Animation
            tween={{
              start: 0,
              end: 20,
              to: {
                top: "-200px",
                transform: "translateX(100px) rotateZ(20deg)",
              },
            }}
          >
            <img
              src='https://www.marqeta.com/top-photo.png?width=3840'
              alt=''
              srcset=''
            />
          </Animation>
          <Waypoint
            at={0}
            tween={{
              target: [".box2"],
              fromTo: [{ transform: "scale(0)" }, { transform: "scale(1)" }],
              duration: 0.2,
            }}
          >
            <div className='box2' />
          </Waypoint>
          <Waypoint
            at={0}
            tween={{
              target: [".box3"],
              fromTo: [{ transform: "scale(0)" }, { transform: "scale(1)" }],
              duration: 0.4,
            }}
          >
            <div className='box3' />
          </Waypoint>
          <Waypoint
            at={0}
            tween={{
              target: [".box4"],
              fromTo: [{ transform: "scale(0)" }, { transform: "scale(1)" }],
              duration: 0.6,
            }}
          >
            <div className='box4' />
          </Waypoint>
        </div>
      </div>
    </div>
    // </Root>
  );
};

export default Hero;
