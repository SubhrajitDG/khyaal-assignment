import { Animation, Pin, Root } from "@bsmnt/scrollytelling";
import Hero from "./components/hero";
import Clients from "./components/clients";
import Features from "./components/features";
import Experience from "./components/experience";

function App() {
  return (
    <Root scrub={0.4}>
      <div className='sectionWrapper'>
        <Animation
          tween={[
            {
              start: 0,
              end: 55,
              to: {
                top: "45%",
                transform:
                  "translateX(100px) rotate3d(0, 0, 1, 210deg) scale(0.5)",
              },
            },
            {
              start: 55,
              end: 85,
              to: {
                top: "65.9%",
                transform:
                  "translate(-530px, 820px) rotate3d(0, 0, 1, 220deg) scale(0.8) skew(-50deg, 0deg)",
              },
            },
            {
              start: 64,
              end: 65,
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
        <Experience />
      </div>
    </Root>
  );
}

export default App;
