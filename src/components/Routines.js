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
                <p>Count: {element.count}</p>
                </div>
            )
        }): null }
                
            </div>
        )

    })
    console.log(allRoutines, "!!!!!!!!!!!!!!!!!!!!")
    return (
        <div>
            <h1>Routines</h1>
           
            <div>{allRoutines}</div>
            </div>
    )
}


export default Routines