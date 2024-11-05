import { cn } from "@/src/lib/utils";
import React from "react";
import { toShort } from "@/src/hooks/handleCount";
import { BoostSkeletton } from "./boost-skeletton";
interface MarketPageProps {
  className?: string;
  shownScore: number;
}
export const MarketPage: React.FC<MarketPageProps> = ({
  className,
  frontEndBoosts,
  marketBig,
  shownScore,
  toShort,
  boostImg1,
  boostsLists,
  showBoosts,
  handleShowBoostPage,
  currentScore,
  images,
}) => {
  const [isBoostLoaded, setBoostLoad] = React.useState(false);
  React.useState(() => {
    setTimeout(() => {
      setBoostLoad(1);
    }, 1000);
  }, []);

  return (
    <div className={cn("container", className)}>
      <div className="market-offer">
        <img src="assets/market_icon_big.png" />
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
                      boostImageLock={boostImageLock}
                      images={images}
                      frontEndBoosts={frontEndBoosts}
                      currentScore={currentScore}
                      key={index}
                    />
                  );
                })
              : ""
            : Array(10)
                .fill(5)
                .map((item, index) => {
                  return (
                    <div key={index} style={{ margin: "5px 0" }}>
                      <BoostSkeletton key={index} />
                    </div>
                  );
                })}
        </div>
      </div>
    </div>
  );
};
