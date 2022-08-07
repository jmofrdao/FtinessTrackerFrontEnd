import React, {useEffect} from 'react'
import { deleteRoutineActivity, getMyRoutines } from '../api'

const DeleteRoutineActivity = ({setMyRoutines, myRoutines, routineActivityId}) => {
    async function handleDelete (event) {
        event.preventDefault()
        const token = localStorage.getItem('token')

        
        const username = localStorage.getItem('username')
        await deleteRoutineActivity(routineActivityId, token)
        const newMyRoutines = await getMyRoutines (username)
        setMyRoutines(newMyRoutines)
    }
    
    useEffect(()=> {
    
    }, [myRoutines])
        return (
            <div onClick={handleDelete}>
                <button type='submit'>DELETE ACTIVITY</button>
            </div>
        )
}

export default DeleteRoutineActivity