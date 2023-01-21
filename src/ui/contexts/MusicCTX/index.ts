import { createContext } from "react";

interface Props {
    currentSong: HTMLAudioElement;
    togglePause(): void;
    nextSong(): void;
    previousSong(): void;
    currentTime: number;
    setProgress: (seconds: number) => void;
    duration: number | undefined;
    songName: string;
    author: string;
    isPaused: boolean;
    isSongLoaded: boolean;
    albumCover: string;
}

export const MusicCTX = createContext({} as Props);