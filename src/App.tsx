import { useState } from "react";
import "./App.css";
import PropsDemo from "./exercises/PropsDemo";
import Buttons from "./components/Buttons";
import ListDemo from "./exercises/ListDemo";

export default function App() {
    const [selectedView, setSelectedView] = useState("info");

    function handleSelected(selected: string) {
        setSelectedView(selected);
    }

    return (
        <>
            <div className="outer-div-style">
                <div className="header-style">
                    <h2>React Exercises</h2>
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: 1, padding: 10 }}>
                        <Buttons onSelected={handleSelected} />
                    </div>
                    <div className="exercise-style">
                        {selectedView == "info" && <p>All exercises for React day-1</p>}
                        {selectedView == "props1" && <PropsDemo title="Props Demo 1" />}
                        {selectedView == "list" && <ListDemo title="List Demo" />}
                        {/**Add the exercise components you create for each exercise using the key you used for the matching button  */}
                    </div>
                </div>
            </div>
        </>
    );
}
