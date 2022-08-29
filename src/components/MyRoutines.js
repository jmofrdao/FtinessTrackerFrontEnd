import React, { useEffect, useState } from "react";
import { getMyRoutines, getUsersMe } from "../api";
import {
  EditRoutine,
  RoutineActivity,
  DeleteRoutine,
  DeleteRoutineActivity,
  EditRoutineActivity,
} from "./index";
import { NavLink } from "react-router-dom";
import "./css/MyRoutines.css";

const MyRoutines = ({ setMyRoutines, myRoutines }) => {
  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  async function fetchMyRoutines() {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const user = await getUsersMe(token);
    if (user.username === username) {
      const allMyRoutines = await getMyRoutines(username);
      setMyRoutines(allMyRoutines);
    }
  }
  async function buttonClick() {
    setIsShown((current) => !current);
  }

  async function buttonClick2() {
    setIsShown2((current) => !current);
  }

  async function buttonClick3() {
    setIsShown3((current) => !current);
  }

  useEffect(() => {
    fetchMyRoutines();
  }, []);
  const showMyRoutines = myRoutines.map((myRoutine) => {
    return (
      <div key={myRoutine.id} className="myRoutineBlock">
        <h2>{myRoutine.name}</h2>
        <p>{myRoutine.goal}</p>
        {myRoutine.activities
          ? myRoutine.activities.map((activity) => {
              return (
                <div key={activity.id} className="myRoutinesActivityBlock">
                  <h2>Activity</h2>
                  <h3>Name: {activity.name}</h3>
                  <p>Description: {activity.description}</p>
                  <p>Duration: {activity.duration}</p>
                  <p>Count: {activity.count}</p>
                  <button onClick={buttonClick3}>EDIT ACTIVITY</button>
                  {isShown3 && (
                    <EditRoutineActivity
                      setMyRoutines={setMyRoutines}
                      myRoutines={myRoutines}
                      routineActivityId={activity.routineActivityId}
                    />
                  )}
                  <DeleteRoutineActivity
                    setMyRoutines={setMyRoutines}
                    myRoutines={myRoutines}
                    routineActivityId={activity.routineActivityId}
                  />
                </div>
              );
            })
          : null}
        {localStorage.getItem("token") &&
        myRoutine.creatorName === localStorage.getItem("username") ? (
          <>
            <button onClick={buttonClick}>Add Activity to Routine</button>
            {isShown && (
              <RoutineActivity
                myRoutineId={myRoutine.id}
                setMyRoutines={setMyRoutines}
              />
            )}
            <button onClick={buttonClick2}>Edit Routine</button>
            {isShown2 && (
              <EditRoutine
                myRoutineId={myRoutine.id}
                myRoutines={myRoutines}
                setMyRoutines={setMyRoutines}
              />
            )}

            <DeleteRoutine
              myRoutineId={myRoutine.id}
              myRoutines={myRoutines}
              setMyRoutines={setMyRoutines}
            />
          </>
        ) : null}
      </div>
    );
  });

  return (
    <div>
      <h1 id="myRoutinesTitle">My Routines</h1>
      <div className='addRoutine'>
        <NavLink to="/AddRoutine">Create Routine</NavLink>
      </div>
      {showMyRoutines.length === 0 ?
      <img className='routinePic' src={require('./Pic/running_at_sunset-1296x728-header.webp')}/>
      : showMyRoutines
    }
    </div>
  );
};

export default MyRoutines;
