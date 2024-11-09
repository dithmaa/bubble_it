import React from "react";
import { toShort } from "@/src/hooks/handleCount";

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
interface BoostPageProps {
  className?: string;
  handleBackBoost: () => void;
  frontEndBoosts: FrontEndBoostsType[];
  currentOpenedBoost: number;
  boostsLists: BoostListsType[];
  currentScore: number;
  handleBoosting: () => void;
  shownScore?: number;
  toShort: (value: string) => void;
  isNowBoosting: boolean;
  images: string[];
}
export const BoostPage: React.FC<BoostPageProps> = ({
  className = "boost-page",
  handleBackBoost,
  frontEndBoosts,
  currentOpenedBoost,
  boostsLists,
  currentScore,
  handleBoosting,
  shownScore = 9999,
  isNowBoosting,
  images,
}) => {
  return (
    <div className={className}>
      <div className="container" style={{ alignItems: "start" }}>
        <button className="back" onClick={handleBackBoost}>
          Назад
        </button>
      </div>

      <div className="container">
        <img src={images[currentOpenedBoost]} className="boost-picture" />
        <h3 className="h3">{boostsLists[currentOpenedBoost].title}</h3>
        <span className="boost-info">
          +{frontEndBoosts[currentOpenedBoost].power} за клик при увеличении
          уровня
        </span>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>
            <span
              className="option-price price"
              style={{
                color:
                  currentScore < boostsLists[currentOpenedBoost].price
                    ? "rgb(199 62 62)"
                    : "#5ecf52",
              }}
            >
              {boostsLists[currentOpenedBoost].price}
            </span>
          </p>

          <span className="option-level">
            <span>{boostsLists[currentOpenedBoost].level}</span> уровень
          </span>
        </div>
        <div className="boost-page__bottom">
          <div className="current-score-place" style={{ width: "100%" }}>
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
          <div className="boost-btn-div" style={{ textAlign: "center" }}>
            {isNowBoosting ? (
              <button disabled={true} className="boost-btn">
                Прокачать уровень
              </button>
            ) : currentScore < boostsLists[currentOpenedBoost].price ? (
              <button
                className="boost-btn"
                style={{
                  backgroundColor: "#7d0000",
                  color: "#fff",
                  opacity: "0.5",
                }}
              >
                Не достаточный баланс
              </button>
            ) : (
              <button className="boost-btn" onClick={handleBoosting}>
                Прокачать уровень
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
