import { MusicCTX } from ".";
import { PropsWithChildren, useState, useCallback } from "react";

function MusicProvider({ children }: PropsWithChildren) {
    const [isPaused, setIsPaused] = useState<boolean>(true);
    const [currentTime, setCurrentTime] = useState<number>(0);
    function resume() {
        console.log("CTX Resume");
        currentSong.play();
        setIsPaused(false);
    }

    function pause() {
        console.log("CTX Pause");
        currentSong.pause();
        setIsPaused(true);
    }

    function resume() { }
    function stop() { }

    return (
        <MusicCTX.Provider value={{ currentTime, setCurrentTime, duration, setDuration, isPaused, setIsPaused, resume, stop, subtitle, setSubtitle, title, setTitle }}>
            {children}
        </MusicCTX.Provider>
    );
}

export default MusicProvider;
