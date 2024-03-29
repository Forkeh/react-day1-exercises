import React from "react";
import { BaseProps } from "../types";
import { User, users as usersDB } from "../data/data";
import { useState } from "react";
import "../liftingState.css";
import UserFormControlled from "../components/UserformControlled";
import UserTable from "../components/UserTable";

interface AddEditDeleteFunction {
    (user: User, isDelete: boolean | undefined): void;
}

export default function LiftingState({ title }: BaseProps) {
    const [users, setUsers] = useState(usersDB);
    const [userToEdit, setUserToEdit] = useState<User | undefined>(undefined);

    const addEditDeleteUser: AddEditDeleteFunction = (user, isDelete) => {
        /*
     1) Implement this method, that should add, edit or delete given these conditions
        a) isDelete = true  -> Delete the user
        b) user has an id   -> Edit the user
        c) user does not have an id → Create the user
    */
        if (isDelete) setUsers(users.filter((currUser) => currUser !== user));

        if (user.id) setUsers(users.map((currUser) => (currUser.id === user.id ? user : currUser)));
        
        if (!user.id) {
            const newUser = { ...user, id: users.length + 1 };
            setUsers([...users, newUser]);
        }
    };

    const editUser = (id: number) => {
        /*
     Find the user (in users) given the id and set userToEdit to this user
    */
        setUserToEdit(users.find((u) => u.id === id));
    };
    <h2>{title}</h2>;
    return (
        <>
            <div className="outer">
                <h2 style={{ margin: 0 }}>Root Component</h2>
                <p style={{ margin: 0 }}>
                    This is where ALL the users live (Single Source of truth). <em>User Count:</em>{" "}
                    <b>{users.length}</b>
                </p>
                <p>
                    <em>User To Edit:</em> <b>{JSON.stringify(userToEdit)}</b>
                </p>

                <div className="outer-user-table">
                    <div className="user-table">
                        <UserTable users={users} editUser={editUser} />
                    </div>
                    <div className="user-form">
                        <UserFormControlled
                            title="Add User"
                            onSubmitUser={addEditDeleteUser}
                            defaultUser={userToEdit}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
