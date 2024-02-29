import React from "react";
import Profile from "../components/Profile";
import { BaseProps } from "../types";
import { useState } from "react";

export default function PropsDemo({ title }: BaseProps) {
    const [showHorizontal, setShowHorizontal] = useState(false);
    return (
        <>
            <h2>{title}</h2>
            Direction:{" "}
            <input type="checkbox" checked={showHorizontal} onChange={() => setShowHorizontal(!showHorizontal)} />
            <Profile name="Max Power" email="mp@email.com" isActive={true} singleLine={showHorizontal} />
            <Profile name="Martin" email="martin@email.com" isActive={false} singleLine={showHorizontal} />
            <Profile name="Søren" email="søren@email.com" isActive={true} singleLine={showHorizontal} />
            {/** Add two or more Profiles, but not until you actually have implemented <Profile />   */}
        </>
    );
}
