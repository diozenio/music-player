import "./styles.css";
import { useEffect, useState } from "react";


export default function ProgressBar() {
  const [progress, setProgress] = useState<number>(0);
  const [isHolding, setIsHolding] = useState<boolean>();

  useEffect(() => {
    // TO DO
  }, [progress])


  return (
    <div className="progress-container">
      <div className="track"
        onMouseMove={(e) => { if (isHolding) setProgress(e.pageX - e.currentTarget.offsetLeft); }}
        onMouseDown={() => { setIsHolding(true) }}
        onMouseUp={(e) => {
          setIsHolding(false),
            setProgress(e.pageX - e.currentTarget.offsetLeft);
        }}
      >
        <div className="track-progress" style={{ width: progress }}>
        </div>
      </div>
      <div className="time">
        <p>00:00</p>
        <p>03:14</p>
      </div>
    </div>
  )
}
