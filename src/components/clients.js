import { Stagger } from "@bsmnt/scrollytelling";
import React from "react";

const Clients = () => {
  return (
    <div className='clients'>
      <div className='clientsLogos'>
        <img
          src='https://www.marqeta.com/static/svg/logo-uber.svg'
          alt=''
          srcset=''
        />
        <img
          src='https://www.marqeta.com/static/svg/logo-instacart.svg'
          alt=''
          srcset=''
        />
        <img
          src='https://www.marqeta.com/static/svg/logo-instacart.svg'
          alt=''
          srcset=''
        />
        <img
          src='https://www.marqeta.com/static/svg/logo-instacart.svg'
          alt=''
          srcset=''
        />
        <img
          src='https://www.marqeta.com/static/svg/logo-instacart.svg'
          alt=''
          srcset=''
        />
      </div>
      <div className='clientsInner'>
        <Stagger
          overlap={0.2}
          tween={{
            start: 3,
            end: 7,
            fromTo: [
              { transform: "translateY(50px)", opacity: 0 },
              { transform: "translateY(0px)", opacity: 1 },
            ],
          }}
        >
          <h2>
            From global enterprises to booming startups, innovators count on
            Marqeta.
          </h2>
          <br />
          <br />
          <h2>
            Industry leaders across on-demand delivery, expense management,
            retail, digital banking, and more use Marqeta to deliver exceptional
            customer card experiences that elevate their brands and build
            lasting customer loyalty. See how Square uses Marqeta.
          </h2>
        </Stagger>
      </div>
    </div>
  );
};

export default Clients;
