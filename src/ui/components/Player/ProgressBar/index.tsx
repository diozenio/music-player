import "./styles.css";
import { useContext, useEffect, useRef, useState } from "react";
import { MusicCTX } from "../../../contexts/MusicCTX";
import convertCurrentTime from "../../../../core/utils/convertCurrentTime";


export default function ProgressBar() {
  const { duration, setProgress, currentTime } = useContext(MusicCTX);
  const inputRef = useRef<any>();
  const [isHolding, setIsHolding] = useState(false);
  useEffect(() => {
    if (!isHolding) {
      inputRef.current.value = currentTime;
    }
  }, [currentTime])

  return (
    <div className="progress-container" draggable={false}>
      <input draggable={false} type="range" defaultValue={0} min={0} max={duration} ref={inputRef}
        onMouseDown={() => {
          setIsHolding(true);
        }}
        onMouseUp={(e) => {
          setProgress(parseInt(e.currentTarget.value));
          setIsHolding(false);
        }}
      />
      <div className="time">
        <p>{convertCurrentTime(currentTime)}</p>
        <p>{convertCurrentTime(duration!)}</p>
      </div>
    </div>
  );
}
