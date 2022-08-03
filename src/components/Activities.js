import React, { useEffect } from "react"
import { getAllActivities } from "../api"
import { NavLink } from "react-router-dom"





const Activities = ({activities, setActivities, isLoggedIn}) => {
    async function fetchAllActivities (){
        const getActivities = await getAllActivities()
        setActivities(getActivities)
    }

    useEffect(()=> {
        fetchAllActivities()
    }, [])

    const allActivities = activities.map((activity)=> {
        return (
            <div key ={activity._id}>
                <h3>{activity.name}</h3>
                <p>{activity.description}</p>
            </div>
        )
    })
    return (
        <div>
            <h1> Activities</h1>
            { localStorage.getItem('token') && isLoggedIn ?
            <div>
            <NavLink to='/AddActivity'>Add New activity</NavLink>
            </div>
            : null
    }
            <div>{allActivities}</div>
        </div>
    )
}
export default Activities
