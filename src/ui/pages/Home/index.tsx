import { useContext, useEffect } from "react";
import Player from "../../components/Player";
import { MusicCTX } from "../../contexts/MusicCTX";
import "./styles.css";

function Home() {
    const { author, songName, isSongLoaded, albumCover } = useContext(MusicCTX);

    if(!!isSongLoaded) {
        return (
            <div className="container">
                <Player style={{ gridArea: "A" }} isVertical={true}>
                    <Player.AlbumCover imageURL={albumCover}></Player.AlbumCover>
                    <Player.Song>{songName}</Player.Song>
                    <Player.Author>{author}</Player.Author>
                    <Player.Controls />
                    <Player.ProgressBar />
                </Player>
                <Player style={{ gridArea: "B" }}>
                    <Player.AlbumCover imageURL={albumCover}></Player.AlbumCover>
                    <Player.Song>{songName}</Player.Song>
                    <Player.Author>{author}</Player.Author>
                    <Player.Controls />
                    <Player.ProgressBar />
                </Player>
                <Player style={{ gridArea: "C" }}>
                    <Player.AlbumCover imageURL={albumCover}></Player.AlbumCover>
                    <Player.Song>{songName}</Player.Song>
                    <Player.Author>{author}</Player.Author>
                    <Player.Controls />
                </Player>
            </div>
        )
    }
    
    return (
        <h1>Carregando</h1>
    )
}

export default Home;