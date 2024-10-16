import { Animation, Pin, Root } from "@bsmnt/scrollytelling";
import React from "react";
// credit
//   payroll
//   lending
//   expense
const Hero = () => {
  return (
    // <Root>
    <div className='hero'>
      <div className='heroInner maxWidth'>
        <div className='left'>
          <h1>The next era of embedded finance</h1>
          <p>
            Integrate end to end credit and payment solutions into your business
            processes using our modern card issuing platform.
          </p>
          <button>Contact Sales</button>
        </div>
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

          {/* <Pin childHeight={"500px"} pinSpacerHeight={"100vh"} top={0}> */}
          {/* <div className='mainCard' /> */}
          {/* </Pin> */}
          <div className='box2' />
          <div className='box3' />
          <div className='box4' />
        </div>
      </div>
    </div>
    // </Root>
  );
};

export default Hero;
