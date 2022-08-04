import React, {useEffect} from 'react'
import { getAllRoutines, removeRoutine } from "../api"

const DeleteRoutine = ({routines, setRoutines, _id}) => {
async function handleDelete (event) {
    event.preventDefault()
    const token = localStorage.getItem('token')
    const routineId = _id
    await removeRoutine(token, routineId)
    const newRoutine = await getAllRoutines()
    setRoutines(newRoutine)
}

useEffect(()=> {

}, [routines])
    return (
        <div onClick={handleDelete}>
            <button type='submit'>DELETE</button>
        </div>
    )
}

export default DeleteRoutine