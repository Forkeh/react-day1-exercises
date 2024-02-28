import { useState, ChangeEvent } from "react";
import { BaseProps } from "../types";
import { User } from "../data/data";

export default function StateDemo2({ title }: BaseProps) {
    const [user, setUser] = useState<User>({
        id: 1,
        name: "Max Power",
        email: "max.power@email.com",
        isActive: true,
    });

    function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
        
        setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value, isActive: e.target.checked }));
        // user.name = e.target.value;
    }

    return (
        <>
            <h2>{title}</h2>
            <div>
                <p>ID: {user.id}</p>{" "}
            </div>
            <form action="">
                First Name: <input name="name" type="text" value={user.name} onChange={handleNameChange} />
                Email: <input name="email" value={user.email} type="text" onChange={handleNameChange} />
                Active: <input type="checkbox" checked={user.isActive} name="isActive" onChange={handleNameChange} />
            </form>
            <p style={{ marginTop: 15 }}> {JSON.stringify(user)} </p>
        </>
    );
}
