import { Root } from "@bsmnt/scrollytelling";
import Hero from "./components/hero";
import Clients from "./components/clients";
import Features from "./components/features";
import Testimonial from "./components/testimonial";
import MainCard from "./components/mainCard";

function App() {
  return (
    <Root scrub={0.4}>
      <div className='sectionWrapper'>
        <MainCard />
        <Hero />
        <Clients />
        <Features />
        <Testimonial />
      </div>
    </Root>
  );
}

export default App;
