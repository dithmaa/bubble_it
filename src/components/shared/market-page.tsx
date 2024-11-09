import { cn } from "@/src/lib/utils";
import React from "react";
// import { toShort } from "@/src/hooks/handleCount";
import { BoostSkeletton } from "./boost-skeletton";
import { BoostItem } from "./boost-item";

type BoostListsType = {
  id: number;
  price: number;
  level: number;
  title: string;
};

type FrontEndBoostsType = {
  id: number;
  title: string;
  power: number;
  image: string;
};

interface MarketPageProps {
  className?: string;
  shownScore: number;
  toShort: (value: string) => void;
  frontEndBoosts: FrontEndBoostsType[];
  boostsLists: BoostListsType[];
  showBoosts: number;
  handleShowBoostPage: (value: number) => void;
  currentScore: number;
  images: string[];
}
export const MarketPage: React.FC<MarketPageProps> = ({
  className,
  frontEndBoosts,
  shownScore,
  toShort,
  boostsLists,
  showBoosts,
  handleShowBoostPage,
  currentScore,
  images,
}) => {
  const [isBoostLoaded, setBoostLoad] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setBoostLoad(true);
    }, 1000);
  }, []);

  return (
    <div className={cn("container", className)}>
      <div className="market-offer">
        <img src="assets/img/market_icon_big.png" />
        <h2>Бусты</h2>
      </div>
      <div className="current-score-place">
        <span>Твой баланс:</span>
        <p>
          <img
            className="buba-score-icon"
            src={"assets/img/icon-boost-1.png"}
            alt="Buba Icon"
          />
          {shownScore < 1000000 ? shownScore : toShort(String(shownScore))}
        </p>
      </div>
      <div className="market-options">
        <h4 className="market-options__title">Мощность клика</h4>
        <div className="market-options__wrapper">
          {isBoostLoaded
            ? boostsLists
              ? boostsLists.map((boost, index) => {
                  return (
                    <BoostItem
                      boost={boost}
                      showBoosts={showBoosts}
                      index={index}
                      handleShowBoostPage={handleShowBoostPage}
                      images={images}
                      frontEndBoosts={frontEndBoosts}
                      currentScore={currentScore}
                      key={index}
                    />
                  );
                })
              : ""
            : [1, 2, 3, 4, 5, 6, 7].map((item) => {
                return (
                  <div key={item} style={{ margin: "5px 0" }}>
                    <BoostSkeletton key={item} index={item} />
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};
