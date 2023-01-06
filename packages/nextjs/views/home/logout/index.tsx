import React from "react";
import { Absolute } from "@components/common/Position";

export const Home = () => {
  return (
    <>
      <div className="landscape">
        <div className="mountain" />
        <div className="mountain mountain-2" />
        <div className="mountain mountain-3" />
        <div className="sun-container sun-container-1" />
        <div className="sun-container">
          <div className="sun" />
        </div>
        <div className="cloud" />
        <div className="cloud cloud-1" />
        <div className="sun-container sun-container-reflection">
          <div className="sun" />
        </div>
        <div className="light" />
        <div className="light light-1" />
        <div className="light light-2" />
        <div className="light light-3" />
        <div className="light light-4" />
        <div className="light light-5" />
        <div className="light light-6" />
        <div className="light light-7" />
        <div className="water" />
        <div className="splash" />
        <div className="splash delay-1" />
        <div className="splash delay-2" />
        <div className="splash splash-4 delay-2" />
        <div className="splash splash-4 delay-3" />
        <div className="splash splash-4 delay-4" />
        <div className="splash splash-stone delay-3" />
        <div className="splash splash-stone splash-4" />
        <div className="splash splash-stone splash-5" />
        <div className="lotus lotus-1" />
        <div className="lotus lotus-2" />
        <div className="lotus lotus-3" />
        <div className="trash-container" />
        <div className="front">
          <div className="stone" />
          <div className="grass" />
          <div className="grass grass-1" />
          <div className="grass grass-2" />
          <div className="reed" />
          <div className="reed reed-1" />
        </div>
      </div>
      <div className="logo" />
      <Absolute
        as="h1"
        bottom="50vh"
        left="50vmin"
        fontSize={7}
        color="white"
        m={0}
        sx={{
          zIndex: "100",
          opacity: 0.5,
          textShadow: "0 0 5px hsl(0, 0%, 0%, .5)"
        }}
      >
        Dashboard
      </Absolute>
    </>
  );
};
