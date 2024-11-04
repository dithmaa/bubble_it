"use client";

import React from "react";
import { GamePage } from "./game-page";
interface GameProps {
  className?: string;
}
export const Game: React.FC<GameProps> = ({ className }) => {
  const [bubbleStates, setBubbleStates] = React.useState(
    Array.from({ length: 6 }, () => Array(6).fill(false))
  );
  const [currentScore, setScore] = React.useState(0);

  const [isShowMenu, setShowMenu] = React.useState(true);

  const [percent, setPercent] = React.useState(100);

  return (
    <div className={className}>
      <GamePage
        currentScore={currentScore}
        setScore={setScore}
        bubbleStates={bubbleStates}
        setBubbleStates={setBubbleStates}
        percent={percent}
        setPercent={setPercent}
        isShowMenu={isShowMenu}
        setShowMenu={setShowMenu}
      />
    </div>
  );
};
