import { MusicCTX } from ".";
import { PropsWithChildren, useState, useCallback } from "react";

function MusicProvider({ children }: PropsWithChildren) {
    const [isPaused, setIsPaused] = useState<boolean>(true);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number | undefined>();
    const [title, setTitle] = useState<String>("");
    const [subtitle, setSubtitle] = useState<String>("");

    function resume() { }
    function stop() { }

    return (
        <MusicCTX.Provider value={{ currentTime, setCurrentTime, duration, setDuration, isPaused, setIsPaused, resume, stop, subtitle, setSubtitle, title, setTitle }}>
            {children}
        </MusicCTX.Provider>
    );
}

export default MusicProvider;
