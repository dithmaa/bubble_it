import React from "react";
import { MarketPage } from "./market-page";
import { BoostPage } from "./boost-page";

export type BoostListsType = {
  id: number;
  price: number;
  level: number;
};
export type FrontEndBoostsType = {
  id: number;
  title: string;
  power: number;
  image: string;
};
interface MarketProps {
  className?: string;
  currentScore: number;
  toShort: (number: string) => void;
  clickPerOne?: number;
  boostsLists: BoostListsType[];
  setShownMenu: (value: boolean) => void;
  setShownMarket: (value: boolean) => void;
  shownScore: number;
  currentOpenedBoost: number;
  setCurrentOpenedBoost: (value: number) => void;
  frontEndBoosts: FrontEndBoostsType[];
  showBoosts: number;
  // isNowBoosting: boolean;
  setShowMenu: (value: boolean) => void;
  setShowGamePage: (value: boolean) => void;
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
  // isNowBoosting,
}) => {
  const [isShowBoostPage, setShowBoostPage] = React.useState<boolean>(false);

  const handleShowBoostPage = (currentPage: number) => {
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
    "assets/img/boosts/2.png",
    "assets/img/boosts/3.png",
    "assets/img/boosts/4.png",
    "assets/img/boosts/5.png",
    "assets/img/boosts/6.png",
    "assets/img/boosts/7.png",
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
            shownScore={shownScore}
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
