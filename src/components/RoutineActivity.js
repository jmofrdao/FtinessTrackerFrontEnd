import React, {useState, useEffect} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import { getAllActivities, getAllRoutines, routineActivity } from "../api";

const RoutineActivity = ({_id, setRoutines, activityname}) => {
    const [activities, setActivities] = useState ([]) 
    const [count, setCount] = useState (0)
    const [duration, setDuration] = useState(0)
    const [selectedActivity, setSelectedActivity] = useState([])
        async function fetchRountineActivities () {
            const getRoutineActivities = await getAllActivities()
            setSelectedActivity([getRoutineActivities[0].id, getRoutineActivities[0].name])
            setActivities(getRoutineActivities)
        }

        useEffect(() => {
            fetchRountineActivities()
        }, [])

        async function handleSubmit(event) {
            event.preventDefault()
            console.log(selectedActivity[0],"%%%%%%%%%%%%%%%%%")
            const newRoutineActivity = await routineActivity(selectedActivity[0], _id, count, duration) 
            newRoutineActivity
            const addedRoutineActivity = await getAllRoutines()
            setRoutines(addedRoutineActivity)
        }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Activities
                </label>
                    <select value={selectedActivity} onChange={(event) => {
                        console.log(event.target.value, "*************")
                        setSelectedActivity(event.target.value.split(","))
                    }}>
                        {
                            activities.map((activity) => {
                                return <option value={`${activity.id}, ${activity.name}`}>{activity.name}</option>
                            })
                        }
                        
                        
                    </select>
                    <label>
                        Count
                        <input type="text" onChange={(event) => {
                            setCount(event.target.value)
                        }}/>
                        
                    </label>
                    <label>
                        Duration
                        <input type="text" onChange={(event) => {
                            setDuration(event.target.value)
                        }}/>
                    </label>
                    <button type="submit">SUBMIT</button>
                
            </form>
        </div>
    )
}


export default RoutineActivity;