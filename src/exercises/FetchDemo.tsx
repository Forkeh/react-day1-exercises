import React from "react";
import { useEffect, useState } from "react";
import { BaseProps } from "../types";
const SERVER_URL = "http://localhost:8000/users";
const DELAY = 500;

type User = { id: number; name: string };
const controller = new AbortController();

//Utility function to fetch a user from the server
function fetchUser(userId: number, options?: object): Promise<User> {
    return fetch(`${SERVER_URL}/${userId}?delay=${DELAY}`, options).then((res) => res.json());
}

export default function FetchDemo1({ title }: BaseProps) {
    // const [userId, setUserId] = useState(1);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUser(1, { signal: controller.signal }).then((response) => {
            setLoading(true);
            setUser(response);
            console.log(response);
            setLoading(false);
        });

        // fetchUserData();

        // return () => {
        //     controller.abort();
        // };
    }, []);

    //Use this to fetch the next user when the "Next User" button is clicked
    //Make sure you understand why we don't need useEffect here
    const fetchNextUser = async () => {
        const nextUser = user!.id + 1 <= 15 ? user!.id + 1 : 1;
        //Do not set call setUserId here it will cause an extra render
        setLoading(true);
        const theUser = await fetchUser(nextUser);
        setLoading(false);
        setUser(theUser);
    };

    //Call fetchUser(..) immediately when the component is mounted
    // fetchUser(userId).then((response) => {
    //     setUser(response);
    //     console.log(response);
    // });

    return (
        <>
            <h2>{title}</h2>
            {loading ? <div>Loading...</div> : <div>{JSON.stringify(user)}</div>}
            <br />
            <button onClick={fetchNextUser}>Next User</button>
        </>
    );
}
