import React, {useState} from "react";
import {editRoutine} from "../api";

const EditRoutine = ({element_id, routine, setRoutine}) => {
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");
    const [isPublic, setIsPublic] = useState(null);
}