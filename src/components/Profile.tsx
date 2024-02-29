import React from "react";

interface Props {
    name: string;
    email: string;
    isActive: boolean;
    singleLine?: boolean;
}

export default function Profile({ name, email, isActive, singleLine }: Props) {
    return (
        <>
            {!singleLine ? (
                <>
                    <h3>Name: {name}</h3>
                    <p>email: {email}</p>
                    <p>Active: {isActive ? "Yes" : "No"}</p>
                </>
            ) : (
                <div>
                    Name: {name} - E-mail: {email} - Active: {isActive ? "Yes" : "No"}
                </div>
            )}
        </>
    );
}
