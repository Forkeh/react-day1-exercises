import { useState } from "react";
import "./App.css";
import PropsDemo from "./exercises/PropsDemo";
import Buttons from "./components/Buttons";
import ListDemo from "./exercises/ListDemo";
import EventDemo1 from "./exercises/EventDemo";
import FormUncontrolled from "./exercises/FormUncontrolled";
import StateDemo1 from "./exercises/StateDemo1";
import StateDemo2 from "./exercises/StateDemo2";
import StateDemo3 from "./exercises/StateDemo3";
import UseEffectDemo from "./exercises/UseEffect";
import FetchDemo1 from "./exercises/FetchDemo";
import LiftingState from "./components/LiftingState";
import ContextDemoApp from "./exercises/ContextDemo";

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
                        {selectedView == "event1" && <EventDemo1 title="Event Demo 1" />}
                        {selectedView == "forms-uncontrolled" && <FormUncontrolled title="Forms Uncontrolled" />}
                        {selectedView == "state1" && <StateDemo1 title="State Demo 1" />}
                        {selectedView == "state2" && <StateDemo2 title="State Demo 2 (Object)" />}
                        {selectedView == "state3" && <StateDemo3 title="State Demo 3 (Array)" />}
                        {selectedView == "useEffect" && <UseEffectDemo title="useEffect Demo" />}
                        {selectedView == "fetch1" && <FetchDemo1 title="Fetch Demo 1" />}
                        {selectedView == "lifting-state" && <LiftingState title="Lifting State Demo" />}
                        {selectedView == "context" && <ContextDemoApp title="Context Demo" />}
                        {/**Add the exercise components you create for each exercise using the key you used for the matching button  */}
                    </div>
                </div>
            </div>
        </>
    );
}
