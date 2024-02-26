type ButtonProps = {
    onSelected: (selected: string) => void;
    // btnStyle?: btnStyle;
};

export default function Buttons({ onSelected }: ButtonProps) {
    return (
        <>
            <button className="btn-w100" onClick={() => onSelected("info")}>
                Info
            </button>
            {/* Add a new button for each of the exercises you complete */}
            <button className="btn-w100" onClick={() => onSelected("props1")}>
                Props demo1
            </button>
            <button className="btn-w100" onClick={() => onSelected("list")}>
                List Demo
            </button>
            <button className="btn-w100" onClick={() => onSelected("event1")}>
                Event Demo 1 (Image buttons)
            </button>
        </>
    );
}
