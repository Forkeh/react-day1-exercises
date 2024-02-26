import { Fragment } from "react";
import { User } from "../data/data";

interface Props {
    users: User[];
    }

export default function UserTable({ users }: Props) {
  return (
      <table className="simple-table">
          <thead>
              <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>E-Mail</th>
                  <th>Active</th>
                  <th>#</th>
              </tr>
          </thead>
          <tbody>
              {users.map((user) => (
                  <Fragment key={user.id}>
                      <tr>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.isActive ? "Yes" : "No"}</td>
                      </tr>
                  </Fragment>
              ))}
          </tbody>
      </table>
  );
}
