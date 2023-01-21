import { useContext } from 'react'
import { MusicCTX } from '../../../contexts/MusicCTX';
import "./styles.css";

export default function Controls() {
    const { isPaused, togglePause, previousSong, nextSong } = useContext(MusicCTX);

    return (
        <div className='controls-container'>
            <span className="material-symbols-rounded" onClick={previousSong}>fast_rewind</span>
            <span className="material-symbols-rounded" onClick={togglePause}>{isPaused ? "play_arrow" : "pause"}</span>
            <span className="material-symbols-rounded" onClick={nextSong}>fast_forward</span>
        </div>
    )
}