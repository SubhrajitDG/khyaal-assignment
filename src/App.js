import { Animation, Root } from "@bsmnt/scrollytelling";
import Hero from "./components/hero";
import Clients from "./components/clients";
import Features from "./components/features";
import Testimonial from "./components/testimonial";

function App() {
  return (
    <Root scrub={0.4}>
      <div className='sectionWrapper'>
        <Animation
          tween={[
            {
              start: 0,
              end: 14,
              to: {
                top: "17%",
                transform:
                  "translateX(100px) rotate3d(0, 0, 1, -130deg) scale(0.5)",
              },
            },
            {
              start: 14,
              end: 18,
              to: {
                top: "20%",
                transform:
                  "translateX(100px) rotate3d(0, 0, 1, 210deg) scale(0.5)",
              },
            },
            {
              start: 20,
              end: 25,
              to: {
                top: "25%",
                transform:
                  "translate(-470px, 855px) rotate3d(0, 0, 1, 220deg) scale(0.8) skew(-46deg, 0deg)",
              },
            },
            {
              start: 21.9,
              end: 22,
              to: {
                opacity: 0,
              },
            },
          ]}
        >
          <div className='card' />
        </Animation>
        <Hero />
        <Clients />
        <Features />
        <Testimonial />
      </div>
    </Root>
  );
}

export default App;
