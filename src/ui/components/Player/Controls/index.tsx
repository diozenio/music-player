import React, { useContext } from 'react'
import { MusicCTX } from '../../../contexts/MusicCTX';
import "./styles.css";

export default function Controls() {
    const { isPaused, resume, pause } = useContext(MusicCTX);

    const handlePause = () => {
        if (isPaused) {
            resume();
        } else {
            pause();
        }
    }

    return (
        <div className='controls-container'>
            <span className="material-symbols-rounded">fast_rewind</span>
            <span className="material-symbols-rounded" onClick={handlePause}>{isPaused ? "play_arrow" : "pause"}</span>
            <span className="material-symbols-rounded">fast_forward</span>
        </div>
    )
}
