"use client";
import React from "react";
import { toShort } from "@/src/hooks/handleCount";
import { Popit } from "./popit";
import { EnergyBar } from "./energy-bar";
import { RatingBar } from "./rating-bar";
interface GamePageProps {
  className?: string;
  shownScore?: number;
  bubbleStates: boolean[][];
  setBubbleStates: React.Dispatch<React.SetStateAction<boolean[][]>>;
  currentScore?: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  percent: number;
  setPercent: (value: number) => void;
  isShowMenu: boolean;
  setShowMenu: (value: boolean) => void;
  clickPerOne?: number;
  energyWait: boolean;
  handlePercent: (value: number) => void;
  handleBubbleClick: (
    rowIndex: number,
    colIndex: number,
    setBubbleStates: React.Dispatch<React.SetStateAction<boolean[][]>>
  ) => void;
}
export const GamePage: React.FC<GamePageProps> = ({
  className,
  clickPerOne = 1,
  shownScore = 9999,
  bubbleStates,
  setBubbleStates,
  currentScore,
  percent,
  setPercent,
  isShowMenu,
  energyWait,
  handlePercent,
  handleBubbleClick,
}) => {
  const sFunc = () => {
    console.log("percent", percent);
    if (percent > 50.1) {
      setTimeout(() => {
        handlePercent(100);
      }, 3000);
    } else if (percent < 50.1) {
      setTimeout(() => {
        handlePercent(50);
        setTimeout(() => {
          handlePercent(100);
        }, 7000);
      }, 1000);
    }
  };
  React.useEffect(() => {
    if (percent <= 100 || !energyWait) {
      sFunc();
    }
  }, [energyWait]);

  return (
    <div className={className}>
      <div className="container">
        <RatingBar
        // onClick={() => setShownRating(true)}
        />

        <div
          className="res"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <span style={{ fontSize: "13px", fontWeight: 100 }}>
            Сила клика: {clickPerOne}
          </span>
          <div
            className="res-score"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              className="buba-score-icon"
              src={"/assets/img/icon-boost-1.png"}
              alt="Buba Icon"
            />
            {shownScore < 1000000 ? shownScore : toShort(String(shownScore))}
          </div>
        </div>
        <>
          <Popit
            currentScore={currentScore}
            bubbleStates={bubbleStates}
            setBubbleStates={setBubbleStates}
            handleBubbleClick={handleBubbleClick}
          />
        </>
        <EnergyBar setPercent={setPercent} percent={percent} />

        {isShowMenu && (
          <nav className="menu">
            {/* <button className="menu__item" onClick={handleShowFriends}>
          <img src={friendIcon} alt="Friend Icon" />
          <span>Друзья</span>
        </button> */}
            <button
              className="menu__item"
              // onClick={handleShowPresent}
            >
              <img src="/assets/img/present.png" alt="Present Icon" />
              <span>Задания</span>
            </button>
            <button
              className="menu__item"
              // onClick={handleShowMarket}
            >
              <img src="/assets/img/market_icon.png" alt="Market Icon" />
              <span>Бусты</span>
            </button>
          </nav>
        )}
      </div>
    </div>
  );
};
