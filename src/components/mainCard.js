import { Animation } from "@bsmnt/scrollytelling";
import React from "react";

const MainCard = () => {
  return (
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
            transform: "translateX(100px) rotate3d(0, 0, 1, 210deg) scale(0.5)",
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
  );
};

export default MainCard;
