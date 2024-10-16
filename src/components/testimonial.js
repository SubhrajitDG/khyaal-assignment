import { Animation, Root, Stagger } from "@bsmnt/scrollytelling";
import React from "react";

const Testimonial = () => {
  return (
    <Root scrub={0.4} debug>
      <div className='testimonialWrapper'>
        <div className='testimonial'>
          <div className='testimonialContent maxWidth'>
            <div className='review'>
              <h3>Logo</h3>
              <h6>
                “Affirm’s mission is to build innovative products that people
                love, and Marqeta’s unique technology provides us the platform
                and services to help make that possible.”
              </h6>
              <p>
                Name <br /> Designation
              </p>
            </div>
            <Stagger
              overlap={0.2}
              tween={{
                start: 25,
                end: 60,
                fromTo: [
                  { transform: "translateY(100px)", opacity: 0 },
                  { transform: "translateY(0px)", opacity: 1 },
                ],
              }}
            >
              {[2, 3].map((item, idx) => (
                <div key={idx} className='review'>
                  <h3>Logo</h3>
                  <h6>
                    “Affirm’s mission is to build innovative products that
                    people love, and Marqeta’s unique technology provides us the
                    platform and services to help make that possible.”
                  </h6>
                  <p>
                    Name <br /> Designation
                  </p>
                </div>
              ))}
            </Stagger>
          </div>
          <div className='cardWrapper'>
            <Animation
              tween={[
                {
                  start: 0,
                  end: 20,
                  to: {
                    top: "20%",
                  },
                },
                {
                  start: 21,
                  end: 21.5,
                  to: {
                    background:
                      "linear-gradient(0deg, rgb(0 255 126 / 76%) 5%, rgb(154 255 227) 100%)",
                  },
                },
                {
                  start: 20,
                  end: 25,
                  to: {
                    transform: "rotateY(180deg)",
                  },
                },
                {
                  start: 20,
                  end: 40,
                  to: {
                    top: "35%",
                  },
                },
                {
                  start: 45,
                  end: 75,
                  to: {
                    top: "75%",
                  },
                },
                {
                  start: 55,
                  end: 55.5,
                  to: {
                    background:
                      "linear-gradient(0deg, #fff06b 5%, #FFC107 100%)",
                  },
                },
                {
                  start: 53,
                  end: 58,
                  to: {
                    transform: "rotateY(360deg)",
                  },
                },
                {
                  start: 80,
                  end: 100,
                  to: {
                    top: "110%",
                    transform:
                      "translateX(-300px) rotate3d(-1.5, 2 ,1, 175deg) scale(0.8)",
                  },
                },
              ]}
            >
              <div className='card3'></div>
            </Animation>
          </div>
        </div>
        <div className='footer'>
          <div className='footerBg'></div>
          <div className='ctaWrapper'>
            <div className='text'>
              <Stagger
                overlap={0.2}
                tween={{
                  start: 90,
                  end: 100,
                  fromTo: [
                    { transform: "translateY(30px)", opacity: 0 },
                    { transform: "translateY(0px)", opacity: 1 },
                  ],
                }}
              >
                <h4>Start innovating with Marqeta today</h4>
                <p>Let’s talk about your use case and how we can help.</p>
                <button>Contact us</button>
              </Stagger>
            </div>
            <img
              src='https://www.marqeta.com/static/img/innovating/footer-phone.png'
              alt=''
              srcset=''
            />
          </div>
        </div>
      </div>
    </Root>
  );
};

export default Testimonial;
