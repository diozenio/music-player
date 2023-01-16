import { PropsWithChildren } from 'react';
import "./styles.css";

export default function SongName({ children }: PropsWithChildren) {
    return (
        <h1 id='song-name'>{children}</h1>
    )
}