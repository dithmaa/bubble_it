import React from "react";
interface BoostSkelettonProps {
  className?: string;
}
export const BoostSkeletton: React.FC<BoostSkelettonProps> = ({
  className,
  index,
}) => {
  return (
    <div key={index} className={className}>
      BoostSkeletton
    </div>
  );
};
