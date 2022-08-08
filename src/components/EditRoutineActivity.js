import React, { useState, useEffect } from "react";
import { editRoutineActivity, getMyRoutines } from "../api";

const EditRoutineActivity = ({
  routineActivityId,
  setMyRoutines,
  myRoutines,
}) => {
  const [count, setCount] = useState(0);
  const [duration, setDuration] = useState(0);

  async function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    const freshRoutineActivity = await editRoutineActivity(
      routineActivityId,
      token,
      count,
      duration
    );

    freshRoutineActivity;
    const newEditedRoutineActivity = await getMyRoutines(username);

    setMyRoutines(newEditedRoutineActivity);
    setCount(0);
    setDuration(0);
  }

  useEffect(() => {}, [myRoutines]);

  return (
    <div>
      <h4>Edit Activity</h4>

      <form onSubmit={handleSubmit}>
        <label>
          Duration
          <input
            type="text"
            onChange={(event) => {
              setDuration(event.target.value);
            }}
          />
        </label>
        <label>
          Count
          <input
            type="text"
            onChange={(event) => {
              setCount(event.target.value);
            }}
          />
        </label>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default EditRoutineActivity;
