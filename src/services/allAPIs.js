import { base_URL } from "./base_URL"
import { commonAPI } from "./commonAPI"


// upload employee details - post method
export const uploadEmpDetails = async(user) =>{
    return await commonAPI("POST", `${base_URL}/users` ,user)
}

// Display employee details - get method

export const displayEmpDetails = async() =>{
    return await commonAPI("GET", `${base_URL}/users`,"")
}

export const displayEmp = async(id) =>{
    return await commonAPI("GET", `${base_URL}/users/${id}`,"")
}

export const deleteEmpDetails = async(id) =>{
    return await commonAPI("DELETE",`${base_URL}/users/${id}`,{})
}

export const editEmpDetails = async(id,user) =>{
    return await commonAPI("PUT",`${base_URL}/users/${id}`,user)
}