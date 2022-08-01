const BASE = `https://fitnesstrac-kr.herokuapp.com/api`;

export const loginUser = async (username, password) => {
    try{
        const response = await fetch (`${BASE}/users/login`,
        {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password
                }
            })
        }
        )
        const result = await response.json()
        const token = result.data.token
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
            user: {
                username: username,
                password: password
            }
        })
    
   })
   const result = await response.json()
   const token = result.data.token
   localStorage.setItem("token", token);
  localStorage.setItem("username", username);
   return result;

}