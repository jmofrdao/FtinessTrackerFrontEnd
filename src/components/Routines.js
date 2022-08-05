import { getAllRoutines } from "../api"
import React, {useState, useEffect} from 'react'
import { NavLink } from "react-router-dom"
import {EditRoutine, DeleteRoutine, RoutineActivity} from "./index"



const Routines = ({routines, setRoutines, isLoggedIn}) => {
    async function fetchAllRoutines () {
const fetchRoutines = await getAllRoutines()

setRoutines(fetchRoutines)
    }

    useEffect(()=> {
fetchAllRoutines()
    }, [])
    
    const allRoutines = routines.map((routine)=> {
        

        return (
            <div key={routine.id}>
                <h2>Name: {routine.name}</h2>
                <p>Goal: {routine.goal}</p>
                <p>Username: {routine.creatorName}</p>
                {routine.activities ?
                routine.activities.map((element) => {
            return (
                <div key={element.id}>
                <h2>Activity</h2>
                <h3>Name: {element.name}</h3>
                <p>Description: {element.description}</p>
                <p>Duration: {element.duration}</p>
                </div>
            )
        }): null }
                {
                localStorage.getItem("token") && routine.creatorName === localStorage.getItem("username") ?
                <>
                <RoutineActivity  _id={routine.id} setRoutines={setRoutines} />
                <EditRoutine _id = {routine.id} routines= {routines} setRoutines={setRoutines}/>
                <DeleteRoutine _id={routine.id} routines={routines} setRoutines={setRoutines}/>
                </>
                : null
            }
            </div>
        )

    })
    console.log(allRoutines, "!!!!!!!!!!!!!!!!!!!!")
    return (
        <div>
            <h1>Routines</h1>
            { localStorage.getItem('token') && isLoggedIn ?
            <div>
            <NavLink to='/AddRoutine'>Add New Routine</NavLink>
            </div>
            : null
    }
            <div>{allRoutines}</div>
            </div>
    )
}


export default Routines