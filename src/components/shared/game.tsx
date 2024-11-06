"use client";

import React from "react";
import { GamePage } from "./game-page";
import debounce from "lodash.debounce";
import { toShort } from "@/src/hooks/handleCount";
import { frontEndBoosts } from "../../constants/frontEndBoosts";
import { Market } from "./market";

interface GameProps {
  className?: string;
}
export const Game: React.FC<GameProps> = ({ className }) => {
  // ## Интерфейс
  const [isShowMenu, setShowMenu] = React.useState(true);
  const [isShowMarket, setShownMarket] = React.useState(false);
  const [isShowGamePage, setShowGamePage] = React.useState(true);
  // ## Интерфейс #Бусты
  const [boostsLists, setBoostsLists] = React.useState([
    {
      id: 1,
      price: 12502,
      level: 51,
    },
    {
      id: 2,
      price: 59185,
      level: 21,
    },
    {
      id: 3,
      price: 595876,
      level: 26,
    },
    {
      id: 4,
      price: 1331000,
      level: 3,
    },
    {
      id: 5,
      price: 5500000,
      level: 1,
    },
    {
      id: 6,
      price: 16500000,
      level: 1,
    },
    {
      id: 7,
      price: 100000000,
      level: 0,
    },
  ]);
  const [currentOpenedBoost, setCurrentOpenedBoost] = React.useState(0);
  const [isNowBoosting, setIsNowBoosting] = React.useState(0);
  const [showBoosts, setShowBoosts] = React.useState(1);

  // ## Интерфейс #Маркет
  const handleShowMarket = () => {
    // document.querySelector("body").classList.remove("green");
    setShownMarket(true);
    setShowMenu(false);
    setShowGamePage(!isShowGamePage);
  };

  // Энергия
  const [percent, setPercent] = React.useState(100);
  const [energyWait, setEnergyWait] = React.useState(true);
  const handlePercent = (value: number) => {
    // console.log(value);
    setPercent(value);
  };

  const energyDebounce = React.useCallback(
    debounce(() => {
      console.log("Вызов SetEnergyWaiting");
      setEnergyWait(false);
    }, 800),
    []
  );
  // Логика очков

  const [shownScore, setShown] = React.useState(0);
  const [currentScore, setScore] = React.useState(0);

  // Клик на попит
  const [bubbleStates, setBubbleStates] = React.useState(
    Array.from({ length: 6 }, () => Array(6).fill(false))
  );
  const [clickPerOne, setClickPerOne] = React.useState(1);

  const handleBubbleClick = (rowIndex, colIndex, setBubbleStates) => {
    // if (hasInviter) {
    //   setTimeout(() => {
    //     updateFriendsListDebounced(
    //       inviterFriendsList,
    //       totalRefScore,
    //       inviterId
    //     );
    //   }, 0);
    // }
    if (percent > 0) {
      // if ("vibrate" in navigator) {
      //   navigator.vibrate(200); // Продолжительность вибрации в миллисекундах
      // } else {
      //   alert("API для вибрации не поддерживается в вашем браузере.");
      // }

      // setShowNUM(true);
      let newPercent = percent;
      newPercent -= 3;
      handlePercent(newPercent);

      // tg.HapticFeedback.impactOccurred("rigid");

      const newBubbleStates = [...bubbleStates];
      newBubbleStates[rowIndex][colIndex] =
        !newBubbleStates[rowIndex][colIndex];
      setBubbleStates(newBubbleStates);
      setEnergyWait(true);

      energyDebounce();
      setScore((prevScore) => {
        prevScore = Number(clickPerOne) + Number(prevScore);
        // const refGiftCount = Math.ceil(clickPerOne * 0.15);
        // setTotalRefScore((prev) => prev + refGiftCount);
        // giveGiftScore(refId, totalRefScore);
        // increaseCount(prevScore);
        setShown(prevScore);
        // console.log("refGiftCount", refGiftCount);
        return prevScore;
      });
    } else {
      // console.log("Ваша энергия на исходе");
      setPercent(0);
    }
  };

  return (
    <div className={className}>
      {isShowMarket ? (
        <Market
          currentScore={currentScore}
          toShort={toShort}
          // handleBoosting={handleBoosting}
          clickPerOne={clickPerOne}
          boostsLists={boostsLists}
          setShownMenu={setShowMenu}
          setShownMarket={setShownMarket}
          shownScore={shownScore}
          currentOpenedBoost={currentOpenedBoost}
          setCurrentOpenedBoost={setCurrentOpenedBoost}
          frontEndBoosts={frontEndBoosts}
          showBoosts={showBoosts}
          isNowBoosting={isNowBoosting}
          // boostImg1={boostImg1}
          setShowMenu={setShowMenu}
          setShowGamePage={setShowGamePage}
        />
      ) : (
        ""
      )}

      {isShowGamePage && (
        <GamePage
          currentScore={currentScore}
          setScore={setScore}
          bubbleStates={bubbleStates}
          setBubbleStates={setBubbleStates}
          percent={percent}
          setPercent={setPercent}
          isShowMenu={isShowMenu}
          setShowMenu={setShowMenu}
          clickPerOne={clickPerOne}
          energyWait={energyWait}
          handlePercent={handlePercent}
          shownScore={shownScore}
          handleBubbleClick={handleBubbleClick}
          handleShowMarket={handleShowMarket}
        />
      )}
    </div>
  );
};
