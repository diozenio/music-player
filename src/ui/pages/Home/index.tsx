import { useContext } from "react";
import Player from "../../components/Player";
import { MusicCTX } from "../../contexts/MusicCTX";
import "./styles.css";

function Home() {
    const { author, songName, songLoaded } = useContext(MusicCTX);

    if(songLoaded) {
        return (
            <div className="container">
                <Player style={{ gridArea: "A" }} isVertical={true}>
                    <Player.AlbumCover imageURL="https://cdns-images.dzcdn.net/images/cover/f9a097c4dd46de803574f0450427dd5e/264x264.jpg"></Player.AlbumCover>
                    <Player.Song>{songName}</Player.Song>
                    <Player.Author>{author}</Player.Author>
                    <Player.Controls />
                    <Player.ProgressBar />
                </Player>
                <Player style={{ gridArea: "B" }}>
                    <Player.AlbumCover imageURL="https://cdns-images.dzcdn.net/images/cover/f9a097c4dd46de803574f0450427dd5e/264x264.jpg"></Player.AlbumCover>
                    <Player.Song>{songName}</Player.Song>
                    <Player.Author>{author}</Player.Author>
                    <Player.Controls />
                    <Player.ProgressBar />
                </Player>
                <Player style={{ gridArea: "C" }}>
                    <Player.AlbumCover imageURL="https://cdns-images.dzcdn.net/images/cover/f9a097c4dd46de803574f0450427dd5e/264x264.jpg"></Player.AlbumCover>
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