import { Animation, Pin, Root } from "@bsmnt/scrollytelling";
import Hero from "./components/hero";
import Clients from "./components/clients";
import Features from "./components/features";
import Experience from "./components/experience";

function App() {
  return (
    <Root scrub={0.4} debug>
      <div
        style={{
          position: "relative",
          perspective: "2000px",
        }}
      >
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
                top: "72%",
                transform:
                  "translate(-690px, 800px) rotate3d(0, 0, 1, 220deg) scale(0.8) skew(-65deg, 0deg)",
              },
            },
            {
              start: 62,
              end: 63,
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
      </div>
      {/* <Experience /> */}
    </Root>
    // <Root
    //   disabled={false}
    //   // key={}
    //   // debug={{ label: "texts" }}
    // >
    //   <div style={{ height: "200vh", background: "black" }}>
    //     <div style={{ position: "sticky", top: 0, left: 0 }}>
    //       <Animation
    //         tween={{
    //           start: 0,
    //           end: 100,
    //           to: { scale: 1.5 },
    //         }}
    //       >
    //         <h1
    //           style={{
    //             margin: 0,
    //             width: "100%",
    //             fontSize: "5rem",
    //             transformOrigin: "top left",
    //             color: "red",
    //           }}
    //         >
    //           This is a text
    //         </h1>
    //       </Animation>
    //     </div>
    //   </div>
    // </Root>
  );
}

export default App;
