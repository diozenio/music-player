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
    const [albumCover, setAlbumCover] = useState<string>("")

    useEffect(() => {
        loadSong();
    }, []);

    useEffect(() => {
        loadSong();
    }, [playlistPosition]);


    function loadSong() {
        const song = new Audio(Playlist[playlistPosition].path);
        song.ontimeupdate = () => {
            setProgress(song.currentTime);
        }

        song.onloadedmetadata = () => {
            setCurrentSong(song);
            setDuration(song.duration);
            isPaused ? song.pause() : song.play();
        }
        setSongName(Playlist[playlistPosition].name);
        setAuthor(Playlist[playlistPosition].author);
        setAlbumCover(Playlist[playlistPosition].cover);
    }


    function clearSong() {
        currentSong.pause();
        setProgress(0);
        setCurrentSong(new Audio());
        setDuration(0);
        setCurrentTime(0);
        setAuthor("");
        setSongName("");
    }

    function togglePause() {
        isPaused ? currentSong.play() : currentSong.pause();
        setIsPaused(currentSong.paused);
    }

    function setProgress(seconds: number) {
        currentSong.currentTime = seconds;
        setCurrentTime(seconds);
    }

    function nextSong() {
        clearSong()
        if (playlistPosition === Playlist.length - 1) {
            setPlaylistPosition(0);
        } else {
            setPlaylistPosition(playlistPosition + 1);
        }
    }

    function previousSong() {
        clearSong()
        if (playlistPosition === 0) {
            setPlaylistPosition(Playlist.length - 1);
        } else {
            setPlaylistPosition(playlistPosition - 1);
        }
    }

    const isSongLoaded = !!songName && !!author && !!currentSong && !!duration;

    return (
        <MusicCTX.Provider value={{ isSongLoaded: isSongLoaded, currentTime, setProgress, duration, isPaused, togglePause, author, songName, currentSong, nextSong, previousSong, albumCover }}>
            {children}
        </MusicCTX.Provider>
    );
}

export default MusicProvider;
