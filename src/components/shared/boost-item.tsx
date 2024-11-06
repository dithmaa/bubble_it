import React from "react";
interface BoostItemProps {
  index: number;
}
export const BoostItem: React.FC<BoostItemProps> = ({
  boost,
  index,
  showBoosts,
  handleShowBoostPage,
  boostImageLock,
  images,
  frontEndBoosts,
  currentScore,
}) => {
  return (
    <div
      key={boost.id}
      className={index >= showBoosts ? "option disabled" : "option"}
      onClick={() => handleShowBoostPage(index)}
    >
      <div className="option-img">
        <img
          src={index >= showBoosts ? "assets/img/lock.png" : images[index]}
          alt="option-img"
        />
      </div>
      <div className="option-info">
        <h5>{index >= showBoosts ? "???????" : frontEndBoosts[index].title}</h5>
        <div className="option-info__params">
          <span
            className="option-price"
            style={{
              color: currentScore < boost.price ? "rgb(199 62 62)" : "#5ecf52",
            }}
          >
            {index >= showBoosts ? "??????" : boost.price}
          </span>
          <span className="option-level">
            <span>{boost.level}</span> ур.
          </span>
        </div>
      </div>
    </div>
  );
};
