import React from "react";
import Lottie from "react-lottie-player";

import animationJson from "/public/animation.json";

export default function Animation() {
  return (
    <>
      <div className="flex justify-end ">
        <Lottie
          loop
          animationData={animationJson}
          play
          style={{ width: 550, height: 550 }}
        />
      </div>
    </>
  );
}
