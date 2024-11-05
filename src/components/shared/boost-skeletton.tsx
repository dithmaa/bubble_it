import React from "react";
interface BoostSkelettonProps {
  className?: string;
}
export const BoostSkeletton: React.FC<BoostSkelettonProps> = ({
  className,
}) => {
  return <div className={className}>BoostSkeletton</div>;
};
