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
                {
                localStorage.getItem("token") && routine.creatorName === localStorage.getItem("username") ?
                <>
                <button><RoutineActivity/></button>
                <EditRoutine _id = {routine.id} routines= {routines} setRoutines={setRoutines}/>
                <DeleteRoutine _id={routine.id} routines={routines} setRoutines={setRoutines}/>
                </>
                : null
            }
            </div>
        )
    })
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