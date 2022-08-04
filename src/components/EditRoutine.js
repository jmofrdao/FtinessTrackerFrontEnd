import React, {useEffect, useState} from "react";
import {editRoutine, getAllRoutines} from "../api";


const EditRoutine = ({_id, routines, setRoutines}) => {
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");
    const [isPublic, setIsPublic] = useState(null);

    const [error, setError] =useState(null)

    async function handleSubmit(event) {
        event.preventDefault();
        const token = localStorage.getItem("token");
        const routineId= _id;
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
            const newEditedRoutine = await getAllRoutines()

        setRoutines(newEditedRoutine)
        setName("")
        setGoal("")
        }
        
    }

    function handleChange(event) {
        event.preventDefault();
        setIsPublic(current => ! current);
    }
    useEffect(() => {
        
    }, [routines])
    return (
        <>
            <div>
                <div>
                    <h4>Edit Routine</h4>
                    {
                        error && error.message ? <h3>There Is Already A Post With That Name</h3> : null
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