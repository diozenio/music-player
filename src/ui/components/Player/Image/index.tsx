import "./styles.css";

interface ImageProps {
    imageURL: string
}

export default function Image({ imageURL }: ImageProps) {
    return (
        <img draggable={false} src={imageURL} />
    )
}
