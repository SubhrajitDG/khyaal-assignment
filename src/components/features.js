import { Animation, Root, Stagger, Waypoint } from "@bsmnt/scrollytelling";
import React, { useState } from "react";

const Features = () => {
  const [metrics, setMetrics] = useState(150);

  const increaseMetrics = () => {
    const interval = setInterval(() => {
      setMetrics((prev) => {
        if (prev >= 160) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 100);
  };
  return (
    <Root scrub={0.4}>
      <div className='features'>
        <Waypoint at={58} onCall={increaseMetrics} />
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
              start: 3.5,
              end: 3.9,
              to: {
                opacity: 1,
              },
            },
            {
              start: 40,
              end: 41,
              to: {
                display: "none",
              },
            },
            {
              start: 0,
              end: 100,
              to: {
                transform:
                  "translate3d(-50.6468vw, 453px, 0px) rotate(124.8184deg) scale(10.95459) skew(0deg, -26deg)",
              },
            },
          ]}
        >
          <div className='purple-bg'></div>
        </Animation>
        <Animation
          tween={{
            start: 32,
            end: 40,
            to: {
              opacity: 1,
            },
          }}
        >
          <div className='contentWrapper'>
            <Animation
              tween={[
                {
                  start: 32,
                  end: 40,
                  to: {
                    transform:
                      "translateY(200px) rotate3d(0, -20, 11, 300deg) scale(0.6) skew(5deg, 10deg)",
                  },
                },
                {
                  start: 45,
                  end: 60,
                  to: {
                    transform:
                      "translate(-1.5px, 1170px) rotate3d(0, 0, 0, 300deg) scale(1.22,1.15) skew(0deg, 0deg)",
                  },
                },
              ]}
            >
              <div className='card2'></div>
            </Animation>
            <Animation
              tween={{
                start: 30,
                end: 40,
                fromTo: [
                  {
                    transform: "translateY(0px)",
                  },
                  {
                    transform: "translateY(300px)",
                  },
                ],
              }}
            >
              <div className='content'>
                <Stagger
                  overlap={0.2}
                  tween={{
                    start: 35,
                    end: 40,
                    fromTo: [{ opacity: 0 }, { opacity: 1 }],
                  }}
                >
                  <h3>Create a tailored payment experience</h3>
                  <hr />
                  <p>
                    Use open APIs to create new payment products or streamline
                    supplier and workforce payments.
                  </p>
                  <hr />
                  <p>
                    Leverage existing relationships with issuing banks,
                    networks, and card fulfillment providers to go live in days
                    not months.
                  </p>
                  <hr />
                  <p>
                    Detect fraud, control your spend, and ensure the highest
                    levels of compliance and uptime.
                  </p>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis itaque quo iusto ullam, laborum mollitia sit soluta.
                    Eaque aut, necessitatibus, quidem autem minima repellat
                  </p>
                </Stagger>
              </div>
            </Animation>

            <div className='results'>
              <div className='metrics'>
                <Stagger
                  overlap={0.2}
                  tween={{
                    start: 58,
                    end: 65,
                    to: { transform: "translateY(0px)", opacity: 1 },
                  }}
                >
                  <h1>The results speak for themselves</h1>
                  <h2 id='increase'>${metrics}.000.000.000+</h2>
                  <p>volume processed in 2022</p>
                </Stagger>
              </div>

              <div className='grid'>
                <div className='soloCard'></div>
                {Array.from({ length: 15 }).map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      style={{
                        marginTop: `${
                          idx <= 4
                            ? 280 * (idx + 1)
                            : idx > 4 && idx <= 9
                            ? (4 - (idx - 5)) * -280
                            : (4 - (idx - 10)) * -280
                        }px`,
                      }}
                      className='gridItem'
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
        </Animation>
      </div>
    </Root>
  );
};

export default Features;
