import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {getMyRoutines, getUsersMe} from "../api";




const MyRoutines = ({setMyRoutines, myRoutines}) => {

    
    useEffect(() => {

          async function fetchMyRoutines() {
            let token = localStorage.getItem("token");
            const myUsername = await getUsersMe(token);
            console.log(myUsername.username, "&&&&&&&&&&&&&&&&&")
            const myNewRoutines = await getMyRoutines();
            setMyRoutines(myNewRoutines);
          }
          fetchMyRoutines();
      }, []);
    // console.log(myNewRoutines, "!!!!!!!!!!!!!!!!!!!!!$$$$$")
    return (
        <div> Hello </div>
    )
}

export default MyRoutines