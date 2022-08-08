import React, { useState } from "react";
import { addNewActivity } from "../api";
import { useNavigate } from "react-router-dom";
import "./css/AddActivity.css";

const AddActivity = ({ setActivities, activities }) => {
  const navigate = useNavigate();
  const [name, setNameActivity] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  async function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const freshActivity = await addNewActivity(token, name, description);

    if (freshActivity.error) {
      setError(freshActivity);
    } else {
      setError(null);
      setActivities([...activities, freshActivity]);
      navigate("/Activities");
    }
  }
  return (
    <>
      <div id="addActivityTitle">Add an Activity</div>
      {error && error.message ? <h3>{error.message}</h3> : null}
      <form onSubmit={handleSubmit}>
        <div className="inputDiv">
          <input
            className="name"
            placeholder="Add Name"
            type="text"
            value={name}
            onChange={(event) => {
              setNameActivity(event.target.value);
            }}
          />
          <input
            className="description"
            placeholder="Add Description"
            type="text"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>
        <button type="submit" className="createButton">
          CREATE
        </button>
      </form>
    </>
  );
};

export default AddActivity;
