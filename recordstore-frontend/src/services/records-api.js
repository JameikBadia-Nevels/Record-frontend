import axios from 'axios'

const URL = 'http://localhost:3003/records/'

export const getRecords = () => {
    const response = axios.get(URL)
    return response 
}

export const getRecord = (id) =>{
    const response = axios.get(URL + id)
    return response 
}

export const deleteRecord = (id) => {
    const response = axios.delete(URL + id)
    return response
}

export const createRecord = (add) => {
    const response = axios.post(URL, add)
    return response 
}

export const editRecord = (id, updatedRecord) => {
    const response = axios.put(URL + id, updatedRecord)
    return response
}