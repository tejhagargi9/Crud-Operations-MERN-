import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [email, setemail] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/update/" + id)
      .then((result) => {
        setname(result.data.name);
        setemail(result.data.email);
        setage(result.data.age);
      })
      .catch((err) => console.log(err));
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/updateUser/" + id, { name, email, age })
      .then((user) => {
        console.log(user);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Update}>
          <h2>Update User</h2>

          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              value={email}
              placeholder="EnterEmail"
              className="form-control"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              type="text"
              placeholder="Enter Age"
              className="form-control"
              value={age}
              onChange={(e) => setage(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
