import { addNewRoutine } from "../api"
import React, {useState} from 'react'
import { useNavigate } from "react-router-dom"

const AddRoutine = ({routines, setRoutines}) => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [goal, setGoal] = useState('')
    const [isPublic, setIsPublic] = useState(null)
    const [error, setError] = useState(null)
    async function handleSubmit (event) {
        event.preventDefault()
        const token = localStorage.getItem('token')
        const freshRoutine = await addNewRoutine(
            token,
            name,
            goal,
            isPublic
        )
        if (freshRoutine.error) {
            setError(freshRoutine)
        } else {
        setError(null)
        setRoutines([...routines, freshRoutine])
        navigate('/MyRoutines')
        }
    }

    function handleCB(event) {
        event.preventDefault();
        setIsPublic(current => !current)
      }
    return (
        <div> 
            <h1>Add A Routine</h1>
            {
            error && error.message ? <h3>Cannot create a Routine with a name that already exists.</h3>: null



        }
         <form
         onSubmit={handleSubmit}
         >
             <label>
                 Name: 
                 <input type='text' value={name} placeholder="Add Name" className='addName' onChange={(event)=> setName(event.target.value)}/>
             </label>
             <label>Goal:
                 <input type='text' value={goal} placeholder='Add Goal' className='addGoal' onChange={(event)=> setGoal(event.target.value)}/>
             </label>
             <label htmlFor="isPublic" id="isPublic">
            Public?
            <input type="checkbox" id="public" onChange={handleCB} />
          </label>
          <button type='submit'>CREATE</button>
         </form>
        </div>
    )
}

export default AddRoutine