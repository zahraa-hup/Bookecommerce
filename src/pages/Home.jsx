import React, { Suspense, lazy } from "react";
import Placeholder from "react-bootstrap/Placeholder";

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
    </>
  );
}

export default Home;
