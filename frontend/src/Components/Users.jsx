import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Users = () => {
  const [users, setusers] = useState([]);
  const { id } = useParams();

  const DeleteUser = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then((user) => console.log(user + "deleted"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((result) => setusers(result.data))
      .catch((err) => console.log(err));
  }, [DeleteUser]);

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <Link to="/create" className="btn btn-success">
        Add+
      </Link>
      <div className="w-50 bg-white rounded p-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <Link
                      to={`/update/${user._id}`}
                      className="btn btn-success"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={(e) => DeleteUser(user._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
