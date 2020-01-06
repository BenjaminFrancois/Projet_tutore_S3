import axios from 'axios'
import { GET_GROUP_BY_ID, GET_ALL_SESSION_TYPES, POST_NEW_SESSION, GET_MY_SESSION } from '../types/apiConst'

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

/**
 *  APIgetSession
 * 
 * GET information about a session
 * @param {*} sessionID the session id to get information from
 * 
 */
const APIgetSession = (sessionID) => {
    return axios.get(`${GET_GROUP_BY_ID}/${sessionID}`,{
        cancelToken: source.token,
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    })
}

/** 
 * APIgetMySession
 * 
 * GET information about all my session
 */
const APIgetMySession = () => {
    return axios.get(GET_MY_SESSION,{
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    })
}



/**
 * APIgetSessionTypes
 * 
 * Return all types for a session
 */
const APIgetSessionTypes = () => {
    return axios.get(GET_ALL_SESSION_TYPES, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    })
}


const APIpostNewSession = (code, type, groups ) => {
  
    let group = groups  //TODO: test to remove
    let module = code
    console.log(module ,type, group);
    return axios.post(POST_NEW_SESSION,
        { module, type, group }, 
        {headers: { Authorization: "Bearer " + localStorage.getItem("token") }}
        )
}


export {APIgetSession, APIgetSessionTypes, APIpostNewSession, APIgetMySession}