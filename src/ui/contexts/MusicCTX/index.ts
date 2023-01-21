import { createContext } from "react";

interface Props {
    currentSong: HTMLAudioElement;
    togglePause(): void;
    currentTime: number;
    setProgress: (seconds: number) => void;
    duration: number | undefined;
    songName: string;
    author: string;
    isPaused: boolean;
    songLoaded: boolean;
}

export const MusicCTX = createContext({} as Props);