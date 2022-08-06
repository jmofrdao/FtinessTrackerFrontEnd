import React, {useEffect, useState} from "react";
import {editRoutine, getAllRoutines, getMyRoutines} from "../api";


const EditRoutine = ({myRoutineId, myRoutines, setMyRoutines}) => {
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");
    const [isPublic, setIsPublic] = useState(null);

    const [error, setError] =useState(null)

    async function handleSubmit(event) {
        event.preventDefault();
        const token = localStorage.getItem("token");
        const username = localStorage.getItem('username')
        const routineId= myRoutineId;
        const freshRoutine = await editRoutine(
            token,
            routineId,
            name,
            goal,
            isPublic,
        );
        if (freshRoutine.error) {
            setError(freshRoutine)
        } else {
            setError(null)
            freshRoutine
            const newEditedRoutine = await getMyRoutines(username)

        setMyRoutines(newEditedRoutine)
        setName("")
        setGoal("")
        }
        
    }

    function handleChange(event) {
        event.preventDefault();
        setIsPublic(current => ! current);
    }
    useEffect(() => {
        
    }, [myRoutines])
    return (
        <>
            <div>
                <div>
                    <h4>Edit Routine</h4>
                    {
                        error && error.message ? <h3>There Is Already A Routine With That Name</h3> : null
                    }
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                        id="Edit"
                        placeholder="Edit Name"
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value)
                        }}
                    />
                    </div>
                        <div>
                         <input
                         id="Goal"
                         placeholder="Edit Goal"
                         value={goal}

                         onChange={(event) => {
                            setGoal(event.target.value)
                         }}
                         />

                        </div>
                        <div>
                            <label htmlFor="isPublic">
                            <input
                            id="isPublic"
                            type="checkbox"
                            name="isPublic"
                            onChange={handleChange}
                            />
                                Is Public?
                            </label>
                        </div>
                        <button type="Submit" id="saveEdit">
                            SAVE EDIT
                        </button>
                </form>
            </div>
        </>
    )
}

export default EditRoutine