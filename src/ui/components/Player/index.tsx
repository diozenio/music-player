import { CSSProperties, PropsWithChildren, ReactElement, useCallback, useEffect, useState } from "react";
import SongName from "./SongName";
import Author from "./Author";
import Image from "./Image";
import "./styles.css";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

interface PlayerProps {
    children?: ReactElement[];
    isVertical?: boolean;
    style?: CSSProperties
}

const Player = ({ children, isVertical, style }: PlayerProps) => {
    const [layout, setLayout] = useState<ReactElement>();

    useEffect(() => {
        if (!children) return

        buildLayout(children);
    }, []);

    const buildLayout = useCallback((children: ReactElement[]) => {
        setLayout(
            <div className="player-items">
                <div className={isVertical ? "vertical" : "horizontal"}>
                    <div className="image-container" style={{ width: isVertical ? 190 : 84 }}>
                        {children.filter((child) => child["type"] === Image)}
                    </div>
                    <div>
                        {children.filter((child) => child["type"] === SongName || child["type"] === Author)}
                    </div>
                </div>
                {children.filter((child) => child["type"] === Controls || child["type"] === ProgressBar)}
            </div>);
    }, []);


    return <div className="player-card" style={style}>{layout}</div>;
};

Player.Song = SongName;
Player.Author = Author;
Player.AlbumCover = Image;
Player.Controls = Controls;
Player.ProgressBar = ProgressBar;

export default Player;