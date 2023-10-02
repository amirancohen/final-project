import { User } from "../auth/Signup";
import { getToken } from "../auth/TokenManager";
import { AllCards } from "../pages/Projectx";
import { AddProjex} from "../pages/Addprojectx";
import { EditCardProject } from "../pages/Editproject";
import { Allmessage } from "../pages/Messagebox";
import { Sendmessag } from "../pages/Sendemail";



const serverUrl = 'http://localhost:3000';
const usersUrl = `${serverUrl}/users`;
const userLoginUrl = `${usersUrl}/signin`; 
const projectUrl = `${serverUrl}/projectx`;
const ordertUrl = `${serverUrl}/orders`;

export const register = async(user: User): Promise<User> => {
    const res = await fetch(`${usersUrl}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user) // body parameter
    });
    return res.json();
}
export const login = async(user: User): Promise<User> => {
    const res = await fetch(`${userLoginUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    return res.json();
}
export const resetPassword = async(email: string): Promise<{userId: string}> => {
    const res = await fetch(`${usersUrl}/reset`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email})
    });
    return res.json();
}

export const updateUserPassword = async(userId: string, password: string): Promise<any> => {
    return fetch(`${usersUrl}/new-password/${userId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({password})
    })
}

export async function projectnew(Addprojectxnew: AddProjex): Promise<AddProjex> {
    
    const res = await fetch(`${projectUrl}`,  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': getToken()
        },
        body: JSON.stringify(Addprojectxnew)
    });
    return res.json();
}
export async function getProjects(): Promise<Array<AllCards>> {
    const res = await fetch(`${projectUrl}`)
     return res.json()
 }
 
 export async function getCardById(id: string): Promise<EditCardProject> {
     const res = await fetch(`${projectUrl}/${id}`, {
         method: 'GET',
         headers: {
             'x-auth-token': getToken()
            }
        });
        return res.json();
    }
    export async function CardUpdate(id: string , EditProject: EditCardProject): Promise<EditCardProject> {
       const res = await fetch(`${projectUrl}/${id}`, {
           method: 'PATCH',
           headers: {
               'Content-Type': 'application/json',
               'x-auth-token': getToken()
           },
           body: JSON.stringify(EditProject)
       })
       return res.json()
   }

   export async function removecard(_id: string): Promise<AllCards> {
    const res = await fetch(`${projectUrl}/${_id}`, {
        method: 'DELETE',
        headers: {
            'x-auth-token': getToken()
        },
    })
    return res.json()
}

export async function sendmenew(Sendemail: Sendmessag): Promise<Sendmessag> {
    const res = await fetch(`${ordertUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Sendemail)
    });
    return res.json();
}
export async function getMessage(): Promise<Array<Allmessage>> {
    const res = await fetch(`${ordertUrl}`)
     return res.json()
 }

 export async function removeorder(_id: string): Promise<Allmessage> {
    const res = await fetch(`${ordertUrl}/${_id}`, {
        method: 'DELETE',
        headers: {
            'x-auth-token': getToken()
        },
    })
    return res.json()
}