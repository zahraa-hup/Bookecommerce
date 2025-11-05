import React, { Suspense, lazy } from "react";
import Placeholder from "react-bootstrap/Placeholder";
import Slidersection from "../components/Slider/Slidersection";
import Hero1 from "../components/Hero1/Hero1";
import Hero2 from "../components/Hero2/Hero2";
function Home() {
  const LazyHero = lazy(() => import("../components/Herosection/Hero"));
  return (
    <>
      <Suspense
        fallback={
          <Placeholder as="div" animation="glow">
            <Placeholder xs={12} className="heroloading" />
          </Placeholder>
        }
      >
        <LazyHero />
      </Suspense>
      <Hero1 />
      <Hero2 />
    </>
  );
}

export default Home;
