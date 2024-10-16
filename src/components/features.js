import { Animation, Root } from "@bsmnt/scrollytelling";
import React from "react";

const Features = () => {
  return (
    <Root>
      <div className='features'>
        <div className='featuresInner maxWidth'>
          <p>
            Flexible and scalable technology to meet your unique payment needs
          </p>
          <br />
          <span>
            Legacy payment solutions are slow, rigid, and lack control. Bring
            the financial solutions to your customers at the point of need and
            delight them in a whole new way.
          </span>
        </div>
        <Animation
          tween={[
            {
              start: 1,
              end: 2,
              to: {
                opacity: 1,
              },
            },
            {
              start: 0,
              end: 100,
              to: {
                transform:
                  "translate3d(-69.6468vw, 483px, 0px) rotate(94.8184deg) scale(9.95459) skew(0deg, -26deg)",
              },
            },
          ]}
        >
          <div className='purple-bg'></div>
        </Animation>
        <Animation>
          <div className='content'>
            <h3>Create a tailored payment experience</h3>
            <p>
              Use open APIs to create new payment products or streamline
              supplier and workforce payments.
            </p>
            <p>
              Leverage existing relationships with issuing banks, networks, and
              card fulfillment providers to go live in days not months.
            </p>
            <p>
              Detect fraud, control your spend, and ensure the highest levels of
              compliance and uptime.
            </p>
          </div>
        </Animation>
      </div>
    </Root>
  );
};

export default Features;
