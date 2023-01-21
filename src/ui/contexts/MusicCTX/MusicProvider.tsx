import { MusicCTX } from ".";
import { PropsWithChildren, useState, useEffect } from "react";
import Playlist from "../../../infra/playlist.json";

function MusicProvider({ children }: PropsWithChildren) {
    const [isPaused, setIsPaused] = useState<boolean>(true);
    const [songName, setSongName] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [currentSong, setCurrentSong] = useState<HTMLAudioElement>(new Audio());
    const [duration, setDuration] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [playlistPosition, setPlaylistPosition] = useState(0);

    useEffect(() => {
        const song = new Audio("audios/just_you_and_i.mp3");
        song.ontimeupdate = () => {
            setProgress(song.currentTime);
        }

        song.onloadedmetadata = () => {
            setCurrentSong(song);
            setDuration(song.duration);
        }
        setSongName("Just You and I");
        setAuthor("Tom Walker");
        console.log("CTX UseEffect");
    }, []);

    function setProgress(seconds: number) {
        currentSong.currentTime = seconds;
        setCurrentTime(seconds);
    }

    function togglePause() {
        isPaused ? currentSong.play() : currentSong.pause();
        setIsPaused(currentSong.paused);
    }

    const isSongLoaded = !!songName && !!author && !!currentSong && !!duration;

    return (
        <MusicCTX.Provider value={{ songLoaded, currentTime, setProgress, duration, isPaused, togglePause, author, songName, currentSong }}>
            {children}
        </MusicCTX.Provider>
    );
}

export default MusicProvider;
