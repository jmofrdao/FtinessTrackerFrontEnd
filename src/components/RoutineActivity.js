import React, {useState} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import { getAllActivities } from "../api";

const RoutineActivity = () => {
    const [activity, setActivity] = useState ([]) 
        async function fetchRountineActivities () {
            const getRoutineActivities = await getAllActivities()
            setActivity(getRoutineActivities)
        }

        useState(() => {
            fetchRountineActivities()
        }, [])

        
    
    return(
        <div>
            <form>
                <label>
                    Activities
                </label>
                    <select value={activity} onChange={setActivity}>
                        <option>
                        {
                            activity.map((element) => {
                                return <option value={element.name}>{element.name}</option>
                            })
                        }
                        </option>
                    </select>
                
            </form>
        </div>
    )
}


export default RoutineActivity;