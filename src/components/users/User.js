import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    department: "",
    id: "",
    salary: ""
  });

  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    var response =  await axios.get('http://frontend.devopstester.online/api/employee/'+id)
  

    setUser(response.data)

  };

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">id: {id}</li>
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">department: {user.department}</li>
        <li className="list-group-item">salary: {user.salary}</li>
      </ul>
    </div>
  );
};

export default User;