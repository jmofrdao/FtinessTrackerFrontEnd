import React, { useEffect } from "react"
import { getAllActivities } from "../api"
import { NavLink } from "react-router-dom"
import "./css/Activities.css"





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
                <h3>Name: {activity.name}</h3>
                <p>Description: {activity.description}</p>
            </div>
        )
    })
    return (
        <div className="activitiesDiv">
            <h1 id="activitiesTitle"> Activities</h1>
            { localStorage.getItem('token') && isLoggedIn ?
            <div>
            <NavLink to='/AddActivity' id="activitiesNavLink">Add New activity</NavLink>
            </div>
            : null
    }
            <div>{allActivities}</div>
        </div>
    )
}
export default Activities
