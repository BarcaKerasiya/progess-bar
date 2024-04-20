import { useEffect, useState } from "react";

interface progressBarProps {
  value: number;
}
const ProgressBar = ({ value = 0 }: progressBarProps) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
  }, [value]);
  return (
    <>
      <span>Progress Bar</span>
      <div className="progress">
        <span style={{ color: `${percent > 49 ? "white" : "black"}` }}>
          {percent.toFixed()} %
        </span>
        <div style={{ width: `${percent}%` }} />
      </div>
    </>
  );
};

export default ProgressBar;
