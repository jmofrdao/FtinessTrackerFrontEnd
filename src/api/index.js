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
   console.log(result, "!!!!!!!!!!!!!")
   const token = result.token
   console.log(token, "!!!!!!!!!!!!!!!!!!!")
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