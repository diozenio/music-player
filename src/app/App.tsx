import MusicProvider from "../ui/contexts/MusicCTX/MusicProvider";
import Home from "../ui/pages/Home";

export default function App() {
    return (
        <div className="App">
            <MusicProvider>
                <Home />
            </MusicProvider>
        </div>
    )
}
