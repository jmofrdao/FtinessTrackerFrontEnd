import { getAllRoutines } from "../api"
import React, {useState, useEffect} from 'react'


const Routines = ({routines, setRoutines}) => {
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
                <h3>{routine.name}</h3>
                <p>{routine.goal}</p>
                <p>{routine.creatorName}</p>
            </div>
        )
    })
    return (
        <div>
            <h1>Routines</h1>
            {allRoutines}
            </div>
    )
}


export default Routines