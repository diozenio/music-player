import { MusicCTX } from ".";
import { PropsWithChildren, useState, useEffect } from "react";

function MusicProvider({ children }: PropsWithChildren) {
    const [isPaused, setIsPaused] = useState<boolean>(true);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [songName, setSongName] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [currentSong, setCurrentSong] = useState<HTMLAudioElement>(new Audio());
    const [duration, setDuration] = useState<number>(0);


    useEffect(() => {
        const song = new Audio("audios/just_you_and_i.mp3");

        song.onloadedmetadata = () => {
            setCurrentSong(song);
            setDuration(song.duration);
        }

        setSongName("Just You and I");
        setAuthor("Tom Walker");
        console.log("CTX UseEffect");
    }, []);

    const songLoaded = !!songName && !!author && !!currentSong && !!duration;

    function resume() {
        console.log("CTX Resume");
        currentSong.play();
        setIsPaused(false);
    }

    function togglePause() {
        isPaused ? currentSong.play() : currentSong.pause();
        setIsPaused(currentSong.paused);
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
