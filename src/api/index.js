const BASE = "https://fitnesstrac-kr.herokuapp.com/api";

export const loginUser = async (username, password) => {
    try{
        const response = await fetch (`${BASE}/users/login`,
        {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    username: username,
                    password: password
            })
        }
        )
        const result = await response.json()
        const token = result.token
        return token

    } catch (error){
        console.error('Trouble fetching users', error)
    }
}

export const registerPerson = async (username, password) => {
   
    const response = await fetch (`${BASE}/users/register`,
    {
        method:"POST",
        headers: { 'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                username: username,
                password: password,
        })
   })
   const result = await response.json()
   const token = result.token
   localStorage.setItem("token", token);
    localStorage.setItem("username", username);
   return token;

}

export async function getMyRoutines() {
    const response = await fetch(`${BASE}/users/:username/routines`,{
        headers: {
            'Content-Type': 'application/json',

        },
    });
    const result = await response.json();
    return result;
}

export async function getUsersMe(token) {
    const response = await fetch(`${BASE}/users/me`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    const result = await response.json();
    return result;
}

export const getAllRoutines = async () => {
    try {
    const response = await fetch(`${BASE}/routines`, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const result = await response.json()
    console.log(result, 'result')
    if (result.error) throw error
    return result
} catch (error) {
    console.error('Trouble getting routines', error)
}
}

export const getAllActivities = async () => {
    try {
        const response = await fetch(`${BASE}/activities`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const result = await response.json()
        console.log(result, 'result')
        if (result.error) throw error
        return result
    } catch (error) {
        console.error('Trouble getting routines', error)
    }
}

export const addNewActivity = async ( token, nameActivity, description) => {
    const response = await fetch(`${BASE}/activities`, {
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
                name: nameActivity,
                description: description, 
          }),
    });
    const result = await response.json();
    return result;
}

export const addNewRoutine = async (token, nameRoutine, goal, isPublic) => {
    const response = await fetch(`${BASE}/routines`, {
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            name: nameRoutine,
            goal: goal,
            isPublic: isPublic
        })
    })
    const result = await response.json()
    console.log(result, 'result!!!')
    return result
}

export const editRoutine = async (token, routineId, name, goal, isPublic) => {
    const response = await fetch(`${BASE}/routines/${routineId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
                name: name,
                goal: goal,
                isPublic: isPublic,
        })
    });
    const result = await response.json();
    console.log(result, "!@!#!@#!#@")
    return result;
}