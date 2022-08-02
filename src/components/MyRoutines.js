import React from "react";
import {useNavigate} from "react-router-dom";
import {getMyRoutines, getUsersMe} from "../api";




const MyRoutines = ({setMyRoutines, myRoutines}) => {
    
    // useEffect(() => {
    //     let token = localStorage.getItem("token");
    //     let token2 = getUsersMe(token);
    //     if (token === token2) {
    //       async function fetchMyRoutines() {
    //         const myNewRoutines = await getMyRoutines();
    //         setMyRoutines(myNewRoutines);
    //       }
    //       fetchMyRoutines();
    //     }
    //   }, []);
    
    return (
        <div>Hello</div>
    )
}

export default MyRoutines