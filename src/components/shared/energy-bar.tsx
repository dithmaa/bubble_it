import React from "react";
interface EnergyBarProps {
  className?: string;
  percent: number;
  setPercent: (value: number) => void;
}
export const EnergyBar: React.FC<EnergyBarProps> = ({
  className = "energy-bar",
  percent,
}) => {
  return (
    <div className={className}>
      <span style={{ width: percent + "%" }}></span>
    </div>
  );
};
