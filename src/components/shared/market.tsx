import React from "react";
import { MarketPage } from "./market-page";
import { BoostPage } from "./boost-page";
interface MarketProps {
  className?: string;
}
export const Market: React.FC<MarketProps> = ({
  className,
  shownScore,
  toShort,
  boostsLists,
  showBoosts,
  frontEndBoosts,
  currentScore,
  setShowMenu,
  setShownMarket,
  setShowGamePage,
  currentOpenedBoost,
  setCurrentOpenedBoost,
}) => {
  const [isShowBoostPage, setShowBoostPage] = React.useState(0);

  const handleShowBoostPage = (currentPage) => {
    setShowBoostPage(true);
    setCurrentOpenedBoost(currentPage);

    // setShownMarket(false);
  };
  const handleBackMarket = () => {
    // if (Number(currentScore) >= 1000000) {
    //   document.querySelector("body").classList.add("green");
    // }
    setShownMarket(false);
    setShowMenu(true);
    setShowGamePage(true);
  };
  const handleBackBoost = () => {
    setShowBoostPage(false);
  };

  const images = [
    "assets/img/boosts/1.png",
    "assets/img/boosts/1.png",
    "assets/img/boosts/1.png",
    "assets/img/boosts/1.png",
    "assets/img/boosts/1.png",
    "assets/img/boosts/1.png",
    "assets/img/boosts/1.png",
  ];

  return (
    <div className={className}>
      <div className="market">
        {isShowBoostPage ? (
          <BoostPage
            handleBackBoost={handleBackBoost}
            frontEndBoosts={frontEndBoosts}
            currentOpenedBoost={currentOpenedBoost}
            boostsLists={boostsLists}
            currentScore={currentScore}
            // handleBoosting={handleBoosting}
            shownScore={shownScore}
            toShort={toShort}
            // isNowBoosting={isNowBoosting}
            images={images}
          />
        ) : (
          ""
        )}
        <div className="container" style={{ alignItems: "start" }}>
          <button className="back" onClick={handleBackMarket}>
            Назад
          </button>
        </div>
        {!isShowBoostPage ? (
          <MarketPage
            shownScore={shownScore}
            toShort={toShort}
            boostsLists={boostsLists}
            showBoosts={showBoosts}
            handleShowBoostPage={handleShowBoostPage}
            frontEndBoosts={frontEndBoosts}
            currentScore={currentScore}
            images={images}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
