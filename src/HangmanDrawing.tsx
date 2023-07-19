import React from "react";

const Head = <div key="head" className="head" />;
const Body = <div key={"body"} className="body" />;
const RightArm = <div key={"rightArm"} className="rightArm" />;
const LeftArm = <div key={"leftArm"} className="leftArm" />;
const RightLeg = <div key={"rightLeg"} className="rightLeg" />;
const LeftLeg = <div key={"leftLeg"} className="leftLeg" />;

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  const BODY_PARTS = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];

  return (
    <div className="drawingBox">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="rope" />
      <div className="top" />
      <div className="pillar" />
      <div className="base" />
    </div>
  );
}

export default HangmanDrawing;
