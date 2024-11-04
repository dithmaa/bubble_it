import React from "react";
interface PopitProps {
  className?: string;
  currentScore?: number;
  bubbleStates: boolean[][];
  setBubbleStates: React.Dispatch<React.SetStateAction<boolean[][]>>;
  handleBubbleClick: any;
}
export const Popit: React.FC<PopitProps> = ({
  className,
  currentScore = 9999,
  bubbleStates,
  handleBubbleClick,
  setBubbleStates,
}) => {
  return (
    <div className={className}>
      <div
        className="popit"
        style={{
          backgroundImage: `url('/assets/img/popi.png')`,
          filter: currentScore >= 1000000 ? "invert(1)" : "",
        }}
      >
        <div className="grid">
          {bubbleStates.map((row, rowIndex) => (
            <div key={rowIndex} className="popit-row">
              {row.map((active, colIndex) => (
                <div
                  key={colIndex}
                  className={`cell ${active ? "active" : ""}`}
                  onClick={(event) =>
                    handleBubbleClick(
                      rowIndex,
                      colIndex,
                      setBubbleStates,
                      event
                    )
                  }
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
