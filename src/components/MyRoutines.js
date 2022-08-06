import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {getMyRoutines, getUsersMe} from "../api";
import {EditRoutine, RoutineActivity, DeleteRoutine} from './index'
import { NavLink } from "react-router-dom";




const MyRoutines = ({setMyRoutines, myRoutines}) => {
async function fetchMyRoutines() {
const token = localStorage.getItem('token')
const username = localStorage.getItem('username')
const user = await getUsersMe(token)
if (user.username === username) {
  const allMyRoutines = await getMyRoutines (username)
  setMyRoutines(allMyRoutines)
}
}
    
    useEffect(() => {
      fetchMyRoutines()
      },[] );
    const showMyRoutines = myRoutines.map((myRoutine)=> {
      return (
        <div key={myRoutine.id}>
          <h2>{myRoutine.name}</h2>
          <p>{myRoutine.goal}</p>
          {myRoutine.activities ? 
          myRoutine.activities.map((activity)=> {
            return (
              <div key={activity.id}>
              <h2>Activity</h2>
                <h3>Name: {activity.name}</h3>
                <p>Description: {activity.description}</p>
                <p>Duration: {activity.duration}</p>
                <p>Count: {activity.count}</p>
              </div>
            )
          })
          : null
          }
           {
                localStorage.getItem("token") && myRoutine.creatorName === localStorage.getItem("username") ?
                <>
                <RoutineActivity  myRoutineId={myRoutine.id} setMyRoutines={setMyRoutines} />
                <EditRoutine myRoutineId= {myRoutine.id} myRoutines= {myRoutines} setMyRoutines={setMyRoutines}/>
                <DeleteRoutine myRoutineId={myRoutine.id} myRoutines={myRoutines} setMyRoutines={setMyRoutines}/>
                </>
                : null
            }
        </div>
      )
    })
    return (
        <div>
          <h1>My Routines</h1>
          <div>
            <NavLink to='/AddRoutine'>Add New Routine</NavLink>
            </div>
          {showMyRoutines}
        </div>
    )
}

export default MyRoutines