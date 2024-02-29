import React from "react";
interface Props {
    image: string;
    onClick: () => void;
}

export default function ImageButton({ image, onClick }: Props) {
    return (
        <button className="imageButton" onClick={onClick}>
            <img style={{ width: "50px", height: "50px" }} src={image} alt="image" />
        </button>
    );
}
