import React, {useState, useEffect} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import { getAllActivities, getAllRoutines, routineActivity } from "../api";

const RoutineActivity = ({_id, setRoutines, activityname}) => {
    const [activities, setActivities] = useState ([]) 
    const [count, setCount] = useState ("")
    const [duration, setDuration] = useState("")
    const [selectedActivity, setSelectedActivity] = useState({})
        async function fetchRountineActivities () {
            const getRoutineActivities = await getAllActivities()
            setActivities(getRoutineActivities)
        }

        useEffect(() => {
            fetchRountineActivities()
        }, [])

        async function handleSubmit(event) {
            event.preventDefault()
            const newRoutineActivity = await routineActivity(selectedActivity.id, _id, count, duration) 
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
                        setSelectedActivity(event.target.value)
                    }}>
                        {
                            activities.map((activity) => {
                                return <option value={activity.id}>{activity.name}</option>
                            })
                        }
                        
                        
                    </select>
                    <label>
                        Count
                        <input type="text" value={count} onChange={(event) => {
                            setCount(event.target.value)
                        }}/>
                        
                    </label>
                    <label>
                        Duration
                        <input type="text" value={duration} onChange={(event) => {
                            setDuration(event.target.value)
                        }}/>
                    </label>
                    <button type="submit">SUBMIT</button>
                
            </form>
        </div>
    )
}


export default RoutineActivity;