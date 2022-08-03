import { getAllRoutines } from "../api"
import React, {useState, useEffect} from 'react'
import { NavLink } from "react-router-dom"


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
            <div key={routine._id}>
                <h3>Name: {routine.name}</h3>
                <p>Goal: {routine.goal}</p>
                <p>Username: {routine.creatorName}</p>
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