import React, { useEffect } from "react";
import { getMyRoutines, removeRoutine } from "../api";
import "./css/DeleteRoutine.css";

const DeleteRoutine = ({ myRoutines, setMyRoutines, myRoutineId }) => {
  async function handleDelete(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const routineId = myRoutineId;
    const username = localStorage.getItem("username");
    await removeRoutine(token, routineId);
    const newMyRoutines = await getMyRoutines(username);
    setMyRoutines(newMyRoutines);
  }

  useEffect(() => {}, [myRoutines]);
  return (
    <div onClick={handleDelete}>
      <button type="submit" id="deleteRoutine">
        DELETE
      </button>
    </div>
  );
};

export default DeleteRoutine;
