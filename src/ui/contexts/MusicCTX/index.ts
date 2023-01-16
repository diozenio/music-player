import { createContext } from "react";

interface Props {
    resume(): void;
    stop(): void;
    currentTime: number;
    setCurrentTime: (seconds: number) => void;
    duration: number | undefined;
    setDuration: (seconds: number) => void;
    title: String;
    setTitle: (title: string) => void;
    subtitle: String;
    setSubtitle: (subtitle: string) => void;
    isPaused: boolean;
    setIsPaused: (isPaused: boolean) => void;
}

export const MusicCTX = createContext({} as Props);