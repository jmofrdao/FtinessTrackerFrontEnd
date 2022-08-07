import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getMyRoutines, getUsersMe} from "../api";
import {EditRoutine, RoutineActivity, DeleteRoutine, DeleteRoutineActivity} from './index'
import { NavLink } from "react-router-dom";




const MyRoutines = ({setMyRoutines, myRoutines}) => {
  const [isShown, setIsShown] = useState(false)
  const [isShown2, setIsShown2] = useState(false)
async function fetchMyRoutines() {
const token = localStorage.getItem('token')
const username = localStorage.getItem('username')
const user = await getUsersMe(token)
if (user.username === username) {
  const allMyRoutines = await getMyRoutines (username)
  setMyRoutines(allMyRoutines)
}
}
async function buttonClick () {
  setIsShown(current => !current)
}

async function buttonClick2 () {
  setIsShown2(current => !current)
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
                <DeleteRoutineActivity setMyRoutines={setMyRoutines} myRoutines={myRoutines} routineActivityId={activity.routineActivityId}/>
              </div>
            )
          })
          : null
          }
           {
                localStorage.getItem("token") && myRoutine.creatorName === localStorage.getItem("username") ?
                <>
                <button onClick={buttonClick}>Add Activity to Routine</button>
                {
                  isShown &&
                  
                   <RoutineActivity  myRoutineId={myRoutine.id} setMyRoutines={setMyRoutines} />
                   
                  
                }
                <button onClick={buttonClick2}>Edit Routine</button>
                {
                  isShown2 && 
                  
                  <EditRoutine myRoutineId= {myRoutine.id} myRoutines= {myRoutines} setMyRoutines={setMyRoutines}/> 
                  
                  
                  
                  
              
                }
                
                
                <DeleteRoutine myRoutineId={myRoutine.id} myRoutines={myRoutines} setMyRoutines={setMyRoutines}/>
                </>
                : null
            }
        </div>
      )
    
    })
console.log(myRoutines, 'please')
 
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