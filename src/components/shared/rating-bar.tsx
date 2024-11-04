import React from "react";
interface RatingBarProps {
  className?: string;
}
export const RatingBar: React.FC<RatingBarProps> = ({
  className = "rating-bar",
}) => {
  return (
    <div
      className={className}
      //   onClick={onClick}
    >
      <img
        style={{ width: "20px" }}
        src="/assets/img/gold.png"
        alt="gold cup"
      />
      <span
        style={{
          paddingLeft: "20px",
          fontSize: "18px",
          color: "#ce7aff",
          fontWeight: "bold",
        }}
      >
        {/* {firstUser[0].clickAmount} */}
        9999
      </span>
      <span style={{ fontSize: "14px", paddingLeft: "10px" }}>
        {/* {firstUser[0].name} */}
        пашатехни
      </span>
    </div>
  );
};
