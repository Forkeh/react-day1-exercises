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
            <button className="btn-w100" onClick={() => onSelected("forms-uncontrolled")}>
                Forms Uncontrolled
            </button>
            <button className="btn-w100" onClick={() => onSelected("state1")}>
                State Demo 1
            </button>
            <button className="btn-w100" onClick={() => onSelected("state2")}>
                State Demo 2 (Object)
            </button>
            <button className="btn-w100" onClick={() => onSelected("state3")}>
                State Demo 3 (Array)
            </button>
            <button className="btn-w100" onClick={() => onSelected("useEffect")}>
                useEffect Demo
            </button>
            <button className="btn-w100" onClick={() => onSelected("fetch1")}>
                Fetch Demo
            </button>
        </>
    );
}
