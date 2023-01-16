import Player from "../../components/Player";
import "./styles.css";

function Home() {
    return (
        <div className="container">
            <Player style={{ gridArea: "A" }} isVertical={true}>
                <Player.AlbumCover imageURL="https://cdns-images.dzcdn.net/images/cover/f9a097c4dd46de803574f0450427dd5e/264x264.jpg"></Player.AlbumCover>
                <Player.Song>Just you and I</Player.Song>
                <Player.Author>Tom Walker</Player.Author>
                <Player.Controls />
                <Player.ProgressBar />
            </Player>
            <Player style={{ gridArea: "B" }}>
                <Player.AlbumCover imageURL="https://cdns-images.dzcdn.net/images/cover/f9a097c4dd46de803574f0450427dd5e/264x264.jpg"></Player.AlbumCover>
                <Player.Song>Just you and I</Player.Song>
                <Player.Author>Tom Walker</Player.Author>
                <Player.Controls />
                <Player.ProgressBar />
            </Player>
            <Player style={{ gridArea: "C" }}>
                <Player.AlbumCover imageURL="https://cdns-images.dzcdn.net/images/cover/f9a097c4dd46de803574f0450427dd5e/264x264.jpg"></Player.AlbumCover>
                <Player.Song>Just you and I</Player.Song>
                <Player.Author>Tom Walker</Player.Author>
                <Player.Controls />
            </Player>
        </div>

    )
}

export default Home;