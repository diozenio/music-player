import { PropsWithChildren } from 'react';
import "./styles.css";

export default function Author({ children }: PropsWithChildren) {
    return (
        <p id='author'>{children}</p>
    )
}