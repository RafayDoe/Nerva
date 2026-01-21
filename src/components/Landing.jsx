import Navbar from "./Navbar";
import Hero from "./Hero";
import FollowUp from "./FollowUp";
import Features from "./Features";
import Pricing from "./Pricing";
import Footer from "./Footer";

function Landing({ logCheck, logger }) {
  return (
    <>
      <Navbar logCheck={logCheck} logger={logger} />
      <Hero logger={logger} />
      <FollowUp logger={logger} />
      <Features logger={logger} />
      <Pricing logger={logger} />
      <Footer logger={logger} />
    </>
  );
}

export default Landing;
